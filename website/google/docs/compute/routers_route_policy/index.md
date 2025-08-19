--- 
title: routers_route_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - routers_route_policy
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

Creates, updates, deletes, gets or lists a <code>routers_route_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>routers_route_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.routers_route_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route_policy"
    values={[
        { label: 'get_route_policy', value: 'get_route_policy' }
    ]}
>
<TabItem value="get_route_policy">

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
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td> (id: RoutePolicy)</td>
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
    <td><a href="#get_route_policy"><CopyableCode code="get_route_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-policy"><code>policy</code></a></td>
    <td>Returns specified Route Policy</td>
</tr>
<tr>
    <td><a href="#update_route_policy"><CopyableCode code="update_route_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates or creates new Route Policy</td>
</tr>
<tr>
    <td><a href="#delete_route_policy"><CopyableCode code="delete_route_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes Route Policy</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-router">
    <td><CopyableCode code="router" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policy">
    <td><CopyableCode code="policy" /></td>
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
    defaultValue="get_route_policy"
    values={[
        { label: 'get_route_policy', value: 'get_route_policy' }
    ]}
>
<TabItem value="get_route_policy">

Returns specified Route Policy

```sql
SELECT
resource
FROM google.compute.routers_route_policy
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND router = '{{ router }}' -- required
AND policy = '{{ policy }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route_policy"
    values={[
        { label: 'update_route_policy', value: 'update_route_policy' }
    ]}
>
<TabItem value="update_route_policy">

Updates or creates new Route Policy

```sql
UPDATE google.compute.routers_route_policy
SET 
data__name = '{{ name }}',
data__type = '{{ type }}',
data__terms = '{{ terms }}',
data__fingerprint = '{{ fingerprint }}',
data__description = '{{ description }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
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
    defaultValue="delete_route_policy"
    values={[
        { label: 'delete_route_policy', value: 'delete_route_policy' }
    ]}
>
<TabItem value="delete_route_policy">

Deletes Route Policy

```sql
DELETE FROM google.compute.routers_route_policy
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
AND policy = '{{ policy }}'
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
