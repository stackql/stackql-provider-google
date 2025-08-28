--- 
title: curations
hide_title: false
hide_table_of_contents: false
keywords:
  - curations
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

Creates, updates, deletes, gets or lists a <code>curations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>curations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.curations" /></td></tr>
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
    <td>Identifier. The name of the curation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/curations/&#123;curation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the curation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>Required. The endpoint to be triggered for curation. (id: GoogleCloudApihubV1Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionErrorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The error code of the last execution of the curation. The error code is populated only when the last execution state is failed.</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Error message describing the failure, if any, during the last execution of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The last execution state of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="pluginInstanceActions" /></td>
    <td><code>array</code></td>
    <td>Output only. The plugin instances and associated actions that are using the curation. Note: A particular curation could be used by multiple plugin instances or multiple actions in a plugin instance.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the curation was last updated.</td>
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
    <td>Identifier. The name of the curation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/curations/&#123;curation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the curation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>Required. The endpoint to be triggered for curation. (id: GoogleCloudApihubV1Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionErrorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The error code of the last execution of the curation. The error code is populated only when the last execution state is failed.</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Error message describing the failure, if any, during the last execution of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastExecutionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The last execution state of the curation.</td>
</tr>
<tr>
    <td><CopyableCode code="pluginInstanceActions" /></td>
    <td><code>array</code></td>
    <td>Output only. The plugin instances and associated actions that are using the curation. Note: A particular curation could be used by multiple plugin instances or multiple actions in a plugin instance.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the curation was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-curationsId"><code>curationsId</code></a></td>
    <td></td>
    <td>Get curation resource details.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List curation resources in the API hub.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-curationId"><code>curationId</code></a></td>
    <td>Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-curationsId"><code>curationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-curationsId"><code>curationsId</code></a></td>
    <td></td>
    <td>Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance.</td>
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
<tr id="parameter-curationsId">
    <td><CopyableCode code="curationsId" /></td>
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
<tr id="parameter-curationId">
    <td><CopyableCode code="curationId" /></td>
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

Get curation resource details.

```sql
SELECT
name,
createTime,
description,
displayName,
endpoint,
lastExecutionErrorCode,
lastExecutionErrorMessage,
lastExecutionState,
pluginInstanceActions,
updateTime
FROM google.apihub.curations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND curationsId = '{{ curationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List curation resources in the API hub.

```sql
SELECT
name,
createTime,
description,
displayName,
endpoint,
lastExecutionErrorCode,
lastExecutionErrorMessage,
lastExecutionState,
pluginInstanceActions,
updateTime
FROM google.apihub.curations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it.

```sql
INSERT INTO google.apihub.curations (
data__name,
data__displayName,
data__description,
data__endpoint,
projectsId,
locationsId,
curationId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ endpoint }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ curationId }}'
RETURNING
name,
createTime,
description,
displayName,
endpoint,
lastExecutionErrorCode,
lastExecutionErrorMessage,
lastExecutionState,
pluginInstanceActions,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: curations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the curations resource.
    - name: locationsId
      value: string
      description: Required parameter for the curations resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the curation. Format: `projects/{project}/locations/{location}/curations/{curation}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the curation.
        
    - name: description
      value: string
      description: >
        Optional. The description of the curation.
        
    - name: endpoint
      value: object
      description: >
        Required. The endpoint to be triggered for curation.
        
    - name: curationId
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

Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated.

```sql
UPDATE google.apihub.curations
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__endpoint = '{{ endpoint }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND curationsId = '{{ curationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
endpoint,
lastExecutionErrorCode,
lastExecutionErrorMessage,
lastExecutionState,
pluginInstanceActions,
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

Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance.

```sql
DELETE FROM google.apihub.curations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND curationsId = '{{ curationsId }}' --required;
```
</TabItem>
</Tabs>
