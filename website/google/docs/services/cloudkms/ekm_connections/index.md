--- 
title: ekm_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - ekm_connections
  - cloudkms
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

Creates, updates, deletes, gets or lists an <code>ekm_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ekm_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.ekm_connections" /></td></tr>
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
    <td>Output only. The resource name for the EkmConnection in the format `projects/*/locations/*/ekmConnections/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the EkmConnection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoSpacePath" /></td>
    <td><code>string</code></td>
    <td>Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the currently stored EkmConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="keyManagementMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResolvers" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.</td>
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
    <td>Output only. The resource name for the EkmConnection in the format `projects/*/locations/*/ekmConnections/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the EkmConnection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoSpacePath" /></td>
    <td><code>string</code></td>
    <td>Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the currently stored EkmConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="keyManagementMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResolvers" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ekmConnectionsId"><code>ekmConnectionsId</code></a></td>
    <td></td>
    <td>Returns metadata for a given EkmConnection.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists EkmConnections.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-ekmConnectionId"><code>ekmConnectionId</code></a></td>
    <td>Creates a new EkmConnection in a given Project and Location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ekmConnectionsId"><code>ekmConnectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an EkmConnection's metadata.</td>
</tr>
<tr>
    <td><a href="#verify_connectivity"><CopyableCode code="verify_connectivity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ekmConnectionsId"><code>ekmConnectionsId</code></a></td>
    <td></td>
    <td>Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.</td>
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
<tr id="parameter-ekmConnectionsId">
    <td><CopyableCode code="ekmConnectionsId" /></td>
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
<tr id="parameter-ekmConnectionId">
    <td><CopyableCode code="ekmConnectionId" /></td>
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

Returns metadata for a given EkmConnection.

```sql
SELECT
name,
createTime,
cryptoSpacePath,
etag,
keyManagementMode,
serviceResolvers
FROM google.cloudkms.ekm_connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND ekmConnectionsId = '{{ ekmConnectionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists EkmConnections.

```sql
SELECT
name,
createTime,
cryptoSpacePath,
etag,
keyManagementMode,
serviceResolvers
FROM google.cloudkms.ekm_connections
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

Creates a new EkmConnection in a given Project and Location.

```sql
INSERT INTO google.cloudkms.ekm_connections (
data__serviceResolvers,
data__etag,
data__keyManagementMode,
data__cryptoSpacePath,
projectsId,
locationsId,
ekmConnectionId
)
SELECT 
'{{ serviceResolvers }}',
'{{ etag }}',
'{{ keyManagementMode }}',
'{{ cryptoSpacePath }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ ekmConnectionId }}'
RETURNING
name,
createTime,
cryptoSpacePath,
etag,
keyManagementMode,
serviceResolvers
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ekm_connections
  props:
    - name: projectsId
      value: string
      description: Required parameter for the ekm_connections resource.
    - name: locationsId
      value: string
      description: Required parameter for the ekm_connections resource.
    - name: serviceResolvers
      value: array
      description: >
        Optional. A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
        
    - name: etag
      value: string
      description: >
        Optional. Etag of the currently stored EkmConnection.
        
    - name: keyManagementMode
      value: string
      description: >
        Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.
        
      valid_values: ['KEY_MANAGEMENT_MODE_UNSPECIFIED', 'MANUAL', 'CLOUD_KMS']
    - name: cryptoSpacePath
      value: string
      description: >
        Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.
        
    - name: ekmConnectionId
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

Updates an EkmConnection's metadata.

```sql
UPDATE google.cloudkms.ekm_connections
SET 
data__serviceResolvers = '{{ serviceResolvers }}',
data__etag = '{{ etag }}',
data__keyManagementMode = '{{ keyManagementMode }}',
data__cryptoSpacePath = '{{ cryptoSpacePath }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ekmConnectionsId = '{{ ekmConnectionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
cryptoSpacePath,
etag,
keyManagementMode,
serviceResolvers;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="verify_connectivity"
    values={[
        { label: 'verify_connectivity', value: 'verify_connectivity' }
    ]}
>
<TabItem value="verify_connectivity">

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

```sql
EXEC google.cloudkms.ekm_connections.verify_connectivity 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@ekmConnectionsId='{{ ekmConnectionsId }}' --required;
```
</TabItem>
</Tabs>
