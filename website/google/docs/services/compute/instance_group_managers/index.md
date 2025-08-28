--- 
title: instance_group_managers
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_group_managers
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

Creates, updates, deletes, gets or lists an <code>instance_group_managers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_group_managers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instance_group_managers" /></td></tr>
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
    <td><code>string (uint64)</code></td>
    <td>[Output Only] A unique identifier for this resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="allInstancesConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration that overrides the instance template configuration for the group. (id: InstanceGroupManagerAllInstancesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoHealingPolicies" /></td>
    <td><code>array</code></td>
    <td>The autohealing policy for this managed instance group. You can specify only one value.</td>
</tr>
<tr>
    <td><CopyableCode code="baseInstanceName" /></td>
    <td><code>string</code></td>
    <td>The base instance name is a prefix that you want to attach to the names of all VMs in a MIG. The maximum character length is 58 and the name must comply with RFC1035 format. When a VM is created in the group, the MIG appends a hyphen and a random four-character string to the base instance name. If you want the MIG to assign sequential numbers instead of a random string, then end the base instance name with a hyphen followed by one or more hash symbols. The hash symbols indicate the number of digits. For example, a base instance name of "vm-###" results in "vm-001" as a VM name. @pattern [a-z](([-a-z0-9]&#123;0,57&#125;)|([-a-z0-9]&#123;0,51&#125;-#&#123;1,10&#125;(\\[[0-9]&#123;1,10&#125;\\])?))</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The creation timestamp for this managed instance group in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentActions" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions. (id: InstanceGroupManagerActionsSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionPolicy" /></td>
    <td><code>object</code></td>
    <td>Policy specifying the intended distribution of managed instances across zones in a regional managed instance group. (id: DistributionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. This field may be used in optimistic locking. It will be ignored when inserting an InstanceGroupManager. An up-to-date fingerprint must be provided in order to update the InstanceGroupManager, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an InstanceGroupManager.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceFlexibilityPolicy" /></td>
    <td><code>object</code></td>
    <td>Instance flexibility allowing MIG to create VMs from multiple types of machines. Instance flexibility configuration on MIG overrides instance template configuration. (id: InstanceGroupManagerInstanceFlexibilityPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroup" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the Instance Group resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceLifecyclePolicy" /></td>
    <td><code>object</code></td>
    <td>The repair policy for this managed instance group. (id: InstanceGroupManagerInstanceLifecyclePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceTemplate" /></td>
    <td><code>string</code></td>
    <td>The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups. (default: compute#instanceGroupManager)</td>
</tr>
<tr>
    <td><CopyableCode code="listManagedInstancesResults" /></td>
    <td><code>string</code></td>
    <td>Pagination behavior of the listManagedInstances API method for this managed instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="namedPorts" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Named ports configured on the Instance Groups complementary to this Instance Group Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the region where the managed instance group resides (for regional resources).</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies for this managed instance group. (id: InstanceGroupManagerResourcePolicies)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL for this managed instance group. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="standbyPolicy" /></td>
    <td><code>object</code></td>
    <td>Standby policy for stopped and suspended instances. (id: InstanceGroupManagerStandbyPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="statefulPolicy" /></td>
    <td><code>object</code></td>
    <td>Stateful configuration for this Instanced Group Manager (id: StatefulPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The status of this managed instance group. (id: InstanceGroupManagerStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="targetPools" /></td>
    <td><code>array</code></td>
    <td>The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of running instances for this managed instance group. You can reduce this number by using the instanceGroupManager deleteInstances or abandonInstances methods. Resizing the group also changes this number.</td>
</tr>
<tr>
    <td><CopyableCode code="targetStoppedSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of stopped instances for this managed instance group. This number changes when you: - Stop instance using the stopInstances method or start instances using the startInstances method. - Manually change the targetStoppedSize using the update method. </td>
</tr>
<tr>
    <td><CopyableCode code="targetSuspendedSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of suspended instances for this managed instance group. This number changes when you: - Suspend instance using the suspendInstances method or resume instances using the resumeInstances method. - Manually change the targetSuspendedSize using the update method. </td>
</tr>
<tr>
    <td><CopyableCode code="updatePolicy" /></td>
    <td><code>object</code></td>
    <td>The update policy for this managed instance group. (id: InstanceGroupManagerUpdatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>Specifies the instance templates used by this managed instance group to create instances. Each version is defined by an instanceTemplate and a name. Every version can appear at most once per instance group. This field overrides the top-level instanceTemplate field. Read more about the relationships between these fields. Exactly one version must leave the targetSize field unset. That version will be applied to all remaining instances. For more information, read about canary updates.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of a zone where the managed instance group is located (for zonal resources).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><code>array</code></td>
    <td>A list of InstanceGroupManager resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups that exist in th regional scope. (default: compute#regionInstanceGroupManagerList)</td>
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
    <td><code>string (uint64)</code></td>
    <td>[Output Only] A unique identifier for this resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="allInstancesConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies configuration that overrides the instance template configuration for the group. (id: InstanceGroupManagerAllInstancesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoHealingPolicies" /></td>
    <td><code>array</code></td>
    <td>The autohealing policy for this managed instance group. You can specify only one value.</td>
</tr>
<tr>
    <td><CopyableCode code="baseInstanceName" /></td>
    <td><code>string</code></td>
    <td>The base instance name is a prefix that you want to attach to the names of all VMs in a MIG. The maximum character length is 58 and the name must comply with RFC1035 format. When a VM is created in the group, the MIG appends a hyphen and a random four-character string to the base instance name. If you want the MIG to assign sequential numbers instead of a random string, then end the base instance name with a hyphen followed by one or more hash symbols. The hash symbols indicate the number of digits. For example, a base instance name of "vm-###" results in "vm-001" as a VM name. @pattern [a-z](([-a-z0-9]&#123;0,57&#125;)|([-a-z0-9]&#123;0,51&#125;-#&#123;1,10&#125;(\\[[0-9]&#123;1,10&#125;\\])?))</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The creation timestamp for this managed instance group in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentActions" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions. (id: InstanceGroupManagerActionsSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionPolicy" /></td>
    <td><code>object</code></td>
    <td>Policy specifying the intended distribution of managed instances across zones in a regional managed instance group. (id: DistributionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. This field may be used in optimistic locking. It will be ignored when inserting an InstanceGroupManager. An up-to-date fingerprint must be provided in order to update the InstanceGroupManager, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an InstanceGroupManager.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceFlexibilityPolicy" /></td>
    <td><code>object</code></td>
    <td>Instance flexibility allowing MIG to create VMs from multiple types of machines. Instance flexibility configuration on MIG overrides instance template configuration. (id: InstanceGroupManagerInstanceFlexibilityPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroup" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the Instance Group resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceLifecyclePolicy" /></td>
    <td><code>object</code></td>
    <td>The repair policy for this managed instance group. (id: InstanceGroupManagerInstanceLifecyclePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceTemplate" /></td>
    <td><code>string</code></td>
    <td>The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups. (default: compute#instanceGroupManager)</td>
</tr>
<tr>
    <td><CopyableCode code="listManagedInstancesResults" /></td>
    <td><code>string</code></td>
    <td>Pagination behavior of the listManagedInstances API method for this managed instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="namedPorts" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Named ports configured on the Instance Groups complementary to this Instance Group Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the region where the managed instance group resides (for regional resources).</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies for this managed instance group. (id: InstanceGroupManagerResourcePolicies)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL for this managed instance group. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="standbyPolicy" /></td>
    <td><code>object</code></td>
    <td>Standby policy for stopped and suspended instances. (id: InstanceGroupManagerStandbyPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="statefulPolicy" /></td>
    <td><code>object</code></td>
    <td>Stateful configuration for this Instanced Group Manager (id: StatefulPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The status of this managed instance group. (id: InstanceGroupManagerStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="targetPools" /></td>
    <td><code>array</code></td>
    <td>The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of running instances for this managed instance group. You can reduce this number by using the instanceGroupManager deleteInstances or abandonInstances methods. Resizing the group also changes this number.</td>
</tr>
<tr>
    <td><CopyableCode code="targetStoppedSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of stopped instances for this managed instance group. This number changes when you: - Stop instance using the stopInstances method or start instances using the startInstances method. - Manually change the targetStoppedSize using the update method. </td>
</tr>
<tr>
    <td><CopyableCode code="targetSuspendedSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The target number of suspended instances for this managed instance group. This number changes when you: - Suspend instance using the suspendInstances method or resume instances using the resumeInstances method. - Manually change the targetSuspendedSize using the update method. </td>
</tr>
<tr>
    <td><CopyableCode code="updatePolicy" /></td>
    <td><code>object</code></td>
    <td>The update policy for this managed instance group. (id: InstanceGroupManagerUpdatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>Specifies the instance templates used by this managed instance group to create instances. Each version is defined by an instanceTemplate and a name. Every version can appear at most once per instance group. This field overrides the top-level instanceTemplate field. Read more about the relationships between these fields. Exactly one version must leave the targetSize field unset. That version will be applied to all remaining instances. For more information, read about canary updates.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of a zone where the managed instance group is located (for zonal resources).</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td></td>
    <td>Returns all of the details about the specified managed instance group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of managed instance groups that are contained within the specified region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves the list of managed instance groups and groups them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.</td>
</tr>
<tr>
    <td><a href="#patch_per_instance_configs"><CopyableCode code="patch_per_instance_configs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified managed instance group and all of the instances in that group.</td>
</tr>
<tr>
    <td><a href="#suspend_instances"><CopyableCode code="suspend_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#resume_instances"><CopyableCode code="resume_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#stop_instances"><CopyableCode code="stop_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#start_instances"><CopyableCode code="start_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#abandon_instances"><CopyableCode code="abandon_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#recreate_instances"><CopyableCode code="recreate_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.</td>
</tr>
<tr>
    <td><a href="#set_instance_template"><CopyableCode code="set_instance_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.</td>
</tr>
<tr>
    <td><a href="#set_target_pools"><CopyableCode code="set_target_pools" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.</td>
</tr>
<tr>
    <td><a href="#apply_updates_to_instances"><CopyableCode code="apply_updates_to_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td></td>
    <td>Apply updates to selected instances the managed instance group.</td>
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
<tr id="parameter-instanceGroupManager">
    <td><CopyableCode code="instanceGroupManager" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
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

Returns all of the details about the specified managed instance group.

```sql
SELECT
id,
name,
allInstancesConfig,
autoHealingPolicies,
baseInstanceName,
creationTimestamp,
currentActions,
description,
distributionPolicy,
fingerprint,
instanceFlexibilityPolicy,
instanceGroup,
instanceLifecyclePolicy,
instanceTemplate,
kind,
listManagedInstancesResults,
namedPorts,
region,
resourcePolicies,
satisfiesPzi,
satisfiesPzs,
selfLink,
standbyPolicy,
statefulPolicy,
status,
targetPools,
targetSize,
targetStoppedSize,
targetSuspendedSize,
updatePolicy,
versions,
zone
FROM google.compute.instance_group_managers
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of managed instance groups that are contained within the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.instance_group_managers
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of managed instance groups and groups them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
allInstancesConfig,
autoHealingPolicies,
baseInstanceName,
creationTimestamp,
currentActions,
description,
distributionPolicy,
fingerprint,
instanceFlexibilityPolicy,
instanceGroup,
instanceLifecyclePolicy,
instanceTemplate,
kind,
listManagedInstancesResults,
namedPorts,
region,
resourcePolicies,
satisfiesPzi,
satisfiesPzs,
selfLink,
standbyPolicy,
statefulPolicy,
status,
targetPools,
targetSize,
targetStoppedSize,
targetSuspendedSize,
updatePolicy,
versions,
zone
FROM google.compute.instance_group_managers
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

Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.

```sql
INSERT INTO google.compute.instance_group_managers (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__zone,
data__region,
data__distributionPolicy,
data__instanceTemplate,
data__versions,
data__allInstancesConfig,
data__instanceGroup,
data__targetPools,
data__baseInstanceName,
data__fingerprint,
data__currentActions,
data__status,
data__targetSize,
data__instanceFlexibilityPolicy,
data__targetStoppedSize,
data__targetSuspendedSize,
data__listManagedInstancesResults,
data__standbyPolicy,
data__selfLink,
data__autoHealingPolicies,
data__updatePolicy,
data__namedPorts,
data__statefulPolicy,
data__instanceLifecyclePolicy,
data__satisfiesPzi,
data__satisfiesPzs,
data__resourcePolicies,
project,
region,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ zone }}',
'{{ region }}',
'{{ distributionPolicy }}',
'{{ instanceTemplate }}',
'{{ versions }}',
'{{ allInstancesConfig }}',
'{{ instanceGroup }}',
'{{ targetPools }}',
'{{ baseInstanceName }}',
'{{ fingerprint }}',
'{{ currentActions }}',
'{{ status }}',
{{ targetSize }},
'{{ instanceFlexibilityPolicy }}',
{{ targetStoppedSize }},
{{ targetSuspendedSize }},
'{{ listManagedInstancesResults }}',
'{{ standbyPolicy }}',
'{{ selfLink }}',
'{{ autoHealingPolicies }}',
'{{ updatePolicy }}',
'{{ namedPorts }}',
'{{ statefulPolicy }}',
'{{ instanceLifecyclePolicy }}',
{{ satisfiesPzi }},
{{ satisfiesPzs }},
'{{ resourcePolicies }}',
'{{ project }}',
'{{ region }}',
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
- name: instance_group_managers
  props:
    - name: project
      value: string
      description: Required parameter for the instance_group_managers resource.
    - name: region
      value: string
      description: Required parameter for the instance_group_managers resource.
    - name: kind
      value: string
      description: >
        [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
        
      default: compute#instanceGroupManager
    - name: id
      value: string
      description: >
        [Output Only] A unique identifier for this resource type. The server generates this identifier.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
        
    - name: description
      value: string
      description: >
        An optional description of this resource.
        
    - name: zone
      value: string
      description: >
        [Output Only] The URL of a zone where the managed instance group is located (for zonal resources).
        
    - name: region
      value: string
      description: >
        [Output Only] The URL of the region where the managed instance group resides (for regional resources).
        
    - name: distributionPolicy
      value: object
      description: >
        Policy specifying the intended distribution of managed instances across zones in a regional managed instance group.
        
    - name: instanceTemplate
      value: string
      description: >
        The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
        
    - name: versions
      value: array
      description: >
        Specifies the instance templates used by this managed instance group to create instances. Each version is defined by an instanceTemplate and a name. Every version can appear at most once per instance group. This field overrides the top-level instanceTemplate field. Read more about the relationships between these fields. Exactly one version must leave the targetSize field unset. That version will be applied to all remaining instances. For more information, read about canary updates.
        
    - name: allInstancesConfig
      value: object
      description: >
        Specifies configuration that overrides the instance template configuration for the group.
        
    - name: instanceGroup
      value: string
      description: >
        [Output Only] The URL of the Instance Group resource.
        
    - name: targetPools
      value: array
      description: >
        The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
        
    - name: baseInstanceName
      value: string
      description: >
        The base instance name is a prefix that you want to attach to the names of all VMs in a MIG. The maximum character length is 58 and the name must comply with RFC1035 format. When a VM is created in the group, the MIG appends a hyphen and a random four-character string to the base instance name. If you want the MIG to assign sequential numbers instead of a random string, then end the base instance name with a hyphen followed by one or more hash symbols. The hash symbols indicate the number of digits. For example, a base instance name of "vm-###" results in "vm-001" as a VM name. @pattern [a-z](([-a-z0-9]{0,57})|([-a-z0-9]{0,51}-#{1,10}(\\[[0-9]{1,10}\\])?))
        
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. This field may be used in optimistic locking. It will be ignored when inserting an InstanceGroupManager. An up-to-date fingerprint must be provided in order to update the InstanceGroupManager, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an InstanceGroupManager.
        
    - name: currentActions
      value: object
      description: >
        [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
        
    - name: status
      value: object
      description: >
        [Output Only] The status of this managed instance group.
        
    - name: targetSize
      value: integer
      description: >
        The target number of running instances for this managed instance group. You can reduce this number by using the instanceGroupManager deleteInstances or abandonInstances methods. Resizing the group also changes this number.
        
    - name: instanceFlexibilityPolicy
      value: object
      description: >
        Instance flexibility allowing MIG to create VMs from multiple types of machines. Instance flexibility configuration on MIG overrides instance template configuration.
        
    - name: targetStoppedSize
      value: integer
      description: >
        The target number of stopped instances for this managed instance group. This number changes when you: - Stop instance using the stopInstances method or start instances using the startInstances method. - Manually change the targetStoppedSize using the update method. 
        
    - name: targetSuspendedSize
      value: integer
      description: >
        The target number of suspended instances for this managed instance group. This number changes when you: - Suspend instance using the suspendInstances method or resume instances using the resumeInstances method. - Manually change the targetSuspendedSize using the update method. 
        
    - name: listManagedInstancesResults
      value: string
      description: >
        Pagination behavior of the listManagedInstances API method for this managed instance group.
        
      valid_values: ['PAGELESS', 'PAGINATED']
    - name: standbyPolicy
      value: object
      description: >
        Standby policy for stopped and suspended instances.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] The URL for this managed instance group. The server defines this URL.
        
    - name: autoHealingPolicies
      value: array
      description: >
        The autohealing policy for this managed instance group. You can specify only one value.
        
    - name: updatePolicy
      value: object
      description: >
        The update policy for this managed instance group.
        
    - name: namedPorts
      value: array
      description: >
        [Output Only] Named ports configured on the Instance Groups complementary to this Instance Group Manager.
        
    - name: statefulPolicy
      value: object
      description: >
        Stateful configuration for this Instanced Group Manager
        
    - name: instanceLifecyclePolicy
      value: object
      description: >
        The repair policy for this managed instance group.
        
    - name: satisfiesPzi
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: resourcePolicies
      value: object
      description: >
        Resource policies for this managed instance group.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'patch_per_instance_configs', value: 'patch_per_instance_configs' }
    ]}
>
<TabItem value="patch">

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

```sql
UPDATE google.compute.instance_group_managers
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__zone = '{{ zone }}',
data__region = '{{ region }}',
data__distributionPolicy = '{{ distributionPolicy }}',
data__instanceTemplate = '{{ instanceTemplate }}',
data__versions = '{{ versions }}',
data__allInstancesConfig = '{{ allInstancesConfig }}',
data__instanceGroup = '{{ instanceGroup }}',
data__targetPools = '{{ targetPools }}',
data__baseInstanceName = '{{ baseInstanceName }}',
data__fingerprint = '{{ fingerprint }}',
data__currentActions = '{{ currentActions }}',
data__status = '{{ status }}',
data__targetSize = {{ targetSize }},
data__instanceFlexibilityPolicy = '{{ instanceFlexibilityPolicy }}',
data__targetStoppedSize = {{ targetStoppedSize }},
data__targetSuspendedSize = {{ targetSuspendedSize }},
data__listManagedInstancesResults = '{{ listManagedInstancesResults }}',
data__standbyPolicy = '{{ standbyPolicy }}',
data__selfLink = '{{ selfLink }}',
data__autoHealingPolicies = '{{ autoHealingPolicies }}',
data__updatePolicy = '{{ updatePolicy }}',
data__namedPorts = '{{ namedPorts }}',
data__statefulPolicy = '{{ statefulPolicy }}',
data__instanceLifecyclePolicy = '{{ instanceLifecyclePolicy }}',
data__satisfiesPzi = {{ satisfiesPzi }},
data__satisfiesPzs = {{ satisfiesPzs }},
data__resourcePolicies = '{{ resourcePolicies }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
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
<TabItem value="patch_per_instance_configs">

Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

```sql
UPDATE google.compute.instance_group_managers
SET 
data__perInstanceConfigs = '{{ perInstanceConfigs }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
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

Deletes the specified managed instance group and all of the instances in that group.

```sql
DELETE FROM google.compute.instance_group_managers
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="suspend_instances"
    values={[
        { label: 'suspend_instances', value: 'suspend_instances' },
        { label: 'resume_instances', value: 'resume_instances' },
        { label: 'stop_instances', value: 'stop_instances' },
        { label: 'start_instances', value: 'start_instances' },
        { label: 'abandon_instances', value: 'abandon_instances' },
        { label: 'recreate_instances', value: 'recreate_instances' },
        { label: 'resize', value: 'resize' },
        { label: 'set_instance_template', value: 'set_instance_template' },
        { label: 'set_target_pools', value: 'set_target_pools' },
        { label: 'apply_updates_to_instances', value: 'apply_updates_to_instances' }
    ]}
>
<TabItem value="suspend_instances">

Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.suspend_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}", 
"forceSuspend": {{ forceSuspend }}
}';
```
</TabItem>
<TabItem value="resume_instances">

Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.resume_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}"
}';
```
</TabItem>
<TabItem value="stop_instances">

Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.stop_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}", 
"forceStop": {{ forceStop }}
}';
```
</TabItem>
<TabItem value="start_instances">

Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.start_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}"
}';
```
</TabItem>
<TabItem value="abandon_instances">

Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.abandon_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}"
}';
```
</TabItem>
<TabItem value="recreate_instances">

Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

```sql
EXEC google.compute.instance_group_managers.recreate_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instances": "{{ instances }}"
}';
```
</TabItem>
<TabItem value="resize">

Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

```sql
EXEC google.compute.instance_group_managers.resize 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@size='{{ size }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="set_instance_template">

Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.

```sql
EXEC google.compute.instance_group_managers.set_instance_template 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"instanceTemplate": "{{ instanceTemplate }}"
}';
```
</TabItem>
<TabItem value="set_target_pools">

Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.

```sql
EXEC google.compute.instance_group_managers.set_target_pools 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"targetPools": "{{ targetPools }}", 
"fingerprint": "{{ fingerprint }}"
}';
```
</TabItem>
<TabItem value="apply_updates_to_instances">

Apply updates to selected instances the managed instance group.

```sql
EXEC google.compute.instance_group_managers.apply_updates_to_instances 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"minimalAction": "{{ minimalAction }}", 
"mostDisruptiveAllowedAction": "{{ mostDisruptiveAllowedAction }}", 
"allInstances": {{ allInstances }}
}';
```
</TabItem>
</Tabs>
