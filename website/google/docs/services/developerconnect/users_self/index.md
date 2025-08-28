--- 
title: users_self
hide_title: false
hide_table_of_contents: false
keywords:
  - users_self
  - developerconnect
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

Creates, updates, deletes, gets or lists a <code>users_self</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users_self</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.users_self" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_self"
    values={[
        { label: 'fetch_self', value: 'fetch_self' }
    ]}
>
<TabItem value="fetch_self">

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
    <td>Identifier. Resource name of the user, in the format `projects/*/locations/*/accountConnectors/*/users/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTokenRequestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the token was last requested.</td>
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
    <td><a href="#fetch_self"><CopyableCode code="fetch_self" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td></td>
    <td>Fetch the User based on the user credentials.</td>
</tr>
<tr>
    <td><a href="#delete_self"><CopyableCode code="delete_self" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td></td>
    <td>Delete the User based on the user credentials.</td>
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
<tr id="parameter-accountConnectorsId">
    <td><CopyableCode code="accountConnectorsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_self"
    values={[
        { label: 'fetch_self', value: 'fetch_self' }
    ]}
>
<TabItem value="fetch_self">

Fetch the User based on the user credentials.

```sql
SELECT
name,
createTime,
displayName,
lastTokenRequestTime
FROM google.developerconnect.users_self
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND accountConnectorsId = '{{ accountConnectorsId }}' -- required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_self"
    values={[
        { label: 'delete_self', value: 'delete_self' }
    ]}
>
<TabItem value="delete_self">

Delete the User based on the user credentials.

```sql
DELETE FROM google.developerconnect.users_self
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND accountConnectorsId = '{{ accountConnectorsId }}' --required;
```
</TabItem>
</Tabs>
