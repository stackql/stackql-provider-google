--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - vpcaccess
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vpcaccess.connectors" /></td></tr>
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

Definition of a Serverless VPC Access connector.

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
    <td>The resource name in the format `projects/*/locations/*/connectors/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="connectedProjects" /></td>
    <td><code>array</code></td>
    <td>Output only. List of projects using the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.</td>
</tr>
<tr>
    <td><CopyableCode code="machineType" /></td>
    <td><code>string</code></td>
    <td>Machine type of VM Instance underlying connector. Default is e2-micro</td>
</tr>
<tr>
    <td><CopyableCode code="maxInstances" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum value of instances in autoscaling group underlying the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="maxThroughput" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of `max-throughput` is discouraged in favor of `max-instances`.</td>
</tr>
<tr>
    <td><CopyableCode code="minInstances" /></td>
    <td><code>integer (int32)</code></td>
    <td>Minimum value of instances in autoscaling group underlying the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="minThroughput" /></td>
    <td><code>integer (int32)</code></td>
    <td>Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of `min-throughput` is discouraged in favor of `min-instances`.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of a VPC network.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the VPC access connector.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet" /></td>
    <td><code>object</code></td>
    <td>Optional. The subnet in which to house the VPC Access Connector. (id: Subnet)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for listing Serverless VPC Access connectors.

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
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>List of Serverless VPC Access connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Continuation token.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Serverless VPC Access connectors.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectorId"><code>connectorId</code></a></td>
    <td>Creates a Serverless VPC Access connector, returns an operation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Serverless VPC Access connector, returns an operation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.</td>
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
<tr id="parameter-connectorsId">
    <td><CopyableCode code="connectorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-connectorId">
    <td><CopyableCode code="connectorId" /></td>
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

Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

```sql
SELECT
name,
connectedProjects,
ipCidrRange,
machineType,
maxInstances,
maxThroughput,
minInstances,
minThroughput,
network,
state,
subnet
FROM google.vpcaccess.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectorsId = '{{ connectorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Serverless VPC Access connectors.

```sql
SELECT
connectors,
nextPageToken
FROM google.vpcaccess.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a Serverless VPC Access connector, returns an operation.

```sql
INSERT INTO google.vpcaccess.connectors (
data__name,
data__network,
data__ipCidrRange,
data__minThroughput,
data__maxThroughput,
data__subnet,
data__machineType,
data__minInstances,
data__maxInstances,
projectsId,
locationsId,
connectorId
)
SELECT 
'{{ name }}',
'{{ network }}',
'{{ ipCidrRange }}',
{{ minThroughput }},
{{ maxThroughput }},
'{{ subnet }}',
'{{ machineType }}',
{{ minInstances }},
{{ maxInstances }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectorId }}'
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
- name: connectors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connectors resource.
    - name: locationsId
      value: string
      description: Required parameter for the connectors resource.
    - name: name
      value: string
      description: >
        The resource name in the format `projects/*/locations/*/connectors/*`.
        
    - name: network
      value: string
      description: >
        Optional. Name of a VPC network.
        
    - name: ipCidrRange
      value: string
      description: >
        Optional. The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
        
    - name: minThroughput
      value: integer
      description: >
        Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of `min-throughput` is discouraged in favor of `min-instances`.
        
    - name: maxThroughput
      value: integer
      description: >
        Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of `max-throughput` is discouraged in favor of `max-instances`.
        
    - name: subnet
      value: object
      description: >
        Optional. The subnet in which to house the VPC Access Connector.
        
    - name: machineType
      value: string
      description: >
        Machine type of VM Instance underlying connector. Default is e2-micro
        
    - name: minInstances
      value: integer
      description: >
        Minimum value of instances in autoscaling group underlying the connector.
        
    - name: maxInstances
      value: integer
      description: >
        Maximum value of instances in autoscaling group underlying the connector.
        
    - name: connectorId
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

Updates a Serverless VPC Access connector, returns an operation.

```sql
UPDATE google.vpcaccess.connectors
SET 
data__name = '{{ name }}',
data__network = '{{ network }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__minThroughput = {{ minThroughput }},
data__maxThroughput = {{ maxThroughput }},
data__subnet = '{{ subnet }}',
data__machineType = '{{ machineType }}',
data__minInstances = {{ minInstances }},
data__maxInstances = {{ maxInstances }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectorsId = '{{ connectorsId }}' --required
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

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

```sql
DELETE FROM google.vpcaccess.connectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectorsId = '{{ connectorsId }}' --required;
```
</TabItem>
</Tabs>
