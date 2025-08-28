--- 
title: context_lineage_subgraph
hide_title: false
hide_table_of_contents: false
keywords:
  - context_lineage_subgraph
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>context_lineage_subgraph</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>context_lineage_subgraph</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.context_lineage_subgraph" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="query_context_lineage_subgraph"
    values={[
        { label: 'query_context_lineage_subgraph', value: 'query_context_lineage_subgraph' }
    ]}
>
<TabItem value="query_context_lineage_subgraph">

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The Artifact nodes in the subgraph.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The Event edges between Artifacts and Executions in the subgraph.</td>
</tr>
<tr>
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>The Execution nodes in the subgraph.</td>
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
    <td><a href="#query_context_lineage_subgraph"><CopyableCode code="query_context_lineage_subgraph" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Retrieves Artifacts and Executions within the specified Context, connected by Event edges and returned as a LineageSubgraph.</td>
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
<tr id="parameter-contextsId">
    <td><CopyableCode code="contextsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-metadataStoresId">
    <td><CopyableCode code="metadataStoresId" /></td>
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
    defaultValue="query_context_lineage_subgraph"
    values={[
        { label: 'query_context_lineage_subgraph', value: 'query_context_lineage_subgraph' }
    ]}
>
<TabItem value="query_context_lineage_subgraph">

Retrieves Artifacts and Executions within the specified Context, connected by Event edges and returned as a LineageSubgraph.

```sql
SELECT
artifacts,
events,
executions
FROM google.aiplatform.context_lineage_subgraph
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataStoresId = '{{ metadataStoresId }}' -- required
AND contextsId = '{{ contextsId }}' -- required;
```
</TabItem>
</Tabs>
