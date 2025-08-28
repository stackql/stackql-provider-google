--- 
title: partner
hide_title: false
hide_table_of_contents: false
keywords:
  - partner
  - cloudcontrolspartner
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

Creates, updates, deletes, gets or lists a <code>partner</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partner</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcontrolspartner.partner" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partner"
    values={[
        { label: 'get_partner', value: 'get_partner' }
    ]}
>
<TabItem value="get_partner">

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
    <td>Identifier. The resource name of the partner. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/partner` Example: "organizations/123456/locations/us-central1/partner"</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the resource was created</td>
</tr>
<tr>
    <td><CopyableCode code="ekmSolutions" /></td>
    <td><code>array</code></td>
    <td>List of Google Cloud supported EKM partners supported by the partner</td>
</tr>
<tr>
    <td><CopyableCode code="operatedCloudRegions" /></td>
    <td><code>array</code></td>
    <td>List of Google Cloud regions that the partner sells services to customers. Valid Google Cloud regions found here: https://cloud.google.com/compute/docs/regions-zones</td>
</tr>
<tr>
    <td><CopyableCode code="partnerProjectId" /></td>
    <td><code>string</code></td>
    <td>Google Cloud project ID in the partner's Google Cloud organization for receiving enhanced Logs for Partners.</td>
</tr>
<tr>
    <td><CopyableCode code="skus" /></td>
    <td><code>array</code></td>
    <td>List of SKUs the partner is offering</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the resource was updated</td>
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
    <td><a href="#get_partner"><CopyableCode code="get_partner" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Get details of a Partner.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_partner"
    values={[
        { label: 'get_partner', value: 'get_partner' }
    ]}
>
<TabItem value="get_partner">

Get details of a Partner.

```sql
SELECT
name,
createTime,
ekmSolutions,
operatedCloudRegions,
partnerProjectId,
skus,
updateTime
FROM google.cloudcontrolspartner.partner
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>
