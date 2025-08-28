--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_sessions_get"
    values={[
        { label: 'projects_locations_sessions_get', value: 'projects_locations_sessions_get' },
        { label: 'projects_locations_sessions_list', value: 'projects_locations_sessions_list' }
    ]}
>
<TabItem value="projects_locations_sessions_get">

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
    <td>Identifier. The resource name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the session.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment configuration for the session execution. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jupyterSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Jupyter session config. (id: JupyterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime configuration for the session execution. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information about session execution. (id: RuntimeInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session.</td>
</tr>
<tr>
    <td><CopyableCode code="sparkConnectSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark connect session config. (id: SparkConnectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. A state of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. Historical state information for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Session state details, such as the failure description if the state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the session entered the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Optional. The email address of the user who owns the session.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sessions_list">

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
    <td>Identifier. The resource name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the session.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment configuration for the session execution. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jupyterSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Jupyter session config. (id: JupyterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime configuration for the session execution. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information about session execution. (id: RuntimeInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session.</td>
</tr>
<tr>
    <td><CopyableCode code="sparkConnectSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark connect session config. (id: SparkConnectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. A state of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. Historical state information for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Session state details, such as the failure description if the state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the session entered the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Optional. The email address of the user who owns the session.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session.</td>
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
    <td><a href="#projects_locations_sessions_get"><CopyableCode code="projects_locations_sessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Gets the resource representation for an interactive session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_list"><CopyableCode code="projects_locations_sessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists interactive sessions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_create"><CopyableCode code="projects_locations_sessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create an interactive session asynchronously.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_delete"><CopyableCode code="projects_locations_sessions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_terminate"><CopyableCode code="projects_locations_sessions_terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Terminates the interactive session.</td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_sessions_get"
    values={[
        { label: 'projects_locations_sessions_get', value: 'projects_locations_sessions_get' },
        { label: 'projects_locations_sessions_list', value: 'projects_locations_sessions_list' }
    ]}
>
<TabItem value="projects_locations_sessions_get">

Gets the resource representation for an interactive session.

```sql
SELECT
name,
createTime,
creator,
environmentConfig,
jupyterSession,
labels,
runtimeConfig,
runtimeInfo,
sessionTemplate,
sparkConnectSession,
state,
stateHistory,
stateMessage,
stateTime,
user,
uuid
FROM google.dataproc.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_sessions_list">

Lists interactive sessions.

```sql
SELECT
name,
createTime,
creator,
environmentConfig,
jupyterSession,
labels,
runtimeConfig,
runtimeInfo,
sessionTemplate,
sparkConnectSession,
state,
stateHistory,
stateMessage,
stateTime,
user,
uuid
FROM google.dataproc.sessions
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
    defaultValue="projects_locations_sessions_create"
    values={[
        { label: 'projects_locations_sessions_create', value: 'projects_locations_sessions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_sessions_create">

Create an interactive session asynchronously.

```sql
INSERT INTO google.dataproc.sessions (
data__name,
data__jupyterSession,
data__sparkConnectSession,
data__labels,
data__runtimeConfig,
data__environmentConfig,
data__user,
data__sessionTemplate,
projectsId,
locationsId,
sessionId,
requestId
)
SELECT 
'{{ name }}',
'{{ jupyterSession }}',
'{{ sparkConnectSession }}',
'{{ labels }}',
'{{ runtimeConfig }}',
'{{ environmentConfig }}',
'{{ user }}',
'{{ sessionTemplate }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sessionId }}',
'{{ requestId }}'
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
- name: sessions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sessions resource.
    - name: locationsId
      value: string
      description: Required parameter for the sessions resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the session.
        
    - name: jupyterSession
      value: object
      description: >
        Optional. Jupyter session config.
        
    - name: sparkConnectSession
      value: object
      description: >
        Optional. Spark connect session config.
        
    - name: labels
      value: object
      description: >
        Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.
        
    - name: runtimeConfig
      value: object
      description: >
        Optional. Runtime configuration for the session execution.
        
    - name: environmentConfig
      value: object
      description: >
        Optional. Environment configuration for the session execution.
        
    - name: user
      value: string
      description: >
        Optional. The email address of the user who owns the session.
        
    - name: sessionTemplate
      value: string
      description: >
        Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session.
        
    - name: sessionId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_sessions_delete"
    values={[
        { label: 'projects_locations_sessions_delete', value: 'projects_locations_sessions_delete' }
    ]}
>
<TabItem value="projects_locations_sessions_delete">

Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.

```sql
DELETE FROM google.dataproc.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_sessions_terminate"
    values={[
        { label: 'projects_locations_sessions_terminate', value: 'projects_locations_sessions_terminate' }
    ]}
>
<TabItem value="projects_locations_sessions_terminate">

Terminates the interactive session.

```sql
EXEC google.dataproc.sessions.projects_locations_sessions_terminate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
