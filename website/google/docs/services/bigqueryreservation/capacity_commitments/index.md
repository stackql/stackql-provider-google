--- 
title: capacity_commitments
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_commitments
  - bigqueryreservation
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

Creates, updates, deletes, gets or lists a <code>capacity_commitments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>capacity_commitments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigqueryreservation.capacity_commitments" /></td></tr>
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
    <td>Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after renewal, commitment_end_time is the time the renewed commitment expires. So itwould be at a time after commitment_start_time + committed period, because we don't change commitment_start_time ,</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after the commitment is renewed, commitment_start_time won't be changed. It refers to the start time of the original commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. Edition of the capacity commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="failureStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. For FAILED commitment plan, provides the reason of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="isFlatRate" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, the commitment is a flat-rate commitment, otherwise, it's an edition commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRegionAuxiliary" /></td>
    <td><code>boolean</code></td>
    <td>Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Optional. Capacity commitment commitment plan.</td>
</tr>
<tr>
    <td><CopyableCode code="renewalPlan" /></td>
    <td><code>string</code></td>
    <td>Optional. The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL and TRIAL commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="slotCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Number of slots in this commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the commitment.</td>
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
    <td>Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after renewal, commitment_end_time is the time the renewed commitment expires. So itwould be at a time after commitment_start_time + committed period, because we don't change commitment_start_time ,</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after the commitment is renewed, commitment_start_time won't be changed. It refers to the start time of the original commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. Edition of the capacity commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="failureStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. For FAILED commitment plan, provides the reason of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="isFlatRate" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, the commitment is a flat-rate commitment, otherwise, it's an edition commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRegionAuxiliary" /></td>
    <td><code>boolean</code></td>
    <td>Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Optional. Capacity commitment commitment plan.</td>
</tr>
<tr>
    <td><CopyableCode code="renewalPlan" /></td>
    <td><code>string</code></td>
    <td>Optional. The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL and TRIAL commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="slotCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Number of slots in this commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the commitment.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-capacityCommitmentsId"><code>capacityCommitmentsId</code></a></td>
    <td></td>
    <td>Returns information about the capacity commitment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the capacity commitments for the admin project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-enforceSingleAdminProjectPerOrg"><code>enforceSingleAdminProjectPerOrg</code></a>, <a href="#parameter-capacityCommitmentId"><code>capacityCommitmentId</code></a></td>
    <td>Creates a new capacity commitment resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-capacityCommitmentsId"><code>capacityCommitmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-capacityCommitmentsId"><code>capacityCommitmentsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.</td>
</tr>
<tr>
    <td><a href="#split"><CopyableCode code="split" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-capacityCommitmentsId"><code>capacityCommitmentsId</code></a></td>
    <td></td>
    <td>Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.</td>
</tr>
<tr>
    <td><a href="#merge"><CopyableCode code="merge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.</td>
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
<tr id="parameter-capacityCommitmentsId">
    <td><CopyableCode code="capacityCommitmentsId" /></td>
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
<tr id="parameter-capacityCommitmentId">
    <td><CopyableCode code="capacityCommitmentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleAdminProjectPerOrg">
    <td><CopyableCode code="enforceSingleAdminProjectPerOrg" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Returns information about the capacity commitment.

```sql
SELECT
name,
commitmentEndTime,
commitmentStartTime,
edition,
failureStatus,
isFlatRate,
multiRegionAuxiliary,
plan,
renewalPlan,
slotCount,
state
FROM google.bigqueryreservation.capacity_commitments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND capacityCommitmentsId = '{{ capacityCommitmentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all the capacity commitments for the admin project.

```sql
SELECT
name,
commitmentEndTime,
commitmentStartTime,
edition,
failureStatus,
isFlatRate,
multiRegionAuxiliary,
plan,
renewalPlan,
slotCount,
state
FROM google.bigqueryreservation.capacity_commitments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new capacity commitment resource.

```sql
INSERT INTO google.bigqueryreservation.capacity_commitments (
data__slotCount,
data__plan,
data__renewalPlan,
data__multiRegionAuxiliary,
data__edition,
projectsId,
locationsId,
enforceSingleAdminProjectPerOrg,
capacityCommitmentId
)
SELECT 
'{{ slotCount }}',
'{{ plan }}',
'{{ renewalPlan }}',
{{ multiRegionAuxiliary }},
'{{ edition }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ enforceSingleAdminProjectPerOrg }}',
'{{ capacityCommitmentId }}'
RETURNING
name,
commitmentEndTime,
commitmentStartTime,
edition,
failureStatus,
isFlatRate,
multiRegionAuxiliary,
plan,
renewalPlan,
slotCount,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: capacity_commitments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the capacity_commitments resource.
    - name: locationsId
      value: string
      description: Required parameter for the capacity_commitments resource.
    - name: slotCount
      value: string
      description: >
        Optional. Number of slots in this commitment.
        
    - name: plan
      value: string
      description: >
        Optional. Capacity commitment commitment plan.
        
      valid_values: ['COMMITMENT_PLAN_UNSPECIFIED', 'FLEX', 'FLEX_FLAT_RATE', 'TRIAL', 'MONTHLY', 'MONTHLY_FLAT_RATE', 'ANNUAL', 'ANNUAL_FLAT_RATE', 'THREE_YEAR', 'NONE']
    - name: renewalPlan
      value: string
      description: >
        Optional. The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL and TRIAL commitments.
        
      valid_values: ['COMMITMENT_PLAN_UNSPECIFIED', 'FLEX', 'FLEX_FLAT_RATE', 'TRIAL', 'MONTHLY', 'MONTHLY_FLAT_RATE', 'ANNUAL', 'ANNUAL_FLAT_RATE', 'THREE_YEAR', 'NONE']
    - name: multiRegionAuxiliary
      value: boolean
      description: >
        Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
        
    - name: edition
      value: string
      description: >
        Optional. Edition of the capacity commitment.
        
      valid_values: ['EDITION_UNSPECIFIED', 'STANDARD', 'ENTERPRISE', 'ENTERPRISE_PLUS']
    - name: enforceSingleAdminProjectPerOrg
      value: boolean
    - name: capacityCommitmentId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

```sql
UPDATE google.bigqueryreservation.capacity_commitments
SET 
data__slotCount = '{{ slotCount }}',
data__plan = '{{ plan }}',
data__renewalPlan = '{{ renewalPlan }}',
data__multiRegionAuxiliary = {{ multiRegionAuxiliary }},
data__edition = '{{ edition }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND capacityCommitmentsId = '{{ capacityCommitmentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
commitmentEndTime,
commitmentStartTime,
edition,
failureStatus,
isFlatRate,
multiRegionAuxiliary,
plan,
renewalPlan,
slotCount,
state;
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

Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

```sql
DELETE FROM google.bigqueryreservation.capacity_commitments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND capacityCommitmentsId = '{{ capacityCommitmentsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="split"
    values={[
        { label: 'split', value: 'split' },
        { label: 'merge', value: 'merge' }
    ]}
>
<TabItem value="split">

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

```sql
EXEC google.bigqueryreservation.capacity_commitments.split 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@capacityCommitmentsId='{{ capacityCommitmentsId }}' --required 
@@json=
'{
"slotCount": "{{ slotCount }}"
}';
```
</TabItem>
<TabItem value="merge">

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

```sql
EXEC google.bigqueryreservation.capacity_commitments.merge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"capacityCommitmentIds": "{{ capacityCommitmentIds }}", 
"capacityCommitmentId": "{{ capacityCommitmentId }}"
}';
```
</TabItem>
</Tabs>
