--- 
title: workload_identity_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_identity_pools
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

Creates, updates, deletes, gets or lists a <code>workload_identity_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workload_identity_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.workload_identity_pools" /></td></tr>
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

Represents a collection of workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.

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
    <td>Output only. The resource name of the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the pool. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A display name for the pool. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the workload identity pool will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="inlineCertificateIssuanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines the Certificate Authority (CA) pool resources and configurations required for issuance and rotation of mTLS workload certificates. (id: InlineCertificateIssuanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="inlineTrustConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Represents config to add additional trusted trust domains. (id: InlineTrustConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Immutable. The mode the pool is operating in.</td>
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

Response message for ListWorkloadIdentityPools.

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
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityPools" /></td>
    <td><code>array</code></td>
    <td>A list of pools.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td></td>
    <td>Gets an individual WorkloadIdentityPool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-workloadIdentityPoolId"><code>workloadIdentityPoolId</code></a></td>
    <td>Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkloadIdentityPool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td></td>
    <td>Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td></td>
    <td>Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadIdentityPoolsId">
    <td><CopyableCode code="workloadIdentityPoolsId" /></td>
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
<tr id="parameter-workloadIdentityPoolId">
    <td><CopyableCode code="workloadIdentityPoolId" /></td>
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

Gets an individual WorkloadIdentityPool.

```sql
SELECT
name,
description,
disabled,
displayName,
expireTime,
inlineCertificateIssuanceConfig,
inlineTrustConfig,
mode,
state
FROM google.iam.workload_identity_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.

```sql
SELECT
nextPageToken,
workloadIdentityPools
FROM google.iam.workload_identity_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.

```sql
INSERT INTO google.iam.workload_identity_pools (
data__displayName,
data__description,
data__disabled,
data__mode,
data__inlineCertificateIssuanceConfig,
data__inlineTrustConfig,
projectsId,
locationsId,
workloadIdentityPoolId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
{{ disabled }},
'{{ mode }}',
'{{ inlineCertificateIssuanceConfig }}',
'{{ inlineTrustConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workloadIdentityPoolId }}'
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
- name: workload_identity_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workload_identity_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the workload_identity_pools resource.
    - name: displayName
      value: string
      description: >
        Optional. A display name for the pool. Cannot exceed 32 characters.
        
    - name: description
      value: string
      description: >
        Optional. A description of the pool. Cannot exceed 256 characters.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
        
    - name: mode
      value: string
      description: >
        Immutable. The mode the pool is operating in.
        
      valid_values: ['MODE_UNSPECIFIED', 'FEDERATION_ONLY', 'TRUST_DOMAIN']
    - name: inlineCertificateIssuanceConfig
      value: object
      description: >
        Optional. Defines the Certificate Authority (CA) pool resources and configurations required for issuance and rotation of mTLS workload certificates.
        
    - name: inlineTrustConfig
      value: object
      description: >
        Optional. Represents config to add additional trusted trust domains.
        
    - name: workloadIdentityPoolId
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

Updates an existing WorkloadIdentityPool.

```sql
UPDATE google.iam.workload_identity_pools
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__mode = '{{ mode }}',
data__inlineCertificateIssuanceConfig = '{{ inlineCertificateIssuanceConfig }}',
data__inlineTrustConfig = '{{ inlineTrustConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
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

Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.

```sql
DELETE FROM google.iam.workload_identity_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required;
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

Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.workload_identity_pools.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadIdentityPoolsId='{{ workloadIdentityPoolsId }}' --required;
```
</TabItem>
</Tabs>
