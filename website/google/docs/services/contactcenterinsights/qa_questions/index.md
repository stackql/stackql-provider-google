--- 
title: qa_questions
hide_title: false
hide_table_of_contents: false
keywords:
  - qa_questions
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>qa_questions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>qa_questions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.qa_questions" /></td></tr>
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
    <td>Identifier. The resource name of the question. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/qaScorecards/&#123;qa_scorecard&#125;/revisions/&#123;revision&#125;/qaQuestions/&#123;qa_question&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="abbreviation" /></td>
    <td><code>string</code></td>
    <td>Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".</td>
</tr>
<tr>
    <td><CopyableCode code="answerChoices" /></td>
    <td><code>array</code></td>
    <td>A list of valid answers to the question, which the LLM must choose from.</td>
</tr>
<tr>
    <td><CopyableCode code="answerInstructions" /></td>
    <td><code>string</code></td>
    <td>Instructions describing how to determine the answer.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this question was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Metrics of the underlying tuned LLM over a holdout/test set while fine tuning the underlying LLM for the given question. This field will only be populated if and only if the question is part of a scorecard revision that has been tuned. (id: GoogleCloudContactcenterinsightsV1QaQuestionMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer (int32)</code></td>
    <td>Defines the order of the question within its parent scorecard revision.</td>
</tr>
<tr>
    <td><CopyableCode code="predefinedQuestionConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the predefined question. This field will only be set if the Question Type is predefined. (id: GoogleCloudContactcenterinsightsV1QaQuestionPredefinedQuestionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="questionBody" /></td>
    <td><code>string</code></td>
    <td>Question text. E.g., "Did the agent greet the customer?"</td>
</tr>
<tr>
    <td><CopyableCode code="questionType" /></td>
    <td><code>string</code></td>
    <td>The type of question.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Questions are tagged for categorization and scoring. Tags can either be: - Default Tags: These are predefined categories. They are identified by their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER"). - Custom Tags: These are user-defined categories. They are identified by their full resource name (e.g., projects/&#123;project&#125;/locations/&#123;location&#125;/qaQuestionTags/&#123;qa_question_tag&#125;). Both default and custom tags are used to group questions and to influence the scoring of each question.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata about the tuning operation for the question.This field will only be populated if and only if the question is part of a scorecard revision that has been tuned. (id: GoogleCloudContactcenterinsightsV1QaQuestionTuningMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the question was updated.</td>
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
    <td>Identifier. The resource name of the question. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/qaScorecards/&#123;qa_scorecard&#125;/revisions/&#123;revision&#125;/qaQuestions/&#123;qa_question&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="abbreviation" /></td>
    <td><code>string</code></td>
    <td>Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".</td>
</tr>
<tr>
    <td><CopyableCode code="answerChoices" /></td>
    <td><code>array</code></td>
    <td>A list of valid answers to the question, which the LLM must choose from.</td>
</tr>
<tr>
    <td><CopyableCode code="answerInstructions" /></td>
    <td><code>string</code></td>
    <td>Instructions describing how to determine the answer.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this question was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Metrics of the underlying tuned LLM over a holdout/test set while fine tuning the underlying LLM for the given question. This field will only be populated if and only if the question is part of a scorecard revision that has been tuned. (id: GoogleCloudContactcenterinsightsV1QaQuestionMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer (int32)</code></td>
    <td>Defines the order of the question within its parent scorecard revision.</td>
</tr>
<tr>
    <td><CopyableCode code="predefinedQuestionConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the predefined question. This field will only be set if the Question Type is predefined. (id: GoogleCloudContactcenterinsightsV1QaQuestionPredefinedQuestionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="questionBody" /></td>
    <td><code>string</code></td>
    <td>Question text. E.g., "Did the agent greet the customer?"</td>
</tr>
<tr>
    <td><CopyableCode code="questionType" /></td>
    <td><code>string</code></td>
    <td>The type of question.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Questions are tagged for categorization and scoring. Tags can either be: - Default Tags: These are predefined categories. They are identified by their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER"). - Custom Tags: These are user-defined categories. They are identified by their full resource name (e.g., projects/&#123;project&#125;/locations/&#123;location&#125;/qaQuestionTags/&#123;qa_question_tag&#125;). Both default and custom tags are used to group questions and to influence the scoring of each question.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata about the tuning operation for the question.This field will only be populated if and only if the question is part of a scorecard revision that has been tuned. (id: GoogleCloudContactcenterinsightsV1QaQuestionTuningMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the question was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-qaQuestionsId"><code>qaQuestionsId</code></a></td>
    <td></td>
    <td>Gets a QaQuestion.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists QaQuestions.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-qaQuestionId"><code>qaQuestionId</code></a></td>
    <td>Create a QaQuestion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-qaQuestionsId"><code>qaQuestionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a QaQuestion.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-qaQuestionsId"><code>qaQuestionsId</code></a></td>
    <td></td>
    <td>Deletes a QaQuestion.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-qaQuestionsId">
    <td><CopyableCode code="qaQuestionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-qaScorecardsId">
    <td><CopyableCode code="qaScorecardsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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
<tr id="parameter-qaQuestionId">
    <td><CopyableCode code="qaQuestionId" /></td>
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

Gets a QaQuestion.

```sql
SELECT
name,
abbreviation,
answerChoices,
answerInstructions,
createTime,
metrics,
order,
predefinedQuestionConfig,
questionBody,
questionType,
tags,
tuningMetadata,
updateTime
FROM google.contactcenterinsights.qa_questions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND qaScorecardsId = '{{ qaScorecardsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND qaQuestionsId = '{{ qaQuestionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists QaQuestions.

```sql
SELECT
name,
abbreviation,
answerChoices,
answerInstructions,
createTime,
metrics,
order,
predefinedQuestionConfig,
questionBody,
questionType,
tags,
tuningMetadata,
updateTime
FROM google.contactcenterinsights.qa_questions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND qaScorecardsId = '{{ qaScorecardsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Create a QaQuestion.

```sql
INSERT INTO google.contactcenterinsights.qa_questions (
data__name,
data__abbreviation,
data__questionType,
data__predefinedQuestionConfig,
data__questionBody,
data__answerInstructions,
data__answerChoices,
data__tags,
data__order,
data__metrics,
data__tuningMetadata,
projectsId,
locationsId,
qaScorecardsId,
revisionsId,
qaQuestionId
)
SELECT 
'{{ name }}',
'{{ abbreviation }}',
'{{ questionType }}',
'{{ predefinedQuestionConfig }}',
'{{ questionBody }}',
'{{ answerInstructions }}',
'{{ answerChoices }}',
'{{ tags }}',
{{ order }},
'{{ metrics }}',
'{{ tuningMetadata }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ qaScorecardsId }}',
'{{ revisionsId }}',
'{{ qaQuestionId }}'
RETURNING
name,
abbreviation,
answerChoices,
answerInstructions,
createTime,
metrics,
order,
predefinedQuestionConfig,
questionBody,
questionType,
tags,
tuningMetadata,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: qa_questions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the qa_questions resource.
    - name: locationsId
      value: string
      description: Required parameter for the qa_questions resource.
    - name: qaScorecardsId
      value: string
      description: Required parameter for the qa_questions resource.
    - name: revisionsId
      value: string
      description: Required parameter for the qa_questions resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the question. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}/revisions/{revision}/qaQuestions/{qa_question}
        
    - name: abbreviation
      value: string
      description: >
        Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".
        
    - name: questionType
      value: string
      description: >
        The type of question.
        
      valid_values: ['QA_QUESTION_TYPE_UNSPECIFIED', 'CUSTOMIZABLE', 'PREDEFINED']
    - name: predefinedQuestionConfig
      value: object
      description: >
        The configuration of the predefined question. This field will only be set if the Question Type is predefined.
        
    - name: questionBody
      value: string
      description: >
        Question text. E.g., "Did the agent greet the customer?"
        
    - name: answerInstructions
      value: string
      description: >
        Instructions describing how to determine the answer.
        
    - name: answerChoices
      value: array
      description: >
        A list of valid answers to the question, which the LLM must choose from.
        
    - name: tags
      value: array
      description: >
        Questions are tagged for categorization and scoring. Tags can either be: - Default Tags: These are predefined categories. They are identified by their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER"). - Custom Tags: These are user-defined categories. They are identified by their full resource name (e.g., projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}). Both default and custom tags are used to group questions and to influence the scoring of each question.
        
    - name: order
      value: integer
      description: >
        Defines the order of the question within its parent scorecard revision.
        
    - name: metrics
      value: object
      description: >
        Metrics of the underlying tuned LLM over a holdout/test set while fine tuning the underlying LLM for the given question. This field will only be populated if and only if the question is part of a scorecard revision that has been tuned.
        
    - name: tuningMetadata
      value: object
      description: >
        Metadata about the tuning operation for the question.This field will only be populated if and only if the question is part of a scorecard revision that has been tuned.
        
    - name: qaQuestionId
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

Updates a QaQuestion.

```sql
UPDATE google.contactcenterinsights.qa_questions
SET 
data__name = '{{ name }}',
data__abbreviation = '{{ abbreviation }}',
data__questionType = '{{ questionType }}',
data__predefinedQuestionConfig = '{{ predefinedQuestionConfig }}',
data__questionBody = '{{ questionBody }}',
data__answerInstructions = '{{ answerInstructions }}',
data__answerChoices = '{{ answerChoices }}',
data__tags = '{{ tags }}',
data__order = {{ order }},
data__metrics = '{{ metrics }}',
data__tuningMetadata = '{{ tuningMetadata }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND qaScorecardsId = '{{ qaScorecardsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND qaQuestionsId = '{{ qaQuestionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
abbreviation,
answerChoices,
answerInstructions,
createTime,
metrics,
order,
predefinedQuestionConfig,
questionBody,
questionType,
tags,
tuningMetadata,
updateTime;
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

Deletes a QaQuestion.

```sql
DELETE FROM google.contactcenterinsights.qa_questions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND qaScorecardsId = '{{ qaScorecardsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND qaQuestionsId = '{{ qaQuestionsId }}' --required;
```
</TabItem>
</Tabs>
