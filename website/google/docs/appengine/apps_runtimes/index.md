--- 
title: apps_runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_runtimes
  - appengine
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

Creates, updates, deletes, gets or lists an <code>apps_runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps_runtimes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.apps_runtimes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_runtimes"
    values={[
        { label: 'list_runtimes', value: 'list_runtimes' }
    ]}
>
<TabItem value="list_runtimes">

Response message for Applications.ListRuntimes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Continuation token for fetching the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimes" /></td>
    <td><code>array</code></td>
    <td>The runtimes available to the requested application.</td>
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
    <td><a href="#list_runtimes"><CopyableCode code="list_runtimes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td>Lists all the available runtimes for the application.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_runtimes"
    values={[
        { label: 'list_runtimes', value: 'list_runtimes' }
    ]}
>
<TabItem value="list_runtimes">

Lists all the available runtimes for the application.

```sql
SELECT
nextPageToken,
runtimes
FROM google.appengine.apps_runtimes
WHERE appsId = '{{ appsId }}' -- required
AND environment = '{{ environment }}';
```
</TabItem>
</Tabs>
