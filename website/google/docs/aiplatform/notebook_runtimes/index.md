--- 
title: notebook_runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_runtimes
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

Creates, updates, deletes, gets or lists a <code>notebook_runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notebook_runtimes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.notebook_runtimes" /></td></tr>
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

A runtime is a virtual machine allocated to a particular user for a particular Notebook file on temporary basis with lifetime. Default runtimes have a lifetime of 18 hours, while custom runtimes last for 6 months from their creation or last upgrade.

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
    <td>Output only. The resource name of the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookRuntime was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPersistentDiskSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. The specification of persistent disk attached to the notebook runtime as data disk storage. (id: GoogleCloudAiplatformV1PersistentDiskSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the NotebookRuntime. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Customer-managed encryption key spec for the notebook runtime. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="eucConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. EUC configuration of the notebook runtime. (id: GoogleCloudAiplatformV1NotebookEucConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookRuntime will be expired: 1. System Predefined NotebookRuntime: 24 hours after creation. After expiration, system predifined runtime will be deleted. 2. User created NotebookRuntime: 6 months after last upgrade. After expiration, user created runtime will be stopped and allowed for upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="healthState" /></td>
    <td><code>string</code></td>
    <td>Output only. The health state of the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="idleShutdownConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The idle shutdown configuration of the notebook runtime. (id: GoogleCloudAiplatformV1NotebookIdleShutdownConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="isUpgradable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether NotebookRuntime is upgradable.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your NotebookRuntime. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one NotebookRuntime (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable. Following system labels exist for NotebookRuntime: * "aiplatform.googleapis.com/notebook_runtime_gce_instance_id": output only, its value is the Compute Engine instance id. * "aiplatform.googleapis.com/colab_enterprise_entry_service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex". This is to describe the entry service, either BigQuery or Vertex.</td>
</tr>
<tr>
    <td><CopyableCode code="machineSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. The specification of a single machine used by the notebook runtime. (id: GoogleCloudAiplatformV1MachineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="networkSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Network spec of the notebook runtime. (id: GoogleCloudAiplatformV1NetworkSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="networkTags" /></td>
    <td><code>array</code></td>
    <td>Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/vpc/docs/add-remove-network-tags)).</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeTemplateRef" /></td>
    <td><code>object</code></td>
    <td>Output only. The pointer to NotebookRuntimeTemplate this NotebookRuntime is created from. (id: GoogleCloudAiplatformV1NotebookRuntimeTemplateRef)</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the notebook runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="proxyUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The proxy endpoint used to access the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationAffinity" /></td>
    <td><code>object</code></td>
    <td>Output only. Reservation Affinity of the notebook runtime. (id: GoogleCloudAiplatformV1NotebookReservationAffinity)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeState" /></td>
    <td><code>string</code></td>
    <td>Output only. The runtime (instance) state of the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeUser" /></td>
    <td><code>string</code></td>
    <td>Required. The user email of the NotebookRuntime.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: This field is no longer used and the "Vertex AI Notebook Service Account" (service-PROJECT_NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com) is used for the runtime workload identity. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-notebook-service-account for more details. The service account that the NotebookRuntime workload runs as.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedVmConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime Shielded VM spec. (id: GoogleCloudAiplatformV1ShieldedVmConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Software config of the notebook runtime. (id: GoogleCloudAiplatformV1NotebookSoftwareConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookRuntime was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. The VM os image version of NotebookRuntime.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for NotebookService.ListNotebookRuntimes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass to ListNotebookRuntimesRequest.page_token to obtain that page.</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimes" /></td>
    <td><code>array</code></td>
    <td>List of NotebookRuntimes in the requested page.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimesId"><code>notebookRuntimesId</code></a></td>
    <td></td>
    <td>Gets a NotebookRuntime.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists NotebookRuntimes in a Location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimesId"><code>notebookRuntimesId</code></a></td>
    <td></td>
    <td>Deletes a NotebookRuntime.</td>
</tr>
<tr>
    <td><a href="#assign"><CopyableCode code="assign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Assigns a NotebookRuntime to a user for a particular Notebook file. This method will either returns an existing assignment or generates a new one.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimesId"><code>notebookRuntimesId</code></a></td>
    <td></td>
    <td>Upgrades a NotebookRuntime.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimesId"><code>notebookRuntimesId</code></a></td>
    <td></td>
    <td>Starts a NotebookRuntime.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimesId"><code>notebookRuntimesId</code></a></td>
    <td></td>
    <td>Stops a NotebookRuntime.</td>
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
<tr id="parameter-notebookRuntimesId">
    <td><CopyableCode code="notebookRuntimesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
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

Gets a NotebookRuntime.

```sql
SELECT
name,
createTime,
dataPersistentDiskSpec,
description,
displayName,
encryptionSpec,
eucConfig,
expirationTime,
healthState,
idleShutdownConfig,
isUpgradable,
labels,
machineSpec,
networkSpec,
networkTags,
notebookRuntimeTemplateRef,
notebookRuntimeType,
proxyUri,
reservationAffinity,
runtimeState,
runtimeUser,
satisfiesPzi,
satisfiesPzs,
serviceAccount,
shieldedVmConfig,
softwareConfig,
updateTime,
version
FROM google.aiplatform.notebook_runtimes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notebookRuntimesId = '{{ notebookRuntimesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists NotebookRuntimes in a Location.

```sql
SELECT
nextPageToken,
notebookRuntimes
FROM google.aiplatform.notebook_runtimes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
AND orderBy = '{{ orderBy }}';
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

Deletes a NotebookRuntime.

```sql
DELETE FROM google.aiplatform.notebook_runtimes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notebookRuntimesId = '{{ notebookRuntimesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assign"
    values={[
        { label: 'assign', value: 'assign' },
        { label: 'upgrade', value: 'upgrade' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="assign">

Assigns a NotebookRuntime to a user for a particular Notebook file. This method will either returns an existing assignment or generates a new one.

```sql
EXEC google.aiplatform.notebook_runtimes.assign 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"notebookRuntimeTemplate": "{{ notebookRuntimeTemplate }}", 
"notebookRuntime": "{{ notebookRuntime }}", 
"notebookRuntimeId": "{{ notebookRuntimeId }}"
}';
```
</TabItem>
<TabItem value="upgrade">

Upgrades a NotebookRuntime.

```sql
EXEC google.aiplatform.notebook_runtimes.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@notebookRuntimesId='{{ notebookRuntimesId }}' --required;
```
</TabItem>
<TabItem value="start">

Starts a NotebookRuntime.

```sql
EXEC google.aiplatform.notebook_runtimes.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@notebookRuntimesId='{{ notebookRuntimesId }}' --required;
```
</TabItem>
<TabItem value="stop">

Stops a NotebookRuntime.

```sql
EXEC google.aiplatform.notebook_runtimes.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@notebookRuntimesId='{{ notebookRuntimesId }}' --required;
```
</TabItem>
</Tabs>
