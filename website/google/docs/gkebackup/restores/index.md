--- 
title: restores
hide_title: false
hide_table_of_contents: false
keywords:
  - restores
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

Creates, updates, deletes, gets or lists a <code>restores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>restores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.restores" /></td></tr>
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

Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself.

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
    <td>Output only. The full name of the Restore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/*/locations/*/backupPlans/*/backups/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Output only. The target cluster into which this Restore will restore data. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*` Inherited from parent RestorePlan's cluster value.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp of when the restore operation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this Restore resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this Restore.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestore`, and systems are expected to put that etag in the request to `UpdateRestore` or `DeleteRestore` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. Filters resources for `Restore`. If not specified, the scope of the restore will remain the same as defined in the `RestorePlan`. If this is specified and no resources are matched by the `inclusion_filters` or everything is excluded by the `exclusion_filters`, nothing will be restored. This filter can only be specified if the value of namespaced_resource_restore_mode is set to `MERGE_SKIP_ON_CONFLICT`, `MERGE_REPLACE_VOLUME_ON_CONFLICT` or `MERGE_REPLACE_ON_CONFLICT`. (id: Filter)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesExcludedCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of resources excluded during the restore execution.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesFailedCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of resources that failed to be restored during the restore execution.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesRestoredCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of resources restored during the restore execution.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Configuration of the Restore. Inherited from parent RestorePlan's restore_config. (id: RestoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the Restore.</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why the Restore is in its current state. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="troubleshootingInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the troubleshooting steps which will provide debugging information to the end users. (id: TroubleshootingInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this Restore resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeDataRestorePolicyOverrides" /></td>
    <td><code>array</code></td>
    <td>Optional. Immutable. Overrides the volume data restore policies selected in the Restore Config for override-scoped resources.</td>
</tr>
<tr>
    <td><CopyableCode code="volumesRestoredCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of volumes restored during the restore execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListRestores.

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
    <td>A token which may be sent as page_token in a subsequent `ListRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="restores" /></td>
    <td><code>array</code></td>
    <td>The list of Restores matching the given criteria.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a>, <a href="#parameter-restoresId"><code>restoresId</code></a></td>
    <td></td>
    <td>Retrieves the details of a single Restore.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the Restores for a given RestorePlan.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a></td>
    <td><a href="#parameter-restoreId"><code>restoreId</code></a></td>
    <td>Creates a new Restore for the given RestorePlan.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a>, <a href="#parameter-restoresId"><code>restoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a Restore.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a>, <a href="#parameter-restoresId"><code>restoresId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an existing Restore.</td>
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
<tr id="parameter-restorePlansId">
    <td><CopyableCode code="restorePlansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restoresId">
    <td><CopyableCode code="restoresId" /></td>
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
<tr id="parameter-restoreId">
    <td><CopyableCode code="restoreId" /></td>
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

Retrieves the details of a single Restore.

```sql
SELECT
name,
backup,
cluster,
completeTime,
createTime,
description,
etag,
filter,
labels,
resourcesExcludedCount,
resourcesFailedCount,
resourcesRestoredCount,
restoreConfig,
state,
stateReason,
troubleshootingInfo,
uid,
updateTime,
volumeDataRestorePolicyOverrides,
volumesRestoredCount
FROM google.gkebackup.restores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restorePlansId = '{{ restorePlansId }}' -- required
AND restoresId = '{{ restoresId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Restores for a given RestorePlan.

```sql
SELECT
nextPageToken,
restores,
unreachable
FROM google.gkebackup.restores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restorePlansId = '{{ restorePlansId }}' -- required
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

Creates a new Restore for the given RestorePlan.

```sql
INSERT INTO google.gkebackup.restores (
data__description,
data__backup,
data__labels,
data__filter,
data__volumeDataRestorePolicyOverrides,
projectsId,
locationsId,
restorePlansId,
restoreId
)
SELECT 
'{{ description }}',
'{{ backup }}',
'{{ labels }}',
'{{ filter }}',
'{{ volumeDataRestorePolicyOverrides }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ restorePlansId }}',
'{{ restoreId }}'
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
- name: restores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the restores resource.
    - name: locationsId
      value: string
      description: Required parameter for the restores resource.
    - name: restorePlansId
      value: string
      description: Required parameter for the restores resource.
    - name: description
      value: string
      description: >
        Optional. User specified descriptive string for this Restore.
        
    - name: backup
      value: string
      description: >
        Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/*/locations/*/backupPlans/*/backups/*`.
        
    - name: labels
      value: object
      description: >
        A set of custom labels supplied by user.
        
    - name: filter
      value: object
      description: >
        Optional. Immutable. Filters resources for `Restore`. If not specified, the scope of the restore will remain the same as defined in the `RestorePlan`. If this is specified and no resources are matched by the `inclusion_filters` or everything is excluded by the `exclusion_filters`, nothing will be restored. This filter can only be specified if the value of namespaced_resource_restore_mode is set to `MERGE_SKIP_ON_CONFLICT`, `MERGE_REPLACE_VOLUME_ON_CONFLICT` or `MERGE_REPLACE_ON_CONFLICT`.
        
    - name: volumeDataRestorePolicyOverrides
      value: array
      description: >
        Optional. Immutable. Overrides the volume data restore policies selected in the Restore Config for override-scoped resources.
        
    - name: restoreId
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

Update a Restore.

```sql
UPDATE google.gkebackup.restores
SET 
data__description = '{{ description }}',
data__backup = '{{ backup }}',
data__labels = '{{ labels }}',
data__filter = '{{ filter }}',
data__volumeDataRestorePolicyOverrides = '{{ volumeDataRestorePolicyOverrides }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND restorePlansId = '{{ restorePlansId }}' --required
AND restoresId = '{{ restoresId }}' --required
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

Deletes an existing Restore.

```sql
DELETE FROM google.gkebackup.restores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND restorePlansId = '{{ restorePlansId }}' --required
AND restoresId = '{{ restoresId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
