--- 
title: security_health_analytics_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - security_health_analytics_modules
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

Creates, updates, deletes, gets or lists a <code>security_health_analytics_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_health_analytics_modules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.security_health_analytics_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_security_health_analytics_settings_custom_modules_get"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_get', value: 'folders_security_health_analytics_settings_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_custom_modules_get', value: 'projects_security_health_analytics_settings_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_get', value: 'organizations_security_health_analytics_settings_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_custom_modules_list', value: 'folders_security_health_analytics_settings_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_custom_modules_list', value: 'projects_security_health_analytics_settings_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_list', value: 'organizations_security_health_analytics_settings_custom_modules_list' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_get">

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
<TabItem value="projects_security_health_analytics_settings_custom_modules_get">

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
<TabItem value="organizations_security_health_analytics_settings_custom_modules_get">

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
<TabItem value="folders_security_health_analytics_settings_custom_modules_list">

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
<TabItem value="projects_security_health_analytics_settings_custom_modules_list">

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
<TabItem value="organizations_security_health_analytics_settings_custom_modules_list">

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
    <td><a href="#folders_security_health_analytics_settings_custom_modules_get"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Retrieves a SecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_get"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Retrieves a SecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_get"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Retrieves a SecurityHealthAnalyticsCustomModule.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_list"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_list"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_list"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_create"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_create"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_create"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.</td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_delete"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.</td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_delete"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.</td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_delete"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td>Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.</td>
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
    defaultValue="folders_security_health_analytics_settings_custom_modules_get"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_get', value: 'folders_security_health_analytics_settings_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_custom_modules_get', value: 'projects_security_health_analytics_settings_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_get', value: 'organizations_security_health_analytics_settings_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_custom_modules_list', value: 'folders_security_health_analytics_settings_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_custom_modules_list', value: 'projects_security_health_analytics_settings_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_list', value: 'organizations_security_health_analytics_settings_custom_modules_list' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_get">

Retrieves a SecurityHealthAnalyticsCustomModule.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_get">

Retrieves a SecurityHealthAnalyticsCustomModule.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_get">

Retrieves a SecurityHealthAnalyticsCustomModule.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_custom_modules_list">

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_list">

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_list">

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

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
FROM google.securitycenter.security_health_analytics_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="folders_security_health_analytics_settings_custom_modules_create"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_create', value: 'folders_security_health_analytics_settings_custom_modules_create' },
        { label: 'projects_security_health_analytics_settings_custom_modules_create', value: 'projects_security_health_analytics_settings_custom_modules_create' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_create', value: 'organizations_security_health_analytics_settings_custom_modules_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_create">

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.security_health_analytics_modules (
data__name,
data__displayName,
data__enablementState,
data__customConfig,
data__cloudProvider,
foldersId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ enablementState }}',
'{{ customConfig }}',
'{{ cloudProvider }}',
'{{ foldersId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_create">

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.security_health_analytics_modules (
data__name,
data__displayName,
data__enablementState,
data__customConfig,
data__cloudProvider,
projectsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ enablementState }}',
'{{ customConfig }}',
'{{ cloudProvider }}',
'{{ projectsId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_create">

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

```sql
INSERT INTO google.securitycenter.security_health_analytics_modules (
data__name,
data__displayName,
data__enablementState,
data__customConfig,
data__cloudProvider,
organizationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ enablementState }}',
'{{ customConfig }}',
'{{ cloudProvider }}',
'{{ organizationsId }}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_health_analytics_modules
  props:
    - name: foldersId
      value: string
      description: Required parameter for the security_health_analytics_modules resource.
    - name: projectsId
      value: string
      description: Required parameter for the security_health_analytics_modules resource.
    - name: organizationsId
      value: string
      description: Required parameter for the security_health_analytics_modules resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
        
    - name: displayName
      value: string
      description: >
        The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.
        
    - name: enablementState
      value: string
      description: >
        The enablement state of the custom module.
        
      valid_values: ['ENABLEMENT_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED', 'INHERITED']
    - name: customConfig
      value: object
      description: >
        The user specified custom configuration for the module.
        
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
    defaultValue="folders_security_health_analytics_settings_custom_modules_delete"
    values={[
        { label: 'folders_security_health_analytics_settings_custom_modules_delete', value: 'folders_security_health_analytics_settings_custom_modules_delete' },
        { label: 'projects_security_health_analytics_settings_custom_modules_delete', value: 'projects_security_health_analytics_settings_custom_modules_delete' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_delete', value: 'organizations_security_health_analytics_settings_custom_modules_delete' }
    ]}
>
<TabItem value="folders_security_health_analytics_settings_custom_modules_delete">

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.security_health_analytics_modules
WHERE foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_delete">

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.security_health_analytics_modules
WHERE projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_delete">

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

```sql
DELETE FROM google.securitycenter.security_health_analytics_modules
WHERE organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required;
```
</TabItem>
</Tabs>
