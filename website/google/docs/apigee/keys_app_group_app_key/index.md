--- 
title: keys_app_group_app_key
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_app_group_app_key
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

Creates, updates, deletes, gets or lists a <code>keys_app_group_app_key</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys_app_group_app_key</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.keys_app_group_app_key" /></td></tr>
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
    <td><a href="#organizations_appgroups_apps_keys_update_app_group_app_key"><CopyableCode code="organizations_appgroups_apps_keys_update_app_group_app_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="organizations_appgroups_apps_keys_update_app_group_app_key"
    values={[
        { label: 'organizations_appgroups_apps_keys_update_app_group_app_key', value: 'organizations_appgroups_apps_keys_update_app_group_app_key' }
    ]}
>
<TabItem value="organizations_appgroups_apps_keys_update_app_group_app_key">

Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.

```sql
UPDATE google.apigee.keys_app_group_app_key
SET 
data__action = '{{ action }}',
data__appGroupAppKey = '{{ appGroupAppKey }}',
data__apiProducts = '{{ apiProducts }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required
RETURNING
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status;
```
</TabItem>
</Tabs>
