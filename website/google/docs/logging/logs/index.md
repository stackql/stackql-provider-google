--- 
title: logs
hide_title: false
hide_table_of_contents: false
keywords:
  - logs
  - logging
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

Creates, updates, deletes, gets or lists a <code>logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>logs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_buckets_views_logs_list"
    values={[
        { label: 'projects_locations_buckets_views_logs_list', value: 'projects_locations_buckets_views_logs_list' },
        { label: 'organizations_locations_buckets_views_logs_list', value: 'organizations_locations_buckets_views_logs_list' },
        { label: 'folders_locations_buckets_views_logs_list', value: 'folders_locations_buckets_views_logs_list' },
        { label: 'billing_accounts_locations_buckets_views_logs_list', value: 'billing_accounts_locations_buckets_views_logs_list' },
        { label: 'logs_list', value: 'logs_list' },
        { label: 'projects_logs_list', value: 'projects_logs_list' },
        { label: 'organizations_logs_list', value: 'organizations_logs_list' },
        { label: 'folders_logs_list', value: 'folders_logs_list' },
        { label: 'billing_accounts_logs_list', value: 'billing_accounts_logs_list' }
    ]}
>
<TabItem value="projects_locations_buckets_views_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_views_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_views_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_logs_list">

Result returned from ListLogs.

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
    <td><CopyableCode code="logNames" /></td>
    <td><code>array</code></td>
    <td>A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.</td>
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
    <td><a href="#projects_locations_buckets_views_logs_list"><CopyableCode code="projects_locations_buckets_views_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_logs_list"><CopyableCode code="organizations_locations_buckets_views_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_logs_list"><CopyableCode code="folders_locations_buckets_views_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_logs_list"><CopyableCode code="billing_accounts_locations_buckets_views_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#logs_list"><CopyableCode code="logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#projects_logs_list"><CopyableCode code="projects_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#organizations_logs_list"><CopyableCode code="organizations_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#folders_logs_list"><CopyableCode code="folders_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_logs_list"><CopyableCode code="billing_accounts_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a></td>
    <td><a href="#parameter-resourceNames"><code>resourceNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.</td>
</tr>
<tr>
    <td><a href="#projects_logs_delete"><CopyableCode code="projects_logs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-logsId"><code>logsId</code></a></td>
    <td></td>
    <td>Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_logs_delete"><CopyableCode code="organizations_logs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-logsId"><code>logsId</code></a></td>
    <td></td>
    <td>Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.</td>
</tr>
<tr>
    <td><a href="#folders_logs_delete"><CopyableCode code="folders_logs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-logsId"><code>logsId</code></a></td>
    <td></td>
    <td>Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_logs_delete"><CopyableCode code="billing_accounts_logs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-logsId"><code>logsId</code></a></td>
    <td></td>
    <td>Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.</td>
</tr>
<tr>
    <td><a href="#logs_delete"><CopyableCode code="logs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-logName"><code>logName</code></a></td>
    <td></td>
    <td>Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bucketsId">
    <td><CopyableCode code="bucketsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-logName">
    <td><CopyableCode code="logName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-logsId">
    <td><CopyableCode code="logsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-viewsId">
    <td><CopyableCode code="viewsId" /></td>
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
<tr id="parameter-resourceNames">
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_buckets_views_logs_list"
    values={[
        { label: 'projects_locations_buckets_views_logs_list', value: 'projects_locations_buckets_views_logs_list' },
        { label: 'organizations_locations_buckets_views_logs_list', value: 'organizations_locations_buckets_views_logs_list' },
        { label: 'folders_locations_buckets_views_logs_list', value: 'folders_locations_buckets_views_logs_list' },
        { label: 'billing_accounts_locations_buckets_views_logs_list', value: 'billing_accounts_locations_buckets_views_logs_list' },
        { label: 'logs_list', value: 'logs_list' },
        { label: 'projects_logs_list', value: 'projects_logs_list' },
        { label: 'organizations_logs_list', value: 'organizations_logs_list' },
        { label: 'folders_logs_list', value: 'folders_logs_list' },
        { label: 'billing_accounts_logs_list', value: 'billing_accounts_logs_list' }
    ]}
>
<TabItem value="projects_locations_buckets_views_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_locations_buckets_views_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE projectsId = '{{ projectsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE foldersId = '{{ foldersId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="billing_accounts_logs_list">

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

```sql
SELECT
logNames,
nextPageToken
FROM google.logging.logs
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND resourceNames = '{{ resourceNames }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_logs_delete"
    values={[
        { label: 'projects_logs_delete', value: 'projects_logs_delete' },
        { label: 'organizations_logs_delete', value: 'organizations_logs_delete' },
        { label: 'folders_logs_delete', value: 'folders_logs_delete' },
        { label: 'billing_accounts_logs_delete', value: 'billing_accounts_logs_delete' },
        { label: 'logs_delete', value: 'logs_delete' }
    ]}
>
<TabItem value="projects_logs_delete">

Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

```sql
DELETE FROM google.logging.logs
WHERE projectsId = '{{ projectsId }}' --required
AND logsId = '{{ logsId }}' --required;
```
</TabItem>
<TabItem value="organizations_logs_delete">

Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

```sql
DELETE FROM google.logging.logs
WHERE organizationsId = '{{ organizationsId }}' --required
AND logsId = '{{ logsId }}' --required;
```
</TabItem>
<TabItem value="folders_logs_delete">

Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

```sql
DELETE FROM google.logging.logs
WHERE foldersId = '{{ foldersId }}' --required
AND logsId = '{{ logsId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_logs_delete">

Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

```sql
DELETE FROM google.logging.logs
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND logsId = '{{ logsId }}' --required;
```
</TabItem>
<TabItem value="logs_delete">

Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

```sql
DELETE FROM google.logging.logs
WHERE logName = '{{ logName }}' --required;
```
</TabItem>
</Tabs>
