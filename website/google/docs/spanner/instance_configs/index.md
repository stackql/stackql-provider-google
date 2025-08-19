--- 
title: instance_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_configs
  - spanner
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

Creates, updates, deletes, gets or lists an <code>instance_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.instance_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instance_configs_get"
    values={[
        { label: 'projects_instance_configs_get', value: 'projects_instance_configs_get' },
        { label: 'projects_instance_configs_list', value: 'projects_instance_configs_list' }
    ]}
>
<TabItem value="projects_instance_configs_get">

A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.

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
    <td>A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`. User instance configuration must start with `custom-`.</td>
</tr>
<tr>
    <td><CopyableCode code="baseConfig" /></td>
    <td><code>string</code></td>
    <td>Base configuration name, e.g. projects//instanceConfigs/nam3, based on which this configuration is created. Only set for user-managed configurations. `base_config` must refer to a configuration of type `GOOGLE_MANAGED` in the same project as this configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="configType" /></td>
    <td><code>string</code></td>
    <td>Output only. Whether this instance configuration is a Google-managed or user-managed configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of this instance configuration as it appears in UIs.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance configuration from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance configuration updates in order to avoid race conditions: An etag is returned in the response which contains instance configurations, and systems are expected to put that etag in the request to update instance configuration to ensure that their change is applied to the same version of the instance configuration. If no etag is provided in the call to update the instance configuration, then the existing instance configuration is overwritten blindly.</td>
</tr>
<tr>
    <td><CopyableCode code="freeInstanceAvailability" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes whether free instances are available to be created in this instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z&#123;0,62&#125;`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]&#123;0,63&#125;`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. Therefore, you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.</td>
</tr>
<tr>
    <td><CopyableCode code="leaderOptions" /></td>
    <td><code>array</code></td>
    <td>Allowed values of the "default_leader" schema option for databases in instances that use this instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="optionalReplicas" /></td>
    <td><code>array</code></td>
    <td>Output only. The available optional replicas to choose from for user-managed configurations. Populated for Google-managed configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="quorumType" /></td>
    <td><code>string</code></td>
    <td>Output only. The `QuorumType` of the instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, the instance configuration is being created or updated. If false, there are no ongoing operations for the instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="replicas" /></td>
    <td><code>array</code></td>
    <td>The geographic placement of nodes in this instance configuration and their replication properties. To create user-managed configurations, input `replicas` must include all replicas in `replicas` of the `base_config` and include one or more replicas in the `optional_replicas` of the `base_config`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current instance configuration state. Applicable only for `USER_MANAGED` configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="storageLimitPerProcessingUnit" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The storage limit in bytes per processing unit.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instance_configs_list">

The response for ListInstanceConfigs.

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
    <td><CopyableCode code="instanceConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of requested instance configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>`next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations.</td>
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
    <td><a href="#projects_instance_configs_get"><CopyableCode code="projects_instance_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instanceConfigsId"><code>instanceConfigsId</code></a></td>
    <td></td>
    <td>Gets information about a particular instance configuration.</td>
</tr>
<tr>
    <td><a href="#projects_instance_configs_list"><CopyableCode code="projects_instance_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the supported instance configurations for a given project. Returns both Google-managed configurations and user-managed configurations.</td>
</tr>
<tr>
    <td><a href="#projects_instance_configs_create"><CopyableCode code="projects_instance_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an instance configuration and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance configuration. The instance configuration name is assigned by the caller. If the named instance configuration already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns: * The instance configuration is readable via the API, with all requested attributes. The instance configuration's reconciling field is set to true. Its state is `CREATING`. While the operation is pending: * Cancelling the operation renders the instance configuration immediately unreadable via the API. * Except for deleting the creating resource, all other attempts to modify the instance configuration are rejected. Upon completion of the returned operation: * Instances can be created using the instance configuration. * The instance configuration's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance configuration. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.</td>
</tr>
<tr>
    <td><a href="#projects_instance_configs_patch"><CopyableCode code="projects_instance_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instanceConfigsId"><code>instanceConfigsId</code></a></td>
    <td></td>
    <td>Updates an instance configuration. The returned long-running operation can be used to track the progress of updating the instance. If the named instance configuration does not exist, returns `NOT_FOUND`. Only user-managed configurations can be updated. Immediately after the request returns: * The instance configuration's reconciling field is set to true. While the operation is pending: * Cancelling the operation sets its metadata's cancel_time. The operation is guaranteed to succeed at undoing all changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance configuration are rejected. * Reading the instance configuration via the API continues to give the pre-request values. Upon completion of the returned operation: * Creating instances using the instance configuration uses the new values. * The new values of the instance configuration are readable via the API. * The instance configuration's reconciling field becomes false. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance configuration modification. The metadata field type is UpdateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.update` permission on the resource name.</td>
