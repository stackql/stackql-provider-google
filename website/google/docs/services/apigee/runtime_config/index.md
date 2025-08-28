--- 
title: runtime_config
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_config
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

Creates, updates, deletes, gets or lists a <code>runtime_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>runtime_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.runtime_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_runtime_config"
    values={[
        { label: 'organizations_get_runtime_config', value: 'organizations_get_runtime_config' }
    ]}
>
<TabItem value="organizations_get_runtime_config">

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
    <td>Name of the resource in the following format: `organizations/&#123;org&#125;/runtimeConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsBucket" /></td>
    <td><code>string</code></td>
    <td>Cloud Storage bucket used for uploading Analytics records.</td>
</tr>
<tr>
    <td><CopyableCode code="tenantProjectId" /></td>
    <td><code>string</code></td>
    <td>Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet.</td>
</tr>
<tr>
    <td><CopyableCode code="traceBucket" /></td>
    <td><code>string</code></td>
    <td>Cloud Storage bucket used for uploading Trace records.</td>
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
    <td><a href="#organizations_get_runtime_config"><CopyableCode code="organizations_get_runtime_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Get runtime config for an organization.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get_runtime_config"
    values={[
        { label: 'organizations_get_runtime_config', value: 'organizations_get_runtime_config' }
    ]}
>
<TabItem value="organizations_get_runtime_config">

Get runtime config for an organization.

```sql
SELECT
name,
analyticsBucket,
tenantProjectId,
traceBucket
FROM google.apigee.runtime_config
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>
