--- 
title: workforce_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - workforce_pools
  - iam
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

Creates, updates, deletes, gets or lists a <code>workforce_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workforce_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.workforce_pools" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the pool. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="accessRestrictions" /></td>
    <td><code>object</code></td>
    <td>Optional. Configure access restrictions on the workforce pool users. This is an optional field. If specified web sign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users. (id: AccessRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified description of the pool. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the workforce pool will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the parent. Format: `organizations/&#123;org-id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Duration that the Google Cloud access tokens, console sign-in sessions, and `gcloud` sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the `session_duration` and the `SessionNotOnOrAfter` claim in the SAML assertion.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the pool.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the pool. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="accessRestrictions" /></td>
    <td><code>object</code></td>
    <td>Optional. Configure access restrictions on the workforce pool users. This is an optional field. If specified web sign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users. (id: AccessRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified description of the pool. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the workforce pool will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the parent. Format: `organizations/&#123;org-id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Duration that the Google Cloud access tokens, console sign-in sessions, and `gcloud` sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the `session_duration` and the `SessionNotOnOrAfter` claim in the SAML assertion.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the pool.</td>
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
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a></td>
    <td></td>
    <td>Gets an individual WorkforcePool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-workforcePoolId"><code>workforcePoolId</code></a></td>
    <td>Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkforcePool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a></td>
    <td></td>
    <td>Deletes a WorkforcePool. You cannot use a deleted WorkforcePool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a></td>
    <td></td>
    <td>Undeletes a WorkforcePool, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-workforcePoolsId">
    <td><CopyableCode code="workforcePoolsId" /></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-workforcePoolId">
    <td><CopyableCode code="workforcePoolId" /></td>
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

Gets an individual WorkforcePool.

```sql
SELECT
name,
accessRestrictions,
description,
disabled,
displayName,
expireTime,
parent,
sessionDuration,
state
FROM google.iam.workforce_pools
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.

```sql
SELECT
name,
accessRestrictions,
description,
disabled,
displayName,
expireTime,
parent,
sessionDuration,
state
FROM google.iam.workforce_pools
WHERE locationsId = '{{ locationsId }}' -- required
AND parent = '{{ parent }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.

```sql
INSERT INTO google.iam.workforce_pools (
data__name,
data__parent,
data__displayName,
data__description,
data__disabled,
data__sessionDuration,
data__accessRestrictions,
locationsId,
workforcePoolId
)
SELECT 
'{{ name }}',
'{{ parent }}',
'{{ displayName }}',
'{{ description }}',
{{ disabled }},
'{{ sessionDuration }}',
'{{ accessRestrictions }}',
'{{ locationsId }}',
'{{ workforcePoolId }}'
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
- name: workforce_pools
  props:
    - name: locationsId
      value: string
      description: Required parameter for the workforce_pools resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
        
    - name: parent
      value: string
      description: >
        Immutable. The resource name of the parent. Format: `organizations/{org-id}`.
        
    - name: displayName
      value: string
      description: >
        Optional. A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.
        
    - name: description
      value: string
      description: >
        Optional. A user-specified description of the pool. Cannot exceed 256 characters.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
        
    - name: sessionDuration
      value: string
      description: >
        Optional. Duration that the Google Cloud access tokens, console sign-in sessions, and `gcloud` sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the `session_duration` and the `SessionNotOnOrAfter` claim in the SAML assertion.
        
    - name: accessRestrictions
      value: object
      description: >
        Optional. Configure access restrictions on the workforce pool users. This is an optional field. If specified web sign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users.
        
    - name: workforcePoolId
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

Updates an existing WorkforcePool.

```sql
UPDATE google.iam.workforce_pools
SET 
data__name = '{{ name }}',
data__parent = '{{ parent }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__sessionDuration = '{{ sessionDuration }}',
data__accessRestrictions = '{{ accessRestrictions }}'
WHERE 
locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
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

Deletes a WorkforcePool. You cannot use a deleted WorkforcePool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.

```sql
DELETE FROM google.iam.workforce_pools
WHERE locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes a WorkforcePool, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.workforce_pools.undelete 
@locationsId='{{ locationsId }}' --required, 
@workforcePoolsId='{{ workforcePoolsId }}' --required;
```
</TabItem>
</Tabs>
