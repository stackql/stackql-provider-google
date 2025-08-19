--- 
title: xpn_host
hide_title: false
hide_table_of_contents: false
keywords:
  - xpn_host
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

Creates, updates, deletes, gets or lists a <code>xpn_host</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>xpn_host</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.xpn_host" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_xpn_host"
    values={[
        { label: 'get_xpn_host', value: 'get_xpn_host' }
    ]}
>
<TabItem value="get_xpn_host">

Represents a Project resource. A project is used to organize resources in a Google Cloud Platform environment. For more information, read about the Resource Hierarchy.

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
    <td><a href="#get_xpn_host"><CopyableCode code="get_xpn_host" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td></td>
    <td>Gets the shared VPC host project that this project links to. May be empty if no link exists.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_xpn_host"
    values={[
        { label: 'get_xpn_host', value: 'get_xpn_host' }
    ]}
>
<TabItem value="get_xpn_host">

Gets the shared VPC host project that this project links to. May be empty if no link exists.

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
FROM google.compute.xpn_host
WHERE project = '{{ project }}' -- required;
```
</TabItem>
</Tabs>
