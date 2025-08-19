--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - binaryauthorization
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.binaryauthorization.policies" /></td></tr>
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

A Binary Authorization platform policy for deployments on various platforms.

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
    <td>Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/*/platforms/*/policies/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description comment about the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to prevent updating the policy when another request has updated it since it was retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="gkePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. GKE platform-specific policy. (id: GkePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for PlatformPolicyManagementService.ListPlatformPolicies.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results. Pass this value in the ListPlatformPoliciesRequest.page_token field in the subsequent call to the `ListPlatformPolicies` method to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="platformPolicies" /></td>
    <td><code>array</code></td>
    <td>The list of platform policies.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-platformsId"><code>platformsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-platformsId"><code>platformsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-platformsId"><code>platformsId</code></a></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a></td>
    <td>Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.</td>
</tr>
<tr>
    <td><a href="#replace_platform_policy"><CopyableCode code="replace_platform_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-platformsId"><code>platformsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-platformsId"><code>platformsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.</td>
</tr>
<tr>
    <td><a href="#evaluate"><CopyableCode code="evaluate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.</td>
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
<tr id="parameter-platformsId">
    <td><CopyableCode code="platformsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policiesId">
    <td><CopyableCode code="policiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-policyId">
    <td><CopyableCode code="policyId" /></td>
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

Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

```sql
SELECT
name,
description,
etag,
gkePolicy,
updateTime
FROM google.binaryauthorization.policies
WHERE projectsId = '{{ projectsId }}' -- required
AND platformsId = '{{ platformsId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.

```sql
SELECT
nextPageToken,
platformPolicies
FROM google.binaryauthorization.policies
WHERE projectsId = '{{ projectsId }}' -- required
AND platformsId = '{{ platformsId }}' -- required
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

Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.

```sql
INSERT INTO google.binaryauthorization.policies (
data__description,
data__gkePolicy,
data__etag,
projectsId,
platformsId,
policyId
)
SELECT 
'{{ description }}',
'{{ gkePolicy }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ platformsId }}',
'{{ policyId }}'
RETURNING
name,
description,
etag,
gkePolicy,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the policies resource.
    - name: platformsId
      value: string
      description: Required parameter for the policies resource.
    - name: description
      value: string
      description: >
        Optional. A description comment about the policy.
        
    - name: gkePolicy
      value: object
      description: >
        Optional. GKE platform-specific policy.
        
    - name: etag
      value: string
      description: >
        Optional. Used to prevent updating the policy when another request has updated it since it was retrieved.
        
    - name: policyId
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_platform_policy"
    values={[
        { label: 'replace_platform_policy', value: 'replace_platform_policy' }
    ]}
>
<TabItem value="replace_platform_policy">

Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

```sql
REPLACE google.binaryauthorization.policies
SET 
data__description = '{{ description }}',
data__gkePolicy = '{{ gkePolicy }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND platformsId = '{{ platformsId }}' --required
AND policiesId = '{{ policiesId }}' --required
RETURNING
name,
description,
etag,
gkePolicy,
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

Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.

```sql
DELETE FROM google.binaryauthorization.policies
WHERE projectsId = '{{ projectsId }}' --required
AND platformsId = '{{ platformsId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evaluate"
    values={[
        { label: 'evaluate', value: 'evaluate' }
    ]}
>
<TabItem value="evaluate">

Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.

```sql
EXEC google.binaryauthorization.policies.evaluate 
@projectsId='{{ projectsId }}' --required, 
@policiesId='{{ policiesId }}' --required 
@@json=
'{
"resource": "{{ resource }}"
}';
```
</TabItem>
</Tabs>
