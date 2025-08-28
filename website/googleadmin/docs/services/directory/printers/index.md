--- 
title: printers
hide_title: false
hide_table_of_contents: false
keywords:
  - printers
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

Creates, updates, deletes, gets or lists a <code>printers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>printers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.printers" /></td></tr>
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
    <td>Id of the printer. (During printer creation leave empty)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the Printer object, in the format customers/&#123;customer-id&#125;/printers/&#123;printer-id&#125; (During printer creation leave empty)</td>
</tr>
<tr>
    <td><CopyableCode code="auxiliaryMessages" /></td>
    <td><code>array</code></td>
    <td>Output only. Auxiliary messages about issues with the printer configuration if any.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when printer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Editable. Description of printer.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Editable. Name of printer.</td>
</tr>
<tr>
    <td><CopyableCode code="makeAndModel" /></td>
    <td><code>string</code></td>
    <td>Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Organization Unit that owns this printer (Only can be set during Printer creation)</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Editable. Printer URI.</td>
</tr>
<tr>
    <td><CopyableCode code="useDriverlessConfig" /></td>
    <td><code>boolean</code></td>
    <td>Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored</td>
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
    <td>Id of the printer. (During printer creation leave empty)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the Printer object, in the format customers/&#123;customer-id&#125;/printers/&#123;printer-id&#125; (During printer creation leave empty)</td>
</tr>
<tr>
    <td><CopyableCode code="auxiliaryMessages" /></td>
    <td><code>array</code></td>
    <td>Output only. Auxiliary messages about issues with the printer configuration if any.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when printer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Editable. Description of printer.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Editable. Name of printer.</td>
</tr>
<tr>
    <td><CopyableCode code="makeAndModel" /></td>
    <td><code>string</code></td>
    <td>Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Organization Unit that owns this printer (Only can be set during Printer creation)</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Editable. Printer URI.</td>
</tr>
<tr>
    <td><CopyableCode code="useDriverlessConfig" /></td>
    <td><code>boolean</code></td>
    <td>Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored</td>
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
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printersId"><code>printersId</code></a></td>
    <td></td>
    <td>Returns a `Printer` resource (printer's config).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orgUnitId"><code>orgUnitId</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>List printers configs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a printer under given Organization Unit.</td>
</tr>
<tr>
    <td><a href="#batch_create_printers"><CopyableCode code="batch_create_printers" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates printers under given Organization Unit.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printersId"><code>printersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-clearMask"><code>clearMask</code></a></td>
    <td>Updates a `Printer` resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-printersId"><code>printersId</code></a></td>
    <td></td>
    <td>Deletes a `Printer`.</td>
</tr>
<tr>
    <td><a href="#batch_delete_printers"><CopyableCode code="batch_delete_printers" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Deletes printers in batch.</td>
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
<tr id="parameter-printersId">
    <td><CopyableCode code="printersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clearMask">
    <td><CopyableCode code="clearMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Returns a `Printer` resource (printer's config).

```sql
SELECT
id,
name,
auxiliaryMessages,
createTime,
description,
displayName,
makeAndModel,
orgUnitId,
uri,
useDriverlessConfig
FROM googleadmin.directory.printers
WHERE customersId = '{{ customersId }}' -- required
AND printersId = '{{ printersId }}' -- required;
```
</TabItem>
<TabItem value="list">

List printers configs.

```sql
SELECT
id,
name,
auxiliaryMessages,
createTime,
description,
displayName,
makeAndModel,
orgUnitId,
uri,
useDriverlessConfig
FROM googleadmin.directory.printers
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
        { label: 'batch_create_printers', value: 'batch_create_printers' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a printer under given Organization Unit.

```sql
INSERT INTO googleadmin.directory.printers (
data__name,
data__id,
data__displayName,
data__description,
data__makeAndModel,
data__uri,
data__orgUnitId,
data__useDriverlessConfig,
customersId
)
SELECT 
'{{ name }}',
'{{ id }}',
'{{ displayName }}',
'{{ description }}',
'{{ makeAndModel }}',
'{{ uri }}',
'{{ orgUnitId }}',
{{ useDriverlessConfig }},
'{{ customersId }}'
RETURNING
id,
name,
auxiliaryMessages,
createTime,
description,
displayName,
makeAndModel,
orgUnitId,
uri,
useDriverlessConfig
;
```
</TabItem>
<TabItem value="batch_create_printers">

Creates printers under given Organization Unit.

```sql
INSERT INTO googleadmin.directory.printers (
data__requests,
customersId
)
SELECT 
'{{ requests }}',
'{{ customersId }}'
RETURNING
failures,
printers
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: printers
  props:
    - name: customersId
      value: string
      description: Required parameter for the printers resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)
        
    - name: id
      value: string
      description: >
        Id of the printer. (During printer creation leave empty)
        
    - name: displayName
      value: string
      description: >
        Editable. Name of printer.
        
    - name: description
      value: string
      description: >
        Editable. Description of printer.
        
    - name: makeAndModel
      value: string
      description: >
        Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.
        
    - name: uri
      value: string
      description: >
        Editable. Printer URI.
        
    - name: orgUnitId
      value: string
      description: >
        Organization Unit that owns this printer (Only can be set during Printer creation)
        
    - name: useDriverlessConfig
      value: boolean
      description: >
        Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored
        
    - name: requests
      value: array
      description: >
        A list of Printers to be created. Max 50 at a time.
        
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

Updates a `Printer` resource.

```sql
UPDATE googleadmin.directory.printers
SET 
data__name = '{{ name }}',
data__id = '{{ id }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__makeAndModel = '{{ makeAndModel }}',
data__uri = '{{ uri }}',
data__orgUnitId = '{{ orgUnitId }}',
data__useDriverlessConfig = {{ useDriverlessConfig }}
WHERE 
customersId = '{{ customersId }}' --required
AND printersId = '{{ printersId }}' --required
AND updateMask = '{{ updateMask}}'
AND clearMask = '{{ clearMask}}'
RETURNING
id,
name,
auxiliaryMessages,
createTime,
description,
displayName,
makeAndModel,
orgUnitId,
uri,
useDriverlessConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete_printers', value: 'batch_delete_printers' }
    ]}
>
<TabItem value="delete">

Deletes a `Printer`.

```sql
DELETE FROM googleadmin.directory.printers
WHERE customersId = '{{ customersId }}' --required
AND printersId = '{{ printersId }}' --required;
```
</TabItem>
<TabItem value="batch_delete_printers">

Deletes printers in batch.

```sql
DELETE FROM googleadmin.directory.printers
WHERE customersId = '{{ customersId }}' --required;
```
</TabItem>
</Tabs>
