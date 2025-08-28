--- 
title: apps_script_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_script_projects
  - integrations
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

Creates, updates, deletes, gets or lists an <code>apps_script_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps_script_projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.apps_script_projects" /></td></tr>
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
    <td><a href="#projects_locations_apps_script_projects_create"><CopyableCode code="projects_locations_apps_script_projects_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an Apps Script project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apps_script_projects_link"><CopyableCode code="projects_locations_apps_script_projects_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Links a existing Apps Script project.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_apps_script_projects_create"
    values={[
        { label: 'projects_locations_apps_script_projects_create', value: 'projects_locations_apps_script_projects_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_apps_script_projects_create">

Creates an Apps Script project.

```sql
INSERT INTO google.integrations.apps_script_projects (
data__appsScriptProject,
data__authConfigId,
projectsId,
locationsId
)
SELECT 
'{{ appsScriptProject }}',
'{{ authConfigId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
projectId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apps_script_projects
  props:
    - name: projectsId
      value: string
      description: Required parameter for the apps_script_projects resource.
    - name: locationsId
      value: string
      description: Required parameter for the apps_script_projects resource.
    - name: appsScriptProject
      value: string
      description: >
        The name of the Apps Script project to be created.
        
    - name: authConfigId
      value: string
      description: >
        The auth config id necessary to fetch the necessary credentials to create the project for external clients
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_apps_script_projects_link"
    values={[
        { label: 'projects_locations_apps_script_projects_link', value: 'projects_locations_apps_script_projects_link' }
    ]}
>
<TabItem value="projects_locations_apps_script_projects_link">

Links a existing Apps Script project.

```sql
EXEC google.integrations.apps_script_projects.projects_locations_apps_script_projects_link 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"scriptId": "{{ scriptId }}"
}';
```
</TabItem>
</Tabs>
