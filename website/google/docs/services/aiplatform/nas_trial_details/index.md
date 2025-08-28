--- 
title: nas_trial_details
hide_title: false
hide_table_of_contents: false
keywords:
  - nas_trial_details
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>nas_trial_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nas_trial_details</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.nas_trial_details" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the NasTrialDetail.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters for the NasJob NasTrial.</td>
</tr>
<tr>
    <td><CopyableCode code="searchTrial" /></td>
    <td><code>object</code></td>
    <td>Represents a uCAIP NasJob trial. (id: GoogleCloudAiplatformV1NasTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="trainTrial" /></td>
    <td><code>object</code></td>
    <td>Represents a uCAIP NasJob trial. (id: GoogleCloudAiplatformV1NasTrial)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the NasTrialDetail.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters for the NasJob NasTrial.</td>
</tr>
<tr>
    <td><CopyableCode code="searchTrial" /></td>
    <td><code>object</code></td>
    <td>Represents a uCAIP NasJob trial. (id: GoogleCloudAiplatformV1NasTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="trainTrial" /></td>
    <td><code>object</code></td>
    <td>Represents a uCAIP NasJob trial. (id: GoogleCloudAiplatformV1NasTrial)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nasJobsId"><code>nasJobsId</code></a>, <a href="#parameter-nasTrialDetailsId"><code>nasTrialDetailsId</code></a></td>
    <td></td>
    <td>Gets a NasTrialDetail.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nasJobsId"><code>nasJobsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List top NasTrialDetails of a NasJob.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nasJobsId">
    <td><CopyableCode code="nasJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nasTrialDetailsId">
    <td><CopyableCode code="nasTrialDetailsId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a NasTrialDetail.

```sql
SELECT
name,
parameters,
searchTrial,
trainTrial
FROM google.aiplatform.nas_trial_details
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND nasJobsId = '{{ nasJobsId }}' -- required
AND nasTrialDetailsId = '{{ nasTrialDetailsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List top NasTrialDetails of a NasJob.

```sql
SELECT
name,
parameters,
searchTrial,
trainTrial
FROM google.aiplatform.nas_trial_details
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND nasJobsId = '{{ nasJobsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
