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
import { SearchCapabilitiesFromJSON, SearchCapabilitiesToJSON, } from './SearchCapabilities';
/**
 * Check if a given object implements the ProviderCapabilities interface.
 */
export function instanceOfProviderCapabilities(value) {
    if (!('listing' in value) || value['listing'] === undefined)
        return false;
    if (!('search' in value) || value['search'] === undefined)
        return false;
    return true;
}
export function ProviderCapabilitiesFromJSON(json) {
    return ProviderCapabilitiesFromJSONTyped(json, false);
}
export function ProviderCapabilitiesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'listing': json['listing'],
        'search': SearchCapabilitiesFromJSON(json['search']),
    };
}
export function ProviderCapabilitiesToJSON(json) {
    return ProviderCapabilitiesToJSONTyped(json, false);
}
export function ProviderCapabilitiesToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'listing': value['listing'],
        'search': SearchCapabilitiesToJSON(value['search']),
    };
}
