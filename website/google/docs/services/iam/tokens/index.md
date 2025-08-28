--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tokens</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.tokens" /></td></tr>
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
    <td>Identifier. The resource name of the SCIM Token. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool&#125;/providers/ &#123;workforce_pool_provider&#125;/scimTenants/&#123;scim_tenant&#125;/tokens/&#123;token&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified display name of the scim token. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="securityToken" /></td>
    <td><code>string</code></td>
    <td>Output only. The token string. Provide this to the IdP for authentication. Will be set only during creation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the token.</td>
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
    <td>Identifier. The resource name of the SCIM Token. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool&#125;/providers/ &#123;workforce_pool_provider&#125;/scimTenants/&#123;scim_tenant&#125;/tokens/&#123;token&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified display name of the scim token. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="securityToken" /></td>
    <td><code>string</code></td>
    <td>Output only. The token string. Provide this to the IdP for authentication. Will be set only during creation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the token.</td>
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
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a>, <a href="#parameter-tokensId"><code>tokensId</code></a></td>
    <td></td>
    <td>Gets an individual WorkforcePoolProviderScimToken.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkforcePoolProviderScimTokenss in a WorkforcePoolProviderScimTenant. If `show_deleted` is set to `true`, then deleted SCIM tokens are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a></td>
    <td><a href="#parameter-workforcePoolProviderScimTokenId"><code>workforcePoolProviderScimTokenId</code></a></td>
    <td>Creates a new WorkforcePoolProviderScimToken in a WorkforcePoolProviderScimTenant. You cannot reuse the name of a deleted SCIM token until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a>, <a href="#parameter-tokensId"><code>tokensId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkforcePoolProviderScimToken.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a>, <a href="#parameter-tokensId"><code>tokensId</code></a></td>
    <td></td>
    <td>Deletes a WorkforcePoolProviderScimToken. You can undelete a scim token for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tokens. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-scimTenantsId"><code>scimTenantsId</code></a>, <a href="#parameter-tokensId"><code>tokensId</code></a></td>
    <td></td>
    <td>Undeletes a WorkforcePoolProviderScimToken, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-tokensId">
    <td><CopyableCode code="tokensId" /></td>
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
<tr id="parameter-workforcePoolProviderScimTokenId">
    <td><CopyableCode code="workforcePoolProviderScimTokenId" /></td>
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

Gets an individual WorkforcePoolProviderScimToken.

```sql
SELECT
name,
displayName,
securityToken,
state
FROM google.iam.tokens
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
AND scimTenantsId = '{{ scimTenantsId }}' -- required
AND tokensId = '{{ tokensId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkforcePoolProviderScimTokenss in a WorkforcePoolProviderScimTenant. If `show_deleted` is set to `true`, then deleted SCIM tokens are also listed.

```sql
SELECT
name,
displayName,
securityToken,
state
FROM google.iam.tokens
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
AND scimTenantsId = '{{ scimTenantsId }}' -- required
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

Creates a new WorkforcePoolProviderScimToken in a WorkforcePoolProviderScimTenant. You cannot reuse the name of a deleted SCIM token until 30 days after deletion.

```sql
INSERT INTO google.iam.tokens (
data__name,
data__displayName,
locationsId,
workforcePoolsId,
providersId,
scimTenantsId,
workforcePoolProviderScimTokenId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ locationsId }}',
'{{ workforcePoolsId }}',
'{{ providersId }}',
'{{ scimTenantsId }}',
'{{ workforcePoolProviderScimTokenId }}'
RETURNING
name,
displayName,
securityToken,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tokens
  props:
    - name: locationsId
      value: string
      description: Required parameter for the tokens resource.
    - name: workforcePoolsId
      value: string
      description: Required parameter for the tokens resource.
    - name: providersId
      value: string
      description: Required parameter for the tokens resource.
    - name: scimTenantsId
      value: string
      description: Required parameter for the tokens resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the SCIM Token. Format: `locations/{location}/workforcePools/{workforce_pool}/providers/ {workforce_pool_provider}/scimTenants/{scim_tenant}/tokens/{token}`
        
    - name: displayName
      value: string
      description: >
        Optional. The user-specified display name of the scim token. Cannot exceed 32 characters.
        
    - name: workforcePoolProviderScimTokenId
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

Updates an existing WorkforcePoolProviderScimToken.

```sql
UPDATE google.iam.tokens
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
AND providersId = '{{ providersId }}' --required
AND scimTenantsId = '{{ scimTenantsId }}' --required
AND tokensId = '{{ tokensId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
securityToken,
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

Deletes a WorkforcePoolProviderScimToken. You can undelete a scim token for 30 days. After 30 days, deletion is permanent. You cannot update deleted scim tokens. However, you can view and list them.

```sql
DELETE FROM google.iam.tokens
WHERE locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
AND providersId = '{{ providersId }}' --required
AND scimTenantsId = '{{ scimTenantsId }}' --required
AND tokensId = '{{ tokensId }}' --required;
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

Undeletes a WorkforcePoolProviderScimToken, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.tokens.undelete 
@locationsId='{{ locationsId }}' --required, 
@workforcePoolsId='{{ workforcePoolsId }}' --required, 
@providersId='{{ providersId }}' --required, 
@scimTenantsId='{{ scimTenantsId }}' --required, 
@tokensId='{{ tokensId }}' --required;
```
</TabItem>
</Tabs>
