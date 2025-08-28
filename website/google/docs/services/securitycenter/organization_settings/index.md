--- 
title: organization_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_settings
  - securitycenter
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

Creates, updates, deletes, gets or lists an <code>organization_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>organization_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.organization_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_organization_settings"
    values={[
        { label: 'organizations_get_organization_settings', value: 'organizations_get_organization_settings' }
    ]}
>
<TabItem value="organizations_get_organization_settings">

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
    <td>The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/&#123;organization_id&#125;/organizationSettings".</td>
</tr>
<tr>
    <td><CopyableCode code="assetDiscoveryConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration used for Asset Discovery runs. (id: AssetDiscoveryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableAssetDiscovery" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates if Asset Discovery should be enabled. If the flag is set to `true`, then discovery of assets will occur. If it is set to `false`, all historical assets will remain, but discovery of future assets will not occur.</td>
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
    <td><a href="#organizations_get_organization_settings"><CopyableCode code="organizations_get_organization_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Gets the settings for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_update_organization_settings"><CopyableCode code="organizations_update_organization_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an organization's settings.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get_organization_settings"
    values={[
        { label: 'organizations_get_organization_settings', value: 'organizations_get_organization_settings' }
    ]}
>
<TabItem value="organizations_get_organization_settings">

Gets the settings for an organization.

```sql
SELECT
name,
assetDiscoveryConfig,
enableAssetDiscovery
FROM google.securitycenter.organization_settings
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_update_organization_settings"
    values={[
        { label: 'organizations_update_organization_settings', value: 'organizations_update_organization_settings' }
    ]}
>
<TabItem value="organizations_update_organization_settings">

Updates an organization's settings.

```sql
UPDATE google.securitycenter.organization_settings
SET 
data__name = '{{ name }}',
data__enableAssetDiscovery = {{ enableAssetDiscovery }},
data__assetDiscoveryConfig = '{{ assetDiscoveryConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
assetDiscoveryConfig,
enableAssetDiscovery;
```
</TabItem>
</Tabs>
