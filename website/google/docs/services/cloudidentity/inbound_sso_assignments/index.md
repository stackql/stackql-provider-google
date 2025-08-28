--- 
title: inbound_sso_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_sso_assignments
  - cloudidentity
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

Creates, updates, deletes, gets or lists an <code>inbound_sso_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>inbound_sso_assignments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.inbound_sso_assignments" /></td></tr>
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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. The customer. For example: `customers/C0123abc`.</td>
</tr>
<tr>
    <td><CopyableCode code="oidcSsoInfo" /></td>
    <td><code>object</code></td>
    <td>OpenID Connect SSO details. Must be set if and only if `sso_mode` is set to `OIDC_SSO`. (id: OidcSsoInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="rank" /></td>
    <td><code>integer (int32)</code></td>
    <td>Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.</td>
</tr>
<tr>
    <td><CopyableCode code="samlSsoInfo" /></td>
    <td><code>object</code></td>
    <td>SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`. (id: SamlSsoInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="signInBehavior" /></td>
    <td><code>object</code></td>
    <td>Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration. (id: SignInBehavior)</td>
</tr>
<tr>
    <td><CopyableCode code="ssoMode" /></td>
    <td><code>string</code></td>
    <td>Inbound SSO behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="targetGroup" /></td>
    <td><code>string</code></td>
    <td>Immutable. Must be of the form `groups/&#123;group&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="targetOrgUnit" /></td>
    <td><code>string</code></td>
    <td>Immutable. Must be of the form `orgUnits/&#123;org_unit&#125;`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. The customer. For example: `customers/C0123abc`.</td>
</tr>
<tr>
    <td><CopyableCode code="oidcSsoInfo" /></td>
    <td><code>object</code></td>
    <td>OpenID Connect SSO details. Must be set if and only if `sso_mode` is set to `OIDC_SSO`. (id: OidcSsoInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="rank" /></td>
    <td><code>integer (int32)</code></td>
    <td>Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.</td>
</tr>
<tr>
    <td><CopyableCode code="samlSsoInfo" /></td>
    <td><code>object</code></td>
    <td>SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`. (id: SamlSsoInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="signInBehavior" /></td>
    <td><code>object</code></td>
    <td>Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration. (id: SignInBehavior)</td>
</tr>
<tr>
    <td><CopyableCode code="ssoMode" /></td>
    <td><code>string</code></td>
    <td>Inbound SSO behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="targetGroup" /></td>
    <td><code>string</code></td>
    <td>Immutable. Must be of the form `groups/&#123;group&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="targetOrgUnit" /></td>
    <td><code>string</code></td>
    <td>Immutable. Must be of the form `orgUnits/&#123;org_unit&#125;`.</td>
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
    <td><a href="#parameter-inboundSsoAssignmentsId"><code>inboundSsoAssignmentsId</code></a></td>
    <td></td>
    <td>Gets an InboundSsoAssignment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the InboundSsoAssignments for a `Customer`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-inboundSsoAssignmentsId"><code>inboundSsoAssignmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `&#123; "rank": 1 &#125;` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-inboundSsoAssignmentsId"><code>inboundSsoAssignmentsId</code></a></td>
    <td></td>
    <td>Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.</td>
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
<tr id="parameter-inboundSsoAssignmentsId">
    <td><CopyableCode code="inboundSsoAssignmentsId" /></td>
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

Gets an InboundSsoAssignment.

```sql
SELECT
name,
customer,
oidcSsoInfo,
rank,
samlSsoInfo,
signInBehavior,
ssoMode,
targetGroup,
targetOrgUnit
FROM google.cloudidentity.inbound_sso_assignments
WHERE inboundSsoAssignmentsId = '{{ inboundSsoAssignmentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the InboundSsoAssignments for a `Customer`.

```sql
SELECT
name,
customer,
oidcSsoInfo,
rank,
samlSsoInfo,
signInBehavior,
ssoMode,
targetGroup,
targetOrgUnit
FROM google.cloudidentity.inbound_sso_assignments
WHERE filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

```sql
INSERT INTO google.cloudidentity.inbound_sso_assignments (
data__targetGroup,
data__targetOrgUnit,
data__customer,
data__rank,
data__ssoMode,
data__samlSsoInfo,
data__oidcSsoInfo,
data__signInBehavior
)
SELECT 
'{{ targetGroup }}',
'{{ targetOrgUnit }}',
'{{ customer }}',
{{ rank }},
'{{ ssoMode }}',
'{{ samlSsoInfo }}',
'{{ oidcSsoInfo }}',
'{{ signInBehavior }}'
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
- name: inbound_sso_assignments
  props:
    - name: targetGroup
      value: string
      description: >
        Immutable. Must be of the form `groups/{group}`.
        
    - name: targetOrgUnit
      value: string
      description: >
        Immutable. Must be of the form `orgUnits/{org_unit}`.
        
    - name: customer
      value: string
      description: >
        Immutable. The customer. For example: `customers/C0123abc`.
        
    - name: rank
      value: integer
      description: >
        Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.
        
    - name: ssoMode
      value: string
      description: >
        Inbound SSO behavior.
        
      valid_values: ['SSO_MODE_UNSPECIFIED', 'SSO_OFF', 'SAML_SSO', 'OIDC_SSO', 'DOMAIN_WIDE_SAML_IF_ENABLED']
    - name: samlSsoInfo
      value: object
      description: >
        SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`.
        
    - name: oidcSsoInfo
      value: object
      description: >
        OpenID Connect SSO details. Must be set if and only if `sso_mode` is set to `OIDC_SSO`.
        
    - name: signInBehavior
      value: object
      description: >
        Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `&#123; "rank": 1 &#125;` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

```sql
UPDATE google.cloudidentity.inbound_sso_assignments
SET 
data__targetGroup = '{{ targetGroup }}',
data__targetOrgUnit = '{{ targetOrgUnit }}',
data__customer = '{{ customer }}',
data__rank = {{ rank }},
data__ssoMode = '{{ ssoMode }}',
data__samlSsoInfo = '{{ samlSsoInfo }}',
data__oidcSsoInfo = '{{ oidcSsoInfo }}',
data__signInBehavior = '{{ signInBehavior }}'
WHERE 
inboundSsoAssignmentsId = '{{ inboundSsoAssignmentsId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

```sql
DELETE FROM google.cloudidentity.inbound_sso_assignments
WHERE inboundSsoAssignmentsId = '{{ inboundSsoAssignmentsId }}' --required;
```
</TabItem>
</Tabs>
