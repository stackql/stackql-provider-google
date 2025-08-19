--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_gateway_security_policies_rules_get"
    values={[
        { label: 'projects_locations_gateway_security_policies_rules_get', value: 'projects_locations_gateway_security_policies_rules_get' },
        { label: 'projects_locations_gateway_security_policies_rules_list', value: 'projects_locations_gateway_security_policies_rules_list' }
    ]}
>
<TabItem value="projects_locations_gateway_security_policies_rules_get">

The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.

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
    <td>Required. Immutable. Name of the resource. ame is the full resource name so projects/&#123;project&#125;/locations/&#123;location&#125;/gatewaySecurityPolicies/&#123;gateway_security_policy&#125;/rules/&#123;rule&#125; rule should match the pattern: (^&#91;a-z&#93;([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$).</td>
</tr>
<tr>
    <td><CopyableCode code="applicationMatcher" /></td>
    <td><code>string</code></td>
    <td>Optional. CEL expression for matching on L7/application level criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="basicProfile" /></td>
    <td><code>string</code></td>
    <td>Required. Profile which tells what the primitive action should be.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Required. Whether the rule is enforced.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Priority of the rule. Lower number corresponds to higher precedence.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionMatcher" /></td>
    <td><code>string</code></td>
    <td>Required. CEL expression for matching on session criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsInspectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the rule was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_gateway_security_policies_rules_list">

Response returned by the ListGatewaySecurityPolicyRules method.

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
    <td><CopyableCode code="gatewaySecurityPolicyRules" /></td>
    <td><code>array</code></td>
    <td>List of GatewaySecurityPolicyRule resources.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#projects_locations_gateway_security_policies_rules_get"><CopyableCode code="projects_locations_gateway_security_policies_rules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-gatewaySecurityPoliciesId"><code>gatewaySecurityPoliciesId</code></a>, <a href="#parameter-rulesId"><code>rulesId</code></a></td>
    <td></td>
    <td>Gets details of a single GatewaySecurityPolicyRule.</td>
</tr>
<tr>
    <td><a href="#projects_locations_gateway_security_policies_rules_list"><CopyableCode code="projects_locations_gateway_security_policies_rules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-gatewaySecurityPoliciesId"><code>gatewaySecurityPoliciesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists GatewaySecurityPolicyRules in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_gateway_security_policies_rules_create"><CopyableCode code="projects_locations_gateway_security_policies_rules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-gatewaySecurityPoliciesId"><code>gatewaySecurityPoliciesId</code></a></td>
    <td><a href="#parameter-gatewaySecurityPolicyRuleId"><code>gatewaySecurityPolicyRuleId</code></a></td>
    <td>Creates a new GatewaySecurityPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_gateway_security_policies_rules_patch"><CopyableCode code="projects_locations_gateway_security_policies_rules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-gatewaySecurityPoliciesId"><code>gatewaySecurityPoliciesId</code></a>, <a href="#parameter-rulesId"><code>rulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single GatewaySecurityPolicyRule.</td>
</tr>
<tr>
    <td><a href="#projects_locations_gateway_security_policies_rules_delete"><CopyableCode code="projects_locations_gateway_security_policies_rules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-gatewaySecurityPoliciesId"><code>gatewaySecurityPoliciesId</code></a>, <a href="#parameter-rulesId"><code>rulesId</code></a></td>
    <td></td>
    <td>Deletes a single GatewaySecurityPolicyRule.</td>
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
<tr id="parameter-gatewaySecurityPoliciesId">
    <td><CopyableCode code="gatewaySecurityPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rulesId">
    <td><CopyableCode code="rulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gatewaySecurityPolicyRuleId">
    <td><CopyableCode code="gatewaySecurityPolicyRuleId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_gateway_security_policies_rules_get"
    values={[
        { label: 'projects_locations_gateway_security_policies_rules_get', value: 'projects_locations_gateway_security_policies_rules_get' },
        { label: 'projects_locations_gateway_security_policies_rules_list', value: 'projects_locations_gateway_security_policies_rules_list' }
    ]}
>
<TabItem value="projects_locations_gateway_security_policies_rules_get">

Gets details of a single GatewaySecurityPolicyRule.

