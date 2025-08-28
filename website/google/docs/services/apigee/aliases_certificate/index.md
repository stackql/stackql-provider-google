--- 
title: aliases_certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases_certificate
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

Creates, updates, deletes, gets or lists an <code>aliases_certificate</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>aliases_certificate</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.aliases_certificate" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_keystores_aliases_get_certificate"
    values={[
        { label: 'organizations_environments_keystores_aliases_get_certificate', value: 'organizations_environments_keystores_aliases_get_certificate' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_get_certificate">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
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
    <td><a href="#organizations_environments_keystores_aliases_get_certificate"><CopyableCode code="organizations_environments_keystores_aliases_get_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a>, <a href="#parameter-aliasesId"><code>aliasesId</code></a></td>
    <td></td>
    <td>Gets the certificate from an alias in PEM-encoded form.</td>
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
<tr id="parameter-aliasesId">
    <td><CopyableCode code="aliasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keystoresId">
    <td><CopyableCode code="keystoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_keystores_aliases_get_certificate"
    values={[
        { label: 'organizations_environments_keystores_aliases_get_certificate', value: 'organizations_environments_keystores_aliases_get_certificate' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_get_certificate">

Gets the certificate from an alias in PEM-encoded form.

```sql
SELECT
contentType,
data,
extensions
FROM google.apigee.aliases_certificate
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keystoresId = '{{ keystoresId }}' -- required
AND aliasesId = '{{ aliasesId }}' -- required;
```
</TabItem>
</Tabs>
