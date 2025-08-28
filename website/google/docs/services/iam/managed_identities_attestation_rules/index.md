--- 
title: managed_identities_attestation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_identities_attestation_rules
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

Creates, updates, deletes, gets or lists a <code>managed_identities_attestation_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_identities_attestation_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.managed_identities_attestation_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attestation_rules"
    values={[
        { label: 'list_attestation_rules', value: 'list_attestation_rules' }
    ]}
>
<TabItem value="list_attestation_rules">

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
    <td><CopyableCode code="googleCloudResource" /></td>
    <td><code>string</code></td>
    <td>Optional. A single workload operating on Google Cloud. For example: `//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345`.</td>
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
    <td><a href="#list_attestation_rules"><CopyableCode code="list_attestation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-namespacesId"><code>namespacesId</code></a>, <a href="#parameter-managedIdentitiesId"><code>managedIdentitiesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List all AttestationRule on a WorkloadIdentityPoolManagedIdentity.</td>
</tr>
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
    defaultValue="list_attestation_rules"
    values={[
        { label: 'list_attestation_rules', value: 'list_attestation_rules' }
    ]}
>
<TabItem value="list_attestation_rules">

List all AttestationRule on a WorkloadIdentityPoolManagedIdentity.

```sql
SELECT
googleCloudResource
FROM google.iam.managed_identities_attestation_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required
AND namespacesId = '{{ namespacesId }}' -- required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


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
INSERT INTO google.iam.managed_identities_attestation_rules (
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
- name: managed_identities_attestation_rules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the managed_identities_attestation_rules resource.
    - name: locationsId
      value: string
      description: Required parameter for the managed_identities_attestation_rules resource.
    - name: workloadIdentityPoolsId
      value: string
      description: Required parameter for the managed_identities_attestation_rules resource.
    - name: namespacesId
      value: string
      description: Required parameter for the managed_identities_attestation_rules resource.
    - name: managedIdentitiesId
      value: string
      description: Required parameter for the managed_identities_attestation_rules resource.
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
DELETE FROM google.iam.managed_identities_attestation_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND namespacesId = '{{ namespacesId }}' --required
AND managedIdentitiesId = '{{ managedIdentitiesId }}' --required;
```
</TabItem>
</Tabs>
