--- 
title: config
hide_title: false
hide_table_of_contents: false
keywords:
  - config
  - managedkafka
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

Creates, updates, deletes, gets or lists a <code>config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Optional. The subject to which this subject is an alias of. Only applicable for subject config.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibility" /></td>
    <td><code>string</code></td>
    <td>Required. The compatibility type of the schema. The default value is BACKWARD. If unset in a SchemaSubject-level SchemaConfig, defaults to the global value. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="normalize" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the schema will be normalized before being stored or looked up. The default is false. If unset in a SchemaSubject-level SchemaConfig, the global value will be used. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td><a href="#parameter-defaultToGlobal"><code>defaultToGlobal</code></a></td>
    <td>Get schema config at global level or for a subject.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
    <td>Delete schema config for a subject.</td>
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
<tr id="parameter-configId">
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-schemaRegistriesId">
    <td><CopyableCode code="schemaRegistriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-defaultToGlobal">
    <td><CopyableCode code="defaultToGlobal" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get schema config at global level or for a subject.

```sql
SELECT
alias,
compatibility,
normalize
FROM google.managedkafka.config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' -- required
AND configId = '{{ configId }}' -- required
AND defaultToGlobal = '{{ defaultToGlobal }}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.

```sql
REPLACE google.managedkafka.config
SET 
data__compatibility = '{{ compatibility }}',
data__normalize = {{ normalize }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' --required
AND configId = '{{ configId }}' --required
RETURNING
alias,
compatibility,
normalize;
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

Delete schema config for a subject.

```sql
DELETE FROM google.managedkafka.config
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' --required
AND configId = '{{ configId }}' --required;
```
</TabItem>
</Tabs>
