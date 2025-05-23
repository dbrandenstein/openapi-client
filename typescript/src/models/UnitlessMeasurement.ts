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
 * @interface UnitlessMeasurement
 */
export interface UnitlessMeasurement {
    /**
     * 
     * @type {string}
     * @memberof UnitlessMeasurement
     */
    type: UnitlessMeasurementTypeEnum;
}


/**
 * @export
 */
export const UnitlessMeasurementTypeEnum = {
    Unitless: 'unitless'
} as const;
export type UnitlessMeasurementTypeEnum = typeof UnitlessMeasurementTypeEnum[keyof typeof UnitlessMeasurementTypeEnum];


/**
 * Check if a given object implements the UnitlessMeasurement interface.
 */
export function instanceOfUnitlessMeasurement(value: object): value is UnitlessMeasurement {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function UnitlessMeasurementFromJSON(json: any): UnitlessMeasurement {
    return UnitlessMeasurementFromJSONTyped(json, false);
}

export function UnitlessMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnitlessMeasurement {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function UnitlessMeasurementToJSON(json: any): UnitlessMeasurement {
    return UnitlessMeasurementToJSONTyped(json, false);
}

export function UnitlessMeasurementToJSONTyped(value?: UnitlessMeasurement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
    };
}

