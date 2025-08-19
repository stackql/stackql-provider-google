--- 
title: operations_-fhir-operation-status
hide_title: false
hide_table_of_contents: false
keywords:
  - operations_-fhir-operation-status
  - healthcare
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

Creates, updates, deletes, gets or lists an <code>operations_-fhir-operation-status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>operations_-fhir-operation-status</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.operations_-fhir-operation-status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get-fhir-operation-status"
    values={[
        { label: 'get-fhir-operation-status', value: 'get-fhir-operation-status' }
    ]}
>
<TabItem value="get-fhir-operation-status">

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
    <td><a href="#get-fhir-operation-status"><CopyableCode code="get-fhir-operation-status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td></td>
    <td>Gets the status of operations as defined in the FHIR specification. Implements the FHIR implementation guide [bulk data status request](https://build.fhir.org/ig/HL7/bulk-data/export.html#bulk-data-status-request). Operations can have one of these states: * in-progress: response status code is `202` and `X-Progress` header is set to `in progress`. * complete: response status code is `200` and the body is a JSON-encoded operation response as defined by the spec. For a bulk export, this response is defined in https://build.fhir.org/ig/HL7/bulk-data/export.html#response---complete-status. * error: response status code is `5XX`, and the body is a JSON-encoded `OperationOutcome` resource describing the reason for the error.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fhirStoresId">
    <td><CopyableCode code="fhirStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-operationsId">
    <td><CopyableCode code="operationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get-fhir-operation-status"
    values={[
        { label: 'get-fhir-operation-status', value: 'get-fhir-operation-status' }
    ]}
>
<TabItem value="get-fhir-operation-status">

Gets the status of operations as defined in the FHIR specification. Implements the FHIR implementation guide [bulk data status request](https://build.fhir.org/ig/HL7/bulk-data/export.html#bulk-data-status-request). Operations can have one of these states: * in-progress: response status code is `202` and `X-Progress` header is set to `in progress`. * complete: response status code is `200` and the body is a JSON-encoded operation response as defined by the spec. For a bulk export, this response is defined in https://build.fhir.org/ig/HL7/bulk-data/export.html#response---complete-status. * error: response status code is `5XX`, and the body is a JSON-encoded `OperationOutcome` resource describing the reason for the error.

```sql
SELECT
contentType,
data,
extensions
FROM google.healthcare.operations_-fhir-operation-status
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND fhirStoresId = '{{ fhirStoresId }}' -- required
AND operationsId = '{{ operationsId }}' -- required;
```
</TabItem>
</Tabs>
