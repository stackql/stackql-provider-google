--- 
title: environment_config
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_config
  - apigee
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>environment_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environment_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.environment_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_deployed_config"
    values={[
        { label: 'organizations_environments_get_deployed_config', value: 'organizations_environments_get_deployed_config' }
    ]}
>
<TabItem value="organizations_environments_get_deployed_config">

Successful response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the environment configuration in the following format: `organizations/&#123;org&#125;/environments/&#123;env&#125;/configs/&#123;config&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>The latest runtime configurations for add-ons. (id: GoogleCloudApigeeV1RuntimeAddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="arcConfigLocation" /></td>
    <td><code>string</code></td>
    <td>The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.</td>
</tr>
<tr>
    <td><CopyableCode code="clientIpResolutionConfig" /></td>
    <td><code>object</code></td>
    <td>The algorithm to resolve IP. (id: GoogleCloudApigeeV1EnvironmentConfigClientIPResolutionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time that the environment configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectors" /></td>
    <td><code>array</code></td>
    <td>List of data collectors used by the deployments in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="debugMask" /></td>
    <td><code>object</code></td>
    <td>Debug mask that applies to all deployments in the environment. (id: GoogleCloudApigeeV1DebugMask)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentGroups" /></td>
    <td><code>array</code></td>
    <td>List of deployment groups in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="envScopedRevisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes.</td>
</tr>
<tr>
    <td><CopyableCode code="featureFlags" /></td>
    <td><code>object</code></td>
    <td>Feature flags inherited from the organization and environment.</td>
</tr>
<tr>
    <td><CopyableCode code="flowhooks" /></td>
    <td><code>array</code></td>
    <td>List of flow hooks in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardProxyUri" /></td>
    <td><code>string</code></td>
    <td>The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayConfigLocation" /></td>
    <td><code>string</code></td>
    <td>The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.</td>
</tr>
<tr>
    <td><CopyableCode code="keystores" /></td>
    <td><code>array</code></td>
    <td>List of keystores in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging.</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Name of the PubSub topic for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceReferences" /></td>
    <td><code>array</code></td>
    <td>List of resource references in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>List of resource versions in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="sequenceNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>DEPRECATED: Use revision_id.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>List of target servers in the environment. Disabled target servers are not displayed.</td>
</tr>
<tr>
    <td><CopyableCode code="traceConfig" /></td>
    <td><code>object</code></td>
    <td>Trace configurations. Contains config for the environment and config overrides for specific API proxies. (id: GoogleCloudApigeeV1RuntimeTraceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#organizations_environments_get_deployed_config"><CopyableCode code="organizations_environments_get_deployed_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets the deployed configuration for an environment.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_get_deployed_config"
    values={[
        { label: 'organizations_environments_get_deployed_config', value: 'organizations_environments_get_deployed_config' }
    ]}
>
<TabItem value="organizations_environments_get_deployed_config">

Gets the deployed configuration for an environment.

```sql
SELECT
name,
addonsConfig,
arcConfigLocation,
clientIpResolutionConfig,
createTime,
dataCollectors,
debugMask,
deploymentGroups,
deployments,
envScopedRevisionId,
featureFlags,
flowhooks,
forwardProxyUri,
gatewayConfigLocation,
keystores,
provider,
pubsubTopic,
resourceReferences,
resources,
revisionId,
sequenceNumber,
targets,
traceConfig,
uid
FROM google.apigee.environment_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>
