--- 
title: workflow_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_configs
  - dataform
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

Creates, updates, deletes, gets or lists a <code>workflow_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workflow_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.workflow_configs" /></td></tr>
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
    <td>Identifier. The workflow config's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the WorkflowConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cronSchedule" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional schedule (in cron format) for automatic execution of this workflow config.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables automatic creation of workflow invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If left unset, a default InvocationConfig will be used. (id: InvocationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="recentScheduledExecutionRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. Records of the 10 most recent scheduled execution attempts, ordered in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseConfig" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the WorkflowConfig was last updated.</td>
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
    <td>Identifier. The workflow config's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the WorkflowConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cronSchedule" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional schedule (in cron format) for automatic execution of this workflow config.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables automatic creation of workflow invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If left unset, a default InvocationConfig will be used. (id: InvocationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="recentScheduledExecutionRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. Records of the 10 most recent scheduled execution attempts, ordered in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseConfig" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the WorkflowConfig was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowConfigsId"><code>workflowConfigsId</code></a></td>
    <td></td>
    <td>Fetches a single WorkflowConfig.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists WorkflowConfigs in a given Repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-workflowConfigId"><code>workflowConfigId</code></a></td>
    <td>Creates a new WorkflowConfig in a given Repository.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowConfigsId"><code>workflowConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowConfigsId"><code>workflowConfigsId</code></a></td>
    <td></td>
    <td>Deletes a single WorkflowConfig.</td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowConfigsId">
    <td><CopyableCode code="workflowConfigsId" /></td>
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
<tr id="parameter-workflowConfigId">
    <td><CopyableCode code="workflowConfigId" /></td>
    <td><code>string</code></td>
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

Fetches a single WorkflowConfig.

```sql
SELECT
name,
createTime,
cronSchedule,
disabled,
internalMetadata,
invocationConfig,
recentScheduledExecutionRecords,
releaseConfig,
timeZone,
updateTime
FROM google.dataform.workflow_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workflowConfigsId = '{{ workflowConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists WorkflowConfigs in a given Repository.

```sql
SELECT
name,
createTime,
cronSchedule,
disabled,
internalMetadata,
invocationConfig,
recentScheduledExecutionRecords,
releaseConfig,
timeZone,
updateTime
FROM google.dataform.workflow_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
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

Creates a new WorkflowConfig in a given Repository.

```sql
INSERT INTO google.dataform.workflow_configs (
data__name,
data__releaseConfig,
data__invocationConfig,
data__cronSchedule,
data__timeZone,
data__disabled,
projectsId,
locationsId,
repositoriesId,
workflowConfigId
)
SELECT 
'{{ name }}',
'{{ releaseConfig }}',
'{{ invocationConfig }}',
'{{ cronSchedule }}',
'{{ timeZone }}',
{{ disabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}',
'{{ workflowConfigId }}'
RETURNING
name,
createTime,
cronSchedule,
disabled,
internalMetadata,
invocationConfig,
recentScheduledExecutionRecords,
releaseConfig,
timeZone,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workflow_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workflow_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the workflow_configs resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the workflow_configs resource.
    - name: name
      value: string
      description: >
        Identifier. The workflow config's name.
        
    - name: releaseConfig
      value: string
      description: >
        Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.
        
    - name: invocationConfig
      value: object
      description: >
        Optional. If left unset, a default InvocationConfig will be used.
        
    - name: cronSchedule
      value: string
      description: >
        Optional. Optional schedule (in cron format) for automatic execution of this workflow config.
        
    - name: timeZone
      value: string
      description: >
        Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Disables automatic creation of workflow invocations.
        
    - name: workflowConfigId
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

Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

```sql
UPDATE google.dataform.workflow_configs
SET 
data__name = '{{ name }}',
data__releaseConfig = '{{ releaseConfig }}',
data__invocationConfig = '{{ invocationConfig }}',
data__cronSchedule = '{{ cronSchedule }}',
data__timeZone = '{{ timeZone }}',
data__disabled = {{ disabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND workflowConfigsId = '{{ workflowConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
cronSchedule,
disabled,
internalMetadata,
invocationConfig,
recentScheduledExecutionRecords,
releaseConfig,
timeZone,
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

Deletes a single WorkflowConfig.

```sql
DELETE FROM google.dataform.workflow_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND workflowConfigsId = '{{ workflowConfigsId }}' --required;
```
</TabItem>
</Tabs>
