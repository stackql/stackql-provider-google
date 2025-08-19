--- 
title: contexts_context_artifacts_and_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - contexts_context_artifacts_and_executions
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

Creates, updates, deletes, gets or lists a <code>contexts_context_artifacts_and_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contexts_context_artifacts_and_executions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.contexts_context_artifacts_and_executions" /></td></tr>
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
    <td><a href="#add_context_artifacts_and_executions"><CopyableCode code="add_context_artifacts_and_executions" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="add_context_artifacts_and_executions"
    values={[
        { label: 'add_context_artifacts_and_executions', value: 'add_context_artifacts_and_executions' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_context_artifacts_and_executions">

Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.

```sql
INSERT INTO google.aiplatform.contexts_context_artifacts_and_executions (
data__artifacts,
data__executions,
projectsId,
locationsId,
metadataStoresId,
contextsId
)
SELECT 
'{{ artifacts }}',
'{{ executions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ metadataStoresId }}',
'{{ contextsId }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: contexts_context_artifacts_and_executions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the contexts_context_artifacts_and_executions resource.
    - name: locationsId
      value: string
      description: Required parameter for the contexts_context_artifacts_and_executions resource.
    - name: metadataStoresId
      value: string
      description: Required parameter for the contexts_context_artifacts_and_executions resource.
    - name: contextsId
      value: string
      description: Required parameter for the contexts_context_artifacts_and_executions resource.
    - name: artifacts
      value: array
      description: >
        The resource names of the Artifacts to attribute to the Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}`
        
    - name: executions
      value: array
      description: >
        The resource names of the Executions to associate with the Context. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
        
```
</TabItem>
</Tabs>
