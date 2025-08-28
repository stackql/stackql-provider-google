--- 
title: datacollectors
hide_title: false
hide_table_of_contents: false
keywords:
  - datacollectors
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

Creates, updates, deletes, gets or lists a <code>datacollectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datacollectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.datacollectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_datacollectors_get"
    values={[
        { label: 'organizations_datacollectors_get', value: 'organizations_datacollectors_get' },
        { label: 'organizations_datacollectors_list', value: 'organizations_datacollectors_list' }
    ]}
>
<TabItem value="organizations_datacollectors_get">

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
    <td>ID of the data collector. Must begin with `dc_`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the data collector was created in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data collector.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of data this data collector will collect.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_datacollectors_list">

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
    <td>ID of the data collector. Must begin with `dc_`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the data collector was created in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data collector.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of data this data collector will collect.</td>
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
    <td><a href="#organizations_datacollectors_get"><CopyableCode code="organizations_datacollectors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datacollectorsId"><code>datacollectorsId</code></a></td>
    <td></td>
    <td>Gets a data collector.</td>
</tr>
<tr>
    <td><a href="#organizations_datacollectors_list"><CopyableCode code="organizations_datacollectors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all data collectors.</td>
</tr>
<tr>
    <td><a href="#organizations_datacollectors_create"><CopyableCode code="organizations_datacollectors_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-dataCollectorId"><code>dataCollectorId</code></a></td>
    <td>Creates a new data collector.</td>
</tr>
<tr>
    <td><a href="#organizations_datacollectors_patch"><CopyableCode code="organizations_datacollectors_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datacollectorsId"><code>datacollectorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a data collector.</td>
</tr>
<tr>
    <td><a href="#organizations_datacollectors_delete"><CopyableCode code="organizations_datacollectors_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datacollectorsId"><code>datacollectorsId</code></a></td>
    <td></td>
    <td>Deletes a data collector.</td>
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
<tr id="parameter-datacollectorsId">
    <td><CopyableCode code="datacollectorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataCollectorId">
    <td><CopyableCode code="dataCollectorId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_datacollectors_get"
    values={[
        { label: 'organizations_datacollectors_get', value: 'organizations_datacollectors_get' },
        { label: 'organizations_datacollectors_list', value: 'organizations_datacollectors_list' }
    ]}
>
<TabItem value="organizations_datacollectors_get">

Gets a data collector.

```sql
SELECT
name,
createdAt,
description,
lastModifiedAt,
type
FROM google.apigee.datacollectors
WHERE organizationsId = '{{ organizationsId }}' -- required
AND datacollectorsId = '{{ datacollectorsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_datacollectors_list">

Lists all data collectors.

```sql
SELECT
name,
createdAt,
description,
lastModifiedAt,
type
FROM google.apigee.datacollectors
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_datacollectors_create"
    values={[
        { label: 'organizations_datacollectors_create', value: 'organizations_datacollectors_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_datacollectors_create">

Creates a new data collector.

```sql
INSERT INTO google.apigee.datacollectors (
data__name,
data__description,
data__type,
organizationsId,
dataCollectorId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ type }}',
'{{ organizationsId }}',
'{{ dataCollectorId }}'
RETURNING
name,
createdAt,
description,
lastModifiedAt,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: datacollectors
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the datacollectors resource.
    - name: name
      value: string
      description: >
        ID of the data collector. Must begin with `dc_`.
        
    - name: description
      value: string
      description: >
        A description of the data collector.
        
    - name: type
      value: string
      description: >
        Immutable. The type of data this data collector will collect.
        
      valid_values: ['TYPE_UNSPECIFIED', 'INTEGER', 'FLOAT', 'STRING', 'BOOLEAN', 'DATETIME']
    - name: dataCollectorId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_datacollectors_patch"
    values={[
        { label: 'organizations_datacollectors_patch', value: 'organizations_datacollectors_patch' }
    ]}
>
<TabItem value="organizations_datacollectors_patch">

Updates a data collector.

```sql
UPDATE google.apigee.datacollectors
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__type = '{{ type }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND datacollectorsId = '{{ datacollectorsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createdAt,
description,
lastModifiedAt,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_datacollectors_delete"
    values={[
        { label: 'organizations_datacollectors_delete', value: 'organizations_datacollectors_delete' }
    ]}
>
<TabItem value="organizations_datacollectors_delete">

Deletes a data collector.

```sql
DELETE FROM google.apigee.datacollectors
WHERE organizationsId = '{{ organizationsId }}' --required
AND datacollectorsId = '{{ datacollectorsId }}' --required;
```
</TabItem>
</Tabs>
