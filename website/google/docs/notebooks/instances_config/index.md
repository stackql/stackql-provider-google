--- 
title: instances_config
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_config
  - notebooks
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

Creates, updates, deletes, gets or lists an <code>instances_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.notebooks.instances_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' }
    ]}
>
<TabItem value="get_config">

Response for getting WbI configurations in a location

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
    <td><CopyableCode code="availableImages" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of available images to create a WbI.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultValues" /></td>
    <td><code>object</code></td>
    <td>Output only. The default values for configuration. (id: DefaultValues)</td>
</tr>
<tr>
    <td><CopyableCode code="disableWorkbenchLegacyCreation" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Flag to disable the creation of legacy Workbench notebooks (User-managed notebooks and Google-managed notebooks).</td>
</tr>
<tr>
    <td><CopyableCode code="supportedValues" /></td>
    <td><code>object</code></td>
    <td>Output only. The supported values for configuration. (id: SupportedValues)</td>
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
    <td><a href="#get_config"><CopyableCode code="get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Returns various configuration parameters.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' }
    ]}
>
<TabItem value="get_config">

Returns various configuration parameters.

```sql
SELECT
availableImages,
defaultValues,
disableWorkbenchLegacyCreation,
supportedValues
FROM google.notebooks.instances_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>
