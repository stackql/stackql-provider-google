--- 
title: answers
hide_title: false
hide_table_of_contents: false
keywords:
  - answers
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

Creates, updates, deletes, gets or lists an <code>answers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>answers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.answers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_answers_get"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_answers_get', value: 'projects_locations_collections_data_stores_sessions_answers_get' },
        { label: 'projects_locations_collections_engines_sessions_answers_get', value: 'projects_locations_collections_engines_sessions_answers_get' },
        { label: 'projects_locations_data_stores_sessions_answers_get', value: 'projects_locations_data_stores_sessions_answers_get' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_answers_get">

Defines an answer.

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*/answers/*`</td>
</tr>
<tr>
    <td><CopyableCode code="answerSkippedReasons" /></td>
    <td><code>array</code></td>
    <td>Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="answerText" /></td>
    <td><code>string</code></td>
    <td>The textual answer.</td>
</tr>
<tr>
    <td><CopyableCode code="citations" /></td>
    <td><code>array</code></td>
    <td>Citations.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer completed timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingScore" /></td>
    <td><code>number (double)</code></td>
    <td>A score in the range of [0, 1] describing how grounded the answer is by the reference chunks.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingSupports" /></td>
    <td><code>array</code></td>
    <td>Optional. Grounding supports.</td>
</tr>
<tr>
    <td><CopyableCode code="queryUnderstandingInfo" /></td>
    <td><code>object</code></td>
    <td>Query understanding information. (id: GoogleCloudDiscoveryengineV1AnswerQueryUnderstandingInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedQuestions" /></td>
    <td><code>array</code></td>
    <td>Suggested related questions.</td>
</tr>
<tr>
    <td><CopyableCode code="safetyRatings" /></td>
    <td><code>array</code></td>
    <td>Optional. Safety ratings.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the answer generation.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Answer generation steps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_answers_get">

Defines an answer.

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*/answers/*`</td>
</tr>
<tr>
    <td><CopyableCode code="answerSkippedReasons" /></td>
    <td><code>array</code></td>
    <td>Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="answerText" /></td>
    <td><code>string</code></td>
    <td>The textual answer.</td>
</tr>
<tr>
    <td><CopyableCode code="citations" /></td>
    <td><code>array</code></td>
    <td>Citations.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer completed timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingScore" /></td>
    <td><code>number (double)</code></td>
    <td>A score in the range of [0, 1] describing how grounded the answer is by the reference chunks.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingSupports" /></td>
    <td><code>array</code></td>
    <td>Optional. Grounding supports.</td>
</tr>
<tr>
    <td><CopyableCode code="queryUnderstandingInfo" /></td>
    <td><code>object</code></td>
    <td>Query understanding information. (id: GoogleCloudDiscoveryengineV1AnswerQueryUnderstandingInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedQuestions" /></td>
    <td><code>array</code></td>
    <td>Suggested related questions.</td>
</tr>
<tr>
    <td><CopyableCode code="safetyRatings" /></td>
    <td><code>array</code></td>
    <td>Optional. Safety ratings.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the answer generation.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Answer generation steps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_answers_get">

Defines an answer.

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*/answers/*`</td>
</tr>
<tr>
    <td><CopyableCode code="answerSkippedReasons" /></td>
    <td><code>array</code></td>
    <td>Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="answerText" /></td>
    <td><code>string</code></td>
    <td>The textual answer.</td>
</tr>
<tr>
    <td><CopyableCode code="citations" /></td>
    <td><code>array</code></td>
    <td>Citations.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer completed timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Answer creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingScore" /></td>
    <td><code>number (double)</code></td>
    <td>A score in the range of [0, 1] describing how grounded the answer is by the reference chunks.</td>
</tr>
<tr>
    <td><CopyableCode code="groundingSupports" /></td>
    <td><code>array</code></td>
    <td>Optional. Grounding supports.</td>
</tr>
<tr>
    <td><CopyableCode code="queryUnderstandingInfo" /></td>
    <td><code>object</code></td>
    <td>Query understanding information. (id: GoogleCloudDiscoveryengineV1AnswerQueryUnderstandingInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedQuestions" /></td>
    <td><code>array</code></td>
    <td>Suggested related questions.</td>
</tr>
<tr>
    <td><CopyableCode code="safetyRatings" /></td>
    <td><code>array</code></td>
    <td>Optional. Safety ratings.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the answer generation.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Answer generation steps.</td>
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
    <td><a href="#projects_locations_collections_data_stores_sessions_answers_get"><CopyableCode code="projects_locations_collections_data_stores_sessions_answers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-answersId"><code>answersId</code></a></td>
    <td></td>
    <td>Gets a Answer.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_answers_get"><CopyableCode code="projects_locations_collections_engines_sessions_answers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-answersId"><code>answersId</code></a></td>
    <td></td>
    <td>Gets a Answer.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_answers_get"><CopyableCode code="projects_locations_data_stores_sessions_answers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-answersId"><code>answersId</code></a></td>
    <td></td>
    <td>Gets a Answer.</td>
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
<tr id="parameter-answersId">
    <td><CopyableCode code="answersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_answers_get"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_answers_get', value: 'projects_locations_collections_data_stores_sessions_answers_get' },
        { label: 'projects_locations_collections_engines_sessions_answers_get', value: 'projects_locations_collections_engines_sessions_answers_get' },
        { label: 'projects_locations_data_stores_sessions_answers_get', value: 'projects_locations_data_stores_sessions_answers_get' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_answers_get">

Gets a Answer.

```sql
SELECT
name,
answerSkippedReasons,
answerText,
citations,
completeTime,
createTime,
groundingScore,
groundingSupports,
queryUnderstandingInfo,
references,
relatedQuestions,
safetyRatings,
state,
steps
FROM google.discoveryengine.answers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND answersId = '{{ answersId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_answers_get">

Gets a Answer.

```sql
SELECT
name,
answerSkippedReasons,
answerText,
citations,
completeTime,
createTime,
groundingScore,
groundingSupports,
queryUnderstandingInfo,
references,
relatedQuestions,
safetyRatings,
state,
steps
FROM google.discoveryengine.answers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND answersId = '{{ answersId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_answers_get">

Gets a Answer.

```sql
SELECT
name,
answerSkippedReasons,
answerText,
citations,
completeTime,
createTime,
groundingScore,
groundingSupports,
queryUnderstandingInfo,
references,
relatedQuestions,
safetyRatings,
state,
steps
FROM google.discoveryengine.answers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND answersId = '{{ answersId }}' -- required;
```
</TabItem>
</Tabs>
