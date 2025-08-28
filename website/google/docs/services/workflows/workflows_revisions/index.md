--- 
title: workflows_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows_revisions
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workflows_revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workflows.workflows_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_revisions"
    values={[
        { label: 'list_revisions', value: 'list_revisions' }
    ]}
>
<TabItem value="list_revisions">

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
    <td>The resource name of the workflow. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/workflows/&#123;workflow&#125;. This is a workflow-wide field and is not tied to a specific revision.</td>
</tr>
<tr>
    <td><CopyableCode code="allKmsKeys" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of all KMS crypto keys used to encrypt or decrypt the data associated with the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="allKmsKeysVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of all KMS crypto key versions used to encrypt or decrypt the data associated with the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="callLogLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes the level of platform logging to apply to calls and call responses during executions of this workflow. If both the workflow and the execution specify a logging level, the execution level takes precedence.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp for when the workflow was created. This is a workflow-wide field and is not tied to a specific revision.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of a KMS crypto key used to encrypt or decrypt the data associated with the workflow. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;keyRing&#125;/cryptoKeys/&#123;cryptoKey&#125; Using `-` as a wildcard for the `&#123;project&#125;` or not providing one at all will infer the project from the account. If not provided, data associated with the workflow will not be CMEK-encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of a KMS crypto key version used to encrypt or decrypt the data associated with the workflow. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;keyRing&#125;/cryptoKeys/&#123;cryptoKey&#125;/cryptoKeyVersions/&#123;cryptoKeyVersion&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the workflow provided by the user. Must be at most 1000 Unicode characters long. This is a workflow-wide field and is not tied to a specific revision.</td>
</tr>
<tr>
    <td><CopyableCode code="executionHistoryLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes the execution history level to apply to this workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. This is a workflow-wide field and is not tied to a specific revision.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp for the latest revision of the workflow's creation.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following properties of a workflow: - Service account - Workflow code to be executed The format is "000001-a4d", where the first six characters define the zero-padded revision ordinal number. They are followed by a hyphen and three hexadecimal random characters.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/&#123;project&#125;/serviceAccounts/&#123;account&#125; or &#123;account&#125; Using `-` as a wildcard for the `&#123;project&#125;` or not providing one at all will infer the project from the account. The `&#123;account&#125;` value can be the `email` address or the `unique_id` of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow results in a new workflow revision.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceContents" /></td>
    <td><code>string</code></td>
    <td>Workflow code to be executed. The size limit is 128KB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the workflow deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="stateError" /></td>
    <td><code>object</code></td>
    <td>Output only. Error regarding the state of the workflow. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions. (id: StateError)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tags associated with this workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp for when the workflow was last updated. This is a workflow-wide field and is not tied to a specific revision.</td>
</tr>
<tr>
    <td><CopyableCode code="userEnvVars" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with "GOOGLE" or "WORKFLOWS".</td>
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
    <td><a href="#list_revisions"><CopyableCode code="list_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists revisions for a given workflow.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowsId">
    <td><CopyableCode code="workflowsId" /></td>
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
    defaultValue="list_revisions"
    values={[
        { label: 'list_revisions', value: 'list_revisions' }
    ]}
>
<TabItem value="list_revisions">

Lists revisions for a given workflow.

```sql
SELECT
name,
allKmsKeys,
allKmsKeysVersions,
callLogLevel,
createTime,
cryptoKeyName,
cryptoKeyVersion,
description,
executionHistoryLevel,
labels,
revisionCreateTime,
revisionId,
serviceAccount,
sourceContents,
state,
stateError,
tags,
updateTime,
userEnvVars
FROM google.workflows.workflows_revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
