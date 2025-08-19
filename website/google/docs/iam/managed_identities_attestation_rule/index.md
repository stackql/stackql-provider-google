--- 
title: managed_identities_attestation_rule
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_identities_attestation_rule
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

Creates, updates, deletes, gets or lists a <code>managed_identities_attestation_rule</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_identities_attestation_rule</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.managed_identities_attestation_rule" /></td></tr>
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
    <td><a href="#add_attestation_rule"><CopyableCode code="add_attestation_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity. The total attestation rules after addition must not exceed 50.</td>
</tr>
<tr>
    <td><a href="#remove_attestation_rule"><CopyableCode code="remove_attestation_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td></td>
    <td>Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_attestation_rule"
    values={[
        { label: 'add_attestation_rule', value: 'add_attestation_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_attestation_rule">

Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity. The total attestation rules after addition must not exceed 50.

```sql
INSERT INTO google.iam.managed_identities_attestation_rule (
data__attestationRule,
projectsId,
locationsId,
workloadIdentityPoolsId,
namespacesId,
managedIdentitiesId
)
SELECT 
'{{ attestationRule }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workloadIdentityPoolsId }}',
'{{ namespacesId }}',
'{{ managedIdentitiesId }}'
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
- name: managed_identities_attestation_rule
  props:
    - name: projectsId
      value: string
      description: Required parameter for the managed_identities_attestation_rule resource.
    - name: locationsId
      value: string
      description: Required parameter for the managed_identities_attestation_rule resource.
    - name: workloadIdentityPoolsId
      value: string
      description: Required parameter for the managed_identities_attestation_rule resource.
    - name: namespacesId
      value: string
      description: Required parameter for the managed_identities_attestation_rule resource.
    - name: managedIdentitiesId
      value: string
      description: Required parameter for the managed_identities_attestation_rule resource.
    - name: attestationRule
      value: object
      description: >
        Required. The attestation rule to be added.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_attestation_rule"
    values={[
        { label: 'remove_attestation_rule', value: 'remove_attestation_rule' }
    ]}
>
<TabItem value="remove_attestation_rule">

Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity.

```sql
DELETE FROM google.iam.managed_identities_attestation_rule
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND namespacesId = '{{ namespacesId }}' --required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' --required;
```
</TabItem>
</Tabs>
