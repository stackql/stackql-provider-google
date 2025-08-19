--- 
title: data_sources_access_token
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources_access_token
  - backupdr
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

Creates, updates, deletes, gets or lists a <code>data_sources_access_token</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_sources_access_token</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.data_sources_access_token" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_access_token"
    values={[
        { label: 'fetch_access_token', value: 'fetch_access_token' }
    ]}
>
<TabItem value="fetch_access_token">

Response message for FetchAccessToken.

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
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The token is valid until this time.</td>
</tr>
<tr>
    <td><CopyableCode code="readLocation" /></td>
    <td><code>string</code></td>
    <td>The location in bucket that can be used for reading.</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The downscoped token that was created.</td>
</tr>
<tr>
    <td><CopyableCode code="writeLocation" /></td>
    <td><code>string</code></td>
    <td>The location in bucket that can be used for writing.</td>
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
    <td><a href="#fetch_access_token"><CopyableCode code="fetch_access_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Internal only. Fetch access token for a given data source.</td>
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
<tr id="parameter-backupVaultsId">
    <td><CopyableCode code="backupVaultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataSourcesId">
    <td><CopyableCode code="dataSourcesId" /></td>
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
    defaultValue="fetch_access_token"
    values={[
        { label: 'fetch_access_token', value: 'fetch_access_token' }
    ]}
>
<TabItem value="fetch_access_token">

Internal only. Fetch access token for a given data source.

```sql
SELECT
expireTime,
readLocation,
token,
writeLocation
FROM google.backupdr.data_sources_access_token
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required;
```
</TabItem>
</Tabs>
