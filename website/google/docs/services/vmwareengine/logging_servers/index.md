--- 
title: logging_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_servers
  - vmwareengine
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

Creates, updates, deletes, gets or lists a <code>logging_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>logging_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.logging_servers" /></td></tr>
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
    <td>Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Required. Fully-qualified domain name (FQDN) or IP Address of the logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Port number at which the logging server receives logs.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Required. Protocol used by vCenter to send logs to a logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of component that produces logs that will be forwarded to this logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td>Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Required. Fully-qualified domain name (FQDN) or IP Address of the logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Port number at which the logging server receives logs.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Required. Protocol used by vCenter to send logs to a logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of component that produces logs that will be forwarded to this logging server.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-loggingServersId"><code>loggingServersId</code></a></td>
    <td></td>
    <td>Gets details of a logging server.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists logging servers configured for a given private cloud.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-loggingServerId"><code>loggingServerId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a new logging server for a given private cloud.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-loggingServersId"><code>loggingServersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single logging server. Only fields specified in `update_mask` are applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-loggingServersId"><code>loggingServersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single logging server.</td>
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
<tr id="parameter-loggingServersId">
    <td><CopyableCode code="loggingServersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-privateCloudsId">
    <td><CopyableCode code="privateCloudsId" /></td>
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
<tr id="parameter-loggingServerId">
    <td><CopyableCode code="loggingServerId" /></td>
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

Gets details of a logging server.

```sql
SELECT
name,
createTime,
hostname,
port,
protocol,
sourceType,
uid,
updateTime
FROM google.vmwareengine.logging_servers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required
AND loggingServersId = '{{ loggingServersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists logging servers configured for a given private cloud.

```sql
SELECT
name,
createTime,
hostname,
port,
protocol,
sourceType,
uid,
updateTime
FROM google.vmwareengine.logging_servers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required
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

Create a new logging server for a given private cloud.

```sql
INSERT INTO google.vmwareengine.logging_servers (
data__hostname,
data__port,
data__protocol,
data__sourceType,
projectsId,
locationsId,
privateCloudsId,
loggingServerId,
requestId
)
SELECT 
'{{ hostname }}',
{{ port }},
'{{ protocol }}',
'{{ sourceType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ privateCloudsId }}',
'{{ loggingServerId }}',
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
- name: logging_servers
  props:
    - name: projectsId
      value: string
      description: Required parameter for the logging_servers resource.
    - name: locationsId
      value: string
      description: Required parameter for the logging_servers resource.
    - name: privateCloudsId
      value: string
      description: Required parameter for the logging_servers resource.
    - name: hostname
      value: string
      description: >
        Required. Fully-qualified domain name (FQDN) or IP Address of the logging server.
        
    - name: port
      value: integer
      description: >
        Required. Port number at which the logging server receives logs.
        
    - name: protocol
      value: string
      description: >
        Required. Protocol used by vCenter to send logs to a logging server.
        
      valid_values: ['PROTOCOL_UNSPECIFIED', 'UDP', 'TCP', 'TLS', 'SSL', 'RELP']
    - name: sourceType
      value: string
      description: >
        Required. The type of component that produces logs that will be forwarded to this logging server.
        
      valid_values: ['SOURCE_TYPE_UNSPECIFIED', 'ESXI', 'VCSA']
    - name: loggingServerId
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

Updates the parameters of a single logging server. Only fields specified in `update_mask` are applied.

```sql
UPDATE google.vmwareengine.logging_servers
SET 
data__hostname = '{{ hostname }}',
data__port = {{ port }},
data__protocol = '{{ protocol }}',
data__sourceType = '{{ sourceType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND loggingServersId = '{{ loggingServersId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single logging server.

```sql
DELETE FROM google.vmwareengine.logging_servers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND loggingServersId = '{{ loggingServersId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
