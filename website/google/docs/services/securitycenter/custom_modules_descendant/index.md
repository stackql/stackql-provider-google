--- 
title: custom_modules_descendant
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_modules_descendant
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

Creates, updates, deletes, gets or lists a <code>custom_modules_descendant</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>custom_modules_descendant</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.custom_modules_descendant" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_security_health_analytics_settings_custom_modules_list_descendant"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_list_descendant', value: 'folders_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'folders_event_threat_detection_settings_custom_modules_list_descendant', value: 'folders_event_threat_detection_settings_custom_modules_list_descendant' },
        { label: 'projects_security_health_analytics_settings_custom_modules_list_descendant', value: 'projects_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'projects_event_threat_detection_settings_custom_modules_list_descendant', value: 'projects_event_threat_detection_settings_custom_modules_list_descendant' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_list_descendant', value: 'organizations_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_list_descendant', value: 'organizations_event_threat_detection_settings_custom_modules_list_descendant' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_list_descendant">

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
    <td>Immutable. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;" The id &#123;customModule&#125; is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>The user specified custom configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The enablement state of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor that last updated the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the custom module was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_list_descendant">

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
<TabItem value="projects_security_health_analytics_settings_custom_modules_list_descendant">

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
    <td>Immutable. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;" The id &#123;customModule&#125; is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>The user specified custom configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The enablement state of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor that last updated the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the custom module was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_list_descendant">

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
<TabItem value="organizations_security_health_analytics_settings_custom_modules_list_descendant">

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
    <td>Immutable. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/customModules/&#123;customModule&#125;" The id &#123;customModule&#125; is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td>Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>The user specified custom configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>The enablement state of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. The editor that last updated the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the custom module was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_list_descendant">

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
    <td><a href="#folders_security_health_analytics_settings_custom_modules_list_descendant"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_list_descendant"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_list_descendant"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_list_descendant"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_list_descendant"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_list_descendant"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_list_descendant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.</td>
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
    defaultValue="folders_security_health_analytics_settings_custom_modules_list_descendant"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_list_descendant', value: 'folders_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'folders_event_threat_detection_settings_custom_modules_list_descendant', value: 'folders_event_threat_detection_settings_custom_modules_list_descendant' },
        { label: 'projects_security_health_analytics_settings_custom_modules_list_descendant', value: 'projects_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'projects_event_threat_detection_settings_custom_modules_list_descendant', value: 'projects_event_threat_detection_settings_custom_modules_list_descendant' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_list_descendant', value: 'organizations_security_health_analytics_settings_custom_modules_list_descendant' },
        { label: 'organizations_event_threat_detection_settings_custom_modules_list_descendant', value: 'organizations_event_threat_detection_settings_custom_modules_list_descendant' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_list_descendant">

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
FROM google.securitycenter.custom_modules_descendant
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_list_descendant">

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

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
FROM google.securitycenter.custom_modules_descendant
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_list_descendant">

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
FROM google.securitycenter.custom_modules_descendant
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_list_descendant">

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

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
FROM google.securitycenter.custom_modules_descendant
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_list_descendant">

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

```sql
SELECT
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
FROM google.securitycenter.custom_modules_descendant
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_list_descendant">

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

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
FROM google.securitycenter.custom_modules_descendant
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
