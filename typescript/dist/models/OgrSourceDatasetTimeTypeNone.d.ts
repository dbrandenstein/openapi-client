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
/**
 *
 * @export
 * @interface OgrSourceDatasetTimeTypeNone
 */
export interface OgrSourceDatasetTimeTypeNone {
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeNone
     */
    type: OgrSourceDatasetTimeTypeNoneTypeEnum;
}
/**
 * @export
 */
export declare const OgrSourceDatasetTimeTypeNoneTypeEnum: {
    readonly None: "none";
};
export type OgrSourceDatasetTimeTypeNoneTypeEnum = typeof OgrSourceDatasetTimeTypeNoneTypeEnum[keyof typeof OgrSourceDatasetTimeTypeNoneTypeEnum];
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeNone interface.
 */
export declare function instanceOfOgrSourceDatasetTimeTypeNone(value: object): value is OgrSourceDatasetTimeTypeNone;
export declare function OgrSourceDatasetTimeTypeNoneFromJSON(json: any): OgrSourceDatasetTimeTypeNone;
export declare function OgrSourceDatasetTimeTypeNoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeTypeNone;
export declare function OgrSourceDatasetTimeTypeNoneToJSON(json: any): OgrSourceDatasetTimeTypeNone;
export declare function OgrSourceDatasetTimeTypeNoneToJSONTyped(value?: OgrSourceDatasetTimeTypeNone | null, ignoreDiscriminator?: boolean): any;
