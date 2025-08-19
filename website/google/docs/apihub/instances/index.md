--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - apihub
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Represents a plugin instance resource in the API Hub. A PluginInstance is a specific instance of a hub plugin with its own configuration, state, and execution details.

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
    <td>Identifier. The unique name of the plugin instance resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/plugins/&#123;plugin&#125;/instances/&#123;instance&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Required. The action status for the plugin instance.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable.</td>
</tr>
<tr>
    <td><CopyableCode code="authConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The authentication information for this plugin instance. (id: GoogleCloudApihubV1AuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for this plugin instance. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Error message describing the failure, if any, during Create, Delete or ApplyConfig operation corresponding to the plugin instance.This field will only be populated if the plugin instance is in the ERROR or FAILED state.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceProjectId" /></td>
    <td><code>string</code></td>
    <td>Optional. The source project id of the plugin instance. This will be the id of runtime project in case of gcp based plugins and org id in case of non gcp based plugins. This field will be a required field for Google provided on-ramp plugins.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin instance was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The ListPluginInstances method's response.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="pluginInstances" /></td>
    <td><code>array</code></td>
    <td>The plugin instances from the specified parent resource.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Get an API Hub plugin instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List all the plugins in a given project and location. `-` can be used as wildcard value for &#123;plugin_id&#125;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td><a href="#parameter-pluginInstanceId"><code>pluginInstanceId</code></a></td>
    <td>Creates a Plugin instance in the API hub.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes a plugin instance in the API hub.</td>
</tr>
<tr>
    <td><a href="#execute_action"><CopyableCode code="execute_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Executes a plugin instance in the API hub.</td>
</tr>
<tr>
    <td><a href="#enable_action"><CopyableCode code="enable_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Enables a plugin instance in the API hub.</td>
</tr>
<tr>
    <td><a href="#disable_action"><CopyableCode code="disable_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Disables a plugin instance in the API hub.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pluginsId">
    <td><CopyableCode code="pluginsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-pluginInstanceId">
    <td><CopyableCode code="pluginInstanceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an API Hub plugin instance.

```sql
SELECT
name,
actions,
additionalConfig,
authConfig,
createTime,
displayName,
errorMessage,
sourceProjectId,
state,
updateTime
FROM google.apihub.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pluginsId = '{{ pluginsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List all the plugins in a given project and location. `-` can be used as wildcard value for &#123;plugin_id&#125;

```sql
SELECT
nextPageToken,
pluginInstances
FROM google.apihub.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pluginsId = '{{ pluginsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a Plugin instance in the API hub.

```sql
INSERT INTO google.apihub.instances (
data__name,
data__displayName,
data__authConfig,
data__additionalConfig,
data__actions,
data__sourceProjectId,
projectsId,
locationsId,
pluginsId,
pluginInstanceId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ authConfig }}',
'{{ additionalConfig }}',
'{{ actions }}',
'{{ sourceProjectId }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ pluginsId }}',
'{{ pluginInstanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the instances resource.
    - name: pluginsId
      value: string
      description: Required parameter for the instances resource.
    - name: name
      value: string
      description: >
        Identifier. The unique name of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name for this plugin instance. Max length is 255 characters.
        
    - name: authConfig
      value: object
      description: >
        Optional. The authentication information for this plugin instance.
        
    - name: additionalConfig
      value: object
      description: >
        Optional. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable.
        
    - name: actions
      value: array
      description: >
        Required. The action status for the plugin instance.
        
    - name: sourceProjectId
      value: string
      description: >
        Optional. The source project id of the plugin instance. This will be the id of runtime project in case of gcp based plugins and org id in case of non gcp based plugins. This field will be a required field for Google provided on-ramp plugins.
        
    - name: pluginInstanceId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method.

```sql
UPDATE google.apihub.instances
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__authConfig = '{{ authConfig }}',
data__additionalConfig = '{{ additionalConfig }}',
data__actions = '{{ actions }}',
data__sourceProjectId = '{{ sourceProjectId }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pluginsId = '{{ pluginsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
actions,
additionalConfig,
authConfig,
createTime,
displayName,
errorMessage,
sourceProjectId,
state,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a plugin instance in the API hub.

```sql
DELETE FROM google.apihub.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pluginsId = '{{ pluginsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_action"
    values={[
        { label: 'execute_action', value: 'execute_action' },
        { label: 'enable_action', value: 'enable_action' },
        { label: 'disable_action', value: 'disable_action' }
    ]}
>
<TabItem value="execute_action">

Executes a plugin instance in the API hub.

```sql
EXEC google.apihub.instances.execute_action 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pluginsId='{{ pluginsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"actionExecutionDetail": "{{ actionExecutionDetail }}"
}';
```
</TabItem>
<TabItem value="enable_action">

Enables a plugin instance in the API hub.

```sql
EXEC google.apihub.instances.enable_action 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pluginsId='{{ pluginsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"actionId": "{{ actionId }}"
}';
```
</TabItem>
<TabItem value="disable_action">

Disables a plugin instance in the API hub.

```sql
EXEC google.apihub.instances.disable_action 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pluginsId='{{ pluginsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"actionId": "{{ actionId }}"
}';
```
</TabItem>
</Tabs>
