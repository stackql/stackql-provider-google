--- 
title: zones
hide_title: false
hide_table_of_contents: false
keywords:
  - zones
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

Creates, updates, deletes, gets or lists a <code>zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>zones</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_zones_get"
    values={[
        { label: 'projects_locations_lakes_zones_get', value: 'projects_locations_lakes_zones_get' },
        { label: 'projects_locations_lakes_zones_list', value: 'projects_locations_lakes_zones_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_get">

A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.

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
    <td>Output only. The relative resource name of the zone, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="assetStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated status of the underlying assets of the zone. (id: GoogleCloudDataplexV1AssetStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the zone was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverySpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Specification of the discovery feature applied to data in this zone. (id: GoogleCloudDataplexV1ZoneDiscoverySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Specification of the resources that are referenced by the assets within this zone. (id: GoogleCloudDataplexV1ZoneResourceSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The type of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the zone was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_zones_list">

List zones response.

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
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones under the given parent lake.</td>
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
    <td><a href="#projects_locations_lakes_zones_get"><CopyableCode code="projects_locations_lakes_zones_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td></td>
    <td>Retrieves a zone resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_list"><CopyableCode code="projects_locations_lakes_zones_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists zone resources in a lake.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_create"><CopyableCode code="projects_locations_lakes_zones_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a zone resource within a lake.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_patch"><CopyableCode code="projects_locations_lakes_zones_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a zone resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_delete"><CopyableCode code="projects_locations_lakes_zones_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td></td>
    <td>Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-zoneId">
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_get"
    values={[
        { label: 'projects_locations_lakes_zones_get', value: 'projects_locations_lakes_zones_get' },
        { label: 'projects_locations_lakes_zones_list', value: 'projects_locations_lakes_zones_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_get">

Retrieves a zone resource.

```sql
SELECT
name,
assetStatus,
createTime,
description,
discoverySpec,
displayName,
labels,
resourceSpec,
state,
type,
uid,
updateTime
FROM google.dataplex.zones
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_zones_list">

Lists zone resources in a lake.

```sql
SELECT
nextPageToken,
zones
FROM google.dataplex.zones
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_create"
    values={[
        { label: 'projects_locations_lakes_zones_create', value: 'projects_locations_lakes_zones_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_create">

Creates a zone resource within a lake.

```sql
INSERT INTO google.dataplex.zones (
data__displayName,
data__labels,
data__description,
data__type,
data__discoverySpec,
data__resourceSpec,
projectsId,
locationsId,
lakesId,
zoneId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ description }}',
'{{ type }}',
'{{ discoverySpec }}',
'{{ resourceSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ zoneId }}',
'{{ validateOnly }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: zones
  props:
    - name: projectsId
      value: string
      description: Required parameter for the zones resource.
    - name: locationsId
      value: string
      description: Required parameter for the zones resource.
    - name: lakesId
      value: string
      description: Required parameter for the zones resource.
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User defined labels for the zone.
        
    - name: description
      value: string
      description: >
        Optional. Description of the zone.
        
    - name: type
      value: string
      description: >
        Required. Immutable. The type of the zone.
        
      valid_values: ['TYPE_UNSPECIFIED', 'RAW', 'CURATED']
    - name: discoverySpec
      value: object
      description: >
        Optional. Specification of the discovery feature applied to data in this zone.
        
    - name: resourceSpec
      value: object
      description: >
        Required. Specification of the resources that are referenced by the assets within this zone.
        
    - name: zoneId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_patch"
    values={[
        { label: 'projects_locations_lakes_zones_patch', value: 'projects_locations_lakes_zones_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_patch">

Updates a zone resource.

```sql
UPDATE google.dataplex.zones
SET 
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__discoverySpec = '{{ discoverySpec }}',
data__resourceSpec = '{{ resourceSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_delete"
    values={[
        { label: 'projects_locations_lakes_zones_delete', value: 'projects_locations_lakes_zones_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_delete">

Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted.

```sql
DELETE FROM google.dataplex.zones
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required;
```
</TabItem>
</Tabs>
