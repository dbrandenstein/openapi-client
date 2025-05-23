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
 * Check if a given object implements the IdResponse interface.
 */
export function instanceOfIdResponse(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
export function IdResponseFromJSON(json) {
    return IdResponseFromJSONTyped(json, false);
}
export function IdResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
    };
}
export function IdResponseToJSON(json) {
    return IdResponseToJSONTyped(json, false);
}
export function IdResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
    };
}
