--- 
title: apidocs_documentation
hide_title: false
hide_table_of_contents: false
keywords:
  - apidocs_documentation
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

Creates, updates, deletes, gets or lists an <code>apidocs_documentation</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apidocs_documentation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apidocs_documentation" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sites_apidocs_get_documentation"
    values={[
        { label: 'organizations_sites_apidocs_get_documentation', value: 'organizations_sites_apidocs_get_documentation' }
    ]}
>
<TabItem value="organizations_sites_apidocs_get_documentation">

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>Output only. The documentation resource. (id: GoogleCloudApigeeV1ApiDocDocumentation)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique error code for the request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Output only. Description of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Status of the operation.</td>
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
    <td><a href="#organizations_sites_apidocs_get_documentation"><CopyableCode code="organizations_sites_apidocs_get_documentation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apidocsId"><code>apidocsId</code></a></td>
    <td></td>
    <td>Gets the documentation for the specified catalog item.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apidocs_update_documentation"><CopyableCode code="organizations_sites_apidocs_update_documentation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apidocsId"><code>apidocsId</code></a></td>
    <td></td>
    <td>Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.</td>
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
<tr id="parameter-apidocsId">
    <td><CopyableCode code="apidocsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sitesId">
    <td><CopyableCode code="sitesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_sites_apidocs_get_documentation"
    values={[
        { label: 'organizations_sites_apidocs_get_documentation', value: 'organizations_sites_apidocs_get_documentation' }
    ]}
>
<TabItem value="organizations_sites_apidocs_get_documentation">

Gets the documentation for the specified catalog item.

```sql
SELECT
data,
errorCode,
message,
requestId,
status
FROM google.apigee.apidocs_documentation
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sitesId = '{{ sitesId }}' -- required
AND apidocsId = '{{ apidocsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_sites_apidocs_update_documentation"
    values={[
        { label: 'organizations_sites_apidocs_update_documentation', value: 'organizations_sites_apidocs_update_documentation' }
    ]}
>
<TabItem value="organizations_sites_apidocs_update_documentation">

Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.

```sql
UPDATE google.apigee.apidocs_documentation
SET 
data__oasDocumentation = '{{ oasDocumentation }}',
data__graphqlDocumentation = '{{ graphqlDocumentation }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sitesId = '{{ sitesId }}' --required
AND apidocsId = '{{ apidocsId }}' --required
RETURNING
data,
errorCode,
message,
requestId,
status;
```
</TabItem>
</Tabs>
