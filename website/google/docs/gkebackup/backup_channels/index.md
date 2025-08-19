--- 
title: backup_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_channels
  - gkebackup
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

Creates, updates, deletes, gets or lists a <code>backup_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.backup_channels" /></td></tr>
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

A BackupChannel imposes constraints on where clusters can be backed up. The BackupChannel should be in the same project and region as the cluster being backed up. The backup can be created only in destination_project.

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
    <td>Identifier. The fully qualified name of the BackupChannel. `projects/*/locations/*/backupChannels/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupChannel resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this BackupChannel.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationProject" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The project where Backups are allowed to be stored. The format is `projects/&#123;projectId&#125;` or `projects/&#123;projectNumber&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationProjectId" /></td>
    <td><code>string</code></td>
    <td>Output only. The project_id where Backups are allowed to be stored. Example Project ID: "my-project-id". This will be an OUTPUT_ONLY field to return the project_id of the destination project.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a BackupChannel from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupChannel updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupChannel`, and systems are expected to put that etag in the request to `UpdateBackupChannel` or `DeleteBackupChannel` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupChannel resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListBackupChannels.

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
    <td><CopyableCode code="backupChannels" /></td>
    <td><code>array</code></td>
    <td>The list of BackupChannels matching the given criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which may be sent as page_token in a subsequent `ListBackupChannels` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupChannelsId"><code>backupChannelsId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single BackupChannel.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists BackupChannels in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupChannelId"><code>backupChannelId</code></a></td>
    <td>Creates a new BackupChannel in a given location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupChannelsId"><code>backupChannelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a BackupChannel.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupChannelsId"><code>backupChannelsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an existing BackupChannel.</td>
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
<tr id="parameter-backupChannelsId">
    <td><CopyableCode code="backupChannelsId" /></td>
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
<tr id="parameter-backupChannelId">
    <td><CopyableCode code="backupChannelId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Retrieve the details of a single BackupChannel.

```sql
SELECT
name,
createTime,
description,
destinationProject,
destinationProjectId,
etag,
labels,
uid,
updateTime
FROM google.gkebackup.backup_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupChannelsId = '{{ backupChannelsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BackupChannels in a given location.

```sql
SELECT
backupChannels,
nextPageToken,
unreachable
FROM google.gkebackup.backup_channels
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

Creates a new BackupChannel in a given location.

```sql
INSERT INTO google.gkebackup.backup_channels (
data__name,
data__destinationProject,
data__labels,
data__description,
projectsId,
locationsId,
backupChannelId
)
SELECT 
'{{ name }}',
'{{ destinationProject }}',
'{{ labels }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupChannelId }}'
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
- name: backup_channels
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_channels resource.
    - name: locationsId
      value: string
      description: Required parameter for the backup_channels resource.
    - name: name
      value: string
      description: >
        Identifier. The fully qualified name of the BackupChannel. `projects/*/locations/*/backupChannels/*`
        
    - name: destinationProject
      value: string
      description: >
        Required. Immutable. The project where Backups are allowed to be stored. The format is `projects/{projectId}` or `projects/{projectNumber}`.
        
    - name: labels
      value: object
      description: >
        Optional. A set of custom labels supplied by user.
        
    - name: description
      value: string
      description: >
        Optional. User specified descriptive string for this BackupChannel.
        
    - name: backupChannelId
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

Update a BackupChannel.

```sql
UPDATE google.gkebackup.backup_channels
SET 
data__name = '{{ name }}',
data__destinationProject = '{{ destinationProject }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupChannelsId = '{{ backupChannelsId }}' --required
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

Deletes an existing BackupChannel.

```sql
DELETE FROM google.gkebackup.backup_channels
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupChannelsId = '{{ backupChannelsId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
