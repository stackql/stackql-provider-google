--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
  - documentai
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_processors_processor_versions_evaluations_get"
    values={[
        { label: 'projects_locations_processors_processor_versions_evaluations_get', value: 'projects_locations_processors_processor_versions_evaluations_get' },
        { label: 'projects_locations_processors_processor_versions_evaluations_list', value: 'projects_locations_processors_processor_versions_evaluations_list' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_evaluations_get">

An evaluation of a ProcessorVersion's performance.

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
    <td>The resource name of the evaluation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/processors/&#123;processor&#125;/processorVersions/&#123;processor_version&#125;/evaluations/&#123;evaluation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allEntitiesMetrics" /></td>
    <td><code>object</code></td>
    <td>Metrics for all the entities in aggregate. (id: GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the evaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="documentCounters" /></td>
    <td><code>object</code></td>
    <td>Counters for the documents used in the evaluation. (id: GoogleCloudDocumentaiV1EvaluationCounters)</td>
</tr>
<tr>
    <td><CopyableCode code="entityMetrics" /></td>
    <td><code>object</code></td>
    <td>Metrics across confidence levels, for different entities.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>The KMS key name used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>The KMS key version with which data is encrypted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_evaluations_list">

The response from `ListEvaluations`.

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
    <td><CopyableCode code="evaluations" /></td>
    <td><code>array</code></td>
    <td>The evaluations requested.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#projects_locations_processors_processor_versions_evaluations_get"><CopyableCode code="projects_locations_processors_processor_versions_evaluations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td></td>
    <td>Retrieves a specific evaluation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_evaluations_list"><CopyableCode code="projects_locations_processors_processor_versions_evaluations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves a set of evaluations for a given processor version.</td>
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
<tr id="parameter-evaluationsId">
    <td><CopyableCode code="evaluationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-processorVersionsId">
    <td><CopyableCode code="processorVersionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-processorsId">
    <td><CopyableCode code="processorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_locations_processors_processor_versions_evaluations_get"
    values={[
        { label: 'projects_locations_processors_processor_versions_evaluations_get', value: 'projects_locations_processors_processor_versions_evaluations_get' },
        { label: 'projects_locations_processors_processor_versions_evaluations_list', value: 'projects_locations_processors_processor_versions_evaluations_list' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_evaluations_get">

Retrieves a specific evaluation.

```sql
SELECT
name,
allEntitiesMetrics,
createTime,
documentCounters,
entityMetrics,
kmsKeyName,
kmsKeyVersionName
FROM google.documentai.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorsId = '{{ processorsId }}' -- required
AND processorVersionsId = '{{ processorVersionsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_evaluations_list">

Retrieves a set of evaluations for a given processor version.

```sql
SELECT
evaluations,
nextPageToken
FROM google.documentai.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorsId = '{{ processorsId }}' -- required
AND processorVersionsId = '{{ processorVersionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
