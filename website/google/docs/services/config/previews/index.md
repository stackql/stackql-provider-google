--- 
title: previews
hide_title: false
hide_table_of_contents: false
keywords:
  - previews
  - config
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

Creates, updates, deletes, gets or lists a <code>previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>previews</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.previews" /></td></tr>
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
    <td>Identifier. Resource name of the preview. Resource name can be user provided or server generated ID if unspecified. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/previews/&#123;preview&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify preview during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactsGcsBucket" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined location of Cloud Build logs, artifacts, and in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;folder&#125;` A default bucket will be bootstrapped if the field is not set or empty Default Bucket Format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` If omitted and deployment resource ref provided has artifacts_gcs_bucket defined, that artifact bucket is used.</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with this preview.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the preview was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional deployment reference. If specified, the preview will be performed using the provided deployment's current state and use any relevant fields from the deployment unless explicitly specified in the preview create request.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Code describing any errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to tf-error.ndjson file, which contains the full list of the errors encountered during a Terraform preview. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information regarding the current state. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the preview.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of preview logs in `gs://&#123;bucket&#125;/&#123;object&#125;` format.</td>
</tr>
<tr>
    <td><CopyableCode code="previewArtifacts" /></td>
    <td><code>object</code></td>
    <td>Output only. Artifacts from preview. (id: PreviewArtifacts)</td>
</tr>
<tr>
    <td><CopyableCode code="previewMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Current mode of preview.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. User-specified Service Account (SA) credentials to be used when previewing resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the preview.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>The terraform blueprint to preview. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Summary of errors encountered during Terraform preview. It has a size limit of 10, i.e. only top 10 errors will be summarized here.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current Terraform version set on the preview. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Worker Pool resource in which the Cloud Build job will execute. Format projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125; If this field is unspecified, the default Cloud Build worker pool will be used. If omitted and deployment resource ref provided has worker_pool defined, that worker pool is used.</td>
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
    <td>Identifier. Resource name of the preview. Resource name can be user provided or server generated ID if unspecified. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/previews/&#123;preview&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify preview during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactsGcsBucket" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined location of Cloud Build logs, artifacts, and in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;folder&#125;` A default bucket will be bootstrapped if the field is not set or empty Default Bucket Format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` If omitted and deployment resource ref provided has artifacts_gcs_bucket defined, that artifact bucket is used.</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with this preview.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the preview was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional deployment reference. If specified, the preview will be performed using the provided deployment's current state and use any relevant fields from the deployment unless explicitly specified in the preview create request.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Code describing any errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to tf-error.ndjson file, which contains the full list of the errors encountered during a Terraform preview. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information regarding the current state. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the preview.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of preview logs in `gs://&#123;bucket&#125;/&#123;object&#125;` format.</td>
</tr>
<tr>
    <td><CopyableCode code="previewArtifacts" /></td>
    <td><code>object</code></td>
    <td>Output only. Artifacts from preview. (id: PreviewArtifacts)</td>
</tr>
<tr>
    <td><CopyableCode code="previewMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Current mode of preview.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. User-specified Service Account (SA) credentials to be used when previewing resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the preview.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>The terraform blueprint to preview. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Summary of errors encountered during Terraform preview. It has a size limit of 10, i.e. only top 10 errors will be summarized here.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current Terraform version set on the preview. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Worker Pool resource in which the Cloud Build job will execute. Format projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125; If this field is unspecified, the default Cloud Build worker pool will be used. If omitted and deployment resource ref provided has worker_pool defined, that worker pool is used.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-previewsId"><code>previewsId</code></a></td>
    <td></td>
    <td>Gets details about a Preview.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Previews in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-previewId"><code>previewId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Preview.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-previewsId"><code>previewsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Preview.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-previewsId"><code>previewsId</code></a></td>
    <td></td>
    <td>Export Preview results.</td>
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
<tr id="parameter-previewsId">
    <td><CopyableCode code="previewsId" /></td>
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
<tr id="parameter-previewId">
    <td><CopyableCode code="previewId" /></td>
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

