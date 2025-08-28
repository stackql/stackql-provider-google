--- 
title: reports
hide_title: false
hide_table_of_contents: false
keywords:
  - reports
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

Creates, updates, deletes, gets or lists a <code>reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_reports_get"
    values={[
        { label: 'organizations_reports_get', value: 'organizations_reports_get' },
        { label: 'organizations_reports_list', value: 'organizations_reports_list' }
    ]}
>
<TabItem value="organizations_reports_get">

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
    <td>Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id</td>
</tr>
<tr>
    <td><CopyableCode code="chartType" /></td>
    <td><code>string</code></td>
    <td>This field contains the chart type for the report</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>array</code></td>
    <td>Legacy field: not used. This field contains a list of comments associated with custom report</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Unix time when the app was created json key: createdAt</td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>array</code></td>
    <td>This contains the list of dimensions for the report</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>This is the display name for the report</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Output only. Environment name</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>This field contains the filter expression</td>
</tr>
<tr>
    <td><CopyableCode code="fromTime" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used. Contains the from time for the report</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt</td>
</tr>
<tr>
    <td><CopyableCode code="lastViewedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Last viewed time of this entity as milliseconds since epoch</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used This field contains the limit for the result retrieved</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Required. This contains the list of metrics</td>
</tr>
<tr>
    <td><CopyableCode code="offset" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used. This field contains the offset for the data</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>string</code></td>
    <td>Output only. Organization name</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>This field contains report properties such as ui metadata etc.</td>
</tr>
<tr>
    <td><CopyableCode code="sortByCols" /></td>
    <td><code>array</code></td>
    <td>Legacy field: not used much. Contains the list of sort by columns</td>
</tr>
<tr>
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used much. Contains the sort order for the sort columns</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Legacy field: not used. This field contains a list of tags associated with custom report</td>
</tr>
<tr>
    <td><CopyableCode code="timeUnit" /></td>
    <td><code>string</code></td>
    <td>This field contains the time unit of aggregation for the report</td>
</tr>
<tr>
    <td><CopyableCode code="toTime" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used. Contains the end time for the report</td>
</tr>
<tr>
    <td><CopyableCode code="topk" /></td>
    <td><code>string</code></td>
    <td>Legacy field: not used. This field contains the top k parameter value for restricting the result</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_reports_list">

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
    <td><CopyableCode code="qualifier" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#organizations_reports_get"><CopyableCode code="organizations_reports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-reportsId"><code>reportsId</code></a></td>
    <td></td>
    <td>Retrieve a custom report definition.</td>
</tr>
<tr>
    <td><a href="#organizations_reports_list"><CopyableCode code="organizations_reports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-expand"><code>expand</code></a></td>
    <td>Return a list of Custom Reports</td>
</tr>
<tr>
    <td><a href="#organizations_reports_create"><CopyableCode code="organizations_reports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.</td>
</tr>
<tr>
    <td><a href="#organizations_reports_update"><CopyableCode code="organizations_reports_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-reportsId"><code>reportsId</code></a></td>
    <td></td>
    <td>Update an existing custom report definition</td>
</tr>
<tr>
    <td><a href="#organizations_reports_delete"><CopyableCode code="organizations_reports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-reportsId"><code>reportsId</code></a></td>
    <td></td>
    <td>Deletes an existing custom report definition</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reportsId">
    <td><CopyableCode code="reportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-expand">
    <td><CopyableCode code="expand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_reports_get"
    values={[
        { label: 'organizations_reports_get', value: 'organizations_reports_get' },
        { label: 'organizations_reports_list', value: 'organizations_reports_list' }
    ]}
>
<TabItem value="organizations_reports_get">

Retrieve a custom report definition.

