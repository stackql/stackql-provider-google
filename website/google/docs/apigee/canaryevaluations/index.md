--- 
title: canaryevaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - canaryevaluations
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

Creates, updates, deletes, gets or lists a <code>canaryevaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>canaryevaluations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.canaryevaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_instances_canaryevaluations_get"
    values={[
        { label: 'organizations_instances_canaryevaluations_get', value: 'organizations_instances_canaryevaluations_get' }
    ]}
>
<TabItem value="organizations_instances_canaryevaluations_get">

CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.

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
    <td>Output only. Name of the canary evalution.</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>string</code></td>
    <td>Required. The stable version that is serving requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the canary evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. End time for the evaluation's analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="metricLabels" /></td>
    <td><code>object</code></td>
    <td>Required. Labels used to filter the metrics used for a canary evaluation. (id: GoogleCloudApigeeV1CanaryEvaluationMetricLabels)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. Start time for the canary evaluation's analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the canary evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="treatment" /></td>
    <td><code>string</code></td>
    <td>Required. The newer version that is serving requests.</td>
</tr>
<tr>
    <td><CopyableCode code="verdict" /></td>
    <td><code>string</code></td>
    <td>Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.</td>
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
    <td><a href="#organizations_instances_canaryevaluations_get"><CopyableCode code="organizations_instances_canaryevaluations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-canaryevaluationsId"><code>canaryevaluationsId</code></a></td>
    <td></td>
    <td>Gets a CanaryEvaluation for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_canaryevaluations_create"><CopyableCode code="organizations_instances_canaryevaluations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a new canary evaluation for an organization.</td>
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
<tr id="parameter-canaryevaluationsId">
    <td><CopyableCode code="canaryevaluationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
    defaultValue="organizations_instances_canaryevaluations_get"
    values={[
        { label: 'organizations_instances_canaryevaluations_get', value: 'organizations_instances_canaryevaluations_get' }
    ]}
>
<TabItem value="organizations_instances_canaryevaluations_get">

Gets a CanaryEvaluation for an organization.

```sql
SELECT
name,
control,
createTime,
endTime,
metricLabels,
startTime,
state,
treatment,
verdict
FROM google.apigee.canaryevaluations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND canaryevaluationsId = '{{ canaryevaluationsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_instances_canaryevaluations_create"
    values={[
        { label: 'organizations_instances_canaryevaluations_create', value: 'organizations_instances_canaryevaluations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_instances_canaryevaluations_create">

Creates a new canary evaluation for an organization.

```sql
INSERT INTO google.apigee.canaryevaluations (
data__startTime,
data__endTime,
data__metricLabels,
data__control,
data__treatment,
organizationsId,
instancesId
)
SELECT 
'{{ startTime }}',
'{{ endTime }}',
'{{ metricLabels }}',
'{{ control }}',
'{{ treatment }}',
'{{ organizationsId }}',
'{{ instancesId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: canaryevaluations
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the canaryevaluations resource.
    - name: instancesId
      value: string
      description: Required parameter for the canaryevaluations resource.
    - name: startTime
      value: string
      description: >
        Required. Start time for the canary evaluation's analysis.
        
    - name: endTime
      value: string
      description: >
        Required. End time for the evaluation's analysis.
        
    - name: metricLabels
      value: object
      description: >
        Required. Labels used to filter the metrics used for a canary evaluation.
        
    - name: control
      value: string
      description: >
        Required. The stable version that is serving requests.
        
    - name: treatment
      value: string
      description: >
        Required. The newer version that is serving requests.
        
```
</TabItem>
</Tabs>
