--- 
title: security_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - security_actions
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

Creates, updates, deletes, gets or lists a <code>security_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_security_actions_get"
    values={[
        { label: 'organizations_environments_security_actions_get', value: 'organizations_environments_security_actions_get' },
        { label: 'organizations_environments_security_actions_list', value: 'organizations_environments_security_actions_list' }
    ]}
>
<TabItem value="organizations_environments_security_actions_get">

A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least one condition is required to create a SecurityAction.

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
    <td>Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/&#123;org&#125;/environments/&#123;env&#125;/securityActions/&#123;security_action&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="allow" /></td>
    <td><code>object</code></td>
    <td>Allow a request through if it matches this SecurityAction. (id: GoogleCloudApigeeV1SecurityActionAllow)</td>
</tr>
<tr>
    <td><CopyableCode code="apiProxies" /></td>
    <td><code>array</code></td>
    <td>Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions and are detailed later.</td>
</tr>
<tr>
    <td><CopyableCode code="conditionConfig" /></td>
    <td><code>object</code></td>
    <td>Required. A valid SecurityAction must contain at least one condition. (id: GoogleCloudApigeeV1SecurityActionConditionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time for this SecurityAction.</td>
</tr>
<tr>
    <td><CopyableCode code="deny" /></td>
    <td><code>object</code></td>
    <td>Deny a request through if it matches this SecurityAction. (id: GoogleCloudApigeeV1SecurityActionDeny)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional user provided description of the SecurityAction.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The expiration for this SecurityAction.</td>
</tr>
<tr>
    <td><CopyableCode code="flag" /></td>
    <td><code>object</code></td>
    <td>Flag a request through if it matches this SecurityAction. (id: GoogleCloudApigeeV1SecurityActionFlag)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for this SecurityAction.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_security_actions_list">

Contains a list of SecurityActions in response to a ListSecurityActionRequest.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="securityActions" /></td>
    <td><code>array</code></td>
    <td>The SecurityActions for the specified environment.</td>
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
    <td><a href="#organizations_environments_security_actions_get"><CopyableCode code="organizations_environments_security_actions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityActionsId"><code>securityActionsId</code></a></td>
    <td></td>
    <td>Get a SecurityAction by name.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_list"><CopyableCode code="organizations_environments_security_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns a list of SecurityActions. This returns both enabled and disabled actions.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_create"><CopyableCode code="organizations_environments_security_actions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-securityActionId"><code>securityActionId</code></a></td>
    <td>CreateSecurityAction creates a SecurityAction.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_patch"><CopyableCode code="organizations_environments_security_actions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityActionsId"><code>securityActionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a SecurityAction.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_delete"><CopyableCode code="organizations_environments_security_actions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityActionsId"><code>securityActionsId</code></a></td>
    <td></td>
    <td>Delete a SecurityAction.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_enable"><CopyableCode code="organizations_environments_security_actions_enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityActionsId"><code>securityActionsId</code></a></td>
    <td></td>
    <td>Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_actions_disable"><CopyableCode code="organizations_environments_security_actions_disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityActionsId"><code>securityActionsId</code></a></td>
    <td></td>
    <td>Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.</td>
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
<tr id="parameter-securityActionsId">
    <td><CopyableCode code="securityActionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityActionId">
    <td><CopyableCode code="securityActionId" /></td>
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
    defaultValue="organizations_environments_security_actions_get"
    values={[
        { label: 'organizations_environments_security_actions_get', value: 'organizations_environments_security_actions_get' },
        { label: 'organizations_environments_security_actions_list', value: 'organizations_environments_security_actions_list' }
    ]}
>
<TabItem value="organizations_environments_security_actions_get">

Get a SecurityAction by name.

```sql
SELECT
name,
allow,
apiProxies,
conditionConfig,
createTime,
deny,
description,
expireTime,
flag,
state,
ttl,
updateTime
FROM google.apigee.security_actions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND securityActionsId = '{{ securityActionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_security_actions_list">

Returns a list of SecurityActions. This returns both enabled and disabled actions.

```sql
SELECT
nextPageToken,
securityActions
FROM google.apigee.security_actions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_security_actions_create"
    values={[
        { label: 'organizations_environments_security_actions_create', value: 'organizations_environments_security_actions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_security_actions_create">

CreateSecurityAction creates a SecurityAction.

```sql
INSERT INTO google.apigee.security_actions (
data__name,
data__description,
data__state,
data__allow,
data__deny,
data__flag,
data__expireTime,
data__ttl,
data__apiProxies,
data__conditionConfig,
organizationsId,
environmentsId,
securityActionId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ state }}',
'{{ allow }}',
'{{ deny }}',
'{{ flag }}',
'{{ expireTime }}',
'{{ ttl }}',
'{{ apiProxies }}',
'{{ conditionConfig }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ securityActionId }}'
RETURNING
name,
allow,
apiProxies,
conditionConfig,
createTime,
deny,
description,
expireTime,
flag,
state,
ttl,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_actions
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the security_actions resource.
    - name: environmentsId
      value: string
      description: Required parameter for the security_actions resource.
    - name: name
      value: string
      description: >
        Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action}
        
    - name: description
      value: string
      description: >
        Optional. An optional user provided description of the SecurityAction.
        
    - name: state
      value: string
      description: >
        Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.
        
      valid_values: ['STATE_UNSPECIFIED', 'ENABLED', 'DISABLED']
    - name: allow
      value: object
      description: >
        Allow a request through if it matches this SecurityAction.
        
    - name: deny
      value: object
      description: >
        Deny a request through if it matches this SecurityAction.
        
    - name: flag
      value: object
      description: >
        Flag a request through if it matches this SecurityAction.
        
    - name: expireTime
      value: string
      description: >
        The expiration for this SecurityAction.
        
    - name: ttl
      value: string
      description: >
        Input only. The TTL for this SecurityAction.
        
    - name: apiProxies
      value: array
      description: >
        Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions and are detailed later.
        
    - name: conditionConfig
      value: object
      description: >
        Required. A valid SecurityAction must contain at least one condition.
        
    - name: securityActionId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_security_actions_patch"
    values={[
        { label: 'organizations_environments_security_actions_patch', value: 'organizations_environments_security_actions_patch' }
    ]}
>
<TabItem value="organizations_environments_security_actions_patch">

Update a SecurityAction.

```sql
UPDATE google.apigee.security_actions
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__allow = '{{ allow }}',
data__deny = '{{ deny }}',
data__flag = '{{ flag }}',
data__expireTime = '{{ expireTime }}',
data__ttl = '{{ ttl }}',
data__apiProxies = '{{ apiProxies }}',
data__conditionConfig = '{{ conditionConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND securityActionsId = '{{ securityActionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allow,
apiProxies,
conditionConfig,
createTime,
deny,
description,
expireTime,
flag,
state,
ttl,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_security_actions_delete"
    values={[
        { label: 'organizations_environments_security_actions_delete', value: 'organizations_environments_security_actions_delete' }
    ]}
>
<TabItem value="organizations_environments_security_actions_delete">

Delete a SecurityAction.

```sql
DELETE FROM google.apigee.security_actions
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND securityActionsId = '{{ securityActionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_security_actions_enable"
    values={[
        { label: 'organizations_environments_security_actions_enable', value: 'organizations_environments_security_actions_enable' },
        { label: 'organizations_environments_security_actions_disable', value: 'organizations_environments_security_actions_disable' }
    ]}
>
<TabItem value="organizations_environments_security_actions_enable">

Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.

```sql
EXEC google.apigee.security_actions.organizations_environments_security_actions_enable 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@securityActionsId='{{ securityActionsId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_security_actions_disable">

Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.

```sql
EXEC google.apigee.security_actions.organizations_environments_security_actions_disable 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@securityActionsId='{{ securityActionsId }}' --required;
```
</TabItem>
</Tabs>
