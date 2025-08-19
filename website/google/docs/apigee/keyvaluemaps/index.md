--- 
title: keyvaluemaps
hide_title: false
hide_table_of_contents: false
keywords:
  - keyvaluemaps
  - apigee
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

Creates, updates, deletes, gets or lists a <code>keyvaluemaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keyvaluemaps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.keyvaluemaps" /></td></tr>
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
    <td><a href="#organizations_apis_keyvaluemaps_create"><CopyableCode code="organizations_apis_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Creates a key value map in an API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_create"><CopyableCode code="organizations_environments_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a key value map in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_create"><CopyableCode code="organizations_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a key value map in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_delete"><CopyableCode code="organizations_apis_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_delete"><CopyableCode code="organizations_environments_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_delete"><CopyableCode code="organizations_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an organization.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyvaluemapsId">
    <td><CopyableCode code="keyvaluemapsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_create"
    values={[
        { label: 'organizations_apis_keyvaluemaps_create', value: 'organizations_apis_keyvaluemaps_create' },
        { label: 'organizations_environments_keyvaluemaps_create', value: 'organizations_environments_keyvaluemaps_create' },
        { label: 'organizations_keyvaluemaps_create', value: 'organizations_keyvaluemaps_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_create">

Creates a key value map in an API proxy.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__name,
data__encrypted,
organizationsId,
apisId
)
SELECT 
'{{ name }}',
{{ encrypted }},
'{{ organizationsId }}',
'{{ apisId }}'
RETURNING
name,
encrypted
;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_create">

Creates a key value map in an environment.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__name,
data__encrypted,
organizationsId,
environmentsId
)
SELECT 
'{{ name }}',
{{ encrypted }},
'{{ organizationsId }}',
'{{ environmentsId }}'
RETURNING
name,
encrypted
;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_create">

Creates a key value map in an organization.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__name,
data__encrypted,
organizationsId
)
SELECT 
'{{ name }}',
{{ encrypted }},
'{{ organizationsId }}'
RETURNING
name,
encrypted
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keyvaluemaps
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the keyvaluemaps resource.
    - name: apisId
      value: string
      description: Required parameter for the keyvaluemaps resource.
    - name: environmentsId
      value: string
      description: Required parameter for the keyvaluemaps resource.
    - name: name
      value: string
      description: >
        Required. ID of the key value map.
        
    - name: encrypted
      value: boolean
      description: >
        Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_delete"
    values={[
        { label: 'organizations_apis_keyvaluemaps_delete', value: 'organizations_apis_keyvaluemaps_delete' },
        { label: 'organizations_environments_keyvaluemaps_delete', value: 'organizations_environments_keyvaluemaps_delete' },
        { label: 'organizations_keyvaluemaps_delete', value: 'organizations_keyvaluemaps_delete' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_delete">

Deletes a key value map from an API proxy.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_delete">

Deletes a key value map from an environment.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_delete">

Deletes a key value map from an organization.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required;
```
</TabItem>
</Tabs>
