--- 
title: project_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - project_settings
  - artifactregistry
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

Creates, updates, deletes, gets or lists a <code>project_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>project_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.artifactregistry.project_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_settings"
    values={[
        { label: 'get_project_settings', value: 'get_project_settings' }
    ]}
>
<TabItem value="get_project_settings">

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
    <td>The name of the project's settings. Always of the form: projects/&#123;project-id&#125;/projectSettings In update request: never set In response: always set</td>
</tr>
<tr>
    <td><CopyableCode code="legacyRedirectionState" /></td>
    <td><code>string</code></td>
    <td>The redirection state of the legacy repositories in this project.</td>
</tr>
<tr>
    <td><CopyableCode code="pullPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage of pull traffic to redirect from GCR to AR when using partial redirection.</td>
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
    <td><a href="#get_project_settings"><CopyableCode code="get_project_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Retrieves the Settings for the Project.</td>
</tr>
<tr>
    <td><a href="#update_project_settings"><CopyableCode code="update_project_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Settings for the Project.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="get_project_settings"
    values={[
        { label: 'get_project_settings', value: 'get_project_settings' }
    ]}
>
<TabItem value="get_project_settings">

Retrieves the Settings for the Project.

```sql
SELECT
name,
legacyRedirectionState,
pullPercent
FROM google.artifactregistry.project_settings
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project_settings"
    values={[
        { label: 'update_project_settings', value: 'update_project_settings' }
    ]}
>
<TabItem value="update_project_settings">

Updates the Settings for the Project.

```sql
UPDATE google.artifactregistry.project_settings
SET 
data__name = '{{ name }}',
data__legacyRedirectionState = '{{ legacyRedirectionState }}',
data__pullPercent = {{ pullPercent }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
legacyRedirectionState,
pullPercent;
```
</TabItem>
</Tabs>
