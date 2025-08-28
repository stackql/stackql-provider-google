--- 
title: instructions
hide_title: false
hide_table_of_contents: false
keywords:
  - instructions
  - datalabeling
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

Creates, updates, deletes, gets or lists an <code>instructions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instructions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.instructions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instructions_get"
    values={[
        { label: 'projects_instructions_get', value: 'projects_instructions_get' },
        { label: 'projects_instructions_list', value: 'projects_instructions_list' }
    ]}
>
<TabItem value="projects_instructions_get">

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
    <td>Output only. Instruction resource name, format: projects/&#123;project_id&#125;/instructions/&#123;instruction_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="csvInstruction" /></td>
    <td><code>object</code></td>
    <td>Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data. (id: GoogleCloudDatalabelingV1beta1CsvInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="dataType" /></td>
    <td><code>string</code></td>
    <td>Required. The data type of this instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the instruction. The description can be up to 10000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the instruction. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="pdfInstruction" /></td>
    <td><code>object</code></td>
    <td>Instruction from a PDF document. The PDF should be in a Cloud Storage bucket. (id: GoogleCloudDatalabelingV1beta1PdfInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of instruction.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instructions_list">

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
    <td>Output only. Instruction resource name, format: projects/&#123;project_id&#125;/instructions/&#123;instruction_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="csvInstruction" /></td>
    <td><code>object</code></td>
    <td>Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data. (id: GoogleCloudDatalabelingV1beta1CsvInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="dataType" /></td>
    <td><code>string</code></td>
    <td>Required. The data type of this instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the instruction. The description can be up to 10000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the instruction. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="pdfInstruction" /></td>
    <td><code>object</code></td>
    <td>Instruction from a PDF document. The PDF should be in a Cloud Storage bucket. (id: GoogleCloudDatalabelingV1beta1PdfInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of instruction.</td>
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
    <td><a href="#projects_instructions_get"><CopyableCode code="projects_instructions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instructionsId"><code>instructionsId</code></a></td>
    <td></td>
    <td>Gets an instruction by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_instructions_list"><CopyableCode code="projects_instructions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists instructions for a project. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_instructions_create"><CopyableCode code="projects_instructions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an instruction for how data should be labeled.</td>
</tr>
<tr>
    <td><a href="#projects_instructions_delete"><CopyableCode code="projects_instructions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instructionsId"><code>instructionsId</code></a></td>
    <td></td>
    <td>Deletes an instruction object by resource name.</td>
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
<tr id="parameter-instructionsId">
    <td><CopyableCode code="instructionsId" /></td>
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
    defaultValue="projects_instructions_get"
    values={[
        { label: 'projects_instructions_get', value: 'projects_instructions_get' },
        { label: 'projects_instructions_list', value: 'projects_instructions_list' }
    ]}
>
<TabItem value="projects_instructions_get">

Gets an instruction by resource name.

```sql
SELECT
name,
blockingResources,
createTime,
csvInstruction,
dataType,
description,
displayName,
pdfInstruction,
updateTime
FROM google.datalabeling.instructions
WHERE projectsId = '{{ projectsId }}' -- required
AND instructionsId = '{{ instructionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_instructions_list">

Lists instructions for a project. Pagination is supported.

```sql
SELECT
name,
blockingResources,
createTime,
csvInstruction,
dataType,
description,
displayName,
pdfInstruction,
updateTime
FROM google.datalabeling.instructions
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instructions_create"
    values={[
        { label: 'projects_instructions_create', value: 'projects_instructions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instructions_create">

Creates an instruction for how data should be labeled.

```sql
INSERT INTO google.datalabeling.instructions (
data__instruction,
projectsId
)
SELECT 
'{{ instruction }}',
'{{ projectsId }}'
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
- name: instructions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instructions resource.
    - name: instruction
      value: object
      description: >
        Required. Instruction of how to perform the labeling task.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_instructions_delete"
    values={[
        { label: 'projects_instructions_delete', value: 'projects_instructions_delete' }
    ]}
>
<TabItem value="projects_instructions_delete">

Deletes an instruction object by resource name.

```sql
DELETE FROM google.datalabeling.instructions
WHERE projectsId = '{{ projectsId }}' --required
AND instructionsId = '{{ instructionsId }}' --required;
```
</TabItem>
</Tabs>
