--- 
title: studies
hide_title: false
hide_table_of_contents: false
keywords:
  - studies
  - ml
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

Creates, updates, deletes, gets or lists a <code>studies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>studies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.studies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_studies_get"
    values={[
        { label: 'projects_locations_studies_get', value: 'projects_locations_studies_get' },
        { label: 'projects_locations_studies_list', value: 'projects_locations_studies_list' }
    ]}
>
<TabItem value="projects_locations_studies_get">

A message representing a Study.

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
    <td>Output only. The name of a study.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the study was created.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveReason" /></td>
    <td><code>string</code></td>
    <td>Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of a study.</td>
</tr>
<tr>
    <td><CopyableCode code="studyConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration of the study. (id: GoogleCloudMlV1__StudyConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_studies_list">

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
    <td><CopyableCode code="studies" /></td>
    <td><code>array</code></td>
    <td>The studies associated with the project.</td>
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
    <td><a href="#projects_locations_studies_get"><CopyableCode code="projects_locations_studies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Gets a study.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_list"><CopyableCode code="projects_locations_studies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Lists all the studies in a region for an associated project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_create"><CopyableCode code="projects_locations_studies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-studyId"><code>studyId</code></a></td>
    <td>Creates a study.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_delete"><CopyableCode code="projects_locations_studies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Deletes a study.</td>
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
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-studyId">
    <td><CopyableCode code="studyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_studies_get"
    values={[
        { label: 'projects_locations_studies_get', value: 'projects_locations_studies_get' },
        { label: 'projects_locations_studies_list', value: 'projects_locations_studies_list' }
    ]}
>
<TabItem value="projects_locations_studies_get">

Gets a study.

```sql
SELECT
name,
createTime,
inactiveReason,
state,
studyConfig
FROM google.ml.studies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND studiesId = '{{ studiesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_studies_list">

Lists all the studies in a region for an associated project.

```sql
SELECT
studies
FROM google.ml.studies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_studies_create"
    values={[
        { label: 'projects_locations_studies_create', value: 'projects_locations_studies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_studies_create">

Creates a study.

```sql
INSERT INTO google.ml.studies (
data__studyConfig,
projectsId,
locationsId,
studyId
)
SELECT 
'{{ studyConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ studyId }}'
RETURNING
name,
createTime,
inactiveReason,
state,
studyConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: studies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the studies resource.
    - name: locationsId
      value: string
      description: Required parameter for the studies resource.
    - name: studyConfig
      value: object
      description: >
        Required. Configuration of the study.
        
    - name: studyId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_studies_delete"
    values={[
        { label: 'projects_locations_studies_delete', value: 'projects_locations_studies_delete' }
    ]}
>
<TabItem value="projects_locations_studies_delete">

Deletes a study.

```sql
DELETE FROM google.ml.studies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND studiesId = '{{ studiesId }}' --required;
```
</TabItem>
</Tabs>