Gets details about a Preview.

```sql
SELECT
name,
annotations,
artifactsGcsBucket,
build,
createTime,
deployment,
errorCode,
errorLogs,
errorStatus,
labels,
logs,
previewArtifacts,
previewMode,
providerConfig,
serviceAccount,
state,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
workerPool
FROM google.config.previews
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND previewsId = '{{ previewsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Previews in a given project and location.

```sql
SELECT
name,
annotations,
artifactsGcsBucket,
build,
createTime,
deployment,
errorCode,
errorLogs,
errorStatus,
labels,
logs,
previewArtifacts,
previewMode,
providerConfig,
serviceAccount,
state,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
workerPool
FROM google.config.previews
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

Creates a Preview.

```sql
INSERT INTO google.config.previews (
data__terraformBlueprint,
data__name,
data__labels,
data__deployment,
data__previewMode,
data__serviceAccount,
data__artifactsGcsBucket,
data__workerPool,
data__tfVersionConstraint,
data__annotations,
data__providerConfig,
projectsId,
locationsId,
previewId,
requestId
)
SELECT 
'{{ terraformBlueprint }}',
'{{ name }}',
'{{ labels }}',
'{{ deployment }}',
'{{ previewMode }}',
'{{ serviceAccount }}',
'{{ artifactsGcsBucket }}',
'{{ workerPool }}',
'{{ tfVersionConstraint }}',
'{{ annotations }}',
'{{ providerConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ previewId }}',
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
- name: previews
  props:
    - name: projectsId
      value: string
      description: Required parameter for the previews resource.
    - name: locationsId
      value: string
      description: Required parameter for the previews resource.
    - name: terraformBlueprint
      value: object
      description: >
        The terraform blueprint to preview.
        
    - name: name
      value: string
      description: >
        Identifier. Resource name of the preview. Resource name can be user provided or server generated ID if unspecified. Format: `projects/{project}/locations/{location}/previews/{preview}`
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the preview.
        
    - name: deployment
      value: string
      description: >
        Optional. Optional deployment reference. If specified, the preview will be performed using the provided deployment's current state and use any relevant fields from the deployment unless explicitly specified in the preview create request.
        
    - name: previewMode
      value: string
      description: >
        Optional. Current mode of preview.
        
      valid_values: ['PREVIEW_MODE_UNSPECIFIED', 'DEFAULT', 'DELETE']
    - name: serviceAccount
      value: string
      description: >
        Required. User-specified Service Account (SA) credentials to be used when previewing resources. Format: `projects/{projectID}/serviceAccounts/{serviceAccount}`
        
    - name: artifactsGcsBucket
      value: string
      description: >
        Optional. User-defined location of Cloud Build logs, artifacts, and in Google Cloud Storage. Format: `gs://{bucket}/{folder}` A default bucket will be bootstrapped if the field is not set or empty Default Bucket Format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` If omitted and deployment resource ref provided has artifacts_gcs_bucket defined, that artifact bucket is used.
        
    - name: workerPool
      value: string
      description: >
        Optional. The user-specified Worker Pool resource in which the Cloud Build job will execute. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} If this field is unspecified, the default Cloud Build worker pool will be used. If omitted and deployment resource ref provided has worker_pool defined, that worker pool is used.
        
    - name: tfVersionConstraint
      value: string
      description: >
        Optional. The user-specified Terraform version constraint. Example: "=1.3.10".
        
    - name: annotations
      value: object
      description: >
        Optional. Arbitrary key-value metadata storage e.g. to help client tools identify preview during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.
        
    - name: providerConfig
      value: object
      description: >
        Optional. This field specifies the provider configurations.
        
    - name: previewId
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

Deletes a Preview.

```sql
DELETE FROM google.config.previews
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND previewsId = '{{ previewsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export"
    values={[
        { label: 'export', value: 'export' }
    ]}
>
<TabItem value="export">

Export Preview results.

```sql
EXEC google.config.previews.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@previewsId='{{ previewsId }}' --required;
```
</TabItem>
</Tabs>
