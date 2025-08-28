--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - apigee
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_subscriptions_get"
    values={[
        { label: 'organizations_developers_subscriptions_get', value: 'organizations_developers_subscriptions_get' },
        { label: 'organizations_developers_subscriptions_list', value: 'organizations_developers_subscriptions_list' }
    ]}
>
<TabItem value="organizations_developers_subscriptions_get">

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
    <td>Output only. Name of the API product subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="apiproduct" /></td>
    <td><code>string</code></td>
    <td>Name of the API product for which the developer is purchasing a subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time when the API product subscription was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Time when the API product subscription ends in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time when the API product subscription was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Time when the API product subscription starts in milliseconds since epoch.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_subscriptions_list">

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
    <td><CopyableCode code="developerSubscriptions" /></td>
    <td><code>array</code></td>
    <td>List of all subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextStartKey" /></td>
    <td><code>string</code></td>
    <td>Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#organizations_developers_subscriptions_get"><CopyableCode code="organizations_developers_subscriptions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Gets details for an API product subscription.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_subscriptions_list"><CopyableCode code="organizations_developers_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td><a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-count"><code>count</code></a></td>
    <td>Lists all API product subscriptions for a developer.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_subscriptions_create"><CopyableCode code="organizations_developers_subscriptions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Creates a subscription to an API product. </td>
</tr>
<tr>
    <td><a href="#organizations_developers_subscriptions_expire"><CopyableCode code="organizations_developers_subscriptions_expire" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Expires an API product subscription immediately.</td>
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
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subscriptionsId">
    <td><CopyableCode code="subscriptionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-startKey">
    <td><CopyableCode code="startKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_subscriptions_get"
    values={[
        { label: 'organizations_developers_subscriptions_get', value: 'organizations_developers_subscriptions_get' },
        { label: 'organizations_developers_subscriptions_list', value: 'organizations_developers_subscriptions_list' }
    ]}
>
<TabItem value="organizations_developers_subscriptions_get">

Gets details for an API product subscription.

```sql
SELECT
name,
apiproduct,
createdAt,
endTime,
lastModifiedAt,
startTime
FROM google.apigee.subscriptions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND subscriptionsId = '{{ subscriptionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_developers_subscriptions_list">

Lists all API product subscriptions for a developer.

```sql
SELECT
developerSubscriptions,
nextStartKey
FROM google.apigee.subscriptions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND startKey = '{{ startKey }}'
AND count = '{{ count }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_developers_subscriptions_create"
    values={[
        { label: 'organizations_developers_subscriptions_create', value: 'organizations_developers_subscriptions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_developers_subscriptions_create">

Creates a subscription to an API product. 

```sql
INSERT INTO google.apigee.subscriptions (
data__apiproduct,
data__startTime,
data__endTime,
organizationsId,
developersId
)
SELECT 
'{{ apiproduct }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ organizationsId }}',
'{{ developersId }}'
RETURNING
name,
apiproduct,
createdAt,
endTime,
lastModifiedAt,
startTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the subscriptions resource.
    - name: developersId
      value: string
      description: Required parameter for the subscriptions resource.
    - name: apiproduct
      value: string
      description: >
        Name of the API product for which the developer is purchasing a subscription.
        
    - name: startTime
      value: string
      description: >
        Time when the API product subscription starts in milliseconds since epoch.
        
    - name: endTime
      value: string
      description: >
        Time when the API product subscription ends in milliseconds since epoch.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_developers_subscriptions_expire"
    values={[
        { label: 'organizations_developers_subscriptions_expire', value: 'organizations_developers_subscriptions_expire' }
    ]}
>
<TabItem value="organizations_developers_subscriptions_expire">

Expires an API product subscription immediately.

```sql
EXEC google.apigee.subscriptions.organizations_developers_subscriptions_expire 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required;
```
</TabItem>
</Tabs>
