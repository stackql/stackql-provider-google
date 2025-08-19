--- 
title: keystores
hide_title: false
hide_table_of_contents: false
keywords:
  - keystores
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

Creates, updates, deletes, gets or lists a <code>keystores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keystores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.keystores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_keystores_get"
    values={[
        { label: 'organizations_environments_keystores_get', value: 'organizations_environments_keystores_get' }
    ]}
>
<TabItem value="organizations_environments_keystores_get">

Datastore for Certificates and Aliases.

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
    <td>Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]&#123;1,255&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Output only. Aliases in this keystore.</td>
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
    <td><a href="#organizations_environments_keystores_get"><CopyableCode code="organizations_environments_keystores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a></td>
    <td></td>
    <td>Gets a keystore or truststore.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_create"><CopyableCode code="organizations_environments_keystores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_delete"><CopyableCode code="organizations_environments_keystores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a></td>
    <td></td>
    <td>Deletes a keystore or truststore.</td>
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
<tr id="parameter-keystoresId">
    <td><CopyableCode code="keystoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_keystores_get"
    values={[
        { label: 'organizations_environments_keystores_get', value: 'organizations_environments_keystores_get' }
    ]}
>
<TabItem value="organizations_environments_keystores_get">

Gets a keystore or truststore.

```sql
SELECT
name,
aliases
FROM google.apigee.keystores
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keystoresId = '{{ keystoresId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_keystores_create"
    values={[
        { label: 'organizations_environments_keystores_create', value: 'organizations_environments_keystores_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_keystores_create">

Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.

```sql
INSERT INTO google.apigee.keystores (
data__name,
organizationsId,
environmentsId,
name
)
SELECT 
'{{ name }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ name }}'
RETURNING
name,
aliases
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keystores
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the keystores resource.
    - name: environmentsId
      value: string
      description: Required parameter for the keystores resource.
    - name: name
      value: string
      description: >
        Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]{1,255}`.
        
    - name: name
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_keystores_delete"
    values={[
        { label: 'organizations_environments_keystores_delete', value: 'organizations_environments_keystores_delete' }
    ]}
>
<TabItem value="organizations_environments_keystores_delete">

Deletes a keystore or truststore.

```sql
DELETE FROM google.apigee.keystores
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keystoresId = '{{ keystoresId }}' --required;
```
</TabItem>
</Tabs>
