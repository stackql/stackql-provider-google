--- 
title: data_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - data_policies
  - bigquerydatapolicy
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

Creates, updates, deletes, gets or lists a <code>data_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatapolicy.data_policies" /></td></tr>
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
    <td>Output only. Resource name of this data policy, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataPolicies/&#123;data_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataMaskingPolicy" /></td>
    <td><code>object</code></td>
    <td>The data masking policy that specifies the data masking rule to use. (id: DataMaskingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyId" /></td>
    <td><code>string</code></td>
    <td>User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as &#123;data_policy_id&#125; in part of the resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyType" /></td>
    <td><code>string</code></td>
    <td>Required. Data policy type. Type of data policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTag" /></td>
    <td><code>string</code></td>
    <td>Policy tag resource name, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/taxonomies/&#123;taxonomy_id&#125;/policyTags/&#123;policyTag_id&#125;`.</td>
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
    <td>Output only. Resource name of this data policy, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataPolicies/&#123;data_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataMaskingPolicy" /></td>
    <td><code>object</code></td>
    <td>The data masking policy that specifies the data masking rule to use. (id: DataMaskingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyId" /></td>
    <td><code>string</code></td>
    <td>User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as &#123;data_policy_id&#125; in part of the resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyType" /></td>
    <td><code>string</code></td>
    <td>Required. Data policy type. Type of data policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTag" /></td>
    <td><code>string</code></td>
    <td>Policy tag resource name, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/taxonomies/&#123;taxonomy_id&#125;/policyTags/&#123;policyTag_id&#125;`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Gets the data policy specified by its resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List all of the data policies in the specified parent project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new data policy under a project with the given `dataPolicyId` (used as the display name), policy tag, and data policy type.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the data policy specified by its resource name.</td>
</tr>
<tr>
    <td><a href="#rename"><CopyableCode code="rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Renames the id (display name) of the specified data policy.</td>
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
<tr id="parameter-dataPoliciesId">
    <td><CopyableCode code="dataPoliciesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Gets the data policy specified by its resource name.

```sql
SELECT
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
policyTag
FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataPoliciesId = '{{ dataPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List all of the data policies in the specified parent project.

```sql
SELECT
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
policyTag
FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new data policy under a project with the given `dataPolicyId` (used as the display name), policy tag, and data policy type.

```sql
INSERT INTO google.bigquerydatapolicy.data_policies (
data__policyTag,
data__dataMaskingPolicy,
data__dataPolicyType,
data__dataPolicyId,
projectsId,
locationsId
)
SELECT 
'{{ policyTag }}',
'{{ dataMaskingPolicy }}',
'{{ dataPolicyType }}',
'{{ dataPolicyId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
policyTag
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: data_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_policies resource.
    - name: policyTag
      value: string
      description: >
        Policy tag resource name, in the format of `projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{policyTag_id}`.
        
    - name: dataMaskingPolicy
      value: object
      description: >
        The data masking policy that specifies the data masking rule to use.
        
    - name: dataPolicyType
      value: string
      description: >
        Required. Data policy type. Type of data policy.
        
      valid_values: ['DATA_POLICY_TYPE_UNSPECIFIED', 'COLUMN_LEVEL_SECURITY_POLICY', 'DATA_MASKING_POLICY']
    - name: dataPolicyId
      value: string
      description: >
        User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {data_policy_id} in part of the resource name.
        
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

Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.

```sql
UPDATE google.bigquerydatapolicy.data_policies
SET 
data__policyTag = '{{ policyTag }}',
data__dataMaskingPolicy = '{{ dataMaskingPolicy }}',
data__dataPolicyType = '{{ dataPolicyType }}',
data__dataPolicyId = '{{ dataPolicyId }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataPoliciesId = '{{ dataPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
policyTag;
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

Deletes the data policy specified by its resource name.

```sql
DELETE FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataPoliciesId = '{{ dataPoliciesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rename"
    values={[
        { label: 'rename', value: 'rename' }
    ]}
>
<TabItem value="rename">

Renames the id (display name) of the specified data policy.

```sql
EXEC google.bigquerydatapolicy.data_policies.rename 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataPoliciesId='{{ dataPoliciesId }}' --required 
@@json=
'{
"newDataPolicyId": "{{ newDataPolicyId }}"
}';
```
</TabItem>
</Tabs>
