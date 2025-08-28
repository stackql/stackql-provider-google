--- 
title: releases
hide_title: false
hide_table_of_contents: false
keywords:
  - releases
  - appdistribution
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>releases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appdistribution.releases" /></td></tr>
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
    <td>The name of the release resource. Format: `projects/&#123;project_number&#125;/apps/&#123;app_id&#125;/releases/&#123;release_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="binaryDownloadUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.</td>
</tr>
<tr>
    <td><CopyableCode code="buildVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="firebaseConsoleUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the Firebase console displaying a single release.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseNotes" /></td>
    <td><code>object</code></td>
    <td>Notes of the release. (id: GoogleFirebaseAppdistroV1ReleaseNotes)</td>
</tr>
<tr>
    <td><CopyableCode code="testingUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release was last updated.</td>
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
    <td>The name of the release resource. Format: `projects/&#123;project_number&#125;/apps/&#123;app_id&#125;/releases/&#123;release_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="binaryDownloadUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.</td>
</tr>
<tr>
    <td><CopyableCode code="buildVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="firebaseConsoleUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the Firebase console displaying a single release.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseNotes" /></td>
    <td><code>object</code></td>
    <td>Notes of the release. (id: GoogleFirebaseAppdistroV1ReleaseNotes)</td>
</tr>
<tr>
    <td><CopyableCode code="testingUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the release was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td></td>
    <td>Gets a release.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists releases. By default, sorts by `createTime` in descending order.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a release.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Deletes releases. A maximum of 100 releases can be deleted per request.</td>
</tr>
<tr>
    <td><a href="#distribute"><CopyableCode code="distribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td></td>
    <td>Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-releasesId">
    <td><CopyableCode code="releasesId" /></td>
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

Gets a release.

```sql
SELECT
name,
binaryDownloadUri,
buildVersion,
createTime,
displayVersion,
expireTime,
firebaseConsoleUri,
releaseNotes,
testingUri,
updateTime
FROM firebase.appdistribution.releases
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND releasesId = '{{ releasesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists releases. By default, sorts by `createTime` in descending order.

```sql
SELECT
name,
binaryDownloadUri,
buildVersion,
createTime,
displayVersion,
expireTime,
firebaseConsoleUri,
releaseNotes,
testingUri,
updateTime
FROM firebase.appdistribution.releases
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
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

Updates a release.

```sql
UPDATE firebase.appdistribution.releases
SET 
data__name = '{{ name }}',
data__releaseNotes = '{{ releaseNotes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND releasesId = '{{ releasesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
binaryDownloadUri,
buildVersion,
createTime,
displayVersion,
expireTime,
firebaseConsoleUri,
releaseNotes,
testingUri,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="batch_delete"
    values={[
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="batch_delete">

Deletes releases. A maximum of 100 releases can be deleted per request.

```sql
DELETE FROM firebase.appdistribution.releases
WHERE projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="distribute"
    values={[
        { label: 'distribute', value: 'distribute' }
    ]}
>
<TabItem value="distribute">

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

```sql
EXEC firebase.appdistribution.releases.distribute 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@releasesId='{{ releasesId }}' --required 
@@json=
'{
"testerEmails": "{{ testerEmails }}", 
"groupAliases": "{{ groupAliases }}"
}';
```
</TabItem>
</Tabs>
