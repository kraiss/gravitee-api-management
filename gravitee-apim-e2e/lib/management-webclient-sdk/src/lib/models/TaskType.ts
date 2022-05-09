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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TaskType {
    SUBSCRIPTIONAPPROVAL = 'SUBSCRIPTION_APPROVAL',
    INREVIEW = 'IN_REVIEW',
    REQUESTFORCHANGES = 'REQUEST_FOR_CHANGES',
    USERREGISTRATIONAPPROVAL = 'USER_REGISTRATION_APPROVAL',
    PROMOTIONAPPROVAL = 'PROMOTION_APPROVAL'
}

export function TaskTypeFromJSON(json: any): TaskType {
    return TaskTypeFromJSONTyped(json, false);
}

export function TaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskType {
    return json as TaskType;
}

export function TaskTypeToJSON(value?: TaskType | null): any {
    return value as any;
}

