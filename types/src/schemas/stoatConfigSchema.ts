/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StoatConfigSchema {
  version: number;
  enabled?: boolean;
  comment_template_file?: string;
  plugins?: {
    static_hosting?: StaticHostingPluginMap;
    json?: JsonPluginMap;
    image_diff?: ImageDiffPluginMap;
    workflow_dispatch?: WorkflowDispatchPluginMap;
    job_runtime?: JobRuntimePlugin;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface StaticHostingPluginMap {
  [k: string]: StaticHostingPlugin;
}
export interface StaticHostingPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  file_viewer?: boolean;
  [k: string]: unknown;
}
export interface JsonPluginMap {
  [k: string]: JsonPlugin;
}
export interface JsonPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  [k: string]: unknown;
}
export interface ImageDiffPluginMap {
  [k: string]: ImageDiffPlugin;
}
export interface ImageDiffPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  image: string;
  baseline: string;
  [k: string]: unknown;
}
export interface WorkflowDispatchPluginMap {
  [k: string]: WorkflowDispatchPlugin;
}
export interface WorkflowDispatchPlugin {
  filename: string;
  /**
   * A workflow can be triggered for different purposes or scopes (e.g. a deployment workflow for different environments). Set this field to tell Stoat how to identify the purpose or scope of each workflow. Usually the workflow run scope is set by one of the workflow inputs. You can specify the input parameter with the GitHub inputs context syntax: ${{ inputs.<input-parameter-name> }}, or JavaScript template literal syntax ${inputs.<input-parameter-name}. The default value is empty, and all workflow related information will be persisted under "plugins.workflow_dispatch.<task-id>". When this field is not empty, the persistent field is "plugins.workflow_dispatch.<task-id>.<scope-identifier>".
   */
  scope_identifier?: string;
  [k: string]: unknown;
}
export interface JobRuntimePlugin {
  enabled: boolean;
  tracking?: boolean;
  chart?: {
    width?: number;
    height?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}