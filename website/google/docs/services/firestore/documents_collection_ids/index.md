--- 
title: documents_collection_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - documents_collection_ids
  - firestore
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

Creates, updates, deletes, gets or lists a <code>documents_collection_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>documents_collection_ids</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.documents_collection_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collection_ids"
    values={[
        { label: 'list_collection_ids', value: 'list_collection_ids' }
    ]}
>
<TabItem value="list_collection_ids">

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
    <td><CopyableCode code="collectionIds" /></td>
    <td><code>array</code></td>
    <td>The collection ids.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A page token that may be used to continue the list.</td>
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
    <td><a href="#list_collection_ids"><CopyableCode code="list_collection_ids" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td></td>
    <td>Lists all the collection IDs underneath a document.</td>
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
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId1">
    <td><CopyableCode code="documentsId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_collection_ids"
    values={[
        { label: 'list_collection_ids', value: 'list_collection_ids' }
    ]}
>
<TabItem value="list_collection_ids">

Lists all the collection IDs underneath a document.

```sql
SELECT
collectionIds,
nextPageToken
FROM google.firestore.documents_collection_ids
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND documentsId = '{{ documentsId }}' -- required
AND documentsId1 = '{{ documentsId1 }}' -- required;
```
</TabItem>
</Tabs>
