--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
  - clouddeploy
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

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rollouts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.rollouts" /></td></tr>
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
    <td>Identifier. Name of the `Rollout`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;/rollouts/&#123;rollout&#125;`. The `rollout` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="activeRepairAutomationRun" /></td>
    <td><code>string</code></td>
    <td>Output only. The AutomationRun actively repairing the rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalState" /></td>
    <td><code>string</code></td>
    <td>Output only. Approval state of the `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="approveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was approved.</td>
</tr>
<tr>
    <td><CopyableCode code="controllerRollout" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the `ControllerRollout`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;/rollouts/&#123;rollout&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` finished deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="deployFailureCause" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="deployStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` started deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="deployingBuild" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/builds/&#123;build&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Rollout` for user purposes. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enqueueTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was enqueued.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the rollout failure, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata contains information about the rollout. (id: Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="phases" /></td>
    <td><code>array</code></td>
    <td>Output only. The phases that represent the workflows of this `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackOfRollout" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="rolledBackByRollouts" /></td>
    <td><code>array</code></td>
    <td>Output only. Names of `Rollouts` that rolled back this `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Required. The ID of Target to which this `Rollout` is deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Rollout`.</td>
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
    <td>Identifier. Name of the `Rollout`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;/rollouts/&#123;rollout&#125;`. The `rollout` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="activeRepairAutomationRun" /></td>
    <td><code>string</code></td>
    <td>Output only. The AutomationRun actively repairing the rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalState" /></td>
    <td><code>string</code></td>
    <td>Output only. Approval state of the `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="approveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was approved.</td>
</tr>
<tr>
    <td><CopyableCode code="controllerRollout" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the `ControllerRollout`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;/rollouts/&#123;rollout&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` finished deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="deployFailureCause" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="deployStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` started deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="deployingBuild" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/builds/&#123;build&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Rollout` for user purposes. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enqueueTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Rollout` was enqueued.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the rollout failure, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata contains information about the rollout. (id: Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="phases" /></td>
    <td><code>array</code></td>
    <td>Output only. The phases that represent the workflows of this `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackOfRollout" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="rolledBackByRollouts" /></td>
    <td><code>array</code></td>
    <td>Output only. Names of `Rollouts` that rolled back this `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the `Rollout`.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Required. The ID of Target to which this `Rollout` is deploying.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Rollout`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Gets details of a single Rollout.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Rollouts in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td><a href="#parameter-rolloutId"><code>rolloutId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-overrideDeployPolicy"><code>overrideDeployPolicy</code></a>, <a href="#parameter-startingPhaseId"><code>startingPhaseId</code></a></td>
    <td>Creates a new Rollout in a given project and location.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Approves a Rollout.</td>
</tr>
<tr>
    <td><a href="#advance"><CopyableCode code="advance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Advances a Rollout in a given project and location.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Cancels a Rollout in a given project and location.</td>
</tr>
<tr>
    <td><a href="#ignore_job"><CopyableCode code="ignore_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Ignores the specified Job in a Rollout.</td>
</tr>
<tr>
    <td><a href="#retry_job"><CopyableCode code="retry_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Retries the specified Job in a Rollout.</td>
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
<tr id="parameter-deliveryPipelinesId">
    <td><CopyableCode code="deliveryPipelinesId" /></td>
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
<tr id="parameter-releasesId">
    <td><CopyableCode code="releasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rolloutsId">
    <td><CopyableCode code="rolloutsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-overrideDeployPolicy">
    <td><CopyableCode code="overrideDeployPolicy" /></td>
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
<tr id="parameter-rolloutId">
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startingPhaseId">
    <td><CopyableCode code="startingPhaseId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single Rollout.

```sql
SELECT
name,
activeRepairAutomationRun,
annotations,
approvalState,
approveTime,
controllerRollout,
createTime,
deployEndTime,
deployFailureCause,
deployStartTime,
deployingBuild,
description,
enqueueTime,
etag,
failureReason,
labels,
metadata,
phases,
rollbackOfRollout,
rolledBackByRollouts,
state,
targetId,
uid
FROM google.clouddeploy.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND rolloutsId = '{{ rolloutsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Rollouts in a given project and location.

```sql
SELECT
name,
activeRepairAutomationRun,
annotations,
approvalState,
approveTime,
controllerRollout,
createTime,
deployEndTime,
deployFailureCause,
deployStartTime,
deployingBuild,
description,
enqueueTime,
etag,
failureReason,
labels,
metadata,
phases,
rollbackOfRollout,
rolledBackByRollouts,
state,
targetId,
uid
FROM google.clouddeploy.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
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

Creates a new Rollout in a given project and location.

```sql
INSERT INTO google.clouddeploy.rollouts (
data__name,
data__description,
data__annotations,
data__labels,
data__targetId,
data__etag,
projectsId,
locationsId,
deliveryPipelinesId,
releasesId,
rolloutId,
requestId,
validateOnly,
overrideDeployPolicy,
startingPhaseId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ annotations }}',
'{{ labels }}',
'{{ targetId }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deliveryPipelinesId }}',
'{{ releasesId }}',
'{{ rolloutId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ overrideDeployPolicy }}',
'{{ startingPhaseId }}'
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
- name: rollouts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the rollouts resource.
    - name: locationsId
      value: string
      description: Required parameter for the rollouts resource.
    - name: deliveryPipelinesId
      value: string
      description: Required parameter for the rollouts resource.
    - name: releasesId
      value: string
      description: Required parameter for the rollouts resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the `Rollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. The `rollout` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
        
    - name: description
      value: string
      description: >
        Optional. Description of the `Rollout` for user purposes. Max length is 255 characters.
        
    - name: annotations
      value: object
      description: >
        Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
        
    - name: labels
      value: object
      description: >
        Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
        
    - name: targetId
      value: string
      description: >
        Required. The ID of Target to which this `Rollout` is deploying.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: rolloutId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: overrideDeployPolicy
      value: string
    - name: startingPhaseId
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="approve"
    values={[
        { label: 'approve', value: 'approve' },
        { label: 'advance', value: 'advance' },
        { label: 'cancel', value: 'cancel' },
        { label: 'ignore_job', value: 'ignore_job' },
        { label: 'retry_job', value: 'retry_job' }
    ]}
>
<TabItem value="approve">

Approves a Rollout.

```sql
EXEC google.clouddeploy.rollouts.approve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required 
@@json=
'{
"approved": {{ approved }}, 
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
<TabItem value="advance">

Advances a Rollout in a given project and location.

```sql
EXEC google.clouddeploy.rollouts.advance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required 
@@json=
'{
"phaseId": "{{ phaseId }}", 
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
<TabItem value="cancel">

Cancels a Rollout in a given project and location.

```sql
EXEC google.clouddeploy.rollouts.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required 
@@json=
'{
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
<TabItem value="ignore_job">

Ignores the specified Job in a Rollout.

```sql
EXEC google.clouddeploy.rollouts.ignore_job 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required 
@@json=
'{
"phaseId": "{{ phaseId }}", 
"jobId": "{{ jobId }}", 
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
<TabItem value="retry_job">

Retries the specified Job in a Rollout.

```sql
EXEC google.clouddeploy.rollouts.retry_job 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required 
@@json=
'{
"phaseId": "{{ phaseId }}", 
"jobId": "{{ jobId }}", 
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
</Tabs>
