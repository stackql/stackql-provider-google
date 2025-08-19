--- 
title: endpoint_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_attachments
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

Creates, updates, deletes, gets or lists an <code>endpoint_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>endpoint_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.endpoint_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_endpoint_attachments_get"
    values={[
        { label: 'organizations_endpoint_attachments_get', value: 'organizations_endpoint_attachments_get' },
        { label: 'organizations_endpoint_attachments_list', value: 'organizations_endpoint_attachments_list' }
    ]}
>
<TabItem value="organizations_endpoint_attachments_get">

Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).

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
    <td>Name of the endpoint attachment. Use the following structure in your request: `organizations/&#123;org&#125;/endpointAttachments/&#123;endpoint_attachment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="connectionState" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the endpoint attachment connection to the service attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Required. Location of the endpoint attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAttachment" /></td>
    <td><code>string</code></td>
    <td>Format: projects/*/regions/*/serviceAttachments/*</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_endpoint_attachments_list">

Response for ListEndpointAttachments method.

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
    <td><CopyableCode code="endpointAttachments" /></td>
    <td><code>array</code></td>
    <td>Endpoint attachments in the specified organization.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Page token that you can include in an `ListEndpointAttachments` request to retrieve the next page. If omitted, no subsequent pages exist.</td>
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
    <td><a href="#organizations_endpoint_attachments_get"><CopyableCode code="organizations_endpoint_attachments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-endpointAttachmentsId"><code>endpointAttachmentsId</code></a></td>
    <td></td>
    <td>Gets the endpoint attachment.</td>
</tr>
<tr>
    <td><a href="#organizations_endpoint_attachments_list"><CopyableCode code="organizations_endpoint_attachments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the endpoint attachments in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_endpoint_attachments_create"><CopyableCode code="organizations_endpoint_attachments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-endpointAttachmentId"><code>endpointAttachmentId</code></a></td>
    <td>Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_endpoint_attachments_delete"><CopyableCode code="organizations_endpoint_attachments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-endpointAttachmentsId"><code>endpointAttachmentsId</code></a></td>
    <td></td>
    <td>Deletes an endpoint attachment.</td>
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
<tr id="parameter-endpointAttachmentsId">
    <td><CopyableCode code="endpointAttachmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-endpointAttachmentId">
    <td><CopyableCode code="endpointAttachmentId" /></td>
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
    defaultValue="organizations_endpoint_attachments_get"
    values={[
        { label: 'organizations_endpoint_attachments_get', value: 'organizations_endpoint_attachments_get' },
        { label: 'organizations_endpoint_attachments_list', value: 'organizations_endpoint_attachments_list' }
    ]}
>
<TabItem value="organizations_endpoint_attachments_get">

Gets the endpoint attachment.

```sql
SELECT
name,
connectionState,
host,
location,
serviceAttachment,
state
FROM google.apigee.endpoint_attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND endpointAttachmentsId = '{{ endpointAttachmentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_endpoint_attachments_list">

Lists the endpoint attachments in an organization.

```sql
SELECT
endpointAttachments,
nextPageToken
FROM google.apigee.endpoint_attachments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_endpoint_attachments_create"
    values={[
        { label: 'organizations_endpoint_attachments_create', value: 'organizations_endpoint_attachments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_endpoint_attachments_create">

Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.

```sql
INSERT INTO google.apigee.endpoint_attachments (
data__name,
data__serviceAttachment,
data__location,
organizationsId,
endpointAttachmentId
)
SELECT 
'{{ name }}',
'{{ serviceAttachment }}',
'{{ location }}',
'{{ organizationsId }}',
'{{ endpointAttachmentId }}'
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
- name: endpoint_attachments
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the endpoint_attachments resource.
    - name: name
      value: string
      description: >
        Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`
        
    - name: serviceAttachment
      value: string
      description: >
        Format: projects/*/regions/*/serviceAttachments/*
        
    - name: location
      value: string
      description: >
        Required. Location of the endpoint attachment.
        
    - name: endpointAttachmentId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_endpoint_attachments_delete"
    values={[
        { label: 'organizations_endpoint_attachments_delete', value: 'organizations_endpoint_attachments_delete' }
    ]}
>
<TabItem value="organizations_endpoint_attachments_delete">

Deletes an endpoint attachment.

```sql
DELETE FROM google.apigee.endpoint_attachments
WHERE organizationsId = '{{ organizationsId }}' --required
AND endpointAttachmentsId = '{{ endpointAttachmentsId }}' --required;
```
</TabItem>
</Tabs>
