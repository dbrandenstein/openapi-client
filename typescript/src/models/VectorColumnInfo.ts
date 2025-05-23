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
import type { Measurement } from './Measurement';
import {
    MeasurementFromJSON,
    MeasurementFromJSONTyped,
    MeasurementToJSON,
    MeasurementToJSONTyped,
} from './Measurement';
import type { FeatureDataType } from './FeatureDataType';
import {
    FeatureDataTypeFromJSON,
    FeatureDataTypeFromJSONTyped,
    FeatureDataTypeToJSON,
    FeatureDataTypeToJSONTyped,
} from './FeatureDataType';

/**
 * 
 * @export
 * @interface VectorColumnInfo
 */
export interface VectorColumnInfo {
    /**
     * 
     * @type {FeatureDataType}
     * @memberof VectorColumnInfo
     */
    dataType: FeatureDataType;
    /**
     * 
     * @type {Measurement}
     * @memberof VectorColumnInfo
     */
    measurement: Measurement;
}



/**
 * Check if a given object implements the VectorColumnInfo interface.
 */
export function instanceOfVectorColumnInfo(value: object): value is VectorColumnInfo {
    if (!('dataType' in value) || value['dataType'] === undefined) return false;
    if (!('measurement' in value) || value['measurement'] === undefined) return false;
    return true;
}

export function VectorColumnInfoFromJSON(json: any): VectorColumnInfo {
    return VectorColumnInfoFromJSONTyped(json, false);
}

export function VectorColumnInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorColumnInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'dataType': FeatureDataTypeFromJSON(json['dataType']),
        'measurement': MeasurementFromJSON(json['measurement']),
    };
}

export function VectorColumnInfoToJSON(json: any): VectorColumnInfo {
    return VectorColumnInfoToJSONTyped(json, false);
}

export function VectorColumnInfoToJSONTyped(value?: VectorColumnInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dataType': FeatureDataTypeToJSON(value['dataType']),
        'measurement': MeasurementToJSON(value['measurement']),
    };
}

