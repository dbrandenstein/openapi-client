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
 * @interface ContinuousMeasurement
 */
export interface ContinuousMeasurement {
    /**
     *
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    measurement: string;
    /**
     *
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    type: ContinuousMeasurementTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    unit?: string | null;
}
/**
 * @export
 */
export declare const ContinuousMeasurementTypeEnum: {
    readonly Continuous: "continuous";
};
export type ContinuousMeasurementTypeEnum = typeof ContinuousMeasurementTypeEnum[keyof typeof ContinuousMeasurementTypeEnum];
/**
 * Check if a given object implements the ContinuousMeasurement interface.
 */
export declare function instanceOfContinuousMeasurement(value: object): value is ContinuousMeasurement;
export declare function ContinuousMeasurementFromJSON(json: any): ContinuousMeasurement;
export declare function ContinuousMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuousMeasurement;
export declare function ContinuousMeasurementToJSON(json: any): ContinuousMeasurement;
export declare function ContinuousMeasurementToJSONTyped(value?: ContinuousMeasurement | null, ignoreDiscriminator?: boolean): any;
