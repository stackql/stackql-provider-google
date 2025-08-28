--- 
title: engines
hide_title: false
hide_table_of_contents: false
keywords:
  - engines
  - discoveryengine
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

Creates, updates, deletes, gets or lists an <code>engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>engines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.engines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_get"
    values={[
        { label: 'projects_locations_collections_engines_get', value: 'projects_locations_collections_engines_get' },
        { label: 'projects_locations_collections_engines_list', value: 'projects_locations_collections_engines_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_get">

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
    <td>Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="commonConfig" /></td>
    <td><code>object</code></td>
    <td>Common config spec that specifies the metadata of the engine. (id: GoogleCloudDiscoveryengineV1EngineCommonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.</td>
</tr>
<tr>
    <td><CopyableCode code="disableAnalytics" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to disable analytics for searches performed on this engine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * `*`: all features, if it's present, all other feature state settings are ignored. * `agent-gallery` * `no-code-agent-builder` * `prompt-gallery` * `model-selector` * `notebook-lm` * `people-search` * `people-search-org-chart` * `bi-directional-audio` * `feedback` * `session-sharing` * `personalization-memory` - Enables personalization based on user preferences.</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaRecommendationEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical. (id: GoogleCloudDiscoveryengineV1EngineMediaRecommendationEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="searchEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineSearchEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. The solutions of the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_list">

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
    <td>Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="commonConfig" /></td>
    <td><code>object</code></td>
    <td>Common config spec that specifies the metadata of the engine. (id: GoogleCloudDiscoveryengineV1EngineCommonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.</td>
</tr>
<tr>
    <td><CopyableCode code="disableAnalytics" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to disable analytics for searches performed on this engine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * `*`: all features, if it's present, all other feature state settings are ignored. * `agent-gallery` * `no-code-agent-builder` * `prompt-gallery` * `model-selector` * `notebook-lm` * `people-search` * `people-search-org-chart` * `bi-directional-audio` * `feedback` * `session-sharing` * `personalization-memory` - Enables personalization based on user preferences.</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaRecommendationEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical. (id: GoogleCloudDiscoveryengineV1EngineMediaRecommendationEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="searchEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineSearchEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. The solutions of the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was last updated.</td>
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
    <td><a href="#projects_locations_collections_engines_get"><CopyableCode code="projects_locations_collections_engines_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Gets a Engine.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_list"><CopyableCode code="projects_locations_collections_engines_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all the Engines associated with the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_create"><CopyableCode code="projects_locations_collections_engines_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-engineId"><code>engineId</code></a></td>
    <td>Creates a Engine.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_patch"><CopyableCode code="projects_locations_collections_engines_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Engine</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_delete"><CopyableCode code="projects_locations_collections_engines_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Deletes a Engine.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enginesId">
    <td><CopyableCode code="enginesId" /></td>
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
<tr id="parameter-engineId">
    <td><CopyableCode code="engineId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="projects_locations_collections_engines_get"
    values={[
        { label: 'projects_locations_collections_engines_get', value: 'projects_locations_collections_engines_get' },
        { label: 'projects_locations_collections_engines_list', value: 'projects_locations_collections_engines_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_get">

Gets a Engine.

```sql
SELECT
name,
chatEngineConfig,
chatEngineMetadata,
commonConfig,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
mediaRecommendationEngineConfig,
searchEngineConfig,
solutionType,
updateTime
FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_list">

Lists all the Engines associated with the project.

```sql
SELECT
name,
chatEngineConfig,
chatEngineMetadata,
commonConfig,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
mediaRecommendationEngineConfig,
searchEngineConfig,
solutionType,
updateTime
FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_create"
    values={[
        { label: 'projects_locations_collections_engines_create', value: 'projects_locations_collections_engines_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_engines_create">

Creates a Engine.

```sql
INSERT INTO google.discoveryengine.engines (
data__chatEngineConfig,
data__searchEngineConfig,
data__mediaRecommendationEngineConfig,
data__name,
data__displayName,
data__dataStoreIds,
data__solutionType,
data__industryVertical,
data__commonConfig,
data__disableAnalytics,
data__features,
projectsId,
locationsId,
collectionsId,
engineId
)
SELECT 
'{{ chatEngineConfig }}',
'{{ searchEngineConfig }}',
'{{ mediaRecommendationEngineConfig }}',
'{{ name }}',
'{{ displayName }}',
'{{ dataStoreIds }}',
'{{ solutionType }}',
'{{ industryVertical }}',
'{{ commonConfig }}',
{{ disableAnalytics }},
'{{ features }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ engineId }}'
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
- name: engines
  props:
    - name: projectsId
      value: string
      description: Required parameter for the engines resource.
    - name: locationsId
      value: string
      description: Required parameter for the engines resource.
    - name: collectionsId
      value: string
      description: Required parameter for the engines resource.
    - name: chatEngineConfig
      value: object
      description: >
        Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
        
    - name: searchEngineConfig
      value: object
      description: >
        Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
        
    - name: mediaRecommendationEngineConfig
      value: object
      description: >
        Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical.
        
    - name: name
      value: string
      description: >
        Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
        
    - name: dataStoreIds
      value: array
      description: >
        Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.
        
    - name: solutionType
      value: string
      description: >
        Required. The solutions of the engine.
        
      valid_values: ['SOLUTION_TYPE_UNSPECIFIED', 'SOLUTION_TYPE_RECOMMENDATION', 'SOLUTION_TYPE_SEARCH', 'SOLUTION_TYPE_CHAT', 'SOLUTION_TYPE_GENERATIVE_CHAT']
    - name: industryVertical
      value: string
      description: >
        Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine.
        
      valid_values: ['INDUSTRY_VERTICAL_UNSPECIFIED', 'GENERIC', 'MEDIA', 'HEALTHCARE_FHIR']
    - name: commonConfig
      value: object
      description: >
        Common config spec that specifies the metadata of the engine.
        
    - name: disableAnalytics
      value: boolean
      description: >
        Optional. Whether to disable analytics for searches performed on this engine.
        
    - name: features
      value: object
      description: >
        Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * `*`: all features, if it's present, all other feature state settings are ignored. * `agent-gallery` * `no-code-agent-builder` * `prompt-gallery` * `model-selector` * `notebook-lm` * `people-search` * `people-search-org-chart` * `bi-directional-audio` * `feedback` * `session-sharing` * `personalization-memory` - Enables personalization based on user preferences.
        
    - name: engineId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_patch"
    values={[
        { label: 'projects_locations_collections_engines_patch', value: 'projects_locations_collections_engines_patch' }
    ]}
>
<TabItem value="projects_locations_collections_engines_patch">

Updates an Engine

```sql
UPDATE google.discoveryengine.engines
SET 
data__chatEngineConfig = '{{ chatEngineConfig }}',
data__searchEngineConfig = '{{ searchEngineConfig }}',
data__mediaRecommendationEngineConfig = '{{ mediaRecommendationEngineConfig }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__dataStoreIds = '{{ dataStoreIds }}',
data__solutionType = '{{ solutionType }}',
data__industryVertical = '{{ industryVertical }}',
data__commonConfig = '{{ commonConfig }}',
data__disableAnalytics = {{ disableAnalytics }},
data__features = '{{ features }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
chatEngineConfig,
chatEngineMetadata,
commonConfig,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
mediaRecommendationEngineConfig,
searchEngineConfig,
solutionType,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_delete"
    values={[
        { label: 'projects_locations_collections_engines_delete', value: 'projects_locations_collections_engines_delete' }
    ]}
>
<TabItem value="projects_locations_collections_engines_delete">

Deletes a Engine.

```sql
DELETE FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required;
```
</TabItem>
</Tabs>
