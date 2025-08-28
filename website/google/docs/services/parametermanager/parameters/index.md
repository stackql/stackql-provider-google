--- 
title: parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters
  - parametermanager
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

Creates, updates, deletes, gets or lists a <code>parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>parameters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.parametermanager.parameters" /></td></tr>
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
    <td>Identifier. [Output only] The resource name of the Parameter in the format `projects/*/locations/*/parameters/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the format of a Parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer managed encryption key (CMEK) to use for encrypting the Parameter Versions. If not set, the default Google-managed encryption key will be used. Cloud KMS CryptoKeys must reside in the same location as the Parameter. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output-only] policy member strings of a Google Cloud resource. (id: ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
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
    <td>Identifier. [Output only] The resource name of the Parameter in the format `projects/*/locations/*/parameters/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the format of a Parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer managed encryption key (CMEK) to use for encrypting the Parameter Versions. If not set, the default Google-managed encryption key will be used. Cloud KMS CryptoKeys must reside in the same location as the Parameter. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output-only] policy member strings of a Google Cloud resource. (id: ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-parametersId"><code>parametersId</code></a></td>
    <td></td>
    <td>Gets details of a single Parameter.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Parameters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-parameterId"><code>parameterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Parameter in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-parametersId"><code>parametersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a single Parameter.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-parametersId"><code>parametersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Parameter.</td>
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
<tr id="parameter-parametersId">
    <td><CopyableCode code="parametersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-parameterId">
    <td><CopyableCode code="parameterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets details of a single Parameter.

```sql
SELECT
name,
createTime,
format,
kmsKey,
labels,
policyMember,
updateTime
FROM google.parametermanager.parameters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND parametersId = '{{ parametersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Parameters in a given project and location.

```sql
SELECT
name,
createTime,
format,
kmsKey,
labels,
policyMember,
updateTime
FROM google.parametermanager.parameters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new Parameter in a given project and location.

```sql
INSERT INTO google.parametermanager.parameters (
data__name,
data__labels,
data__format,
data__kmsKey,
projectsId,
locationsId,
parameterId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ format }}',
'{{ kmsKey }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ parameterId }}',
'{{ requestId }}'
RETURNING
name,
createTime,
format,
kmsKey,
labels,
policyMember,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: parameters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the parameters resource.
    - name: locationsId
      value: string
      description: Required parameter for the parameters resource.
    - name: name
      value: string
      description: >
        Identifier. [Output only] The resource name of the Parameter in the format `projects/*/locations/*/parameters/*`.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: format
      value: string
      description: >
        Optional. Specifies the format of a Parameter.
        
      valid_values: ['PARAMETER_FORMAT_UNSPECIFIED', 'UNFORMATTED', 'YAML', 'JSON']
    - name: kmsKey
      value: string
      description: >
        Optional. Customer managed encryption key (CMEK) to use for encrypting the Parameter Versions. If not set, the default Google-managed encryption key will be used. Cloud KMS CryptoKeys must reside in the same location as the Parameter. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.
        
    - name: parameterId
      value: string
    - name: requestId
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

Updates a single Parameter.

```sql
UPDATE google.parametermanager.parameters
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__format = '{{ format }}',
data__kmsKey = '{{ kmsKey }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND parametersId = '{{ parametersId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
createTime,
format,
kmsKey,
labels,
policyMember,
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

Deletes a single Parameter.

```sql
DELETE FROM google.parametermanager.parameters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND parametersId = '{{ parametersId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
