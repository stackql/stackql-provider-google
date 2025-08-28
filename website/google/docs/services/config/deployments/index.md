--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.deployments" /></td></tr>
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
    <td>Identifier. Resource name of the deployment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployments during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactsGcsBucket" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined location of Cloud Build logs and artifacts in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;folder&#125;` A default bucket will be bootstrapped if the field is not set or empty. Default bucket format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` - The field cannot be updated, including changing its presence</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteBuild" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with deleting this deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Cloud Build logs in Google Cloud Storage, populated when deleting this deployment. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteResults" /></td>
    <td><code>object</code></td>
    <td>Output only. Location of artifacts from a DeleteDeployment operation. (id: ApplyResults)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Error code describing errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Terraform error logs in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="importExistingResources" /></td>
    <td><code>boolean</code></td>
    <td>By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation. Not all resource types are supported, refer to documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined metadata for the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="latestRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision name that was most recently applied. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/ revisions/&#123;revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="lockState" /></td>
    <td><code>string</code></td>
    <td>Output only. Current lock state of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidation" /></td>
    <td><code>string</code></td>
    <td>Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. User-specified Service Account (SA) credentials to be used when actuating resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetail" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>A blueprint described using Terraform's HashiCorp Configuration Language as a root module. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered when deleting this deployment. Errors are truncated to 10 entries, see `delete_results` and `error_logs` for full details.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current Terraform version set on the deployment. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
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
    <td>Identifier. Resource name of the deployment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployments during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactsGcsBucket" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined location of Cloud Build logs and artifacts in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;folder&#125;` A default bucket will be bootstrapped if the field is not set or empty. Default bucket format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` - The field cannot be updated, including changing its presence</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteBuild" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with deleting this deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Cloud Build logs in Google Cloud Storage, populated when deleting this deployment. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteResults" /></td>
    <td><code>object</code></td>
    <td>Output only. Location of artifacts from a DeleteDeployment operation. (id: ApplyResults)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Error code describing errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Terraform error logs in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="importExistingResources" /></td>
    <td><code>boolean</code></td>
    <td>By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation. Not all resource types are supported, refer to documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined metadata for the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="latestRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision name that was most recently applied. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/ revisions/&#123;revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="lockState" /></td>
    <td><code>string</code></td>
    <td>Output only. Current lock state of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidation" /></td>
    <td><code>string</code></td>
    <td>Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. User-specified Service Account (SA) credentials to be used when actuating resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetail" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>A blueprint described using Terraform's HashiCorp Configuration Language as a root module. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered when deleting this deployment. Errors are truncated to 10 entries, see `delete_results` and `error_logs` for full details.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current Terraform version set on the deployment. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Gets details about a Deployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Deployments in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-deploymentId"><code>deploymentId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Deployment.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a Deployment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-deletePolicy"><code>deletePolicy</code></a></td>
    <td>Deletes a Deployment.</td>
</tr>
<tr>
    <td><a href="#export_state"><CopyableCode code="export_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Exports Terraform state file from a given deployment.</td>
</tr>
<tr>
    <td><a href="#import_state"><CopyableCode code="import_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Imports Terraform state file in a given deployment. The state file does not take effect until the Deployment has been unlocked.</td>
</tr>
<tr>
    <td><a href="#delete_state"><CopyableCode code="delete_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Deletes Terraform state file in a given deployment.</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Locks a deployment.</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Unlocks a locked deployment.</td>
</tr>
<tr>
    <td><a href="#export_lock"><CopyableCode code="export_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Exports the lock info on a locked deployment.</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
<tr id="parameter-deletePolicy">
    <td><CopyableCode code="deletePolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentId">
    <td><CopyableCode code="deploymentId" /></td>
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

Gets details about a Deployment.

```sql
SELECT
name,
annotations,
artifactsGcsBucket,
createTime,
deleteBuild,
deleteLogs,
deleteResults,
errorCode,
errorLogs,
importExistingResources,
labels,
latestRevision,
lockState,
providerConfig,
quotaValidation,
serviceAccount,
state,
stateDetail,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
updateTime,
workerPool
FROM google.config.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Deployments in a given project and location.

```sql
SELECT
name,
annotations,
artifactsGcsBucket,
createTime,
deleteBuild,
deleteLogs,
deleteResults,
errorCode,
errorLogs,
importExistingResources,
labels,
latestRevision,
lockState,
providerConfig,
quotaValidation,
serviceAccount,
state,
stateDetail,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
updateTime,
workerPool
FROM google.config.deployments
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

Creates a Deployment.

