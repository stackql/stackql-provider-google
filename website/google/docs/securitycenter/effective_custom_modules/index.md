--- 
title: effective_custom_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_custom_modules
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

Creates, updates, deletes, gets or lists an <code>effective_custom_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>effective_custom_modules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.effective_custom_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_security_health_analytics_settings_effective_custom_modules_get"
    values={[
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_get', value: 'folders_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_get', value: 'folders_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_get', value: 'projects_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_get', value: 'projects_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_get', value: 'organizations_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_get', value: 'organizations_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_list', value: 'folders_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_list', value: 'folders_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_list', value: 'projects_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_list', value: 'projects_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_list', value: 'organizations_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_list', value: 'organizations_event_threat_detection_settings_effective_custom_modules_list' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_get">

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.

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
    <td>Output only. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The user-specified configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_get">

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablement_state` property in EffectiveEventThreatDetectionCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective `enablement_state` for the module in all child folders or projects is also `enabled`. EffectiveEventThreatDetectionCustomModule is read-only.

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
    <td>Output only. The resource name of the effective ETD custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Output only. Config for the effective module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_get">

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.

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
    <td>Output only. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The user-specified configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_get">

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablement_state` property in EffectiveEventThreatDetectionCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective `enablement_state` for the module in all child folders or projects is also `enabled`. EffectiveEventThreatDetectionCustomModule is read-only.

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
    <td>Output only. The resource name of the effective ETD custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Output only. Config for the effective module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_get">

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.

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
    <td>Output only. The resource name of the custom module. Its format is "organizations/&#123;organization&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "folders/&#123;folder&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;", or "projects/&#123;project&#125;/securityHealthAnalyticsSettings/effectiveCustomModules/&#123;customModule&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The user-specified configuration for the module. (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_get">

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablement_state` property in EffectiveEventThreatDetectionCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective `enablement_state` for the module in all child folders or projects is also `enabled`. EffectiveEventThreatDetectionCustomModule is read-only.

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
    <td>Output only. The resource name of the effective ETD custom module. Its format is: * `organizations/&#123;organization&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `folders/&#123;folder&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`. * `projects/&#123;project&#125;/eventThreatDetectionSettings/effectiveCustomModules/&#123;module&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the custom module.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Output only. Config for the effective module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The human readable name to be displayed for the module.</td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective state of enablement for the module at the given level of the hierarchy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Type for the module. e.g. CONFIGURABLE_BAD_IP.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_list">

Response message for listing effective Security Health Analytics custom modules.

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
    <td><CopyableCode code="effectiveSecurityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more effective custom modules to be returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_list">

Response for listing EffectiveEventThreatDetectionCustomModules.

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
    <td><CopyableCode code="effectiveEventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_list">

Response message for listing effective Security Health Analytics custom modules.

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
    <td><CopyableCode code="effectiveSecurityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more effective custom modules to be returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_list">

Response for listing EffectiveEventThreatDetectionCustomModules.

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
    <td><CopyableCode code="effectiveEventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_list">

Response message for listing effective Security Health Analytics custom modules.

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
    <td><CopyableCode code="effectiveSecurityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more effective custom modules to be returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_list">

Response for listing EffectiveEventThreatDetectionCustomModules.

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
    <td><CopyableCode code="effectiveEventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Effective custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#folders_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="folders_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="folders_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Gets an effective Event Threat Detection custom module at the given level.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="projects_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="projects_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Gets an effective Event Threat Detection custom module at the given level.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="organizations_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="organizations_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td>Gets an effective Event Threat Detection custom module at the given level.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="folders_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="folders_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="projects_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="projects_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="organizations_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="organizations_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.</td>
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
<tr id="parameter-effectiveCustomModulesId">
    <td><CopyableCode code="effectiveCustomModulesId" /></td>
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
    defaultValue="folders_security_health_analytics_settings_effective_custom_modules_get"
    values={[
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_get', value: 'folders_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_get', value: 'folders_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_get', value: 'projects_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_get', value: 'projects_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_get', value: 'organizations_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_get', value: 'organizations_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_list', value: 'folders_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_list', value: 'folders_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_list', value: 'projects_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_list', value: 'projects_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_list', value: 'organizations_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_list', value: 'organizations_event_threat_detection_settings_effective_custom_modules_list' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_get">

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_get">

Gets an effective Event Threat Detection custom module at the given level.

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_get">

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_get">

Gets an effective Event Threat Detection custom module at the given level.

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_get">

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_get">

Gets an effective Event Threat Detection custom module at the given level.

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_list">

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

```sql
SELECT
effectiveSecurityHealthAnalyticsCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_list">

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

```sql
SELECT
effectiveEventThreatDetectionCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_list">

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

```sql
SELECT
effectiveSecurityHealthAnalyticsCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_list">

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

```sql
SELECT
effectiveEventThreatDetectionCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_list">

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

```sql
SELECT
effectiveSecurityHealthAnalyticsCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_list">

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

```sql
SELECT
effectiveEventThreatDetectionCustomModules,
nextPageToken
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
