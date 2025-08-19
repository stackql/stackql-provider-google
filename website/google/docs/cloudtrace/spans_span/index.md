--- 
title: spans_span
hide_title: false
hide_table_of_contents: false
keywords:
  - spans_span
  - cloudtrace
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

Creates, updates, deletes, gets or lists a <code>spans_span</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>spans_span</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudtrace.spans_span" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_span"><CopyableCode code="create_span" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-tracesId"><code>tracesId</code></a>, <a href="#parameter-spansId"><code>spansId</code></a></td>
    <td></td>
    <td>Creates a new span. If a span ID already exists, an additional copy of the span will be stored.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spansId">
    <td><CopyableCode code="spansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tracesId">
    <td><CopyableCode code="tracesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_span"
    values={[
        { label: 'create_span', value: 'create_span' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_span">

Creates a new span. If a span ID already exists, an additional copy of the span will be stored.

```sql
INSERT INTO google.cloudtrace.spans_span (
data__name,
data__spanId,
data__parentSpanId,
data__displayName,
data__startTime,
data__endTime,
data__attributes,
data__stackTrace,
data__timeEvents,
data__links,
data__status,
data__sameProcessAsParentSpan,
data__childSpanCount,
data__spanKind,
projectsId,
tracesId,
spansId
)
SELECT 
'{{ name }}',
'{{ spanId }}',
'{{ parentSpanId }}',
'{{ displayName }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ attributes }}',
'{{ stackTrace }}',
'{{ timeEvents }}',
'{{ links }}',
'{{ status }}',
{{ sameProcessAsParentSpan }},
{{ childSpanCount }},
'{{ spanKind }}',
'{{ projectsId }}',
'{{ tracesId }}',
'{{ spansId }}'
RETURNING
name,
attributes,
childSpanCount,
displayName,
endTime,
links,
parentSpanId,
sameProcessAsParentSpan,
spanId,
spanKind,
stackTrace,
startTime,
status,
timeEvents
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: spans_span
  props:
    - name: projectsId
      value: string
      description: Required parameter for the spans_span resource.
    - name: tracesId
      value: string
      description: Required parameter for the spans_span resource.
    - name: spansId
      value: string
      description: Required parameter for the spans_span resource.
    - name: name
      value: string
      description: >
        Required. The resource name of the span in the following format: * `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .
        
    - name: spanId
      value: string
      description: >
        Required. The `[SPAN_ID]` portion of the span's resource name.
        
    - name: parentSpanId
      value: string
      description: >
        The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.
        
    - name: displayName
      value: object
      description: >
        Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.
        
    - name: startTime
      value: string
      description: >
        Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.
        
    - name: endTime
      value: string
      description: >
        Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.
        
    - name: attributes
      value: object
      description: >
        A set of attributes on the span. You can have up to 32 attributes per span.
        
    - name: stackTrace
      value: object
      description: >
        Stack trace captured at the start of the span.
        
    - name: timeEvents
      value: object
      description: >
        A set of time events. You can have up to 32 annotations and 128 message events per span.
        
    - name: links
      value: object
      description: >
        Links associated with the span. You can have up to 128 links per Span.
        
    - name: status
      value: object
      description: >
        Optional. The final status for this span.
        
    - name: sameProcessAsParentSpan
      value: boolean
      description: >
        Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.
        
    - name: childSpanCount
      value: integer
      description: >
        Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
        
    - name: spanKind
      value: string
      description: >
        Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
        
      valid_values: ['SPAN_KIND_UNSPECIFIED', 'INTERNAL', 'SERVER', 'CLIENT', 'PRODUCER', 'CONSUMER']
```
</TabItem>
</Tabs>
