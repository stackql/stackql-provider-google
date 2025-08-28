--- 
title: collectd_time_series
hide_title: false
hide_table_of_contents: false
keywords:
  - collectd_time_series
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>collectd_time_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>collectd_time_series</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.collectd_time_series" /></td></tr>
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
    <td><a href="#projects_collectd_time_series_create"><CopyableCode code="projects_collectd_time_series_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="projects_collectd_time_series_create"
    values={[
        { label: 'projects_collectd_time_series_create', value: 'projects_collectd_time_series_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_collectd_time_series_create">

Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.

```sql
INSERT INTO google.monitoring.collectd_time_series (
data__resource,
data__collectdVersion,
data__collectdPayloads,
projectsId
)
SELECT 
'{{ resource }}',
'{{ collectdVersion }}',
'{{ collectdPayloads }}',
'{{ projectsId }}'
RETURNING
payloadErrors,
summary
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: collectd_time_series
  props:
    - name: projectsId
      value: string
      description: Required parameter for the collectd_time_series resource.
    - name: resource
      value: object
      description: >
        The monitored resource associated with the time series.
        
    - name: collectdVersion
      value: string
      description: >
        The version of collectd that collected the data. Example: "5.3.0-192.el6".
        
    - name: collectdPayloads
      value: array
      description: >
        The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
        
```
</TabItem>
</Tabs>
