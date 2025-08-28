--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
  - workloadmanager
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workloadmanager.evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>name of resource names have the form 'projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/evaluations/&#123;evaluation_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="bigQueryDestination" /></td>
    <td><code>object</code></td>
    <td>Optional. BigQuery destination (id: BigQueryDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="customRulesBucket" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage bucket name for custom rules.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Evaluation</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationType" /></td>
    <td><code>string</code></td>
    <td>Evaluation type</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="resourceFilter" /></td>
    <td><code>object</code></td>
    <td>annotations as key value pairs (id: ResourceFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] The updated rule ids if exist. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleNames" /></td>
    <td><code>array</code></td>
    <td>the name of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="ruleVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output only] The updated rule ids if exist.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 */1 * * *", "0 */6 * * *", "0 */12 * * *", "0 0 */1 * *", "0 0 */7 * *",</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>name of resource names have the form 'projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/evaluations/&#123;evaluation_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="bigQueryDestination" /></td>
    <td><code>object</code></td>
    <td>Optional. BigQuery destination (id: BigQueryDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="customRulesBucket" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage bucket name for custom rules.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Evaluation</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationType" /></td>
    <td><code>string</code></td>
    <td>Evaluation type</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="resourceFilter" /></td>
    <td><code>object</code></td>
    <td>annotations as key value pairs (id: ResourceFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] The updated rule ids if exist. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleNames" /></td>
    <td><code>array</code></td>
    <td>the name of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="ruleVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output only] The updated rule ids if exist.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 */1 * * *", "0 */6 * * *", "0 */12 * * *", "0 0 */1 * *", "0 0 */7 * *",</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Evaluation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Evaluations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-evaluationId"><code>evaluationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Evaluation in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Evaluation.</td>
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
<tr id="parameter-evaluationsId">
    <td><CopyableCode code="evaluationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-evaluationId">
    <td><CopyableCode code="evaluationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single Evaluation.

```sql
SELECT
name,
bigQueryDestination,
createTime,
customRulesBucket,
description,
evaluationType,
kmsKey,
labels,
resourceFilter,
resourceStatus,
ruleNames,
ruleVersions,
schedule,
updateTime
FROM google.workloadmanager.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Evaluations in a given project and location.

```sql
SELECT
name,
bigQueryDestination,
createTime,
customRulesBucket,
description,
evaluationType,
kmsKey,
labels,
resourceFilter,
resourceStatus,
ruleNames,
ruleVersions,
schedule,
updateTime
FROM google.workloadmanager.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Evaluation in a given project and location.

```sql
INSERT INTO google.workloadmanager.evaluations (
data__name,
data__description,
data__resourceFilter,
data__ruleNames,
data__labels,
data__schedule,
data__customRulesBucket,
data__evaluationType,
data__bigQueryDestination,
data__kmsKey,
projectsId,
locationsId,
evaluationId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ resourceFilter }}',
'{{ ruleNames }}',
'{{ labels }}',
'{{ schedule }}',
'{{ customRulesBucket }}',
'{{ evaluationType }}',
'{{ bigQueryDestination }}',
'{{ kmsKey }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ evaluationId }}',
'{{ requestId }}'
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
- name: evaluations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the evaluations resource.
    - name: locationsId
      value: string
      description: Required parameter for the evaluations resource.
    - name: name
      value: string
      description: >
        name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'
        
    - name: description
      value: string
      description: >
        Description of the Evaluation
        
    - name: resourceFilter
      value: object
      description: >
        annotations as key value pairs
        
    - name: ruleNames
      value: array
      description: >
        the name of the rule
        
    - name: labels
      value: object
      description: >
        Labels as key value pairs
        
    - name: schedule
      value: string
      description: >
        crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 */1 * * *", "0 */6 * * *", "0 */12 * * *", "0 0 */1 * *", "0 0 */7 * *",
        
    - name: customRulesBucket
      value: string
      description: >
        The Cloud Storage bucket name for custom rules.
        
    - name: evaluationType
      value: string
      description: >
        Evaluation type
        
      valid_values: ['EVALUATION_TYPE_UNSPECIFIED', 'SAP', 'SQL_SERVER', 'OTHER', 'SCC_IAC']
    - name: bigQueryDestination
      value: object
      description: >
        Optional. BigQuery destination
        
    - name: kmsKey
      value: string
      description: >
        Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.
        
    - name: evaluationId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single Evaluation.

```sql
DELETE FROM google.workloadmanager.evaluations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationsId = '{{ evaluationsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
