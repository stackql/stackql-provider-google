--- 
title: backend_buckets_signed_url_key
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_buckets_signed_url_key
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

Creates, updates, deletes, gets or lists a <code>backend_buckets_signed_url_key</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backend_buckets_signed_url_key</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.backend_buckets_signed_url_key" /></td></tr>
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
    <td><a href="#add_signed_url_key"><CopyableCode code="add_signed_url_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds a key for validating requests with signed URLs for this backend bucket.</td>
</tr>
<tr>
    <td><a href="#delete_signed_url_key"><CopyableCode code="delete_signed_url_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a>, <a href="#parameter-keyName"><code>keyName</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a key for validating requests with signed URLs for this backend bucket.</td>
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
<tr id="parameter-backendBucket">
    <td><CopyableCode code="backendBucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyName">
    <td><CopyableCode code="keyName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="add_signed_url_key"
    values={[
        { label: 'add_signed_url_key', value: 'add_signed_url_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_signed_url_key">

Adds a key for validating requests with signed URLs for this backend bucket.

```sql
INSERT INTO google.compute.backend_buckets_signed_url_key (
data__keyName,
data__keyValue,
project,
backendBucket,
requestId
)
SELECT 
'{{ keyName }}',
'{{ keyValue }}',
'{{ project }}',
'{{ backendBucket }}',
'{{ requestId }}'
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
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: backend_buckets_signed_url_key
  props:
    - name: project
      value: string
      description: Required parameter for the backend_buckets_signed_url_key resource.
    - name: backendBucket
      value: string
      description: Required parameter for the backend_buckets_signed_url_key resource.
    - name: keyName
      value: string
      description: >
        Name of the key. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: keyValue
      value: string
      description: >
        128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_signed_url_key"
    values={[
        { label: 'delete_signed_url_key', value: 'delete_signed_url_key' }
    ]}
>
<TabItem value="delete_signed_url_key">

Deletes a key for validating requests with signed URLs for this backend bucket.

```sql
DELETE FROM google.compute.backend_buckets_signed_url_key
WHERE project = '{{ project }}' --required
AND backendBucket = '{{ backendBucket }}' --required
AND keyName = '{{ keyName }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
