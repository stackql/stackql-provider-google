--- 
title: user_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - user_stores
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

Creates, updates, deletes, gets or lists a <code>user_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.user_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_user_stores_batch_update_user_licenses"><CopyableCode code="projects_locations_user_stores_batch_update_user_licenses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td></td>
    <td>Updates the User License. This method is used for batch assign/unassign licenses to users.</td>
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
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_user_stores_batch_update_user_licenses"
    values={[
        { label: 'projects_locations_user_stores_batch_update_user_licenses', value: 'projects_locations_user_stores_batch_update_user_licenses' }
    ]}
>
<TabItem value="projects_locations_user_stores_batch_update_user_licenses">

Updates the User License. This method is used for batch assign/unassign licenses to users.

```sql
UPDATE google.discoveryengine.user_stores
SET 
data__inlineSource = '{{ inlineSource }}',
data__deleteUnassignedUserLicenses = {{ deleteUnassignedUserLicenses }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND userStoresId = '{{ userStoresId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
