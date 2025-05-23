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
import * as runtime from '../runtime';
import type { CreateProject, IdResponse, OrderBy, Project, ProjectListing, ProjectVersion, UpdateProject } from '../models/index';
export interface CreateProjectHandlerRequest {
    createProject: CreateProject;
}
export interface DeleteProjectHandlerRequest {
    project: string;
}
export interface ListProjectsHandlerRequest {
    order: OrderBy;
    offset: number;
    limit: number;
}
export interface LoadProjectLatestHandlerRequest {
    project: string;
}
export interface LoadProjectVersionHandlerRequest {
    project: string;
    version: string;
}
export interface ProjectVersionsHandlerRequest {
    project: string;
}
export interface UpdateProjectHandlerRequest {
    project: string;
    updateProject: UpdateProject;
}
/**
 *
 */
export declare class ProjectsApi extends runtime.BaseAPI {
    /**
     * Create a new project for the user.
     */
    createProjectHandlerRaw(requestParameters: CreateProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>>;
    /**
     * Create a new project for the user.
     */
    createProjectHandler(requestParameters: CreateProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse>;
    /**
     * Deletes a project.
     */
    deleteProjectHandlerRaw(requestParameters: DeleteProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes a project.
     */
    deleteProjectHandler(requestParameters: DeleteProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * List all projects accessible to the user that match the selected criteria.
     */
    listProjectsHandlerRaw(requestParameters: ListProjectsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectListing>>>;
    /**
     * List all projects accessible to the user that match the selected criteria.
     */
    listProjectsHandler(requestParameters: ListProjectsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectListing>>;
    /**
     * Retrieves details about the latest version of a project.
     */
    loadProjectLatestHandlerRaw(requestParameters: LoadProjectLatestHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Project>>;
    /**
     * Retrieves details about the latest version of a project.
     */
    loadProjectLatestHandler(requestParameters: LoadProjectLatestHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Project>;
    /**
     * Retrieves details about the given version of a project.
     */
    loadProjectVersionHandlerRaw(requestParameters: LoadProjectVersionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Project>>;
    /**
     * Retrieves details about the given version of a project.
     */
    loadProjectVersionHandler(requestParameters: LoadProjectVersionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Project>;
    /**
     * Lists all available versions of a project.
     */
    projectVersionsHandlerRaw(requestParameters: ProjectVersionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectVersion>>>;
    /**
     * Lists all available versions of a project.
     */
    projectVersionsHandler(requestParameters: ProjectVersionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectVersion>>;
    /**
     * Updates a project. This will create a new version.
     */
    updateProjectHandlerRaw(requestParameters: UpdateProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Updates a project. This will create a new version.
     */
    updateProjectHandler(requestParameters: UpdateProjectHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
