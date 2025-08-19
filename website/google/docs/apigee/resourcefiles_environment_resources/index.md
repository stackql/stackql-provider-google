--- 
title: resourcefiles_environment_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resourcefiles_environment_resources
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

Creates, updates, deletes, gets or lists a <code>resourcefiles_environment_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resourcefiles_environment_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.resourcefiles_environment_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_resourcefiles_list_environment_resources"
    values={[
        { label: 'organizations_environments_resourcefiles_list_environment_resources', value: 'organizations_environments_resourcefiles_list_environment_resources' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_list_environment_resources">

Response for ListEnvironmentResources

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
    <td><CopyableCode code="resourceFile" /></td>
    <td><code>array</code></td>
    <td>List of resources files.</td>
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
    <td><a href="#organizations_environments_resourcefiles_list_environment_resources"><CopyableCode code="organizations_environments_resourcefiles_list_environment_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_resourcefiles_list_environment_resources"
    values={[
        { label: 'organizations_environments_resourcefiles_list_environment_resources', value: 'organizations_environments_resourcefiles_list_environment_resources' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_list_environment_resources">

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
SELECT
resourceFile
FROM google.apigee.resourcefiles_environment_resources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND type = '{{ type }}' -- required;
```
</TabItem>
</Tabs>
