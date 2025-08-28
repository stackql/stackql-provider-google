--- 
title: addons_config
hide_title: false
hide_table_of_contents: false
keywords:
  - addons_config
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

Creates, updates, deletes, gets or lists an <code>addons_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>addons_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.addons_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_addons_config"
    values={[
        { label: 'organizations_environments_get_addons_config', value: 'organizations_environments_get_addons_config' }
    ]}
>
<TabItem value="organizations_environments_get_addons_config">

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
    <td><CopyableCode code="advancedApiOpsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Advanced API Ops add-on. (id: GoogleCloudApigeeV1AdvancedApiOpsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig. (id: GoogleCloudApigeeV1AnalyticsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="apiSecurityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the API Security add-on. (id: GoogleCloudApigeeV1ApiSecurityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorsPlatformConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Connectors Platform add-on. (id: GoogleCloudApigeeV1ConnectorsPlatformConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Integration add-on. (id: GoogleCloudApigeeV1IntegrationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monetizationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Monetization add-on. (id: GoogleCloudApigeeV1MonetizationConfig)</td>
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
    <td><a href="#organizations_environments_get_addons_config"><CopyableCode code="organizations_environments_get_addons_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets the add-ons config of an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_addons_config_set_addon_enablement"><CopyableCode code="organizations_environments_addons_config_set_addon_enablement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Updates an add-on enablement status of an environment.</td>
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
    defaultValue="organizations_environments_get_addons_config"
    values={[
        { label: 'organizations_environments_get_addons_config', value: 'organizations_environments_get_addons_config' }
    ]}
>
<TabItem value="organizations_environments_get_addons_config">

Gets the add-ons config of an environment.

```sql
SELECT
advancedApiOpsConfig,
analyticsConfig,
apiSecurityConfig,
connectorsPlatformConfig,
integrationConfig,
monetizationConfig
FROM google.apigee.addons_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_addons_config_set_addon_enablement"
    values={[
        { label: 'organizations_environments_addons_config_set_addon_enablement', value: 'organizations_environments_addons_config_set_addon_enablement' }
    ]}
>
<TabItem value="organizations_environments_addons_config_set_addon_enablement">

Updates an add-on enablement status of an environment.

```sql
EXEC google.apigee.addons_config.organizations_environments_addons_config_set_addon_enablement 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"analyticsEnabled": {{ analyticsEnabled }}, 
"apiSecurityEnabled": {{ apiSecurityEnabled }}
}';
```
</TabItem>
</Tabs>
