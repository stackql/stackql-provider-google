--- 
title: entitlement
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlement
  - apim
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

Creates, updates, deletes, gets or lists an <code>entitlement</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entitlement</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apim.entitlement" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entitlement"
    values={[
        { label: 'get_entitlement', value: 'get_entitlement' }
    ]}
>
<TabItem value="get_entitlement">

Entitlement stores data related to API Observation entitlement for a given project

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
    <td>Identifier. The entitlement resource name `projects/&#123;project&#125;/locations/&#123;location&#125;/entitlement`</td>
</tr>
<tr>
    <td><CopyableCode code="apiObservationEntitled" /></td>
    <td><code>boolean</code></td>
    <td>Whether API Observation is entitled.</td>
</tr>
<tr>
    <td><CopyableCode code="billingProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Project number of associated billing project that has Apigee and Advanced API Security entitled.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the entitlement creation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the entitlement update.</td>
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
    <td><a href="#get_entitlement"><CopyableCode code="get_entitlement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>GetEntitlement returns the entitlement for the provided project.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_entitlement"
    values={[
        { label: 'get_entitlement', value: 'get_entitlement' }
    ]}
>
<TabItem value="get_entitlement">

GetEntitlement returns the entitlement for the provided project.

```sql
SELECT
name,
apiObservationEntitled,
billingProjectNumber,
createTime,
updateTime
FROM google.apim.entitlement
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>
