--- 
title: host_security_reports_result_view
hide_title: false
hide_table_of_contents: false
keywords:
  - host_security_reports_result_view
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

Creates, updates, deletes, gets or lists a <code>host_security_reports_result_view</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>host_security_reports_result_view</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.host_security_reports_result_view" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_host_security_reports_get_result_view"
    values={[
        { label: 'organizations_host_security_reports_get_result_view', value: 'organizations_host_security_reports_get_result_view' }
    ]}
>
<TabItem value="organizations_host_security_reports_get_result_view">

The response for security report result view APIs.

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
    <td><CopyableCode code="code" /></td>
    <td><code>integer (int32)</code></td>
    <td>Error code when there is a failure.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Error message when there is a failure.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata contains information like metrics, dimenstions etc of the security report. (id: GoogleCloudApigeeV1SecurityReportMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="rows" /></td>
    <td><code>array</code></td>
    <td>Rows of security report result. Each row is a JSON object. Example: &#123;sum(message_count): 1, developer_app: "(not set)",…&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of retrieving ResultView.</td>
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
    <td><a href="#organizations_host_security_reports_get_result_view"><CopyableCode code="organizations_host_security_reports_get_result_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-hostSecurityReportsId"><code>hostSecurityReportsId</code></a></td>
    <td></td>
    <td>After the query is completed, use this API to view the query result when result size is small.</td>
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
<tr id="parameter-hostSecurityReportsId">
    <td><CopyableCode code="hostSecurityReportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_host_security_reports_get_result_view"
    values={[
        { label: 'organizations_host_security_reports_get_result_view', value: 'organizations_host_security_reports_get_result_view' }
    ]}
>
<TabItem value="organizations_host_security_reports_get_result_view">

After the query is completed, use this API to view the query result when result size is small.

```sql
SELECT
code,
error,
metadata,
rows,
state
FROM google.apigee.host_security_reports_result_view
WHERE organizationsId = '{{ organizationsId }}' -- required
AND hostSecurityReportsId = '{{ hostSecurityReportsId }}' -- required;
```
</TabItem>
</Tabs>
