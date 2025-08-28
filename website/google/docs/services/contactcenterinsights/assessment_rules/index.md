--- 
title: assessment_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_rules
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists an <code>assessment_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assessment_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.assessment_rules" /></td></tr>
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
    <td>Identifier. The resource name of the assessment rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/assessmentRules/&#123;assessment_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true, apply this rule to conversations. Otherwise, this rule is inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this assessment rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of the assessment rule.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleRule" /></td>
    <td><code>object</code></td>
    <td>The sample rule for the assessment rule. (id: GoogleCloudContactcenterinsightsV1SampleRule)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleInfo" /></td>
    <td><code>object</code></td>
    <td>Schedule info for the assessment rule. (id: GoogleCloudContactcenterinsightsV1ScheduleInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which this assessment rule was updated.</td>
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
    <td>Identifier. The resource name of the assessment rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/assessmentRules/&#123;assessment_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true, apply this rule to conversations. Otherwise, this rule is inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this assessment rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of the assessment rule.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleRule" /></td>
    <td><code>object</code></td>
    <td>The sample rule for the assessment rule. (id: GoogleCloudContactcenterinsightsV1SampleRule)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleInfo" /></td>
    <td><code>object</code></td>
    <td>Schedule info for the assessment rule. (id: GoogleCloudContactcenterinsightsV1ScheduleInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which this assessment rule was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assessmentRulesId"><code>assessmentRulesId</code></a></td>
    <td></td>
    <td>Get an assessment rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists assessment rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-assessmentRuleId"><code>assessmentRuleId</code></a></td>
    <td>Creates an assessment rule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assessmentRulesId"><code>assessmentRulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an assessment rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assessmentRulesId"><code>assessmentRulesId</code></a></td>
    <td></td>
    <td>Deletes an assessment rule.</td>
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
<tr id="parameter-assessmentRulesId">
    <td><CopyableCode code="assessmentRulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-assessmentRuleId">
    <td><CopyableCode code="assessmentRuleId" /></td>
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

Get an assessment rule.

```sql
SELECT
name,
active,
createTime,
displayName,
sampleRule,
scheduleInfo,
updateTime
FROM google.contactcenterinsights.assessment_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND assessmentRulesId = '{{ assessmentRulesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists assessment rules.

```sql
SELECT
name,
active,
createTime,
displayName,
sampleRule,
scheduleInfo,
updateTime
FROM google.contactcenterinsights.assessment_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates an assessment rule.

```sql
INSERT INTO google.contactcenterinsights.assessment_rules (
data__name,
data__active,
data__displayName,
data__sampleRule,
data__scheduleInfo,
projectsId,
locationsId,
assessmentRuleId
)
SELECT 
'{{ name }}',
{{ active }},
'{{ displayName }}',
'{{ sampleRule }}',
'{{ scheduleInfo }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ assessmentRuleId }}'
RETURNING
name,
active,
createTime,
displayName,
sampleRule,
scheduleInfo,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: assessment_rules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the assessment_rules resource.
    - name: locationsId
      value: string
      description: Required parameter for the assessment_rules resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the assessment rule. Format: projects/{project}/locations/{location}/assessmentRules/{assessment_rule}
        
    - name: active
      value: boolean
      description: >
        If true, apply this rule to conversations. Otherwise, this rule is inactive.
        
    - name: displayName
      value: string
      description: >
        Display Name of the assessment rule.
        
    - name: sampleRule
      value: object
      description: >
        The sample rule for the assessment rule.
        
    - name: scheduleInfo
      value: object
      description: >
        Schedule info for the assessment rule.
        
    - name: assessmentRuleId
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

Updates an assessment rule.

```sql
UPDATE google.contactcenterinsights.assessment_rules
SET 
data__name = '{{ name }}',
data__active = {{ active }},
data__displayName = '{{ displayName }}',
data__sampleRule = '{{ sampleRule }}',
data__scheduleInfo = '{{ scheduleInfo }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND assessmentRulesId = '{{ assessmentRulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
active,
createTime,
displayName,
sampleRule,
scheduleInfo,
updateTime;
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

Deletes an assessment rule.

```sql
DELETE FROM google.contactcenterinsights.assessment_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND assessmentRulesId = '{{ assessmentRulesId }}' --required;
```
</TabItem>
</Tabs>
