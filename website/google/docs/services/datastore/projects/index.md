--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - datastore
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datastore.projects" /></td></tr>
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
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Looks up entities by key.</td>
</tr>
<tr>
    <td><a href="#run_query"><CopyableCode code="run_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Queries for entities.</td>
</tr>
<tr>
    <td><a href="#run_aggregation_query"><CopyableCode code="run_aggregation_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Runs an aggregation query.</td>
</tr>
<tr>
    <td><a href="#begin_transaction"><CopyableCode code="begin_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Begins a new transaction.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Commits a transaction, optionally creating, deleting or modifying some entities.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Rolls back a transaction.</td>
</tr>
<tr>
    <td><a href="#allocate_ids"><CopyableCode code="allocate_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.</td>
</tr>
<tr>
    <td><a href="#reserve_ids"><CopyableCode code="reserve_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="export"
    values={[
        { label: 'export', value: 'export' },
        { label: 'import', value: 'import' },
        { label: 'lookup', value: 'lookup' },
        { label: 'run_query', value: 'run_query' },
        { label: 'run_aggregation_query', value: 'run_aggregation_query' },
        { label: 'begin_transaction', value: 'begin_transaction' },
        { label: 'commit', value: 'commit' },
        { label: 'rollback', value: 'rollback' },
        { label: 'allocate_ids', value: 'allocate_ids' },
        { label: 'reserve_ids', value: 'reserve_ids' }
    ]}
>
<TabItem value="export">

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

```sql
EXEC google.datastore.projects.export 
@projectId='{{ projectId }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"entityFilter": "{{ entityFilter }}", 
"outputUrlPrefix": "{{ outputUrlPrefix }}"
}';
```
</TabItem>
<TabItem value="import">

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

```sql
EXEC google.datastore.projects.import 
@projectId='{{ projectId }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"inputUrl": "{{ inputUrl }}", 
"entityFilter": "{{ entityFilter }}"
}';
```
</TabItem>
<TabItem value="lookup">

Looks up entities by key.

```sql
EXEC google.datastore.projects.lookup 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"readOptions": "{{ readOptions }}", 
"keys": "{{ keys }}", 
"propertyMask": "{{ propertyMask }}"
}';
```
</TabItem>
<TabItem value="run_query">

Queries for entities.

```sql
EXEC google.datastore.projects.run_query 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"partitionId": "{{ partitionId }}", 
"readOptions": "{{ readOptions }}", 
"query": "{{ query }}", 
"gqlQuery": "{{ gqlQuery }}", 
"propertyMask": "{{ propertyMask }}", 
"explainOptions": "{{ explainOptions }}"
}';
```
</TabItem>
<TabItem value="run_aggregation_query">

Runs an aggregation query.

```sql
EXEC google.datastore.projects.run_aggregation_query 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"partitionId": "{{ partitionId }}", 
"readOptions": "{{ readOptions }}", 
"aggregationQuery": "{{ aggregationQuery }}", 
"gqlQuery": "{{ gqlQuery }}", 
"explainOptions": "{{ explainOptions }}"
}';
```
</TabItem>
<TabItem value="begin_transaction">

Begins a new transaction.

```sql
EXEC google.datastore.projects.begin_transaction 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"transactionOptions": "{{ transactionOptions }}"
}';
```
</TabItem>
<TabItem value="commit">

Commits a transaction, optionally creating, deleting or modifying some entities.

```sql
EXEC google.datastore.projects.commit 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"mode": "{{ mode }}", 
"transaction": "{{ transaction }}", 
"singleUseTransaction": "{{ singleUseTransaction }}", 
"mutations": "{{ mutations }}"
}';
```
</TabItem>
<TabItem value="rollback">

Rolls back a transaction.

```sql
EXEC google.datastore.projects.rollback 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"transaction": "{{ transaction }}"
}';
```
</TabItem>
<TabItem value="allocate_ids">

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

```sql
EXEC google.datastore.projects.allocate_ids 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"keys": "{{ keys }}"
}';
```
</TabItem>
<TabItem value="reserve_ids">

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

```sql
EXEC google.datastore.projects.reserve_ids 
@projectId='{{ projectId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"keys": "{{ keys }}"
}';
```
</TabItem>
</Tabs>
