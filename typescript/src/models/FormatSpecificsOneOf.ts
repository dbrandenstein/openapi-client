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
import type { FormatSpecificsOneOfCsv } from './FormatSpecificsOneOfCsv';
import {
    FormatSpecificsOneOfCsvFromJSON,
    FormatSpecificsOneOfCsvFromJSONTyped,
    FormatSpecificsOneOfCsvToJSON,
    FormatSpecificsOneOfCsvToJSONTyped,
} from './FormatSpecificsOneOfCsv';

/**
 * 
 * @export
 * @interface FormatSpecificsOneOf
 */
export interface FormatSpecificsOneOf {
    /**
     * 
     * @type {FormatSpecificsOneOfCsv}
     * @memberof FormatSpecificsOneOf
     */
    csv: FormatSpecificsOneOfCsv;
}

/**
 * Check if a given object implements the FormatSpecificsOneOf interface.
 */
export function instanceOfFormatSpecificsOneOf(value: object): value is FormatSpecificsOneOf {
    if (!('csv' in value) || value['csv'] === undefined) return false;
    return true;
}

export function FormatSpecificsOneOfFromJSON(json: any): FormatSpecificsOneOf {
    return FormatSpecificsOneOfFromJSONTyped(json, false);
}

export function FormatSpecificsOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatSpecificsOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'csv': FormatSpecificsOneOfCsvFromJSON(json['csv']),
    };
}

export function FormatSpecificsOneOfToJSON(json: any): FormatSpecificsOneOf {
    return FormatSpecificsOneOfToJSONTyped(json, false);
}

export function FormatSpecificsOneOfToJSONTyped(value?: FormatSpecificsOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csv': FormatSpecificsOneOfCsvToJSON(value['csv']),
    };
}

