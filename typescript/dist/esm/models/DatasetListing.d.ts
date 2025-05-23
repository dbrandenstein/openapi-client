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
import type { Symbology } from './Symbology';
import type { TypedResultDescriptor } from './TypedResultDescriptor';
/**
 *
 * @export
 * @interface DatasetListing
 */
export interface DatasetListing {
    /**
     *
     * @type {string}
     * @memberof DatasetListing
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DatasetListing
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof DatasetListing
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DatasetListing
     */
    name: string;
    /**
     *
     * @type {TypedResultDescriptor}
     * @memberof DatasetListing
     */
    resultDescriptor: TypedResultDescriptor;
    /**
     *
     * @type {string}
     * @memberof DatasetListing
     */
    sourceOperator: string;
    /**
     *
     * @type {Symbology}
     * @memberof DatasetListing
     */
    symbology?: Symbology | null;
    /**
     *
     * @type {Array<string>}
     * @memberof DatasetListing
     */
    tags: Array<string>;
}
/**
 * Check if a given object implements the DatasetListing interface.
 */
export declare function instanceOfDatasetListing(value: object): value is DatasetListing;
export declare function DatasetListingFromJSON(json: any): DatasetListing;
export declare function DatasetListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetListing;
export declare function DatasetListingToJSON(json: any): DatasetListing;
export declare function DatasetListingToJSONTyped(value?: DatasetListing | null, ignoreDiscriminator?: boolean): any;
