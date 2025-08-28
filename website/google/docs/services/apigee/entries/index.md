--- 
title: entries
hide_title: false
hide_table_of_contents: false
keywords:
  - entries
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

Creates, updates, deletes, gets or lists an <code>entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_entries_get"
    values={[
        { label: 'organizations_apis_keyvaluemaps_entries_get', value: 'organizations_apis_keyvaluemaps_entries_get' },
        { label: 'organizations_environments_keyvaluemaps_entries_get', value: 'organizations_environments_keyvaluemaps_entries_get' },
        { label: 'organizations_apis_keyvaluemaps_entries_list', value: 'organizations_apis_keyvaluemaps_entries_list' },
        { label: 'organizations_environments_keyvaluemaps_entries_list', value: 'organizations_environments_keyvaluemaps_entries_list' },
        { label: 'organizations_keyvaluemaps_entries_get', value: 'organizations_keyvaluemaps_entries_get' },
        { label: 'organizations_keyvaluemaps_entries_list', value: 'organizations_keyvaluemaps_entries_list' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_entries_get">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_get">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apis_keyvaluemaps_entries_list">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_list">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_get">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_list">

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
    <td>Resource URI that can be used to identify the scope of the key value map entries.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Required. Data or payload that is being retrieved and associated with the unique key.</td>
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
    <td><a href="#organizations_apis_keyvaluemaps_entries_get"><CopyableCode code="organizations_apis_keyvaluemaps_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_entries_get"><CopyableCode code="organizations_environments_keyvaluemaps_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_entries_list"><CopyableCode code="organizations_apis_keyvaluemaps_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_entries_list"><CopyableCode code="organizations_environments_keyvaluemaps_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_entries_get"><CopyableCode code="organizations_keyvaluemaps_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_entries_list"><CopyableCode code="organizations_keyvaluemaps_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_entries_create"><CopyableCode code="organizations_apis_keyvaluemaps_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_entries_create"><CopyableCode code="organizations_environments_keyvaluemaps_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_entries_create"><CopyableCode code="organizations_keyvaluemaps_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_entries_update"><CopyableCode code="organizations_apis_keyvaluemaps_entries_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Update key value entry scoped to an organization, environment, or API proxy for an existing key.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_entries_update"><CopyableCode code="organizations_environments_keyvaluemaps_entries_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Update key value entry scoped to an organization, environment, or API proxy for an existing key.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_entries_update"><CopyableCode code="organizations_keyvaluemaps_entries_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Update key value entry scoped to an organization, environment, or API proxy for an existing key.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_entries_delete"><CopyableCode code="organizations_apis_keyvaluemaps_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_entries_delete"><CopyableCode code="organizations_environments_keyvaluemaps_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_entries_delete"><CopyableCode code="organizations_keyvaluemaps_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.</td>
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
<tr id="parameter-entriesId">
    <td><CopyableCode code="entriesId" /></td>
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
    defaultValue="organizations_apis_keyvaluemaps_entries_get"
    values={[
        { label: 'organizations_apis_keyvaluemaps_entries_get', value: 'organizations_apis_keyvaluemaps_entries_get' },
        { label: 'organizations_environments_keyvaluemaps_entries_get', value: 'organizations_environments_keyvaluemaps_entries_get' },
        { label: 'organizations_apis_keyvaluemaps_entries_list', value: 'organizations_apis_keyvaluemaps_entries_list' },
        { label: 'organizations_environments_keyvaluemaps_entries_list', value: 'organizations_environments_keyvaluemaps_entries_list' },
        { label: 'organizations_keyvaluemaps_entries_get', value: 'organizations_keyvaluemaps_entries_get' },
        { label: 'organizations_keyvaluemaps_entries_list', value: 'organizations_keyvaluemaps_entries_list' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_entries_get">

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_get">

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apis_keyvaluemaps_entries_list">

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_list">

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_get">

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_list">

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
SELECT
name,
value
FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_entries_create"
    values={[
        { label: 'organizations_apis_keyvaluemaps_entries_create', value: 'organizations_apis_keyvaluemaps_entries_create' },
        { label: 'organizations_environments_keyvaluemaps_entries_create', value: 'organizations_environments_keyvaluemaps_entries_create' },
        { label: 'organizations_keyvaluemaps_entries_create', value: 'organizations_keyvaluemaps_entries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_entries_create">

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
INSERT INTO google.apigee.entries (
data__name,
data__value,
organizationsId,
apisId,
keyvaluemapsId
)
SELECT 
'{{ name }}',
'{{ value }}',
'{{ organizationsId }}',
'{{ apisId }}',
'{{ keyvaluemapsId }}'
RETURNING
name,
value
;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_create">

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
INSERT INTO google.apigee.entries (
data__name,
data__value,
organizationsId,
environmentsId,
keyvaluemapsId
)
SELECT 
'{{ name }}',
'{{ value }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ keyvaluemapsId }}'
RETURNING
name,
value
;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_create">

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

```sql
INSERT INTO google.apigee.entries (
data__name,
data__value,
organizationsId,
keyvaluemapsId
)
SELECT 
'{{ name }}',
'{{ value }}',
'{{ organizationsId }}',
'{{ keyvaluemapsId }}'
RETURNING
name,
value
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entries
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the entries resource.
    - name: apisId
      value: string
      description: Required parameter for the entries resource.
    - name: keyvaluemapsId
      value: string
      description: Required parameter for the entries resource.
    - name: environmentsId
      value: string
      description: Required parameter for the entries resource.
    - name: name
      value: string
      description: >
        Resource URI that can be used to identify the scope of the key value map entries.
        
    - name: value
      value: string
      description: >
        Required. Data or payload that is being retrieved and associated with the unique key.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_entries_update"
    values={[
        { label: 'organizations_apis_keyvaluemaps_entries_update', value: 'organizations_apis_keyvaluemaps_entries_update' },
        { label: 'organizations_environments_keyvaluemaps_entries_update', value: 'organizations_environments_keyvaluemaps_entries_update' },
        { label: 'organizations_keyvaluemaps_entries_update', value: 'organizations_keyvaluemaps_entries_update' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_entries_update">

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

```sql
REPLACE google.apigee.entries
SET 
data__name = '{{ name }}',
data__value = '{{ value }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required
RETURNING
name,
value;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_update">

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

```sql
REPLACE google.apigee.entries
SET 
data__name = '{{ name }}',
data__value = '{{ value }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required
RETURNING
name,
value;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_update">

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

```sql
REPLACE google.apigee.entries
SET 
data__name = '{{ name }}',
data__value = '{{ value }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required
RETURNING
name,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_entries_delete"
    values={[
        { label: 'organizations_apis_keyvaluemaps_entries_delete', value: 'organizations_apis_keyvaluemaps_entries_delete' },
        { label: 'organizations_environments_keyvaluemaps_entries_delete', value: 'organizations_environments_keyvaluemaps_entries_delete' },
        { label: 'organizations_keyvaluemaps_entries_delete', value: 'organizations_keyvaluemaps_entries_delete' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_entries_delete">

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

```sql
DELETE FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_entries_delete">

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

```sql
DELETE FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_entries_delete">

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

```sql
DELETE FROM google.apigee.entries
WHERE organizationsId = '{{ organizationsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
AND entriesId = '{{ entriesId }}' --required;
```
</TabItem>
</Tabs>
