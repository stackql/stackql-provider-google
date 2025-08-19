--- 
title: issues
hide_title: false
hide_table_of_contents: false
keywords:
  - issues
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

Creates, updates, deletes, gets or lists an <code>issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>issues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.issues" /></td></tr>
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

The issue resource.

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
    <td>Immutable. The resource name of the issue. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/issueModels/&#123;issue_model&#125;/issues/&#123;issue&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this issue was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayDescription" /></td>
    <td><code>string</code></td>
    <td>Representative description of the issue.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The representative name for the issue.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleUtterances" /></td>
    <td><code>array</code></td>
    <td>Output only. Resource names of the sample representative utterances that match to this issue.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time that this issue was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response of listing issues.

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
    <td><CopyableCode code="issues" /></td>
    <td><code>array</code></td>
    <td>The issues that match the request.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a>, <a href="#parameter-issuesId"><code>issuesId</code></a></td>
    <td></td>
    <td>Gets an issue.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Lists issues.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Creates an issue.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a>, <a href="#parameter-issuesId"><code>issuesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an issue.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a>, <a href="#parameter-issuesId"><code>issuesId</code></a></td>
    <td></td>
    <td>Deletes an issue.</td>
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
<tr id="parameter-issueModelsId">
    <td><CopyableCode code="issueModelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-issuesId">
    <td><CopyableCode code="issuesId" /></td>
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

Gets an issue.

```sql
SELECT
name,
createTime,
displayDescription,
displayName,
sampleUtterances,
updateTime
FROM google.contactcenterinsights.issues
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND issueModelsId = '{{ issueModelsId }}' -- required
AND issuesId = '{{ issuesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists issues.

```sql
SELECT
issues
FROM google.contactcenterinsights.issues
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND issueModelsId = '{{ issueModelsId }}' -- required;
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

Creates an issue.

```sql
INSERT INTO google.contactcenterinsights.issues (
data__name,
data__displayName,
data__displayDescription,
projectsId,
locationsId,
issueModelsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ displayDescription }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ issueModelsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: issues
  props:
    - name: projectsId
      value: string
      description: Required parameter for the issues resource.
    - name: locationsId
      value: string
      description: Required parameter for the issues resource.
    - name: issueModelsId
      value: string
      description: Required parameter for the issues resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}
        
    - name: displayName
      value: string
      description: >
        The representative name for the issue.
        
    - name: displayDescription
      value: string
      description: >
        Representative description of the issue.
        
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

Updates an issue.

```sql
UPDATE google.contactcenterinsights.issues
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__displayDescription = '{{ displayDescription }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND issueModelsId = '{{ issueModelsId }}' --required
AND issuesId = '{{ issuesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayDescription,
displayName,
sampleUtterances,
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

Deletes an issue.

```sql
DELETE FROM google.contactcenterinsights.issues
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND issueModelsId = '{{ issueModelsId }}' --required
AND issuesId = '{{ issuesId }}' --required;
```
</TabItem>
</Tabs>
