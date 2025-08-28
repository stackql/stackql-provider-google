--- 
title: environments_trace_config
hide_title: false
hide_table_of_contents: false
keywords:
  - environments_trace_config
  - apigee
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

Creates, updates, deletes, gets or lists an <code>environments_trace_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments_trace_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.environments_trace_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_trace_config"
    values={[
        { label: 'organizations_environments_get_trace_config', value: 'organizations_environments_get_trace_config' }
    ]}
>
<TabItem value="organizations_environments_get_trace_config">

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
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Required. Endpoint of the exporter.</td>
</tr>
<tr>
    <td><CopyableCode code="exporter" /></td>
    <td><code>string</code></td>
    <td>Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.</td>
</tr>
<tr>
    <td><CopyableCode code="samplingConfig" /></td>
    <td><code>object</code></td>
    <td>Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API. (id: GoogleCloudApigeeV1TraceSamplingConfig)</td>
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
    <td><a href="#organizations_environments_get_trace_config"><CopyableCode code="organizations_environments_get_trace_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Get distributed trace configuration in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_update_trace_config"><CopyableCode code="organizations_environments_update_trace_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_get_trace_config"
    values={[
        { label: 'organizations_environments_get_trace_config', value: 'organizations_environments_get_trace_config' }
    ]}
>
<TabItem value="organizations_environments_get_trace_config">

Get distributed trace configuration in an environment.

```sql
SELECT
endpoint,
exporter,
samplingConfig
FROM google.apigee.environments_trace_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_update_trace_config"
    values={[
        { label: 'organizations_environments_update_trace_config', value: 'organizations_environments_update_trace_config' }
    ]}
>
<TabItem value="organizations_environments_update_trace_config">

Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

```sql
UPDATE google.apigee.environments_trace_config
SET 
data__exporter = '{{ exporter }}',
data__endpoint = '{{ endpoint }}',
data__samplingConfig = '{{ samplingConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
endpoint,
exporter,
samplingConfig;
```
</TabItem>
</Tabs>
