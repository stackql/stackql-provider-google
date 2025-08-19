--- 
title: processor_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - processor_versions
  - documentai
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

Creates, updates, deletes, gets or lists a <code>processor_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>processor_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.processor_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_processors_processor_versions_get"
    values={[
        { label: 'projects_locations_processors_processor_versions_get', value: 'projects_locations_processors_processor_versions_get' },
        { label: 'projects_locations_processors_processor_versions_list', value: 'projects_locations_processors_processor_versions_list' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_get">

A processor version is an implementation of a processor. Each processor can have multiple versions, pretrained by Google internally or uptrained by the customer. A processor can only have one default version at a time. Its document-processing behavior is defined by that version.

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
    <td>Identifier. The resource name of the processor version. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/processors/&#123;processor&#125;/processorVersions/&#123;processor_version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the processor version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecationInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. If set, information about the eventual deprecation of this version. (id: GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the processor version.</td>
</tr>
<tr>
    <td><CopyableCode code="documentSchema" /></td>
    <td><code>object</code></td>
    <td>Output only. The schema of the processor version. Describes the output. (id: GoogleCloudDocumentaiV1DocumentSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="genAiModelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about Generative AI model-based processor versions. (id: GoogleCloudDocumentaiV1ProcessorVersionGenAiModelInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="googleManaged" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Denotes that this `ProcessorVersion` is managed by Google.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Output only. The KMS key name used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The KMS key version with which data is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="latestEvaluation" /></td>
    <td><code>object</code></td>
    <td>Output only. The most recently invoked evaluation for the processor version. (id: GoogleCloudDocumentaiV1EvaluationReference)</td>
</tr>
<tr>
    <td><CopyableCode code="modelType" /></td>
    <td><code>string</code></td>
    <td>Output only. The model type of this processor version.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the processor version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_list">

Response message for the ListProcessorVersions method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Points to the next processor, otherwise empty.</td>
</tr>
<tr>
    <td><CopyableCode code="processorVersions" /></td>
    <td><code>array</code></td>
    <td>The list of processors.</td>
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
    <td><a href="#projects_locations_processors_processor_versions_get"><CopyableCode code="projects_locations_processors_processor_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Gets a processor version detail.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_list"><CopyableCode code="projects_locations_processors_processor_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all versions of a processor.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_delete"><CopyableCode code="projects_locations_processors_processor_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Deletes the processor version, all artifacts under the processor version will be deleted.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_process"><CopyableCode code="projects_locations_processors_processor_versions_process" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Processes a single document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_batch_process"><CopyableCode code="projects_locations_processors_processor_versions_batch_process" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_train"><CopyableCode code="projects_locations_processors_processor_versions_train" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_deploy"><CopyableCode code="projects_locations_processors_processor_versions_deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Deploys the processor version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_undeploy"><CopyableCode code="projects_locations_processors_processor_versions_undeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Undeploys the processor version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_processor_versions_evaluate_processor_version"><CopyableCode code="projects_locations_processors_processor_versions_evaluate_processor_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a>, <a href="#parameter-processorVersionsId"><code>processorVersionsId</code></a></td>
    <td></td>
    <td>Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.</td>
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
<tr id="parameter-processorVersionsId">
    <td><CopyableCode code="processorVersionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-processorsId">
    <td><CopyableCode code="processorsId" /></td>
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
    defaultValue="projects_locations_processors_processor_versions_get"
    values={[
        { label: 'projects_locations_processors_processor_versions_get', value: 'projects_locations_processors_processor_versions_get' },
        { label: 'projects_locations_processors_processor_versions_list', value: 'projects_locations_processors_processor_versions_list' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_get">

Gets a processor version detail.

```sql
SELECT
name,
createTime,
deprecationInfo,
displayName,
documentSchema,
genAiModelInfo,
googleManaged,
kmsKeyName,
kmsKeyVersionName,
latestEvaluation,
modelType,
satisfiesPzi,
satisfiesPzs,
state
FROM google.documentai.processor_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorsId = '{{ processorsId }}' -- required
AND processorVersionsId = '{{ processorVersionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_list">

Lists all versions of a processor.

```sql
SELECT
nextPageToken,
processorVersions
FROM google.documentai.processor_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorsId = '{{ processorsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_processors_processor_versions_delete"
    values={[
        { label: 'projects_locations_processors_processor_versions_delete', value: 'projects_locations_processors_processor_versions_delete' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_delete">

Deletes the processor version, all artifacts under the processor version will be deleted.

```sql
DELETE FROM google.documentai.processor_versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND processorsId = '{{ processorsId }}' --required
AND processorVersionsId = '{{ processorVersionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_processors_processor_versions_process"
    values={[
        { label: 'projects_locations_processors_processor_versions_process', value: 'projects_locations_processors_processor_versions_process' },
        { label: 'projects_locations_processors_processor_versions_batch_process', value: 'projects_locations_processors_processor_versions_batch_process' },
        { label: 'projects_locations_processors_processor_versions_train', value: 'projects_locations_processors_processor_versions_train' },
        { label: 'projects_locations_processors_processor_versions_deploy', value: 'projects_locations_processors_processor_versions_deploy' },
        { label: 'projects_locations_processors_processor_versions_undeploy', value: 'projects_locations_processors_processor_versions_undeploy' },
        { label: 'projects_locations_processors_processor_versions_evaluate_processor_version', value: 'projects_locations_processors_processor_versions_evaluate_processor_version' }
    ]}
>
<TabItem value="projects_locations_processors_processor_versions_process">

Processes a single document.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_process 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required, 
@processorVersionsId='{{ processorVersionsId }}' --required 
@@json=
'{
"inlineDocument": "{{ inlineDocument }}", 
"rawDocument": "{{ rawDocument }}", 
"gcsDocument": "{{ gcsDocument }}", 
"skipHumanReview": {{ skipHumanReview }}, 
"fieldMask": "{{ fieldMask }}", 
"processOptions": "{{ processOptions }}", 
"labels": "{{ labels }}", 
"imagelessMode": {{ imagelessMode }}
}';
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_batch_process">

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_batch_process 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required, 
@processorVersionsId='{{ processorVersionsId }}' --required 
@@json=
'{
"inputDocuments": "{{ inputDocuments }}", 
"documentOutputConfig": "{{ documentOutputConfig }}", 
"skipHumanReview": {{ skipHumanReview }}, 
"processOptions": "{{ processOptions }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_train">

Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_train 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required 
@@json=
'{
"customDocumentExtractionOptions": "{{ customDocumentExtractionOptions }}", 
"foundationModelTuningOptions": "{{ foundationModelTuningOptions }}", 
"processorVersion": "{{ processorVersion }}", 
"documentSchema": "{{ documentSchema }}", 
"inputData": "{{ inputData }}", 
"baseProcessorVersion": "{{ baseProcessorVersion }}"
}';
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_deploy">

Deploys the processor version.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_deploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required, 
@processorVersionsId='{{ processorVersionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_undeploy">

Undeploys the processor version.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_undeploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required, 
@processorVersionsId='{{ processorVersionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_processors_processor_versions_evaluate_processor_version">

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

```sql
EXEC google.documentai.processor_versions.projects_locations_processors_processor_versions_evaluate_processor_version 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required, 
@processorVersionsId='{{ processorVersionsId }}' --required 
@@json=
'{
"evaluationDocuments": "{{ evaluationDocuments }}"
}';
```
</TabItem>
</Tabs>
