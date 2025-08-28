--- 
title: targetservers
hide_title: false
hide_table_of_contents: false
keywords:
  - targetservers
  - apigee
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

Creates, updates, deletes, gets or lists a <code>targetservers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>targetservers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.targetservers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_targetservers_get"
    values={[
        { label: 'organizations_environments_targetservers_get', value: 'organizations_environments_targetservers_get' }
    ]}
>
<TabItem value="organizations_environments_targetservers_get">

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
    <td>Required. The resource id of this target server. Values must match the regular expression </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of this TargetServer.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.</td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Immutable. The protocol used by this TargetServer.</td>
</tr>
<tr>
    <td><CopyableCode code="sSLInfo" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration. (id: GoogleCloudApigeeV1TlsInfo)</td>
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
    <td><a href="#organizations_environments_targetservers_get"><CopyableCode code="organizations_environments_targetservers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-targetserversId"><code>targetserversId</code></a></td>
    <td></td>
    <td>Gets a TargetServer resource.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_targetservers_create"><CopyableCode code="organizations_environments_targetservers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Creates a TargetServer in the specified environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_targetservers_update"><CopyableCode code="organizations_environments_targetservers_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-targetserversId"><code>targetserversId</code></a></td>
    <td></td>
    <td>Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_targetservers_delete"><CopyableCode code="organizations_environments_targetservers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-targetserversId"><code>targetserversId</code></a></td>
    <td></td>
    <td>Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-targetserversId">
    <td><CopyableCode code="targetserversId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_targetservers_get"
    values={[
        { label: 'organizations_environments_targetservers_get', value: 'organizations_environments_targetservers_get' }
    ]}
>
<TabItem value="organizations_environments_targetservers_get">

Gets a TargetServer resource.

```sql
SELECT
name,
description,
host,
isEnabled,
port,
protocol,
sSLInfo
FROM google.apigee.targetservers
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND targetserversId = '{{ targetserversId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_targetservers_create"
    values={[
        { label: 'organizations_environments_targetservers_create', value: 'organizations_environments_targetservers_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_targetservers_create">

Creates a TargetServer in the specified environment.

```sql
INSERT INTO google.apigee.targetservers (
data__name,
data__description,
data__host,
data__port,
data__isEnabled,
data__sSLInfo,
data__protocol,
organizationsId,
environmentsId,
name
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ host }}',
{{ port }},
{{ isEnabled }},
'{{ sSLInfo }}',
'{{ protocol }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ name }}'
RETURNING
name,
description,
host,
isEnabled,
port,
protocol,
sSLInfo
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: targetservers
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the targetservers resource.
    - name: environmentsId
      value: string
      description: Required parameter for the targetservers resource.
    - name: name
      value: string
      description: >
        Required. The resource id of this target server. Values must match the regular expression 
        
    - name: description
      value: string
      description: >
        Optional. A human-readable description of this TargetServer.
        
    - name: host
      value: string
      description: >
        Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
        
    - name: port
      value: integer
      description: >
        Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
        
    - name: isEnabled
      value: boolean
      description: >
        Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
        
    - name: sSLInfo
      value: object
      description: >
        Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
        
    - name: protocol
      value: string
      description: >
        Immutable. The protocol used by this TargetServer.
        
      valid_values: ['PROTOCOL_UNSPECIFIED', 'HTTP', 'HTTP2', 'GRPC_TARGET', 'GRPC', 'EXTERNAL_CALLOUT']
    - name: name
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_environments_targetservers_update"
    values={[
        { label: 'organizations_environments_targetservers_update', value: 'organizations_environments_targetservers_update' }
    ]}
>
<TabItem value="organizations_environments_targetservers_update">

Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.

```sql
REPLACE google.apigee.targetservers
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__host = '{{ host }}',
data__port = {{ port }},
data__isEnabled = {{ isEnabled }},
data__sSLInfo = '{{ sSLInfo }}',
data__protocol = '{{ protocol }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND targetserversId = '{{ targetserversId }}' --required
RETURNING
name,
description,
host,
isEnabled,
port,
protocol,
sSLInfo;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_targetservers_delete"
    values={[
        { label: 'organizations_environments_targetservers_delete', value: 'organizations_environments_targetservers_delete' }
    ]}
>
<TabItem value="organizations_environments_targetservers_delete">

Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.

```sql
DELETE FROM google.apigee.targetservers
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND targetserversId = '{{ targetserversId }}' --required;
```
</TabItem>
</Tabs>
