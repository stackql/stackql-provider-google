--- 
title: vpc_flow_logs_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_flow_logs_configs
  - networkmanagement
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

Creates, updates, deletes, gets or lists a <code>vpc_flow_logs_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpc_flow_logs_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.vpc_flow_logs_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A configuration to generate VPC Flow Logs.

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
    <td>Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/&#123;project_id&#125;/locations/global/vpcFlowLogsConfigs/&#123;vpc_flow_logs_config_id&#125;` - For organization-level configurations: `organizations/&#123;organization_id&#125;/locations/global/vpcFlowLogsConfigs/&#123;vpc_flow_logs_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationInterval" /></td>
    <td><code>string</code></td>
    <td>Optional. The aggregation interval for the logs. Default value is INTERVAL_5_SEC.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the config was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="filterExpr" /></td>
    <td><code>string</code></td>
    <td>Optional. Export filter used to define which VPC Flow Logs should be logged.</td>
</tr>
<tr>
    <td><CopyableCode code="flowSampling" /></td>
    <td><code>number (float)</code></td>
    <td>Optional. The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectAttachment" /></td>
    <td><code>string</code></td>
    <td>Traffic will be logged from the Interconnect Attachment. Format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/interconnectAttachments/&#123;name&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>Optional. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataFields" /></td>
    <td><code>array</code></td>
    <td>Optional. Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceState" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the state of the configured target resource for diagnostic purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the config was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpnTunnel" /></td>
    <td><code>string</code></td>
    <td>Traffic will be logged from the VPN Tunnel. Format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/vpnTunnels/&#123;name&#125;</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for the `ListVpcFlowLogsConfigs` method.

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
    <td>Page token to fetch the next set of configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached (when querying all locations with `-`).</td>
</tr>
<tr>
    <td><CopyableCode code="vpcFlowLogsConfigs" /></td>
    <td><code>array</code></td>
    <td>List of VPC Flow Log configurations.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vpcFlowLogsConfigsId"><code>vpcFlowLogsConfigsId</code></a></td>
    <td></td>
    <td>Gets the details of a specific `VpcFlowLogsConfig`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all `VpcFlowLogsConfigs` in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-vpcFlowLogsConfigId"><code>vpcFlowLogsConfigId</code></a></td>
    <td>Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vpcFlowLogsConfigsId"><code>vpcFlowLogsConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail. 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vpcFlowLogsConfigsId"><code>vpcFlowLogsConfigsId</code></a></td>
    <td></td>
    <td>Deletes a specific `VpcFlowLogsConfig`.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-vpcFlowLogsConfigsId">
    <td><CopyableCode code="vpcFlowLogsConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-vpcFlowLogsConfigId">
    <td><CopyableCode code="vpcFlowLogsConfigId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the details of a specific `VpcFlowLogsConfig`.

```sql
SELECT
name,
aggregationInterval,
createTime,
description,
filterExpr,
flowSampling,
interconnectAttachment,
labels,
metadata,
metadataFields,
state,
targetResourceState,
updateTime,
vpnTunnel
FROM google.networkmanagement.vpc_flow_logs_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND vpcFlowLogsConfigsId = '{{ vpcFlowLogsConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all `VpcFlowLogsConfigs` in a given project.

```sql
SELECT
nextPageToken,
unreachable,
vpcFlowLogsConfigs
FROM google.networkmanagement.vpc_flow_logs_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description

```sql
INSERT INTO google.networkmanagement.vpc_flow_logs_configs (
data__name,
data__description,
data__state,
data__aggregationInterval,
data__flowSampling,
data__metadata,
data__metadataFields,
data__filterExpr,
data__interconnectAttachment,
data__vpnTunnel,
data__labels,
projectsId,
locationsId,
vpcFlowLogsConfigId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ state }}',
'{{ aggregationInterval }}',
{{ flowSampling }},
'{{ metadata }}',
'{{ metadataFields }}',
'{{ filterExpr }}',
'{{ interconnectAttachment }}',
'{{ vpnTunnel }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ vpcFlowLogsConfigId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: vpc_flow_logs_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the vpc_flow_logs_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the vpc_flow_logs_configs resource.
    - name: name
      value: string
      description: >
        Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}`
        
    - name: description
      value: string
      description: >
        Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.
        
    - name: state
      value: string
      description: >
        Optional. The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config.
        
      valid_values: ['STATE_UNSPECIFIED', 'ENABLED', 'DISABLED']
    - name: aggregationInterval
      value: string
      description: >
        Optional. The aggregation interval for the logs. Default value is INTERVAL_5_SEC.
        
      valid_values: ['AGGREGATION_INTERVAL_UNSPECIFIED', 'INTERVAL_5_SEC', 'INTERVAL_30_SEC', 'INTERVAL_1_MIN', 'INTERVAL_5_MIN', 'INTERVAL_10_MIN', 'INTERVAL_15_MIN']
    - name: flowSampling
      value: number
      description: >
        Optional. The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0.
        
    - name: metadata
      value: string
      description: >
        Optional. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
        
      valid_values: ['METADATA_UNSPECIFIED', 'INCLUDE_ALL_METADATA', 'EXCLUDE_ALL_METADATA', 'CUSTOM_METADATA']
    - name: metadataFields
      value: array
      description: >
        Optional. Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.
        
    - name: filterExpr
      value: string
      description: >
        Optional. Export filter used to define which VPC Flow Logs should be logged.
        
    - name: interconnectAttachment
      value: string
      description: >
        Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}
        
    - name: vpnTunnel
      value: string
      description: >
        Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}
        
    - name: labels
      value: object
      description: >
        Optional. Resource labels to represent user-provided metadata.
        
    - name: vpcFlowLogsConfigId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail. 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description

```sql
UPDATE google.networkmanagement.vpc_flow_logs_configs
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__aggregationInterval = '{{ aggregationInterval }}',
data__flowSampling = {{ flowSampling }},
data__metadata = '{{ metadata }}',
data__metadataFields = '{{ metadataFields }}',
data__filterExpr = '{{ filterExpr }}',
data__interconnectAttachment = '{{ interconnectAttachment }}',
data__vpnTunnel = '{{ vpnTunnel }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vpcFlowLogsConfigsId = '{{ vpcFlowLogsConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a specific `VpcFlowLogsConfig`.

```sql
DELETE FROM google.networkmanagement.vpc_flow_logs_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vpcFlowLogsConfigsId = '{{ vpcFlowLogsConfigsId }}' --required;
```
</TabItem>
</Tabs>
