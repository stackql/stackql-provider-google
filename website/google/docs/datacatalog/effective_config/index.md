--- 
title: effective_config
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_config
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

Creates, updates, deletes, gets or lists an <code>effective_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>effective_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.effective_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_retrieve_effective_config"
    values={[
        { label: 'projects_locations_retrieve_effective_config', value: 'projects_locations_retrieve_effective_config' },
        { label: 'organizations_locations_retrieve_effective_config', value: 'organizations_locations_retrieve_effective_config' }
    ]}
>
<TabItem value="projects_locations_retrieve_effective_config">

The configuration related to the migration to Dataplex Universal Catalog applied to an organization or project. It is the response message for SetConfig and RetrieveEffectiveConfig.

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
    <td><CopyableCode code="catalogUiExperience" /></td>
    <td><code>string</code></td>
    <td>Opt-in status for the UI switch to Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="tagTemplateMigration" /></td>
    <td><code>string</code></td>
    <td>Opt-in status for the migration of Tag Templates to Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="templateMigrationEnabledTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the Tag Template migration was enabled. If the Tag Template migration is not enabled, this field is not set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_retrieve_effective_config">

The configuration related to the migration to Dataplex Universal Catalog applied to an organization or project. It is the response message for SetConfig and RetrieveEffectiveConfig.

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
    <td><CopyableCode code="catalogUiExperience" /></td>
    <td><code>string</code></td>
    <td>Opt-in status for the UI switch to Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="tagTemplateMigration" /></td>
    <td><code>string</code></td>
    <td>Opt-in status for the migration of Tag Templates to Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="templateMigrationEnabledTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the Tag Template migration was enabled. If the Tag Template migration is not enabled, this field is not set.</td>
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
    <td><a href="#projects_locations_retrieve_effective_config"><CopyableCode code="projects_locations_retrieve_effective_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_retrieve_effective_config"><CopyableCode code="organizations_locations_retrieve_effective_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_retrieve_effective_config"
    values={[
        { label: 'projects_locations_retrieve_effective_config', value: 'projects_locations_retrieve_effective_config' },
        { label: 'organizations_locations_retrieve_effective_config', value: 'organizations_locations_retrieve_effective_config' }
    ]}
>
<TabItem value="projects_locations_retrieve_effective_config">

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

```sql
SELECT
catalogUiExperience,
tagTemplateMigration,
templateMigrationEnabledTime
FROM google.datacatalog.effective_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_retrieve_effective_config">

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

```sql
SELECT
catalogUiExperience,
tagTemplateMigration,
templateMigrationEnabledTime
FROM google.datacatalog.effective_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>
