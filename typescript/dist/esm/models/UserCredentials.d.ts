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
 * @interface UserCredentials
 */
export interface UserCredentials {
    /**
     *
     * @type {string}
     * @memberof UserCredentials
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserCredentials
     */
    password: string;
}
/**
 * Check if a given object implements the UserCredentials interface.
 */
export declare function instanceOfUserCredentials(value: object): value is UserCredentials;
export declare function UserCredentialsFromJSON(json: any): UserCredentials;
export declare function UserCredentialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCredentials;
export declare function UserCredentialsToJSON(json: any): UserCredentials;
export declare function UserCredentialsToJSONTyped(value?: UserCredentials | null, ignoreDiscriminator?: boolean): any;
