--- 
title: data_scans
hide_title: false
hide_table_of_contents: false
keywords:
  - data_scans
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

Creates, updates, deletes, gets or lists a <code>data_scans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_scans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_scans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_scans_get"
    values={[
        { label: 'projects_locations_data_scans_get', value: 'projects_locations_data_scans_get' },
        { label: 'projects_locations_data_scans_list', value: 'projects_locations_data_scans_list' }
    ]}
>
<TabItem value="projects_locations_data_scans_get">

Represents a user-visible job which provides the insights for the related data source.For example: Data quality: generates queries based on the rules and runs against the data to get data quality check results. For more information, see Auto data quality overview (https://cloud.google.com/dataplex/docs/auto-data-quality-overview). Data profile: analyzes the data in tables and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc). For more information, see About data profiling (https://cloud.google.com/dataplex/docs/data-profiling-overview). Data discovery: scans data in Cloud Storage buckets to extract and then catalog metadata. For more information, see Discover and catalog Cloud Storage data (https://cloud.google.com/bigquery/docs/automatic-discovery).

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
    <td>Output only. Identifier. The relative resource name of the scan, of the form: projects/&#123;project&#125;/locations/&#123;location_id&#125;/dataScans/&#123;datascan_id&#125;, where project refers to a project_id or project_number and location_id refers to a Google Cloud region.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the scan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>Required. The data source for DataScan. (id: GoogleCloudDataplexV1DataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dataDiscoveryResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data discovery scan. (id: GoogleCloudDataplexV1DataDiscoveryResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataDiscoverySpec" /></td>
    <td><code>object</code></td>
    <td>Settings for a data discovery scan. (id: GoogleCloudDataplexV1DataDiscoverySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProfileResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data profile scan. (id: GoogleCloudDataplexV1DataProfileResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProfileSpec" /></td>
    <td><code>object</code></td>
    <td>Settings for a data profile scan. (id: GoogleCloudDataplexV1DataProfileSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataQualityResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data quality scan. (id: GoogleCloudDataplexV1DataQualityResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataQualitySpec" /></td>
    <td><code>object</code></td>
    <td>Settings for a data quality scan. (id: GoogleCloudDataplexV1DataQualitySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the scan. Must be between 1-1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name. Must be between 1-256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="executionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. DataScan execution settings.If not specified, the fields in it will use their default values. (id: GoogleCloudDataplexV1DataScanExecutionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="executionStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the data scan execution. (id: GoogleCloudDataplexV1DataScanExecutionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the scan.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the DataScan.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of DataScan.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the scan was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_scans_list">

List dataScans response.

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
    <td><CopyableCode code="dataScans" /></td>
    <td><code>array</code></td>
    <td>DataScans (BASIC view only) under the given parent location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
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
    <td><a href="#projects_locations_data_scans_get"><CopyableCode code="projects_locations_data_scans_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a DataScan resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_list"><CopyableCode code="projects_locations_data_scans_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DataScans.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_create"><CopyableCode code="projects_locations_data_scans_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataScanId"><code>dataScanId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a DataScan resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_patch"><CopyableCode code="projects_locations_data_scans_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a DataScan resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_delete"><CopyableCode code="projects_locations_data_scans_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a DataScan resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_run"><CopyableCode code="projects_locations_data_scans_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td></td>
    <td>Runs an on-demand execution of a DataScan</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_generate_data_quality_rules"><CopyableCode code="projects_locations_data_scans_generate_data_quality_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td></td>
    <td>Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.</td>
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
<tr id="parameter-dataScansId">
    <td><CopyableCode code="dataScansId" /></td>
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
<tr id="parameter-dataScanId">
    <td><CopyableCode code="dataScanId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_data_scans_get"
    values={[
        { label: 'projects_locations_data_scans_get', value: 'projects_locations_data_scans_get' },
        { label: 'projects_locations_data_scans_list', value: 'projects_locations_data_scans_list' }
    ]}
>
<TabItem value="projects_locations_data_scans_get">

Gets a DataScan resource.

```sql
SELECT
name,
createTime,
data,
dataDiscoveryResult,
dataDiscoverySpec,
dataProfileResult,
dataProfileSpec,
dataQualityResult,
dataQualitySpec,
description,
displayName,
executionSpec,
executionStatus,
labels,
state,
type,
uid,
updateTime
FROM google.dataplex.data_scans
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataScansId = '{{ dataScansId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_locations_data_scans_list">

Lists DataScans.

```sql
SELECT
dataScans,
nextPageToken,
unreachable
FROM google.dataplex.data_scans
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
    defaultValue="projects_locations_data_scans_create"
    values={[
        { label: 'projects_locations_data_scans_create', value: 'projects_locations_data_scans_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_scans_create">

Creates a DataScan resource.

```sql
INSERT INTO google.dataplex.data_scans (
data__description,
data__displayName,
data__labels,
data__data,
data__executionSpec,
data__dataQualitySpec,
data__dataProfileSpec,
data__dataDiscoverySpec,
projectsId,
locationsId,
dataScanId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ data }}',
'{{ executionSpec }}',
'{{ dataQualitySpec }}',
'{{ dataProfileSpec }}',
'{{ dataDiscoverySpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataScanId }}',
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
- name: data_scans
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_scans resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_scans resource.
    - name: description
      value: string
      description: >
        Optional. Description of the scan. Must be between 1-1024 characters.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name. Must be between 1-256 characters.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the scan.
        
    - name: data
      value: object
      description: >
        Required. The data source for DataScan.
        
    - name: executionSpec
      value: object
      description: >
        Optional. DataScan execution settings.If not specified, the fields in it will use their default values.
        
    - name: dataQualitySpec
      value: object
      description: >
        Settings for a data quality scan.
        
    - name: dataProfileSpec
      value: object
      description: >
        Settings for a data profile scan.
        
    - name: dataDiscoverySpec
      value: object
      description: >
        Settings for a data discovery scan.
        
    - name: dataScanId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_scans_patch"
    values={[
        { label: 'projects_locations_data_scans_patch', value: 'projects_locations_data_scans_patch' }
    ]}
>
<TabItem value="projects_locations_data_scans_patch">

Updates a DataScan resource.

```sql
UPDATE google.dataplex.data_scans
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__data = '{{ data }}',
data__executionSpec = '{{ executionSpec }}',
data__dataQualitySpec = '{{ dataQualitySpec }}',
data__dataProfileSpec = '{{ dataProfileSpec }}',
data__dataDiscoverySpec = '{{ dataDiscoverySpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataScansId = '{{ dataScansId }}' --required
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
    defaultValue="projects_locations_data_scans_delete"
    values={[
        { label: 'projects_locations_data_scans_delete', value: 'projects_locations_data_scans_delete' }
    ]}
>
<TabItem value="projects_locations_data_scans_delete">

Deletes a DataScan resource.

```sql
DELETE FROM google.dataplex.data_scans
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataScansId = '{{ dataScansId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_data_scans_run"
    values={[
        { label: 'projects_locations_data_scans_run', value: 'projects_locations_data_scans_run' },
        { label: 'projects_locations_data_scans_generate_data_quality_rules', value: 'projects_locations_data_scans_generate_data_quality_rules' }
    ]}
>
<TabItem value="projects_locations_data_scans_run">

Runs an on-demand execution of a DataScan

```sql
EXEC google.dataplex.data_scans.projects_locations_data_scans_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataScansId='{{ dataScansId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_scans_generate_data_quality_rules">

Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.

```sql
EXEC google.dataplex.data_scans.projects_locations_data_scans_generate_data_quality_rules 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataScansId='{{ dataScansId }}' --required;
```
</TabItem>
</Tabs>
