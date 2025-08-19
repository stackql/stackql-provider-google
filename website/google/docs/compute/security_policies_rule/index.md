--- 
title: security_policies_rule
hide_title: false
hide_table_of_contents: false
keywords:
  - security_policies_rule
  - compute
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

Creates, updates, deletes, gets or lists a <code>security_policies_rule</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_policies_rule</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.security_policies_rule" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="get_rule">

Represents a rule that describes one or more match conditions along with the action to be taken when traffic matches this condition (allow or deny).

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The Action to perform when the rule is matched. The following are the valid actions: - allow: allow access to target. - deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for `STATUS` are 403, 404, and 502. - rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rate_limit_options to be set. - redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR. - throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rate_limit_options to be set for this. - fairshare (preview only): when traffic reaches the threshold limit, requests from the clients matching this rule begin to be rate-limited using the Fair Share algorithm. This action is only allowed in security policies of type `CLOUD_ARMOR_INTERNAL_SERVICE`. </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="headerAction" /></td>
    <td><code>object</code></td>
    <td>Optional, additional actions that are performed on headers. This field is only supported in Global Security Policies of type CLOUD_ARMOR. (id: SecurityPolicyRuleHttpHeaderAction)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output only] Type of the resource. Always compute#securityPolicyRule for security policy rules (default: compute#securityPolicyRule)</td>