</tr>
<tr>
    <td><a href="#projects_instance_configs_delete"><CopyableCode code="projects_instance_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instanceConfigsId"><code>instanceConfigsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes the instance configuration. Deletion is only allowed when no instances are using the configuration. If any instances are using the configuration, returns `FAILED_PRECONDITION`. Only user-managed configurations can be deleted. Authorization requires `spanner.instanceConfigs.delete` permission on the resource name.</td>
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
<tr id="parameter-instanceConfigsId">
    <td><CopyableCode code="instanceConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_instance_configs_get"
    values={[
        { label: 'projects_instance_configs_get', value: 'projects_instance_configs_get' },
        { label: 'projects_instance_configs_list', value: 'projects_instance_configs_list' }
    ]}
>
<TabItem value="projects_instance_configs_get">

Gets information about a particular instance configuration.

```sql
SELECT
name,
baseConfig,
configType,
displayName,
etag,
freeInstanceAvailability,
labels,
leaderOptions,
optionalReplicas,
quorumType,
reconciling,
replicas,
state,
storageLimitPerProcessingUnit
FROM google.spanner.instance_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND instanceConfigsId = '{{ instanceConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_instance_configs_list">

Lists the supported instance configurations for a given project. Returns both Google-managed configurations and user-managed configurations.

```sql
SELECT
instanceConfigs,
nextPageToken
FROM google.spanner.instance_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instance_configs_create"
    values={[
        { label: 'projects_instance_configs_create', value: 'projects_instance_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instance_configs_create">

Creates an instance configuration and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance configuration. The instance configuration name is assigned by the caller. If the named instance configuration already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns: * The instance configuration is readable via the API, with all requested attributes. The instance configuration's reconciling field is set to true. Its state is `CREATING`. While the operation is pending: * Cancelling the operation renders the instance configuration immediately unreadable via the API. * Except for deleting the creating resource, all other attempts to modify the instance configuration are rejected. Upon completion of the returned operation: * Instances can be created using the instance configuration. * The instance configuration's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance configuration. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.

```sql
INSERT INTO google.spanner.instance_configs (
data__instanceConfigId,
data__instanceConfig,
data__validateOnly,
projectsId
)
SELECT 
'{{ instanceConfigId }}',
'{{ instanceConfig }}',
{{ validateOnly }},
'{{ projectsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: instance_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instance_configs resource.
    - name: instanceConfigId
      value: string
      description: >
        Required. The ID of the instance configuration to create. Valid identifiers are of the form `custom-[-a-z0-9]*[a-z0-9]` and must be between 2 and 64 characters in length. The `custom-` prefix is required to avoid name conflicts with Google-managed configurations.
        
    - name: instanceConfig
      value: object
      description: >
        A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
        
    - name: validateOnly
      value: boolean
      description: >
        An option to validate, but not actually execute, a request, and provide the same response.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instance_configs_patch"
    values={[
        { label: 'projects_instance_configs_patch', value: 'projects_instance_configs_patch' }
    ]}
>
<TabItem value="projects_instance_configs_patch">

Updates an instance configuration. The returned long-running operation can be used to track the progress of updating the instance. If the named instance configuration does not exist, returns `NOT_FOUND`. Only user-managed configurations can be updated. Immediately after the request returns: * The instance configuration's reconciling field is set to true. While the operation is pending: * Cancelling the operation sets its metadata's cancel_time. The operation is guaranteed to succeed at undoing all changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance configuration are rejected. * Reading the instance configuration via the API continues to give the pre-request values. Upon completion of the returned operation: * Creating instances using the instance configuration uses the new values. * The new values of the instance configuration are readable via the API. * The instance configuration's reconciling field becomes false. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance configuration modification. The metadata field type is UpdateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.update` permission on the resource name.

```sql
UPDATE google.spanner.instance_configs
SET 
data__instanceConfig = '{{ instanceConfig }}',
data__updateMask = '{{ updateMask }}',
data__validateOnly = {{ validateOnly }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND instanceConfigsId = '{{ instanceConfigsId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_instance_configs_delete"
    values={[
        { label: 'projects_instance_configs_delete', value: 'projects_instance_configs_delete' }
    ]}
>
<TabItem value="projects_instance_configs_delete">

Deletes the instance configuration. Deletion is only allowed when no instances are using the configuration. If any instances are using the configuration, returns `FAILED_PRECONDITION`. Only user-managed configurations can be deleted. Authorization requires `spanner.instanceConfigs.delete` permission on the resource name.

```sql
DELETE FROM google.spanner.instance_configs
WHERE projectsId = '{{ projectsId }}' --required
AND instanceConfigsId = '{{ instanceConfigsId }}' --required
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}';
```
</TabItem>
</Tabs>
