--- 
title: session_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - session_templates
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

Creates, updates, deletes, gets or lists a <code>session_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>session_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.session_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_session_templates_get"
    values={[
        { label: 'projects_locations_session_templates_get', value: 'projects_locations_session_templates_get' },
        { label: 'projects_locations_session_templates_list', value: 'projects_locations_session_templates_list' }
    ]}
>
<TabItem value="projects_locations_session_templates_get">

A representation of a session template.

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
    <td>Required. Identifier. The resource name of the session template.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the template.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Brief description of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment configuration for session execution. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jupyterSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Jupyter session config. (id: JupyterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime configuration for session execution. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkConnectSession" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark connect session config. (id: SparkConnectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it creates the session template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_session_templates_list">

A list of session templates.

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
    <td>A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionTemplates" /></td>
    <td><code>array</code></td>
    <td>Output only. Session template list</td>
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
    <td><a href="#projects_locations_session_templates_get"><CopyableCode code="projects_locations_session_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionTemplatesId"><code>sessionTemplatesId</code></a></td>
    <td></td>
    <td>Gets the resource representation for a session template.</td>
</tr>
<tr>
    <td><a href="#projects_locations_session_templates_list"><CopyableCode code="projects_locations_session_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists session templates.</td>
</tr>
<tr>
    <td><a href="#projects_locations_session_templates_create"><CopyableCode code="projects_locations_session_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a session template synchronously.</td>
</tr>
<tr>
    <td><a href="#projects_locations_session_templates_patch"><CopyableCode code="projects_locations_session_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionTemplatesId"><code>sessionTemplatesId</code></a></td>
    <td></td>
    <td>Updates the session template synchronously.</td>
</tr>
<tr>
    <td><a href="#projects_locations_session_templates_delete"><CopyableCode code="projects_locations_session_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionTemplatesId"><code>sessionTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a session template.</td>
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
<tr id="parameter-sessionTemplatesId">
    <td><CopyableCode code="sessionTemplatesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_session_templates_get"
    values={[
        { label: 'projects_locations_session_templates_get', value: 'projects_locations_session_templates_get' },
        { label: 'projects_locations_session_templates_list', value: 'projects_locations_session_templates_list' }
    ]}
>
<TabItem value="projects_locations_session_templates_get">

Gets the resource representation for a session template.

```sql
SELECT
name,
createTime,
creator,
description,
environmentConfig,
jupyterSession,
labels,
runtimeConfig,
sparkConnectSession,
updateTime,
uuid
FROM google.dataproc.session_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sessionTemplatesId = '{{ sessionTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_session_templates_list">

Lists session templates.

```sql
SELECT
nextPageToken,
sessionTemplates
FROM google.dataproc.session_templates
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
    defaultValue="projects_locations_session_templates_create"
    values={[
        { label: 'projects_locations_session_templates_create', value: 'projects_locations_session_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_session_templates_create">

Create a session template synchronously.

```sql
INSERT INTO google.dataproc.session_templates (
data__name,
data__description,
data__jupyterSession,
data__sparkConnectSession,
data__labels,
data__runtimeConfig,
data__environmentConfig,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ jupyterSession }}',
'{{ sparkConnectSession }}',
'{{ labels }}',
'{{ runtimeConfig }}',
'{{ environmentConfig }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
creator,
description,
environmentConfig,
jupyterSession,
labels,
runtimeConfig,
sparkConnectSession,
updateTime,
uuid
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: session_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the session_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the session_templates resource.
    - name: name
      value: string
      description: >
        Required. Identifier. The resource name of the session template.
        
    - name: description
      value: string
      description: >
        Optional. Brief description of the template.
        
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
        Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.
        
    - name: runtimeConfig
      value: object
      description: >
        Optional. Runtime configuration for session execution.
        
    - name: environmentConfig
      value: object
      description: >
        Optional. Environment configuration for session execution.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_session_templates_patch"
    values={[
        { label: 'projects_locations_session_templates_patch', value: 'projects_locations_session_templates_patch' }
    ]}
>
<TabItem value="projects_locations_session_templates_patch">

Updates the session template synchronously.

```sql
UPDATE google.dataproc.session_templates
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__jupyterSession = '{{ jupyterSession }}',
data__sparkConnectSession = '{{ sparkConnectSession }}',
data__labels = '{{ labels }}',
data__runtimeConfig = '{{ runtimeConfig }}',
data__environmentConfig = '{{ environmentConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sessionTemplatesId = '{{ sessionTemplatesId }}' --required
RETURNING
name,
createTime,
creator,
description,
environmentConfig,
jupyterSession,
labels,
runtimeConfig,
sparkConnectSession,
updateTime,
uuid;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_session_templates_delete"
    values={[
        { label: 'projects_locations_session_templates_delete', value: 'projects_locations_session_templates_delete' }
    ]}
>
<TabItem value="projects_locations_session_templates_delete">

Deletes a session template.

```sql
DELETE FROM google.dataproc.session_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sessionTemplatesId = '{{ sessionTemplatesId }}' --required;
```
</TabItem>
</Tabs>
