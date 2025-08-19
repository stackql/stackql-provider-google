--- 
title: instances_network_interface
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_network_interface
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

Creates, updates, deletes, gets or lists an <code>instances_network_interface</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_network_interface</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_network_interface" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_network_interface"><CopyableCode code="update_network_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-networkInterface"><code>networkInterface</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkInterface">
    <td><CopyableCode code="networkInterface" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_network_interface"
    values={[
        { label: 'update_network_interface', value: 'update_network_interface' }
    ]}
>
<TabItem value="update_network_interface">

Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.

```sql
UPDATE google.compute.instances_network_interface
SET 
data__kind = '{{ kind }}',
data__network = '{{ network }}',
data__subnetwork = '{{ subnetwork }}',
data__networkIP = '{{ networkIP }}',
data__ipv6Address = '{{ ipv6Address }}',
data__internalIpv6PrefixLength = {{ internalIpv6PrefixLength }},
data__name = '{{ name }}',
data__accessConfigs = '{{ accessConfigs }}',
data__ipv6AccessConfigs = '{{ ipv6AccessConfigs }}',
data__aliasIpRanges = '{{ aliasIpRanges }}',
data__fingerprint = '{{ fingerprint }}',
data__stackType = '{{ stackType }}',
data__ipv6AccessType = '{{ ipv6AccessType }}',
data__queueCount = {{ queueCount }},
data__nicType = '{{ nicType }}',
data__networkAttachment = '{{ networkAttachment }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instance = '{{ instance }}' --required
AND networkInterface = '{{ networkInterface }}' --required
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
