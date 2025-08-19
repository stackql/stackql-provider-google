--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - cloudfunctions
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

Creates, updates, deletes, gets or lists a <code>functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>functions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudfunctions.functions" /></td></tr>
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

Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.

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
    <td>A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="buildConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the Build step of the function that builds a container from the given source. (id: BuildConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create timestamp of a Cloud Function. This is only applicable to 2nd Gen functions.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of a function.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Describe whether the function is 1st Gen or 2nd Gen.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTrigger" /></td>
    <td><code>object</code></td>
    <td>An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service. (id: EventTrigger)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels associated with this Cloud Function.</td>
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
    <td><CopyableCode code="serviceConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed). (id: ServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessages" /></td>
    <td><code>array</code></td>
    <td>Output only. State Messages for this Cloud Function.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a Cloud Function.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. UpgradeInfo for this Cloud Function (id: UpgradeInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployed url for the function.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for the `ListFunctions` method.

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
    <td><CopyableCode code="functions" /></td>
    <td><code>array</code></td>
    <td>The functions that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached. The response does not include any functions from these locations.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Returns a function with the given name from the requested project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns a list of functions that belong to the requested project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-functionId"><code>functionId</code></a></td>
    <td>Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates existing function.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.</td>
</tr>
<tr>
    <td><a href="#setup_function_upgrade_config"><CopyableCode code="setup_function_upgrade_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the first step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Only 2nd Gen configuration is setup as part of this request and traffic continues to be served by 1st Gen.</td>
</tr>
<tr>
    <td><a href="#abort_function_upgrade"><CopyableCode code="abort_function_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen copy related configuration and resources which were created during the upgrade process.</td>
</tr>
<tr>
    <td><a href="#redirect_function_upgrade_traffic"><CopyableCode code="redirect_function_upgrade_traffic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step of the multi step process to upgrade 1st Gen functions to 2nd Gen. After this operation, all new traffic will be served by 2nd Gen copy.</td>
</tr>
<tr>
    <td><a href="#rollback_function_upgrade_traffic"><CopyableCode code="rollback_function_upgrade_traffic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, all new traffic would be served by the 1st Gen.</td>
</tr>
<tr>
    <td><a href="#commit_function_upgrade"><CopyableCode code="commit_function_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Deletes all original 1st Gen related configuration and resources.</td>
</tr>
<tr>
    <td><a href="#generate_upload_url"><CopyableCode code="generate_upload_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`</td>
</tr>
<tr>
    <td><a href="#generate_download_url"><CopyableCode code="generate_download_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls</td>
</tr>
<tr>
    <td><a href="#detach_function"><CopyableCode code="detach_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-functionsId"><code>functionsId</code></a></td>
    <td></td>
    <td>Detaches 2nd Gen function to Cloud Run function.</td>
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
<tr id="parameter-functionsId">
    <td><CopyableCode code="functionsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-functionId">
    <td><CopyableCode code="functionId" /></td>
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
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
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

Returns a function with the given name from the requested project.

```sql
SELECT
name,
buildConfig,
createTime,
description,
environment,
eventTrigger,
kmsKeyName,
labels,
satisfiesPzi,
satisfiesPzs,
serviceConfig,
state,
stateMessages,
updateTime,
upgradeInfo,
url
FROM google.cloudfunctions.functions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND functionsId = '{{ functionsId }}' -- required
AND revision = '{{ revision }}';
```
</TabItem>
<TabItem value="list">

Returns a list of functions that belong to the requested project.

```sql
SELECT
functions,
nextPageToken,
unreachable
FROM google.cloudfunctions.functions
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

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

```sql
INSERT INTO google.cloudfunctions.functions (
data__name,
data__description,
data__buildConfig,
data__serviceConfig,
data__eventTrigger,
data__labels,
data__environment,
data__kmsKeyName,
projectsId,
locationsId,
functionId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ buildConfig }}',
'{{ serviceConfig }}',
'{{ eventTrigger }}',
'{{ labels }}',
'{{ environment }}',
'{{ kmsKeyName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ functionId }}'
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
- name: functions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the functions resource.
    - name: locationsId
      value: string
      description: Required parameter for the functions resource.
    - name: name
      value: string
      description: >
        A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`
        
    - name: description
      value: string
      description: >
        User-provided description of a function.
        
    - name: buildConfig
      value: object
      description: >
        Describes the Build step of the function that builds a container from the given source.
        
    - name: serviceConfig
      value: object
      description: >
        Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed).
        
    - name: eventTrigger
      value: object
      description: >
        An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service.
        
    - name: labels
      value: object
      description: >
        Labels associated with this Cloud Function.
        
    - name: environment
      value: string
      description: >
        Describe whether the function is 1st Gen or 2nd Gen.
        
      valid_values: ['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2']
    - name: kmsKeyName
      value: string
      description: >
        Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
        
    - name: functionId
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

Updates existing function.

```sql
UPDATE google.cloudfunctions.functions
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__buildConfig = '{{ buildConfig }}',
data__serviceConfig = '{{ serviceConfig }}',
data__eventTrigger = '{{ eventTrigger }}',
data__labels = '{{ labels }}',
data__environment = '{{ environment }}',
data__kmsKeyName = '{{ kmsKeyName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND functionsId = '{{ functionsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

```sql
DELETE FROM google.cloudfunctions.functions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND functionsId = '{{ functionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="setup_function_upgrade_config"
    values={[
        { label: 'setup_function_upgrade_config', value: 'setup_function_upgrade_config' },
        { label: 'abort_function_upgrade', value: 'abort_function_upgrade' },
        { label: 'redirect_function_upgrade_traffic', value: 'redirect_function_upgrade_traffic' },
        { label: 'rollback_function_upgrade_traffic', value: 'rollback_function_upgrade_traffic' },
        { label: 'commit_function_upgrade', value: 'commit_function_upgrade' },
        { label: 'generate_upload_url', value: 'generate_upload_url' },
        { label: 'generate_download_url', value: 'generate_download_url' },
        { label: 'detach_function', value: 'detach_function' }
    ]}
>
<TabItem value="setup_function_upgrade_config">

Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the first step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Only 2nd Gen configuration is setup as part of this request and traffic continues to be served by 1st Gen.

```sql
EXEC google.cloudfunctions.functions.setup_function_upgrade_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required 
@@json=
'{
"triggerServiceAccount": "{{ triggerServiceAccount }}"
}';
```
</TabItem>
<TabItem value="abort_function_upgrade">

Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen copy related configuration and resources which were created during the upgrade process.

```sql
EXEC google.cloudfunctions.functions.abort_function_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
<TabItem value="redirect_function_upgrade_traffic">

Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step of the multi step process to upgrade 1st Gen functions to 2nd Gen. After this operation, all new traffic will be served by 2nd Gen copy.

```sql
EXEC google.cloudfunctions.functions.redirect_function_upgrade_traffic 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
<TabItem value="rollback_function_upgrade_traffic">

Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, all new traffic would be served by the 1st Gen.

```sql
EXEC google.cloudfunctions.functions.rollback_function_upgrade_traffic 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
<TabItem value="commit_function_upgrade">

Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Deletes all original 1st Gen related configuration and resources.

```sql
EXEC google.cloudfunctions.functions.commit_function_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
<TabItem value="generate_upload_url">

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`

```sql
EXEC google.cloudfunctions.functions.generate_upload_url 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"kmsKeyName": "{{ kmsKeyName }}", 
"environment": "{{ environment }}"
}';
```
</TabItem>
<TabItem value="generate_download_url">

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

```sql
EXEC google.cloudfunctions.functions.generate_download_url 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
<TabItem value="detach_function">

Detaches 2nd Gen function to Cloud Run function.

```sql
EXEC google.cloudfunctions.functions.detach_function 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@functionsId='{{ functionsId }}' --required;
```
</TabItem>
</Tabs>
