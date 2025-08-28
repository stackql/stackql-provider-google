--- 
title: private_clouds_dns_forwarding
hide_title: false
hide_table_of_contents: false
keywords:
  - private_clouds_dns_forwarding
  - vmwareengine
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

Creates, updates, deletes, gets or lists a <code>private_clouds_dns_forwarding</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>private_clouds_dns_forwarding</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.private_clouds_dns_forwarding" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dns_forwarding"
    values={[
        { label: 'get_dns_forwarding', value: 'get_dns_forwarding' }
    ]}
>
<TabItem value="get_dns_forwarding">

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
    <td>Output only. Identifier. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingRules" /></td>
    <td><code>array</code></td>
    <td>Required. List of domain mappings to configure</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td><a href="#get_dns_forwarding"><CopyableCode code="get_dns_forwarding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Gets details of the `DnsForwarding` config.</td>
</tr>
<tr>
    <td><a href="#update_dns_forwarding"><CopyableCode code="update_dns_forwarding" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of the `DnsForwarding` config, like associated domains. Only fields specified in `update_mask` are applied.</td>
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
<tr id="parameter-privateCloudsId">
    <td><CopyableCode code="privateCloudsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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
    defaultValue="get_dns_forwarding"
    values={[
        { label: 'get_dns_forwarding', value: 'get_dns_forwarding' }
    ]}
>
<TabItem value="get_dns_forwarding">

Gets details of the `DnsForwarding` config.

```sql
SELECT
name,
createTime,
forwardingRules,
updateTime
FROM google.vmwareengine.private_clouds_dns_forwarding
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dns_forwarding"
    values={[
        { label: 'update_dns_forwarding', value: 'update_dns_forwarding' }
    ]}
>
<TabItem value="update_dns_forwarding">

Updates the parameters of the `DnsForwarding` config, like associated domains. Only fields specified in `update_mask` are applied.

```sql
UPDATE google.vmwareengine.private_clouds_dns_forwarding
SET 
data__forwardingRules = '{{ forwardingRules }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
