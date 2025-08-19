--- 
title: trials_measurement
hide_title: false
hide_table_of_contents: false
keywords:
  - trials_measurement
  - ml
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

Creates, updates, deletes, gets or lists a <code>trials_measurement</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>trials_measurement</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.trials_measurement" /></td></tr>
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
    <td><a href="#projects_locations_studies_trials_add_measurement"><CopyableCode code="projects_locations_studies_trials_add_measurement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-trialsId">
    <td><CopyableCode code="trialsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_studies_trials_add_measurement"
    values={[
        { label: 'projects_locations_studies_trials_add_measurement', value: 'projects_locations_studies_trials_add_measurement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_studies_trials_add_measurement">

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

```sql
INSERT INTO google.ml.trials_measurement (
data__measurement,
projectsId,
locationsId,
studiesId,
trialsId
)
SELECT 
'{{ measurement }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ studiesId }}',
'{{ trialsId }}'
RETURNING
name,
clientId,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
trialInfeasible
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: trials_measurement
  props:
    - name: projectsId
      value: string
      description: Required parameter for the trials_measurement resource.
    - name: locationsId
      value: string
      description: Required parameter for the trials_measurement resource.
    - name: studiesId
      value: string
      description: Required parameter for the trials_measurement resource.
    - name: trialsId
      value: string
      description: Required parameter for the trials_measurement resource.
    - name: measurement
      value: object
      description: >
        A message representing a measurement.
        
```
</TabItem>
</Tabs>
