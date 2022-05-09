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

import { exists, mapValues } from '../runtime';
import {
    InstanceListItem,
    InstanceListItemFromJSON,
    InstanceListItemFromJSONTyped,
    InstanceListItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface PageInstanceListItem
 */
export interface PageInstanceListItem {
    /**
     * 
     * @type {Array<InstanceListItem>}
     * @memberof PageInstanceListItem
     */
    content?: Array<InstanceListItem>;
    /**
     * 
     * @type {number}
     * @memberof PageInstanceListItem
     */
    pageElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInstanceListItem
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInstanceListItem
     */
    totalElements?: number;
}

export function PageInstanceListItemFromJSON(json: any): PageInstanceListItem {
    return PageInstanceListItemFromJSONTyped(json, false);
}

export function PageInstanceListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInstanceListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(InstanceListItemFromJSON)),
        'pageElements': !exists(json, 'pageElements') ? undefined : json['pageElements'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
    };
}

export function PageInstanceListItemToJSON(value?: PageInstanceListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(InstanceListItemToJSON)),
        'pageElements': value.pageElements,
        'pageNumber': value.pageNumber,
        'totalElements': value.totalElements,
    };
}


