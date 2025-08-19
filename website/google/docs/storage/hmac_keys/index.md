--- 
title: hmac_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - hmac_keys
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

Creates, updates, deletes, gets or lists a <code>hmac_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hmac_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.hmac_keys" /></td></tr>
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

JSON template to produce a JSON-style HMAC Key metadata resource.

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
    <td>The ID of the HMAC key, including the Project ID and the Access ID.</td>
</tr>
<tr>
    <td><CopyableCode code="accessId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HMAC Key.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for the HMAC key.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata. (default: storage#hmacKeyMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Project ID owning the service account to which the key authenticates.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>The email address of the key's associated service account.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the HMAC key in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modification time of the HMAC key metadata in RFC 3339 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of hmacKeys.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata. (default: storage#hmacKeysMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-accessId"><code>accessId</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Retrieves an HMAC key's metadata</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-serviceAccountEmail"><code>serviceAccountEmail</code></a>, <a href="#parameter-showDeletedKeys"><code>showDeletedKeys</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Retrieves a list of HMAC keys matching the criteria.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-serviceAccountEmail"><code>serviceAccountEmail</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Creates a new HMAC key for the specified service account.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-accessId"><code>accessId</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys/update#request-body) for valid states.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-accessId"><code>accessId</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Deletes an HMAC key.</td>
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
<tr id="parameter-accessId">
    <td><CopyableCode code="accessId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceAccountEmail">
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceAccountEmail">
    <td><CopyableCode code="serviceAccountEmail" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeletedKeys">
    <td><CopyableCode code="showDeletedKeys" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
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

Retrieves an HMAC key's metadata

```sql
SELECT
id,
accessId,
etag,
kind,
projectId,
selfLink,
serviceAccountEmail,
state,
timeCreated,
updated
FROM google.storage.hmac_keys
WHERE projectId = '{{ projectId }}' -- required
AND accessId = '{{ accessId }}' -- required
AND userProject = '{{ userProject }}';
```
</TabItem>
<TabItem value="list">

Retrieves a list of HMAC keys matching the criteria.

```sql
SELECT
items,
kind,
nextPageToken
FROM google.storage.hmac_keys
WHERE projectId = '{{ projectId }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND serviceAccountEmail = '{{ serviceAccountEmail }}'
AND showDeletedKeys = '{{ showDeletedKeys }}'
AND userProject = '{{ userProject }}';
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

Creates a new HMAC key for the specified service account.

```sql
INSERT INTO google.storage.hmac_keys (
projectId,
serviceAccountEmail,
userProject
)
SELECT 
'{{ projectId }}',
'{{ serviceAccountEmail }}',
'{{ userProject }}'
RETURNING
kind,
metadata,
secret
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: hmac_keys
  props:
    - name: projectId
      value: string
      description: Required parameter for the hmac_keys resource.
    - name: serviceAccountEmail
      value: string
      description: Required parameter for the hmac_keys resource.
    - name: userProject
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys/update#request-body) for valid states.

```sql
REPLACE google.storage.hmac_keys
SET 
data__accessId = '{{ accessId }}',
data__etag = '{{ etag }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__projectId = '{{ projectId }}',
data__selfLink = '{{ selfLink }}',
data__serviceAccountEmail = '{{ serviceAccountEmail }}',
data__state = '{{ state }}',
data__timeCreated = '{{ timeCreated }}',
data__updated = '{{ updated }}'
WHERE 
projectId = '{{ projectId }}' --required
AND accessId = '{{ accessId }}' --required
AND userProject = '{{ userProject}}'
RETURNING
id,
accessId,
etag,
kind,
projectId,
selfLink,
serviceAccountEmail,
state,
timeCreated,
updated;
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

Deletes an HMAC key.

```sql
DELETE FROM google.storage.hmac_keys
WHERE projectId = '{{ projectId }}' --required
AND accessId = '{{ accessId }}' --required
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>
