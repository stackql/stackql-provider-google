--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>exports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_analytics_exports_get"
    values={[
        { label: 'organizations_environments_analytics_exports_get', value: 'organizations_environments_analytics_exports_get' },
        { label: 'organizations_environments_analytics_exports_list', value: 'organizations_environments_analytics_exports_list' }
    ]}
>
<TabItem value="organizations_environments_analytics_exports_get">

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
    <td>Display name of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>Output only. Time the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datastoreName" /></td>
    <td><code>string</code></td>
    <td>Name of the datastore that is the destination of the export job [datastore]</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Output only. Error is set when export fails</td>
</tr>
<tr>
    <td><CopyableCode code="executionTime" /></td>
    <td><code>string</code></td>
    <td>Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string</code></td>
    <td>Output only. Time the export job was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_analytics_exports_list">

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
    <td><CopyableCode code="exports" /></td>
    <td><code>array</code></td>
    <td>Details of the export jobs.</td>
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
    <td><a href="#organizations_environments_analytics_exports_get"><CopyableCode code="organizations_environments_analytics_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-exportsId"><code>exportsId</code></a></td>
    <td></td>
    <td>Gets the details and status of an analytics export job. If the export job is still in progress, its `state` is set to "running". After the export job has completed successfully, its `state` is set to "completed". If the export job fails, its `state` is set to `failed`.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_analytics_exports_list"><CopyableCode code="organizations_environments_analytics_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Lists the details and status of all analytics export jobs belonging to the parent organization and environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_analytics_exports_create"><CopyableCode code="organizations_environments_analytics_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".</td>
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
<tr id="parameter-exportsId">
    <td><CopyableCode code="exportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_analytics_exports_get"
    values={[
        { label: 'organizations_environments_analytics_exports_get', value: 'organizations_environments_analytics_exports_get' },
        { label: 'organizations_environments_analytics_exports_list', value: 'organizations_environments_analytics_exports_list' }
    ]}
>
<TabItem value="organizations_environments_analytics_exports_get">

Gets the details and status of an analytics export job. If the export job is still in progress, its `state` is set to "running". After the export job has completed successfully, its `state` is set to "completed". If the export job fails, its `state` is set to `failed`.

```sql
SELECT
name,
created,
datastoreName,
description,
error,
executionTime,
self,
state,
updated
FROM google.apigee.exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND exportsId = '{{ exportsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_analytics_exports_list">

Lists the details and status of all analytics export jobs belonging to the parent organization and environment.

```sql
SELECT
exports
FROM google.apigee.exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_analytics_exports_create"
    values={[
        { label: 'organizations_environments_analytics_exports_create', value: 'organizations_environments_analytics_exports_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_analytics_exports_create">

Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".

```sql
INSERT INTO google.apigee.exports (
data__name,
data__description,
data__dateRange,
data__outputFormat,
data__csvDelimiter,
data__datastoreName,
organizationsId,
environmentsId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ dateRange }}',
'{{ outputFormat }}',
'{{ csvDelimiter }}',
'{{ datastoreName }}',
'{{ organizationsId }}',
'{{ environmentsId }}'
RETURNING
name,
created,
datastoreName,
description,
error,
executionTime,
self,
state,
updated
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: exports
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the exports resource.
    - name: environmentsId
      value: string
      description: Required parameter for the exports resource.
    - name: name
      value: string
      description: >
        Required. Display name of the export job.
        
    - name: description
      value: string
      description: >
        Optional. Description of the export job.
        
    - name: dateRange
      value: object
      description: >
        Required. Date range of the data to export.
        
    - name: outputFormat
      value: string
      description: >
        Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.
        
    - name: csvDelimiter
      value: string
      description: >
        Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`).
        
    - name: datastoreName
      value: string
      description: >
        Required. Name of the preconfigured datastore.
        
```
</TabItem>
</Tabs>
