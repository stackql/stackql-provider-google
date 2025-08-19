--- 
title: discovery_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - discovery_configs
  - dlp
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

Creates, updates, deletes, gets or lists a <code>discovery_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>discovery_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.discovery_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_discovery_configs_get"
    values={[
        { label: 'projects_locations_discovery_configs_get', value: 'projects_locations_discovery_configs_get' },
        { label: 'organizations_locations_discovery_configs_get', value: 'organizations_locations_discovery_configs_get' },
        { label: 'projects_locations_discovery_configs_list', value: 'projects_locations_discovery_configs_list' },
        { label: 'organizations_locations_discovery_configs_list', value: 'organizations_locations_discovery_configs_list' }
    ]}
>
<TabItem value="projects_locations_discovery_configs_get">

Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/sensitive-data-protection/docs/data-profiles#retention).

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
    <td>Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example `projects/dlp-test-project/locations/global/discoveryConfigs/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Actions to execute at the completion of scanning.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a DiscoveryConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the config was activated. Repeated errors may result in the config automatically being paused. Output only field. Will return the last 100 errors. Whenever the config is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplates" /></td>
    <td><code>array</code></td>
    <td>Detection logic for profile generation. Not all template features are used by Discovery. FindingLimits, include_quote and exclude_info_types have no impact on Discovery. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this config was executed.</td>
</tr>
<tr>
    <td><CopyableCode code="orgConfig" /></td>
    <td><code>object</code></td>
    <td>Only set when the parent is an org. (id: GooglePrivacyDlpV2OrgConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="otherCloudStartingLocation" /></td>
    <td><code>object</code></td>
    <td>Must be set only when scanning other clouds. (id: GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="processingLocation" /></td>
    <td><code>object</code></td>
    <td>Optional. Processing location configuration. Vertex AI dataset scanning will set processing_location.image_fallback_type to MultiRegionProcessing by default. (id: GooglePrivacyDlpV2ProcessingLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>Target to match against for determining what to scan and how frequently.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a DiscoveryConfig.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_discovery_configs_get">

Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/sensitive-data-protection/docs/data-profiles#retention).

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
    <td>Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example `projects/dlp-test-project/locations/global/discoveryConfigs/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Actions to execute at the completion of scanning.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a DiscoveryConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the config was activated. Repeated errors may result in the config automatically being paused. Output only field. Will return the last 100 errors. Whenever the config is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplates" /></td>
    <td><code>array</code></td>
    <td>Detection logic for profile generation. Not all template features are used by Discovery. FindingLimits, include_quote and exclude_info_types have no impact on Discovery. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this config was executed.</td>
