--- 
title: trials_trial_measurement
hide_title: false
hide_table_of_contents: false
keywords:
  - trials_trial_measurement
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

Creates, updates, deletes, gets or lists a <code>trials_trial_measurement</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>trials_trial_measurement</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.trials_trial_measurement" /></td></tr>
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
    <td><a href="#add_trial_measurement"><CopyableCode code="add_trial_measurement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.</td>
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
    defaultValue="add_trial_measurement"
    values={[
        { label: 'add_trial_measurement', value: 'add_trial_measurement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_trial_measurement">

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

```sql
INSERT INTO google.aiplatform.trials_trial_measurement (
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
id,
name,
clientId,
customJob,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
webAccessUris
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: trials_trial_measurement
  props:
    - name: projectsId
      value: string
      description: Required parameter for the trials_trial_measurement resource.
    - name: locationsId
      value: string
      description: Required parameter for the trials_trial_measurement resource.
    - name: studiesId
      value: string
      description: Required parameter for the trials_trial_measurement resource.
    - name: trialsId
      value: string
      description: Required parameter for the trials_trial_measurement resource.
    - name: measurement
      value: object
      description: >
        A message representing a Measurement of a Trial. A Measurement contains the Metrics got by executing a Trial using suggested hyperparameter values.
        
```
</TabItem>
</Tabs>
