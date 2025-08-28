--- 
title: branch_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - branch_rules
  - securesourcemanager
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

Creates, updates, deletes, gets or lists a <code>branch_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>branch_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securesourcemanager.branch_rules" /></td></tr>
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
    <td>Optional. A unique identifier for a BranchRule. The name should be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/repositories/&#123;repository&#125;/branchRules/&#123;branch_rule&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowStaleReviews" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if allow stale reviews or approvals before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the branch rule is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="includePattern" /></td>
    <td><code>string</code></td>
    <td>Optional. The pattern of the branch that can match to this BranchRule. Specified as regex. .* for all branches. Examples: main, (main|release.*). Current MVP phase only support `.*` for wildcard.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumApprovalsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The minimum number of approvals required for the branch rule to be matched.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumReviewsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The minimum number of reviews required for the branch rule to be matched.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCommentsResolved" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if require comments resolved before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="requireLinearHistory" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if require linear history before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="requirePullRequest" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the branch rule requires a pull request or not.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredStatusChecks" /></td>
    <td><code>array</code></td>
    <td>Optional. List of required status checks before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
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
    <td>Optional. A unique identifier for a BranchRule. The name should be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/repositories/&#123;repository&#125;/branchRules/&#123;branch_rule&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowStaleReviews" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if allow stale reviews or approvals before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the branch rule is disabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="includePattern" /></td>
    <td><code>string</code></td>
    <td>Optional. The pattern of the branch that can match to this BranchRule. Specified as regex. .* for all branches. Examples: main, (main|release.*). Current MVP phase only support `.*` for wildcard.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumApprovalsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The minimum number of approvals required for the branch rule to be matched.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumReviewsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The minimum number of reviews required for the branch rule to be matched.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCommentsResolved" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if require comments resolved before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="requireLinearHistory" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if require linear history before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="requirePullRequest" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines if the branch rule requires a pull request or not.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredStatusChecks" /></td>
    <td><code>array</code></td>
    <td>Optional. List of required status checks before merging to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-branchRulesId"><code>branchRulesId</code></a></td>
    <td></td>
    <td>GetBranchRule gets a branch rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListBranchRules lists branch rules in a given repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-branchRuleId"><code>branchRuleId</code></a></td>
    <td>CreateBranchRule creates a branch rule in a given repository.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-branchRulesId"><code>branchRulesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>UpdateBranchRule updates a branch rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-branchRulesId"><code>branchRulesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>DeleteBranchRule deletes a branch rule.</td>
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
<tr id="parameter-branchRulesId">
    <td><CopyableCode code="branchRulesId" /></td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-branchRuleId">
    <td><CopyableCode code="branchRuleId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

GetBranchRule gets a branch rule.

```sql
SELECT
name,
allowStaleReviews,
annotations,
createTime,
disabled,
etag,
includePattern,
minimumApprovalsCount,
minimumReviewsCount,
requireCommentsResolved,
requireLinearHistory,
requirePullRequest,
requiredStatusChecks,
uid,
updateTime
FROM google.securesourcemanager.branch_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND branchRulesId = '{{ branchRulesId }}' -- required;
```
</TabItem>
<TabItem value="list">

ListBranchRules lists branch rules in a given repository.

```sql
SELECT
name,
allowStaleReviews,
annotations,
createTime,
disabled,
etag,
includePattern,
minimumApprovalsCount,
minimumReviewsCount,
requireCommentsResolved,
requireLinearHistory,
requirePullRequest,
requiredStatusChecks,
uid,
updateTime
FROM google.securesourcemanager.branch_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
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

CreateBranchRule creates a branch rule in a given repository.

```sql
INSERT INTO google.securesourcemanager.branch_rules (
data__name,
data__annotations,
data__etag,
data__includePattern,
data__disabled,
data__requirePullRequest,
data__minimumReviewsCount,
data__minimumApprovalsCount,
data__requireCommentsResolved,
data__allowStaleReviews,
data__requireLinearHistory,
data__requiredStatusChecks,
projectsId,
locationsId,
repositoriesId,
branchRuleId
)
SELECT 
'{{ name }}',
'{{ annotations }}',
'{{ etag }}',
'{{ includePattern }}',
{{ disabled }},
{{ requirePullRequest }},
{{ minimumReviewsCount }},
{{ minimumApprovalsCount }},
{{ requireCommentsResolved }},
{{ allowStaleReviews }},
{{ requireLinearHistory }},
'{{ requiredStatusChecks }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}',
'{{ branchRuleId }}'
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
- name: branch_rules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the branch_rules resource.
    - name: locationsId
      value: string
      description: Required parameter for the branch_rules resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the branch_rules resource.
    - name: name
      value: string
      description: >
        Optional. A unique identifier for a BranchRule. The name should be of the format: `projects/{project}/locations/{location}/repositories/{repository}/branchRules/{branch_rule}`
        
    - name: annotations
      value: object
      description: >
        Optional. User annotations. These attributes can only be set and used by the user. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
        
    - name: etag
      value: string
      description: >
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: includePattern
      value: string
      description: >
        Optional. The pattern of the branch that can match to this BranchRule. Specified as regex. .* for all branches. Examples: main, (main|release.*). Current MVP phase only support `.*` for wildcard.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Determines if the branch rule is disabled or not.
        
    - name: requirePullRequest
      value: boolean
      description: >
        Optional. Determines if the branch rule requires a pull request or not.
        
    - name: minimumReviewsCount
      value: integer
      description: >
        Optional. The minimum number of reviews required for the branch rule to be matched.
        
    - name: minimumApprovalsCount
      value: integer
      description: >
        Optional. The minimum number of approvals required for the branch rule to be matched.
        
    - name: requireCommentsResolved
      value: boolean
      description: >
        Optional. Determines if require comments resolved before merging to the branch.
        
    - name: allowStaleReviews
      value: boolean
      description: >
        Optional. Determines if allow stale reviews or approvals before merging to the branch.
        
    - name: requireLinearHistory
      value: boolean
      description: >
        Optional. Determines if require linear history before merging to the branch.
        
    - name: requiredStatusChecks
      value: array
      description: >
        Optional. List of required status checks before merging to the branch.
        
    - name: branchRuleId
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

UpdateBranchRule updates a branch rule.

```sql
UPDATE google.securesourcemanager.branch_rules
SET 
data__name = '{{ name }}',
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}',
data__includePattern = '{{ includePattern }}',
data__disabled = {{ disabled }},
data__requirePullRequest = {{ requirePullRequest }},
data__minimumReviewsCount = {{ minimumReviewsCount }},
data__minimumApprovalsCount = {{ minimumApprovalsCount }},
data__requireCommentsResolved = {{ requireCommentsResolved }},
data__allowStaleReviews = {{ allowStaleReviews }},
data__requireLinearHistory = {{ requireLinearHistory }},
data__requiredStatusChecks = '{{ requiredStatusChecks }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND branchRulesId = '{{ branchRulesId }}' --required
AND validateOnly = {{ validateOnly}}
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

DeleteBranchRule deletes a branch rule.

```sql
DELETE FROM google.securesourcemanager.branch_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND branchRulesId = '{{ branchRulesId }}' --required
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
</Tabs>
