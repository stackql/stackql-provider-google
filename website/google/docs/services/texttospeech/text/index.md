--- 
title: text
hide_title: false
hide_table_of_contents: false
keywords:
  - text
  - texttospeech
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

Creates, updates, deletes, gets or lists a <code>text</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>text</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.texttospeech.text" /></td></tr>
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
    <td><a href="#synthesize"><CopyableCode code="synthesize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Synthesizes speech synchronously: receive results after all text input has been processed.</td>
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
    defaultValue="synthesize"
    values={[
        { label: 'synthesize', value: 'synthesize' }
    ]}
>
<TabItem value="synthesize">

Synthesizes speech synchronously: receive results after all text input has been processed.

```sql
EXEC google.texttospeech.text.synthesize 
@@json=
'{
"input": "{{ input }}", 
"voice": "{{ voice }}", 
"audioConfig": "{{ audioConfig }}", 
"advancedVoiceOptions": "{{ advancedVoiceOptions }}"
}';
```
</TabItem>
</Tabs>
