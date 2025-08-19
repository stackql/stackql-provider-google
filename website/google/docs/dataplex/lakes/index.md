--- 
title: lakes
hide_title: false
hide_table_of_contents: false
keywords:
  - lakes
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

Creates, updates, deletes, gets or lists a <code>lakes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lakes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.lakes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_get"
    values={[
        { label: 'projects_locations_lakes_get', value: 'projects_locations_lakes_get' },
        { label: 'projects_locations_lakes_list', value: 'projects_locations_lakes_list' }
    ]}
>
<TabItem value="projects_locations_lakes_get">

A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.

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
    <td>Output only. The relative resource name of the lake, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="assetStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated status of the underlying assets of the lake. (id: GoogleCloudDataplexV1AssetStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the lake was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the lake.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the lake.</td>
</tr>
<tr>
    <td><CopyableCode code="metastore" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings to manage lake and Dataproc Metastore service instance association. (id: GoogleCloudDataplexV1LakeMetastore)</td>
</tr>
<tr>
    <td><CopyableCode code="metastoreStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Metastore status of the lake. (id: GoogleCloudDataplexV1LakeMetastoreStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the lake.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the lake was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_list">

List lakes response.

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
    <td><CopyableCode code="lakes" /></td>
    <td><code>array</code></td>
    <td>Lakes under the given parent location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachableLocations" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#projects_locations_lakes_get"><CopyableCode code="projects_locations_lakes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td></td>
    <td>Retrieves a lake resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_list"><CopyableCode code="projects_locations_lakes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists lake resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_create"><CopyableCode code="projects_locations_lakes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-lakeId"><code>lakeId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a lake resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_patch"><CopyableCode code="projects_locations_lakes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a lake resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_delete"><CopyableCode code="projects_locations_lakes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td></td>
    <td>Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakeId">
    <td><CopyableCode code="lakeId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_get"
    values={[
        { label: 'projects_locations_lakes_get', value: 'projects_locations_lakes_get' },
        { label: 'projects_locations_lakes_list', value: 'projects_locations_lakes_list' }
    ]}
>
<TabItem value="projects_locations_lakes_get">

Retrieves a lake resource.

```sql
SELECT
name,
assetStatus,
createTime,
description,
displayName,
labels,
metastore,
metastoreStatus,
serviceAccount,
state,
uid,
updateTime
FROM google.dataplex.lakes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_list">

Lists lake resources in a project and location.

```sql
SELECT
lakes,
nextPageToken,
unreachableLocations
FROM google.dataplex.lakes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_create"
    values={[
        { label: 'projects_locations_lakes_create', value: 'projects_locations_lakes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_create">

Creates a lake resource.

```sql
INSERT INTO google.dataplex.lakes (
data__displayName,
data__labels,
data__description,
data__metastore,
projectsId,
locationsId,
lakeId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ description }}',
'{{ metastore }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakeId }}',
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
- name: lakes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the lakes resource.
    - name: locationsId
      value: string
      description: Required parameter for the lakes resource.
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the lake.
        
    - name: description
      value: string
      description: >
        Optional. Description of the lake.
        
    - name: metastore
      value: object
      description: >
        Optional. Settings to manage lake and Dataproc Metastore service instance association.
        
    - name: lakeId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_patch"
    values={[
        { label: 'projects_locations_lakes_patch', value: 'projects_locations_lakes_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_patch">

Updates a lake resource.

```sql
UPDATE google.dataplex.lakes
SET 
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__metastore = '{{ metastore }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
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
    defaultValue="projects_locations_lakes_delete"
    values={[
        { label: 'projects_locations_lakes_delete', value: 'projects_locations_lakes_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_delete">

Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted.

```sql
DELETE FROM google.dataplex.lakes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required;
```
</TabItem>
</Tabs>
