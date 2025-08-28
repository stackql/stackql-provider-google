--- 
title: custom_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_modules
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

Creates, updates, deletes, gets or lists a <code>custom_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>custom_modules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.custom_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_event_threat_detection_settings_custom_modules_get"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_get', value: 'folders_event_threat_detection_settings_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_custom_modules_get', value: 'projects_event_threat_detection_settings_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_get', value: 'organizations_event_threat_detection_settings_custom_modules_get' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_get">

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
<TabItem value="projects_event_threat_detection_settings_custom_modules_get">

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
<TabItem value="organizations_event_threat_detection_settings_custom_modules_get">

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
    <td><a href="#folders_event_threat_detection_settings_custom_modules_get"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Gets an Event Threat Detection custom module.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_get"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Gets an Event Threat Detection custom module.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_get"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Gets an Event Threat Detection custom module.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Simulates a given SecurityHealthAnalyticsCustomModule and Resource.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Simulates a given SecurityHealthAnalyticsCustomModule and Resource.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Simulates a given SecurityHealthAnalyticsCustomModule and Resource.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="folders_event_threat_detection_settings_custom_modules_get"
    values={[
        { label: 'folders_event_threat_detection_settings_custom_modules_get', value: 'folders_event_threat_detection_settings_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_custom_modules_get', value: 'projects_event_threat_detection_settings_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_get', value: 'organizations_event_threat_detection_settings_custom_modules_get' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_custom_modules_get">

Gets an Event Threat Detection custom module.

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
FROM google.securitycenter.custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_get">

Gets an Event Threat Detection custom module.

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
FROM google.securitycenter.custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_get">

Gets an Event Threat Detection custom module.

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
FROM google.securitycenter.custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_security_health_analytics_settings_custom_modules_patch"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_patch', value: 'folders_security_health_analytics_settings_custom_modules_patch' },
        { label: 'folders_event_threat_detection_settings_custom_modules_patch', value: 'folders_event_threat_detection_settings_custom_modules_patch' },
        { label: 'projects_security_health_analytics_settings_custom_modules_patch', value: 'projects_security_health_analytics_settings_custom_modules_patch' },
        { label: 'projects_event_threat_detection_settings_custom_modules_patch', value: 'projects_event_threat_detection_settings_custom_modules_patch' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_patch', value: 'organizations_security_health_analytics_settings_custom_modules_patch' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_patch', value: 'organizations_event_threat_detection_settings_custom_modules_patch' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_patch">

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_patch">

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__enablementState = '{{ enablementState }}',
data__type = '{{ type }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
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
updateTime;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_patch">

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_patch">

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__enablementState = '{{ enablementState }}',
data__type = '{{ type }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
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
updateTime;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_patch">

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_patch">

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__enablementState = '{{ enablementState }}',
data__type = '{{ type }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
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
updateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="folders_security_health_analytics_settings_custom_modules_simulate"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_simulate', value: 'folders_security_health_analytics_settings_custom_modules_simulate' },
        { label: 'projects_security_health_analytics_settings_custom_modules_simulate', value: 'projects_security_health_analytics_settings_custom_modules_simulate' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_simulate', value: 'organizations_security_health_analytics_settings_custom_modules_simulate' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_simulate">

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

```sql
EXEC google.securitycenter.custom_modules.folders_security_health_analytics_settings_custom_modules_simulate 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}';
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_simulate">

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

```sql
EXEC google.securitycenter.custom_modules.projects_security_health_analytics_settings_custom_modules_simulate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}';
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_simulate">

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

```sql
EXEC google.securitycenter.custom_modules.organizations_security_health_analytics_settings_custom_modules_simulate 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}';
```
</TabItem>
</Tabs>
