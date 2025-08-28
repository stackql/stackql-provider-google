--- 
title: envgroup_config
hide_title: false
hide_table_of_contents: false
keywords:
  - envgroup_config
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

Creates, updates, deletes, gets or lists an <code>envgroup_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>envgroup_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.envgroup_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_envgroups_get_deployed_ingress_config"
    values={[
        { label: 'organizations_envgroups_get_deployed_ingress_config', value: 'organizations_envgroups_get_deployed_ingress_config' }
    ]}
>
<TabItem value="organizations_envgroups_get_deployed_ingress_config">

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
    <td>Name of the environment group in the following format: `organizations/&#123;org&#125;/envgroups/&#123;envgroup&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointChainingRules" /></td>
    <td><code>array</code></td>
    <td>A list of proxies in each deployment group for proxy chaining calls.</td>
</tr>
<tr>
    <td><CopyableCode code="hostnames" /></td>
    <td><code>array</code></td>
    <td>Host names for the environment group.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="routingRules" /></td>
    <td><code>array</code></td>
    <td>Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>A unique id for the environment group config that will only change if the environment group is deleted and recreated.</td>
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
    <td><a href="#organizations_envgroups_get_deployed_ingress_config"><CopyableCode code="organizations_envgroups_get_deployed_ingress_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-envgroupsId"><code>envgroupsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the deployed ingress configuration for an environment group.</td>
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
<tr id="parameter-envgroupsId">
    <td><CopyableCode code="envgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
    defaultValue="organizations_envgroups_get_deployed_ingress_config"
    values={[
        { label: 'organizations_envgroups_get_deployed_ingress_config', value: 'organizations_envgroups_get_deployed_ingress_config' }
    ]}
>
<TabItem value="organizations_envgroups_get_deployed_ingress_config">

Gets the deployed ingress configuration for an environment group.

```sql
SELECT
name,
endpointChainingRules,
hostnames,
location,
revisionId,
routingRules,
uid
FROM google.apigee.envgroup_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND envgroupsId = '{{ envgroupsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
</Tabs>
