--- 
title: serving_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - serving_configs
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

Creates, updates, deletes, gets or lists a <code>serving_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>serving_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.serving_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_collections_data_stores_serving_configs_patch"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_patch"><CopyableCode code="projects_locations_collections_engines_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_patch"><CopyableCode code="projects_locations_data_stores_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_search"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_search_lite"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_answer"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_stream_answer"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_recommend"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_search"><CopyableCode code="projects_locations_collections_engines_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_search_lite"><CopyableCode code="projects_locations_collections_engines_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_answer"><CopyableCode code="projects_locations_collections_engines_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_stream_answer"><CopyableCode code="projects_locations_collections_engines_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_recommend"><CopyableCode code="projects_locations_collections_engines_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_search"><CopyableCode code="projects_locations_data_stores_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_search_lite"><CopyableCode code="projects_locations_data_stores_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_answer"><CopyableCode code="projects_locations_data_stores_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_stream_answer"><CopyableCode code="projects_locations_data_stores_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_recommend"><CopyableCode code="projects_locations_data_stores_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
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
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
<tr id="parameter-servingConfigsId">
    <td><CopyableCode code="servingConfigsId" /></td>
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

## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_serving_configs_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_serving_configs_patch', value: 'projects_locations_collections_data_stores_serving_configs_patch' },
        { label: 'projects_locations_collections_engines_serving_configs_patch', value: 'projects_locations_collections_engines_serving_configs_patch' },
        { label: 'projects_locations_data_stores_serving_configs_patch', value: 'projects_locations_data_stores_serving_configs_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__mediaConfig = '{{ mediaConfig }}',
data__genericConfig = '{{ genericConfig }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__modelId = '{{ modelId }}',
data__diversityLevel = '{{ diversityLevel }}',
data__rankingExpression = '{{ rankingExpression }}',
data__filterControlIds = '{{ filterControlIds }}',
data__boostControlIds = '{{ boostControlIds }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__replacementControlIds = '{{ replacementControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__mediaConfig = '{{ mediaConfig }}',
data__genericConfig = '{{ genericConfig }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__modelId = '{{ modelId }}',
data__diversityLevel = '{{ diversityLevel }}',
data__rankingExpression = '{{ rankingExpression }}',
data__filterControlIds = '{{ filterControlIds }}',
data__boostControlIds = '{{ boostControlIds }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__replacementControlIds = '{{ replacementControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__mediaConfig = '{{ mediaConfig }}',
data__genericConfig = '{{ genericConfig }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__modelId = '{{ modelId }}',
data__diversityLevel = '{{ diversityLevel }}',
data__rankingExpression = '{{ rankingExpression }}',
data__filterControlIds = '{{ filterControlIds }}',
data__boostControlIds = '{{ boostControlIds }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__replacementControlIds = '{{ replacementControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_serving_configs_search"
    values={[
        { label: 'projects_locations_collections_data_stores_serving_configs_search', value: 'projects_locations_collections_data_stores_serving_configs_search' },
        { label: 'projects_locations_collections_data_stores_serving_configs_search_lite', value: 'projects_locations_collections_data_stores_serving_configs_search_lite' },
        { label: 'projects_locations_collections_data_stores_serving_configs_answer', value: 'projects_locations_collections_data_stores_serving_configs_answer' },
        { label: 'projects_locations_collections_data_stores_serving_configs_stream_answer', value: 'projects_locations_collections_data_stores_serving_configs_stream_answer' },
        { label: 'projects_locations_collections_data_stores_serving_configs_recommend', value: 'projects_locations_collections_data_stores_serving_configs_recommend' },
        { label: 'projects_locations_collections_engines_serving_configs_search', value: 'projects_locations_collections_engines_serving_configs_search' },
        { label: 'projects_locations_collections_engines_serving_configs_search_lite', value: 'projects_locations_collections_engines_serving_configs_search_lite' },
        { label: 'projects_locations_collections_engines_serving_configs_answer', value: 'projects_locations_collections_engines_serving_configs_answer' },
        { label: 'projects_locations_collections_engines_serving_configs_stream_answer', value: 'projects_locations_collections_engines_serving_configs_stream_answer' },
        { label: 'projects_locations_collections_engines_serving_configs_recommend', value: 'projects_locations_collections_engines_serving_configs_recommend' },
        { label: 'projects_locations_data_stores_serving_configs_search', value: 'projects_locations_data_stores_serving_configs_search' },
        { label: 'projects_locations_data_stores_serving_configs_search_lite', value: 'projects_locations_data_stores_serving_configs_search_lite' },
        { label: 'projects_locations_data_stores_serving_configs_answer', value: 'projects_locations_data_stores_serving_configs_answer' },
        { label: 'projects_locations_data_stores_serving_configs_stream_answer', value: 'projects_locations_data_stores_serving_configs_stream_answer' },
        { label: 'projects_locations_data_stores_serving_configs_recommend', value: 'projects_locations_data_stores_serving_configs_recommend' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"imageQuery": "{{ imageQuery }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"userInfo": "{{ userInfo }}", 
"languageCode": "{{ languageCode }}", 
"facetSpecs": "{{ facetSpecs }}", 
"boostSpec": "{{ boostSpec }}", 
"params": "{{ params }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"displaySpec": "{{ displaySpec }}", 
"session": "{{ session }}", 
"sessionSpec": "{{ sessionSpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"safetySpec": "{{ safetySpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}", 
"searchSpec": "{{ searchSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"userPseudoId": "{{ userPseudoId }}", 
"userLabels": "{{ userLabels }}", 
"endUserSpec": "{{ endUserSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}"
}';
```
</TabItem>
</Tabs>
