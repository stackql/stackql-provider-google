--- 
title: anywhere_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - anywhere_caches
  - storage
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

Creates, updates, deletes, gets or lists an <code>anywhere_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>anywhere_caches</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.anywhere_caches" /></td></tr>
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
    <td><code>string</code></td>
    <td>The ID of the resource, including the project number, bucket name and anywhere cache ID.</td>
</tr>
<tr>
    <td><CopyableCode code="admissionPolicy" /></td>
    <td><code>string</code></td>
    <td>The cache-level entry admission policy.</td>
</tr>
<tr>
    <td><CopyableCode code="anywhereCacheId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anywhere cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the cache instance in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For Anywhere Cache, this is always storage#anywhereCache. (default: storage#anywhereCache)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingUpdate" /></td>
    <td><code>boolean</code></td>
    <td>True if the cache instance has an active Update long-running operation.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The TTL of all cache entries in whole seconds. e.g., "7200s". </td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the cache instance metadata in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>The zone in which the cache instance is running. For example, us-central1-a.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource, including the project number, bucket name and anywhere cache ID.</td>
</tr>
<tr>
    <td><CopyableCode code="admissionPolicy" /></td>
    <td><code>string</code></td>
    <td>The cache-level entry admission policy.</td>
</tr>
<tr>
    <td><CopyableCode code="anywhereCacheId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anywhere cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the cache instance in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For Anywhere Cache, this is always storage#anywhereCache. (default: storage#anywhereCache)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingUpdate" /></td>
    <td><code>boolean</code></td>
    <td>True if the cache instance has an active Update long-running operation.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The TTL of all cache entries in whole seconds. e.g., "7200s". </td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the cache instance metadata in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>The zone in which the cache instance is running. For example, us-central1-a.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-anywhereCacheId"><code>anywhereCacheId</code></a></td>
    <td></td>
    <td>Returns the metadata of an Anywhere Cache instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of Anywhere Cache instances of the bucket matching the criteria.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Creates an Anywhere Cache instance.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-anywhereCacheId"><code>anywhereCacheId</code></a></td>
    <td></td>
    <td>Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-anywhereCacheId"><code>anywhereCacheId</code></a></td>
    <td></td>
    <td>Pauses an Anywhere Cache instance.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-anywhereCacheId"><code>anywhereCacheId</code></a></td>
    <td></td>
    <td>Resumes a paused or disabled Anywhere Cache instance.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-anywhereCacheId"><code>anywhereCacheId</code></a></td>
    <td></td>
    <td>Disables an Anywhere Cache instance.</td>
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
<tr id="parameter-anywhereCacheId">
    <td><CopyableCode code="anywhereCacheId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the metadata of an Anywhere Cache instance.

```sql
SELECT
id,
admissionPolicy,
anywhereCacheId,
bucket,
createTime,
kind,
pendingUpdate,
selfLink,
state,
ttl,
updateTime,
zone
FROM google.storage.anywhere_caches
WHERE bucket = '{{ bucket }}' -- required
AND anywhereCacheId = '{{ anywhereCacheId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns a list of Anywhere Cache instances of the bucket matching the criteria.

```sql
SELECT
id,
admissionPolicy,
anywhereCacheId,
bucket,
createTime,
kind,
pendingUpdate,
selfLink,
state,
ttl,
updateTime,
zone
FROM google.storage.anywhere_caches
WHERE bucket = '{{ bucket }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates an Anywhere Cache instance.

```sql
INSERT INTO google.storage.anywhere_caches (
data__kind,
data__id,
data__selfLink,
data__bucket,
data__anywhereCacheId,
data__zone,
data__state,
data__createTime,
data__updateTime,
data__ttl,
data__admissionPolicy,
data__pendingUpdate,
bucket
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ selfLink }}',
'{{ bucket }}',
'{{ anywhereCacheId }}',
'{{ zone }}',
'{{ state }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ ttl }}',
'{{ admissionPolicy }}',
{{ pendingUpdate }},
'{{ bucket }}'
RETURNING
name,
done,
error,
kind,
metadata,
response,
selfLink
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: anywhere_caches
  props:
    - name: bucket
      value: string
      description: Required parameter for the anywhere_caches resource.
    - name: kind
      value: string
      description: >
        The kind of item this is. For Anywhere Cache, this is always storage#anywhereCache.
        
      default: storage#anywhereCache
    - name: id
      value: string
      description: >
        The ID of the resource, including the project number, bucket name and anywhere cache ID.
        
    - name: selfLink
      value: string
      description: >
        The link to this cache instance.
        
    - name: bucket
      value: string
      description: >
        The name of the bucket containing this cache instance.
        
    - name: anywhereCacheId
      value: string
      description: >
        The ID of the Anywhere cache instance.
        
    - name: zone
      value: string
      description: >
        The zone in which the cache instance is running. For example, us-central1-a.
        
    - name: state
      value: string
      description: >
        The current state of the cache instance.
        
    - name: createTime
      value: string
      description: >
        The creation time of the cache instance in RFC 3339 format.
        
    - name: updateTime
      value: string
      description: >
        The modification time of the cache instance metadata in RFC 3339 format.
        
    - name: ttl
      value: string
      description: >
        The TTL of all cache entries in whole seconds. e.g., "7200s". 
        
    - name: admissionPolicy
      value: string
      description: >
        The cache-level entry admission policy.
        
    - name: pendingUpdate
      value: boolean
      description: >
        True if the cache instance has an active Update long-running operation.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.

```sql
UPDATE google.storage.anywhere_caches
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__selfLink = '{{ selfLink }}',
data__bucket = '{{ bucket }}',
data__anywhereCacheId = '{{ anywhereCacheId }}',
data__zone = '{{ zone }}',
data__state = '{{ state }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
data__ttl = '{{ ttl }}',
data__admissionPolicy = '{{ admissionPolicy }}',
data__pendingUpdate = {{ pendingUpdate }}
WHERE 
bucket = '{{ bucket }}' --required
AND anywhereCacheId = '{{ anywhereCacheId }}' --required
RETURNING
name,
done,
error,
kind,
metadata,
response,
selfLink;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause"
    values={[
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' },
        { label: 'disable', value: 'disable' }
    ]}
>
<TabItem value="pause">

Pauses an Anywhere Cache instance.

```sql
EXEC google.storage.anywhere_caches.pause 
@bucket='{{ bucket }}' --required, 
@anywhereCacheId='{{ anywhereCacheId }}' --required;
```
</TabItem>
<TabItem value="resume">

Resumes a paused or disabled Anywhere Cache instance.

```sql
EXEC google.storage.anywhere_caches.resume 
@bucket='{{ bucket }}' --required, 
@anywhereCacheId='{{ anywhereCacheId }}' --required;
```
</TabItem>
<TabItem value="disable">

Disables an Anywhere Cache instance.

```sql
EXEC google.storage.anywhere_caches.disable 
@bucket='{{ bucket }}' --required, 
@anywhereCacheId='{{ anywhereCacheId }}' --required;
```
</TabItem>
</Tabs>
