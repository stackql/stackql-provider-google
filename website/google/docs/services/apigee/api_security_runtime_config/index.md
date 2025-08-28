--- 
title: api_security_runtime_config
hide_title: false
hide_table_of_contents: false
keywords:
  - api_security_runtime_config
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

Creates, updates, deletes, gets or lists an <code>api_security_runtime_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>api_security_runtime_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.api_security_runtime_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_api_security_runtime_config"
    values={[
        { label: 'organizations_environments_get_api_security_runtime_config', value: 'organizations_environments_get_api_security_runtime_config' }
    ]}
>
<TabItem value="organizations_environments_get_api_security_runtime_config">

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
    <td>Name of the environment API Security Runtime configuration resource. Format: `organizations/&#123;org&#125;/environments/&#123;env&#125;/apiSecurityRuntimeConfig`</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>array</code></td>
    <td>A list of up to 5 Cloud Storage Blobs that contain SecurityActions.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time that the API Security Runtime configuration was updated.</td>
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
    <td><a href="#organizations_environments_get_api_security_runtime_config"><CopyableCode code="organizations_environments_get_api_security_runtime_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_get_api_security_runtime_config"
    values={[
        { label: 'organizations_environments_get_api_security_runtime_config', value: 'organizations_environments_get_api_security_runtime_config' }
    ]}
>
<TabItem value="organizations_environments_get_api_security_runtime_config">

Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.

```sql
SELECT
name,
location,
revisionId,
uid,
updateTime
FROM google.apigee.api_security_runtime_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>
