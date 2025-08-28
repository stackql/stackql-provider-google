--- 
title: runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - runtimes
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

Creates, updates, deletes, gets or lists a <code>runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>runtimes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.runtimes" /></td></tr>
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
    <td>The name of the runtime, e.g., 'go113', 'nodejs12', etc.</td>
</tr>
<tr>
    <td><CopyableCode code="decommissionedDate" /></td>
    <td><code>object</code></td>
    <td>Date when Runtime is decommissioned. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecationDate" /></td>
    <td><code>object</code></td>
    <td>Date when Runtime is deprecated. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-friendly display name, e.g. 'Node.js 12', etc.</td>
</tr>
<tr>
    <td><CopyableCode code="endOfSupportDate" /></td>
    <td><code>object</code></td>
    <td>Date when Runtime is end of support. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment of the runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The stage of life this runtime is in, e.g., BETA, GA, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedOperatingSystems" /></td>
    <td><code>array</code></td>
    <td>Supported operating systems for the runtime, e.g., 'ubuntu22', etc.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Warning messages, e.g., a deprecation warning.</td>
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
name,
decommissionedDate,
deprecationDate,
displayName,
endOfSupportDate,
environment,
stage,
supportedOperatingSystems,
warnings
FROM google.appengine.runtimes
WHERE appsId = '{{ appsId }}' -- required
AND environment = '{{ environment }}';
```
</TabItem>
</Tabs>
