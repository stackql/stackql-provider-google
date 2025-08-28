--- 
title: references
hide_title: false
hide_table_of_contents: false
keywords:
  - references
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

Creates, updates, deletes, gets or lists a <code>references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>references</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_references_get"
    values={[
        { label: 'organizations_environments_references_get', value: 'organizations_environments_references_get' }
    ]}
>
<TabItem value="organizations_environments_references_get">

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
    <td>Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of this reference.</td>
</tr>
<tr>
    <td><CopyableCode code="refers" /></td>
    <td><code>string</code></td>
    <td>Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.</td>
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
    <td><a href="#organizations_environments_references_get"><CopyableCode code="organizations_environments_references_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-referencesId"><code>referencesId</code></a></td>
    <td></td>
    <td>Gets a Reference resource.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_references_create"><CopyableCode code="organizations_environments_references_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a Reference in the specified environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_references_update"><CopyableCode code="organizations_environments_references_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-referencesId"><code>referencesId</code></a></td>
    <td></td>
    <td>Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_references_delete"><CopyableCode code="organizations_environments_references_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-referencesId"><code>referencesId</code></a></td>
    <td></td>
    <td>Deletes a Reference from an environment. Returns the deleted Reference resource.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-referencesId">
    <td><CopyableCode code="referencesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_references_get"
    values={[
        { label: 'organizations_environments_references_get', value: 'organizations_environments_references_get' }
    ]}
>
<TabItem value="organizations_environments_references_get">

Gets a Reference resource.

```sql
SELECT
name,
description,
refers,
resourceType
FROM google.apigee.references
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND referencesId = '{{ referencesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_references_create"
    values={[
        { label: 'organizations_environments_references_create', value: 'organizations_environments_references_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_references_create">

Creates a Reference in the specified environment.

```sql
INSERT INTO google.apigee.references (
data__name,
data__description,
data__resourceType,
data__refers,
organizationsId,
environmentsId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ resourceType }}',
'{{ refers }}',
'{{ organizationsId }}',
'{{ environmentsId }}'
RETURNING
name,
description,
refers,
resourceType
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: references
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the references resource.
    - name: environmentsId
      value: string
      description: Required parameter for the references resource.
    - name: name
      value: string
      description: >
        Required. The resource id of this reference. Values must match the regular expression [\w
        \-.]+.
        
    - name: description
      value: string
      description: >
        Optional. A human-readable description of this reference.
        
    - name: resourceType
      value: string
      description: >
        The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
        
    - name: refers
      value: string
      description: >
        Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_environments_references_update"
    values={[
        { label: 'organizations_environments_references_update', value: 'organizations_environments_references_update' }
    ]}
>
<TabItem value="organizations_environments_references_update">

Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.

```sql
REPLACE google.apigee.references
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__resourceType = '{{ resourceType }}',
data__refers = '{{ refers }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND referencesId = '{{ referencesId }}' --required
RETURNING
name,
description,
refers,
resourceType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_references_delete"
    values={[
        { label: 'organizations_environments_references_delete', value: 'organizations_environments_references_delete' }
    ]}
>
<TabItem value="organizations_environments_references_delete">

Deletes a Reference from an environment. Returns the deleted Reference resource.

```sql
DELETE FROM google.apigee.references
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND referencesId = '{{ referencesId }}' --required;
```
</TabItem>
</Tabs>
