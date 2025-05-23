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
export const UsageSummaryGranularity = {
    Minutes: 'minutes',
    Hours: 'hours',
    Days: 'days',
    Months: 'months',
    Years: 'years'
} as const;
export type UsageSummaryGranularity = typeof UsageSummaryGranularity[keyof typeof UsageSummaryGranularity];


export function instanceOfUsageSummaryGranularity(value: any): boolean {
    for (const key in UsageSummaryGranularity) {
        if (Object.prototype.hasOwnProperty.call(UsageSummaryGranularity, key)) {
            if (UsageSummaryGranularity[key as keyof typeof UsageSummaryGranularity] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UsageSummaryGranularityFromJSON(json: any): UsageSummaryGranularity {
    return UsageSummaryGranularityFromJSONTyped(json, false);
}

export function UsageSummaryGranularityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageSummaryGranularity {
    return json as UsageSummaryGranularity;
}

export function UsageSummaryGranularityToJSON(value?: UsageSummaryGranularity | null): any {
    return value as any;
}

export function UsageSummaryGranularityToJSONTyped(value: any, ignoreDiscriminator: boolean): UsageSummaryGranularity {
    return value as UsageSummaryGranularity;
}

