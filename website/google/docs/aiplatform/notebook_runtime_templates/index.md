--- 
title: notebook_runtime_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_runtime_templates
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

Creates, updates, deletes, gets or lists a <code>notebook_runtime_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notebook_runtime_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.notebook_runtime_templates" /></td></tr>
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

A template that specifies runtime configurations such as machine type, runtime version, network configurations, etc. Multiple runtimes can be created from a runtime template.

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
    <td>The resource name of the NotebookRuntimeTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookRuntimeTemplate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPersistentDiskSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification of persistent disk attached to the runtime as data disk storage. (id: GoogleCloudAiplatformV1PersistentDiskSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the NotebookRuntimeTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the NotebookRuntimeTemplate. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for the notebook runtime. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="eucConfig" /></td>
    <td><code>object</code></td>
    <td>EUC configuration of the NotebookRuntimeTemplate. (id: GoogleCloudAiplatformV1NotebookEucConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="idleShutdownConfig" /></td>
    <td><code>object</code></td>
    <td>The idle shutdown configuration of NotebookRuntimeTemplate. This config will only be set when idle shutdown is enabled. (id: GoogleCloudAiplatformV1NotebookIdleShutdownConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: This field has no behavior. Use notebook_runtime_type = 'ONE_CLICK' instead. The default template to use if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize the NotebookRuntimeTemplates. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="machineSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The specification of a single machine for the template. (id: GoogleCloudAiplatformV1MachineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="networkSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Network spec. (id: GoogleCloudAiplatformV1NetworkSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="networkTags" /></td>
    <td><code>array</code></td>
    <td>Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/vpc/docs/add-remove-network-tags)).</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The type of the notebook runtime template.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationAffinity" /></td>
    <td><code>object</code></td>
    <td>Optional. Reservation Affinity of the notebook runtime template. (id: GoogleCloudAiplatformV1NotebookReservationAffinity)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Deprecated: This field is ignored and the "Vertex AI Notebook Service Account" (service-PROJECT_NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com) is used for the runtime workload identity. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-notebook-service-account for more details. For NotebookExecutionJob, use NotebookExecutionJob.service_account instead. The service account that the runtime workload runs as. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedVmConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. Runtime Shielded VM spec. (id: GoogleCloudAiplatformV1ShieldedVmConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The notebook software configuration of the notebook runtime. (id: GoogleCloudAiplatformV1NotebookSoftwareConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookRuntimeTemplate was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for NotebookService.ListNotebookRuntimeTemplates.

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
    <td>A token to retrieve next page of results. Pass to ListNotebookRuntimeTemplatesRequest.page_token to obtain that page.</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeTemplates" /></td>
    <td><code>array</code></td>
    <td>List of NotebookRuntimeTemplates in the requested page.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimeTemplatesId"><code>notebookRuntimeTemplatesId</code></a></td>
    <td></td>
    <td>Gets a NotebookRuntimeTemplate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists NotebookRuntimeTemplates in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-notebookRuntimeTemplateId"><code>notebookRuntimeTemplateId</code></a></td>
    <td>Creates a NotebookRuntimeTemplate.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimeTemplatesId"><code>notebookRuntimeTemplatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a NotebookRuntimeTemplate.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookRuntimeTemplatesId"><code>notebookRuntimeTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a NotebookRuntimeTemplate.</td>
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
<tr id="parameter-notebookRuntimeTemplatesId">
    <td><CopyableCode code="notebookRuntimeTemplatesId" /></td>
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
<tr id="parameter-notebookRuntimeTemplateId">
    <td><CopyableCode code="notebookRuntimeTemplateId" /></td>
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

Gets a NotebookRuntimeTemplate.

```sql
SELECT
name,
createTime,
dataPersistentDiskSpec,
description,
displayName,
encryptionSpec,
etag,
eucConfig,
idleShutdownConfig,
isDefault,
labels,
machineSpec,
networkSpec,
networkTags,
notebookRuntimeType,
reservationAffinity,
serviceAccount,
shieldedVmConfig,
softwareConfig,
updateTime
FROM google.aiplatform.notebook_runtime_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notebookRuntimeTemplatesId = '{{ notebookRuntimeTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists NotebookRuntimeTemplates in a Location.

```sql
SELECT
nextPageToken,
notebookRuntimeTemplates
FROM google.aiplatform.notebook_runtime_templates
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


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a NotebookRuntimeTemplate.

```sql
INSERT INTO google.aiplatform.notebook_runtime_templates (
data__name,
data__displayName,
data__description,
data__machineSpec,
data__dataPersistentDiskSpec,
data__networkSpec,
data__serviceAccount,
data__etag,
data__labels,
data__idleShutdownConfig,
data__eucConfig,
data__notebookRuntimeType,
data__shieldedVmConfig,
data__networkTags,
data__reservationAffinity,
data__encryptionSpec,
data__softwareConfig,
projectsId,
locationsId,
notebookRuntimeTemplateId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ machineSpec }}',
'{{ dataPersistentDiskSpec }}',
'{{ networkSpec }}',
'{{ serviceAccount }}',
'{{ etag }}',
'{{ labels }}',
'{{ idleShutdownConfig }}',
'{{ eucConfig }}',
'{{ notebookRuntimeType }}',
'{{ shieldedVmConfig }}',
'{{ networkTags }}',
'{{ reservationAffinity }}',
'{{ encryptionSpec }}',
'{{ softwareConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ notebookRuntimeTemplateId }}'
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
- name: notebook_runtime_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the notebook_runtime_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the notebook_runtime_templates resource.
    - name: name
      value: string
      description: >
        The resource name of the NotebookRuntimeTemplate.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the NotebookRuntimeTemplate. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: description
      value: string
      description: >
        The description of the NotebookRuntimeTemplate.
        
    - name: machineSpec
      value: object
      description: >
        Optional. Immutable. The specification of a single machine for the template.
        
    - name: dataPersistentDiskSpec
      value: object
      description: >
        Optional. The specification of persistent disk attached to the runtime as data disk storage.
        
    - name: networkSpec
      value: object
      description: >
        Optional. Network spec.
        
    - name: serviceAccount
      value: string
      description: >
        Deprecated: This field is ignored and the "Vertex AI Notebook Service Account" (service-PROJECT_NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com) is used for the runtime workload identity. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-notebook-service-account for more details. For NotebookExecutionJob, use NotebookExecutionJob.service_account instead. The service account that the runtime workload runs as. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
        
    - name: etag
      value: string
      description: >
        Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize the NotebookRuntimeTemplates. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: idleShutdownConfig
      value: object
      description: >
        The idle shutdown configuration of NotebookRuntimeTemplate. This config will only be set when idle shutdown is enabled.
        
    - name: eucConfig
      value: object
      description: >
        EUC configuration of the NotebookRuntimeTemplate.
        
    - name: notebookRuntimeType
      value: string
      description: >
        Optional. Immutable. The type of the notebook runtime template.
        
      valid_values: ['NOTEBOOK_RUNTIME_TYPE_UNSPECIFIED', 'USER_DEFINED', 'ONE_CLICK']
    - name: shieldedVmConfig
      value: object
      description: >
        Optional. Immutable. Runtime Shielded VM spec.
        
    - name: networkTags
      value: array
      description: >
        Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/vpc/docs/add-remove-network-tags)).
        
    - name: reservationAffinity
      value: object
      description: >
        Optional. Reservation Affinity of the notebook runtime template.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key spec for the notebook runtime.
        
    - name: softwareConfig
      value: object
      description: >
        Optional. The notebook software configuration of the notebook runtime.
        
    - name: notebookRuntimeTemplateId
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

Updates a NotebookRuntimeTemplate.

```sql
UPDATE google.aiplatform.notebook_runtime_templates
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__machineSpec = '{{ machineSpec }}',
data__dataPersistentDiskSpec = '{{ dataPersistentDiskSpec }}',
data__networkSpec = '{{ networkSpec }}',
data__serviceAccount = '{{ serviceAccount }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__idleShutdownConfig = '{{ idleShutdownConfig }}',
data__eucConfig = '{{ eucConfig }}',
data__notebookRuntimeType = '{{ notebookRuntimeType }}',
data__shieldedVmConfig = '{{ shieldedVmConfig }}',
data__networkTags = '{{ networkTags }}',
data__reservationAffinity = '{{ reservationAffinity }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__softwareConfig = '{{ softwareConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notebookRuntimeTemplatesId = '{{ notebookRuntimeTemplatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataPersistentDiskSpec,
description,
displayName,
encryptionSpec,
etag,
eucConfig,
idleShutdownConfig,
isDefault,
labels,
machineSpec,
networkSpec,
networkTags,
notebookRuntimeType,
reservationAffinity,
serviceAccount,
shieldedVmConfig,
softwareConfig,
updateTime;
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

Deletes a NotebookRuntimeTemplate.

```sql
DELETE FROM google.aiplatform.notebook_runtime_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notebookRuntimeTemplatesId = '{{ notebookRuntimeTemplatesId }}' --required;
```
</TabItem>
</Tabs>
