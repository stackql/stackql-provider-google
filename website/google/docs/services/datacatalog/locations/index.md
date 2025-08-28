--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - datacatalog
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.locations" /></td></tr>
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
    <td><a href="#projects_locations_set_config"><CopyableCode code="projects_locations_set_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_set_config"><CopyableCode code="organizations_locations_set_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_set_config"
    values={[
        { label: 'projects_locations_set_config', value: 'projects_locations_set_config' },
        { label: 'organizations_locations_set_config', value: 'organizations_locations_set_config' }
    ]}
>
<TabItem value="projects_locations_set_config">

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

```sql
EXEC google.datacatalog.locations.projects_locations_set_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"tagTemplateMigration": "{{ tagTemplateMigration }}", 
"catalogUiExperience": "{{ catalogUiExperience }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_set_config">

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

```sql
EXEC google.datacatalog.locations.organizations_locations_set_config 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"tagTemplateMigration": "{{ tagTemplateMigration }}", 
"catalogUiExperience": "{{ catalogUiExperience }}"
}';
```
</TabItem>
</Tabs>
