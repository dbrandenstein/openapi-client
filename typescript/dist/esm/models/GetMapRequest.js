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
/**
 *
 * @export
 */
export const GetMapRequest = {
    GetMap: 'GetMap'
};
export function instanceOfGetMapRequest(value) {
    for (const key in GetMapRequest) {
        if (Object.prototype.hasOwnProperty.call(GetMapRequest, key)) {
            if (GetMapRequest[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function GetMapRequestFromJSON(json) {
    return GetMapRequestFromJSONTyped(json, false);
}
export function GetMapRequestFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function GetMapRequestToJSON(value) {
    return value;
}
export function GetMapRequestToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
