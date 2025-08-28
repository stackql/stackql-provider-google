--- 
title: feature_view_syncs
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_view_syncs
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

Creates, updates, deletes, gets or lists a <code>feature_view_syncs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feature_view_syncs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.feature_view_syncs" /></td></tr>
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
    <td>Identifier. Name of the FeatureViewSync. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featureOnlineStores/&#123;feature_online_store&#125;/featureViews/&#123;feature_view&#125;/featureViewSyncs/&#123;feature_view_sync&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this FeatureViewSync is created. Creation of a FeatureViewSync means that the job is pending / waiting for sufficient resources but may not have started the actual data transfer yet.</td>
</tr>
<tr>
    <td><CopyableCode code="finalStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Final status of the FeatureViewSync. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>object</code></td>
    <td>Output only. Time when this FeatureViewSync is finished. (id: GoogleTypeInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="syncSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Summary of the sync job. (id: GoogleCloudAiplatformV1FeatureViewSyncSyncSummary)</td>
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
    <td>Identifier. Name of the FeatureViewSync. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featureOnlineStores/&#123;feature_online_store&#125;/featureViews/&#123;feature_view&#125;/featureViewSyncs/&#123;feature_view_sync&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this FeatureViewSync is created. Creation of a FeatureViewSync means that the job is pending / waiting for sufficient resources but may not have started the actual data transfer yet.</td>
</tr>
<tr>
    <td><CopyableCode code="finalStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Final status of the FeatureViewSync. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>object</code></td>
    <td>Output only. Time when this FeatureViewSync is finished. (id: GoogleTypeInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="syncSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Summary of the sync job. (id: GoogleCloudAiplatformV1FeatureViewSyncSyncSummary)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a>, <a href="#parameter-featureViewSyncsId"><code>featureViewSyncsId</code></a></td>
    <td></td>
    <td>Gets details of a single FeatureViewSync.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists FeatureViewSyncs in a given FeatureView.</td>
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
<tr id="parameter-featureOnlineStoresId">
    <td><CopyableCode code="featureOnlineStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-featureViewSyncsId">
    <td><CopyableCode code="featureViewSyncsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-featureViewsId">
    <td><CopyableCode code="featureViewsId" /></td>
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

Gets details of a single FeatureViewSync.

```sql
SELECT
name,
createTime,
finalStatus,
runTime,
satisfiesPzi,
satisfiesPzs,
syncSummary
FROM google.aiplatform.feature_view_syncs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' -- required
AND featureViewsId = '{{ featureViewsId }}' -- required
AND featureViewSyncsId = '{{ featureViewSyncsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists FeatureViewSyncs in a given FeatureView.

```sql
SELECT
name,
createTime,
finalStatus,
runTime,
satisfiesPzi,
satisfiesPzs,
syncSummary
FROM google.aiplatform.feature_view_syncs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' -- required
AND featureViewsId = '{{ featureViewsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
