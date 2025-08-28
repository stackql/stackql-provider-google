--- 
title: feature_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_groups
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

Creates, updates, deletes, gets or lists a <code>feature_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feature_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.feature_groups" /></td></tr>
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
    <td>Identifier. Name of the FeatureGroup. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featureGroups/&#123;featureGroup&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bigQuery" /></td>
    <td><code>object</code></td>
    <td>Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source. The BigQuery source table or view must have at least one entity ID column and a column named `feature_timestamp`. (id: GoogleCloudAiplatformV1FeatureGroupBigQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your FeatureGroup. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureGroup(System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>Output only. A Service Account unique to this FeatureGroup. The role bigquery.dataViewer should be granted to this service account to allow Vertex AI Feature Store to access source data while running jobs under this FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAgentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Service agent type used during jobs under a FeatureGroup. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureGroup within a project, a separate service account should be provisioned by setting this field to `SERVICE_AGENT_TYPE_FEATURE_GROUP`. This will generate a separate service account to access the BigQuery source table.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureGroup was last updated.</td>
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
    <td>Identifier. Name of the FeatureGroup. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featureGroups/&#123;featureGroup&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bigQuery" /></td>
    <td><code>object</code></td>
    <td>Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source. The BigQuery source table or view must have at least one entity ID column and a column named `feature_timestamp`. (id: GoogleCloudAiplatformV1FeatureGroupBigQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your FeatureGroup. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureGroup(System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>Output only. A Service Account unique to this FeatureGroup. The role bigquery.dataViewer should be granted to this service account to allow Vertex AI Feature Store to access source data while running jobs under this FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAgentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Service agent type used during jobs under a FeatureGroup. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureGroup within a project, a separate service account should be provisioned by setting this field to `SERVICE_AGENT_TYPE_FEATURE_GROUP`. This will generate a separate service account to access the BigQuery source table.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this FeatureGroup was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td></td>
    <td>Gets details of a single FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists FeatureGroups in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-featureGroupId"><code>featureGroupId</code></a></td>
    <td>Creates a new FeatureGroup in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single FeatureGroup.</td>
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
<tr id="parameter-featureGroupsId">
    <td><CopyableCode code="featureGroupsId" /></td>
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
<tr id="parameter-featureGroupId">
    <td><CopyableCode code="featureGroupId" /></td>
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

Gets details of a single FeatureGroup.

```sql
SELECT
name,
bigQuery,
createTime,
description,
etag,
labels,
serviceAccountEmail,
serviceAgentType,
updateTime
FROM google.aiplatform.feature_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureGroupsId = '{{ featureGroupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists FeatureGroups in a given project and location.

```sql
SELECT
name,
bigQuery,
createTime,
description,
etag,
labels,
serviceAccountEmail,
serviceAgentType,
updateTime
FROM google.aiplatform.feature_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new FeatureGroup in a given project and location.

```sql
INSERT INTO google.aiplatform.feature_groups (
data__bigQuery,
data__name,
data__etag,
data__labels,
data__description,
data__serviceAgentType,
projectsId,
locationsId,
featureGroupId
)
SELECT 
'{{ bigQuery }}',
'{{ name }}',
'{{ etag }}',
'{{ labels }}',
'{{ description }}',
'{{ serviceAgentType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ featureGroupId }}'
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
- name: feature_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the feature_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the feature_groups resource.
    - name: bigQuery
      value: object
      description: >
        Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source. The BigQuery source table or view must have at least one entity ID column and a column named `feature_timestamp`.
        
    - name: name
      value: string
      description: >
        Identifier. Name of the FeatureGroup. Format: `projects/{project}/locations/{location}/featureGroups/{featureGroup}`
        
    - name: etag
      value: string
      description: >
        Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        Optional. The labels with user-defined metadata to organize your FeatureGroup. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one FeatureGroup(System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
        
    - name: description
      value: string
      description: >
        Optional. Description of the FeatureGroup.
        
    - name: serviceAgentType
      value: string
      description: >
        Optional. Service agent type used during jobs under a FeatureGroup. By default, the Vertex AI Service Agent is used. When using an IAM Policy to isolate this FeatureGroup within a project, a separate service account should be provisioned by setting this field to `SERVICE_AGENT_TYPE_FEATURE_GROUP`. This will generate a separate service account to access the BigQuery source table.
        
      valid_values: ['SERVICE_AGENT_TYPE_UNSPECIFIED', 'SERVICE_AGENT_TYPE_PROJECT', 'SERVICE_AGENT_TYPE_FEATURE_GROUP']
    - name: featureGroupId
      value: string
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

Updates the parameters of a single FeatureGroup.

```sql
UPDATE google.aiplatform.feature_groups
SET 
data__bigQuery = '{{ bigQuery }}',
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__serviceAgentType = '{{ serviceAgentType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureGroupsId = '{{ featureGroupsId }}' --required
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

Deletes a single FeatureGroup.

```sql
DELETE FROM google.aiplatform.feature_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureGroupsId = '{{ featureGroupsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
