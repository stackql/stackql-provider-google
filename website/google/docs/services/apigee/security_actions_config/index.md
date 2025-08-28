--- 
title: security_actions_config
hide_title: false
hide_table_of_contents: false
keywords:
  - security_actions_config
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

Creates, updates, deletes, gets or lists a <code>security_actions_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_actions_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_actions_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_security_actions_config"
    values={[
        { label: 'organizations_environments_get_security_actions_config', value: 'organizations_environments_get_security_actions_config' }
    ]}
>
<TabItem value="organizations_environments_get_security_actions_config">

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
    <td>This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: `organizations/&#123;org&#125;/environments/&#123;env&#125;/security_actions_config`</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>The flag that controls whether this feature is enabled. This is `unset` by default. When this flag is `false`, even if individual rules are enabled, no SecurityActions will be enforced.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time for configuration.</td>
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
    <td><a href="#organizations_environments_get_security_actions_config"><CopyableCode code="organizations_environments_get_security_actions_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>GetSecurityActionConfig returns the current SecurityActions configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_update_security_actions_config"><CopyableCode code="organizations_environments_update_security_actions_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_get_security_actions_config"
    values={[
        { label: 'organizations_environments_get_security_actions_config', value: 'organizations_environments_get_security_actions_config' }
    ]}
>
<TabItem value="organizations_environments_get_security_actions_config">

GetSecurityActionConfig returns the current SecurityActions configuration.

```sql
SELECT
name,
enabled,
updateTime
FROM google.apigee.security_actions_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_update_security_actions_config"
    values={[
        { label: 'organizations_environments_update_security_actions_config', value: 'organizations_environments_update_security_actions_config' }
    ]}
>
<TabItem value="organizations_environments_update_security_actions_config">

UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.

```sql
UPDATE google.apigee.security_actions_config
SET 
data__name = '{{ name }}',
data__enabled = {{ enabled }}
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
enabled,
updateTime;
```
</TabItem>
</Tabs>
