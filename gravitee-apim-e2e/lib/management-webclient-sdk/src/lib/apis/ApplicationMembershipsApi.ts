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
    ApplicationMembership,
    ApplicationMembershipFromJSON,
    ApplicationMembershipToJSON,
    MemberEntity,
    MemberEntityFromJSON,
    MemberEntityToJSON,
    MembershipListItem,
    MembershipListItemFromJSON,
    MembershipListItemToJSON,
    TransferOwnership,
    TransferOwnershipFromJSON,
    TransferOwnershipToJSON,
} from '../models';

export interface AddOrUpdateApplicationMemberRequest {
    application: string;
    envId: string;
    orgId: string;
    applicationMembership: ApplicationMembership;
}

export interface DeleteApplicationMemberRequest {
    user: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationMemberPermissionsRequest {
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationMembersRequest {
    application: string;
    envId: string;
    orgId: string;
}

export interface TransferApplicationOwnershipRequest {
    application: string;
    envId: string;
    orgId: string;
    transferOwnership: TransferOwnership;
}

/**
 * 
 */
export class ApplicationMembershipsApi extends runtime.BaseAPI {

    /**
     * User must have the MANAGE_MEMBERS permission to use this service
     * Add or update an application member
     */
    async addOrUpdateApplicationMemberRaw(requestParameters: AddOrUpdateApplicationMemberRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling addOrUpdateApplicationMember.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling addOrUpdateApplicationMember.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling addOrUpdateApplicationMember.');
        }

        if (requestParameters.applicationMembership === null || requestParameters.applicationMembership === undefined) {
            throw new runtime.RequiredError('applicationMembership','Required parameter requestParameters.applicationMembership was null or undefined when calling addOrUpdateApplicationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/members`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationMembershipToJSON(requestParameters.applicationMembership),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the MANAGE_MEMBERS permission to use this service
     * Add or update an application member
     */
    async addOrUpdateApplicationMember(requestParameters: AddOrUpdateApplicationMemberRequest): Promise<void> {
        await this.addOrUpdateApplicationMemberRaw(requestParameters);
    }

    /**
     * User must have the MANAGE_MEMBERS permission to use this service
     * Remove an application member
     */
    async deleteApplicationMemberRaw(requestParameters: DeleteApplicationMemberRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteApplicationMember.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling deleteApplicationMember.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling deleteApplicationMember.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteApplicationMember.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/members`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the MANAGE_MEMBERS permission to use this service
     * Remove an application member
     */
    async deleteApplicationMember(requestParameters: DeleteApplicationMemberRequest): Promise<void> {
        await this.deleteApplicationMemberRaw(requestParameters);
    }

    /**
     * User must have the APPLICATION_MEMBER permission to use this service
     * Get application members
     */
    async getApplicationMemberPermissionsRaw(requestParameters: GetApplicationMemberPermissionsRequest): Promise<runtime.ApiResponse<Array<MemberEntity>>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationMemberPermissions.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationMemberPermissions.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationMemberPermissions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/members/permissions`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MemberEntityFromJSON));
    }

    /**
     * User must have the APPLICATION_MEMBER permission to use this service
     * Get application members
     */
    async getApplicationMemberPermissions(requestParameters: GetApplicationMemberPermissionsRequest): Promise<Array<MemberEntity>> {
        const response = await this.getApplicationMemberPermissionsRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the READ permission to use this service
     * List application members
     */
    async getApplicationMembersRaw(requestParameters: GetApplicationMembersRequest): Promise<runtime.ApiResponse<Array<MembershipListItem>>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationMembers.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationMembers.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationMembers.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/members`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MembershipListItemFromJSON));
    }

    /**
     * User must have the READ permission to use this service
     * List application members
     */
    async getApplicationMembers(requestParameters: GetApplicationMembersRequest): Promise<Array<MembershipListItem>> {
        const response = await this.getApplicationMembersRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the TRANSFER_OWNERSHIP permission to use this service
     * Transfer the ownership of the APPLICATION
     */
    async transferApplicationOwnershipRaw(requestParameters: TransferApplicationOwnershipRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling transferApplicationOwnership.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling transferApplicationOwnership.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling transferApplicationOwnership.');
        }

        if (requestParameters.transferOwnership === null || requestParameters.transferOwnership === undefined) {
            throw new runtime.RequiredError('transferOwnership','Required parameter requestParameters.transferOwnership was null or undefined when calling transferApplicationOwnership.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/members/transfer_ownership`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransferOwnershipToJSON(requestParameters.transferOwnership),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the TRANSFER_OWNERSHIP permission to use this service
     * Transfer the ownership of the APPLICATION
     */
    async transferApplicationOwnership(requestParameters: TransferApplicationOwnershipRequest): Promise<void> {
        await this.transferApplicationOwnershipRaw(requestParameters);
    }

}