</tr>
<tr>
    <td><CopyableCode code="match" /></td>
    <td><code>object</code></td>
    <td>A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced. (id: SecurityPolicyRuleMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMatch" /></td>
    <td><code>object</code></td>
    <td>A match condition that incoming packets are evaluated against for CLOUD_ARMOR_NETWORK security policies. If it matches, the corresponding 'action' is enforced. The match criteria for a rule consists of built-in match fields (like 'srcIpRanges') and potentially multiple user-defined match fields ('userDefinedFields'). Field values may be extracted directly from the packet or derived from it (e.g. 'srcRegionCodes'). Some fields may not be present in every packet (e.g. 'srcPorts'). A user-defined field is only present if the base header is found in the packet and the entire field is in bounds. Each match field may specify which values can match it, listing one or more ranges, prefixes, or exact values that are considered a match for the field. A field value must be present in order to match a specified match field. If no match values are specified for a match field, then any field value is considered to match it, and it's not required to be present. For strings specifying '*' is also equivalent to match all. For a packet to match a rule, all specified match fields must match the corresponding field values derived from the packet. Example: networkMatch: srcIpRanges: - "192.0.2.0/24" - "198.51.100.0/24" userDefinedFields: - name: "ipv4_fragment_offset" values: - "1-0x1fff" The above match condition matches packets with a source IP in 192.0.2.0/24 or 198.51.100.0/24 and a user-defined field named "ipv4_fragment_offset" with a value between 1 and 0x1fff inclusive. (id: SecurityPolicyRuleNetworkMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="preconfiguredWafConfig" /></td>
    <td><code>object</code></td>
    <td>Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if evaluatePreconfiguredWaf() is not used, this field will have no effect. (id: SecurityPolicyRulePreconfiguredWafConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preview" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, the specified action is not enforced.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.</td>
</tr>
<tr>
    <td><CopyableCode code="rateLimitOptions" /></td>
    <td><code>object</code></td>
    <td>Must be specified if the action is "rate_based_ban" or "throttle" or "fairshare". Cannot be specified for any other actions. (id: SecurityPolicyRuleRateLimitOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="redirectOptions" /></td>
    <td><code>object</code></td>
    <td>Parameters defining the redirect action. Cannot be specified for any other actions. This field is only supported in Global Security Policies of type CLOUD_ARMOR. (id: SecurityPolicyRuleRedirectOptions)</td>
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
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-priority"><code>priority</code></a></td>
    <td>Gets a rule at the specified priority.</td>
</tr>
<tr>
    <td><a href="#add_rule"><CopyableCode code="add_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Inserts a rule into a security policy.</td>
</tr>
<tr>
    <td><a href="#remove_rule"><CopyableCode code="remove_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-priority"><code>priority</code></a></td>
    <td>Deletes a rule at the specified priority.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityPolicy">
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-priority">
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="get_rule">

Gets a rule at the specified priority.

```sql
SELECT
action,
description,
headerAction,
kind,
match,
networkMatch,
preconfiguredWafConfig,
preview,
priority,
rateLimitOptions,
redirectOptions
FROM google.compute.security_policies_rule
WHERE project = '{{ project }}' -- required
AND securityPolicy = '{{ securityPolicy }}' -- required
AND priority = '{{ priority }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_rule"
    values={[
        { label: 'add_rule', value: 'add_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_rule">

Inserts a rule into a security policy.

```sql
INSERT INTO google.compute.security_policies_rule (
data__kind,
data__description,
data__priority,
data__match,
data__networkMatch,
data__action,
data__preview,
data__rateLimitOptions,
data__headerAction,
data__redirectOptions,
data__preconfiguredWafConfig,
project,
securityPolicy,
validateOnly
)
SELECT 
'{{ kind }}',
'{{ description }}',
{{ priority }},
'{{ match }}',
'{{ networkMatch }}',
'{{ action }}',
{{ preview }},
'{{ rateLimitOptions }}',
'{{ headerAction }}',
'{{ redirectOptions }}',
'{{ preconfiguredWafConfig }}',
'{{ project }}',
'{{ securityPolicy }}',
'{{ validateOnly }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_policies_rule
  props:
    - name: project
      value: string
      description: Required parameter for the security_policies_rule resource.
    - name: securityPolicy
      value: string
      description: Required parameter for the security_policies_rule resource.
    - name: kind
      value: string
      description: >
        [Output only] Type of the resource. Always compute#securityPolicyRule for security policy rules
        
      default: compute#securityPolicyRule
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: priority
      value: integer
      description: >
        An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
        
    - name: match
      value: object
      description: >
        A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
        
    - name: networkMatch
      value: object
      description: >
        A match condition that incoming packets are evaluated against for CLOUD_ARMOR_NETWORK security policies. If it matches, the corresponding 'action' is enforced. The match criteria for a rule consists of built-in match fields (like 'srcIpRanges') and potentially multiple user-defined match fields ('userDefinedFields'). Field values may be extracted directly from the packet or derived from it (e.g. 'srcRegionCodes'). Some fields may not be present in every packet (e.g. 'srcPorts'). A user-defined field is only present if the base header is found in the packet and the entire field is in bounds. Each match field may specify which values can match it, listing one or more ranges, prefixes, or exact values that are considered a match for the field. A field value must be present in order to match a specified match field. If no match values are specified for a match field, then any field value is considered to match it, and it's not required to be present. For strings specifying '*' is also equivalent to match all. For a packet to match a rule, all specified match fields must match the corresponding field values derived from the packet. Example: networkMatch: srcIpRanges: - "192.0.2.0/24" - "198.51.100.0/24" userDefinedFields: - name: "ipv4_fragment_offset" values: - "1-0x1fff" The above match condition matches packets with a source IP in 192.0.2.0/24 or 198.51.100.0/24 and a user-defined field named "ipv4_fragment_offset" with a value between 1 and 0x1fff inclusive.
        
    - name: action
      value: string
      description: >
        The Action to perform when the rule is matched. The following are the valid actions: - allow: allow access to target. - deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for `STATUS` are 403, 404, and 502. - rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rate_limit_options to be set. - redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR. - throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rate_limit_options to be set for this. - fairshare (preview only): when traffic reaches the threshold limit, requests from the clients matching this rule begin to be rate-limited using the Fair Share algorithm. This action is only allowed in security policies of type `CLOUD_ARMOR_INTERNAL_SERVICE`. 
        
    - name: preview
      value: boolean
      description: >
        If set to true, the specified action is not enforced.
        
    - name: rateLimitOptions
      value: object
      description: >
        Must be specified if the action is "rate_based_ban" or "throttle" or "fairshare". Cannot be specified for any other actions.
        
    - name: headerAction
      value: object
      description: >
        Optional, additional actions that are performed on headers. This field is only supported in Global Security Policies of type CLOUD_ARMOR.
        
    - name: redirectOptions
      value: object
      description: >
        Parameters defining the redirect action. Cannot be specified for any other actions. This field is only supported in Global Security Policies of type CLOUD_ARMOR.
        
    - name: preconfiguredWafConfig
      value: object
      description: >
        Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if evaluatePreconfiguredWaf() is not used, this field will have no effect.
        
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_rule"
    values={[
        { label: 'remove_rule', value: 'remove_rule' }
    ]}
>
<TabItem value="remove_rule">

Deletes a rule at the specified priority.

```sql
DELETE FROM google.compute.security_policies_rule
WHERE project = '{{ project }}' --required
AND securityPolicy = '{{ securityPolicy }}' --required
AND priority = '{{ priority }}';
```
</TabItem>
</Tabs>
