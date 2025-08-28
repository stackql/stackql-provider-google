--- 
title: flowhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - flowhooks
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

Creates, updates, deletes, gets or lists a <code>flowhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>flowhooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.flowhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_flowhooks_get"
    values={[
        { label: 'organizations_environments_flowhooks_get', value: 'organizations_environments_flowhooks_get' }
    ]}
>
<TabItem value="organizations_environments_flowhooks_get">

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
    <td><CopyableCode code="continueOnError" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the flow hook.</td>
</tr>
<tr>
    <td><CopyableCode code="flowHookPoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedFlow" /></td>
    <td><code>string</code></td>
    <td>Shared flow attached to this flow hook, or empty if there is none attached.</td>
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
    <td><a href="#organizations_environments_flowhooks_get"><CopyableCode code="organizations_environments_flowhooks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-flowhooksId"><code>flowhooksId</code></a></td>
    <td></td>
    <td>Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_flowhooks_attach_shared_flow_to_flow_hook"><CopyableCode code="organizations_environments_flowhooks_attach_shared_flow_to_flow_hook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-flowhooksId"><code>flowhooksId</code></a></td>
    <td></td>
    <td>Attaches a shared flow to a flow hook.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_flowhooks_detach_shared_flow_from_flow_hook"><CopyableCode code="organizations_environments_flowhooks_detach_shared_flow_from_flow_hook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-flowhooksId"><code>flowhooksId</code></a></td>
    <td></td>
    <td>Detaches a shared flow from a flow hook.</td>
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
<tr id="parameter-flowhooksId">
    <td><CopyableCode code="flowhooksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_flowhooks_get"
    values={[
        { label: 'organizations_environments_flowhooks_get', value: 'organizations_environments_flowhooks_get' }
    ]}
>
<TabItem value="organizations_environments_flowhooks_get">

Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.

```sql
SELECT
continueOnError,
description,
flowHookPoint,
sharedFlow
FROM google.apigee.flowhooks
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND flowhooksId = '{{ flowhooksId }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_flowhooks_attach_shared_flow_to_flow_hook"
    values={[
        { label: 'organizations_environments_flowhooks_attach_shared_flow_to_flow_hook', value: 'organizations_environments_flowhooks_attach_shared_flow_to_flow_hook' },
        { label: 'organizations_environments_flowhooks_detach_shared_flow_from_flow_hook', value: 'organizations_environments_flowhooks_detach_shared_flow_from_flow_hook' }
    ]}
>
<TabItem value="organizations_environments_flowhooks_attach_shared_flow_to_flow_hook">

Attaches a shared flow to a flow hook.

```sql
EXEC google.apigee.flowhooks.organizations_environments_flowhooks_attach_shared_flow_to_flow_hook 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@flowhooksId='{{ flowhooksId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"sharedFlow": "{{ sharedFlow }}", 
"continueOnError": {{ continueOnError }}
}';
```
</TabItem>
<TabItem value="organizations_environments_flowhooks_detach_shared_flow_from_flow_hook">

Detaches a shared flow from a flow hook.

```sql
EXEC google.apigee.flowhooks.organizations_environments_flowhooks_detach_shared_flow_from_flow_hook 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@flowhooksId='{{ flowhooksId }}' --required;
```
</TabItem>
</Tabs>
