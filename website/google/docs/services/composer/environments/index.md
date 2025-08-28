--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - composer
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.composer.environments" /></td></tr>
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
    <td>Identifier. The resource name of the environment, in the form: "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/environments/&#123;environmentId&#125;" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration parameters for this environment. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage configuration for this environment. (id: StorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Identifier. The resource name of the environment, in the form: "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/environments/&#123;environmentId&#125;" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration parameters for this environment. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage configuration for this environment. (id: StorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Get an existing environment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List environments.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a new environment.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an environment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Delete an environment.</td>
</tr>
<tr>
    <td><a href="#restart_web_server"><CopyableCode code="restart_web_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Restart Airflow web server.</td>
</tr>
<tr>
    <td><a href="#execute_airflow_command"><CopyableCode code="execute_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Executes Airflow CLI command.</td>
</tr>
<tr>
    <td><a href="#stop_airflow_command"><CopyableCode code="stop_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Stops Airflow CLI command execution.</td>
</tr>
<tr>
    <td><a href="#poll_airflow_command"><CopyableCode code="poll_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Polls Airflow CLI command execution and fetches logs.</td>
</tr>
<tr>
    <td><a href="#check_upgrade"><CopyableCode code="check_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.</td>
</tr>
<tr>
    <td><a href="#save_snapshot"><CopyableCode code="save_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.</td>
</tr>
<tr>
    <td><a href="#load_snapshot"><CopyableCode code="load_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.</td>
</tr>
<tr>
    <td><a href="#database_failover"><CopyableCode code="database_failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Triggers database failover (only for highly resilient environments).</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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

Get an existing environment.

```sql
SELECT
name,
config,
createTime,
labels,
satisfiesPzi,
satisfiesPzs,
state,
storageConfig,
updateTime,
uuid
FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List environments.

```sql
SELECT
name,
config,
createTime,
labels,
satisfiesPzi,
satisfiesPzs,
state,
storageConfig,
updateTime,
uuid
FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Create a new environment.

```sql
INSERT INTO google.composer.environments (
data__name,
data__config,
data__uuid,
data__state,
data__createTime,
data__updateTime,
data__labels,
data__storageConfig,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ uuid }}',
'{{ state }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ labels }}',
'{{ storageConfig }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: environments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the environments resource.
    - name: locationsId
      value: string
      description: Required parameter for the environments resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
        
    - name: config
      value: object
      description: >
        Optional. Configuration parameters for this environment.
        
    - name: uuid
      value: string
      description: >
        Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
        
    - name: state
      value: string
      description: >
        The current state of the environment.
        
      valid_values: ['STATE_UNSPECIFIED', 'CREATING', 'RUNNING', 'UPDATING', 'DELETING', 'ERROR']
    - name: createTime
      value: string
      description: >
        Output only. The time at which this environment was created.
        
    - name: updateTime
      value: string
      description: >
        Output only. The time at which this environment was last modified.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
        
    - name: storageConfig
      value: object
      description: >
        Optional. Storage configuration for this environment.
        
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

Update an environment.

```sql
UPDATE google.composer.environments
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__uuid = '{{ uuid }}',
data__state = '{{ state }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
data__labels = '{{ labels }}',
data__storageConfig = '{{ storageConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an environment.

```sql
DELETE FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restart_web_server"
    values={[
        { label: 'restart_web_server', value: 'restart_web_server' },
        { label: 'execute_airflow_command', value: 'execute_airflow_command' },
        { label: 'stop_airflow_command', value: 'stop_airflow_command' },
        { label: 'poll_airflow_command', value: 'poll_airflow_command' },
        { label: 'check_upgrade', value: 'check_upgrade' },
        { label: 'save_snapshot', value: 'save_snapshot' },
        { label: 'load_snapshot', value: 'load_snapshot' },
        { label: 'database_failover', value: 'database_failover' }
    ]}
>
<TabItem value="restart_web_server">

Restart Airflow web server.

```sql
EXEC google.composer.environments.restart_web_server 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required;
```
</TabItem>
<TabItem value="execute_airflow_command">

Executes Airflow CLI command.

```sql
EXEC google.composer.environments.execute_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"command": "{{ command }}", 
"subcommand": "{{ subcommand }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="stop_airflow_command">

Stops Airflow CLI command execution.

```sql
EXEC google.composer.environments.stop_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"executionId": "{{ executionId }}", 
"pod": "{{ pod }}", 
"podNamespace": "{{ podNamespace }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="poll_airflow_command">

Polls Airflow CLI command execution and fetches logs.

```sql
EXEC google.composer.environments.poll_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"executionId": "{{ executionId }}", 
"pod": "{{ pod }}", 
"podNamespace": "{{ podNamespace }}", 
"nextLineNumber": {{ nextLineNumber }}
}';
```
</TabItem>
<TabItem value="check_upgrade">

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

```sql
EXEC google.composer.environments.check_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"imageVersion": "{{ imageVersion }}"
}';
```
</TabItem>
<TabItem value="save_snapshot">

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

```sql
EXEC google.composer.environments.save_snapshot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"snapshotLocation": "{{ snapshotLocation }}"
}';
```
</TabItem>
<TabItem value="load_snapshot">

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

```sql
EXEC google.composer.environments.load_snapshot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"snapshotPath": "{{ snapshotPath }}", 
"skipPypiPackagesInstallation": {{ skipPypiPackagesInstallation }}, 
"skipEnvironmentVariablesSetting": {{ skipEnvironmentVariablesSetting }}, 
"skipAirflowOverridesSetting": {{ skipAirflowOverridesSetting }}, 
"skipGcsDataCopying": {{ skipGcsDataCopying }}
}';
```
</TabItem>
<TabItem value="database_failover">

Triggers database failover (only for highly resilient environments).

```sql
EXEC google.composer.environments.database_failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required;
```
</TabItem>
</Tabs>
