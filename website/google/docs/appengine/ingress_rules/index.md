--- 
title: ingress_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - ingress_rules
  - appengine
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

Creates, updates, deletes, gets or lists an <code>ingress_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ingress_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.ingress_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests. A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.

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
    <td>The action to take on matched requests.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional string description of this rule. This field has a maximum length of 400 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sourceRange" /></td>
    <td><code>string</code></td>
    <td>IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for Firewall.ListIngressRules.

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
    <td><CopyableCode code="ingressRules" /></td>
    <td><code>array</code></td>
    <td>The ingress FirewallRules for this application.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Continuation token for fetching the next page of results.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-ingressRulesId"><code>ingressRulesId</code></a></td>
    <td></td>
    <td>Gets the specified firewall rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-matchingAddress"><code>matchingAddress</code></a></td>
    <td>Lists the firewall rules of an application.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Creates a firewall rule for the application.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-ingressRulesId"><code>ingressRulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified firewall rule.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-ingressRulesId"><code>ingressRulesId</code></a></td>
    <td></td>
    <td>Deletes the specified firewall rule.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ingressRulesId">
    <td><CopyableCode code="ingressRulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-matchingAddress">
    <td><CopyableCode code="matchingAddress" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified firewall rule.

```sql
SELECT
action,
description,
priority,
sourceRange
FROM google.appengine.ingress_rules
WHERE appsId = '{{ appsId }}' -- required
AND ingressRulesId = '{{ ingressRulesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the firewall rules of an application.

```sql
SELECT
ingressRules,
nextPageToken
FROM google.appengine.ingress_rules
WHERE appsId = '{{ appsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND matchingAddress = '{{ matchingAddress }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a firewall rule for the application.

```sql
INSERT INTO google.appengine.ingress_rules (
data__priority,
data__action,
data__sourceRange,
data__description,
appsId
)
SELECT 
{{ priority }},
'{{ action }}',
'{{ sourceRange }}',
'{{ description }}',
'{{ appsId }}'
RETURNING
action,
description,
priority,
sourceRange
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ingress_rules
  props:
    - name: appsId
      value: string
      description: Required parameter for the ingress_rules resource.
    - name: priority
      value: integer
    - name: action
      value: string
      description: >
        The action to take on matched requests.
        
      valid_values: ['UNSPECIFIED_ACTION', 'ALLOW', 'DENY']
    - name: sourceRange
      value: string
      description: >
        IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.
        
    - name: description
      value: string
      description: >
        An optional string description of this rule. This field has a maximum length of 400 characters.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'batch_update', value: 'batch_update' }
    ]}
>
<TabItem value="patch">

Updates the specified firewall rule.

```sql
UPDATE google.appengine.ingress_rules
SET 
data__priority = {{ priority }},
data__action = '{{ action }}',
data__sourceRange = '{{ sourceRange }}',
data__description = '{{ description }}'
WHERE 
appsId = '{{ appsId }}' --required
AND ingressRulesId = '{{ ingressRulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
action,
description,
priority,
sourceRange;
```
</TabItem>
<TabItem value="batch_update">

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

```sql
UPDATE google.appengine.ingress_rules
SET 
data__ingressRules = '{{ ingressRules }}'
WHERE 
appsId = '{{ appsId }}' --required
RETURNING
ingressRules;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified firewall rule.

```sql
DELETE FROM google.appengine.ingress_rules
WHERE appsId = '{{ appsId }}' --required
AND ingressRulesId = '{{ ingressRulesId }}' --required;
```
</TabItem>
</Tabs>
