--- 
title: scim_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - scim_tenants
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

Creates, updates, deletes, gets or lists a <code>scim_tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>scim_tenants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.scim_tenants" /></td></tr>
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

Represents a scim tenant. Used for provisioning and managing identity data (such as Users and Groups) in cross-domain environments.

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
    <td>Identifier. The resource name of the SCIM Tenant. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool&#125;/providers/ &#123;workforce_pool_provider&#125;/scimTenants/&#123;scim_tenant&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="baseUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the base URI as defined in [RFC 7644, Section 1.3](https://datatracker.ietf.org/doc/html/rfc7644#section-1.3). Clients must use this as the root address for managing resources under the tenant. Format: https://iamscim.googleapis.com/&#123;version&#125;/&#123;tenant_id&#125;/</td>
</tr>
<tr>
    <td><CopyableCode code="claimMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps BYOID claims to SCIM claims.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified description of the scim tenant. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified display name of the scim tenant. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the scim tenant is going to be purged.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the tenant.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListWorkforcePoolProviderScimTenants.

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
    <td>Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="workforcePoolProviderScimTenants" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of scim tenants.</td>
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
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td></td>
    <td>Gets an individual WorkforcePoolProviderScimTenant.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkforcePoolProviderScimTenants in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted scim tenants are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-workforcePoolProviderScimTenantId"><code>workforcePoolProviderScimTenantId</code></a></td>
    <td>Creates a new WorkforcePoolProviderScimTenant in a WorkforcePoolProvider. You cannot reuse the name of a deleted scim tenant until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkforcePoolProviderScimTenant.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td></td>
    <td>Deletes a WorkforcePoolProviderScimTenant. You can undelete a scim tenant for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tenants. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td></td>
    <td>Undeletes a WorkforcePoolProviderScimTenant, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scimTenantsId">
    <td><CopyableCode code="scimTenantsId" /></td>
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
<tr id="parameter-workforcePoolProviderScimTenantId">
    <td><CopyableCode code="workforcePoolProviderScimTenantId" /></td>
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

Gets an individual WorkforcePoolProviderScimTenant.

```sql
SELECT
name,
baseUri,
claimMapping,
description,
displayName,
purgeTime,
state
FROM google.iam.scim_tenants
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
AND scimTenantsId = '{{ scimTenantsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkforcePoolProviderScimTenants in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted scim tenants are also listed.

```sql
SELECT
nextPageToken,
workforcePoolProviderScimTenants
FROM google.iam.scim_tenants
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
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

Creates a new WorkforcePoolProviderScimTenant in a WorkforcePoolProvider. You cannot reuse the name of a deleted scim tenant until 30 days after deletion.

```sql
INSERT INTO google.iam.scim_tenants (
data__name,
data__description,
data__displayName,
data__claimMapping,
locationsId,
workforcePoolsId,
providersId,
workforcePoolProviderScimTenantId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ displayName }}',
'{{ claimMapping }}',
'{{ locationsId }}',
'{{ workforcePoolsId }}',
'{{ providersId }}',
'{{ workforcePoolProviderScimTenantId }}'
RETURNING
name,
baseUri,
claimMapping,
description,
displayName,
purgeTime,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: scim_tenants
  props:
    - name: locationsId
      value: string
      description: Required parameter for the scim_tenants resource.
    - name: workforcePoolsId
      value: string
      description: Required parameter for the scim_tenants resource.
    - name: providersId
      value: string
      description: Required parameter for the scim_tenants resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the SCIM Tenant. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}`
        
    - name: description
      value: string
      description: >
        Optional. The user-specified description of the scim tenant. Cannot exceed 256 characters.
        
    - name: displayName
      value: string
      description: >
        Optional. The user-specified display name of the scim tenant. Cannot exceed 32 characters.
        
    - name: claimMapping
      value: object
      description: >
        Optional. Maps BYOID claims to SCIM claims.
        
    - name: workforcePoolProviderScimTenantId
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

Updates an existing WorkforcePoolProviderScimTenant.

```sql
UPDATE google.iam.scim_tenants
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__claimMapping = '{{ claimMapping }}'
WHERE 
locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
AND providersId = '{{ providersId }}' --required
AND scimTenantsId = '{{ scimTenantsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
baseUri,
claimMapping,
description,
displayName,
purgeTime,
state;
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

Deletes a WorkforcePoolProviderScimTenant. You can undelete a scim tenant for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tenants. However, you can view and list them.

```sql
DELETE FROM google.iam.scim_tenants
WHERE locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
AND providersId = '{{ providersId }}' --required
AND scimTenantsId = '{{ scimTenantsId }}' --required;
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

Undeletes a WorkforcePoolProviderScimTenant, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.scim_tenants.undelete 
@locationsId='{{ locationsId }}' --required, 
@workforcePoolsId='{{ workforcePoolsId }}' --required, 
@providersId='{{ providersId }}' --required, 
@scimTenantsId='{{ scimTenantsId }}' --required;
```
</TabItem>
</Tabs>
