--- 
title: event_threat_detection_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - event_threat_detection_settings
  - securitycenter
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

Creates, updates, deletes, gets or lists an <code>event_threat_detection_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>event_threat_detection_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.event_threat_detection_settings" /></td></tr>
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
    <td><a href="#folders_event_threat_detection_settings_validate_custom_module"><CopyableCode code="folders_event_threat_detection_settings_validate_custom_module" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Validates the given Event Threat Detection custom module.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_validate_custom_module"><CopyableCode code="projects_event_threat_detection_settings_validate_custom_module" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Validates the given Event Threat Detection custom module.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_validate_custom_module"><CopyableCode code="organizations_event_threat_detection_settings_validate_custom_module" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Validates the given Event Threat Detection custom module.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
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
    defaultValue="folders_event_threat_detection_settings_validate_custom_module"
    values={[
        { label: 'folders_event_threat_detection_settings_validate_custom_module', value: 'folders_event_threat_detection_settings_validate_custom_module' },
        { label: 'projects_event_threat_detection_settings_validate_custom_module', value: 'projects_event_threat_detection_settings_validate_custom_module' },
        { label: 'organizations_event_threat_detection_settings_validate_custom_module', value: 'organizations_event_threat_detection_settings_validate_custom_module' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_validate_custom_module">

Validates the given Event Threat Detection custom module.

```sql
EXEC google.securitycenter.event_threat_detection_settings.folders_event_threat_detection_settings_validate_custom_module 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"rawText": "{{ rawText }}", 
"type": "{{ type }}"
}';
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_validate_custom_module">

Validates the given Event Threat Detection custom module.

```sql
EXEC google.securitycenter.event_threat_detection_settings.projects_event_threat_detection_settings_validate_custom_module 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"rawText": "{{ rawText }}", 
"type": "{{ type }}"
}';
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_validate_custom_module">

Validates the given Event Threat Detection custom module.

```sql
EXEC google.securitycenter.event_threat_detection_settings.organizations_event_threat_detection_settings_validate_custom_module 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"rawText": "{{ rawText }}", 
"type": "{{ type }}"
}';
```
</TabItem>
</Tabs>
