--- 
title: archive_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_deployments
  - apigee
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

Creates, updates, deletes, gets or lists an <code>archive_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>archive_deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.archive_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_archive_deployments_get"
    values={[
        { label: 'organizations_environments_archive_deployments_get', value: 'organizations_environments_archive_deployments_get' },
        { label: 'organizations_environments_archive_deployments_list', value: 'organizations_environments_archive_deployments_list' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_get">

Archive Deployment information.

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
    <td>Name of the Archive Deployment in the following format: `organizations/&#123;org&#125;/environments/&#123;env&#125;/archiveDeployments/&#123;id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="gcsUri" /></td>
    <td><code>string</code></td>
    <td>Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/&#123;org&#125;/operations/&#123;id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_archive_deployments_list">

Response for ListArchiveDeployments method.

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
    <td><CopyableCode code="archiveDeployments" /></td>
    <td><code>array</code></td>
    <td>Archive Deployments in the specified environment.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist.</td>
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
    <td><a href="#organizations_environments_archive_deployments_get"><CopyableCode code="organizations_environments_archive_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-archiveDeploymentsId"><code>archiveDeploymentsId</code></a></td>
    <td></td>
    <td>Gets the specified ArchiveDeployment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_list"><CopyableCode code="organizations_environments_archive_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the ArchiveDeployments in the specified Environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_create"><CopyableCode code="organizations_environments_archive_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a new ArchiveDeployment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_patch"><CopyableCode code="organizations_environments_archive_deployments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-archiveDeploymentsId"><code>archiveDeploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_delete"><CopyableCode code="organizations_environments_archive_deployments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-archiveDeploymentsId"><code>archiveDeploymentsId</code></a></td>
    <td></td>
    <td>Deletes an archive deployment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_generate_upload_url"><CopyableCode code="organizations_environments_archive_deployments_generate_upload_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`</td>
</tr>
<tr>
    <td><a href="#organizations_environments_archive_deployments_generate_download_url"><CopyableCode code="organizations_environments_archive_deployments_generate_download_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-archiveDeploymentsId"><code>archiveDeploymentsId</code></a></td>
    <td></td>
    <td>Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.</td>
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
<tr id="parameter-archiveDeploymentsId">
    <td><CopyableCode code="archiveDeploymentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_archive_deployments_get"
    values={[
        { label: 'organizations_environments_archive_deployments_get', value: 'organizations_environments_archive_deployments_get' },
        { label: 'organizations_environments_archive_deployments_list', value: 'organizations_environments_archive_deployments_list' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_get">

Gets the specified ArchiveDeployment.

```sql
SELECT
name,
createdAt,
gcsUri,
labels,
operation,
updatedAt
FROM google.apigee.archive_deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND archiveDeploymentsId = '{{ archiveDeploymentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_archive_deployments_list">

Lists the ArchiveDeployments in the specified Environment.

```sql
SELECT
archiveDeployments,
nextPageToken
FROM google.apigee.archive_deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_archive_deployments_create"
    values={[
        { label: 'organizations_environments_archive_deployments_create', value: 'organizations_environments_archive_deployments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_create">

Creates a new ArchiveDeployment.

```sql
INSERT INTO google.apigee.archive_deployments (
data__name,
data__labels,
data__gcsUri,
organizationsId,
environmentsId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ gcsUri }}',
'{{ organizationsId }}',
'{{ environmentsId }}'
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
- name: archive_deployments
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the archive_deployments resource.
    - name: environmentsId
      value: string
      description: Required parameter for the archive_deployments resource.
    - name: name
      value: string
      description: >
        Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.
        
    - name: labels
      value: object
      description: >
        User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
        
    - name: gcsUri
      value: string
      description: >
        Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_archive_deployments_patch"
    values={[
        { label: 'organizations_environments_archive_deployments_patch', value: 'organizations_environments_archive_deployments_patch' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_patch">

Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.

```sql
UPDATE google.apigee.archive_deployments
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__gcsUri = '{{ gcsUri }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND archiveDeploymentsId = '{{ archiveDeploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createdAt,
gcsUri,
labels,
operation,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_archive_deployments_delete"
    values={[
        { label: 'organizations_environments_archive_deployments_delete', value: 'organizations_environments_archive_deployments_delete' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_delete">

Deletes an archive deployment.

```sql
DELETE FROM google.apigee.archive_deployments
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND archiveDeploymentsId = '{{ archiveDeploymentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_archive_deployments_generate_upload_url"
    values={[
        { label: 'organizations_environments_archive_deployments_generate_upload_url', value: 'organizations_environments_archive_deployments_generate_upload_url' },
        { label: 'organizations_environments_archive_deployments_generate_download_url', value: 'organizations_environments_archive_deployments_generate_download_url' }
    ]}
>
<TabItem value="organizations_environments_archive_deployments_generate_upload_url">

Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

```sql
EXEC google.apigee.archive_deployments.organizations_environments_archive_deployments_generate_upload_url 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_archive_deployments_generate_download_url">

Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.

```sql
EXEC google.apigee.archive_deployments.organizations_environments_archive_deployments_generate_download_url 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@archiveDeploymentsId='{{ archiveDeploymentsId }}' --required;
```
</TabItem>
</Tabs>
