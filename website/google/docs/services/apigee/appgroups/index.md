--- 
title: appgroups
hide_title: false
hide_table_of_contents: false
keywords:
  - appgroups
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

Creates, updates, deletes, gets or lists an <code>appgroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>appgroups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.appgroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_appgroups_get"
    values={[
        { label: 'organizations_appgroups_get', value: 'organizations_appgroups_get' },
        { label: 'organizations_appgroups_list', value: 'organizations_appgroups_list' }
    ]}
>
<TabItem value="organizations_appgroups_get">

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
    <td>Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %.</td>
</tr>
<tr>
    <td><CopyableCode code="appGroupId" /></td>
    <td><code>string</code></td>
    <td>Output only. Internal identifier that cannot be edited</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>A list of attributes</td>
</tr>
<tr>
    <td><CopyableCode code="channelId" /></td>
    <td><code>string</code></td>
    <td>channel identifier identifies the owner maintaing this grouping.</td>
</tr>
<tr>
    <td><CopyableCode code="channelUri" /></td>
    <td><code>string</code></td>
    <td>A reference to the associated storefront/marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Created time as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>app group name displayed in the UI</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Modified time as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>string</code></td>
    <td>Immutable. the org the app group is created</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_appgroups_list">

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
    <td>Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %.</td>
</tr>
<tr>
    <td><CopyableCode code="appGroupId" /></td>
    <td><code>string</code></td>
    <td>Output only. Internal identifier that cannot be edited</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>A list of attributes</td>
</tr>
<tr>
    <td><CopyableCode code="channelId" /></td>
    <td><code>string</code></td>
    <td>channel identifier identifies the owner maintaing this grouping.</td>
</tr>
<tr>
    <td><CopyableCode code="channelUri" /></td>
    <td><code>string</code></td>
    <td>A reference to the associated storefront/marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Created time as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>app group name displayed in the UI</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Modified time as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>string</code></td>
    <td>Immutable. the org the app group is created</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`.</td>
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
    <td><a href="#organizations_appgroups_get"><CopyableCode code="organizations_appgroups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Returns the AppGroup details for the provided AppGroup name in the request URI.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_list"><CopyableCode code="organizations_appgroups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_create"><CopyableCode code="organizations_appgroups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_update"><CopyableCode code="organizations_appgroups_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using `action`, and not via AppGroup.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_delete"><CopyableCode code="organizations_appgroups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. **Warning**: This API will permanently delete the AppGroup and related artifacts. **Note**: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.</td>
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
<tr id="parameter-appgroupsId">
    <td><CopyableCode code="appgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_appgroups_get"
    values={[
        { label: 'organizations_appgroups_get', value: 'organizations_appgroups_get' },
        { label: 'organizations_appgroups_list', value: 'organizations_appgroups_list' }
    ]}
>
<TabItem value="organizations_appgroups_get">

Returns the AppGroup details for the provided AppGroup name in the request URI.

```sql
SELECT
name,
appGroupId,
attributes,
channelId,
channelUri,
createdAt,
displayName,
lastModifiedAt,
organization,
status
FROM google.apigee.appgroups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_appgroups_list">

Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

```sql
SELECT
name,
appGroupId,
attributes,
channelId,
channelUri,
createdAt,
displayName,
lastModifiedAt,
organization,
status
FROM google.apigee.appgroups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_appgroups_create"
    values={[
        { label: 'organizations_appgroups_create', value: 'organizations_appgroups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_appgroups_create">

Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.

```sql
INSERT INTO google.apigee.appgroups (
data__name,
data__channelUri,
data__channelId,
data__displayName,
data__organization,
data__status,
data__attributes,
organizationsId
)
SELECT 
'{{ name }}',
'{{ channelUri }}',
'{{ channelId }}',
'{{ displayName }}',
'{{ organization }}',
'{{ status }}',
'{{ attributes }}',
'{{ organizationsId }}'
RETURNING
name,
appGroupId,
attributes,
channelId,
channelUri,
createdAt,
displayName,
lastModifiedAt,
organization,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: appgroups
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the appgroups resource.
    - name: name
      value: string
      description: >
        Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %.
        
    - name: channelUri
      value: string
      description: >
        A reference to the associated storefront/marketplace.
        
    - name: channelId
      value: string
      description: >
        channel identifier identifies the owner maintaing this grouping.
        
    - name: displayName
      value: string
      description: >
        app group name displayed in the UI
        
    - name: organization
      value: string
      description: >
        Immutable. the org the app group is created
        
    - name: status
      value: string
      description: >
        Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`.
        
    - name: attributes
      value: array
      description: >
        A list of attributes
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_appgroups_update"
    values={[
        { label: 'organizations_appgroups_update', value: 'organizations_appgroups_update' }
    ]}
>
<TabItem value="organizations_appgroups_update">

Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using `action`, and not via AppGroup.

```sql
REPLACE google.apigee.appgroups
SET 
data__name = '{{ name }}',
data__channelUri = '{{ channelUri }}',
data__channelId = '{{ channelId }}',
data__displayName = '{{ displayName }}',
data__organization = '{{ organization }}',
data__status = '{{ status }}',
data__attributes = '{{ attributes }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND action = '{{ action}}'
RETURNING
name,
appGroupId,
attributes,
channelId,
channelUri,
createdAt,
displayName,
lastModifiedAt,
organization,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_appgroups_delete"
    values={[
        { label: 'organizations_appgroups_delete', value: 'organizations_appgroups_delete' }
    ]}
>
<TabItem value="organizations_appgroups_delete">

Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. **Warning**: This API will permanently delete the AppGroup and related artifacts. **Note**: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

```sql
DELETE FROM google.apigee.appgroups
WHERE organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required;
```
</TabItem>
</Tabs>
