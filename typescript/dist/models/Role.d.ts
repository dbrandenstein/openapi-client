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
 * @interface Role
 */
export interface Role {
    /**
     *
     * @type {string}
     * @memberof Role
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    name: string;
}
/**
 * Check if a given object implements the Role interface.
 */
export declare function instanceOfRole(value: object): value is Role;
export declare function RoleFromJSON(json: any): Role;
export declare function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role;
export declare function RoleToJSON(json: any): Role;
export declare function RoleToJSONTyped(value?: Role | null, ignoreDiscriminator?: boolean): any;
