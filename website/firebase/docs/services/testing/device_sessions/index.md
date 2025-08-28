--- 
title: device_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - device_sessions
  - testing
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>device_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>device_sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.testing.device_sessions" /></td></tr>
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
    <td>Optional. Name of the DeviceSession, e.g. "projects/&#123;project_id&#125;/deviceSessions/&#123;session_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="activeStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the session first became ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="androidDevice" /></td>
    <td><code>object</code></td>
    <td>A single Android device. (id: AndroidDevice)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the Session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The title of the DeviceSession to be presented in the UI.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED.</td>
</tr>
<tr>
    <td><CopyableCode code="inactivityTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the DeviceSession.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistories" /></td>
    <td><code>array</code></td>
    <td>Output only. The historical state transitions of the session_state message including the current session state.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 15 minutes.</td>
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
    <td>Optional. Name of the DeviceSession, e.g. "projects/&#123;project_id&#125;/deviceSessions/&#123;session_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="activeStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the session first became ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="androidDevice" /></td>
    <td><code>object</code></td>
    <td>A single Android device. (id: AndroidDevice)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the Session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The title of the DeviceSession to be presented in the UI.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED.</td>
</tr>
<tr>
    <td><CopyableCode code="inactivityTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the DeviceSession.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistories" /></td>
    <td><code>array</code></td>
    <td>Output only. The historical state transitions of the session_state message including the current session state.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 15 minutes.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deviceSessionsId"><code>deviceSessionsId</code></a></td>
    <td></td>
    <td>GET /v1/projects/&#123;project_id&#125;/deviceSessions/&#123;device_session_id&#125; Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>GET /v1/projects/&#123;project_id&#125;/deviceSessions Lists device Sessions owned by the project user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>POST /v1/projects/&#123;project_id&#125;/deviceSessions</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deviceSessionsId"><code>deviceSessionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>PATCH /v1/projects/&#123;projectId&#125;/deviceSessions/deviceSessionId&#125;:updateDeviceSession Updates the current device session to the fields described by the update_mask.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deviceSessionsId"><code>deviceSessionsId</code></a></td>
    <td></td>
    <td>POST /v1/projects/&#123;project_id&#125;/deviceSessions/&#123;device_session_id&#125;:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy.</td>
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
<tr id="parameter-deviceSessionsId">
    <td><CopyableCode code="deviceSessionsId" /></td>
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

GET /v1/projects/&#123;project_id&#125;/deviceSessions/&#123;device_session_id&#125; Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession.

```sql
SELECT
name,
activeStartTime,
androidDevice,
createTime,
displayName,
expireTime,
inactivityTimeout,
state,
stateHistories,
ttl
FROM firebase.testing.device_sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND deviceSessionsId = '{{ deviceSessionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

GET /v1/projects/&#123;project_id&#125;/deviceSessions Lists device Sessions owned by the project user.

```sql
SELECT
name,
activeStartTime,
androidDevice,
createTime,
displayName,
expireTime,
inactivityTimeout,
state,
stateHistories,
ttl
FROM firebase.testing.device_sessions
WHERE projectsId = '{{ projectsId }}' -- required
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

POST /v1/projects/&#123;project_id&#125;/deviceSessions

```sql
INSERT INTO firebase.testing.device_sessions (
data__name,
data__ttl,
data__expireTime,
data__androidDevice,
projectsId
)
SELECT 
'{{ name }}',
'{{ ttl }}',
'{{ expireTime }}',
'{{ androidDevice }}',
'{{ projectsId }}'
RETURNING
name,
activeStartTime,
androidDevice,
createTime,
displayName,
expireTime,
inactivityTimeout,
state,
stateHistories,
ttl
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: device_sessions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the device_sessions resource.
    - name: name
      value: string
      description: >
        Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
        
    - name: ttl
      value: string
      description: >
        Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 15 minutes.
        
    - name: expireTime
      value: string
      description: >
        Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED.
        
    - name: androidDevice
      value: object
      description: >
        A single Android device.
        
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

PATCH /v1/projects/&#123;projectId&#125;/deviceSessions/deviceSessionId&#125;:updateDeviceSession Updates the current device session to the fields described by the update_mask.

```sql
UPDATE firebase.testing.device_sessions
SET 
data__name = '{{ name }}',
data__ttl = '{{ ttl }}',
data__expireTime = '{{ expireTime }}',
data__androidDevice = '{{ androidDevice }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND deviceSessionsId = '{{ deviceSessionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeStartTime,
androidDevice,
createTime,
displayName,
expireTime,
inactivityTimeout,
state,
stateHistories,
ttl;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

POST /v1/projects/&#123;project_id&#125;/deviceSessions/&#123;device_session_id&#125;:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy.

```sql
EXEC firebase.testing.device_sessions.cancel 
@projectsId='{{ projectsId }}' --required, 
@deviceSessionsId='{{ deviceSessionsId }}' --required;
```
</TabItem>
</Tabs>
