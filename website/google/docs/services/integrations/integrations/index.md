--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_integrations_list"
    values={[
        { label: 'projects_locations_products_integrations_list', value: 'projects_locations_products_integrations_list' },
        { label: 'projects_locations_integrations_list', value: 'projects_locations_integrations_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Required. If any integration version is published.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>Output only. The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Required. The last modifier of this integration</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Required. If any integration version is published.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>Output only. The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Required. The last modifier of this integration</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
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
    <td><a href="#projects_locations_products_integrations_list"><CopyableCode code="projects_locations_products_integrations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns the list of all integrations in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_list"><CopyableCode code="projects_locations_integrations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns the list of all integrations in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_delete"><CopyableCode code="projects_locations_integrations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Delete the selected integration and all versions inside</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_execute"><CopyableCode code="projects_locations_products_integrations_execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_schedule"><CopyableCode code="projects_locations_products_integrations_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_test"><CopyableCode code="projects_locations_products_integrations_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Execute the integration in draft state</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_execute"><CopyableCode code="projects_locations_integrations_execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_schedule"><CopyableCode code="projects_locations_integrations_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_test"><CopyableCode code="projects_locations_integrations_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Execute the integration in draft state</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_search"><CopyableCode code="projects_locations_integrations_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-enableNaturalLanguageQueryUnderstanding"><code>enableNaturalLanguageQueryUnderstanding</code></a></td>
    <td>Searches and returns the list of integrations in the specified project.</td>
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
<tr id="parameter-integrationsId">
    <td><CopyableCode code="integrationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enableNaturalLanguageQueryUnderstanding">
    <td><CopyableCode code="enableNaturalLanguageQueryUnderstanding" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_products_integrations_list"
    values={[
        { label: 'projects_locations_products_integrations_list', value: 'projects_locations_products_integrations_list' },
        { label: 'projects_locations_integrations_list', value: 'projects_locations_integrations_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_list">

Returns the list of all integrations in the specified project.

```sql
SELECT
name,
active,
createTime,
creatorEmail,
description,
lastModifierEmail,
updateTime
FROM google.integrations.integrations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_list">

Returns the list of all integrations in the specified project.

```sql
SELECT
name,
active,
createTime,
creatorEmail,
description,
lastModifierEmail,
updateTime
FROM google.integrations.integrations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_integrations_delete"
    values={[
        { label: 'projects_locations_integrations_delete', value: 'projects_locations_integrations_delete' }
    ]}
>
<TabItem value="projects_locations_integrations_delete">

Delete the selected integration and all versions inside

```sql
DELETE FROM google.integrations.integrations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_products_integrations_execute"
    values={[
        { label: 'projects_locations_products_integrations_execute', value: 'projects_locations_products_integrations_execute' },
        { label: 'projects_locations_products_integrations_schedule', value: 'projects_locations_products_integrations_schedule' },
        { label: 'projects_locations_products_integrations_test', value: 'projects_locations_products_integrations_test' },
        { label: 'projects_locations_integrations_execute', value: 'projects_locations_integrations_execute' },
        { label: 'projects_locations_integrations_schedule', value: 'projects_locations_integrations_schedule' },
        { label: 'projects_locations_integrations_test', value: 'projects_locations_integrations_test' },
        { label: 'projects_locations_integrations_search', value: 'projects_locations_integrations_search' }
    ]}
>
<TabItem value="projects_locations_products_integrations_execute">

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

```sql
EXEC google.integrations.integrations.projects_locations_products_integrations_execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"triggerId": "{{ triggerId }}", 
"parameters": "{{ parameters }}", 
"doNotPropagateError": {{ doNotPropagateError }}, 
"parameterEntries": "{{ parameterEntries }}", 
"requestId": "{{ requestId }}", 
"executionId": "{{ executionId }}", 
"inputParameters": "{{ inputParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_schedule">

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

```sql
EXEC google.integrations.integrations.projects_locations_products_integrations_schedule 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"triggerId": "{{ triggerId }}", 
"parameters": "{{ parameters }}", 
"scheduleTime": "{{ scheduleTime }}", 
"requestId": "{{ requestId }}", 
"parameterEntries": "{{ parameterEntries }}", 
"inputParameters": "{{ inputParameters }}", 
"userGeneratedExecutionId": "{{ userGeneratedExecutionId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_test">

Execute the integration in draft state

```sql
EXEC google.integrations.integrations.projects_locations_products_integrations_test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"integrationVersion": "{{ integrationVersion }}", 
"parameters": "{{ parameters }}", 
"triggerId": "{{ triggerId }}", 
"clientId": "{{ clientId }}", 
"testMode": {{ testMode }}, 
"deadlineSecondsTime": "{{ deadlineSecondsTime }}", 
"inputParameters": "{{ inputParameters }}", 
"configParameters": "{{ configParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_execute">

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

```sql
EXEC google.integrations.integrations.projects_locations_integrations_execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"triggerId": "{{ triggerId }}", 
"parameters": "{{ parameters }}", 
"doNotPropagateError": {{ doNotPropagateError }}, 
"parameterEntries": "{{ parameterEntries }}", 
"requestId": "{{ requestId }}", 
"executionId": "{{ executionId }}", 
"inputParameters": "{{ inputParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_schedule">

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

```sql
EXEC google.integrations.integrations.projects_locations_integrations_schedule 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"triggerId": "{{ triggerId }}", 
"parameters": "{{ parameters }}", 
"scheduleTime": "{{ scheduleTime }}", 
"requestId": "{{ requestId }}", 
"parameterEntries": "{{ parameterEntries }}", 
"inputParameters": "{{ inputParameters }}", 
"userGeneratedExecutionId": "{{ userGeneratedExecutionId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_test">

Execute the integration in draft state

```sql
EXEC google.integrations.integrations.projects_locations_integrations_test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"integrationVersion": "{{ integrationVersion }}", 
"parameters": "{{ parameters }}", 
"triggerId": "{{ triggerId }}", 
"clientId": "{{ clientId }}", 
"testMode": {{ testMode }}, 
"deadlineSecondsTime": "{{ deadlineSecondsTime }}", 
"inputParameters": "{{ inputParameters }}", 
"configParameters": "{{ configParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_search">

Searches and returns the list of integrations in the specified project.

```sql
EXEC google.integrations.integrations.projects_locations_integrations_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@query='{{ query }}', 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@enableNaturalLanguageQueryUnderstanding={{ enableNaturalLanguageQueryUnderstanding }};
```
</TabItem>
</Tabs>
