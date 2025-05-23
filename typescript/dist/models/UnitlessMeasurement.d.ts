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
export declare const UnitlessMeasurementTypeEnum: {
    readonly Unitless: "unitless";
};
export type UnitlessMeasurementTypeEnum = typeof UnitlessMeasurementTypeEnum[keyof typeof UnitlessMeasurementTypeEnum];
/**
 * Check if a given object implements the UnitlessMeasurement interface.
 */
export declare function instanceOfUnitlessMeasurement(value: object): value is UnitlessMeasurement;
export declare function UnitlessMeasurementFromJSON(json: any): UnitlessMeasurement;
export declare function UnitlessMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnitlessMeasurement;
export declare function UnitlessMeasurementToJSON(json: any): UnitlessMeasurement;
export declare function UnitlessMeasurementToJSONTyped(value?: UnitlessMeasurement | null, ignoreDiscriminator?: boolean): any;
