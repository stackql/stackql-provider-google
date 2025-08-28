--- 
title: interconnects_macsec_config
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnects_macsec_config
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

Creates, updates, deletes, gets or lists an <code>interconnects_macsec_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>interconnects_macsec_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnects_macsec_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_macsec_config"
    values={[
        { label: 'get_macsec_config', value: 'get_macsec_config' }
    ]}
>
<TabItem value="get_macsec_config">

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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>end_interface: MixerGetResponseWithEtagBuilder</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>MACsec configuration information for the Interconnect connection. Contains the generated Connectivity Association Key Name (CKN) and the key (CAK) for this Interconnect connection. (id: InterconnectMacsecConfig)</td>
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
    <td><a href="#get_macsec_config"><CopyableCode code="get_macsec_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td></td>
    <td>Returns the interconnectMacsecConfig for the specified Interconnect.</td>
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
<tr id="parameter-interconnect">
    <td><CopyableCode code="interconnect" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_macsec_config"
    values={[
        { label: 'get_macsec_config', value: 'get_macsec_config' }
    ]}
>
<TabItem value="get_macsec_config">

Returns the interconnectMacsecConfig for the specified Interconnect.

```sql
SELECT
etag,
result
FROM google.compute.interconnects_macsec_config
WHERE project = '{{ project }}' -- required
AND interconnect = '{{ interconnect }}' -- required;
```
</TabItem>
</Tabs>
