/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { commands, Config, Job, reusable } from '@circleci/circleci-config-sdk';
import { Command } from '@circleci/circleci-config-sdk/dist/src/lib/Components/Commands/exports/Command';
import { config } from '../config';
import { NotifyOnFailureCommand, RestoreMavenJobCacheCommand, SaveMavenJobCacheCommand } from '../commands';
import { orbs } from '../orbs';
import { CircleCIEnvironment } from '../pipelines';
import { isMasterBranch } from '../utils';
import { AzureCliExecutor } from '../executors/executor-azure-cli';

export class DeployOnAzureJob {
  private static jobName = 'job-deploy-on-azure-cluster';
  public static create(dynamicConfig: Config, environment: CircleCIEnvironment): Job {
    const k8sNamespace = `apim-apim-${environment.branch.replace('.', '-')}`;

    dynamicConfig.importOrb(orbs.keeper);

    const restoreMavenJobCacheCmd = RestoreMavenJobCacheCommand.get();
    const saveMavenJobCacheCmd = SaveMavenJobCacheCommand.get();
    const notifyOnFailureCmd = NotifyOnFailureCommand.get(dynamicConfig);
    dynamicConfig.addReusableCommand(restoreMavenJobCacheCmd);
    dynamicConfig.addReusableCommand(saveMavenJobCacheCmd);
    dynamicConfig.addReusableCommand(notifyOnFailureCmd);

    const steps: Command[] = [
      new commands.workspace.Attach({ at: '.' }),
      new reusable.ReusedCommand(orbs.keeper.commands['env-export'], {
        'secret-url': config.secrets.azureApplicationId,
        'var-name': 'AZURE_APPLICATION_ID',
      }),
      new reusable.ReusedCommand(orbs.keeper.commands['env-export'], {
        'secret-url': config.secrets.azureTenant,
        'var-name': 'AZURE_TENANT',
      }),
      new reusable.ReusedCommand(orbs.keeper.commands['env-export'], {
        'secret-url': config.secrets.azureApplicationSecret,
        'var-name': 'AZURE_APPLICATION_SECRET',
      }),
      new commands.Run({
        name: 'Install Kubectl',
        command: `curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl
kubectl version --client=true`,
      }),
      new commands.Run({
        name: 'Rollout pods on "gravitee-devs-preprod-aks-cluster"',
        command: `az login --service-principal -u $AZURE_APPLICATION_ID --tenant $AZURE_TENANT -p $AZURE_APPLICATION_SECRET
az aks get-credentials --admin --resource-group Devs-Preprod-Hosted --name gravitee-devs-preprod-aks-cluster

kubectl rollout restart deployment/${k8sNamespace}-api -n ${k8sNamespace}
kubectl rollout restart deployment/${k8sNamespace}-portal -n ${k8sNamespace}
kubectl rollout restart deployment/${k8sNamespace}-ui -n ${k8sNamespace}
kubectl rollout restart deployment/${k8sNamespace}-gateway -n ${k8sNamespace}
kubectl rollout restart deployment/${k8sNamespace}-bridge-client-gateway -n ${k8sNamespace}
kubectl rollout restart deployment/${k8sNamespace}-ingress-gateway -n ${k8sNamespace}
${
  isMasterBranch(environment.branch)
    ? `
kubectl rollout restart deployment apim-apim-master-ce-apim-ce-api -n apim-apim-master-ce
kubectl rollout restart deployment apim-apim-master-ce-apim-ce-ui -n apim-apim-master-ce`
    : ''
}`,
      }),
      new reusable.ReusedCommand(notifyOnFailureCmd),
    ];
    return new Job(DeployOnAzureJob.jobName, AzureCliExecutor.create('large'), steps);
  }
}
