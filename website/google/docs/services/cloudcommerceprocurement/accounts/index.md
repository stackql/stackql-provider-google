--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - cloudcommerceprocurement
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcommerceprocurement.accounts" /></td></tr>
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
    <td>Output only. The resource name of the account. Account names have the form `accounts/&#123;account_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="approvals" /></td>
    <td><code>array</code></td>
    <td>Output only. The approvals for this account. These approvals are used to track actions that are permitted or have been completed by a customer within the context of the provider. This might include a sign up flow or a provisioning step, for example, that the provider can admit to having happened.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this account.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this account was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the account. This is used to decide whether the customer is in good standing with the provider and is able to make purchases. An account might not be able to make a purchase if the billing account is suspended, for example.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
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
    <td>Output only. The resource name of the account. Account names have the form `accounts/&#123;account_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="approvals" /></td>
    <td><code>array</code></td>
    <td>Output only. The approvals for this account. These approvals are used to track actions that are permitted or have been completed by a customer within the context of the provider. This might include a sign up flow or a provisioning step, for example, that the provider can admit to having happened.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this account.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this account was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the account. This is used to decide whether the customer is in good standing with the provider and is able to make purchases. An account might not be able to make a purchase if the billing account is suspended, for example.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
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
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-accountsId"><code>accountsId</code></a></td>
    <td></td>
    <td>Gets a requested Account resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Accounts that the provider has access to.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-accountsId"><code>accountsId</code></a></td>
    <td></td>
    <td>Grants an approval on an Account.</td>
</tr>
<tr>
    <td><a href="#reject"><CopyableCode code="reject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-accountsId"><code>accountsId</code></a></td>
    <td></td>
    <td>Rejects an approval on an Account.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-accountsId"><code>accountsId</code></a></td>
    <td></td>
    <td>Resets an Account and cancels all associated Entitlements. Partner can only reset accounts they own rather than customer accounts.</td>
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
<tr id="parameter-accountsId">
    <td><CopyableCode code="accountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
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

Gets a requested Account resource.

```sql
SELECT
name,
approvals,
createTime,
inputProperties,
provider,
state,
updateTime
FROM google.cloudcommerceprocurement.accounts
WHERE providersId = '{{ providersId }}' -- required
AND accountsId = '{{ accountsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Accounts that the provider has access to.

```sql
SELECT
name,
approvals,
createTime,
inputProperties,
provider,
state,
updateTime
FROM google.cloudcommerceprocurement.accounts
WHERE providersId = '{{ providersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="approve"
    values={[
        { label: 'approve', value: 'approve' },
        { label: 'reject', value: 'reject' },
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="approve">

Grants an approval on an Account.

```sql
EXEC google.cloudcommerceprocurement.accounts.approve 
@providersId='{{ providersId }}' --required, 
@accountsId='{{ accountsId }}' --required 
@@json=
'{
"properties": "{{ properties }}", 
"approvalName": "{{ approvalName }}", 
"reason": "{{ reason }}"
}';
```
</TabItem>
<TabItem value="reject">

Rejects an approval on an Account.

```sql
EXEC google.cloudcommerceprocurement.accounts.reject 
@providersId='{{ providersId }}' --required, 
@accountsId='{{ accountsId }}' --required 
@@json=
'{
"approvalName": "{{ approvalName }}", 
"reason": "{{ reason }}"
}';
```
</TabItem>
<TabItem value="reset">

Resets an Account and cancels all associated Entitlements. Partner can only reset accounts they own rather than customer accounts.

```sql
EXEC google.cloudcommerceprocurement.accounts.reset 
@providersId='{{ providersId }}' --required, 
@accountsId='{{ accountsId }}' --required;
```
</TabItem>
</Tabs>
