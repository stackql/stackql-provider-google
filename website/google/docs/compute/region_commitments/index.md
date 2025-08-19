--- 
title: region_commitments
hide_title: false
hide_table_of_contents: false
keywords:
  - region_commitments
  - compute
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

Creates, updates, deletes, gets or lists a <code>region_commitments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>region_commitments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.region_commitments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Represents a regional resource-based commitment resource. Creating this commitment resource means that you are purchasing a resource-based committed use contract, with an explicit start and end time. You can purchase resource-based commitments for both hardware and software resources. For more information, read Resource-based committed use discounts

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the commitment. You must specify a name when you purchase the commitment. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to automatically renew the commitment at the end of its current term. The default value is false. If you set the field to true, each time your commitment reaches the end of its term, Compute Engine automatically renews it for another term. You can update this field anytime before the commitment expires. For example, if the commitment is set to expire at 12 AM UTC-8 on January 3, 2027, you can update this field until 11:59 PM UTC-8 on January 2, 2027.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the commitment; specifies whether the commitment is for hardware or software resources. Category MACHINE specifies that you are committing to hardware machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE specifies that you are committing to software licenses, listed in licenseResources. Note that if you specify MACHINE commitments, then you must also specify a type to indicate the machine series of the hardware resource that you are committing to.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customEndTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Input Only] Optional, specifies the requested commitment end time in RFC3339 text format. Use this option when the desired commitment's end date is later than the start date + term duration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the commitment. You can provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Commitment end time in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="existingReservations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#commitment for commitments. (default: compute#commitment)</td>
</tr>
<tr>
    <td><CopyableCode code="licenseResource" /></td>
    <td><code>object</code></td>
    <td>The license specification required as part of a license commitment. (id: LicenseResourceCommitment)</td>
</tr>
<tr>
    <td><CopyableCode code="mergeSourceCommitments" /></td>
    <td><code>array</code></td>
    <td>The list of source commitments that you are merging to create the new merged commitment. For more information, see Merging commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>The minimum time duration that you commit to purchasing resources. The plan that you choose determines the preset term length of the commitment (which is 1 year or 3 years) and affects the discount rate that you receive for your resources. Committing to a longer time duration typically gives you a higher discount rate. The supported values for this field are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the commitment and committed resources are located.</td>
