"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfRoleDescription = instanceOfRoleDescription;
exports.RoleDescriptionFromJSON = RoleDescriptionFromJSON;
exports.RoleDescriptionFromJSONTyped = RoleDescriptionFromJSONTyped;
exports.RoleDescriptionToJSON = RoleDescriptionToJSON;
exports.RoleDescriptionToJSONTyped = RoleDescriptionToJSONTyped;
const Role_1 = require("./Role");
/**
 * Check if a given object implements the RoleDescription interface.
 */
function instanceOfRoleDescription(value) {
    if (!('individual' in value) || value['individual'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
function RoleDescriptionFromJSON(json) {
    return RoleDescriptionFromJSONTyped(json, false);
}
function RoleDescriptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'individual': json['individual'],
        'role': (0, Role_1.RoleFromJSON)(json['role']),
    };
}
function RoleDescriptionToJSON(json) {
    return RoleDescriptionToJSONTyped(json, false);
}
function RoleDescriptionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'individual': value['individual'],
        'role': (0, Role_1.RoleToJSON)(value['role']),
    };
}
