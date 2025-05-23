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
import type { FormatSpecificsOneOfCsv } from './FormatSpecificsOneOfCsv';
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
export declare function instanceOfFormatSpecificsOneOf(value: object): value is FormatSpecificsOneOf;
export declare function FormatSpecificsOneOfFromJSON(json: any): FormatSpecificsOneOf;
export declare function FormatSpecificsOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatSpecificsOneOf;
export declare function FormatSpecificsOneOfToJSON(json: any): FormatSpecificsOneOf;
export declare function FormatSpecificsOneOfToJSONTyped(value?: FormatSpecificsOneOf | null, ignoreDiscriminator?: boolean): any;
