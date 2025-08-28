--- 
title: workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - workloads
  - cloudcontrolspartner
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

Creates, updates, deletes, gets or lists a <code>workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workloads</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcontrolspartner.workloads" /></td></tr>
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
    <td>Identifier. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="folder" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of container folder of the assured workload</td>
</tr>
<tr>
    <td><CopyableCode code="folderId" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Folder id this workload is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="isOnboarded" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a workload is fully onboarded.</td>
</tr>
<tr>
    <td><CopyableCode code="keyManagementProjectId" /></td>
    <td><code>string</code></td>
    <td>The project id of the key management project for the workload</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud location of the workload</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Partner associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadOnboardingState" /></td>
    <td><code>object</code></td>
    <td>Container for workload onboarding steps. (id: WorkloadOnboardingState)</td>
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
    <td>Identifier. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="folder" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of container folder of the assured workload</td>
</tr>
<tr>
    <td><CopyableCode code="folderId" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Folder id this workload is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="isOnboarded" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a workload is fully onboarded.</td>
</tr>
<tr>
    <td><CopyableCode code="keyManagementProjectId" /></td>
    <td><code>string</code></td>
    <td>The project id of the key management project for the workload</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud location of the workload</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Partner associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadOnboardingState" /></td>
    <td><code>object</code></td>
    <td>Container for workload onboarding steps. (id: WorkloadOnboardingState)</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Gets details of a single workload</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists customer workloads for a given customer org id</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadsId">
    <td><CopyableCode code="workloadsId" /></td>
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

Gets details of a single workload

```sql
SELECT
name,
createTime,
folder,
folderId,
isOnboarded,
keyManagementProjectId,
location,
partner,
workloadOnboardingState
FROM google.cloudcontrolspartner.workloads
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customersId = '{{ customersId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists customer workloads for a given customer org id

```sql
SELECT
name,
createTime,
folder,
folderId,
isOnboarded,
keyManagementProjectId,
location,
partner,
workloadOnboardingState
FROM google.cloudcontrolspartner.workloads
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customersId = '{{ customersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