</tr>
<tr>
    <td><CopyableCode code="orgConfig" /></td>
    <td><code>object</code></td>
    <td>Only set when the parent is an org. (id: GooglePrivacyDlpV2OrgConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="otherCloudStartingLocation" /></td>
    <td><code>object</code></td>
    <td>Must be set only when scanning other clouds. (id: GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="processingLocation" /></td>
    <td><code>object</code></td>
    <td>Optional. Processing location configuration. Vertex AI dataset scanning will set processing_location.image_fallback_type to MultiRegionProcessing by default. (id: GooglePrivacyDlpV2ProcessingLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>Target to match against for determining what to scan and how frequently.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a DiscoveryConfig.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_discovery_configs_list">

Response message for ListDiscoveryConfigs.

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
    <td><CopyableCode code="discoveryConfigs" /></td>
    <td><code>array</code></td>
    <td>List of configs, up to page_size in ListDiscoveryConfigsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_discovery_configs_list">

Response message for ListDiscoveryConfigs.

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
    <td><CopyableCode code="discoveryConfigs" /></td>
    <td><code>array</code></td>
    <td>List of configs, up to page_size in ListDiscoveryConfigsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request.</td>
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
    <td><a href="#projects_locations_discovery_configs_get"><CopyableCode code="projects_locations_discovery_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Gets a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_discovery_configs_get"><CopyableCode code="organizations_locations_discovery_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Gets a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#projects_locations_discovery_configs_list"><CopyableCode code="projects_locations_discovery_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists discovery configurations.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_discovery_configs_list"><CopyableCode code="organizations_locations_discovery_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists discovery configurations.</td>
</tr>
<tr>
    <td><a href="#projects_locations_discovery_configs_create"><CopyableCode code="projects_locations_discovery_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a config for discovery to scan and profile storage.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_discovery_configs_create"><CopyableCode code="organizations_locations_discovery_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a config for discovery to scan and profile storage.</td>
</tr>
<tr>
    <td><a href="#projects_locations_discovery_configs_patch"><CopyableCode code="projects_locations_discovery_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Updates a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_discovery_configs_patch"><CopyableCode code="organizations_locations_discovery_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Updates a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#projects_locations_discovery_configs_delete"><CopyableCode code="projects_locations_discovery_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Deletes a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_discovery_configs_delete"><CopyableCode code="organizations_locations_discovery_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryConfigsId"><code>discoveryConfigsId</code></a></td>
    <td></td>
    <td>Deletes a discovery configuration.</td>
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
<tr id="parameter-discoveryConfigsId">
    <td><CopyableCode code="discoveryConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="projects_locations_discovery_configs_get"
    values={[
        { label: 'projects_locations_discovery_configs_get', value: 'projects_locations_discovery_configs_get' },
        { label: 'organizations_locations_discovery_configs_get', value: 'organizations_locations_discovery_configs_get' },
        { label: 'projects_locations_discovery_configs_list', value: 'projects_locations_discovery_configs_list' },
        { label: 'organizations_locations_discovery_configs_list', value: 'organizations_locations_discovery_configs_list' }
    ]}
>
<TabItem value="projects_locations_discovery_configs_get">

Gets a discovery configuration.

```sql
SELECT
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime
FROM google.dlp.discovery_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_discovery_configs_get">

Gets a discovery configuration.

```sql
SELECT
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime
FROM google.dlp.discovery_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_discovery_configs_list">

Lists discovery configurations.

```sql
SELECT
discoveryConfigs,
nextPageToken
FROM google.dlp.discovery_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="organizations_locations_discovery_configs_list">

Lists discovery configurations.

```sql
SELECT
discoveryConfigs,
nextPageToken
FROM google.dlp.discovery_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_discovery_configs_create"
    values={[
        { label: 'projects_locations_discovery_configs_create', value: 'projects_locations_discovery_configs_create' },
        { label: 'organizations_locations_discovery_configs_create', value: 'organizations_locations_discovery_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_discovery_configs_create">

Creates a config for discovery to scan and profile storage.

```sql
INSERT INTO google.dlp.discovery_configs (
data__discoveryConfig,
data__configId,
projectsId,
locationsId
)
SELECT 
'{{ discoveryConfig }}',
'{{ configId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_discovery_configs_create">

Creates a config for discovery to scan and profile storage.

```sql
INSERT INTO google.dlp.discovery_configs (
data__discoveryConfig,
data__configId,
organizationsId,
locationsId
)
SELECT 
'{{ discoveryConfig }}',
'{{ configId }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: discovery_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the discovery_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the discovery_configs resource.
    - name: organizationsId
      value: string
      description: Required parameter for the discovery_configs resource.
    - name: discoveryConfig
      value: object
      description: >
        Required. The DiscoveryConfig to create.
        
    - name: configId
      value: string
      description: >
        The config ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_discovery_configs_patch"
    values={[
        { label: 'projects_locations_discovery_configs_patch', value: 'projects_locations_discovery_configs_patch' },
        { label: 'organizations_locations_discovery_configs_patch', value: 'organizations_locations_discovery_configs_patch' }
    ]}
>
<TabItem value="projects_locations_discovery_configs_patch">

Updates a discovery configuration.

```sql
UPDATE google.dlp.discovery_configs
SET 
data__discoveryConfig = '{{ discoveryConfig }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' --required
RETURNING
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_discovery_configs_patch">

Updates a discovery configuration.

```sql
UPDATE google.dlp.discovery_configs
SET 
data__discoveryConfig = '{{ discoveryConfig }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' --required
RETURNING
name,
actions,
createTime,
displayName,
errors,
inspectTemplates,
lastRunTime,
orgConfig,
otherCloudStartingLocation,
processingLocation,
status,
targets,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_discovery_configs_delete"
    values={[
        { label: 'projects_locations_discovery_configs_delete', value: 'projects_locations_discovery_configs_delete' },
        { label: 'organizations_locations_discovery_configs_delete', value: 'organizations_locations_discovery_configs_delete' }
    ]}
>
<TabItem value="projects_locations_discovery_configs_delete">

Deletes a discovery configuration.

```sql
DELETE FROM google.dlp.discovery_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_discovery_configs_delete">

Deletes a discovery configuration.

```sql
DELETE FROM google.dlp.discovery_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryConfigsId = '{{ discoveryConfigsId }}' --required;
```
</TabItem>
</Tabs>