```sql
INSERT INTO google.config.deployments (
data__terraformBlueprint,
data__name,
data__labels,
data__artifactsGcsBucket,
data__serviceAccount,
data__importExistingResources,
data__workerPool,
data__tfVersionConstraint,
data__quotaValidation,
data__annotations,
data__providerConfig,
projectsId,
locationsId,
deploymentId,
requestId
)
SELECT 
'{{ terraformBlueprint }}',
'{{ name }}',
'{{ labels }}',
'{{ artifactsGcsBucket }}',
'{{ serviceAccount }}',
{{ importExistingResources }},
'{{ workerPool }}',
'{{ tfVersionConstraint }}',
'{{ quotaValidation }}',
'{{ annotations }}',
'{{ providerConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deploymentId }}',
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
- name: deployments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the deployments resource.
    - name: locationsId
      value: string
      description: Required parameter for the deployments resource.
    - name: terraformBlueprint
      value: object
      description: >
        A blueprint described using Terraform's HashiCorp Configuration Language as a root module.
        
    - name: name
      value: string
      description: >
        Identifier. Resource name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
        
    - name: labels
      value: object
      description: >
        Optional. User-defined metadata for the deployment.
        
    - name: artifactsGcsBucket
      value: string
      description: >
        Optional. User-defined location of Cloud Build logs and artifacts in Google Cloud Storage. Format: `gs://{bucket}/{folder}` A default bucket will be bootstrapped if the field is not set or empty. Default bucket format: `gs://--blueprint-config` Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of `gcs_source` - The field cannot be updated, including changing its presence
        
    - name: serviceAccount
      value: string
      description: >
        Required. User-specified Service Account (SA) credentials to be used when actuating resources. Format: `projects/{projectID}/serviceAccounts/{serviceAccount}`
        
    - name: importExistingResources
      value: boolean
      description: >
        By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation. Not all resource types are supported, refer to documentation.
        
    - name: workerPool
      value: string
      description: >
        Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/{project}/locations/{location}/workerPools/{workerPoolId}`. If this field is unspecified, the default Cloud Build worker pool will be used.
        
    - name: tfVersionConstraint
      value: string
      description: >
        Optional. The user-specified Terraform version constraint. Example: "=1.3.10".
        
    - name: quotaValidation
      value: string
      description: >
        Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.
        
      valid_values: ['QUOTA_VALIDATION_UNSPECIFIED', 'ENABLED', 'ENFORCED']
    - name: annotations
      value: object
      description: >
        Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployments during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.
        
    - name: providerConfig
      value: object
      description: >
        Optional. This field specifies the provider configurations.
        
    - name: deploymentId
      value: string
    - name: requestId
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

Updates a Deployment.

```sql
UPDATE google.config.deployments
SET 
data__terraformBlueprint = '{{ terraformBlueprint }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__artifactsGcsBucket = '{{ artifactsGcsBucket }}',
data__serviceAccount = '{{ serviceAccount }}',
data__importExistingResources = {{ importExistingResources }},
data__workerPool = '{{ workerPool }}',
data__tfVersionConstraint = '{{ tfVersionConstraint }}',
data__quotaValidation = '{{ quotaValidation }}',
data__annotations = '{{ annotations }}',
data__providerConfig = '{{ providerConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a Deployment.

```sql
DELETE FROM google.config.deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
AND deletePolicy = '{{ deletePolicy }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_state"
    values={[
        { label: 'export_state', value: 'export_state' },
        { label: 'import_state', value: 'import_state' },
        { label: 'delete_state', value: 'delete_state' },
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' },
        { label: 'export_lock', value: 'export_lock' }
    ]}
>
<TabItem value="export_state">

Exports Terraform state file from a given deployment.

```sql
EXEC google.config.deployments.export_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"draft": {{ draft }}
}';
```
</TabItem>
<TabItem value="import_state">

Imports Terraform state file in a given deployment. The state file does not take effect until the Deployment has been unlocked.

```sql
EXEC google.config.deployments.import_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"lockId": "{{ lockId }}"
}';
```
</TabItem>
<TabItem value="delete_state">

Deletes Terraform state file in a given deployment.

```sql
EXEC google.config.deployments.delete_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"lockId": "{{ lockId }}"
}';
```
</TabItem>
<TabItem value="lock">

Locks a deployment.

```sql
EXEC google.config.deployments.lock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required;
```
</TabItem>
<TabItem value="unlock">

Unlocks a locked deployment.

```sql
EXEC google.config.deployments.unlock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"lockId": "{{ lockId }}"
}';
```
</TabItem>
<TabItem value="export_lock">

Exports the lock info on a locked deployment.

```sql
EXEC google.config.deployments.export_lock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required;
```
</TabItem>
</Tabs>
