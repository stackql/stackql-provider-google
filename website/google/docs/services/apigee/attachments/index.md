--- 
title: attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - attachments
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

Creates, updates, deletes, gets or lists an <code>attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_envgroups_attachments_get"
    values={[
        { label: 'organizations_envgroups_attachments_get', value: 'organizations_envgroups_attachments_get' },
        { label: 'organizations_instances_attachments_get', value: 'organizations_instances_attachments_get' },
        { label: 'organizations_envgroups_attachments_list', value: 'organizations_envgroups_attachments_list' },
        { label: 'organizations_instances_attachments_list', value: 'organizations_instances_attachments_list' }
    ]}
>
<TabItem value="organizations_envgroups_attachments_get">

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
    <td>ID of the environment group attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group attachment was created as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the attached environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentGroupId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the environment group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_instances_attachments_get">

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
    <td>Output only. ID of the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the attachment was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>ID of the attached environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_envgroups_attachments_list">

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
    <td>ID of the environment group attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the environment group attachment was created as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the attached environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentGroupId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the environment group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_instances_attachments_list">

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
    <td>Output only. ID of the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the attachment was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>ID of the attached environment.</td>
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
    <td><a href="#organizations_envgroups_attachments_get"><CopyableCode code="organizations_envgroups_attachments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a>, <a href="#parameter-attachmentsId"><code>attachmentsId</code></a></td>
    <td></td>
    <td>Gets an environment group attachment.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_attachments_get"><CopyableCode code="organizations_instances_attachments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-attachmentsId"><code>attachmentsId</code></a></td>
    <td></td>
    <td>Gets an attachment. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_attachments_list"><CopyableCode code="organizations_envgroups_attachments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all attachments of an environment group.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_attachments_list"><CopyableCode code="organizations_instances_attachments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_attachments_create"><CopyableCode code="organizations_envgroups_attachments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td></td>
    <td>Creates a new attachment of an environment to an environment group.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_attachments_create"><CopyableCode code="organizations_instances_attachments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_envgroups_attachments_delete"><CopyableCode code="organizations_envgroups_attachments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a>, <a href="#parameter-attachmentsId"><code>attachmentsId</code></a></td>
    <td></td>
    <td>Deletes an environment group attachment.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_attachments_delete"><CopyableCode code="organizations_instances_attachments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-attachmentsId"><code>attachmentsId</code></a></td>
    <td></td>
    <td>Deletes an attachment. **Note:** Not supported for Apigee hybrid.</td>
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
<tr id="parameter-attachmentsId">
    <td><CopyableCode code="attachmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-envgroupsId">
    <td><CopyableCode code="envgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_envgroups_attachments_get"
    values={[
        { label: 'organizations_envgroups_attachments_get', value: 'organizations_envgroups_attachments_get' },
        { label: 'organizations_instances_attachments_get', value: 'organizations_instances_attachments_get' },
        { label: 'organizations_envgroups_attachments_list', value: 'organizations_envgroups_attachments_list' },
        { label: 'organizations_instances_attachments_list', value: 'organizations_instances_attachments_list' }
    ]}
>
<TabItem value="organizations_envgroups_attachments_get">

Gets an environment group attachment.

```sql
SELECT
name,
createdAt,
environment,
environmentGroupId
FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND envgroupsId = '{{ envgroupsId }}' -- required
AND attachmentsId = '{{ attachmentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_instances_attachments_get">

Gets an attachment. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
createdAt,
environment
FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND attachmentsId = '{{ attachmentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_envgroups_attachments_list">

Lists all attachments of an environment group.

```sql
SELECT
name,
createdAt,
environment,
environmentGroupId
FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND envgroupsId = '{{ envgroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_instances_attachments_list">

Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
createdAt,
environment
FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_envgroups_attachments_create"
    values={[
        { label: 'organizations_envgroups_attachments_create', value: 'organizations_envgroups_attachments_create' },
        { label: 'organizations_instances_attachments_create', value: 'organizations_instances_attachments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_envgroups_attachments_create">

Creates a new attachment of an environment to an environment group.

```sql
INSERT INTO google.apigee.attachments (
data__name,
data__environment,
organizationsId,
envgroupsId
)
SELECT 
'{{ name }}',
'{{ environment }}',
'{{ organizationsId }}',
'{{ envgroupsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="organizations_instances_attachments_create">

Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.

```sql
INSERT INTO google.apigee.attachments (
data__environment,
organizationsId,
instancesId
)
SELECT 
'{{ environment }}',
'{{ organizationsId }}',
'{{ instancesId }}'
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
- name: attachments
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the attachments resource.
    - name: envgroupsId
      value: string
      description: Required parameter for the attachments resource.
    - name: instancesId
      value: string
      description: Required parameter for the attachments resource.
    - name: name
      value: string
      description: >
        ID of the environment group attachment.
        
    - name: environment
      value: string
      description: >
        ID of the attached environment.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_envgroups_attachments_delete"
    values={[
        { label: 'organizations_envgroups_attachments_delete', value: 'organizations_envgroups_attachments_delete' },
        { label: 'organizations_instances_attachments_delete', value: 'organizations_instances_attachments_delete' }
    ]}
>
<TabItem value="organizations_envgroups_attachments_delete">

Deletes an environment group attachment.

```sql
DELETE FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' --required
AND envgroupsId = '{{ envgroupsId }}' --required
AND attachmentsId = '{{ attachmentsId }}' --required;
```
</TabItem>
<TabItem value="organizations_instances_attachments_delete">

Deletes an attachment. **Note:** Not supported for Apigee hybrid.

```sql
DELETE FROM google.apigee.attachments
WHERE organizationsId = '{{ organizationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND attachmentsId = '{{ attachmentsId }}' --required;
```
</TabItem>
</Tabs>
