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

import { mapValues } from '../runtime';
import type { Provenance } from './Provenance';
import {
    ProvenanceFromJSON,
    ProvenanceFromJSONTyped,
    ProvenanceToJSON,
    ProvenanceToJSONTyped,
} from './Provenance';
import type { Symbology } from './Symbology';
import {
    SymbologyFromJSON,
    SymbologyFromJSONTyped,
    SymbologyToJSON,
    SymbologyToJSONTyped,
} from './Symbology';

/**
 * 
 * @export
 * @interface AddDataset
 */
export interface AddDataset {
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    name?: string;
    /**
     * 
     * @type {Array<Provenance>}
     * @memberof AddDataset
     */
    provenance?: Array<Provenance> | null;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    sourceOperator: string;
    /**
     * 
     * @type {Symbology}
     * @memberof AddDataset
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddDataset
     */
    tags?: Array<string> | null;
}

/**
 * Check if a given object implements the AddDataset interface.
 */
export function instanceOfAddDataset(value: object): value is AddDataset {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('sourceOperator' in value) || value['sourceOperator'] === undefined) return false;
    return true;
}

export function AddDatasetFromJSON(json: any): AddDataset {
    return AddDatasetFromJSONTyped(json, false);
}

export function AddDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDataset {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'displayName': json['displayName'],
        'name': json['name'] == null ? undefined : json['name'],
        'provenance': json['provenance'] == null ? undefined : ((json['provenance'] as Array<any>).map(ProvenanceFromJSON)),
        'sourceOperator': json['sourceOperator'],
        'symbology': json['symbology'] == null ? undefined : SymbologyFromJSON(json['symbology']),
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}

export function AddDatasetToJSON(json: any): AddDataset {
    return AddDatasetToJSONTyped(json, false);
}

export function AddDatasetToJSONTyped(value?: AddDataset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'displayName': value['displayName'],
        'name': value['name'],
        'provenance': value['provenance'] == null ? undefined : ((value['provenance'] as Array<any>).map(ProvenanceToJSON)),
        'sourceOperator': value['sourceOperator'],
        'symbology': SymbologyToJSON(value['symbology']),
        'tags': value['tags'],
    };
}

