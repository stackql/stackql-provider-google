--- 
title: annotation_spec_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_spec_sets
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

Creates, updates, deletes, gets or lists an <code>annotation_spec_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>annotation_spec_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.annotation_spec_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_annotation_spec_sets_get"
    values={[
        { label: 'projects_annotation_spec_sets_get', value: 'projects_annotation_spec_sets_get' },
        { label: 'projects_annotation_spec_sets_list', value: 'projects_annotation_spec_sets_list' }
    ]}
>
<TabItem value="projects_annotation_spec_sets_get">

An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.

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
    <td>Output only. The AnnotationSpecSet resource name in the following format: "projects/&#123;project_id&#125;/annotationSpecSets/&#123;annotation_spec_set_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSpecs" /></td>
    <td><code>array</code></td>
    <td>Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the annotation spec set.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_annotation_spec_sets_list">

Results of listing annotation spec set under a project.

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
    <td><CopyableCode code="annotationSpecSets" /></td>
    <td><code>array</code></td>
    <td>The list of annotation spec sets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results.</td>
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
    <td><a href="#projects_annotation_spec_sets_get"><CopyableCode code="projects_annotation_spec_sets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-annotationSpecSetsId"><code>annotationSpecSetsId</code></a></td>
    <td></td>
    <td>Gets an annotation spec set by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_annotation_spec_sets_list"><CopyableCode code="projects_annotation_spec_sets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists annotation spec sets for a project. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_annotation_spec_sets_create"><CopyableCode code="projects_annotation_spec_sets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an annotation spec set by providing a set of labels.</td>
</tr>
<tr>
    <td><a href="#projects_annotation_spec_sets_delete"><CopyableCode code="projects_annotation_spec_sets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-annotationSpecSetsId"><code>annotationSpecSetsId</code></a></td>
    <td></td>
    <td>Deletes an annotation spec set by resource name.</td>
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
<tr id="parameter-annotationSpecSetsId">
    <td><CopyableCode code="annotationSpecSetsId" /></td>
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
    defaultValue="projects_annotation_spec_sets_get"
    values={[
        { label: 'projects_annotation_spec_sets_get', value: 'projects_annotation_spec_sets_get' },
        { label: 'projects_annotation_spec_sets_list', value: 'projects_annotation_spec_sets_list' }
    ]}
>
<TabItem value="projects_annotation_spec_sets_get">

Gets an annotation spec set by resource name.

```sql
SELECT
name,
annotationSpecs,
blockingResources,
description,
displayName
FROM google.datalabeling.annotation_spec_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND annotationSpecSetsId = '{{ annotationSpecSetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_annotation_spec_sets_list">

Lists annotation spec sets for a project. Pagination is supported.

```sql
SELECT
annotationSpecSets,
nextPageToken
FROM google.datalabeling.annotation_spec_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_annotation_spec_sets_create"
    values={[
        { label: 'projects_annotation_spec_sets_create', value: 'projects_annotation_spec_sets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_annotation_spec_sets_create">

Creates an annotation spec set by providing a set of labels.

```sql
INSERT INTO google.datalabeling.annotation_spec_sets (
data__annotationSpecSet,
projectsId
)
SELECT 
'{{ annotationSpecSet }}',
'{{ projectsId }}'
RETURNING
name,
annotationSpecs,
blockingResources,
description,
displayName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: annotation_spec_sets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the annotation_spec_sets resource.
    - name: annotationSpecSet
      value: object
      description: >
        Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_annotation_spec_sets_delete"
    values={[
        { label: 'projects_annotation_spec_sets_delete', value: 'projects_annotation_spec_sets_delete' }
    ]}
>
<TabItem value="projects_annotation_spec_sets_delete">

Deletes an annotation spec set by resource name.

```sql
DELETE FROM google.datalabeling.annotation_spec_sets
WHERE projectsId = '{{ projectsId }}' --required
AND annotationSpecSetsId = '{{ annotationSpecSetsId }}' --required;
```
</TabItem>
</Tabs>
