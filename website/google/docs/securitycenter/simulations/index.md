--- 
title: simulations
hide_title: false
hide_table_of_contents: false
keywords:
  - simulations
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>simulations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>simulations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.simulations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_simulations_get"
    values={[
        { label: 'organizations_simulations_get', value: 'organizations_simulations_get' }
    ]}
>
<TabItem value="organizations_simulations_get">

Attack path simulation

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
    <td>Full resource name of the Simulation: `organizations/123/simulations/456`</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>Indicates which cloud provider was used in this simulation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time simulation was created</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigsMetadata" /></td>
    <td><code>array</code></td>
    <td>Resource value configurations' metadata used in this simulation. Maximum of 100.</td>
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
    <td><a href="#organizations_simulations_get"><CopyableCode code="organizations_simulations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a></td>
    <td></td>
    <td>Get the simulation by name or the latest simulation for the given organization.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-simulationsId">
    <td><CopyableCode code="simulationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_simulations_get"
    values={[
        { label: 'organizations_simulations_get', value: 'organizations_simulations_get' }
    ]}
>
<TabItem value="organizations_simulations_get">

Get the simulation by name or the latest simulation for the given organization.

```sql
SELECT
name,
cloudProvider,
createTime,
resourceValueConfigsMetadata
FROM google.securitycenter.simulations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required;
```
</TabItem>
</Tabs>
