--- 
title: backend_services_health
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_services_health
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

Creates, updates, deletes, gets or lists a <code>backend_services_health</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backend_services_health</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.backend_services_health" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

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
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Metadata defined as annotations on the network endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="healthStatus" /></td>
    <td><code>array</code></td>
    <td>Health state of the backend instances or endpoints in requested instance or network endpoint group, determined based on configured health checks.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services. (default: compute#backendServiceGroupHealth)</td>
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
    <td><a href="#get_health"><CopyableCode code="get_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td></td>
    <td>Gets the most recent health check results for this BackendService. Example request body: &#123; "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" &#125;</td>
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
<tr id="parameter-backendService">
    <td><CopyableCode code="backendService" /></td>
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
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

Gets the most recent health check results for this BackendService. Example request body: &#123; "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" &#125;

```sql
SELECT
annotations,
healthStatus,
kind
FROM google.compute.backend_services_health
WHERE project = '{{ project }}' -- required
AND backendService = '{{ backendService }}' -- required;
```
</TabItem>
</Tabs>