```sql
SELECT
name,
applicationMatcher,
basicProfile,
createTime,
description,
enabled,
priority,
sessionMatcher,
tlsInspectionEnabled,
updateTime
FROM google.networksecurity.rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND gatewaySecurityPoliciesId = '{{ gatewaySecurityPoliciesId }}' -- required
AND rulesId = '{{ rulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_gateway_security_policies_rules_list">

Lists GatewaySecurityPolicyRules in a given project and location.

```sql
SELECT
gatewaySecurityPolicyRules,
nextPageToken,
unreachable
FROM google.networksecurity.rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND gatewaySecurityPoliciesId = '{{ gatewaySecurityPoliciesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_gateway_security_policies_rules_create"
    values={[
        { label: 'projects_locations_gateway_security_policies_rules_create', value: 'projects_locations_gateway_security_policies_rules_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_gateway_security_policies_rules_create">

Creates a new GatewaySecurityPolicy in a given project and location.

```sql
INSERT INTO google.networksecurity.rules (
data__basicProfile,
data__name,
data__enabled,
data__priority,
data__description,
data__sessionMatcher,
data__applicationMatcher,
data__tlsInspectionEnabled,
projectsId,
locationsId,
gatewaySecurityPoliciesId,
gatewaySecurityPolicyRuleId
)
SELECT 
'{{ basicProfile }}',
'{{ name }}',
{{ enabled }},
{{ priority }},
'{{ description }}',
'{{ sessionMatcher }}',
'{{ applicationMatcher }}',
{{ tlsInspectionEnabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ gatewaySecurityPoliciesId }}',
'{{ gatewaySecurityPolicyRuleId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: rules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the rules resource.
    - name: locationsId
      value: string
      description: Required parameter for the rules resource.
    - name: gatewaySecurityPoliciesId
      value: string
      description: Required parameter for the rules resource.
    - name: basicProfile
      value: string
      description: >
        Required. Profile which tells what the primitive action should be.
        
      valid_values: ['BASIC_PROFILE_UNSPECIFIED', 'ALLOW', 'DENY']
    - name: name
      value: string
      description: >
        Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^&#91;a-z&#93;([a-z0-9-]{0,61}[a-z0-9])?$).
        
    - name: enabled
      value: boolean
      description: >
        Required. Whether the rule is enforced.
        
    - name: priority
      value: integer
      description: >
        Required. Priority of the rule. Lower number corresponds to higher precedence.
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: sessionMatcher
      value: string
      description: >
        Required. CEL expression for matching on session criteria.
        
    - name: applicationMatcher
      value: string
      description: >
        Optional. CEL expression for matching on L7/application level criteria.
        
    - name: tlsInspectionEnabled
      value: boolean
      description: >
        Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.
        
    - name: gatewaySecurityPolicyRuleId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_gateway_security_policies_rules_patch"
    values={[
        { label: 'projects_locations_gateway_security_policies_rules_patch', value: 'projects_locations_gateway_security_policies_rules_patch' }
    ]}
>
<TabItem value="projects_locations_gateway_security_policies_rules_patch">

Updates the parameters of a single GatewaySecurityPolicyRule.

```sql
UPDATE google.networksecurity.rules
SET 
data__basicProfile = '{{ basicProfile }}',
data__name = '{{ name }}',
data__enabled = {{ enabled }},
data__priority = {{ priority }},
data__description = '{{ description }}',
data__sessionMatcher = '{{ sessionMatcher }}',
data__applicationMatcher = '{{ applicationMatcher }}',
data__tlsInspectionEnabled = {{ tlsInspectionEnabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND gatewaySecurityPoliciesId = '{{ gatewaySecurityPoliciesId }}' --required
AND rulesId = '{{ rulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_gateway_security_policies_rules_delete"
    values={[
        { label: 'projects_locations_gateway_security_policies_rules_delete', value: 'projects_locations_gateway_security_policies_rules_delete' }
    ]}
>
<TabItem value="projects_locations_gateway_security_policies_rules_delete">

Deletes a single GatewaySecurityPolicyRule.

```sql
DELETE FROM google.networksecurity.rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND gatewaySecurityPoliciesId = '{{ gatewaySecurityPoliciesId }}' --required
AND rulesId = '{{ rulesId }}' --required;
```
</TabItem>
</Tabs>
