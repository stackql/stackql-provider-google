--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.revisions" /></td></tr>
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
    <td>Revision name. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/ revisions/&#123;revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Output only. The action which created this revision</td>
</tr>
<tr>
    <td><CopyableCode code="applyResults" /></td>
    <td><code>object</code></td>
    <td>Output only. Outputs and artifacts from applying a deployment. (id: ApplyResults)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with this revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Code describing any errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Terraform error logs in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="importExistingResources" /></td>
    <td><code>boolean</code></td>
    <td>Output only. By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation. Not all resource types are supported, refer to documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Revision operation logs in `gs://&#123;bucket&#125;/&#123;object&#125;` format.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidation" /></td>
    <td><code>string</code></td>
    <td>Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidationResults" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Storage path containing quota validation results. This field is set when a user sets Deployment.quota_validation field to ENABLED or ENFORCED. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. User-specified Service Account (SA) to be used as credential to manage resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetail" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional info regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>Output only. A blueprint described using Terraform's HashiCorp Configuration Language as a root module. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered when creating or updating this deployment. Errors are truncated to 10 entries, see `delete_results` and `error_logs` for full details.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of Terraform used to create the Revision. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Output only. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the revision was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Output only. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
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
    <td>Revision name. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/ revisions/&#123;revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Output only. The action which created this revision</td>
</tr>
<tr>
    <td><CopyableCode code="applyResults" /></td>
    <td><code>object</code></td>
    <td>Output only. Outputs and artifacts from applying a deployment. (id: ApplyResults)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Build instance UUID associated with this revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Code describing any errors that may have occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="errorLogs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Terraform error logs in Google Cloud Storage. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="importExistingResources" /></td>
    <td><code>boolean</code></td>
    <td>Output only. By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation. Not all resource types are supported, refer to documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>Output only. Location of Revision operation logs in `gs://&#123;bucket&#125;/&#123;object&#125;` format.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. This field specifies the provider configurations. (id: ProviderConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidation" /></td>
    <td><code>string</code></td>
    <td>Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaValidationResults" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud Storage path containing quota validation results. This field is set when a user sets Deployment.quota_validation field to ENABLED or ENFORCED. Format: `gs://&#123;bucket&#125;/&#123;object&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. User-specified Service Account (SA) to be used as credential to manage resources. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetail" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional info regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformBlueprint" /></td>
    <td><code>object</code></td>
    <td>Output only. A blueprint described using Terraform's HashiCorp Configuration Language as a root module. (id: TerraformBlueprint)</td>
</tr>
<tr>
    <td><CopyableCode code="tfErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered when creating or updating this deployment. Errors are truncated to 10 entries, see `delete_results` and `error_logs` for full details.</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of Terraform used to create the Revision. It is in the format of "Major.Minor.Patch", for example, "1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="tfVersionConstraint" /></td>
    <td><code>string</code></td>
    <td>Output only. The user-specified Terraform version constraint. Example: "=1.3.10".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the revision was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Output only. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Gets details about a Revision.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Revisions of a deployment.</td>
</tr>
<tr>
    <td><a href="#export_state"><CopyableCode code="export_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Exports Terraform state file from a given revision.</td>
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
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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

Gets details about a Revision.

```sql
SELECT
name,
action,
applyResults,
build,
createTime,
errorCode,
errorLogs,
importExistingResources,
logs,
providerConfig,
quotaValidation,
quotaValidationResults,
serviceAccount,
state,
stateDetail,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
updateTime,
workerPool
FROM google.config.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Revisions of a deployment.

```sql
SELECT
name,
action,
applyResults,
build,
createTime,
errorCode,
errorLogs,
importExistingResources,
logs,
providerConfig,
quotaValidation,
quotaValidationResults,
serviceAccount,
state,
stateDetail,
terraformBlueprint,
tfErrors,
tfVersion,
tfVersionConstraint,
updateTime,
workerPool
FROM google.config.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_state"
    values={[
        { label: 'export_state', value: 'export_state' }
    ]}
>
<TabItem value="export_state">

Exports Terraform state file from a given revision.

```sql
EXEC google.config.revisions.export_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>
