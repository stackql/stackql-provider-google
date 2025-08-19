--- 
title: partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - partitions
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_partitions_get"
    values={[
        { label: 'projects_locations_lakes_zones_entities_partitions_get', value: 'projects_locations_lakes_zones_entities_partitions_get' },
        { label: 'projects_locations_lakes_zones_entities_partitions_list', value: 'projects_locations_lakes_zones_entities_partitions_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_partitions_get">

Represents partition metadata contained within entity instances.

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
    <td>Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag for this partition.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_zones_entities_partitions_list">

List metadata partitions response.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no remaining results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>array</code></td>
    <td>Partitions under the specified parent entity.</td>
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
    <td><a href="#projects_locations_lakes_zones_entities_partitions_get"><CopyableCode code="projects_locations_lakes_zones_entities_partitions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a>, <a href="#parameter-partitionsId"><code>partitionsId</code></a></td>
    <td></td>
    <td>Get a metadata partition of an entity.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_partitions_list"><CopyableCode code="projects_locations_lakes_zones_entities_partitions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List metadata partitions of an entity.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_partitions_create"><CopyableCode code="projects_locations_lakes_zones_entities_partitions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a metadata partition.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_partitions_delete"><CopyableCode code="projects_locations_lakes_zones_entities_partitions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a>, <a href="#parameter-partitionsId"><code>partitionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Delete a metadata partition.</td>
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
<tr id="parameter-entitiesId">
    <td><CopyableCode code="entitiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-partitionsId">
    <td><CopyableCode code="partitionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zonesId">
    <td><CopyableCode code="zonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_partitions_get"
    values={[
        { label: 'projects_locations_lakes_zones_entities_partitions_get', value: 'projects_locations_lakes_zones_entities_partitions_get' },
        { label: 'projects_locations_lakes_zones_entities_partitions_list', value: 'projects_locations_lakes_zones_entities_partitions_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_partitions_get">

Get a metadata partition of an entity.

```sql
SELECT
name,
etag,
location,
values
FROM google.dataplex.partitions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND entitiesId = '{{ entitiesId }}' -- required
AND partitionsId = '{{ partitionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_zones_entities_partitions_list">

List metadata partitions of an entity.

```sql
SELECT
nextPageToken,
partitions
FROM google.dataplex.partitions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND entitiesId = '{{ entitiesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_partitions_create"
    values={[
        { label: 'projects_locations_lakes_zones_entities_partitions_create', value: 'projects_locations_lakes_zones_entities_partitions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_partitions_create">

Create a metadata partition.

```sql
INSERT INTO google.dataplex.partitions (
data__values,
data__location,
data__etag,
projectsId,
locationsId,
lakesId,
zonesId,
entitiesId,
validateOnly
)
SELECT 
'{{ values }}',
'{{ location }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ zonesId }}',
'{{ entitiesId }}',
'{{ validateOnly }}'
RETURNING
name,
etag,
location,
values
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: partitions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the partitions resource.
    - name: locationsId
      value: string
      description: Required parameter for the partitions resource.
    - name: lakesId
      value: string
      description: Required parameter for the partitions resource.
    - name: zonesId
      value: string
      description: Required parameter for the partitions resource.
    - name: entitiesId
      value: string
      description: Required parameter for the partitions resource.
    - name: values
      value: array
      description: >
        Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.
        
    - name: location
      value: string
      description: >
        Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/
        
    - name: etag
      value: string
      description: >
        Optional. The etag for this partition.
        
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_partitions_delete"
    values={[
        { label: 'projects_locations_lakes_zones_entities_partitions_delete', value: 'projects_locations_lakes_zones_entities_partitions_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_partitions_delete">

Delete a metadata partition.

```sql
DELETE FROM google.dataplex.partitions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND entitiesId = '{{ entitiesId }}' --required
AND partitionsId = '{{ partitionsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
