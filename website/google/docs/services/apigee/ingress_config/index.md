--- 
title: ingress_config
hide_title: false
hide_table_of_contents: false
keywords:
  - ingress_config
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

Creates, updates, deletes, gets or lists an <code>ingress_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ingress_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.ingress_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_deployed_ingress_config"
    values={[
        { label: 'organizations_get_deployed_ingress_config', value: 'organizations_get_deployed_ingress_config' }
    ]}
>
<TabItem value="organizations_get_deployed_ingress_config">

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
    <td>Name of the resource in the following format: `organizations/&#123;org&#125;/deployedIngressConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentGroups" /></td>
    <td><code>array</code></td>
    <td>List of environment groups in the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time at which the IngressConfig revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>A unique id for the ingress config that will only change if the organization is deleted and recreated.</td>
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
    <td><a href="#organizations_get_deployed_ingress_config"><CopyableCode code="organizations_get_deployed_ingress_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the deployed ingress configuration for an organization.</td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get_deployed_ingress_config"
    values={[
        { label: 'organizations_get_deployed_ingress_config', value: 'organizations_get_deployed_ingress_config' }
    ]}
>
<TabItem value="organizations_get_deployed_ingress_config">

Gets the deployed ingress configuration for an organization.

```sql
SELECT
name,
environmentGroups,
revisionCreateTime,
revisionId,
uid
FROM google.apigee.ingress_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
</Tabs>
