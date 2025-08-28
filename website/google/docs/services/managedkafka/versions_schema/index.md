--- 
title: versions_schema
hide_title: false
hide_table_of_contents: false
keywords:
  - versions_schema
  - managedkafka
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

Creates, updates, deletes, gets or lists a <code>versions_schema</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>versions_schema</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.versions_schema" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' }
    ]}
>
<TabItem value="get_schema">

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
    <td><a href="#get_schema"><CopyableCode code="get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-subjectsId"><code>subjectsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>Get the schema string only for a version of a subject. The response will be the schema string.</td>
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
<tr id="parameter-schemaRegistriesId">
    <td><CopyableCode code="schemaRegistriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subjectsId">
    <td><CopyableCode code="subjectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' }
    ]}
>
<TabItem value="get_schema">

Get the schema string only for a version of a subject. The response will be the schema string.

```sql
SELECT
contentType,
data,
extensions
FROM google.managedkafka.versions_schema
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' -- required
AND subjectsId = '{{ subjectsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND deleted = '{{ deleted }}';
```
</TabItem>
</Tabs>
