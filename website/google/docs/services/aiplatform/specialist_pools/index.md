--- 
title: specialist_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - specialist_pools
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>specialist_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>specialist_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.specialist_pools" /></td></tr>
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
    <td>Required. The resource name of the SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the SpecialistPool. The name can be up to 128 characters long and can consist of any UTF-8 characters. This field should be unique on project-level.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingDataLabelingJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of the pending data labeling jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistManagerEmails" /></td>
    <td><code>array</code></td>
    <td>The email addresses of the managers in the SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistManagersCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of managers in this SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistWorkerEmails" /></td>
    <td><code>array</code></td>
    <td>The email addresses of workers in the SpecialistPool.</td>
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
    <td>Required. The resource name of the SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the SpecialistPool. The name can be up to 128 characters long and can consist of any UTF-8 characters. This field should be unique on project-level.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingDataLabelingJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of the pending data labeling jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistManagerEmails" /></td>
    <td><code>array</code></td>
    <td>The email addresses of the managers in the SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistManagersCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of managers in this SpecialistPool.</td>
</tr>
<tr>
    <td><CopyableCode code="specialistWorkerEmails" /></td>
    <td><code>array</code></td>
    <td>The email addresses of workers in the SpecialistPool.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-specialistPoolsId"><code>specialistPoolsId</code></a></td>
    <td></td>
    <td>Gets a SpecialistPool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists SpecialistPools in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a SpecialistPool.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-specialistPoolsId"><code>specialistPoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a SpecialistPool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-specialistPoolsId"><code>specialistPoolsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a SpecialistPool as well as all Specialists in the pool.</td>
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
<tr id="parameter-specialistPoolsId">
    <td><CopyableCode code="specialistPoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets a SpecialistPool.

```sql
SELECT
name,
displayName,
pendingDataLabelingJobs,
specialistManagerEmails,
specialistManagersCount,
specialistWorkerEmails
FROM google.aiplatform.specialist_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND specialistPoolsId = '{{ specialistPoolsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists SpecialistPools in a Location.

```sql
SELECT
name,
displayName,
pendingDataLabelingJobs,
specialistManagerEmails,
specialistManagersCount,
specialistWorkerEmails
FROM google.aiplatform.specialist_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
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

Creates a SpecialistPool.

```sql
INSERT INTO google.aiplatform.specialist_pools (
data__name,
data__displayName,
data__specialistManagerEmails,
data__specialistWorkerEmails,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ specialistManagerEmails }}',
'{{ specialistWorkerEmails }}',
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
- name: specialist_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the specialist_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the specialist_pools resource.
    - name: name
      value: string
      description: >
        Required. The resource name of the SpecialistPool.
        
    - name: displayName
      value: string
      description: >
        Required. The user-defined name of the SpecialistPool. The name can be up to 128 characters long and can consist of any UTF-8 characters. This field should be unique on project-level.
        
    - name: specialistManagerEmails
      value: array
      description: >
        The email addresses of the managers in the SpecialistPool.
        
    - name: specialistWorkerEmails
      value: array
      description: >
        The email addresses of workers in the SpecialistPool.
        
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

Updates a SpecialistPool.

```sql
UPDATE google.aiplatform.specialist_pools
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__specialistManagerEmails = '{{ specialistManagerEmails }}',
data__specialistWorkerEmails = '{{ specialistWorkerEmails }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND specialistPoolsId = '{{ specialistPoolsId }}' --required
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

Deletes a SpecialistPool as well as all Specialists in the pool.

```sql
DELETE FROM google.aiplatform.specialist_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND specialistPoolsId = '{{ specialistPoolsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
