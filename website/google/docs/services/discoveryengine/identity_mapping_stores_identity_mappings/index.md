--- 
title: identity_mapping_stores_identity_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_mapping_stores_identity_mappings
  - discoveryengine
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

Creates, updates, deletes, gets or lists an <code>identity_mapping_stores_identity_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>identity_mapping_stores_identity_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.identity_mapping_stores_identity_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_identity_mapping_stores_list_identity_mappings"
    values={[
        { label: 'projects_locations_identity_mapping_stores_list_identity_mappings', value: 'projects_locations_identity_mapping_stores_list_identity_mappings' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_list_identity_mappings">

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
    <td><CopyableCode code="externalIdentity" /></td>
    <td><code>string</code></td>
    <td>Required. Identity outside the customer identity provider. The length limit of external identity will be of 100 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>Group identifier. For Google Workspace user account, group_id should be the google workspace group email. For non-google identity provider, group_id is the mapped group identifier configured during the workforcepool config.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>User identifier. For Google Workspace user account, user_id should be the google workspace user email. For non-google identity provider, user_id is the mapped user identifier configured during the workforcepool config.</td>
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
    <td><a href="#projects_locations_identity_mapping_stores_list_identity_mappings"><CopyableCode code="projects_locations_identity_mapping_stores_list_identity_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-identityMappingStoresId"><code>identityMappingStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Identity Mappings in an Identity Mapping Store.</td>
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
<tr id="parameter-identityMappingStoresId">
    <td><CopyableCode code="identityMappingStoresId" /></td>
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
    defaultValue="projects_locations_identity_mapping_stores_list_identity_mappings"
    values={[
        { label: 'projects_locations_identity_mapping_stores_list_identity_mappings', value: 'projects_locations_identity_mapping_stores_list_identity_mappings' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_list_identity_mappings">

Lists Identity Mappings in an Identity Mapping Store.

```sql
SELECT
externalIdentity,
groupId,
userId
FROM google.discoveryengine.identity_mapping_stores_identity_mappings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND identityMappingStoresId = '{{ identityMappingStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
