--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - file
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.file.backups" /></td></tr>
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
    <td>Output only. The resource name of the backup, in the format `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/backups/&#123;backup_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Capacity of the source file share when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemProtocol" /></td>
    <td><code>string</code></td>
    <td>Output only. The file system protocol of the source Filestore instance that this backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. KMS key name used for data encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
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
    <td><CopyableCode code="sourceFileShare" /></td>
    <td><code>string</code></td>
    <td>Name of the file share in the source Filestore instance that the backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstance" /></td>
    <td><code>string</code></td>
    <td>The resource name of the source Filestore instance, in the format `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;`, used to create this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstanceTier" /></td>
    <td><code>string</code></td>
    <td>Output only. The service tier of the source Filestore instance that this backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup state.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value</td>
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
    <td>Output only. The resource name of the backup, in the format `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/backups/&#123;backup_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Capacity of the source file share when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemProtocol" /></td>
    <td><code>string</code></td>
    <td>Output only. The file system protocol of the source Filestore instance that this backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. KMS key name used for data encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
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
    <td><CopyableCode code="sourceFileShare" /></td>
    <td><code>string</code></td>
    <td>Name of the file share in the source Filestore instance that the backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstance" /></td>
    <td><code>string</code></td>
    <td>The resource name of the source Filestore instance, in the format `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;`, used to create this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstanceTier" /></td>
    <td><code>string</code></td>
    <td>Output only. The service tier of the source Filestore instance that this backup is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup state.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Gets the details of a specific backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all backups in a project for either a specified location or for all locations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a></td>
    <td>Creates a backup.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings of a specific backup.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Deletes a backup.</td>
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
<tr id="parameter-backupsId">
    <td><CopyableCode code="backupsId" /></td>
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
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
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

Gets the details of a specific backup.

```sql
SELECT
name,
capacityGb,
createTime,
description,
downloadBytes,
fileSystemProtocol,
kmsKey,
labels,
satisfiesPzi,
satisfiesPzs,
sourceFileShare,
sourceInstance,
sourceInstanceTier,
state,
storageBytes,
tags
FROM google.file.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupsId = '{{ backupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all backups in a project for either a specified location or for all locations.

```sql
SELECT
name,
capacityGb,
createTime,
description,
downloadBytes,
fileSystemProtocol,
kmsKey,
labels,
satisfiesPzi,
satisfiesPzs,
sourceFileShare,
sourceInstance,
sourceInstanceTier,
state,
storageBytes,
tags
FROM google.file.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
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

Creates a backup.

```sql
INSERT INTO google.file.backups (
data__description,
data__labels,
data__sourceInstance,
data__sourceFileShare,
data__kmsKey,
data__tags,
projectsId,
locationsId,
backupId
)
SELECT 
'{{ description }}',
'{{ labels }}',
'{{ sourceInstance }}',
'{{ sourceFileShare }}',
'{{ kmsKey }}',
'{{ tags }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupId }}'
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
- name: backups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backups resource.
    - name: locationsId
      value: string
      description: Required parameter for the backups resource.
    - name: description
      value: string
      description: >
        A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata.
        
    - name: sourceInstance
      value: string
      description: >
        The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup.
        
    - name: sourceFileShare
      value: string
      description: >
        Name of the file share in the source Filestore instance that the backup is created from.
        
    - name: kmsKey
      value: string
      description: >
        Immutable. KMS key name used for data encryption.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
        
    - name: backupId
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

Updates the settings of a specific backup.

```sql
UPDATE google.file.backups
SET 
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__sourceInstance = '{{ sourceInstance }}',
data__sourceFileShare = '{{ sourceFileShare }}',
data__kmsKey = '{{ kmsKey }}',
data__tags = '{{ tags }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupsId = '{{ backupsId }}' --required
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

Deletes a backup.

```sql
DELETE FROM google.file.backups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupsId = '{{ backupsId }}' --required;
```
</TabItem>
</Tabs>
