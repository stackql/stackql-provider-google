--- 
title: processors
hide_title: false
hide_table_of_contents: false
keywords:
  - processors
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

Creates, updates, deletes, gets or lists a <code>processors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>processors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.processors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_processors_get"
    values={[
        { label: 'projects_locations_processors_get', value: 'projects_locations_processors_get' },
        { label: 'projects_locations_processors_list', value: 'projects_locations_processors_list' }
    ]}
>
<TabItem value="projects_locations_processors_get">

The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.

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
    <td>Output only. Immutable. The resource name of the processor. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/processors/&#123;processor&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the processor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultProcessorVersion" /></td>
    <td><code>string</code></td>
    <td>The default processor version.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the processor.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>The [KMS key](https://cloud.google.com/security-key-management) used for encryption and decryption in CMEK scenarios.</td>
</tr>
<tr>
    <td><CopyableCode code="processEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The http endpoint that can be called to invoke processing.</td>
</tr>
<tr>
    <td><CopyableCode code="processorVersionAliases" /></td>
    <td><code>array</code></td>
    <td>Output only. The processor version aliases.</td>
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
    <td>Output only. The state of the processor.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The processor type, such as: `OCR_PROCESSOR`, `INVOICE_PROCESSOR`. To get a list of processor types, see FetchProcessorTypes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_processors_list">

Response message for the ListProcessors method.

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
    <td><CopyableCode code="processors" /></td>
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
    <td><a href="#projects_locations_processors_get"><CopyableCode code="projects_locations_processors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Gets a processor detail.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_list"><CopyableCode code="projects_locations_processors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all processors which belong to this project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_create"><CopyableCode code="projects_locations_processors_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_delete"><CopyableCode code="projects_locations_processors_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_process"><CopyableCode code="projects_locations_processors_process" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Processes a single document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_batch_process"><CopyableCode code="projects_locations_processors_batch_process" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_enable"><CopyableCode code="projects_locations_processors_enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Enables a processor</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_disable"><CopyableCode code="projects_locations_processors_disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Disables a processor</td>
</tr>
<tr>
    <td><a href="#projects_locations_processors_set_default_processor_version"><CopyableCode code="projects_locations_processors_set_default_processor_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.</td>
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
    defaultValue="projects_locations_processors_get"
    values={[
        { label: 'projects_locations_processors_get', value: 'projects_locations_processors_get' },
        { label: 'projects_locations_processors_list', value: 'projects_locations_processors_list' }
    ]}
>
<TabItem value="projects_locations_processors_get">

Gets a processor detail.

```sql
SELECT
name,
createTime,
defaultProcessorVersion,
displayName,
kmsKeyName,
processEndpoint,
processorVersionAliases,
satisfiesPzi,
satisfiesPzs,
state,
type
FROM google.documentai.processors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorsId = '{{ processorsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_processors_list">

Lists all processors which belong to this project.

```sql
SELECT
nextPageToken,
processors
FROM google.documentai.processors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_processors_create"
    values={[
        { label: 'projects_locations_processors_create', value: 'projects_locations_processors_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_processors_create">

Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.

```sql
INSERT INTO google.documentai.processors (
data__type,
data__displayName,
data__defaultProcessorVersion,
data__kmsKeyName,
projectsId,
locationsId
)
SELECT 
'{{ type }}',
'{{ displayName }}',
'{{ defaultProcessorVersion }}',
'{{ kmsKeyName }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
defaultProcessorVersion,
displayName,
kmsKeyName,
processEndpoint,
processorVersionAliases,
satisfiesPzi,
satisfiesPzs,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: processors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the processors resource.
    - name: locationsId
      value: string
      description: Required parameter for the processors resource.
    - name: type
      value: string
      description: >
        The processor type, such as: `OCR_PROCESSOR`, `INVOICE_PROCESSOR`. To get a list of processor types, see FetchProcessorTypes.
        
    - name: displayName
      value: string
      description: >
        The display name of the processor.
        
    - name: defaultProcessorVersion
      value: string
      description: >
        The default processor version.
        
    - name: kmsKeyName
      value: string
      description: >
        The [KMS key](https://cloud.google.com/security-key-management) used for encryption and decryption in CMEK scenarios.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_processors_delete"
    values={[
        { label: 'projects_locations_processors_delete', value: 'projects_locations_processors_delete' }
    ]}
>
<TabItem value="projects_locations_processors_delete">

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

```sql
DELETE FROM google.documentai.processors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND processorsId = '{{ processorsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_processors_process"
    values={[
        { label: 'projects_locations_processors_process', value: 'projects_locations_processors_process' },
        { label: 'projects_locations_processors_batch_process', value: 'projects_locations_processors_batch_process' },
        { label: 'projects_locations_processors_enable', value: 'projects_locations_processors_enable' },
        { label: 'projects_locations_processors_disable', value: 'projects_locations_processors_disable' },
        { label: 'projects_locations_processors_set_default_processor_version', value: 'projects_locations_processors_set_default_processor_version' }
    ]}
>
<TabItem value="projects_locations_processors_process">

Processes a single document.

```sql
EXEC google.documentai.processors.projects_locations_processors_process 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required 
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
<TabItem value="projects_locations_processors_batch_process">

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

```sql
EXEC google.documentai.processors.projects_locations_processors_batch_process 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required 
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
<TabItem value="projects_locations_processors_enable">

Enables a processor

```sql
EXEC google.documentai.processors.projects_locations_processors_enable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_processors_disable">

Disables a processor

```sql
EXEC google.documentai.processors.projects_locations_processors_disable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_processors_set_default_processor_version">

Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

```sql
EXEC google.documentai.processors.projects_locations_processors_set_default_processor_version 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required 
@@json=
'{
"defaultProcessorVersion": "{{ defaultProcessorVersion }}"
}';
```
</TabItem>
</Tabs>
