--- 
title: print_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - print_servers
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>print_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>print_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.print_servers" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. ID of the print server. Leave empty when creating.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/&#123;customer.id&#125;/printServers/&#123;print_server.id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the print server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Editable. Description of the print server (as shown in the Admin console).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Editable. Display name of the print server (as shown in the Admin console).</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits).</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Editable. Print server URI.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. ID of the print server. Leave empty when creating.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/&#123;customer.id&#125;/printServers/&#123;print_server.id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the print server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Editable. Description of the print server (as shown in the Admin console).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Editable. Display name of the print server (as shown in the Admin console).</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits).</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Editable. Print server URI.</td>
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
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printServersId"><code>printServersId</code></a></td>
    <td></td>
    <td>Returns a print server's configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orgUnitId"><code>orgUnitId</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists print server configurations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a print server.</td>
</tr>
<tr>
    <td><a href="#batch_create_print_servers"><CopyableCode code="batch_create_print_servers" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates multiple print servers.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printServersId"><code>printServersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a print server's configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printServersId"><code>printServersId</code></a></td>
    <td></td>
    <td>Deletes a print server.</td>
</tr>
<tr>
    <td><a href="#batch_delete_print_servers"><CopyableCode code="batch_delete_print_servers" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Deletes multiple print servers.</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-printServersId">
    <td><CopyableCode code="printServersId" /></td>
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
<tr id="parameter-orgUnitId">
    <td><CopyableCode code="orgUnitId" /></td>
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

Returns a print server's configuration.

```sql
SELECT
id,
name,
createTime,
description,
displayName,
orgUnitId,
uri
FROM googleadmin.directory.print_servers
WHERE customersId = '{{ customersId }}' -- required
AND printServersId = '{{ printServersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists print server configurations.

```sql
SELECT
id,
name,
createTime,
description,
displayName,
orgUnitId,
uri
FROM googleadmin.directory.print_servers
WHERE customersId = '{{ customersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orgUnitId = '{{ orgUnitId }}'
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
        { label: 'batch_create_print_servers', value: 'batch_create_print_servers' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a print server.

```sql
INSERT INTO googleadmin.directory.print_servers (
data__name,
data__id,
data__displayName,
data__description,
data__uri,
data__orgUnitId,
customersId
)
SELECT 
'{{ name }}',
'{{ id }}',
'{{ displayName }}',
'{{ description }}',
'{{ uri }}',
'{{ orgUnitId }}',
'{{ customersId }}'
RETURNING
id,
name,
createTime,
description,
displayName,
orgUnitId,
uri
;
```
</TabItem>
<TabItem value="batch_create_print_servers">

Creates multiple print servers.

```sql
INSERT INTO googleadmin.directory.print_servers (
data__requests,
customersId
)
SELECT 
'{{ requests }}',
'{{ customersId }}'
RETURNING
failures,
printServers
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: print_servers
  props:
    - name: customersId
      value: string
      description: Required parameter for the print_servers resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
        
    - name: id
      value: string
      description: >
        Immutable. ID of the print server. Leave empty when creating.
        
    - name: displayName
      value: string
      description: >
        Editable. Display name of the print server (as shown in the Admin console).
        
    - name: description
      value: string
      description: >
        Editable. Description of the print server (as shown in the Admin console).
        
    - name: uri
      value: string
      description: >
        Editable. Print server URI.
        
    - name: orgUnitId
      value: string
      description: >
        ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits).
        
    - name: requests
      value: array
      description: >
        Required. A list of `PrintServer` resources to be created (max `50` per batch).
        
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

Updates a print server's configuration.

```sql
UPDATE googleadmin.directory.print_servers
SET 
data__name = '{{ name }}',
data__id = '{{ id }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__uri = '{{ uri }}',
data__orgUnitId = '{{ orgUnitId }}'
WHERE 
customersId = '{{ customersId }}' --required
AND printServersId = '{{ printServersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
createTime,
description,
displayName,
orgUnitId,
uri;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete_print_servers', value: 'batch_delete_print_servers' }
    ]}
>
<TabItem value="delete">

Deletes a print server.

```sql
DELETE FROM googleadmin.directory.print_servers
WHERE customersId = '{{ customersId }}' --required
AND printServersId = '{{ printServersId }}' --required;
```
</TabItem>
<TabItem value="batch_delete_print_servers">

Deletes multiple print servers.

```sql
DELETE FROM googleadmin.directory.print_servers
WHERE customersId = '{{ customersId }}' --required;
```
</TabItem>
</Tabs>
