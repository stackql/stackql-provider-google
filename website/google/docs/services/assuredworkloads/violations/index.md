--- 
title: violations
hide_title: false
hide_table_of_contents: false
keywords:
  - violations
  - assuredworkloads
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.violations" /></td></tr>
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
    <td>Output only. Immutable. Name of the Violation. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/workloads/&#123;workload_id&#125;/violations/&#123;violations_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged" /></td>
    <td><code>boolean</code></td>
    <td>A boolean that indicates if the violation is acknowledged</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgementTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedOrgPolicyViolationId" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="auditLogLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query=&#123;logName&#125;&#123;protoPayload.resourceName&#125;&#123;timeRange&#125;&#123;folder&#125;</td>
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
    <td><CopyableCode code="exceptionAuditLogLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query=&#123;logName&#125;&#123;protoPayload.resourceName&#125;&#123;protoPayload.methodName&#125;&#123;timeRange&#125;&#123;organization&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="exceptionContexts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all the exception detail added for the violation.</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantOrgPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125; folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125; organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="orgPolicyConstraint" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.</td>
</tr>
<tr>
    <td><CopyableCode code="parentProjectNumber" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Parent project number where resource is present. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>Output only. Compliance violation remediation (id: GoogleCloudAssuredworkloadsV1ViolationRemediation)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations.</td>
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
<tr>
    <td><CopyableCode code="violationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the violation</td>
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
    <td>Output only. Immutable. Name of the Violation. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/workloads/&#123;workload_id&#125;/violations/&#123;violations_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged" /></td>
    <td><code>boolean</code></td>
    <td>A boolean that indicates if the violation is acknowledged</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgementTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedOrgPolicyViolationId" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="auditLogLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query=&#123;logName&#125;&#123;protoPayload.resourceName&#125;&#123;timeRange&#125;&#123;folder&#125;</td>
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
    <td><CopyableCode code="exceptionAuditLogLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query=&#123;logName&#125;&#123;protoPayload.resourceName&#125;&#123;protoPayload.methodName&#125;&#123;timeRange&#125;&#123;organization&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="exceptionContexts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all the exception detail added for the violation.</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantOrgPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125; folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125; organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="orgPolicyConstraint" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.</td>
</tr>
<tr>
    <td><CopyableCode code="parentProjectNumber" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Parent project number where resource is present. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>Output only. Compliance violation remediation (id: GoogleCloudAssuredworkloadsV1ViolationRemediation)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations.</td>
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
<tr>
    <td><CopyableCode code="violationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the violation</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a>, <a href="#parameter-violationsId"><code>violationsId</code></a></td>
    <td></td>
    <td>Retrieves Assured Workload Violation based on ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td><a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/&#123;org_id&#125;/locations/&#123;location&#125;/workloads/-`</td>
</tr>
<tr>
    <td><a href="#acknowledge"><CopyableCode code="acknowledge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a>, <a href="#parameter-violationsId"><code>violationsId</code></a></td>
    <td></td>
    <td>Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.</td>
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

Retrieves Assured Workload Violation based on ID.

```sql
SELECT
name,
acknowledged,
acknowledgementTime,
associatedOrgPolicyViolationId,
auditLogLink,
beginTime,
category,
description,
exceptionAuditLogLink,
exceptionContexts,
nonCompliantOrgPolicy,
orgPolicyConstraint,
parentProjectNumber,
remediation,
resolveTime,
resourceName,
resourceType,
state,
updateTime,
violationType
FROM google.assuredworkloads.violations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required
AND violationsId = '{{ violationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/&#123;org_id&#125;/locations/&#123;location&#125;/workloads/-`

```sql
SELECT
name,
acknowledged,
acknowledgementTime,
associatedOrgPolicyViolationId,
auditLogLink,
beginTime,
category,
description,
exceptionAuditLogLink,
exceptionContexts,
nonCompliantOrgPolicy,
orgPolicyConstraint,
parentProjectNumber,
remediation,
resolveTime,
resourceName,
resourceType,
state,
updateTime,
violationType
FROM google.assuredworkloads.violations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required
AND interval.startTime = '{{ interval.startTime }}'
AND interval.endTime = '{{ interval.endTime }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="acknowledge"
    values={[
        { label: 'acknowledge', value: 'acknowledge' }
    ]}
>
<TabItem value="acknowledge">

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

```sql
EXEC google.assuredworkloads.violations.acknowledge 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required, 
@violationsId='{{ violationsId }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"nonCompliantOrgPolicy": "{{ nonCompliantOrgPolicy }}", 
"acknowledgeType": "{{ acknowledgeType }}"
}';
```
</TabItem>
</Tabs>
