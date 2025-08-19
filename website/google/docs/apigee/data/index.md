--- 
title: data
hide_title: false
hide_table_of_contents: false
keywords:
  - data
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

Creates, updates, deletes, gets or lists a <code>data</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.data" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_apis_revisions_debugsessions_data_get"
    values={[
        { label: 'organizations_environments_apis_revisions_debugsessions_data_get', value: 'organizations_environments_apis_revisions_debugsessions_data_get' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_debugsessions_data_get">

A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.

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
    <td><CopyableCode code="completed" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether a transaction is completed or not</td>
</tr>
<tr>
    <td><CopyableCode code="point" /></td>
    <td><code>array</code></td>
    <td>List of debug data collected by runtime plane at various defined points in the flow.</td>
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
    <td><a href="#organizations_environments_apis_revisions_debugsessions_data_get"><CopyableCode code="organizations_environments_apis_revisions_debugsessions_data_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-debugsessionsId"><code>debugsessionsId</code></a>, <a href="#parameter-dataId"><code>dataId</code></a></td>
    <td></td>
    <td>Gets the debug data from a transaction.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataId">
    <td><CopyableCode code="dataId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-debugsessionsId">
    <td><CopyableCode code="debugsessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_apis_revisions_debugsessions_data_get"
    values={[
        { label: 'organizations_environments_apis_revisions_debugsessions_data_get', value: 'organizations_environments_apis_revisions_debugsessions_data_get' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_debugsessions_data_get">

Gets the debug data from a transaction.

```sql
SELECT
completed,
point
FROM google.apigee.data
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND debugsessionsId = '{{ debugsessionsId }}' -- required
AND dataId = '{{ dataId }}' -- required;
```
</TabItem>
</Tabs>
