--- 
title: oauth_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_clients
  - appcheck
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>oauth_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth_clients</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.oauth_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#exchange_debug_token"><CopyableCode code="exchange_debug_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.</td>
</tr>
<tr>
    <td><a href="#generate_app_attest_challenge"><CopyableCode code="generate_app_attest_challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.</td>
</tr>
<tr>
    <td><a href="#exchange_app_attest_attestation"><CopyableCode code="exchange_app_attest_attestation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).</td>
</tr>
<tr>
    <td><a href="#exchange_app_attest_assertion"><CopyableCode code="exchange_app_attest_assertion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.</td>
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
<tr id="parameter-oauthClientsId">
    <td><CopyableCode code="oauthClientsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="exchange_debug_token"
    values={[
        { label: 'exchange_debug_token', value: 'exchange_debug_token' },
        { label: 'generate_app_attest_challenge', value: 'generate_app_attest_challenge' },
        { label: 'exchange_app_attest_attestation', value: 'exchange_app_attest_attestation' },
        { label: 'exchange_app_attest_assertion', value: 'exchange_app_attest_assertion' }
    ]}
>
<TabItem value="exchange_debug_token">

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

```sql
EXEC firebase.appcheck.oauth_clients.exchange_debug_token 
@oauthClientsId='{{ oauthClientsId }}' --required 
@@json=
'{
"debugToken": "{{ debugToken }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="generate_app_attest_challenge">

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

```sql
EXEC firebase.appcheck.oauth_clients.generate_app_attest_challenge 
@oauthClientsId='{{ oauthClientsId }}' --required;
```
</TabItem>
<TabItem value="exchange_app_attest_attestation">

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

```sql
EXEC firebase.appcheck.oauth_clients.exchange_app_attest_attestation 
@oauthClientsId='{{ oauthClientsId }}' --required 
@@json=
'{
"attestationStatement": "{{ attestationStatement }}", 
"challenge": "{{ challenge }}", 
"keyId": "{{ keyId }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_app_attest_assertion">

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.oauth_clients.exchange_app_attest_assertion 
@oauthClientsId='{{ oauthClientsId }}' --required 
@@json=
'{
"artifact": "{{ artifact }}", 
"assertion": "{{ assertion }}", 
"challenge": "{{ challenge }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
</Tabs>
