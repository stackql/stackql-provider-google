--- 
title: release_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - release_configs
  - dataform
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

Creates, updates, deletes, gets or lists a <code>release_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>release_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.release_configs" /></td></tr>
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
    <td>Identifier. The release config's name.</td>
</tr>
<tr>
    <td><CopyableCode code="codeCompilationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. (id: CodeCompilationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="cronSchedule" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional schedule (in cron format) for automatic creation of compilation results.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables automatic creation of compilation results.</td>
</tr>
<tr>
    <td><CopyableCode code="gitCommitish" /></td>
    <td><code>string</code></td>
    <td>Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="recentScheduledReleaseRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. Records of the 10 most recent scheduled release attempts, ordered in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseCompilationResult" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.</td>
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
    <td>Identifier. The release config's name.</td>
</tr>
<tr>
    <td><CopyableCode code="codeCompilationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. (id: CodeCompilationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="cronSchedule" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional schedule (in cron format) for automatic creation of compilation results.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables automatic creation of compilation results.</td>
</tr>
<tr>
    <td><CopyableCode code="gitCommitish" /></td>
    <td><code>string</code></td>
    <td>Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="recentScheduledReleaseRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. Records of the 10 most recent scheduled release attempts, ordered in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseCompilationResult" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-releaseConfigsId"><code>releaseConfigsId</code></a></td>
    <td></td>
    <td>Fetches a single ReleaseConfig.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ReleaseConfigs in a given Repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-releaseConfigId"><code>releaseConfigId</code></a></td>
    <td>Creates a new ReleaseConfig in a given Repository.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-releaseConfigsId"><code>releaseConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-releaseConfigsId"><code>releaseConfigsId</code></a></td>
    <td></td>
    <td>Deletes a single ReleaseConfig.</td>
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
<tr id="parameter-releaseConfigsId">
    <td><CopyableCode code="releaseConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
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
<tr id="parameter-releaseConfigId">
    <td><CopyableCode code="releaseConfigId" /></td>
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

Fetches a single ReleaseConfig.

```sql
SELECT
name,
codeCompilationConfig,
cronSchedule,
disabled,
gitCommitish,
internalMetadata,
recentScheduledReleaseRecords,
releaseCompilationResult,
timeZone
FROM google.dataform.release_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND releaseConfigsId = '{{ releaseConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ReleaseConfigs in a given Repository.

```sql
SELECT
name,
codeCompilationConfig,
cronSchedule,
disabled,
gitCommitish,
internalMetadata,
recentScheduledReleaseRecords,
releaseCompilationResult,
timeZone
FROM google.dataform.release_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new ReleaseConfig in a given Repository.

```sql
INSERT INTO google.dataform.release_configs (
data__name,
data__gitCommitish,
data__codeCompilationConfig,
data__cronSchedule,
data__timeZone,
data__releaseCompilationResult,
data__disabled,
projectsId,
locationsId,
repositoriesId,
releaseConfigId
)
SELECT 
'{{ name }}',
'{{ gitCommitish }}',
'{{ codeCompilationConfig }}',
'{{ cronSchedule }}',
'{{ timeZone }}',
'{{ releaseCompilationResult }}',
{{ disabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}',
'{{ releaseConfigId }}'
RETURNING
name,
codeCompilationConfig,
cronSchedule,
disabled,
gitCommitish,
internalMetadata,
recentScheduledReleaseRecords,
releaseCompilationResult,
timeZone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: release_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the release_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the release_configs resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the release_configs resource.
    - name: name
      value: string
      description: >
        Identifier. The release config's name.
        
    - name: gitCommitish
      value: string
      description: >
        Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`
        
    - name: codeCompilationConfig
      value: object
      description: >
        Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.
        
    - name: cronSchedule
      value: string
      description: >
        Optional. Optional schedule (in cron format) for automatic creation of compilation results.
        
    - name: timeZone
      value: string
      description: >
        Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
        
    - name: releaseCompilationResult
      value: string
      description: >
        Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Disables automatic creation of compilation results.
        
    - name: releaseConfigId
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

Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

```sql
UPDATE google.dataform.release_configs
SET 
data__name = '{{ name }}',
data__gitCommitish = '{{ gitCommitish }}',
data__codeCompilationConfig = '{{ codeCompilationConfig }}',
data__cronSchedule = '{{ cronSchedule }}',
data__timeZone = '{{ timeZone }}',
data__releaseCompilationResult = '{{ releaseCompilationResult }}',
data__disabled = {{ disabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND releaseConfigsId = '{{ releaseConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
codeCompilationConfig,
cronSchedule,
disabled,
gitCommitish,
internalMetadata,
recentScheduledReleaseRecords,
releaseCompilationResult,
timeZone;
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

Deletes a single ReleaseConfig.

```sql
DELETE FROM google.dataform.release_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND releaseConfigsId = '{{ releaseConfigsId }}' --required;
```
</TabItem>
</Tabs>
