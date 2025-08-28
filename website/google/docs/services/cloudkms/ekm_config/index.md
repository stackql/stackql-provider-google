--- 
title: ekm_config
hide_title: false
hide_table_of_contents: false
keywords:
  - ekm_config
  - cloudkms
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

Creates, updates, deletes, gets or lists an <code>ekm_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ekm_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.ekm_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ekm_config"
    values={[
        { label: 'get_ekm_config', value: 'get_ekm_config' }
    ]}
>
<TabItem value="get_ekm_config">

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
    <td>Output only. The resource name for the EkmConfig in the format `projects/*/locations/*/ekmConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEkmConnection" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default.</td>
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
    <td><a href="#get_ekm_config"><CopyableCode code="get_ekm_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Returns the EkmConfig singleton resource for a given project and location.</td>
</tr>
<tr>
    <td><a href="#update_ekm_config"><CopyableCode code="update_ekm_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the EkmConfig singleton resource for a given project and location.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ekm_config"
    values={[
        { label: 'get_ekm_config', value: 'get_ekm_config' }
    ]}
>
<TabItem value="get_ekm_config">

Returns the EkmConfig singleton resource for a given project and location.

```sql
SELECT
name,
defaultEkmConnection
FROM google.cloudkms.ekm_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ekm_config"
    values={[
        { label: 'update_ekm_config', value: 'update_ekm_config' }
    ]}
>
<TabItem value="update_ekm_config">

Updates the EkmConfig singleton resource for a given project and location.

```sql
UPDATE google.cloudkms.ekm_config
SET 
data__defaultEkmConnection = '{{ defaultEkmConnection }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultEkmConnection;
```
</TabItem>
</Tabs>
