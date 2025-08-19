--- 
title: suspensions
hide_title: false
hide_table_of_contents: false
keywords:
  - suspensions
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

Creates, updates, deletes, gets or lists a <code>suspensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>suspensions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.suspensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_integrations_executions_suspensions_list"
    values={[
        { label: 'projects_locations_products_integrations_executions_suspensions_list', value: 'projects_locations_products_integrations_executions_suspensions_list' },
        { label: 'projects_locations_integrations_executions_suspensions_list', value: 'projects_locations_integrations_executions_suspensions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_suspensions_list">

Response for Suspensions.ListSuspensions.

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
    <td>Token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensions" /></td>
    <td><code>array</code></td>
    <td>The suspensions for the relevant execution which the caller has permissions to view and resolve.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_executions_suspensions_list">

Response for Suspensions.ListSuspensions.

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
    <td>Token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensions" /></td>
    <td><code>array</code></td>
    <td>The suspensions for the relevant execution which the caller has permissions to view and resolve.</td>
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
    <td><a href="#projects_locations_products_integrations_executions_suspensions_list"><CopyableCode code="projects_locations_products_integrations_executions_suspensions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_suspensions_list"><CopyableCode code="projects_locations_integrations_executions_suspensions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_executions_suspensions_resolve"><CopyableCode code="projects_locations_products_integrations_executions_suspensions_resolve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-suspensionsId"><code>suspensionsId</code></a></td>
    <td></td>
    <td>* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_executions_suspensions_lift"><CopyableCode code="projects_locations_products_integrations_executions_suspensions_lift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-suspensionsId"><code>suspensionsId</code></a></td>
    <td></td>
    <td>* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_suspensions_resolve"><CopyableCode code="projects_locations_integrations_executions_suspensions_resolve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-suspensionsId"><code>suspensionsId</code></a></td>
    <td></td>
    <td>* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_suspensions_lift"><CopyableCode code="projects_locations_integrations_executions_suspensions_lift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-suspensionsId"><code>suspensionsId</code></a></td>
    <td></td>
    <td>* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-suspensionsId">
    <td><CopyableCode code="suspensionsId" /></td>
    <td><code>string</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_products_integrations_executions_suspensions_list"
    values={[
        { label: 'projects_locations_products_integrations_executions_suspensions_list', value: 'projects_locations_products_integrations_executions_suspensions_list' },
        { label: 'projects_locations_integrations_executions_suspensions_list', value: 'projects_locations_integrations_executions_suspensions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_suspensions_list">

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

```sql
SELECT
nextPageToken,
suspensions
FROM google.integrations.suspensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_suspensions_list">

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

```sql
SELECT
nextPageToken,
suspensions
FROM google.integrations.suspensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_products_integrations_executions_suspensions_resolve"
    values={[
        { label: 'projects_locations_products_integrations_executions_suspensions_resolve', value: 'projects_locations_products_integrations_executions_suspensions_resolve' },
        { label: 'projects_locations_products_integrations_executions_suspensions_lift', value: 'projects_locations_products_integrations_executions_suspensions_lift' },
        { label: 'projects_locations_integrations_executions_suspensions_resolve', value: 'projects_locations_integrations_executions_suspensions_resolve' },
        { label: 'projects_locations_integrations_executions_suspensions_lift', value: 'projects_locations_integrations_executions_suspensions_lift' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_suspensions_resolve">

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

```sql
EXEC google.integrations.suspensions.projects_locations_products_integrations_executions_suspensions_resolve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@suspensionsId='{{ suspensionsId }}' --required 
@@json=
'{
"suspension": "{{ suspension }}"
}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_executions_suspensions_lift">

* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

```sql
EXEC google.integrations.suspensions.projects_locations_products_integrations_executions_suspensions_lift 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@suspensionsId='{{ suspensionsId }}' --required 
@@json=
'{
"suspensionResult": "{{ suspensionResult }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_suspensions_resolve">

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

```sql
EXEC google.integrations.suspensions.projects_locations_integrations_executions_suspensions_resolve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@suspensionsId='{{ suspensionsId }}' --required 
@@json=
'{
"suspension": "{{ suspension }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_suspensions_lift">

* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

```sql
EXEC google.integrations.suspensions.projects_locations_integrations_executions_suspensions_lift 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@suspensionsId='{{ suspensionsId }}' --required 
@@json=
'{
"suspensionResult": "{{ suspensionResult }}"
}';
```
</TabItem>
</Tabs>
