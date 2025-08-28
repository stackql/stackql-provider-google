--- 
title: hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - hooks
  - securesourcemanager
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

Creates, updates, deletes, gets or lists a <code>hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securesourcemanager.hooks" /></td></tr>
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
    <td>Identifier. A unique identifier for a Hook. The name should be of the format: `projects/&#123;project&#125;/locations/&#123;location_id&#125;/repositories/&#123;repository_id&#125;/hooks/&#123;hook_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the hook disabled or not. Set to true to stop sending traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Optional. The events that trigger hook on.</td>
</tr>
<tr>
    <td><CopyableCode code="pushOption" /></td>
    <td><code>object</code></td>
    <td>Optional. The trigger option for push events. (id: PushOption)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveQueryString" /></td>
    <td><code>string</code></td>
    <td>Optional. The sensitive query string to be appended to the target URI.</td>
</tr>
<tr>
    <td><CopyableCode code="targetUri" /></td>
    <td><code>string</code></td>
    <td>Required. The target URI to which the payloads will be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the hook.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
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
    <td>Identifier. A unique identifier for a Hook. The name should be of the format: `projects/&#123;project&#125;/locations/&#123;location_id&#125;/repositories/&#123;repository_id&#125;/hooks/&#123;hook_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the hook disabled or not. Set to true to stop sending traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Optional. The events that trigger hook on.</td>
</tr>
<tr>
    <td><CopyableCode code="pushOption" /></td>
    <td><code>object</code></td>
    <td>Optional. The trigger option for push events. (id: PushOption)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveQueryString" /></td>
    <td><code>string</code></td>
    <td>Optional. The sensitive query string to be appended to the target URI.</td>
</tr>
<tr>
    <td><CopyableCode code="targetUri" /></td>
    <td><code>string</code></td>
    <td>Required. The target URI to which the payloads will be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the hook.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-hooksId"><code>hooksId</code></a></td>
    <td></td>
    <td>Gets metadata of a hook.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists hooks in a given repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-hookId"><code>hookId</code></a></td>
    <td>Creates a new hook in a given repository.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-hooksId"><code>hooksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the metadata of a hook.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-hooksId"><code>hooksId</code></a></td>
    <td></td>
    <td>Deletes a Hook.</td>
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
<tr id="parameter-hooksId">
    <td><CopyableCode code="hooksId" /></td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-hookId">
    <td><CopyableCode code="hookId" /></td>
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

Gets metadata of a hook.

```sql
SELECT
name,
createTime,
disabled,
events,
pushOption,
sensitiveQueryString,
targetUri,
uid,
updateTime
FROM google.securesourcemanager.hooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND hooksId = '{{ hooksId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists hooks in a given repository.

```sql
SELECT
name,
createTime,
disabled,
events,
pushOption,
sensitiveQueryString,
targetUri,
uid,
updateTime
FROM google.securesourcemanager.hooks
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

Creates a new hook in a given repository.

```sql
INSERT INTO google.securesourcemanager.hooks (
data__name,
data__targetUri,
data__disabled,
data__events,
data__pushOption,
data__sensitiveQueryString,
projectsId,
locationsId,
repositoriesId,
hookId
)
SELECT 
'{{ name }}',
'{{ targetUri }}',
{{ disabled }},
'{{ events }}',
'{{ pushOption }}',
'{{ sensitiveQueryString }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}',
'{{ hookId }}'
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
- name: hooks
  props:
    - name: projectsId
      value: string
      description: Required parameter for the hooks resource.
    - name: locationsId
      value: string
      description: Required parameter for the hooks resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the hooks resource.
    - name: name
      value: string
      description: >
        Identifier. A unique identifier for a Hook. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`
        
    - name: targetUri
      value: string
      description: >
        Required. The target URI to which the payloads will be delivered.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Determines if the hook disabled or not. Set to true to stop sending traffic.
        
    - name: events
      value: array
      description: >
        Optional. The events that trigger hook on.
        
    - name: pushOption
      value: object
      description: >
        Optional. The trigger option for push events.
        
    - name: sensitiveQueryString
      value: string
      description: >
        Optional. The sensitive query string to be appended to the target URI.
        
    - name: hookId
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

Updates the metadata of a hook.

```sql
UPDATE google.securesourcemanager.hooks
SET 
data__name = '{{ name }}',
data__targetUri = '{{ targetUri }}',
data__disabled = {{ disabled }},
data__events = '{{ events }}',
data__pushOption = '{{ pushOption }}',
data__sensitiveQueryString = '{{ sensitiveQueryString }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND hooksId = '{{ hooksId }}' --required
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

Deletes a Hook.

```sql
DELETE FROM google.securesourcemanager.hooks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND hooksId = '{{ hooksId }}' --required;
```
</TabItem>
</Tabs>
