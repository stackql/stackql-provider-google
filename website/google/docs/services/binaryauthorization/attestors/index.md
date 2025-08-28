--- 
title: attestors
hide_title: false
hide_table_of_contents: false
keywords:
  - attestors
  - binaryauthorization
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

Creates, updates, deletes, gets or lists an <code>attestors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attestors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.binaryauthorization.attestors" /></td></tr>
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
    <td>Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the attestor was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userOwnedGrafeasNote" /></td>
    <td><code>object</code></td>
    <td>This specifies how an attestation will be read, and how it will be used during policy enforcement. (id: UserOwnedGrafeasNote)</td>
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
    <td>Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the attestor was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userOwnedGrafeasNote" /></td>
    <td><code>object</code></td>
    <td>This specifies how an attestation will be read, and how it will be used during policy enforcement. (id: UserOwnedGrafeasNote)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-attestorsId"><code>attestorsId</code></a></td>
    <td></td>
    <td>Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-attestorId"><code>attestorId</code></a></td>
    <td>Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-attestorsId"><code>attestorsId</code></a></td>
    <td></td>
    <td>Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-attestorsId"><code>attestorsId</code></a></td>
    <td></td>
    <td>Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.</td>
</tr>
<tr>
    <td><a href="#validate_attestation_occurrence"><CopyableCode code="validate_attestation_occurrence" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-attestorsId"><code>attestorsId</code></a></td>
    <td></td>
    <td>Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`</td>
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
<tr id="parameter-attestorsId">
    <td><CopyableCode code="attestorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-attestorId">
    <td><CopyableCode code="attestorId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.

```sql
SELECT
name,
description,
etag,
updateTime,
userOwnedGrafeasNote
FROM google.binaryauthorization.attestors
WHERE projectsId = '{{ projectsId }}' -- required
AND attestorsId = '{{ attestorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.

```sql
SELECT
name,
description,
etag,
updateTime,
userOwnedGrafeasNote
FROM google.binaryauthorization.attestors
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.

```sql
INSERT INTO google.binaryauthorization.attestors (
data__name,
data__description,
data__userOwnedGrafeasNote,
data__etag,
projectsId,
attestorId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ userOwnedGrafeasNote }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ attestorId }}'
RETURNING
name,
description,
etag,
updateTime,
userOwnedGrafeasNote
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: attestors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the attestors resource.
    - name: name
      value: string
      description: >
        Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.
        
    - name: description
      value: string
      description: >
        Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
        
    - name: userOwnedGrafeasNote
      value: object
      description: >
        This specifies how an attestation will be read, and how it will be used during policy enforcement.
        
    - name: etag
      value: string
      description: >
        Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.
        
    - name: attestorId
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.

```sql
REPLACE google.binaryauthorization.attestors
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__userOwnedGrafeasNote = '{{ userOwnedGrafeasNote }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND attestorsId = '{{ attestorsId }}' --required
RETURNING
name,
description,
etag,
updateTime,
userOwnedGrafeasNote;
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

Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.

```sql
DELETE FROM google.binaryauthorization.attestors
WHERE projectsId = '{{ projectsId }}' --required
AND attestorsId = '{{ attestorsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_attestation_occurrence"
    values={[
        { label: 'validate_attestation_occurrence', value: 'validate_attestation_occurrence' }
    ]}
>
<TabItem value="validate_attestation_occurrence">

Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`

```sql
EXEC google.binaryauthorization.attestors.validate_attestation_occurrence 
@projectsId='{{ projectsId }}' --required, 
@attestorsId='{{ attestorsId }}' --required 
@@json=
'{
"attestation": "{{ attestation }}", 
"occurrenceNote": "{{ occurrenceNote }}", 
"occurrenceResourceUri": "{{ occurrenceResourceUri }}"
}';
```
</TabItem>
</Tabs>
