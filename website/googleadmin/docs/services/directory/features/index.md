--- 
title: features
hide_title: false
hide_table_of_contents: false
keywords:
  - features
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>features</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>features</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.features" /></td></tr>
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
    <td>The name of the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#resources#features#Feature)</td>
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
    <td>The name of the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#resources#features#Feature)</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-featureKey"><code>featureKey</code></a></td>
    <td></td>
    <td>Retrieves a feature.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves a list of features for an account.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Inserts a feature.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-featureKey"><code>featureKey</code></a></td>
    <td></td>
    <td>Patches a feature.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-featureKey"><code>featureKey</code></a></td>
    <td></td>
    <td>Updates a feature.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-featureKey"><code>featureKey</code></a></td>
    <td></td>
    <td>Deletes a feature.</td>
</tr>
<tr>
    <td><a href="#rename"><CopyableCode code="rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-oldName"><code>oldName</code></a></td>
    <td></td>
    <td>Renames a feature.</td>
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
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-featureKey">
    <td><CopyableCode code="featureKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-oldName">
    <td><CopyableCode code="oldName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves a feature.

```sql
SELECT
name,
etags,
kind
FROM googleadmin.directory.features
WHERE customer = '{{ customer }}' -- required
AND featureKey = '{{ featureKey }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of features for an account.

```sql
SELECT
name,
etags,
kind
FROM googleadmin.directory.features
WHERE customer = '{{ customer }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Inserts a feature.

```sql
INSERT INTO googleadmin.directory.features (
data__etags,
data__kind,
data__name,
customer
)
SELECT 
'{{ etags }}',
'{{ kind }}',
'{{ name }}',
'{{ customer }}'
RETURNING
name,
etags,
kind
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: features
  props:
    - name: customer
      value: string
      description: Required parameter for the features resource.
    - name: etags
      value: string
      description: >
        ETag of the resource.
        
    - name: kind
      value: string
      description: >
        Kind of resource this is.
        
      default: admin#directory#resources#features#Feature
    - name: name
      value: string
      description: >
        The name of the feature.
        
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

Patches a feature.

```sql
UPDATE googleadmin.directory.features
SET 
data__etags = '{{ etags }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}'
WHERE 
customer = '{{ customer }}' --required
AND featureKey = '{{ featureKey }}' --required
RETURNING
name,
etags,
kind;
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

Updates a feature.

```sql
REPLACE googleadmin.directory.features
SET 
data__etags = '{{ etags }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}'
WHERE 
customer = '{{ customer }}' --required
AND featureKey = '{{ featureKey }}' --required
RETURNING
name,
etags,
kind;
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

Deletes a feature.

```sql
DELETE FROM googleadmin.directory.features
WHERE customer = '{{ customer }}' --required
AND featureKey = '{{ featureKey }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rename"
    values={[
        { label: 'rename', value: 'rename' }
    ]}
>
<TabItem value="rename">

Renames a feature.

```sql
EXEC googleadmin.directory.features.rename 
@customer='{{ customer }}' --required, 
@oldName='{{ oldName }}' --required 
@@json=
'{
"newName": "{{ newName }}"
}';
```
</TabItem>
</Tabs>
