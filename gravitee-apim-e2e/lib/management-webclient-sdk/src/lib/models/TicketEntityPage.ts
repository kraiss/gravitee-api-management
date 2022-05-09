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
    TicketEntity,
    TicketEntityFromJSON,
    TicketEntityFromJSONTyped,
    TicketEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface TicketEntityPage
 */
export interface TicketEntityPage {
    /**
     * 
     * @type {Array<TicketEntity>}
     * @memberof TicketEntityPage
     */
    content?: Array<TicketEntity>;
    /**
     * 
     * @type {number}
     * @memberof TicketEntityPage
     */
    pageElements?: number;
    /**
     * 
     * @type {number}
     * @memberof TicketEntityPage
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TicketEntityPage
     */
    totalElements?: number;
}

export function TicketEntityPageFromJSON(json: any): TicketEntityPage {
    return TicketEntityPageFromJSONTyped(json, false);
}

export function TicketEntityPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketEntityPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(TicketEntityFromJSON)),
        'pageElements': !exists(json, 'pageElements') ? undefined : json['pageElements'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
    };
}

export function TicketEntityPageToJSON(value?: TicketEntityPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(TicketEntityToJSON)),
        'pageElements': value.pageElements,
        'pageNumber': value.pageNumber,
        'totalElements': value.totalElements,
    };
}


