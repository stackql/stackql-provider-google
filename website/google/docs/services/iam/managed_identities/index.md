--- 
title: managed_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_identities
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

Creates, updates, deletes, gets or lists a <code>managed_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_identities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.managed_identities" /></td></tr>
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
    <td>Identifier. The resource name of the managed identity.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the managed identity. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the managed identity is disabled. If disabled, credentials may no longer be issued for the identity, however existing credentials will still be accepted until they expire.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the managed identity will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the managed identity.</td>
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
    <td>Identifier. The resource name of the managed identity.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the managed identity. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the managed identity is disabled. If disabled, credentials may no longer be issued for the identity, however existing credentials will still be accepted until they expire.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the managed identity will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the managed identity.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Gets an individual WorkloadIdentityPoolManagedIdentity.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkloadIdentityPoolManagedIdentitys in a namespace. If `show_deleted` is set to `true`, then deleted managed identities are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a></td>
    <td><a href="#parameter-workloadIdentityPoolManagedIdentityId"><code>workloadIdentityPoolManagedIdentityId</code></a></td>
    <td>Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Deletes a WorkloadIdentityPoolManagedIdentity. You can undelete a managed identity for 30 days. After 30 days, deletion is permanent.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Undeletes a WorkloadIdentityPoolManagedIdentity, as long as it was deleted fewer than 30 days ago.</td>
</tr>
<tr>
    <td><a href="#set_attestation_rules"><CopyableCode code="set_attestation_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity. A maximum of 50 AttestationRules can be set.</td>
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
<tr id="parameter-managedIdentitiesId">
    <td><CopyableCode code="managedIdentitiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-namespacesId">
    <td><CopyableCode code="namespacesId" /></td>
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
<tr id="parameter-workloadIdentityPoolManagedIdentityId">
    <td><CopyableCode code="workloadIdentityPoolManagedIdentityId" /></td>
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

Gets an individual WorkloadIdentityPoolManagedIdentity.

```sql
SELECT
name,
description,
disabled,
expireTime,
state
FROM google.iam.managed_identities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required
AND namespacesId = '{{ namespacesId }}' -- required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkloadIdentityPoolManagedIdentitys in a namespace. If `show_deleted` is set to `true`, then deleted managed identities are also listed.

```sql
SELECT
name,
description,
disabled,
expireTime,
state
FROM google.iam.managed_identities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required
AND namespacesId = '{{ namespacesId }}' -- required
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

Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.

```sql
INSERT INTO google.iam.managed_identities (
data__name,
data__description,
data__disabled,
projectsId,
locationsId,
workloadIdentityPoolsId,
namespacesId,
workloadIdentityPoolManagedIdentityId
)
SELECT 
'{{ name }}',
'{{ description }}',
{{ disabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workloadIdentityPoolsId }}',
'{{ namespacesId }}',
'{{ workloadIdentityPoolManagedIdentityId }}'
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
- name: managed_identities
  props:
    - name: projectsId
      value: string
      description: Required parameter for the managed_identities resource.
    - name: locationsId
      value: string
      description: Required parameter for the managed_identities resource.
    - name: workloadIdentityPoolsId
      value: string
      description: Required parameter for the managed_identities resource.
    - name: namespacesId
      value: string
      description: Required parameter for the managed_identities resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the managed identity.
        
    - name: description
      value: string
      description: >
        Optional. A description of the managed identity. Cannot exceed 256 characters.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the managed identity is disabled. If disabled, credentials may no longer be issued for the identity, however existing credentials will still be accepted until they expire.
        
    - name: workloadIdentityPoolManagedIdentityId
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

Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace.

```sql
UPDATE google.iam.managed_identities
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND namespacesId = '{{ namespacesId }}' --required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' --required
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

Deletes a WorkloadIdentityPoolManagedIdentity. You can undelete a managed identity for 30 days. After 30 days, deletion is permanent.

```sql
DELETE FROM google.iam.managed_identities
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND namespacesId = '{{ namespacesId }}' --required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' },
        { label: 'set_attestation_rules', value: 'set_attestation_rules' }
    ]}
>
<TabItem value="undelete">

Undeletes a WorkloadIdentityPoolManagedIdentity, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.managed_identities.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadIdentityPoolsId='{{ workloadIdentityPoolsId }}' --required, 
@namespacesId='{{ namespacesId }}' --required, 
@managedIdentitiesId='{{ managedIdentitiesId }}' --required;
```
</TabItem>
<TabItem value="set_attestation_rules">

Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity. A maximum of 50 AttestationRules can be set.

```sql
EXEC google.iam.managed_identities.set_attestation_rules 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadIdentityPoolsId='{{ workloadIdentityPoolsId }}' --required, 
@namespacesId='{{ namespacesId }}' --required, 
@managedIdentitiesId='{{ managedIdentitiesId }}' --required 
@@json=
'{
"attestationRules": "{{ attestationRules }}"
}';
```
</TabItem>
</Tabs>
