--- 
title: violations
hide_title: false
hide_table_of_contents: false
keywords:
  - violations
  - cloudcontrolspartner
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

Creates, updates, deletes, gets or lists a <code>violations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>violations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcontrolspartner.violations" /></td></tr>
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
    <td>Identifier. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;/violations/&#123;violation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="beginTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which triggered the Violation.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.</td>
</tr>
<tr>
    <td><CopyableCode code="folderId" /></td>
    <td><code>string (int64)</code></td>
    <td>The folder_id of the violation</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantOrgPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: `projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125;` `folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125;` `organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>Output only. Compliance violation remediation (id: Remediation)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the violation</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time when the Violation record was updated.</td>
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
    <td>Identifier. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;/violations/&#123;violation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="beginTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which triggered the Violation.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.</td>
</tr>
<tr>
    <td><CopyableCode code="folderId" /></td>
    <td><code>string (int64)</code></td>
    <td>The folder_id of the violation</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantOrgPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: `projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125;` `folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125;` `organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>Output only. Compliance violation remediation (id: Remediation)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the violation</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time when the Violation record was updated.</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a>, <a href="#parameter-violationsId"><code>violationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Violation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a></td>
    <td>Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of &#123;customer&#125; & &#123;workload&#125;. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;`</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-violationsId">
    <td><CopyableCode code="violationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadsId">
    <td><CopyableCode code="workloadsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.endTime">
    <td><CopyableCode code="interval.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.startTime">
    <td><CopyableCode code="interval.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
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

Gets details of a single Violation.

```sql
SELECT
name,
beginTime,
category,
description,
folderId,
nonCompliantOrgPolicy,
remediation,
resolveTime,
state,
updateTime
FROM google.cloudcontrolspartner.violations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customersId = '{{ customersId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required
AND violationsId = '{{ violationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of &#123;customer&#125; & &#123;workload&#125;. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;`

```sql
SELECT
name,
beginTime,
category,
description,
folderId,
nonCompliantOrgPolicy,
remediation,
resolveTime,
state,
updateTime
FROM google.cloudcontrolspartner.violations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customersId = '{{ customersId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND interval.startTime = '{{ interval.startTime }}'
AND interval.endTime = '{{ interval.endTime }}';
```
</TabItem>
</Tabs>
