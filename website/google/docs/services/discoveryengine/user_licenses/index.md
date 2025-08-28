--- 
title: user_licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - user_licenses
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

Creates, updates, deletes, gets or lists a <code>user_licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_licenses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.user_licenses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_user_stores_user_licenses_list"
    values={[
        { label: 'projects_locations_user_stores_user_licenses_list', value: 'projects_locations_user_stores_user_licenses_list' }
    ]}
>
<TabItem value="projects_locations_user_stores_user_licenses_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. User created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="lastLoginTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. User last logged in time. If the user has not logged in yet, this field will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseAssignmentState" /></td>
    <td><code>string</code></td>
    <td>Output only. License assignment state of the user. If the user is assigned with a license config, the user login will be assigned with the license; If the user's license assignment state is unassigned or unspecified, no license config will be associated to the user;</td>
</tr>
<tr>
    <td><CopyableCode code="licenseConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. The full resource name of the Subscription(LicenseConfig) assigned to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. User update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="userPrincipal" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The user principal of the User, could be email address or other prinical identifier. This field is immutable. Admin assign licenses based on the user principal.</td>
</tr>
<tr>
    <td><CopyableCode code="userProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. The user profile. We user user full name(First name + Last name) as user profile.</td>
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
    <td><a href="#projects_locations_user_stores_user_licenses_list"><CopyableCode code="projects_locations_user_stores_user_licenses_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the User Licenses.</td>
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
<tr id="parameter-userStoresId">
    <td><CopyableCode code="userStoresId" /></td>
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
    defaultValue="projects_locations_user_stores_user_licenses_list"
    values={[
        { label: 'projects_locations_user_stores_user_licenses_list', value: 'projects_locations_user_stores_user_licenses_list' }
    ]}
>
<TabItem value="projects_locations_user_stores_user_licenses_list">

Lists the User Licenses.

```sql
SELECT
createTime,
lastLoginTime,
licenseAssignmentState,
licenseConfig,
updateTime,
userPrincipal,
userProfile
FROM google.discoveryengine.user_licenses
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND userStoresId = '{{ userStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
