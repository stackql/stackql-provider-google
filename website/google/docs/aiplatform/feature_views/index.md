--- 
title: feature_views
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_views
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

Creates, updates, deletes, gets or lists a <code>feature_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feature_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.feature_views" /></td></tr>
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

FeatureView is representation of values that the FeatureOnlineStore will serve based on its syncConfig.

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
    <td>Identifier. Name of the FeatureView. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featureOnlineStores/&#123;feature_online_store&#125;/featureViews/&#123;feature_view&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bigQuerySource" /></td>
    <td><code>object</code></td>
    <td>Optional. Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore. (id: GoogleCloudAiplatformV1FeatureViewBigQuerySource)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureView was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="featureRegistrySource" /></td>
    <td><code>object</code></td>
    <td>Optional. Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore. (id: GoogleCloudAiplatformV1FeatureViewFeatureRegistrySource)</td>
</tr>
<tr>
    <td><CopyableCode code="indexConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for index preparation for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving. (id: GoogleCloudAiplatformV1FeatureViewIndexConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your FeatureViews. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureOnlineStore(System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="optimizedConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for FeatureView created under Optimized FeatureOnlineStore. (id: GoogleCloudAiplatformV1FeatureViewOptimizedConfig)</td>
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
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>Output only. A Service Account unique to this FeatureView. The role bigquery.dataViewer should be granted to this service account to allow Vertex AI Feature Store to sync data to the online store.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAgentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Service agent type used during data sync. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureView within a project, a separate service account should be provisioned by setting this field to `SERVICE_AGENT_TYPE_FEATURE_VIEW`. This will generate a separate service account to access the BigQuery source table.</td>
</tr>
<tr>
    <td><CopyableCode code="syncConfig" /></td>
    <td><code>object</code></td>
    <td>Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving. (id: GoogleCloudAiplatformV1FeatureViewSyncConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureView was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vertexRagSource" /></td>
    <td><code>object</code></td>
    <td>Optional. The Vertex RAG Source that the FeatureView is linked to. (id: GoogleCloudAiplatformV1FeatureViewVertexRagSource)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for FeatureOnlineStoreAdminService.ListFeatureViews.

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
    <td><CopyableCode code="featureViews" /></td>
    <td><code>array</code></td>
    <td>The FeatureViews matching the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as ListFeatureViewsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Gets details of a single FeatureView.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists FeatureViews in a given FeatureOnlineStore.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a></td>
    <td><a href="#parameter-featureViewId"><code>featureViewId</code></a>, <a href="#parameter-runSyncImmediately"><code>runSyncImmediately</code></a></td>
    <td>Creates a new FeatureView in a given FeatureOnlineStore.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single FeatureView.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Deletes a single FeatureView.</td>
</tr>
<tr>
    <td><a href="#sync"><CopyableCode code="sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Triggers on-demand sync for the FeatureView.</td>
</tr>
<tr>
    <td><a href="#search_nearest_entities"><CopyableCode code="search_nearest_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Search the nearest entities under a FeatureView. Search only works for indexable feature view; if a feature view isn't indexable, returns Invalid argument response.</td>
</tr>
<tr>
    <td><a href="#direct_write"><CopyableCode code="direct_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureOnlineStoresId"><code>featureOnlineStoresId</code></a>, <a href="#parameter-featureViewsId"><code>featureViewsId</code></a></td>
    <td></td>
    <td>Bidirectional streaming RPC to directly write to feature values in a feature view. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.</td>
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
<tr id="parameter-featureViewId">
    <td><CopyableCode code="featureViewId" /></td>
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
<tr id="parameter-runSyncImmediately">
    <td><CopyableCode code="runSyncImmediately" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets details of a single FeatureView.

```sql
SELECT
name,
bigQuerySource,
createTime,
etag,
featureRegistrySource,
indexConfig,
labels,
optimizedConfig,
satisfiesPzi,
satisfiesPzs,
serviceAccountEmail,
serviceAgentType,
syncConfig,
updateTime,
vertexRagSource
FROM google.aiplatform.feature_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' -- required
AND featureViewsId = '{{ featureViewsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists FeatureViews in a given FeatureOnlineStore.

```sql
SELECT
featureViews,
nextPageToken
FROM google.aiplatform.feature_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new FeatureView in a given FeatureOnlineStore.

```sql
INSERT INTO google.aiplatform.feature_views (
data__bigQuerySource,
data__featureRegistrySource,
data__vertexRagSource,
data__name,
data__etag,
data__labels,
data__syncConfig,
data__indexConfig,
data__optimizedConfig,
data__serviceAgentType,
projectsId,
locationsId,
featureOnlineStoresId,
featureViewId,
runSyncImmediately
)
SELECT 
'{{ bigQuerySource }}',
'{{ featureRegistrySource }}',
'{{ vertexRagSource }}',
'{{ name }}',
'{{ etag }}',
'{{ labels }}',
'{{ syncConfig }}',
'{{ indexConfig }}',
'{{ optimizedConfig }}',
'{{ serviceAgentType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ featureOnlineStoresId }}',
'{{ featureViewId }}',
'{{ runSyncImmediately }}'
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
- name: feature_views
  props:
    - name: projectsId
      value: string
      description: Required parameter for the feature_views resource.
    - name: locationsId
      value: string
      description: Required parameter for the feature_views resource.
    - name: featureOnlineStoresId
      value: string
      description: Required parameter for the feature_views resource.
    - name: bigQuerySource
      value: object
      description: >
        Optional. Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
        
    - name: featureRegistrySource
      value: object
      description: >
        Optional. Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
        
    - name: vertexRagSource
      value: object
      description: >
        Optional. The Vertex RAG Source that the FeatureView is linked to.
        
    - name: name
      value: string
      description: >
        Identifier. Name of the FeatureView. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}`
        
    - name: etag
      value: string
      description: >
        Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        Optional. The labels with user-defined metadata to organize your FeatureViews. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureOnlineStore(System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
        
    - name: syncConfig
      value: object
      description: >
        Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
        
    - name: indexConfig
      value: object
      description: >
        Optional. Configuration for index preparation for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
        
    - name: optimizedConfig
      value: object
      description: >
        Optional. Configuration for FeatureView created under Optimized FeatureOnlineStore.
        
    - name: serviceAgentType
      value: string
      description: >
        Optional. Service agent type used during data sync. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureView within a project, a separate service account should be provisioned by setting this field to `SERVICE_AGENT_TYPE_FEATURE_VIEW`. This will generate a separate service account to access the BigQuery source table.
        
      valid_values: ['SERVICE_AGENT_TYPE_UNSPECIFIED', 'SERVICE_AGENT_TYPE_PROJECT', 'SERVICE_AGENT_TYPE_FEATURE_VIEW']
    - name: featureViewId
      value: string
    - name: runSyncImmediately
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the parameters of a single FeatureView.

```sql
UPDATE google.aiplatform.feature_views
SET 
data__bigQuerySource = '{{ bigQuerySource }}',
data__featureRegistrySource = '{{ featureRegistrySource }}',
data__vertexRagSource = '{{ vertexRagSource }}',
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__syncConfig = '{{ syncConfig }}',
data__indexConfig = '{{ indexConfig }}',
data__optimizedConfig = '{{ optimizedConfig }}',
data__serviceAgentType = '{{ serviceAgentType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' --required
AND featureViewsId = '{{ featureViewsId }}' --required
AND updateMask = '{{ updateMask}}'
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single FeatureView.

```sql
DELETE FROM google.aiplatform.feature_views
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureOnlineStoresId = '{{ featureOnlineStoresId }}' --required
AND featureViewsId = '{{ featureViewsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="sync"
    values={[
        { label: 'sync', value: 'sync' },
        { label: 'search_nearest_entities', value: 'search_nearest_entities' },
        { label: 'direct_write', value: 'direct_write' }
    ]}
>
<TabItem value="sync">

Triggers on-demand sync for the FeatureView.

```sql
EXEC google.aiplatform.feature_views.sync 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featureOnlineStoresId='{{ featureOnlineStoresId }}' --required, 
@featureViewsId='{{ featureViewsId }}' --required;
```
</TabItem>
<TabItem value="search_nearest_entities">

Search the nearest entities under a FeatureView. Search only works for indexable feature view; if a feature view isn't indexable, returns Invalid argument response.

```sql
EXEC google.aiplatform.feature_views.search_nearest_entities 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featureOnlineStoresId='{{ featureOnlineStoresId }}' --required, 
@featureViewsId='{{ featureViewsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"returnFullEntity": {{ returnFullEntity }}
}';
```
</TabItem>
<TabItem value="direct_write">

Bidirectional streaming RPC to directly write to feature values in a feature view. Requests may not have a one-to-one mapping to responses and responses may be returned out-of-order to reduce latency.

```sql
EXEC google.aiplatform.feature_views.direct_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featureOnlineStoresId='{{ featureOnlineStoresId }}' --required, 
@featureViewsId='{{ featureViewsId }}' --required 
@@json=
'{
"dataKeyAndFeatureValues": "{{ dataKeyAndFeatureValues }}"
}';
```
</TabItem>
</Tabs>
