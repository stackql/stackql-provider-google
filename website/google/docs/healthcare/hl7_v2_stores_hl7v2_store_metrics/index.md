--- 
title: hl7_v2_stores_hl7v2_store_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - hl7_v2_stores_hl7v2_store_metrics
  - healthcare
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

Creates, updates, deletes, gets or lists a <code>hl7_v2_stores_hl7v2_store_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hl7_v2_stores_hl7v2_store_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.hl7_v2_stores_hl7v2_store_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hl7v2_store_metrics"
    values={[
        { label: 'get_hl7v2_store_metrics', value: 'get_hl7v2_store_metrics' }
    ]}
>
<TabItem value="get_hl7v2_store_metrics">

List of metrics for a given HL7v2 store.

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
    <td>The resource name of the HL7v2 store to get metrics for, in the format `projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/hl7V2Stores/&#123;hl7v2_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>List of HL7v2 store metrics by message type.</td>
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
    <td><a href="#get_hl7v2_store_metrics"><CopyableCode code="get_hl7v2_store_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a></td>
    <td></td>
    <td>Gets metrics associated with the HL7v2 store.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-hl7V2StoresId">
    <td><CopyableCode code="hl7V2StoresId" /></td>
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
    defaultValue="get_hl7v2_store_metrics"
    values={[
        { label: 'get_hl7v2_store_metrics', value: 'get_hl7v2_store_metrics' }
    ]}
>
<TabItem value="get_hl7v2_store_metrics">

Gets metrics associated with the HL7v2 store.

```sql
SELECT
name,
metrics
FROM google.healthcare.hl7_v2_stores_hl7v2_store_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND hl7V2StoresId = '{{ hl7V2StoresId }}' -- required;
```
</TabItem>
</Tabs>
