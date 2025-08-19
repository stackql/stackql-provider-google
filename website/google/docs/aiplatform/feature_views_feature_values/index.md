--- 
title: feature_views_feature_values
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_views_feature_values
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

Creates, updates, deletes, gets or lists a <code>feature_views_feature_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feature_views_feature_values</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.feature_views_feature_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_feature_values"
    values={[
        { label: 'fetch_feature_values', value: 'fetch_feature_values' }
    ]}
>
<TabItem value="fetch_feature_values">

Response message for FeatureOnlineStoreService.FetchFeatureValues

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
    <td><CopyableCode code="dataKey" /></td>
    <td><code>object</code></td>
    <td>The data key associated with this response. Will only be populated for FeatureOnlineStoreService.StreamingFetchFeatureValues RPCs. (id: GoogleCloudAiplatformV1FeatureViewDataKey)</td>
</tr>
<tr>
    <td><CopyableCode code="keyValues" /></td>
    <td><code>object</code></td>
    <td>Feature values in KeyValue format. (id: GoogleCloudAiplatformV1FetchFeatureValuesResponseFeatureNameValuePairList)</td>
</tr>
<tr>
    <td><CopyableCode code="protoStruct" /></td>
    <td><code>object</code></td>
    <td>Feature values in proto Struct format.</td>
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
    <td><a href="#fetch_feature_values"><CopyableCode code="fetch_feature_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Fetch feature values under a FeatureView.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_feature_values"
    values={[
        { label: 'fetch_feature_values', value: 'fetch_feature_values' }
    ]}
>
<TabItem value="fetch_feature_values">

Fetch feature values under a FeatureView.

```sql
SELECT
dataKey,
keyValues,
protoStruct
FROM google.aiplatform.feature_views_feature_values
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' -- required
AND featureViewsId = '{{ featureViewsId }}' -- required;
```
</TabItem>
</Tabs>
