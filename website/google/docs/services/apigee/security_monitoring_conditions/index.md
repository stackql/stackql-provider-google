--- 
title: security_monitoring_conditions
hide_title: false
hide_table_of_contents: false
keywords:
  - security_monitoring_conditions
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

Creates, updates, deletes, gets or lists a <code>security_monitoring_conditions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_monitoring_conditions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_monitoring_conditions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_security_monitoring_conditions_get"
    values={[
        { label: 'organizations_security_monitoring_conditions_get', value: 'organizations_security_monitoring_conditions_get' },
        { label: 'organizations_security_monitoring_conditions_list', value: 'organizations_security_monitoring_conditions_list' }
    ]}
>
<TabItem value="organizations_security_monitoring_conditions_get">

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
    <td>Identifier. Name of the security monitoring condition resource. Format: organizations/&#123;org&#125;/securityMonitoringConditions/&#123;security_monitoring_condition&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security monitoring condition creation.</td>
</tr>
<tr>
    <td><CopyableCode code="include" /></td>
    <td><code>object</code></td>
    <td>Include only these resources. (id: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray)</td>
</tr>
<tr>
    <td><CopyableCode code="includeAllResources" /></td>
    <td><code>object</code></td>
    <td>Include all resources under the scope. (id: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestIncludeAll)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Required. ID of security profile of the security monitoring condition.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Required. Scope of the security monitoring condition. For Apigee, the environment is the scope of the resources.</td>
</tr>
<tr>
    <td><CopyableCode code="totalDeployedResources" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of deployed resources within scope.</td>
</tr>
<tr>
    <td><CopyableCode code="totalMonitoredResources" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of monitored resources within this condition.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security monitoring condition update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_monitoring_conditions_list">

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
    <td>Identifier. Name of the security monitoring condition resource. Format: organizations/&#123;org&#125;/securityMonitoringConditions/&#123;security_monitoring_condition&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security monitoring condition creation.</td>
</tr>
<tr>
    <td><CopyableCode code="include" /></td>
    <td><code>object</code></td>
    <td>Include only these resources. (id: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray)</td>
</tr>
<tr>
    <td><CopyableCode code="includeAllResources" /></td>
    <td><code>object</code></td>
    <td>Include all resources under the scope. (id: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestIncludeAll)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Required. ID of security profile of the security monitoring condition.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Required. Scope of the security monitoring condition. For Apigee, the environment is the scope of the resources.</td>
</tr>
<tr>
    <td><CopyableCode code="totalDeployedResources" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of deployed resources within scope.</td>
</tr>
<tr>
    <td><CopyableCode code="totalMonitoredResources" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of monitored resources within this condition.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security monitoring condition update.</td>
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
    <td><a href="#organizations_security_monitoring_conditions_get"><CopyableCode code="organizations_security_monitoring_conditions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityMonitoringConditionsId"><code>securityMonitoringConditionsId</code></a></td>
    <td></td>
    <td>Get a security monitoring condition.</td>
</tr>
<tr>
    <td><a href="#organizations_security_monitoring_conditions_list"><CopyableCode code="organizations_security_monitoring_conditions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List security monitoring conditions.</td>
</tr>
<tr>
    <td><a href="#organizations_security_monitoring_conditions_create"><CopyableCode code="organizations_security_monitoring_conditions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-securityMonitoringConditionId"><code>securityMonitoringConditionId</code></a></td>
    <td>Create a security monitoring condition.</td>
</tr>
<tr>
    <td><a href="#organizations_security_monitoring_conditions_patch"><CopyableCode code="organizations_security_monitoring_conditions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityMonitoringConditionsId"><code>securityMonitoringConditionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a security monitoring condition.</td>
