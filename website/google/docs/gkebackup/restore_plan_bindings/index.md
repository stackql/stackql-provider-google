--- 
title: restore_plan_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_plan_bindings
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

Creates, updates, deletes, gets or lists a <code>restore_plan_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>restore_plan_bindings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.restore_plan_bindings" /></td></tr>
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

A RestorePlanBinding binds a RestorePlan with a RestoreChannel. This resource is created automatically when a RestorePlan is created using a RestoreChannel. This also serves as a holder for cross-project fields that need to be displayed in the current project.

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
    <td>Identifier. The fully qualified name of the RestorePlanBinding. `projects/*/locations/*/restoreChannels/*/restorePlanBindings/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the BackupPlan bound to the specified RestorePlan. `projects/*/locations/*/backukpPlans/&#123;backup_plan&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a RestorePlanBinding from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform RestorePlanBinding updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlanBinding`, and systems are expected to put that etag in the request to `UpdateRestorePlanBinding` or `DeleteRestorePlanBinding` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="restorePlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the RestorePlan bound to this RestoreChannel. `projects/*/locations/*/restorePlans/&#123;restore_plan&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListRestorePlanBindings.

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
    <td>A token which may be sent as page_token in a subsequent `ListRestorePlanBindings` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="restorePlanBindings" /></td>
    <td><code>array</code></td>
    <td>The list of RestorePlanBindings matching the given criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restoreChannelsId"><code>restoreChannelsId</code></a>, <a href="#parameter-restorePlanBindingsId"><code>restorePlanBindingsId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single RestorePlanBinding.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restoreChannelsId"><code>restoreChannelsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists RestorePlanBindings in a given location.</td>
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
<tr id="parameter-restoreChannelsId">
    <td><CopyableCode code="restoreChannelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restorePlanBindingsId">
    <td><CopyableCode code="restorePlanBindingsId" /></td>
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

Retrieve the details of a single RestorePlanBinding.

```sql
SELECT
name,
backupPlan,
createTime,
etag,
restorePlan,
uid,
updateTime
FROM google.gkebackup.restore_plan_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restoreChannelsId = '{{ restoreChannelsId }}' -- required
AND restorePlanBindingsId = '{{ restorePlanBindingsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RestorePlanBindings in a given location.

```sql
SELECT
nextPageToken,
restorePlanBindings,
unreachable
FROM google.gkebackup.restore_plan_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restoreChannelsId = '{{ restoreChannelsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
