--- 
title: uptime_check_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - uptime_check_configs
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>uptime_check_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>uptime_check_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.uptime_check_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_uptime_check_configs_get"
    values={[
        { label: 'projects_uptime_check_configs_get', value: 'projects_uptime_check_configs_get' },
        { label: 'projects_uptime_check_configs_list', value: 'projects_uptime_check_configs_list' }
    ]}
>
<TabItem value="projects_uptime_check_configs_get">

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
    <td>Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="checkerType" /></td>
    <td><code>string</code></td>
    <td>The type of checkers to use to execute the Uptime check.</td>
</tr>
<tr>
    <td><CopyableCode code="contentMatchers" /></td>
    <td><code>array</code></td>
    <td>The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the check is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="httpCheck" /></td>
    <td><code>object</code></td>
    <td>Contains information needed to make an HTTP or HTTPS check. (id: HttpCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="internalCheckers" /></td>
    <td><code>array</code></td>
    <td>The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="isInternal" /></td>
    <td><code>boolean</code></td>
    <td>If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false.</td>
</tr>
<tr>
    <td><CopyableCode code="logCheckFailures" /></td>
    <td><code>boolean</code></td>
    <td>To specify whether to log the results of failed probes to Cloud Logging.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoredResource" /></td>
    <td><code>object</code></td>
    <td>An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": &#123; "type": "gce_instance", "labels": &#123; "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" &#125;&#125;  (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string (google-duration)</code></td>
    <td>How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroup" /></td>
    <td><code>object</code></td>
    <td>The group resource associated with the configuration. (id: ResourceGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedRegions" /></td>
    <td><code>array</code></td>
    <td>The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.</td>
</tr>
<tr>
    <td><CopyableCode code="syntheticMonitor" /></td>
    <td><code>object</code></td>
    <td>Specifies a Synthetic Monitor to invoke. (id: SyntheticMonitorTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="tcpCheck" /></td>
    <td><code>object</code></td>
    <td>Contains information needed to make a TCP check. (id: TcpCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_uptime_check_configs_list">

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
    <td>Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="checkerType" /></td>
    <td><code>string</code></td>
    <td>The type of checkers to use to execute the Uptime check.</td>
</tr>
<tr>
    <td><CopyableCode code="contentMatchers" /></td>
    <td><code>array</code></td>
    <td>The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the check is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="httpCheck" /></td>
    <td><code>object</code></td>
    <td>Contains information needed to make an HTTP or HTTPS check. (id: HttpCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="internalCheckers" /></td>
    <td><code>array</code></td>
    <td>The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="isInternal" /></td>
    <td><code>boolean</code></td>
    <td>If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false.</td>
</tr>
<tr>
    <td><CopyableCode code="logCheckFailures" /></td>
    <td><code>boolean</code></td>
    <td>To specify whether to log the results of failed probes to Cloud Logging.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoredResource" /></td>
    <td><code>object</code></td>
    <td>An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": &#123; "type": "gce_instance", "labels": &#123; "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" &#125;&#125;  (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string (google-duration)</code></td>
    <td>How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroup" /></td>
    <td><code>object</code></td>
    <td>The group resource associated with the configuration. (id: ResourceGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedRegions" /></td>
    <td><code>array</code></td>
    <td>The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.</td>
</tr>
<tr>
    <td><CopyableCode code="syntheticMonitor" /></td>
    <td><code>object</code></td>
    <td>Specifies a Synthetic Monitor to invoke. (id: SyntheticMonitorTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="tcpCheck" /></td>
    <td><code>object</code></td>
    <td>Contains information needed to make a TCP check. (id: TcpCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.</td>
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
    <td><a href="#projects_uptime_check_configs_get"><CopyableCode code="projects_uptime_check_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-uptimeCheckConfigsId"><code>uptimeCheckConfigsId</code></a></td>
    <td></td>
    <td>Gets a single Uptime check configuration.</td>
</tr>
<tr>
    <td><a href="#projects_uptime_check_configs_list"><CopyableCode code="projects_uptime_check_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).</td>
</tr>
<tr>
    <td><a href="#projects_uptime_check_configs_create"><CopyableCode code="projects_uptime_check_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new Uptime check configuration.</td>
</tr>
<tr>
    <td><a href="#projects_uptime_check_configs_patch"><CopyableCode code="projects_uptime_check_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-uptimeCheckConfigsId"><code>uptimeCheckConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via updateMask. Returns the updated configuration.</td>
</tr>
<tr>
    <td><a href="#projects_uptime_check_configs_delete"><CopyableCode code="projects_uptime_check_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-uptimeCheckConfigsId"><code>uptimeCheckConfigsId</code></a></td>
    <td></td>
    <td>Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.</td>
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
<tr id="parameter-uptimeCheckConfigsId">
    <td><CopyableCode code="uptimeCheckConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_uptime_check_configs_get"
    values={[
        { label: 'projects_uptime_check_configs_get', value: 'projects_uptime_check_configs_get' },
        { label: 'projects_uptime_check_configs_list', value: 'projects_uptime_check_configs_list' }
    ]}
>
<TabItem value="projects_uptime_check_configs_get">

Gets a single Uptime check configuration.

```sql
SELECT
name,
checkerType,
contentMatchers,
disabled,
displayName,
httpCheck,
internalCheckers,
isInternal,
logCheckFailures,
monitoredResource,
period,
resourceGroup,
selectedRegions,
syntheticMonitor,
tcpCheck,
timeout,
userLabels
FROM google.monitoring.uptime_check_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND uptimeCheckConfigsId = '{{ uptimeCheckConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_uptime_check_configs_list">

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

```sql
SELECT
name,
checkerType,
contentMatchers,
disabled,
displayName,
httpCheck,
internalCheckers,
isInternal,
logCheckFailures,
monitoredResource,
period,
resourceGroup,
selectedRegions,
syntheticMonitor,
tcpCheck,
timeout,
userLabels
FROM google.monitoring.uptime_check_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_uptime_check_configs_create"
    values={[
        { label: 'projects_uptime_check_configs_create', value: 'projects_uptime_check_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_uptime_check_configs_create">

Creates a new Uptime check configuration.

```sql
INSERT INTO google.monitoring.uptime_check_configs (
data__name,
data__displayName,
data__monitoredResource,
data__resourceGroup,
data__syntheticMonitor,
data__httpCheck,
data__tcpCheck,
data__period,
data__timeout,
data__contentMatchers,
data__checkerType,
data__disabled,
data__selectedRegions,
data__logCheckFailures,
data__isInternal,
data__internalCheckers,
data__userLabels,
projectsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ monitoredResource }}',
'{{ resourceGroup }}',
'{{ syntheticMonitor }}',
'{{ httpCheck }}',
'{{ tcpCheck }}',
'{{ period }}',
'{{ timeout }}',
'{{ contentMatchers }}',
'{{ checkerType }}',
{{ disabled }},
'{{ selectedRegions }}',
{{ logCheckFailures }},
{{ isInternal }},
'{{ internalCheckers }}',
'{{ userLabels }}',
'{{ projectsId }}'
RETURNING
name,
checkerType,
contentMatchers,
disabled,
displayName,
httpCheck,
internalCheckers,
isInternal,
logCheckFailures,
monitoredResource,
period,
resourceGroup,
selectedRegions,
syntheticMonitor,
tcpCheck,
timeout,
userLabels
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: uptime_check_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the uptime_check_configs resource.
    - name: name
      value: string
      description: >
        Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.
        
    - name: displayName
      value: string
      description: >
        A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.
        
    - name: monitoredResource
      value: object
      description: >
        An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} 
        
    - name: resourceGroup
      value: object
      description: >
        The group resource associated with the configuration.
        
    - name: syntheticMonitor
      value: object
      description: >
        Specifies a Synthetic Monitor to invoke.
        
    - name: httpCheck
      value: object
      description: >
        Contains information needed to make an HTTP or HTTPS check.
        
    - name: tcpCheck
      value: object
      description: >
        Contains information needed to make a TCP check.
        
    - name: period
      value: string
      description: >
        How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s.
        
    - name: timeout
      value: string
      description: >
        The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.
        
    - name: contentMatchers
      value: array
      description: >
        The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.
        
    - name: checkerType
      value: string
      description: >
        The type of checkers to use to execute the Uptime check.
        
      valid_values: ['CHECKER_TYPE_UNSPECIFIED', 'STATIC_IP_CHECKERS', 'VPC_CHECKERS']
    - name: disabled
      value: boolean
      description: >
        Whether the check is disabled or not.
        
    - name: selectedRegions
      value: array
      description: >
        The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.
        
    - name: logCheckFailures
      value: boolean
      description: >
        To specify whether to log the results of failed probes to Cloud Logging.
        
    - name: isInternal
      value: boolean
      description: >
        If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false.
        
    - name: internalCheckers
      value: array
      description: >
        The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig.
        
    - name: userLabels
      value: object
      description: >
        User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_uptime_check_configs_patch"
    values={[
        { label: 'projects_uptime_check_configs_patch', value: 'projects_uptime_check_configs_patch' }
    ]}
>
<TabItem value="projects_uptime_check_configs_patch">

Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via updateMask. Returns the updated configuration.

```sql
UPDATE google.monitoring.uptime_check_configs
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__monitoredResource = '{{ monitoredResource }}',
data__resourceGroup = '{{ resourceGroup }}',
data__syntheticMonitor = '{{ syntheticMonitor }}',
data__httpCheck = '{{ httpCheck }}',
data__tcpCheck = '{{ tcpCheck }}',
data__period = '{{ period }}',
data__timeout = '{{ timeout }}',
data__contentMatchers = '{{ contentMatchers }}',
data__checkerType = '{{ checkerType }}',
data__disabled = {{ disabled }},
data__selectedRegions = '{{ selectedRegions }}',
data__logCheckFailures = {{ logCheckFailures }},
data__isInternal = {{ isInternal }},
data__internalCheckers = '{{ internalCheckers }}',
data__userLabels = '{{ userLabels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND uptimeCheckConfigsId = '{{ uptimeCheckConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
checkerType,
contentMatchers,
disabled,
displayName,
httpCheck,
internalCheckers,
isInternal,
logCheckFailures,
monitoredResource,
period,
resourceGroup,
selectedRegions,
syntheticMonitor,
tcpCheck,
timeout,
userLabels;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_uptime_check_configs_delete"
    values={[
        { label: 'projects_uptime_check_configs_delete', value: 'projects_uptime_check_configs_delete' }
    ]}
>
<TabItem value="projects_uptime_check_configs_delete">

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

```sql
DELETE FROM google.monitoring.uptime_check_configs
WHERE projectsId = '{{ projectsId }}' --required
AND uptimeCheckConfigsId = '{{ uptimeCheckConfigsId }}' --required;
```
</TabItem>
</Tabs>
