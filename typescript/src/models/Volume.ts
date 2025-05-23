/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Volume
 */
export interface Volume {
    /**
     * 
     * @type {string}
     * @memberof Volume
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Volume
     */
    path?: string | null;
}

/**
 * Check if a given object implements the Volume interface.
 */
export function instanceOfVolume(value: object): value is Volume {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function VolumeFromJSON(json: any): Volume {
    return VolumeFromJSONTyped(json, false);
}

export function VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Volume {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': json['path'] == null ? undefined : json['path'],
    };
}

export function VolumeToJSON(json: any): Volume {
    return VolumeToJSONTyped(json, false);
}

export function VolumeToJSONTyped(value?: Volume | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'path': value['path'],
    };
}

