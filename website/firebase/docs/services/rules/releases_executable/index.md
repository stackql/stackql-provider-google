--- 
title: releases_executable
hide_title: false
hide_table_of_contents: false
keywords:
  - releases_executable
  - rules
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>releases_executable</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>releases_executable</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.rules.releases_executable" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_executable"
    values={[
        { label: 'get_executable', value: 'get_executable' }
    ]}
>
<TabItem value="get_executable">

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
    <td><CopyableCode code="executable" /></td>
    <td><code>string (byte)</code></td>
    <td>Executable view of the `Ruleset` referenced by the `Release`.</td>
</tr>
<tr>
    <td><CopyableCode code="executableVersion" /></td>
    <td><code>string</code></td>
    <td>The Rules runtime version of the executable.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>`Language` used to generate the executable bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="rulesetName" /></td>
    <td><code>string</code></td>
    <td>`Ruleset` name associated with the `Release` executable.</td>
</tr>
<tr>
    <td><CopyableCode code="syncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp for the most recent `Release.update_time`.</td>
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
    <td><a href="#get_executable"><CopyableCode code="get_executable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td><a href="#parameter-executableVersion"><code>executableVersion</code></a></td>
    <td>Get the `Release` executable to use when enforcing rules.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-releasesId">
    <td><CopyableCode code="releasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-executableVersion">
    <td><CopyableCode code="executableVersion" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_executable"
    values={[
        { label: 'get_executable', value: 'get_executable' }
    ]}
>
<TabItem value="get_executable">

Get the `Release` executable to use when enforcing rules.

```sql
SELECT
executable,
executableVersion,
language,
rulesetName,
syncTime,
updateTime
FROM firebase.rules.releases_executable
WHERE projectsId = '{{ projectsId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND executableVersion = '{{ executableVersion }}';
```
</TabItem>
</Tabs>
