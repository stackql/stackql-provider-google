--- 
title: node_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - node_groups
  - compute
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

Creates, updates, deletes, gets or lists a <code>node_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>node_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.node_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Represents a sole-tenant Node Group resource. A sole-tenant node is a physical server that is dedicated to hosting VM instances only for your specific project. Use sole-tenant nodes to keep your instances physically separated from instances in other projects, or to group your instances together on the same host hardware. For more information, read Sole-tenant nodes.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscalingPolicy" /></td>
    <td><code>object</code></td>
    <td>Specifies how autoscaling should behave. (id: NodeGroupAutoscalingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The type of the resource. Always compute#nodeGroup for node group. (default: compute#nodeGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="locationHint" /></td>
    <td><code>string</code></td>
    <td>An opaque location hint used to place the Node close to other resources. This field is for use by internal tools that use the public API. The location hint here on the NodeGroup overrides any location_hint present in the NodeTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceInterval" /></td>
    <td><code>string</code></td>
    <td>Specifies the frequency of planned maintenance events. The accepted values are: `AS_NEEDED` and `RECURRENT`.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. For more information, see Maintenance policies.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Time window specified for daily maintenance operations. GCE's internal maintenance will be performed within this window. (id: NodeGroupMaintenanceWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeTemplate" /></td>
    <td><code>string</code></td>
    <td>URL of the node template to create the node group from.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>Share-settings for the node group (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] The total number of nodes in the node group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The name of the zone where the node group resides, such as us-central1-a.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of nodeGroups.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of NodeGroup resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource.Always compute#nodeGroupList for lists of node groups. (default: compute#nodeGroupList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>object</code></td>
    <td>A list of NodeGroupsScopedList resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource.Always compute#nodeGroupAggregatedList for aggregated lists of node groups. (default: compute#nodeGroupAggregatedList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachables" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Unreachable resources.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td></td>
    <td>Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-initialNodeCount"><code>initialNodeCount</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a NodeGroup resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified node group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified NodeGroup resource.</td>
</tr>
<tr>
    <td><a href="#set_node_template"><CopyableCode code="set_node_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the node template of the node group.</td>
</tr>
<tr>
    <td><a href="#simulate_maintenance_event"><CopyableCode code="simulate_maintenance_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Simulates maintenance event on specified nodes from the node group.</td>
</tr>
<tr>
    <td><a href="#perform_maintenance"><CopyableCode code="perform_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-nodeGroup"><code>nodeGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Perform maintenance on a subset of nodes in the node group.</td>
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
<tr id="parameter-initialNodeCount">
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-nodeGroup">
    <td><CopyableCode code="nodeGroup" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.

```sql
SELECT
id,
name,
autoscalingPolicy,
creationTimestamp,
description,
fingerprint,
kind,
locationHint,
maintenanceInterval,
maintenancePolicy,
maintenanceWindow,
nodeTemplate,
selfLink,
shareSettings,
size,
status,
zone
FROM google.compute.node_groups
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND nodeGroup = '{{ nodeGroup }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.node_groups
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
unreachables,
warning
FROM google.compute.node_groups
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a NodeGroup resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.node_groups (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__nodeTemplate,
data__zone,
data__selfLink,
data__status,
data__size,
data__autoscalingPolicy,
data__maintenancePolicy,
data__locationHint,
data__fingerprint,
data__maintenanceWindow,
data__shareSettings,
data__maintenanceInterval,
project,
zone,
initialNodeCount,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ nodeTemplate }}',
'{{ zone }}',
'{{ selfLink }}',
'{{ status }}',
{{ size }},
'{{ autoscalingPolicy }}',
'{{ maintenancePolicy }}',
'{{ locationHint }}',
'{{ fingerprint }}',
'{{ maintenanceWindow }}',
'{{ shareSettings }}',
'{{ maintenanceInterval }}',
'{{ project }}',
'{{ zone }}',
'{{ initialNodeCount }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: node_groups
  props:
    - name: project
      value: string
      description: Required parameter for the node_groups resource.
    - name: zone
      value: string
      description: Required parameter for the node_groups resource.
    - name: initialNodeCount
      value: integer (int32)
      description: Required parameter for the node_groups resource.
    - name: kind
      value: string
      description: >
        [Output Only] The type of the resource. Always compute#nodeGroup for node group.
        
      default: compute#nodeGroup
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: nodeTemplate
      value: string
      description: >
        URL of the node template to create the node group from.
        
    - name: zone
      value: string
      description: >
        [Output Only] The name of the zone where the node group resides, such as us-central1-a.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: status
      value: string
      valid_values: ['CREATING', 'DELETING', 'INVALID', 'READY']
    - name: size
      value: integer
      description: >
        [Output Only] The total number of nodes in the node group.
        
    - name: autoscalingPolicy
      value: object
      description: >
        Specifies how autoscaling should behave.
        
    - name: maintenancePolicy
      value: string
      description: >
        Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. For more information, see Maintenance policies.
        
      valid_values: ['DEFAULT', 'MAINTENANCE_POLICY_UNSPECIFIED', 'MIGRATE_WITHIN_NODE_GROUP', 'RESTART_IN_PLACE']
    - name: locationHint
      value: string
      description: >
        An opaque location hint used to place the Node close to other resources. This field is for use by internal tools that use the public API. The location hint here on the NodeGroup overrides any location_hint present in the NodeTemplate.
        
    - name: fingerprint
      value: string
    - name: maintenanceWindow
      value: object
      description: >
        Time window specified for daily maintenance operations. GCE's internal maintenance will be performed within this window.
        
    - name: shareSettings
      value: object
      description: >
        Share-settings for the node group
        
    - name: maintenanceInterval
      value: string
      description: >
        Specifies the frequency of planned maintenance events. The accepted values are: `AS_NEEDED` and `RECURRENT`.
        
      valid_values: ['AS_NEEDED', 'RECURRENT']
    - name: requestId
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

Updates the specified node group.

```sql
UPDATE google.compute.node_groups
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__nodeTemplate = '{{ nodeTemplate }}',
data__zone = '{{ zone }}',
data__selfLink = '{{ selfLink }}',
data__status = '{{ status }}',
data__size = {{ size }},
data__autoscalingPolicy = '{{ autoscalingPolicy }}',
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__locationHint = '{{ locationHint }}',
data__fingerprint = '{{ fingerprint }}',
data__maintenanceWindow = '{{ maintenanceWindow }}',
data__shareSettings = '{{ shareSettings }}',
data__maintenanceInterval = '{{ maintenanceInterval }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND nodeGroup = '{{ nodeGroup }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
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

Deletes the specified NodeGroup resource.

```sql
DELETE FROM google.compute.node_groups
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND nodeGroup = '{{ nodeGroup }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_node_template"
    values={[
        { label: 'set_node_template', value: 'set_node_template' },
        { label: 'simulate_maintenance_event', value: 'simulate_maintenance_event' },
        { label: 'perform_maintenance', value: 'perform_maintenance' }
    ]}
>
<TabItem value="set_node_template">

Updates the node template of the node group.

```sql
EXEC google.compute.node_groups.set_node_template 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@nodeGroup='{{ nodeGroup }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"nodeTemplate": "{{ nodeTemplate }}"
}';
```
</TabItem>
<TabItem value="simulate_maintenance_event">

Simulates maintenance event on specified nodes from the node group.

```sql
EXEC google.compute.node_groups.simulate_maintenance_event 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@nodeGroup='{{ nodeGroup }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"nodes": "{{ nodes }}"
}';
```
</TabItem>
<TabItem value="perform_maintenance">

Perform maintenance on a subset of nodes in the node group.

```sql
EXEC google.compute.node_groups.perform_maintenance 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@nodeGroup='{{ nodeGroup }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"nodes": "{{ nodes }}", 
"startTime": "{{ startTime }}"
}';
```
</TabItem>
</Tabs>
