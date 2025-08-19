--- 
title: sharedflows
hide_title: false
hide_table_of_contents: false
keywords:
  - sharedflows
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

Creates, updates, deletes, gets or lists a <code>sharedflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sharedflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.sharedflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sharedflows_get"
    values={[
        { label: 'organizations_sharedflows_get', value: 'organizations_sharedflows_get' },
        { label: 'organizations_sharedflows_list', value: 'organizations_sharedflows_list' }
    ]}
>
<TabItem value="organizations_sharedflows_get">

The metadata describing a shared flow

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
    <td>The ID of the shared flow.</td>
</tr>
<tr>
    <td><CopyableCode code="latestRevisionId" /></td>
    <td><code>string</code></td>
    <td>The id of the most recently created revision for this shared flow.</td>
</tr>
<tr>
    <td><CopyableCode code="metaData" /></td>
    <td><code>object</code></td>
    <td>Metadata describing the shared flow. (id: GoogleCloudApigeeV1EntityMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>array</code></td>
    <td>A list of revisions of this shared flow.</td>
</tr>
<tr>
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID of the space associated with this shared flow. Any IAM policies applied to the space will control access to this shared flow. To learn how Spaces can be used to manage resources, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sharedflows_list">

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
    <td><CopyableCode code="sharedFlows" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#organizations_sharedflows_get"><CopyableCode code="organizations_sharedflows_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a></td>
    <td></td>
    <td>Gets a shared flow by name, including a list of its revisions.</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_list"><CopyableCode code="organizations_sharedflows_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-includeRevisions"><code>includeRevisions</code></a>, <a href="#parameter-includeMetaData"><code>includeMetaData</code></a>, <a href="#parameter-space"><code>space</code></a></td>
    <td>Lists all shared flows in the organization. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_create"><CopyableCode code="organizations_sharedflows_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-space"><code>space</code></a></td>
    <td>Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_delete"><CopyableCode code="organizations_sharedflows_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a></td>
    <td></td>
    <td>Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_move"><CopyableCode code="organizations_sharedflows_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a></td>
    <td></td>
    <td>Moves an shared flow to a different space.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sharedflowsId">
    <td><CopyableCode code="sharedflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeMetaData">
    <td><CopyableCode code="includeMetaData" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeRevisions">
    <td><CopyableCode code="includeRevisions" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-space">
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_sharedflows_get"
    values={[
        { label: 'organizations_sharedflows_get', value: 'organizations_sharedflows_get' },
        { label: 'organizations_sharedflows_list', value: 'organizations_sharedflows_list' }
    ]}
>
<TabItem value="organizations_sharedflows_get">

Gets a shared flow by name, including a list of its revisions.

```sql
SELECT
name,
latestRevisionId,
metaData,
revision,
space
FROM google.apigee.sharedflows
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sharedflowsId = '{{ sharedflowsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_sharedflows_list">

Lists all shared flows in the organization. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

```sql
SELECT
sharedFlows
FROM google.apigee.sharedflows
WHERE organizationsId = '{{ organizationsId }}' -- required
AND includeRevisions = '{{ includeRevisions }}'
AND includeMetaData = '{{ includeMetaData }}'
AND space = '{{ space }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sharedflows_create"
    values={[
        { label: 'organizations_sharedflows_create', value: 'organizations_sharedflows_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sharedflows_create">

Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.

```sql
INSERT INTO google.apigee.sharedflows (
data__contentType,
data__data,
data__extensions,
organizationsId,
action,
name,
space
)
SELECT 
'{{ contentType }}',
'{{ data }}',
'{{ extensions }}',
'{{ organizationsId }}',
'{{ action }}',
'{{ name }}',
'{{ space }}'
RETURNING
name,
configurationVersion,
contextInfo,
createdAt,
description,
displayName,
entityMetaDataAsProperties,
lastModifiedAt,
policies,
resourceFiles,
resources,
revision,
sharedFlows,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sharedflows
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the sharedflows resource.
    - name: contentType
      value: string
      description: >
        The HTTP Content-Type header value specifying the content type of the body.
        
    - name: data
      value: string
      description: >
        The HTTP request/response body as raw binary.
        
    - name: extensions
      value: array
      description: >
        Application specific response metadata. Must be set in the first response for streaming APIs.
        
    - name: action
      value: string
    - name: name
      value: string
    - name: space
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_sharedflows_delete"
    values={[
        { label: 'organizations_sharedflows_delete', value: 'organizations_sharedflows_delete' }
    ]}
>
<TabItem value="organizations_sharedflows_delete">

Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.

```sql
DELETE FROM google.apigee.sharedflows
WHERE organizationsId = '{{ organizationsId }}' --required
AND sharedflowsId = '{{ sharedflowsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_sharedflows_move"
    values={[
        { label: 'organizations_sharedflows_move', value: 'organizations_sharedflows_move' }
    ]}
>
<TabItem value="organizations_sharedflows_move">

Moves an shared flow to a different space.

```sql
EXEC google.apigee.sharedflows.organizations_sharedflows_move 
@organizationsId='{{ organizationsId }}' --required, 
@sharedflowsId='{{ sharedflowsId }}' --required 
@@json=
'{
"space": "{{ space }}"
}';
```
</TabItem>
</Tabs>
