--- 
title: envgroups
hide_title: false
hide_table_of_contents: false
keywords:
  - envgroups
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

Creates, updates, deletes, gets or lists an <code>envgroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>envgroups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.envgroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_envgroups_get"
    values={[
        { label: 'organizations_envgroups_get', value: 'organizations_envgroups_get' },
        { label: 'organizations_envgroups_list', value: 'organizations_envgroups_list' }
    ]}
>
<TabItem value="organizations_envgroups_get">

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
    <td>ID of the environment group.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group was created as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="hostnames" /></td>
    <td><code>array</code></td>
    <td>Required. Host names for this environment group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group was last updated as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_envgroups_list">

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
    <td>ID of the environment group.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group was created as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="hostnames" /></td>
    <td><code>array</code></td>
    <td>Required. Host names for this environment group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group was last updated as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.</td>
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
    <td><a href="#organizations_envgroups_get"><CopyableCode code="organizations_envgroups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td></td>
    <td>Gets an environment group.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_list"><CopyableCode code="organizations_envgroups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all environment groups.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_create"><CopyableCode code="organizations_envgroups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Creates a new environment group.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_patch"><CopyableCode code="organizations_envgroups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an environment group.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_delete"><CopyableCode code="organizations_envgroups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td></td>
    <td>Deletes an environment group.</td>
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
<tr id="parameter-envgroupsId">
    <td><CopyableCode code="envgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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
    defaultValue="organizations_envgroups_get"
    values={[
        { label: 'organizations_envgroups_get', value: 'organizations_envgroups_get' },
        { label: 'organizations_envgroups_list', value: 'organizations_envgroups_list' }
    ]}
>
<TabItem value="organizations_envgroups_get">

Gets an environment group.

```sql
SELECT
name,
createdAt,
hostnames,
lastModifiedAt,
state
FROM google.apigee.envgroups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND envgroupsId = '{{ envgroupsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_envgroups_list">

Lists all environment groups.

```sql
SELECT
name,
createdAt,
hostnames,
lastModifiedAt,
state
FROM google.apigee.envgroups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_envgroups_create"
    values={[
        { label: 'organizations_envgroups_create', value: 'organizations_envgroups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_envgroups_create">

Creates a new environment group.

```sql
INSERT INTO google.apigee.envgroups (
data__name,
data__hostnames,
organizationsId,
name
)
SELECT 
'{{ name }}',
'{{ hostnames }}',
'{{ organizationsId }}',
'{{ name }}'
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
- name: envgroups
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the envgroups resource.
    - name: name
      value: string
      description: >
        ID of the environment group.
        
    - name: hostnames
      value: array
      description: >
        Required. Host names for this environment group.
        
    - name: name
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_envgroups_patch"
    values={[
        { label: 'organizations_envgroups_patch', value: 'organizations_envgroups_patch' }
    ]}
>
<TabItem value="organizations_envgroups_patch">

Updates an environment group.

```sql
UPDATE google.apigee.envgroups
SET 
data__name = '{{ name }}',
data__hostnames = '{{ hostnames }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND envgroupsId = '{{ envgroupsId }}' --required
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
    defaultValue="organizations_envgroups_delete"
    values={[
        { label: 'organizations_envgroups_delete', value: 'organizations_envgroups_delete' }
    ]}
>
<TabItem value="organizations_envgroups_delete">

Deletes an environment group.

```sql
DELETE FROM google.apigee.envgroups
WHERE organizationsId = '{{ organizationsId }}' --required
AND envgroupsId = '{{ envgroupsId }}' --required;
```
</TabItem>
</Tabs>
