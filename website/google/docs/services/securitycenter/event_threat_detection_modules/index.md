--- 
title: event_threat_detection_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_threat_detection_modules
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

Creates, updates, deletes, gets or lists an <code>event_threat_detection_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>event_threat_detection_modules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.event_threat_detection_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_event_threat_detection_settings_custom_modules_list"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_list', value: 'folders_event_threat_detection_settings_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_custom_modules_list', value: 'projects_event_threat_detection_settings_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_list', value: 'organizations_event_threat_detection_settings_custom_modules_list' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_list">

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
    <td>Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. The closest ancestor module that this module inherits the enablement state from. The format is the same as the EventThreatDetectionCustomModule resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor the module was last updated by.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the module was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_list">

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
    <td>Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. The closest ancestor module that this module inherits the enablement state from. The format is the same as the EventThreatDetectionCustomModule resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor the module was last updated by.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the module was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_list">

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
    <td>Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/customModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. The closest ancestor module that this module inherits the enablement state from. The format is the same as the EventThreatDetectionCustomModule resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor the module was last updated by.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the module was last updated.</td>
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
    <td><a href="#folders_event_threat_detection_settings_custom_modules_list"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_list"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_list"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_create"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_create"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_create"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_delete"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_delete"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_delete"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.</td>
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
<tr id="parameter-customModulesId">
    <td><CopyableCode code="customModulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
    defaultValue="folders_event_threat_detection_settings_custom_modules_list"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_list', value: 'folders_event_threat_detection_settings_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_custom_modules_list', value: 'projects_event_threat_detection_settings_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_list', value: 'organizations_event_threat_detection_settings_custom_modules_list' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_list">

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.event_threat_detection_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_list">

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.event_threat_detection_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_list">

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.event_threat_detection_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="folders_event_threat_detection_settings_custom_modules_create"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_create', value: 'folders_event_threat_detection_settings_custom_modules_create' },
        { label: 'projects_event_threat_detection_settings_custom_modules_create', value: 'projects_event_threat_detection_settings_custom_modules_create' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_create', value: 'organizations_event_threat_detection_settings_custom_modules_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_create">

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.event_threat_detection_modules (
data__name,
data__config,
data__enablementState,
data__type,
data__displayName,
data__description,
data__cloudProvider,
foldersId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ enablementState }}',
'{{ type }}',
'{{ displayName }}',
'{{ description }}',
'{{ cloudProvider }}',
'{{ foldersId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_create">

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.event_threat_detection_modules (
data__name,
data__config,
data__enablementState,
data__type,
data__displayName,
data__description,
data__cloudProvider,
projectsId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ enablementState }}',
'{{ type }}',
'{{ displayName }}',
'{{ description }}',
'{{ cloudProvider }}',
'{{ projectsId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_create">

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.event_threat_detection_modules (
data__name,
data__config,
data__enablementState,
data__type,
data__displayName,
data__description,
data__cloudProvider,
organizationsId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ enablementState }}',
'{{ type }}',
'{{ displayName }}',
'{{ description }}',
'{{ cloudProvider }}',
'{{ organizationsId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: event_threat_detection_modules
  props:
    - name: foldersId
      value: string
      description: Required parameter for the event_threat_detection_modules resource.
    - name: projectsId
      value: string
      description: Required parameter for the event_threat_detection_modules resource.
    - name: organizationsId
      value: string
      description: Required parameter for the event_threat_detection_modules resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
        
    - name: config
      value: object
      description: >
        Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module.
        
    - name: enablementState
      value: string
      description: >
        The state of enablement for the module at the given level of the hierarchy.
        
      valid_values: ['ENABLEMENT_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED', 'INHERITED']
    - name: type
      value: string
      description: >
        Type for the module. e.g. CONFIGURABLE_BAD_IP.
        
    - name: displayName
      value: string
      description: >
        The human readable name to be displayed for the module.
        
    - name: description
      value: string
      description: >
        The description for the module.
        
    - name: cloudProvider
      value: string
      description: >
        The cloud provider of the custom module.
        
      valid_values: ['CLOUD_PROVIDER_UNSPECIFIED', 'GOOGLE_CLOUD_PLATFORM', 'AMAZON_WEB_SERVICES', 'MICROSOFT_AZURE']
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="folders_event_threat_detection_settings_custom_modules_delete"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_delete', value: 'folders_event_threat_detection_settings_custom_modules_delete' },
        { label: 'projects_event_threat_detection_settings_custom_modules_delete', value: 'projects_event_threat_detection_settings_custom_modules_delete' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_delete', value: 'organizations_event_threat_detection_settings_custom_modules_delete' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_delete">

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.event_threat_detection_modules
WHERE foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_delete">

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.event_threat_detection_modules
WHERE projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_delete">

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.event_threat_detection_modules
WHERE organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
</Tabs>
