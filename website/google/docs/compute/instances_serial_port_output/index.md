--- 
title: instances_serial_port_output
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_serial_port_output
  - compute
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

Creates, updates, deletes, gets or lists an <code>instances_serial_port_output</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_serial_port_output</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_serial_port_output" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_serial_port_output"
    values={[
        { label: 'get_serial_port_output', value: 'get_serial_port_output' }
    ]}
>
<TabItem value="get_serial_port_output">

An instance serial console output.

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
    <td><CopyableCode code="contents" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The contents of the console output.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#serialPortOutput for serial port output. (default: compute#serialPortOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] The position of the next byte of content, regardless of whether the content exists, following the output returned in the `contents` property. Use this value in the next request as the start parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string (int64)</code></td>
    <td>The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output exceeds the size of the buffer (1 MB), older output is overwritten by newer content. The output start value will indicate the byte position of the output that was returned, which might be different than the `start` value that was specified in the request.</td>
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
    <td><a href="#get_serial_port_output"><CopyableCode code="get_serial_port_output" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-port"><code>port</code></a>, <a href="#parameter-start"><code>start</code></a></td>
    <td>Returns the last 1 MB of serial port output from the specified instance.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-port">
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_serial_port_output"
    values={[
        { label: 'get_serial_port_output', value: 'get_serial_port_output' }
    ]}
>
<TabItem value="get_serial_port_output">

Returns the last 1 MB of serial port output from the specified instance.

```sql
SELECT
contents,
kind,
next,
selfLink,
start
FROM google.compute.instances_serial_port_output
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instance = '{{ instance }}' -- required
AND port = '{{ port }}'
AND start = '{{ start }}';
```
</TabItem>
</Tabs>
