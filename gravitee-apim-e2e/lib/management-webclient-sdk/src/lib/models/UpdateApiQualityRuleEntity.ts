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
/**
 * 
 * @export
 * @interface UpdateApiQualityRuleEntity
 */
export interface UpdateApiQualityRuleEntity {
    /**
     * 
     * @type {string}
     * @memberof UpdateApiQualityRuleEntity
     */
    api?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateApiQualityRuleEntity
     */
    checked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiQualityRuleEntity
     */
    quality_rule?: string;
}

export function UpdateApiQualityRuleEntityFromJSON(json: any): UpdateApiQualityRuleEntity {
    return UpdateApiQualityRuleEntityFromJSONTyped(json, false);
}

export function UpdateApiQualityRuleEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiQualityRuleEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api': !exists(json, 'api') ? undefined : json['api'],
        'checked': !exists(json, 'checked') ? undefined : json['checked'],
        'quality_rule': !exists(json, 'quality_rule') ? undefined : json['quality_rule'],
    };
}

export function UpdateApiQualityRuleEntityToJSON(value?: UpdateApiQualityRuleEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api': value.api,
        'checked': value.checked,
        'quality_rule': value.quality_rule,
    };
}


