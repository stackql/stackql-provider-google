--- 
title: analysis_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_rules
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

Creates, updates, deletes, gets or lists an <code>analysis_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>analysis_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.analysis_rules" /></td></tr>
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
    <td>Identifier. The resource name of the analysis rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/analysisRules/&#123;analysis_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.</td>
</tr>
<tr>
    <td><CopyableCode code="analysisPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. For example, 0.1 means 10%. Conversations are sampled in a determenestic way. The original runtime_percentage & upload percentage will be replaced by defining filters on the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatorSelector" /></td>
    <td><code>object</code></td>
    <td>Selector of annotators to run and the phrase matchers to use for conversations that matches the conversation_filter. If not specified, NO annotators will be run. (id: GoogleCloudContactcenterinsightsV1AnnotatorSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="conversationFilter" /></td>
    <td><code>string</code></td>
    <td>Filter for the conversations that should apply this analysis rule. An empty filter means this analysis rule applies to all conversations. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this analysis rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of the analysis rule.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which this analysis rule was updated.</td>
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
    <td>Identifier. The resource name of the analysis rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/analysisRules/&#123;analysis_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.</td>
</tr>
<tr>
    <td><CopyableCode code="analysisPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. For example, 0.1 means 10%. Conversations are sampled in a determenestic way. The original runtime_percentage & upload percentage will be replaced by defining filters on the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatorSelector" /></td>
    <td><code>object</code></td>
    <td>Selector of annotators to run and the phrase matchers to use for conversations that matches the conversation_filter. If not specified, NO annotators will be run. (id: GoogleCloudContactcenterinsightsV1AnnotatorSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="conversationFilter" /></td>
    <td><code>string</code></td>
    <td>Filter for the conversations that should apply this analysis rule. An empty filter means this analysis rule applies to all conversations. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this analysis rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of the analysis rule.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which this analysis rule was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-analysisRulesId"><code>analysisRulesId</code></a></td>
    <td></td>
    <td>Get a analysis rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists analysis rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a analysis rule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-analysisRulesId"><code>analysisRulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a analysis rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-analysisRulesId"><code>analysisRulesId</code></a></td>
    <td></td>
    <td>Deletes a analysis rule.</td>
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
<tr id="parameter-analysisRulesId">
    <td><CopyableCode code="analysisRulesId" /></td>
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

Get a analysis rule.

```sql
SELECT
name,
active,
analysisPercentage,
annotatorSelector,
conversationFilter,
createTime,
displayName,
updateTime
FROM google.contactcenterinsights.analysis_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND analysisRulesId = '{{ analysisRulesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists analysis rules.

```sql
SELECT
name,
active,
analysisPercentage,
annotatorSelector,
conversationFilter,
createTime,
displayName,
updateTime
FROM google.contactcenterinsights.analysis_rules
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

Creates a analysis rule.

```sql
INSERT INTO google.contactcenterinsights.analysis_rules (
data__name,
data__displayName,
data__conversationFilter,
data__annotatorSelector,
data__analysisPercentage,
data__active,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ conversationFilter }}',
'{{ annotatorSelector }}',
{{ analysisPercentage }},
{{ active }},
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
active,
analysisPercentage,
annotatorSelector,
conversationFilter,
createTime,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: analysis_rules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the analysis_rules resource.
    - name: locationsId
      value: string
      description: Required parameter for the analysis_rules resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the analysis rule. Format: projects/{project}/locations/{location}/analysisRules/{analysis_rule}
        
    - name: displayName
      value: string
      description: >
        Display Name of the analysis rule.
        
    - name: conversationFilter
      value: string
      description: >
        Filter for the conversations that should apply this analysis rule. An empty filter means this analysis rule applies to all conversations. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.
        
    - name: annotatorSelector
      value: object
      description: >
        Selector of annotators to run and the phrase matchers to use for conversations that matches the conversation_filter. If not specified, NO annotators will be run.
        
    - name: analysisPercentage
      value: number
      description: >
        Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. For example, 0.1 means 10%. Conversations are sampled in a determenestic way. The original runtime_percentage & upload percentage will be replaced by defining filters on the conversation.
        
    - name: active
      value: boolean
      description: >
        If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.
        
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

Updates a analysis rule.

```sql
UPDATE google.contactcenterinsights.analysis_rules
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__conversationFilter = '{{ conversationFilter }}',
data__annotatorSelector = '{{ annotatorSelector }}',
data__analysisPercentage = {{ analysisPercentage }},
data__active = {{ active }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND analysisRulesId = '{{ analysisRulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
active,
analysisPercentage,
annotatorSelector,
conversationFilter,
createTime,
displayName,
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

Deletes a analysis rule.

```sql
DELETE FROM google.contactcenterinsights.analysis_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND analysisRulesId = '{{ analysisRulesId }}' --required;
```
</TabItem>
</Tabs>
