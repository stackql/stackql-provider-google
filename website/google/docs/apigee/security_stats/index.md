--- 
title: security_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - security_stats
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

Creates, updates, deletes, gets or lists a <code>security_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_stats</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_stats" /></td></tr>
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
    <td><a href="#organizations_environments_security_stats_query_tabular_stats"><CopyableCode code="organizations_environments_security_stats_query_tabular_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Retrieve security statistics as tabular rows.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_stats_query_time_series_stats"><CopyableCode code="organizations_environments_security_stats_query_time_series_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Retrieve security statistics as a collection of time series.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
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

## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_security_stats_query_tabular_stats"
    values={[
        { label: 'organizations_environments_security_stats_query_tabular_stats', value: 'organizations_environments_security_stats_query_tabular_stats' },
        { label: 'organizations_environments_security_stats_query_time_series_stats', value: 'organizations_environments_security_stats_query_time_series_stats' }
    ]}
>
<TabItem value="organizations_environments_security_stats_query_tabular_stats">

Retrieve security statistics as tabular rows.

```sql
EXEC google.apigee.security_stats.organizations_environments_security_stats_query_tabular_stats 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"dimensions": "{{ dimensions }}", 
"metrics": "{{ metrics }}", 
"filter": "{{ filter }}", 
"timeRange": "{{ timeRange }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
<TabItem value="organizations_environments_security_stats_query_time_series_stats">

Retrieve security statistics as a collection of time series.

```sql
EXEC google.apigee.security_stats.organizations_environments_security_stats_query_time_series_stats 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"dimensions": "{{ dimensions }}", 
"metrics": "{{ metrics }}", 
"filter": "{{ filter }}", 
"windowSize": "{{ windowSize }}", 
"timeRange": "{{ timeRange }}", 
"timestampOrder": "{{ timestampOrder }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
