--- 
title: overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - overrides
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

Creates, updates, deletes, gets or lists an <code>overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>overrides</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_trace_config_overrides_get"
    values={[
        { label: 'organizations_environments_trace_config_overrides_get', value: 'organizations_environments_trace_config_overrides_get' },
        { label: 'organizations_environments_trace_config_overrides_list', value: 'organizations_environments_trace_config_overrides_list' }
    ]}
>
<TabItem value="organizations_environments_trace_config_overrides_get">

A representation of a configuration override.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>ID of the trace configuration override specified as a system-generated UUID.</td>
</tr>
<tr>
    <td><CopyableCode code="apiProxy" /></td>
    <td><code>string</code></td>
    <td>ID of the API proxy that will have its trace configuration overridden.</td>
</tr>
<tr>
    <td><CopyableCode code="samplingConfig" /></td>
    <td><code>object</code></td>
    <td>Trace configuration to override. (id: GoogleCloudApigeeV1TraceSamplingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_trace_config_overrides_list">

Response for ListTraceConfigOverrides.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token value that can be passed as `page_token` to retrieve the next page of content.</td>
</tr>
<tr>
    <td><CopyableCode code="traceConfigOverrides" /></td>
    <td><code>array</code></td>
    <td>List all trace configuration overrides in an environment.</td>
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
    <td><a href="#organizations_environments_trace_config_overrides_get"><CopyableCode code="organizations_environments_trace_config_overrides_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-overridesId"><code>overridesId</code></a></td>
    <td></td>
    <td>Gets a trace configuration override.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_trace_config_overrides_list"><CopyableCode code="organizations_environments_trace_config_overrides_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all of the distributed trace configuration overrides in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_trace_config_overrides_create"><CopyableCode code="organizations_environments_trace_config_overrides_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_trace_config_overrides_patch"><CopyableCode code="organizations_environments_trace_config_overrides_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-overridesId"><code>overridesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_trace_config_overrides_delete"><CopyableCode code="organizations_environments_trace_config_overrides_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-overridesId"><code>overridesId</code></a></td>
    <td></td>
    <td>Deletes a distributed trace configuration override.</td>
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
<tr id="parameter-overridesId">
    <td><CopyableCode code="overridesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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
    defaultValue="organizations_environments_trace_config_overrides_get"
    values={[
        { label: 'organizations_environments_trace_config_overrides_get', value: 'organizations_environments_trace_config_overrides_get' },
        { label: 'organizations_environments_trace_config_overrides_list', value: 'organizations_environments_trace_config_overrides_list' }
    ]}
>
<TabItem value="organizations_environments_trace_config_overrides_get">

Gets a trace configuration override.

```sql
SELECT
name,
apiProxy,
samplingConfig
FROM google.apigee.overrides
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND overridesId = '{{ overridesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_trace_config_overrides_list">

Lists all of the distributed trace configuration overrides in an environment.

```sql
SELECT
nextPageToken,
traceConfigOverrides
FROM google.apigee.overrides
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_trace_config_overrides_create"
    values={[
        { label: 'organizations_environments_trace_config_overrides_create', value: 'organizations_environments_trace_config_overrides_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_trace_config_overrides_create">

Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.

```sql
INSERT INTO google.apigee.overrides (
data__name,
data__apiProxy,
data__samplingConfig,
organizationsId,
environmentsId
)
SELECT 
'{{ name }}',
'{{ apiProxy }}',
'{{ samplingConfig }}',
'{{ organizationsId }}',
'{{ environmentsId }}'
RETURNING
name,
apiProxy,
samplingConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: overrides
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the overrides resource.
    - name: environmentsId
      value: string
      description: Required parameter for the overrides resource.
    - name: name
      value: string
      description: >
        ID of the trace configuration override specified as a system-generated UUID.
        
    - name: apiProxy
      value: string
      description: >
        ID of the API proxy that will have its trace configuration overridden.
        
    - name: samplingConfig
      value: object
      description: >
        Trace configuration to override.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_trace_config_overrides_patch"
    values={[
        { label: 'organizations_environments_trace_config_overrides_patch', value: 'organizations_environments_trace_config_overrides_patch' }
    ]}
>
<TabItem value="organizations_environments_trace_config_overrides_patch">

Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

```sql
UPDATE google.apigee.overrides
SET 
data__name = '{{ name }}',
data__apiProxy = '{{ apiProxy }}',
data__samplingConfig = '{{ samplingConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND overridesId = '{{ overridesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
apiProxy,
samplingConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_trace_config_overrides_delete"
    values={[
        { label: 'organizations_environments_trace_config_overrides_delete', value: 'organizations_environments_trace_config_overrides_delete' }
    ]}
>
<TabItem value="organizations_environments_trace_config_overrides_delete">

Deletes a distributed trace configuration override.

```sql
DELETE FROM google.apigee.overrides
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND overridesId = '{{ overridesId }}' --required;
```
</TabItem>
</Tabs>
