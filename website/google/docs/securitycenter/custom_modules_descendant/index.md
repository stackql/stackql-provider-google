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

Response message for listing descendant Security Health Analytics custom modules.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more custom modules to be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="securityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent and its descendants.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_list_descendant">

Response for listing current and descendant resident Event Threat Detection custom modules.

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
    <td><CopyableCode code="eventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_list_descendant">

Response message for listing descendant Security Health Analytics custom modules.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more custom modules to be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="securityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent and its descendants.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_list_descendant">

Response for listing current and descendant resident Event Threat Detection custom modules.

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
    <td><CopyableCode code="eventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_list_descendant">

Response message for listing descendant Security Health Analytics custom modules.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If not empty, indicates that there may be more custom modules to be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="securityHealthAnalyticsCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent and its descendants.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_list_descendant">

Response for listing current and descendant resident Event Threat Detection custom modules.

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
    <td><CopyableCode code="eventThreatDetectionCustomModules" /></td>
    <td><code>array</code></td>
    <td>Custom modules belonging to the requested parent.</td>
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
nextPageToken,
securityHealthAnalyticsCustomModules
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
eventThreatDetectionCustomModules,
nextPageToken
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
nextPageToken,
securityHealthAnalyticsCustomModules
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
eventThreatDetectionCustomModules,
nextPageToken
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
nextPageToken,
securityHealthAnalyticsCustomModules
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
eventThreatDetectionCustomModules,
nextPageToken
FROM google.securitycenter.custom_modules_descendant
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
