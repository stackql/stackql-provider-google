--- 
title: speech
hide_title: false
hide_table_of_contents: false
keywords:
  - speech
  - speech
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

Creates, updates, deletes, gets or lists a <code>speech</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>speech</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.speech.speech" /></td></tr>
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
    <td><a href="#recognize"><CopyableCode code="recognize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Performs synchronous speech recognition: receive results after all audio has been sent and processed.</td>
</tr>
<tr>
    <td><a href="#longrunningrecognize"><CopyableCode code="longrunningrecognize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="recognize"
    values={[
        { label: 'recognize', value: 'recognize' },
        { label: 'longrunningrecognize', value: 'longrunningrecognize' }
    ]}
>
<TabItem value="recognize">

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

```sql
EXEC google.speech.speech.recognize 
@@json=
'{
"config": "{{ config }}", 
"audio": "{{ audio }}"
}';
```
</TabItem>
<TabItem value="longrunningrecognize">

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).

```sql
EXEC google.speech.speech.longrunningrecognize 
@@json=
'{
"config": "{{ config }}", 
"audio": "{{ audio }}", 
"outputConfig": "{{ outputConfig }}"
}';
```
</TabItem>
</Tabs>
