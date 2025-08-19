--- 
title: subjects
hide_title: false
hide_table_of_contents: false
keywords:
  - subjects
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

Creates, updates, deletes, gets or lists a <code>subjects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subjects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.subjects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest &#123; // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; &#125; service ResourceService &#123; rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); &#125; Example with streaming methods: service CaldavService &#123; rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); &#125; Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a></td>
    <td><a href="#parameter-subjectPrefix"><code>subjectPrefix</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>List subjects in the schema registry. The response will be an array of subject names.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-subjectsId"><code>subjectsId</code></a></td>
    <td><a href="#parameter-permanent"><code>permanent</code></a></td>
    <td>Delete a subject. The response will be an array of versions of the deleted subject.</td>
</tr>
<tr>
    <td><a href="#lookup_version"><CopyableCode code="lookup_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-subjectsId"><code>subjectsId</code></a></td>
    <td></td>
    <td>Lookup a schema under the specified subject.</td>
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
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-permanent">
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-subjectPrefix">
    <td><CopyableCode code="subjectPrefix" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List subjects in the schema registry. The response will be an array of subject names.

```sql
SELECT
contentType,
data,
extensions
FROM google.managedkafka.subjects
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' -- required
AND subjectPrefix = '{{ subjectPrefix }}'
AND deleted = '{{ deleted }}';
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

Delete a subject. The response will be an array of versions of the deleted subject.

```sql
DELETE FROM google.managedkafka.subjects
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemaRegistriesId = '{{ schemaRegistriesId }}' --required
AND subjectsId = '{{ subjectsId }}' --required
AND permanent = '{{ permanent }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lookup_version"
    values={[
        { label: 'lookup_version', value: 'lookup_version' }
    ]}
>
<TabItem value="lookup_version">

Lookup a schema under the specified subject.

```sql
EXEC google.managedkafka.subjects.lookup_version 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@schemaRegistriesId='{{ schemaRegistriesId }}' --required, 
@subjectsId='{{ subjectsId }}' --required 
@@json=
'{
"schemaType": "{{ schemaType }}", 
"schema": "{{ schema }}", 
"references": "{{ references }}", 
"normalize": {{ normalize }}, 
"deleted": {{ deleted }}
}';
```
</TabItem>
</Tabs>
