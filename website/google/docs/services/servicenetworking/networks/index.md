--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
  - servicenetworking
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.networks" /></td></tr>
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
    <td><CopyableCode code="cloudsqlConfigs" /></td>
    <td><code>array</code></td>
    <td>Represents one or multiple Cloud SQL configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerExportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Export custom routes flag value for peering from consumer to producer.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerExportSubnetRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Export subnet routes with public ip flag value for peering from consumer to producer.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerImportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Import custom routes flag value for peering from consumer to producer.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerImportSubnetRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Import subnet routes with public ip flag value for peering from consumer to producer.</td>
</tr>
<tr>
    <td><CopyableCode code="producerExportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Export custom routes flag value for peering from producer to consumer.</td>
</tr>
<tr>
    <td><CopyableCode code="producerExportSubnetRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Export subnet routes with public ip flag value for peering from producer to consumer.</td>
</tr>
<tr>
    <td><CopyableCode code="producerImportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Import custom routes flag value for peering from producer to consumer.</td>
</tr>
<tr>
    <td><CopyableCode code="producerImportSubnetRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Import subnet routes with public ip flag value for peering from producer to consumer.</td>
</tr>
<tr>
    <td><CopyableCode code="producerNetwork" /></td>
    <td><code>string</code></td>
    <td>Output only. The VPC host network that is used to host managed service instances. In the format, projects/&#123;project&#125;/global/networks/&#123;network&#125; where &#123;project&#125; is the project number e.g. '12345' and &#123;network&#125; is the network name.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedRanges" /></td>
    <td><code>array</code></td>
    <td>Output only. The reserved ranges associated with this private service access connection.</td>
</tr>
<tr>
    <td><CopyableCode code="usedIpRanges" /></td>
    <td><code>array</code></td>
    <td>Output only. The IP ranges already in use by consumer or producer</td>
</tr>
<tr>
    <td><CopyableCode code="vpcScReferenceArchitectureEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the VPC Service Controls reference architecture is configured for the producer VPC host network.</td>
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
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td><a href="#parameter-includeUsedIpRanges"><code>includeUsedIpRanges</code></a></td>
    <td>Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.</td>
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
<tr id="parameter-networksId">
    <td><CopyableCode code="networksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeUsedIpRanges">
    <td><CopyableCode code="includeUsedIpRanges" /></td>
    <td><code>boolean</code></td>
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

Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

```sql
SELECT
cloudsqlConfigs,
consumerExportCustomRoutes,
consumerExportSubnetRoutesWithPublicIp,
consumerImportCustomRoutes,
consumerImportSubnetRoutesWithPublicIp,
producerExportCustomRoutes,
producerExportSubnetRoutesWithPublicIp,
producerImportCustomRoutes,
producerImportSubnetRoutesWithPublicIp,
producerNetwork,
reservedRanges,
usedIpRanges,
vpcScReferenceArchitectureEnabled
FROM google.servicenetworking.networks
WHERE servicesId = '{{ servicesId }}' -- required
AND projectsId = '{{ projectsId }}' -- required
AND networksId = '{{ networksId }}' -- required
AND includeUsedIpRanges = '{{ includeUsedIpRanges }}';
```
</TabItem>
</Tabs>
