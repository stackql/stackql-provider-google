--- 
title: environments_environment
hide_title: false
hide_table_of_contents: false
keywords:
  - environments_environment
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

Creates, updates, deletes, gets or lists an <code>environments_environment</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments_environment</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.environments_environment" /></td></tr>
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
    <td><a href="#organizations_environments_update_environment"><CopyableCode code="organizations_environments_update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.</td>
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
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_update_environment"
    values={[
        { label: 'organizations_environments_update_environment', value: 'organizations_environments_update_environment' }
    ]}
>
<TabItem value="organizations_environments_update_environment">

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](get). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

```sql
UPDATE google.apigee.environments_environment
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__properties = '{{ properties }}',
data__displayName = '{{ displayName }}',
data__deploymentType = '{{ deploymentType }}',
data__apiProxyType = '{{ apiProxyType }}',
data__nodeConfig = '{{ nodeConfig }}',
data__forwardProxyUri = '{{ forwardProxyUri }}',
data__type = '{{ type }}',
data__hasAttachedFlowHooks = {{ hasAttachedFlowHooks }},
data__clientIpResolutionConfig = '{{ clientIpResolutionConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
RETURNING
name,
apiProxyType,
clientIpResolutionConfig,
createdAt,
deploymentType,
description,
displayName,
forwardProxyUri,
hasAttachedFlowHooks,
lastModifiedAt,
nodeConfig,
properties,
state,
type;
```
</TabItem>
</Tabs>
