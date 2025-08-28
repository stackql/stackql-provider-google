--- 
title: threat_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - threat_lists
  - webrisk
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

Creates, updates, deletes, gets or lists a <code>threat_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>threat_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.webrisk.threat_lists" /></td></tr>
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
    <td><a href="#compute_diff"><CopyableCode code="compute_diff" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-threatType"><code>threatType</code></a>, <a href="#parameter-versionToken"><code>versionToken</code></a>, <a href="#parameter-constraints.maxDiffEntries"><code>constraints.maxDiffEntries</code></a>, <a href="#parameter-constraints.maxDatabaseEntries"><code>constraints.maxDatabaseEntries</code></a>, <a href="#parameter-constraints.supportedCompressions"><code>constraints.supportedCompressions</code></a></td>
    <td>Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.</td>
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
<tr id="parameter-constraints.maxDatabaseEntries">
    <td><CopyableCode code="constraints.maxDatabaseEntries" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-constraints.maxDiffEntries">
    <td><CopyableCode code="constraints.maxDiffEntries" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-constraints.supportedCompressions">
    <td><CopyableCode code="constraints.supportedCompressions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-threatType">
    <td><CopyableCode code="threatType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionToken">
    <td><CopyableCode code="versionToken" /></td>
    <td><code>string (byte)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="compute_diff"
    values={[
        { label: 'compute_diff', value: 'compute_diff' }
    ]}
>
<TabItem value="compute_diff">

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

```sql
EXEC google.webrisk.threat_lists.compute_diff 
@threatType='{{ threatType }}', 
@versionToken='{{ versionToken }}', 
@constraints.maxDiffEntries='{{ constraints.maxDiffEntries }}', 
@constraints.maxDatabaseEntries='{{ constraints.maxDatabaseEntries }}', 
@constraints.supportedCompressions='{{ constraints.supportedCompressions }}';
```
</TabItem>
</Tabs>
