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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OGCWFSApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class OGCWFSApi extends runtime.BaseAPI {
    /**
     * Get WFS Capabilities
     */
    wfsCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wfsCapabilitiesHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wfsCapabilitiesHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wfsCapabilitiesHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wfsCapabilitiesHandler().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wfs/{workflow}?request=GetCapabilities`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))).replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"service"}}`, encodeURIComponent(String(requestParameters['service']))).replace(`{${"request"}}`, encodeURIComponent(String(requestParameters['request']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Get WFS Capabilities
     */
    wfsCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wfsCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Features
     */
    wfsFeatureHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wfsFeatureHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wfsFeatureHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wfsFeatureHandler().');
            }
            if (requestParameters['typeNames'] == null) {
                throw new runtime.RequiredError('typeNames', 'Required parameter "typeNames" was null or undefined when calling wfsFeatureHandler().');
            }
            if (requestParameters['bbox'] == null) {
                throw new runtime.RequiredError('bbox', 'Required parameter "bbox" was null or undefined when calling wfsFeatureHandler().');
            }
            const queryParameters = {};
            if (requestParameters['version'] != null) {
                queryParameters['version'] = requestParameters['version'];
            }
            if (requestParameters['service'] != null) {
                queryParameters['service'] = requestParameters['service'];
            }
            if (requestParameters['request'] != null) {
                queryParameters['request'] = requestParameters['request'];
            }
            if (requestParameters['typeNames'] != null) {
                queryParameters['typeNames'] = requestParameters['typeNames'];
            }
            if (requestParameters['bbox'] != null) {
                queryParameters['bbox'] = requestParameters['bbox'];
            }
            if (requestParameters['time'] != null) {
                queryParameters['time'] = requestParameters['time'];
            }
            if (requestParameters['srsName'] != null) {
                queryParameters['srsName'] = requestParameters['srsName'];
            }
            if (requestParameters['namespaces'] != null) {
                queryParameters['namespaces'] = requestParameters['namespaces'];
            }
            if (requestParameters['count'] != null) {
                queryParameters['count'] = requestParameters['count'];
            }
            if (requestParameters['sortBy'] != null) {
                queryParameters['sortBy'] = requestParameters['sortBy'];
            }
            if (requestParameters['resultType'] != null) {
                queryParameters['resultType'] = requestParameters['resultType'];
            }
            if (requestParameters['filter'] != null) {
                queryParameters['filter'] = requestParameters['filter'];
            }
            if (requestParameters['propertyName'] != null) {
                queryParameters['propertyName'] = requestParameters['propertyName'];
            }
            if (requestParameters['queryResolution'] != null) {
                queryParameters['queryResolution'] = requestParameters['queryResolution'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wfs/{workflow}?request=GetFeature`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GeoJsonFromJSON)(jsonValue));
        });
    }
    /**
     * Get WCS Features
     */
    wfsFeatureHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wfsFeatureHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.OGCWFSApi = OGCWFSApi;