</tr>
<tr>
    <td><CopyableCode code="reservations" /></td>
    <td><code>array</code></td>
    <td>The list of new reservations that you want to create and attach to this commitment. You must attach reservations to your commitment if your commitment specifies any GPUs or Local SSD disks. For more information, see Attach reservations to resource-based commitments. Specify this property only if you want to create new reservations to attach. To attach existing reservations, specify the existingReservations property instead.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Status information for Commitment resource. (id: CommitmentResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The list of all the hardware resources, with their types and amounts, that you want to commit to. Specify as a separate entry in the list for each individual resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="splitSourceCommitment" /></td>
    <td><code>string</code></td>
    <td>The source commitment from which you are transferring resources to create the new split commitment. For more information, see Split commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="startTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Commitment start time in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). Status can be one of the following values: NOT_YET_ACTIVE, ACTIVE, or EXPIRED.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional, human-readable explanation of the status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of commitment; specifies the machine series for which you want to commit to purchasing resources. The choice of machine series affects the discount rate and the eligible resource types. The type must be one of the following: ACCELERATOR_OPTIMIZED, ACCELERATOR_OPTIMIZED_A3, ACCELERATOR_OPTIMIZED_A3_MEGA, COMPUTE_OPTIMIZED, COMPUTE_OPTIMIZED_C2D, COMPUTE_OPTIMIZED_C3, COMPUTE_OPTIMIZED_C3D, COMPUTE_OPTIMIZED_H3, GENERAL_PURPOSE, GENERAL_PURPOSE_C4, GENERAL_PURPOSE_E2, GENERAL_PURPOSE_N2, GENERAL_PURPOSE_N2D, GENERAL_PURPOSE_N4, GENERAL_PURPOSE_T2D, GRAPHICS_OPTIMIZED, MEMORY_OPTIMIZED, MEMORY_OPTIMIZED_M3, MEMORY_OPTIMIZED_X4, STORAGE_OPTIMIZED_Z3. For example, type MEMORY_OPTIMIZED specifies a commitment that applies only to eligible resources of memory optimized M1 and M2 machine series. Type GENERAL_PURPOSE specifies a commitment that applies only to eligible resources of general purpose N1 machine series.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of Commitment resources.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Commitment resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#commitmentList for lists of commitments. (default: compute#commitmentList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>object</code></td>
    <td>A list of CommitmentsScopedList resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#commitmentAggregatedList for aggregated lists of commitments. (default: compute#commitmentAggregatedList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachables" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Unreachable resources.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commitment"><code>commitment</code></a></td>
    <td></td>
    <td>Returns the specified commitment resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of commitments contained within the specified region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of commitments by region. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a commitment in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commitment"><code>commitment</code></a></td>
    <td><a href="#parameter-paths"><code>paths</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be updated: auto_renew and plan.</td>
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
<tr id="parameter-commitment">
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
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
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified commitment resource.

```sql
SELECT
id,
name,
autoRenew,
category,
creationTimestamp,
customEndTimestamp,
description,
endTimestamp,
existingReservations,
kind,
licenseResource,
mergeSourceCommitments,
plan,
region,
reservations,
resourceStatus,
resources,
selfLink,
splitSourceCommitment,
startTimestamp,
status,
statusMessage,
type
FROM google.compute.region_commitments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND commitment = '{{ commitment }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of commitments contained within the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.region_commitments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of commitments by region. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
unreachables,
warning
FROM google.compute.region_commitments
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a commitment in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.region_commitments (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__region,
data__selfLink,
data__status,
data__statusMessage,
data__plan,
data__startTimestamp,
data__endTimestamp,
data__category,
data__resources,
data__type,
data__reservations,
data__licenseResource,
data__autoRenew,
data__mergeSourceCommitments,
data__splitSourceCommitment,
data__resourceStatus,
data__existingReservations,
data__customEndTimestamp,
project,
region,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ region }}',
'{{ selfLink }}',
'{{ status }}',
'{{ statusMessage }}',
'{{ plan }}',
'{{ startTimestamp }}',
'{{ endTimestamp }}',
'{{ category }}',
'{{ resources }}',
'{{ type }}',
'{{ reservations }}',
'{{ licenseResource }}',
{{ autoRenew }},
'{{ mergeSourceCommitments }}',
'{{ splitSourceCommitment }}',
'{{ resourceStatus }}',
'{{ existingReservations }}',
'{{ customEndTimestamp }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: region_commitments
  props:
    - name: project
      value: string
      description: Required parameter for the region_commitments resource.
    - name: region
      value: string
      description: Required parameter for the region_commitments resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#commitment for commitments.
        
      default: compute#commitment
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the commitment. You must specify a name when you purchase the commitment. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of the commitment. You can provide this property when you create the resource.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the commitment and committed resources are located.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: status
      value: string
      description: >
        [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). Status can be one of the following values: NOT_YET_ACTIVE, ACTIVE, or EXPIRED.
        
      valid_values: ['ACTIVE', 'CANCELLED', 'CREATING', 'EXPIRED', 'NOT_YET_ACTIVE']
    - name: statusMessage
      value: string
      description: >
        [Output Only] An optional, human-readable explanation of the status.
        
    - name: plan
      value: string
      description: >
        The minimum time duration that you commit to purchasing resources. The plan that you choose determines the preset term length of the commitment (which is 1 year or 3 years) and affects the discount rate that you receive for your resources. Committing to a longer time duration typically gives you a higher discount rate. The supported values for this field are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
        
      valid_values: ['INVALID', 'THIRTY_SIX_MONTH', 'TWELVE_MONTH']
    - name: startTimestamp
      value: string
      description: >
        [Output Only] Commitment start time in RFC3339 text format.
        
    - name: endTimestamp
      value: string
      description: >
        [Output Only] Commitment end time in RFC3339 text format.
        
    - name: category
      value: string
      description: >
        The category of the commitment; specifies whether the commitment is for hardware or software resources. Category MACHINE specifies that you are committing to hardware machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE specifies that you are committing to software licenses, listed in licenseResources. Note that if you specify MACHINE commitments, then you must also specify a type to indicate the machine series of the hardware resource that you are committing to.
        
      valid_values: ['CATEGORY_UNSPECIFIED', 'LICENSE', 'MACHINE']
    - name: resources
      value: array
      description: >
        The list of all the hardware resources, with their types and amounts, that you want to commit to. Specify as a separate entry in the list for each individual resource type.
        
    - name: type
      value: string
      description: >
        The type of commitment; specifies the machine series for which you want to commit to purchasing resources. The choice of machine series affects the discount rate and the eligible resource types. The type must be one of the following: ACCELERATOR_OPTIMIZED, ACCELERATOR_OPTIMIZED_A3, ACCELERATOR_OPTIMIZED_A3_MEGA, COMPUTE_OPTIMIZED, COMPUTE_OPTIMIZED_C2D, COMPUTE_OPTIMIZED_C3, COMPUTE_OPTIMIZED_C3D, COMPUTE_OPTIMIZED_H3, GENERAL_PURPOSE, GENERAL_PURPOSE_C4, GENERAL_PURPOSE_E2, GENERAL_PURPOSE_N2, GENERAL_PURPOSE_N2D, GENERAL_PURPOSE_N4, GENERAL_PURPOSE_T2D, GRAPHICS_OPTIMIZED, MEMORY_OPTIMIZED, MEMORY_OPTIMIZED_M3, MEMORY_OPTIMIZED_X4, STORAGE_OPTIMIZED_Z3. For example, type MEMORY_OPTIMIZED specifies a commitment that applies only to eligible resources of memory optimized M1 and M2 machine series. Type GENERAL_PURPOSE specifies a commitment that applies only to eligible resources of general purpose N1 machine series.
        
      valid_values: ['ACCELERATOR_OPTIMIZED', 'ACCELERATOR_OPTIMIZED_A3', 'ACCELERATOR_OPTIMIZED_A3_MEGA', 'ACCELERATOR_OPTIMIZED_A3_ULTRA', 'ACCELERATOR_OPTIMIZED_A4', 'COMPUTE_OPTIMIZED', 'COMPUTE_OPTIMIZED_C2D', 'COMPUTE_OPTIMIZED_C3', 'COMPUTE_OPTIMIZED_C3D', 'COMPUTE_OPTIMIZED_H3', 'COMPUTE_OPTIMIZED_H4D', 'GENERAL_PURPOSE', 'GENERAL_PURPOSE_C4', 'GENERAL_PURPOSE_C4A', 'GENERAL_PURPOSE_C4D', 'GENERAL_PURPOSE_E2', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_N4', 'GENERAL_PURPOSE_T2D', 'GRAPHICS_OPTIMIZED', 'MEMORY_OPTIMIZED', 'MEMORY_OPTIMIZED_M3', 'MEMORY_OPTIMIZED_M4', 'MEMORY_OPTIMIZED_M4_6TB', 'MEMORY_OPTIMIZED_X4_16TB', 'MEMORY_OPTIMIZED_X4_24TB', 'MEMORY_OPTIMIZED_X4_32TB', 'STORAGE_OPTIMIZED_Z3', 'TYPE_UNSPECIFIED']
    - name: reservations
      value: array
      description: >
        The list of new reservations that you want to create and attach to this commitment. You must attach reservations to your commitment if your commitment specifies any GPUs or Local SSD disks. For more information, see Attach reservations to resource-based commitments. Specify this property only if you want to create new reservations to attach. To attach existing reservations, specify the existingReservations property instead.
        
    - name: licenseResource
      value: object
      description: >
        The license specification required as part of a license commitment.
        
    - name: autoRenew
      value: boolean
      description: >
        Specifies whether to automatically renew the commitment at the end of its current term. The default value is false. If you set the field to true, each time your commitment reaches the end of its term, Compute Engine automatically renews it for another term. You can update this field anytime before the commitment expires. For example, if the commitment is set to expire at 12 AM UTC-8 on January 3, 2027, you can update this field until 11:59 PM UTC-8 on January 2, 2027.
        
    - name: mergeSourceCommitments
      value: array
      description: >
        The list of source commitments that you are merging to create the new merged commitment. For more information, see Merging commitments.
        
    - name: splitSourceCommitment
      value: string
      description: >
        The source commitment from which you are transferring resources to create the new split commitment. For more information, see Split commitments.
        
    - name: resourceStatus
      value: object
      description: >
        [Output Only] Status information for Commitment resource.
        
    - name: existingReservations
      value: array
    - name: customEndTimestamp
      value: string
      description: >
        [Input Only] Optional, specifies the requested commitment end time in RFC3339 text format. Use this option when the desired commitment's end date is later than the start date + term duration.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be updated: auto_renew and plan.

```sql
UPDATE google.compute.region_commitments
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__region = '{{ region }}',
data__selfLink = '{{ selfLink }}',
data__status = '{{ status }}',
data__statusMessage = '{{ statusMessage }}',
data__plan = '{{ plan }}',
data__startTimestamp = '{{ startTimestamp }}',
data__endTimestamp = '{{ endTimestamp }}',
data__category = '{{ category }}',
data__resources = '{{ resources }}',
data__type = '{{ type }}',
data__reservations = '{{ reservations }}',
data__licenseResource = '{{ licenseResource }}',
data__autoRenew = {{ autoRenew }},
data__mergeSourceCommitments = '{{ mergeSourceCommitments }}',
data__splitSourceCommitment = '{{ splitSourceCommitment }}',
data__resourceStatus = '{{ resourceStatus }}',
data__existingReservations = '{{ existingReservations }}',
data__customEndTimestamp = '{{ customEndTimestamp }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND commitment = '{{ commitment }}' --required
AND paths = '{{ paths}}'
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
```
</TabItem>
</Tabs>
