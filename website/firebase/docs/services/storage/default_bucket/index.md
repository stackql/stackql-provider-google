--- 
title: default_bucket
hide_title: false
hide_table_of_contents: false
keywords:
  - default_bucket
  - storage
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>default_bucket</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>default_bucket</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.storage.default_bucket" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_bucket"
    values={[
        { label: 'get_default_bucket', value: 'get_default_bucket' }
    ]}
>
<TabItem value="get_default_bucket">

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
    <td>Resource name of the default bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>object</code></td>
    <td>A storage bucket and its relation to a parent Firebase project. (id: Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Immutable. Location of the default bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>Immutable. Storage class of the default bucket. Supported values are available at https://cloud.google.com/storage/docs/storage-classes#classes.</td>
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
    <td><a href="#get_default_bucket"><CopyableCode code="get_default_bucket" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the default bucket.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a Spark tier-eligible Cloud Storage bucket and links it to your Firebase project. If the default bucket already exists, this method will re-link it to your Firebase project. See https://firebase.google.com/pricing for pricing details.</td>
</tr>
<tr>
    <td><a href="#delete_default_bucket"><CopyableCode code="delete_default_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Unlinks and deletes the default bucket.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_default_bucket"
    values={[
        { label: 'get_default_bucket', value: 'get_default_bucket' }
    ]}
>
<TabItem value="get_default_bucket">

Gets the default bucket.

```sql
SELECT
name,
bucket,
location,
storageClass
FROM firebase.storage.default_bucket
WHERE projectsId = '{{ projectsId }}' -- required;
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

Creates a Spark tier-eligible Cloud Storage bucket and links it to your Firebase project. If the default bucket already exists, this method will re-link it to your Firebase project. See https://firebase.google.com/pricing for pricing details.

```sql
INSERT INTO firebase.storage.default_bucket (
data__name,
data__location,
data__storageClass,
projectsId
)
SELECT 
'{{ name }}',
'{{ location }}',
'{{ storageClass }}',
'{{ projectsId }}'
RETURNING
name,
bucket,
location,
storageClass
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: default_bucket
  props:
    - name: projectsId
      value: string
      description: Required parameter for the default_bucket resource.
    - name: name
      value: string
      description: >
        Resource name of the default bucket.
        
    - name: location
      value: string
      description: >
        Immutable. Location of the default bucket.
        
    - name: storageClass
      value: string
      description: >
        Immutable. Storage class of the default bucket. Supported values are available at https://cloud.google.com/storage/docs/storage-classes#classes.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_default_bucket"
    values={[
        { label: 'delete_default_bucket', value: 'delete_default_bucket' }
    ]}
>
<TabItem value="delete_default_bucket">

Unlinks and deletes the default bucket.

```sql
DELETE FROM firebase.storage.default_bucket
WHERE projectsId = '{{ projectsId }}' --required;
```
</TabItem>
</Tabs>
