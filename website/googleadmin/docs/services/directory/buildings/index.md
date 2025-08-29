--- 
title: buildings
hide_title: false
hide_table_of_contents: false
keywords:
  - buildings
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>buildings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buildings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.buildings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The postal address of the building. See [`PostalAddress`](https://developers.google.com/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required. (id: BuildingAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="buildingId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the building. The maximum length is 100 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="buildingName" /></td>
    <td><code>string</code></td>
    <td>The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="coordinates" /></td>
    <td><code>object</code></td>
    <td>The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees. (id: BuildingCoordinates)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the building. For example, "Chelsea Market".</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="floorNames" /></td>
    <td><code>array</code></td>
    <td>The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#resources#buildings#Building)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The postal address of the building. See [`PostalAddress`](https://developers.google.com/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required. (id: BuildingAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="buildingId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the building. The maximum length is 100 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="buildingName" /></td>
    <td><code>string</code></td>
    <td>The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="coordinates" /></td>
    <td><code>object</code></td>
    <td>The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees. (id: BuildingCoordinates)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the building. For example, "Chelsea Market".</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="floorNames" /></td>
    <td><code>array</code></td>
    <td>The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#resources#buildings#Building)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-buildingId"><code>buildingId</code></a></td>
    <td></td>
    <td>Retrieves a building.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves a list of buildings for an account.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-coordinatesSource"><code>coordinatesSource</code></a></td>
    <td>Inserts a building.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-buildingId"><code>buildingId</code></a></td>
    <td><a href="#parameter-coordinatesSource"><code>coordinatesSource</code></a></td>
    <td>Patches a building.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-buildingId"><code>buildingId</code></a></td>
    <td><a href="#parameter-coordinatesSource"><code>coordinatesSource</code></a></td>
    <td>Updates a building.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-buildingId"><code>buildingId</code></a></td>
    <td></td>
    <td>Deletes a building.</td>
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
<tr id="parameter-buildingId">
    <td><CopyableCode code="buildingId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-coordinatesSource">
    <td><CopyableCode code="coordinatesSource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves a building.

```sql
SELECT
address,
buildingId,
buildingName,
coordinates,
description,
etags,
floorNames,
kind
FROM googleadmin.directory.buildings
WHERE customer = '{{ customer }}' -- required
AND buildingId = '{{ buildingId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of buildings for an account.

```sql
SELECT
address,
buildingId,
buildingName,
coordinates,
description,
etags,
floorNames,
kind
FROM googleadmin.directory.buildings
WHERE customer = '{{ customer }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Inserts a building.

```sql
INSERT INTO googleadmin.directory.buildings (
data__buildingId,
data__buildingName,
data__description,
data__coordinates,
data__kind,
data__etags,
data__floorNames,
data__address,
customer,
coordinatesSource
)
SELECT 
'{{ buildingId }}',
'{{ buildingName }}',
'{{ description }}',
'{{ coordinates }}',
'{{ kind }}',
'{{ etags }}',
'{{ floorNames }}',
'{{ address }}',
'{{ customer }}',
'{{ coordinatesSource }}'
RETURNING
address,
buildingId,
buildingName,
coordinates,
description,
etags,
floorNames,
kind
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: buildings
  props:
    - name: customer
      value: string
      description: Required parameter for the buildings resource.
    - name: buildingId
      value: string
      description: >
        Unique identifier for the building. The maximum length is 100 characters.
        
    - name: buildingName
      value: string
      description: >
        The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.
        
    - name: description
      value: string
      description: >
        A brief description of the building. For example, "Chelsea Market".
        
    - name: coordinates
      value: object
      description: >
        The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.
        
    - name: kind
      value: string
      description: >
        Kind of resource this is.
        
      default: admin#directory#resources#buildings#Building
    - name: etags
      value: string
      description: >
        ETag of the resource.
        
    - name: floorNames
      value: array
      description: >
        The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.
        
    - name: address
      value: object
      description: >
        The postal address of the building. See [`PostalAddress`](https://developers.google.com/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.
        
    - name: coordinatesSource
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Patches a building.

```sql
UPDATE googleadmin.directory.buildings
SET 
data__buildingId = '{{ buildingId }}',
data__buildingName = '{{ buildingName }}',
data__description = '{{ description }}',
data__coordinates = '{{ coordinates }}',
data__kind = '{{ kind }}',
data__etags = '{{ etags }}',
data__floorNames = '{{ floorNames }}',
data__address = '{{ address }}'
WHERE 
customer = '{{ customer }}' --required
AND buildingId = '{{ buildingId }}' --required
AND coordinatesSource = '{{ coordinatesSource}}'
RETURNING
address,
buildingId,
buildingName,
coordinates,
description,
etags,
floorNames,
kind;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a building.

```sql
REPLACE googleadmin.directory.buildings
SET 
data__buildingId = '{{ buildingId }}',
data__buildingName = '{{ buildingName }}',
data__description = '{{ description }}',
data__coordinates = '{{ coordinates }}',
data__kind = '{{ kind }}',
data__etags = '{{ etags }}',
data__floorNames = '{{ floorNames }}',
data__address = '{{ address }}'
WHERE 
customer = '{{ customer }}' --required
AND buildingId = '{{ buildingId }}' --required
AND coordinatesSource = '{{ coordinatesSource}}'
RETURNING
address,
buildingId,
buildingName,
coordinates,
description,
etags,
floorNames,
kind;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a building.

```sql
DELETE FROM googleadmin.directory.buildings
WHERE customer = '{{ customer }}' --required
AND buildingId = '{{ buildingId }}' --required;
```
</TabItem>
</Tabs>
