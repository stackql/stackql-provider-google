--- 
title: cloud_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_functions
  - integrations
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

Creates, updates, deletes, gets or lists a <code>cloud_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloud_functions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.cloud_functions" /></td></tr>
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
    <td><a href="#projects_locations_products_cloud_functions_create"><CopyableCode code="projects_locations_products_cloud_functions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Creates a cloud function project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_cloud_functions_create"><CopyableCode code="projects_locations_cloud_functions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a cloud function project.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
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
    defaultValue="projects_locations_products_cloud_functions_create"
    values={[
        { label: 'projects_locations_products_cloud_functions_create', value: 'projects_locations_products_cloud_functions_create' },
        { label: 'projects_locations_cloud_functions_create', value: 'projects_locations_cloud_functions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_cloud_functions_create">

Creates a cloud function project.

```sql
INSERT INTO google.integrations.cloud_functions (
data__projectId,
data__functionName,
data__functionRegion,
data__gcfApiVersion,
projectsId,
locationsId,
productsId
)
SELECT 
'{{ projectId }}',
'{{ functionName }}',
'{{ functionRegion }}',
'{{ gcfApiVersion }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}'
RETURNING
triggerUrl
;
```
</TabItem>
<TabItem value="projects_locations_cloud_functions_create">

Creates a cloud function project.

```sql
INSERT INTO google.integrations.cloud_functions (
data__projectId,
data__functionName,
data__functionRegion,
data__gcfApiVersion,
projectsId,
locationsId
)
SELECT 
'{{ projectId }}',
'{{ functionName }}',
'{{ functionRegion }}',
'{{ gcfApiVersion }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
triggerUrl
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: cloud_functions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the cloud_functions resource.
    - name: locationsId
      value: string
      description: Required parameter for the cloud_functions resource.
    - name: productsId
      value: string
      description: Required parameter for the cloud_functions resource.
    - name: projectId
      value: string
      description: >
        Indicates the id of the GCP project that the function will be created in.
        
    - name: functionName
      value: string
      description: >
        The function name of CF to be created
        
    - name: functionRegion
      value: string
      description: >
        The function region of CF to be created
        
    - name: gcfApiVersion
      value: string
      description: >
        Optional. The api version of CF to be created
        
      valid_values: ['GCF_API_VERSION_UNSPECIFIED', 'API_VERSION_V1', 'API_VERSION_V2']
```
</TabItem>
</Tabs>
