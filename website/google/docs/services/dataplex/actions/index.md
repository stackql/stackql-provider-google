--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_zones_assets_actions_list"
    values={[
        { label: 'projects_locations_lakes_zones_assets_actions_list', value: 'projects_locations_lakes_zones_assets_actions_list' },
        { label: 'projects_locations_lakes_zones_actions_list', value: 'projects_locations_lakes_zones_actions_list' },
        { label: 'projects_locations_lakes_actions_list', value: 'projects_locations_lakes_actions_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_actions_list">

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
    <td>Output only. The relative resource name of the action, of the form: projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/assets/&#123;asset&#125;/actions/&#123;action&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the asset, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/assets/&#123;asset_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of issue associated with the action.</td>
</tr>
<tr>
    <td><CopyableCode code="dataLocations" /></td>
    <td><code>array</code></td>
    <td>The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).</td>
</tr>
<tr>
    <td><CopyableCode code="detectTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the issue was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="failedSecurityPolicyApply" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to applying security policy. (id: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply)</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleDataSchema" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to incompatible schemas detected within data. (id: GoogleCloudDataplexV1ActionIncompatibleDataSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataFormat" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data formats. (id: GoogleCloudDataplexV1ActionInvalidDataFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataOrganization" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid data arrangement. (id: GoogleCloudDataplexV1ActionInvalidDataOrganization)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataPartition" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data partition structure. (id: GoogleCloudDataplexV1ActionInvalidDataPartition)</td>
</tr>
<tr>
    <td><CopyableCode code="issue" /></td>
    <td><code>string</code></td>
    <td>Detailed description of the issue requiring action.</td>
</tr>
<tr>
    <td><CopyableCode code="lake" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the lake, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="missingData" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of data within managed resources. (id: GoogleCloudDataplexV1ActionMissingData)</td>
</tr>
<tr>
    <td><CopyableCode code="missingResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of a managed resource. (id: GoogleCloudDataplexV1ActionMissingResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unauthorizedResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to lack of permissions to access data resources. (id: GoogleCloudDataplexV1ActionUnauthorizedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the zone, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_zones_actions_list">

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
    <td>Output only. The relative resource name of the action, of the form: projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/assets/&#123;asset&#125;/actions/&#123;action&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the asset, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/assets/&#123;asset_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of issue associated with the action.</td>
</tr>
<tr>
    <td><CopyableCode code="dataLocations" /></td>
    <td><code>array</code></td>
    <td>The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).</td>
</tr>
<tr>
    <td><CopyableCode code="detectTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the issue was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="failedSecurityPolicyApply" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to applying security policy. (id: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply)</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleDataSchema" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to incompatible schemas detected within data. (id: GoogleCloudDataplexV1ActionIncompatibleDataSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataFormat" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data formats. (id: GoogleCloudDataplexV1ActionInvalidDataFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataOrganization" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid data arrangement. (id: GoogleCloudDataplexV1ActionInvalidDataOrganization)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataPartition" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data partition structure. (id: GoogleCloudDataplexV1ActionInvalidDataPartition)</td>
</tr>
<tr>
    <td><CopyableCode code="issue" /></td>
    <td><code>string</code></td>
    <td>Detailed description of the issue requiring action.</td>
</tr>
<tr>
    <td><CopyableCode code="lake" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the lake, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="missingData" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of data within managed resources. (id: GoogleCloudDataplexV1ActionMissingData)</td>
</tr>
<tr>
    <td><CopyableCode code="missingResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of a managed resource. (id: GoogleCloudDataplexV1ActionMissingResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unauthorizedResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to lack of permissions to access data resources. (id: GoogleCloudDataplexV1ActionUnauthorizedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the zone, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_actions_list">

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
    <td>Output only. The relative resource name of the action, of the form: projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/actions/&#123;action&#125; projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/assets/&#123;asset&#125;/actions/&#123;action&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the asset, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/assets/&#123;asset_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of issue associated with the action.</td>
</tr>
<tr>
    <td><CopyableCode code="dataLocations" /></td>
    <td><code>array</code></td>
    <td>The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).</td>
</tr>
<tr>
    <td><CopyableCode code="detectTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the issue was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="failedSecurityPolicyApply" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to applying security policy. (id: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply)</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleDataSchema" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to incompatible schemas detected within data. (id: GoogleCloudDataplexV1ActionIncompatibleDataSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataFormat" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data formats. (id: GoogleCloudDataplexV1ActionInvalidDataFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataOrganization" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid data arrangement. (id: GoogleCloudDataplexV1ActionInvalidDataOrganization)</td>
</tr>
<tr>
    <td><CopyableCode code="invalidDataPartition" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to invalid or unsupported data partition structure. (id: GoogleCloudDataplexV1ActionInvalidDataPartition)</td>
</tr>
<tr>
    <td><CopyableCode code="issue" /></td>
    <td><code>string</code></td>
    <td>Detailed description of the issue requiring action.</td>
</tr>
<tr>
    <td><CopyableCode code="lake" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the lake, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="missingData" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of data within managed resources. (id: GoogleCloudDataplexV1ActionMissingData)</td>
</tr>
<tr>
    <td><CopyableCode code="missingResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to absence of a managed resource. (id: GoogleCloudDataplexV1ActionMissingResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unauthorizedResource" /></td>
    <td><code>object</code></td>
    <td>Details for issues related to lack of permissions to access data resources. (id: GoogleCloudDataplexV1ActionUnauthorizedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The relative resource name of the zone, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;.</td>
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
    <td><a href="#projects_locations_lakes_zones_assets_actions_list"><CopyableCode code="projects_locations_lakes_zones_assets_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists action resources in an asset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_actions_list"><CopyableCode code="projects_locations_lakes_zones_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists action resources in a zone.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_actions_list"><CopyableCode code="projects_locations_lakes_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists action resources in a lake.</td>
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
<tr id="parameter-assetsId">
    <td><CopyableCode code="assetsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_assets_actions_list"
    values={[
        { label: 'projects_locations_lakes_zones_assets_actions_list', value: 'projects_locations_lakes_zones_assets_actions_list' },
        { label: 'projects_locations_lakes_zones_actions_list', value: 'projects_locations_lakes_zones_actions_list' },
        { label: 'projects_locations_lakes_actions_list', value: 'projects_locations_lakes_actions_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_actions_list">

Lists action resources in an asset.

```sql
SELECT
name,
asset,
category,
dataLocations,
detectTime,
failedSecurityPolicyApply,
incompatibleDataSchema,
invalidDataFormat,
invalidDataOrganization,
invalidDataPartition,
issue,
lake,
missingData,
missingResource,
unauthorizedResource,
zone
FROM google.dataplex.actions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND assetsId = '{{ assetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_lakes_zones_actions_list">

Lists action resources in a zone.

```sql
SELECT
name,
asset,
category,
dataLocations,
detectTime,
failedSecurityPolicyApply,
incompatibleDataSchema,
invalidDataFormat,
invalidDataOrganization,
invalidDataPartition,
issue,
lake,
missingData,
missingResource,
unauthorizedResource,
zone
FROM google.dataplex.actions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_lakes_actions_list">

Lists action resources in a lake.

```sql
SELECT
name,
asset,
category,
dataLocations,
detectTime,
failedSecurityPolicyApply,
incompatibleDataSchema,
invalidDataFormat,
invalidDataOrganization,
invalidDataPartition,
issue,
lake,
missingData,
missingResource,
unauthorizedResource,
zone
FROM google.dataplex.actions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
