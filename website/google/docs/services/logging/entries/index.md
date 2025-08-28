--- 
title: entries
hide_title: false
hide_table_of_contents: false
keywords:
  - entries
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

Creates, updates, deletes, gets or lists an <code>entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="entries_list"
    values={[
        { label: 'entries_list', value: 'entries_list' }
    ]}
>
<TabItem value="entries_list">

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
    <td><CopyableCode code="entries" /></td>
    <td><code>array</code></td>
    <td>A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.</td>
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
    <td><a href="#entries_list"><CopyableCode code="entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).</td>
</tr>
<tr>
    <td><a href="#entries_copy"><CopyableCode code="entries_copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Copies a set of log entries from a log bucket to a Cloud Storage bucket.</td>
</tr>
<tr>
    <td><a href="#entries_write"><CopyableCode code="entries_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resource names (projects, organizations, billing accounts or folders), where the resource name for a log entry is determined from its logName field.</td>
</tr>
<tr>
    <td><a href="#entries_tail"><CopyableCode code="entries_tail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Streaming read of log entries as they are received. Until the stream is terminated, it will continue reading logs.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="entries_list"
    values={[
        { label: 'entries_list', value: 'entries_list' }
    ]}
>
<TabItem value="entries_list">

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).

```sql
SELECT
entries,
nextPageToken
FROM google.logging.entries;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="entries_copy"
    values={[
        { label: 'entries_copy', value: 'entries_copy' },
        { label: 'entries_write', value: 'entries_write' },
        { label: 'entries_tail', value: 'entries_tail' }
    ]}
>
<TabItem value="entries_copy">

Copies a set of log entries from a log bucket to a Cloud Storage bucket.

```sql
EXEC google.logging.entries.entries_copy 
@@json=
'{
"name": "{{ name }}", 
"filter": "{{ filter }}", 
"destination": "{{ destination }}"
}';
```
</TabItem>
<TabItem value="entries_write">

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resource names (projects, organizations, billing accounts or folders), where the resource name for a log entry is determined from its logName field.

```sql
EXEC google.logging.entries.entries_write 
@@json=
'{
"logName": "{{ logName }}", 
"resource": "{{ resource }}", 
"labels": "{{ labels }}", 
"entries": "{{ entries }}", 
"partialSuccess": {{ partialSuccess }}, 
"dryRun": {{ dryRun }}
}';
```
</TabItem>
<TabItem value="entries_tail">

Streaming read of log entries as they are received. Until the stream is terminated, it will continue reading logs.

```sql
EXEC google.logging.entries.entries_tail 
@@json=
'{
"resourceNames": "{{ resourceNames }}", 
"filter": "{{ filter }}", 
"bufferWindow": "{{ bufferWindow }}"
}';
```
</TabItem>
</Tabs>
