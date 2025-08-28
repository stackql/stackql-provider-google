--- 
title: provisioning_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_quotas
  - baremetalsolution
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

Creates, updates, deletes, gets or lists a <code>provisioning_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>provisioning_quotas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.baremetalsolution.provisioning_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the provisioning quota.</td>
</tr>
<tr>
    <td><CopyableCode code="assetType" /></td>
    <td><code>string</code></td>
    <td>The asset type of this provisioning quota.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The available count of the provisioning quota.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpService" /></td>
    <td><code>string</code></td>
    <td>The gcp service of the provisioning quota.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceQuota" /></td>
    <td><code>object</code></td>
    <td>Instance quota. (id: InstanceQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The specific location of the provisioining quota.</td>
</tr>
<tr>
    <td><CopyableCode code="networkBandwidth" /></td>
    <td><code>string (int64)</code></td>
    <td>Network bandwidth, Gbps</td>
</tr>
<tr>
    <td><CopyableCode code="serverCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Server count.</td>
</tr>
<tr>
    <td><CopyableCode code="storageGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Storage size (GB).</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List the budget details to provision resources on a given project.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List the budget details to provision resources on a given project.

```sql
SELECT
name,
assetType,
availableCount,
gcpService,
instanceQuota,
location,
networkBandwidth,
serverCount,
storageGib
FROM google.baremetalsolution.provisioning_quotas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
