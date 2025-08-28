--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server. This is *not* the project ID, and is just a unique ID used by Compute Engine to identify resources.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudArmorTier" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The Cloud Armor tier for this project. It can be one of the following values: CA_STANDARD, CA_ENTERPRISE_PAYGO. If this field is not specified, it is assumed to be CA_STANDARD.</td>
</tr>
<tr>
    <td><CopyableCode code="commonInstanceMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata key/value pairs available to all instances contained in this project. See Custom metadata for more information. (id: Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultNetworkTier" /></td>
    <td><code>string</code></td>
    <td>This signifies the default network tier used for configuring resources of the project and can only take the following values: PREMIUM, STANDARD. Initially the default network tier is PREMIUM.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultServiceAccount" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Default service account used by VMs running in this project.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional textual description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledFeatures" /></td>
    <td><code>array</code></td>
    <td>An optional list of restricted features enabled for use on this project.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#project for projects. (default: compute#project)</td>
</tr>
<tr>
    <td><CopyableCode code="quotas" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Quotas assigned to this project.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="usageExportLocation" /></td>
    <td><code>object</code></td>
    <td>An optional naming prefix for daily usage reports and the Google Cloud Storage bucket where they are stored. (id: UsageExportLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="vmDnsSetting" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Default internal DNS setting used by VMs running in this project.</td>
</tr>
<tr>
    <td><CopyableCode code="xpnProjectStatus" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The role this project has in a shared VPC configuration. Currently, only projects with the host role, which is specified by the value HOST, are differentiated.</td>
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
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td></td>
    <td>Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.</td>
</tr>
<tr>
    <td><a href="#set_common_instance_metadata"><CopyableCode code="set_common_instance_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets metadata common to all instances within the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#set_usage_export_bucket"><CopyableCode code="set_usage_export_bucket" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.</td>
</tr>
<tr>
    <td><a href="#move_instance"><CopyableCode code="move_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior). [Deprecated] This method is deprecated. See [moving instance across zones](/compute/docs/instances/moving-instance-across-zones) instead.</td>
</tr>
<tr>
    <td><a href="#move_disk"><CopyableCode code="move_disk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Moves a persistent disk from one zone to another.</td>
</tr>
<tr>
    <td><a href="#enable_xpn_host"><CopyableCode code="enable_xpn_host" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Enable this project as a shared VPC host project.</td>
</tr>
<tr>
    <td><a href="#disable_xpn_host"><CopyableCode code="disable_xpn_host" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Disable this project as a shared VPC host project.</td>
</tr>
<tr>
    <td><a href="#enable_xpn_resource"><CopyableCode code="enable_xpn_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.</td>
</tr>
<tr>
    <td><a href="#disable_xpn_resource"><CopyableCode code="disable_xpn_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Disable a service resource (also known as service project) associated with this host project.</td>
</tr>
<tr>
    <td><a href="#set_default_network_tier"><CopyableCode code="set_default_network_tier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.</td>
</tr>
<tr>
    <td><a href="#set_cloud_armor_tier"><CopyableCode code="set_cloud_armor_tier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the Cloud Armor tier of the project. To set ENTERPRISE or above the billing account of the project must be subscribed to Cloud Armor Enterprise. See Subscribing to Cloud Armor Enterprise for more information.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

```sql
SELECT
id,
name,
cloudArmorTier,
commonInstanceMetadata,
creationTimestamp,
defaultNetworkTier,
defaultServiceAccount,
description,
enabledFeatures,
kind,
quotas,
selfLink,
usageExportLocation,
vmDnsSetting,
xpnProjectStatus
FROM google.compute.projects
WHERE project = '{{ project }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_common_instance_metadata"
    values={[
        { label: 'set_common_instance_metadata', value: 'set_common_instance_metadata' },
        { label: 'set_usage_export_bucket', value: 'set_usage_export_bucket' },
        { label: 'move_instance', value: 'move_instance' },
        { label: 'move_disk', value: 'move_disk' },
        { label: 'enable_xpn_host', value: 'enable_xpn_host' },
        { label: 'disable_xpn_host', value: 'disable_xpn_host' },
        { label: 'enable_xpn_resource', value: 'enable_xpn_resource' },
        { label: 'disable_xpn_resource', value: 'disable_xpn_resource' },
        { label: 'set_default_network_tier', value: 'set_default_network_tier' },
        { label: 'set_cloud_armor_tier', value: 'set_cloud_armor_tier' }
    ]}
>
<TabItem value="set_common_instance_metadata">

Sets metadata common to all instances within the specified project using the data included in the request.

```sql
EXEC google.compute.projects.set_common_instance_metadata 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"kind": "{{ kind }}", 
"fingerprint": "{{ fingerprint }}", 
"items": "{{ items }}"
}';
```
</TabItem>
<TabItem value="set_usage_export_bucket">

Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

```sql
EXEC google.compute.projects.set_usage_export_bucket 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"bucketName": "{{ bucketName }}", 
"reportNamePrefix": "{{ reportNamePrefix }}"
}';
```
</TabItem>
<TabItem value="move_instance">

Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior). [Deprecated] This method is deprecated. See [moving instance across zones](/compute/docs/instances/moving-instance-across-zones) instead.

```sql
EXEC google.compute.projects.move_instance 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"targetInstance": "{{ targetInstance }}", 
"destinationZone": "{{ destinationZone }}"
}';
```
</TabItem>
<TabItem value="move_disk">

Moves a persistent disk from one zone to another.

```sql
EXEC google.compute.projects.move_disk 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"targetDisk": "{{ targetDisk }}", 
"destinationZone": "{{ destinationZone }}"
}';
```
</TabItem>
<TabItem value="enable_xpn_host">

Enable this project as a shared VPC host project.

```sql
EXEC google.compute.projects.enable_xpn_host 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="disable_xpn_host">

Disable this project as a shared VPC host project.

```sql
EXEC google.compute.projects.disable_xpn_host 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="enable_xpn_resource">

Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.

```sql
EXEC google.compute.projects.enable_xpn_resource 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"xpnResource": "{{ xpnResource }}"
}';
```
</TabItem>
<TabItem value="disable_xpn_resource">

Disable a service resource (also known as service project) associated with this host project.

```sql
EXEC google.compute.projects.disable_xpn_resource 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"xpnResource": "{{ xpnResource }}"
}';
```
</TabItem>
<TabItem value="set_default_network_tier">

Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.

```sql
EXEC google.compute.projects.set_default_network_tier 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"networkTier": "{{ networkTier }}"
}';
```
</TabItem>
<TabItem value="set_cloud_armor_tier">

Sets the Cloud Armor tier of the project. To set ENTERPRISE or above the billing account of the project must be subscribed to Cloud Armor Enterprise. See Subscribing to Cloud Armor Enterprise for more information.

```sql
EXEC google.compute.projects.set_cloud_armor_tier 
@project='{{ project }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"cloudArmorTier": "{{ cloudArmorTier }}"
}';
```
</TabItem>
</Tabs>
