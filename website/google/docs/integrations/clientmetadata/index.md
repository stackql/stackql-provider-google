--- 
title: clientmetadata
hide_title: false
hide_table_of_contents: false
keywords:
  - clientmetadata
  - integrations
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

Creates, updates, deletes, gets or lists a <code>clientmetadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clientmetadata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.clientmetadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get_clientmetadata"
    values={[
        { label: 'projects_get_clientmetadata', value: 'projects_get_clientmetadata' }
    ]}
>
<TabItem value="projects_get_clientmetadata">

Response for the GetClientMetadata rpc

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
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. Required: The client configuration that was requested (id: GoogleCloudIntegrationsV1alphaProjectProperties)</td>
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
    <td><a href="#projects_get_clientmetadata"><CopyableCode code="projects_get_clientmetadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the metadata info for the requested client</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_get_clientmetadata"
    values={[
        { label: 'projects_get_clientmetadata', value: 'projects_get_clientmetadata' }
    ]}
>
<TabItem value="projects_get_clientmetadata">

Gets the metadata info for the requested client

```sql
SELECT
properties
FROM google.integrations.clientmetadata
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
</Tabs>
