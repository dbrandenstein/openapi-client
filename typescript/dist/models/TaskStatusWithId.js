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
exports.instanceOfTaskStatusWithId = instanceOfTaskStatusWithId;
exports.TaskStatusWithIdFromJSON = TaskStatusWithIdFromJSON;
exports.TaskStatusWithIdFromJSONTyped = TaskStatusWithIdFromJSONTyped;
exports.TaskStatusWithIdToJSON = TaskStatusWithIdToJSON;
exports.TaskStatusWithIdToJSONTyped = TaskStatusWithIdToJSONTyped;
const TaskStatus_1 = require("./TaskStatus");
/**
 * Check if a given object implements the TaskStatusWithId interface.
 */
function instanceOfTaskStatusWithId(value) {
    if (!('taskId' in value) || value['taskId'] === undefined)
        return false;
    return true;
}
function TaskStatusWithIdFromJSON(json) {
    return TaskStatusWithIdFromJSONTyped(json, false);
}
function TaskStatusWithIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, TaskStatus_1.TaskStatusFromJSONTyped)(json, true)), { 'taskId': json['taskId'] });
}
function TaskStatusWithIdToJSON(json) {
    return TaskStatusWithIdToJSONTyped(json, false);
}
function TaskStatusWithIdToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, TaskStatus_1.TaskStatusToJSONTyped)(value, true)), { 'taskId': value['taskId'] });
}
