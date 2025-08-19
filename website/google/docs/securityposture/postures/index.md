--- 
title: postures
hide_title: false
hide_table_of_contents: false
keywords:
  - postures
  - securityposture
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

Creates, updates, deletes, gets or lists a <code>postures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>postures</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securityposture.postures" /></td></tr>
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

The details of a posture.

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
    <td>Required. Identifier. The name of the posture, in the format `organizations/&#123;organization&#125;/locations/global/postures/&#123;posture_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. The user-specified annotations for the posture. For details about the values you can use in an annotation, see [AIP-148: Standard fields](https://google.aip.dev/148#annotations).</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Output only. The categories that the posture belongs to, as determined by the Security Posture API.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the posture was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the posture.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An opaque identifier for the current version of the posture at the specified `revision_id`. To prevent concurrent updates from overwriting each other, always provide the `etag` when you update a posture. You can also provide the `etag` when you delete a posture, to help ensure that you're deleting the intended version of the posture.</td>
</tr>
<tr>
    <td><CopyableCode code="policySets" /></td>
    <td><code>array</code></td>
    <td>Required. The PolicySet resources that the posture includes.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the posture is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. An opaque eight-character string that identifies the revision of the posture. A posture can have multiple revisions; when you deploy a posture, you deploy a specific revision of the posture.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The state of the posture at the specified `revision_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the posture was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListPostures.

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
    <td>A pagination token. To retrieve the next page of results, call the method again with this token.</td>
</tr>
<tr>
    <td><CopyableCode code="postures" /></td>
    <td><code>array</code></td>
    <td>The list of Posture resources.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that were temporarily unavailable and could not be reached.</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-posturesId"><code>posturesId</code></a></td>
    <td><a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td>Gets a single revision of a Posture.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the most recent revisions of all Posture resources in a specified organization and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-postureId"><code>postureId</code></a></td>
    <td>Creates a new Posture.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-posturesId"><code>posturesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td>Updates a revision of an existing Posture. If the posture revision that you update is currently deployed, then a new revision of the posture is created. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture: 1. Call GetPosture to get the current version of the posture. 2. Update the fields in the posture as needed. 3. Call UpdatePosture to update the posture. Ensure that your request includes the `etag` value from the GetPosture response. **Important:** If you omit the `etag` when you call UpdatePosture, then the updated posture unconditionally overwrites the existing posture.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-posturesId"><code>posturesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes all revisions of a Posture. You can only delete a posture if none of its revisions are deployed.</td>
</tr>
<tr>
    <td><a href="#extract"><CopyableCode code="extract" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Extracts existing policies from an organization, folder, or project, and applies them to another organization, folder, or project as a Posture. If the other organization, folder, or project already has a posture, then the result of the long-running operation is an ALREADY_EXISTS error.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-posturesId">
    <td><CopyableCode code="posturesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-postureId">
    <td><CopyableCode code="postureId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
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

Gets a single revision of a Posture.

```sql
SELECT
name,
annotations,
categories,
createTime,
description,
etag,
policySets,
reconciling,
revisionId,
state,
updateTime
FROM google.securityposture.postures
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND posturesId = '{{ posturesId }}' -- required
AND revisionId = '{{ revisionId }}';
```
</TabItem>
<TabItem value="list">

Lists the most recent revisions of all Posture resources in a specified organization and location.

```sql
SELECT
nextPageToken,
postures,
unreachable
FROM google.securityposture.postures
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new Posture.

```sql
INSERT INTO google.securityposture.postures (
data__name,
data__state,
data__description,
data__policySets,
data__etag,
data__annotations,
organizationsId,
locationsId,
postureId
)
SELECT 
'{{ name }}',
'{{ state }}',
'{{ description }}',
'{{ policySets }}',
'{{ etag }}',
'{{ annotations }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ postureId }}'
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
- name: postures
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the postures resource.
    - name: locationsId
      value: string
      description: Required parameter for the postures resource.
    - name: name
      value: string
      description: >
        Required. Identifier. The name of the posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
        
    - name: state
      value: string
      description: >
        Required. The state of the posture at the specified `revision_id`.
        
      valid_values: ['STATE_UNSPECIFIED', 'DEPRECATED', 'DRAFT', 'ACTIVE']
    - name: description
      value: string
      description: >
        Optional. A description of the posture.
        
    - name: policySets
      value: array
      description: >
        Required. The PolicySet resources that the posture includes.
        
    - name: etag
      value: string
      description: >
        Optional. An opaque identifier for the current version of the posture at the specified `revision_id`. To prevent concurrent updates from overwriting each other, always provide the `etag` when you update a posture. You can also provide the `etag` when you delete a posture, to help ensure that you're deleting the intended version of the posture.
        
    - name: annotations
      value: object
      description: >
        Optional. The user-specified annotations for the posture. For details about the values you can use in an annotation, see [AIP-148: Standard fields](https://google.aip.dev/148#annotations).
        
    - name: postureId
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

Updates a revision of an existing Posture. If the posture revision that you update is currently deployed, then a new revision of the posture is created. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture: 1. Call GetPosture to get the current version of the posture. 2. Update the fields in the posture as needed. 3. Call UpdatePosture to update the posture. Ensure that your request includes the `etag` value from the GetPosture response. **Important:** If you omit the `etag` when you call UpdatePosture, then the updated posture unconditionally overwrites the existing posture.

```sql
UPDATE google.securityposture.postures
SET 
data__name = '{{ name }}',
data__state = '{{ state }}',
data__description = '{{ description }}',
data__policySets = '{{ policySets }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND posturesId = '{{ posturesId }}' --required
AND updateMask = '{{ updateMask}}'
AND revisionId = '{{ revisionId}}'
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

Deletes all revisions of a Posture. You can only delete a posture if none of its revisions are deployed.

```sql
DELETE FROM google.securityposture.postures
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND posturesId = '{{ posturesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="extract"
    values={[
        { label: 'extract', value: 'extract' }
    ]}
>
<TabItem value="extract">

Extracts existing policies from an organization, folder, or project, and applies them to another organization, folder, or project as a Posture. If the other organization, folder, or project already has a posture, then the result of the long-running operation is an ALREADY_EXISTS error.

```sql
EXEC google.securityposture.postures.extract 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"postureId": "{{ postureId }}", 
"workload": "{{ workload }}"
}';
```
</TabItem>
</Tabs>
