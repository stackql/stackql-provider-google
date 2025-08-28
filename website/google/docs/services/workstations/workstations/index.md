--- 
title: workstations
hide_title: false
hide_table_of_contents: false
keywords:
  - workstations
  - workstations
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

Creates, updates, deletes, gets or lists a <code>workstations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workstations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workstations.workstations" /></td></tr>
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
    <td>Identifier. Full name of this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Client-specified annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment variables passed to the workstation container's entrypoint.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `&#123;port&#125;-&#123;host&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this workstation is currently being updated to match its intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeHost" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Runtime host for the workstation when in STATE_RUNNING. (id: RuntimeHost)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceWorkstation" /></td>
    <td><code>string</code></td>
    <td>Optional. The source workstation from which this workstation's persistent directories were cloned on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was most recently updated.</td>
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
    <td>Identifier. Full name of this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Client-specified annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment variables passed to the workstation container's entrypoint.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `&#123;port&#125;-&#123;host&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this workstation is currently being updated to match its intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeHost" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Runtime host for the workstation when in STATE_RUNNING. (id: RuntimeHost)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceWorkstation" /></td>
    <td><code>string</code></td>
    <td>Optional. The source workstation from which this workstation's persistent directories were cloned on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for this workstation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td></td>
    <td>Returns the requested workstation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns all Workstations using the specified workstation configuration.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a></td>
    <td><a href="#parameter-workstationId"><code>workstationId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new workstation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates an existing workstation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified workstation.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td></td>
    <td>Starts running a workstation so that users can connect to it.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td></td>
    <td>Stops running a workstation, reducing costs.</td>
</tr>
<tr>
    <td><a href="#generate_access_token"><CopyableCode code="generate_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a>, <a href="#parameter-workstationConfigsId"><code>workstationConfigsId</code></a>, <a href="#parameter-workstationsId"><code>workstationsId</code></a></td>
    <td></td>
    <td>Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation. Once generated this token cannot be revoked and is good for the lifetime of the token.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workstationClustersId">
    <td><CopyableCode code="workstationClustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workstationConfigsId">
    <td><CopyableCode code="workstationConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workstationsId">
    <td><CopyableCode code="workstationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-workstationId">
    <td><CopyableCode code="workstationId" /></td>
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

Returns the requested workstation.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
env,
etag,
host,
kmsKey,
labels,
reconciling,
runtimeHost,
sourceWorkstation,
startTime,
state,
uid,
updateTime
FROM google.workstations.workstations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workstationClustersId = '{{ workstationClustersId }}' -- required
AND workstationConfigsId = '{{ workstationConfigsId }}' -- required
AND workstationsId = '{{ workstationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns all Workstations using the specified workstation configuration.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
env,
etag,
host,
kmsKey,
labels,
reconciling,
runtimeHost,
sourceWorkstation,
startTime,
state,
uid,
updateTime
FROM google.workstations.workstations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workstationClustersId = '{{ workstationClustersId }}' -- required
AND workstationConfigsId = '{{ workstationConfigsId }}' -- required
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

Creates a new workstation.

```sql
INSERT INTO google.workstations.workstations (
data__name,
data__displayName,
data__annotations,
data__labels,
data__etag,
data__env,
data__sourceWorkstation,
projectsId,
locationsId,
workstationClustersId,
workstationConfigsId,
workstationId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ annotations }}',
'{{ labels }}',
'{{ etag }}',
'{{ env }}',
'{{ sourceWorkstation }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workstationClustersId }}',
'{{ workstationConfigsId }}',
'{{ workstationId }}',
'{{ validateOnly }}'
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
- name: workstations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workstations resource.
    - name: locationsId
      value: string
      description: Required parameter for the workstations resource.
    - name: workstationClustersId
      value: string
      description: Required parameter for the workstations resource.
    - name: workstationConfigsId
      value: string
      description: Required parameter for the workstations resource.
    - name: name
      value: string
      description: >
        Identifier. Full name of this workstation.
        
    - name: displayName
      value: string
      description: >
        Optional. Human-readable name for this workstation.
        
    - name: annotations
      value: object
      description: >
        Optional. Client-specified annotations.
        
    - name: labels
      value: object
      description: >
        Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources.
        
    - name: etag
      value: string
      description: >
        Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
        
    - name: env
      value: object
      description: >
        Optional. Environment variables passed to the workstation container's entrypoint.
        
    - name: sourceWorkstation
      value: string
      description: >
        Optional. The source workstation from which this workstation's persistent directories were cloned on creation.
        
    - name: workstationId
      value: string
    - name: validateOnly
      value: boolean
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

Updates an existing workstation.

```sql
UPDATE google.workstations.workstations
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__annotations = '{{ annotations }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__env = '{{ env }}',
data__sourceWorkstation = '{{ sourceWorkstation }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workstationClustersId = '{{ workstationClustersId }}' --required
AND workstationConfigsId = '{{ workstationConfigsId }}' --required
AND workstationsId = '{{ workstationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
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

Deletes the specified workstation.

```sql
DELETE FROM google.workstations.workstations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workstationClustersId = '{{ workstationClustersId }}' --required
AND workstationConfigsId = '{{ workstationConfigsId }}' --required
AND workstationsId = '{{ workstationsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'generate_access_token', value: 'generate_access_token' }
    ]}
>
<TabItem value="start">

Starts running a workstation so that users can connect to it.

```sql
EXEC google.workstations.workstations.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workstationClustersId='{{ workstationClustersId }}' --required, 
@workstationConfigsId='{{ workstationConfigsId }}' --required, 
@workstationsId='{{ workstationsId }}' --required 
@@json=
'{
"validateOnly": {{ validateOnly }}, 
"etag": "{{ etag }}", 
"boostConfig": "{{ boostConfig }}"
}';
```
</TabItem>
<TabItem value="stop">

Stops running a workstation, reducing costs.

```sql
EXEC google.workstations.workstations.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workstationClustersId='{{ workstationClustersId }}' --required, 
@workstationConfigsId='{{ workstationConfigsId }}' --required, 
@workstationsId='{{ workstationsId }}' --required 
@@json=
'{
"validateOnly": {{ validateOnly }}, 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="generate_access_token">

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation. Once generated this token cannot be revoked and is good for the lifetime of the token.

```sql
EXEC google.workstations.workstations.generate_access_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workstationClustersId='{{ workstationClustersId }}' --required, 
@workstationConfigsId='{{ workstationConfigsId }}' --required, 
@workstationsId='{{ workstationsId }}' --required 
@@json=
'{
"expireTime": "{{ expireTime }}", 
"ttl": "{{ ttl }}", 
"port": {{ port }}
}';
```
</TabItem>
</Tabs>
