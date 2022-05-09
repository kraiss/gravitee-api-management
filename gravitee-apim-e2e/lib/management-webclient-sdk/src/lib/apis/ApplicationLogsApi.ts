/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ApplicationRequest,
    ApplicationRequestFromJSON,
    ApplicationRequestToJSON,
    ApplicationRequestItemSearchLogResponse,
    ApplicationRequestItemSearchLogResponseFromJSON,
    ApplicationRequestItemSearchLogResponseToJSON,
} from '../models';

export interface ExportApplicationLogsAsCSVRequest {
    from?: number;
    to?: number;
    query?: string;
    size?: number;
    page?: number;
    field?: string;
    order?: boolean;
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationLogRequest {
    log: string;
    timestamp?: number;
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationLogsRequest {
    from?: number;
    to?: number;
    query?: string;
    size?: number;
    page?: number;
    field?: string;
    order?: boolean;
    application: string;
    envId: string;
    orgId: string;
}

/**
 * 
 */
export class ApplicationLogsApi extends runtime.BaseAPI {

    /**
     * Export application logs as CSV
     */
    async exportApplicationLogsAsCSVRaw(requestParameters: ExportApplicationLogsAsCSVRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling exportApplicationLogsAsCSV.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling exportApplicationLogsAsCSV.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling exportApplicationLogsAsCSV.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.field !== undefined) {
            queryParameters['field'] = requestParameters.field;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/logs/export`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Export application logs as CSV
     */
    async exportApplicationLogsAsCSV(requestParameters: ExportApplicationLogsAsCSVRequest): Promise<string> {
        const response = await this.exportApplicationLogsAsCSVRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a specific log
     */
    async getApplicationLogRaw(requestParameters: GetApplicationLogRequest): Promise<runtime.ApiResponse<ApplicationRequest>> {
        if (requestParameters.log === null || requestParameters.log === undefined) {
            throw new runtime.RequiredError('log','Required parameter requestParameters.log was null or undefined when calling getApplicationLog.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationLog.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationLog.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationLog.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.timestamp !== undefined) {
            queryParameters['timestamp'] = requestParameters.timestamp;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/logs/{log}`.replace(`{${"log"}}`, encodeURIComponent(String(requestParameters.log))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationRequestFromJSON(jsonValue));
    }

    /**
     * Get a specific log
     */
    async getApplicationLog(requestParameters: GetApplicationLogRequest): Promise<ApplicationRequest> {
        const response = await this.getApplicationLogRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get application logs
     */
    async getApplicationLogsRaw(requestParameters: GetApplicationLogsRequest): Promise<runtime.ApiResponse<ApplicationRequestItemSearchLogResponse>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationLogs.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationLogs.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationLogs.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.field !== undefined) {
            queryParameters['field'] = requestParameters.field;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/logs`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationRequestItemSearchLogResponseFromJSON(jsonValue));
    }

    /**
     * Get application logs
     */
    async getApplicationLogs(requestParameters: GetApplicationLogsRequest): Promise<ApplicationRequestItemSearchLogResponse> {
        const response = await this.getApplicationLogsRaw(requestParameters);
        return await response.value();
    }

}
