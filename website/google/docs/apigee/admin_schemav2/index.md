--- 
title: admin_schemav2
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_schemav2
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

Creates, updates, deletes, gets or lists an <code>admin_schemav2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>admin_schemav2</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.admin_schemav2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_analytics_admin_get_schemav2"
    values={[
        { label: 'organizations_environments_analytics_admin_get_schemav2', value: 'organizations_environments_analytics_admin_get_schemav2' }
    ]}
>
<TabItem value="organizations_environments_analytics_admin_get_schemav2">

Response for Schema call

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
    <td><CopyableCode code="dimensions" /></td>
    <td><code>array</code></td>
    <td>List of schema fields grouped as dimensions.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>array</code></td>
    <td>Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>List of schema fields grouped as dimensions that can be used with an aggregate function such as `sum`, `avg`, `min`, and `max`.</td>
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
    <td><a href="#organizations_environments_analytics_admin_get_schemav2"><CopyableCode code="organizations_environments_analytics_admin_get_schemav2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-disableCache"><code>disableCache</code></a></td>
    <td>Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.</td>
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
<tr id="parameter-disableCache">
    <td><CopyableCode code="disableCache" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_analytics_admin_get_schemav2"
    values={[
        { label: 'organizations_environments_analytics_admin_get_schemav2', value: 'organizations_environments_analytics_admin_get_schemav2' }
    ]}
>
<TabItem value="organizations_environments_analytics_admin_get_schemav2">

Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.

```sql
SELECT
dimensions,
meta,
metrics
FROM google.apigee.admin_schemav2
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND type = '{{ type }}'
AND disableCache = '{{ disableCache }}';
```
</TabItem>
</Tabs>
