--- 
title: kms_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - kms_configs
  - netapp
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

Creates, updates, deletes, gets or lists a <code>kms_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>kms_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.kms_configs" /></td></tr>
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
    <td>Identifier. Name of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyName" /></td>
    <td><code>string</code></td>
    <td>Required. Customer managed crypto key resource full name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;key&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="instructions" /></td>
    <td><code>string</code></td>
    <td>Output only. Instructions to provide the access to the customer provided encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. The Service account which will have access to the customer provided encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the KmsConfig.</td>
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
    <td>Identifier. Name of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyName" /></td>
    <td><code>string</code></td>
    <td>Required. Customer managed crypto key resource full name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;key&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="instructions" /></td>
    <td><code>string</code></td>
    <td>Output only. Instructions to provide the access to the customer provided encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. The Service account which will have access to the customer provided encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the KmsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the KmsConfig.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-kmsConfigsId"><code>kmsConfigsId</code></a></td>
    <td></td>
    <td>Returns the description of the specified KMS config by kms_config_id.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns descriptions of all KMS configs owned by the caller.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-kmsConfigId"><code>kmsConfigId</code></a></td>
    <td>Creates a new KMS config.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-kmsConfigsId"><code>kmsConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Kms config properties with the full spec</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-kmsConfigsId"><code>kmsConfigsId</code></a></td>
    <td></td>
    <td>Warning! This operation will permanently delete the Kms config.</td>
</tr>
<tr>
    <td><a href="#encrypt"><CopyableCode code="encrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-kmsConfigsId"><code>kmsConfigsId</code></a></td>
    <td></td>
    <td>Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.</td>
</tr>
<tr>
    <td><a href="#verify"><CopyableCode code="verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-kmsConfigsId"><code>kmsConfigsId</code></a></td>
    <td></td>
    <td>Verifies KMS config reachability.</td>
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
<tr id="parameter-kmsConfigsId">
    <td><CopyableCode code="kmsConfigsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-kmsConfigId">
    <td><CopyableCode code="kmsConfigId" /></td>
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

Returns the description of the specified KMS config by kms_config_id.

```sql
SELECT
name,
createTime,
cryptoKeyName,
description,
instructions,
labels,
serviceAccount,
state,
stateDetails
FROM google.netapp.kms_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND kmsConfigsId = '{{ kmsConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns descriptions of all KMS configs owned by the caller.

```sql
SELECT
name,
createTime,
cryptoKeyName,
description,
instructions,
labels,
serviceAccount,
state,
stateDetails
FROM google.netapp.kms_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new KMS config.

```sql
INSERT INTO google.netapp.kms_configs (
data__name,
data__cryptoKeyName,
data__description,
data__labels,
projectsId,
locationsId,
kmsConfigId
)
SELECT 
'{{ name }}',
'{{ cryptoKeyName }}',
'{{ description }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ kmsConfigId }}'
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
- name: kms_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the kms_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the kms_configs resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the KmsConfig.
        
    - name: cryptoKeyName
      value: string
      description: >
        Required. Customer managed crypto key resource full name. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}.
        
    - name: description
      value: string
      description: >
        Description of the KmsConfig.
        
    - name: labels
      value: object
      description: >
        Labels as key value pairs
        
    - name: kmsConfigId
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

Updates the Kms config properties with the full spec

```sql
UPDATE google.netapp.kms_configs
SET 
data__name = '{{ name }}',
data__cryptoKeyName = '{{ cryptoKeyName }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND kmsConfigsId = '{{ kmsConfigsId }}' --required
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

Warning! This operation will permanently delete the Kms config.

```sql
DELETE FROM google.netapp.kms_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND kmsConfigsId = '{{ kmsConfigsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="encrypt"
    values={[
        { label: 'encrypt', value: 'encrypt' },
        { label: 'verify', value: 'verify' }
    ]}
>
<TabItem value="encrypt">

Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.

```sql
EXEC google.netapp.kms_configs.encrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@kmsConfigsId='{{ kmsConfigsId }}' --required;
```
</TabItem>
<TabItem value="verify">

Verifies KMS config reachability.

```sql
EXEC google.netapp.kms_configs.verify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@kmsConfigsId='{{ kmsConfigsId }}' --required;
```
</TabItem>
</Tabs>
