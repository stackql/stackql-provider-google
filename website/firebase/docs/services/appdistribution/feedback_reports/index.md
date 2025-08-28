--- 
title: feedback_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - feedback_reports
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

Creates, updates, deletes, gets or lists a <code>feedback_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feedback_reports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appdistribution.feedback_reports" /></td></tr>
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
    <td>The name of the feedback report resource. Format: `projects/&#123;project_number&#125;/apps/&#123;app&#125;/releases/&#123;release&#125;/feedbackReports/&#123;feedback_report&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the feedback report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="firebaseConsoleUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the Firebase console displaying the feedback report.</td>
</tr>
<tr>
    <td><CopyableCode code="screenshotUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A signed link (which expires in one hour) that lets you directly download the screenshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tester" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the tester who submitted the feedback report.</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>Output only. The text of the feedback report.</td>
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
    <td>The name of the feedback report resource. Format: `projects/&#123;project_number&#125;/apps/&#123;app&#125;/releases/&#123;release&#125;/feedbackReports/&#123;feedback_report&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the feedback report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="firebaseConsoleUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the Firebase console displaying the feedback report.</td>
</tr>
<tr>
    <td><CopyableCode code="screenshotUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A signed link (which expires in one hour) that lets you directly download the screenshot.</td>
</tr>
<tr>
    <td><CopyableCode code="tester" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the tester who submitted the feedback report.</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>Output only. The text of the feedback report.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-feedbackReportsId"><code>feedbackReportsId</code></a></td>
    <td></td>
    <td>Gets a feedback report.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists feedback reports. By default, sorts by `createTime` in descending order.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-feedbackReportsId"><code>feedbackReportsId</code></a></td>
    <td></td>
    <td>Deletes a feedback report.</td>
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
<tr id="parameter-feedbackReportsId">
    <td><CopyableCode code="feedbackReportsId" /></td>
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

Gets a feedback report.

```sql
SELECT
name,
createTime,
firebaseConsoleUri,
screenshotUri,
tester,
text
FROM firebase.appdistribution.feedback_reports
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND feedbackReportsId = '{{ feedbackReportsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists feedback reports. By default, sorts by `createTime` in descending order.

```sql
SELECT
name,
createTime,
firebaseConsoleUri,
screenshotUri,
tester,
text
FROM firebase.appdistribution.feedback_reports
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Deletes a feedback report.

```sql
DELETE FROM firebase.appdistribution.feedback_reports
WHERE projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND releasesId = '{{ releasesId }}' --required
AND feedbackReportsId = '{{ feedbackReportsId }}' --required;
```
</TabItem>
</Tabs>
