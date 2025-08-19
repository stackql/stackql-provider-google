--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - secretmanager
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.secretmanager.versions" /></td></tr>
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

A secret version resource in the Secret Manager API.

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
    <td>Output only. The resource name of the SecretVersion in the format `projects/*/secrets/*/versions/*`. SecretVersion IDs in a Secret start at 1 and are incremented for each subsequent version of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="clientSpecifiedPayloadChecksum" /></td>
    <td><code>boolean</code></td>
    <td>Output only. True if payload checksum specified in SecretPayload object has been received by SecretManagerService on SecretManagerService.AddSecretVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SecretVersion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryption" /></td>
    <td><code>object</code></td>
    <td>Output only. The customer-managed encryption status of the SecretVersion. Only populated if customer-managed encryption is used and Secret is a regionalized secret. (id: CustomerManagedEncryptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="destroyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this SecretVersion was destroyed. Only present if state is DESTROYED.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag of the currently stored SecretVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationStatus" /></td>
    <td><code>object</code></td>
    <td>The replication status of the SecretVersion. (id: ReplicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledDestroyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. Scheduled destroy time for secret version. This is a part of the Delayed secret version destroy feature. For a Secret with a valid version destroy TTL, when a secert version is destroyed, version is moved to disabled state and it is scheduled for destruction Version is destroyed only after the scheduled_destroy_time.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the SecretVersion.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for SecretManagerService.ListSecretVersions.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results. Pass this value in ListSecretVersionsRequest.page_token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of SecretVersions but 0 when the ListSecretsRequest.filter field is set.</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>The list of SecretVersions sorted in reverse by create_time (newest first).</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists SecretVersions. This call does not return secret data.</td>
</tr>
<tr>
    <td><a href="#destroy"><CopyableCode code="destroy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.</td>
</tr>
<tr>
    <td><a href="#access"><CopyableCode code="access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-secretsId">
    <td><CopyableCode code="secretsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

```sql
SELECT
name,
clientSpecifiedPayloadChecksum,
createTime,
customerManagedEncryption,
destroyTime,
etag,
replicationStatus,
scheduledDestroyTime,
state
FROM google.secretmanager.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND secretsId = '{{ secretsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists SecretVersions. This call does not return secret data.

```sql
SELECT
nextPageToken,
totalSize,
versions
FROM google.secretmanager.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND secretsId = '{{ secretsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="destroy"
    values={[
        { label: 'destroy', value: 'destroy' }
    ]}
>
<TabItem value="destroy">

Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

```sql
DELETE FROM google.secretmanager.versions
WHERE projectsId = '{{ projectsId }}' --required
AND secretsId = '{{ secretsId }}' --required
AND versionsId = '{{ versionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="access"
    values={[
        { label: 'access', value: 'access' },
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="access">

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

```sql
EXEC google.secretmanager.versions.access 
@projectsId='{{ projectsId }}' --required, 
@secretsId='{{ secretsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
<TabItem value="disable">

Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.

```sql
EXEC google.secretmanager.versions.disable 
@projectsId='{{ projectsId }}' --required, 
@secretsId='{{ secretsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="enable">

Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.

```sql
EXEC google.secretmanager.versions.enable 
@projectsId='{{ projectsId }}' --required, 
@secretsId='{{ secretsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
</Tabs>