```sql
SELECT
name,
chartType,
comments,
createdAt,
dimensions,
displayName,
environment,
filter,
fromTime,
lastModifiedAt,
lastViewedAt,
limit,
metrics,
offset,
organization,
properties,
sortByCols,
sortOrder,
tags,
timeUnit,
toTime,
topk
FROM google.apigee.reports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND reportsId = '{{ reportsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_reports_list">

Return a list of Custom Reports

```sql
SELECT
qualifier
FROM google.apigee.reports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND expand = '{{ expand }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_reports_create"
    values={[
        { label: 'organizations_reports_create', value: 'organizations_reports_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_reports_create">

Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.

```sql
INSERT INTO google.apigee.reports (
data__name,
data__displayName,
data__metrics,
data__dimensions,
data__filter,
data__properties,
data__chartType,
data__timeUnit,
data__sortByCols,
data__sortOrder,
data__fromTime,
data__toTime,
data__offset,
data__limit,
data__topk,
data__tags,
data__comments,
organizationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ metrics }}',
'{{ dimensions }}',
'{{ filter }}',
'{{ properties }}',
'{{ chartType }}',
'{{ timeUnit }}',
'{{ sortByCols }}',
'{{ sortOrder }}',
'{{ fromTime }}',
'{{ toTime }}',
'{{ offset }}',
'{{ limit }}',
'{{ topk }}',
'{{ tags }}',
'{{ comments }}',
'{{ organizationsId }}'
RETURNING
name,
chartType,
comments,
createdAt,
dimensions,
displayName,
environment,
filter,
fromTime,
lastModifiedAt,
lastViewedAt,
limit,
metrics,
offset,
organization,
properties,
sortByCols,
sortOrder,
tags,
timeUnit,
toTime,
topk
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reports
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the reports resource.
    - name: name
      value: string
      description: >
        Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id
        
    - name: displayName
      value: string
      description: >
        This is the display name for the report
        
    - name: metrics
      value: array
      description: >
        Required. This contains the list of metrics
        
    - name: dimensions
      value: array
      description: >
        This contains the list of dimensions for the report
        
    - name: filter
      value: string
      description: >
        This field contains the filter expression
        
    - name: properties
      value: array
      description: >
        This field contains report properties such as ui metadata etc.
        
    - name: chartType
      value: string
      description: >
        This field contains the chart type for the report
        
    - name: timeUnit
      value: string
      description: >
        This field contains the time unit of aggregation for the report
        
    - name: sortByCols
      value: array
      description: >
        Legacy field: not used much. Contains the list of sort by columns
        
    - name: sortOrder
      value: string
      description: >
        Legacy field: not used much. Contains the sort order for the sort columns
        
    - name: fromTime
      value: string
      description: >
        Legacy field: not used. Contains the from time for the report
        
    - name: toTime
      value: string
      description: >
        Legacy field: not used. Contains the end time for the report
        
    - name: offset
      value: string
      description: >
        Legacy field: not used. This field contains the offset for the data
        
    - name: limit
      value: string
      description: >
        Legacy field: not used This field contains the limit for the result retrieved
        
    - name: topk
      value: string
      description: >
        Legacy field: not used. This field contains the top k parameter value for restricting the result
        
    - name: tags
      value: array
      description: >
        Legacy field: not used. This field contains a list of tags associated with custom report
        
    - name: comments
      value: array
      description: >
        Legacy field: not used. This field contains a list of comments associated with custom report
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_reports_update"
    values={[
        { label: 'organizations_reports_update', value: 'organizations_reports_update' }
    ]}
>
<TabItem value="organizations_reports_update">

Update an existing custom report definition

```sql
REPLACE google.apigee.reports
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__metrics = '{{ metrics }}',
data__dimensions = '{{ dimensions }}',
data__filter = '{{ filter }}',
data__properties = '{{ properties }}',
data__chartType = '{{ chartType }}',
data__timeUnit = '{{ timeUnit }}',
data__sortByCols = '{{ sortByCols }}',
data__sortOrder = '{{ sortOrder }}',
data__fromTime = '{{ fromTime }}',
data__toTime = '{{ toTime }}',
data__offset = '{{ offset }}',
data__limit = '{{ limit }}',
data__topk = '{{ topk }}',
data__tags = '{{ tags }}',
data__comments = '{{ comments }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND reportsId = '{{ reportsId }}' --required
RETURNING
name,
chartType,
comments,
createdAt,
dimensions,
displayName,
environment,
filter,
fromTime,
lastModifiedAt,
lastViewedAt,
limit,
metrics,
offset,
organization,
properties,
sortByCols,
sortOrder,
tags,
timeUnit,
toTime,
topk;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_reports_delete"
    values={[
        { label: 'organizations_reports_delete', value: 'organizations_reports_delete' }
    ]}
>
<TabItem value="organizations_reports_delete">

Deletes an existing custom report definition

```sql
DELETE FROM google.apigee.reports
WHERE organizationsId = '{{ organizationsId }}' --required
AND reportsId = '{{ reportsId }}' --required;
```
</TabItem>
</Tabs>
