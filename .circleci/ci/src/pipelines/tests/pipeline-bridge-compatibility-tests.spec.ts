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
import * as fs from 'fs';
import { generateBridgeCompatibilityTestsConfig } from '../pipeline-bridge-compatibility-tests';

describe('Run bridge compatibility tests', () => {
  it('should generate bridge compatibility tests pipeline', () => {
    const result = generateBridgeCompatibilityTestsConfig({
      action: 'bridge_compatibility_tests',
      branch: 'master',
      sha1: '784ff35ca',
      changedFiles: [],
      buildNum: '1234',
      buildId: '1234',
      graviteeioVersion: '4.2.0',
      isDryRun: false,
      apimVersionPath: '',
    });

    const expected = fs.readFileSync(`./src/pipelines/tests/resources/bridge-compatibility-tests/bridge-compatibility-tests.yml`, 'utf-8');
    expect(result.stringify()).toStrictEqual(expected);
  });
});