</tr>
<tr>
    <td><a href="#organizations_security_monitoring_conditions_delete"><CopyableCode code="organizations_security_monitoring_conditions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityMonitoringConditionsId"><code>securityMonitoringConditionsId</code></a></td>
    <td></td>
    <td>Delete a security monitoring condition.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityMonitoringConditionsId">
    <td><CopyableCode code="securityMonitoringConditionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-securityMonitoringConditionId">
    <td><CopyableCode code="securityMonitoringConditionId" /></td>
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
    defaultValue="organizations_security_monitoring_conditions_get"
    values={[
        { label: 'organizations_security_monitoring_conditions_get', value: 'organizations_security_monitoring_conditions_get' },
        { label: 'organizations_security_monitoring_conditions_list', value: 'organizations_security_monitoring_conditions_list' }
    ]}
>
<TabItem value="organizations_security_monitoring_conditions_get">

Get a security monitoring condition.

```sql
SELECT
name,
createTime,
include,
includeAllResources,
profile,
scope,
totalDeployedResources,
totalMonitoredResources,
updateTime
FROM google.apigee.security_monitoring_conditions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND securityMonitoringConditionsId = '{{ securityMonitoringConditionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_security_monitoring_conditions_list">

List security monitoring conditions.

```sql
SELECT
name,
createTime,
include,
includeAllResources,
profile,
scope,
totalDeployedResources,
totalMonitoredResources,
updateTime
FROM google.apigee.security_monitoring_conditions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_security_monitoring_conditions_create"
    values={[
        { label: 'organizations_security_monitoring_conditions_create', value: 'organizations_security_monitoring_conditions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_security_monitoring_conditions_create">

Create a security monitoring condition.

```sql
INSERT INTO google.apigee.security_monitoring_conditions (
data__name,
data__profile,
data__scope,
data__includeAllResources,
data__include,
organizationsId,
securityMonitoringConditionId
)
SELECT 
'{{ name }}',
'{{ profile }}',
'{{ scope }}',
'{{ includeAllResources }}',
'{{ include }}',
'{{ organizationsId }}',
'{{ securityMonitoringConditionId }}'
RETURNING
name,
createTime,
include,
includeAllResources,
profile,
scope,
totalDeployedResources,
totalMonitoredResources,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_monitoring_conditions
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the security_monitoring_conditions resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the security monitoring condition resource. Format: organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}
        
    - name: profile
      value: string
      description: >
        Required. ID of security profile of the security monitoring condition.
        
    - name: scope
      value: string
      description: >
        Required. Scope of the security monitoring condition. For Apigee, the environment is the scope of the resources.
        
    - name: includeAllResources
      value: object
      description: >
        Include all resources under the scope.
        
    - name: include
      value: object
      description: >
        Include only these resources.
        
    - name: securityMonitoringConditionId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_security_monitoring_conditions_patch"
    values={[
        { label: 'organizations_security_monitoring_conditions_patch', value: 'organizations_security_monitoring_conditions_patch' }
    ]}
>
<TabItem value="organizations_security_monitoring_conditions_patch">

Update a security monitoring condition.

```sql
UPDATE google.apigee.security_monitoring_conditions
SET 
data__name = '{{ name }}',
data__profile = '{{ profile }}',
data__scope = '{{ scope }}',
data__includeAllResources = '{{ includeAllResources }}',
data__include = '{{ include }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND securityMonitoringConditionsId = '{{ securityMonitoringConditionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
include,
includeAllResources,
profile,
scope,
totalDeployedResources,
totalMonitoredResources,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_security_monitoring_conditions_delete"
    values={[
        { label: 'organizations_security_monitoring_conditions_delete', value: 'organizations_security_monitoring_conditions_delete' }
    ]}
>
<TabItem value="organizations_security_monitoring_conditions_delete">

Delete a security monitoring condition.

```sql
DELETE FROM google.apigee.security_monitoring_conditions
WHERE organizationsId = '{{ organizationsId }}' --required
AND securityMonitoringConditionsId = '{{ securityMonitoringConditionsId }}' --required;
```
</TabItem>
</Tabs>
