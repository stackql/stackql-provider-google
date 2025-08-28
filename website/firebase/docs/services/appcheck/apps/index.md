--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.apps" /></td></tr>
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
    <td><a href="#exchange_safety_net_token"><CopyableCode code="exchange_safety_net_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#generate_play_integrity_challenge"><CopyableCode code="generate_play_integrity_challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.</td>
</tr>
<tr>
    <td><a href="#exchange_play_integrity_token"><CopyableCode code="exchange_play_integrity_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#exchange_device_check_token"><CopyableCode code="exchange_device_check_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#exchange_recaptcha_v3_token"><CopyableCode code="exchange_recaptcha_v3_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#exchange_recaptcha_enterprise_token"><CopyableCode code="exchange_recaptcha_enterprise_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#exchange_custom_token"><CopyableCode code="exchange_custom_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.</td>
</tr>
<tr>
    <td><a href="#exchange_debug_token"><CopyableCode code="exchange_debug_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.</td>
</tr>
<tr>
    <td><a href="#generate_app_attest_challenge"><CopyableCode code="generate_app_attest_challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.</td>
</tr>
<tr>
    <td><a href="#exchange_app_attest_attestation"><CopyableCode code="exchange_app_attest_attestation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).</td>
</tr>
<tr>
    <td><a href="#exchange_app_attest_assertion"><CopyableCode code="exchange_app_attest_assertion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="exchange_safety_net_token"
    values={[
        { label: 'exchange_safety_net_token', value: 'exchange_safety_net_token' },
        { label: 'generate_play_integrity_challenge', value: 'generate_play_integrity_challenge' },
        { label: 'exchange_play_integrity_token', value: 'exchange_play_integrity_token' },
        { label: 'exchange_device_check_token', value: 'exchange_device_check_token' },
        { label: 'exchange_recaptcha_v3_token', value: 'exchange_recaptcha_v3_token' },
        { label: 'exchange_recaptcha_enterprise_token', value: 'exchange_recaptcha_enterprise_token' },
        { label: 'exchange_custom_token', value: 'exchange_custom_token' },
        { label: 'exchange_debug_token', value: 'exchange_debug_token' },
        { label: 'generate_app_attest_challenge', value: 'generate_app_attest_challenge' },
        { label: 'exchange_app_attest_attestation', value: 'exchange_app_attest_attestation' },
        { label: 'exchange_app_attest_assertion', value: 'exchange_app_attest_assertion' }
    ]}
>
<TabItem value="exchange_safety_net_token">

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_safety_net_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"safetyNetToken": "{{ safetyNetToken }}"
}';
```
</TabItem>
<TabItem value="generate_play_integrity_challenge">

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

```sql
EXEC firebase.appcheck.apps.generate_play_integrity_challenge 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required;
```
</TabItem>
<TabItem value="exchange_play_integrity_token">

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_play_integrity_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"playIntegrityToken": "{{ playIntegrityToken }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_device_check_token">

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_device_check_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"deviceToken": "{{ deviceToken }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_recaptcha_v3_token">

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_recaptcha_v3_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"recaptchaV3Token": "{{ recaptchaV3Token }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_recaptcha_enterprise_token">

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_recaptcha_enterprise_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"recaptchaEnterpriseToken": "{{ recaptchaEnterpriseToken }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_custom_token">

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

```sql
EXEC firebase.appcheck.apps.exchange_custom_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"customToken": "{{ customToken }}", 
"limitedUse": {{ limitedUse }}
}';
```
</TabItem>
<TabItem value="exchange_debug_token">

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

```sql
EXEC firebase.appcheck.apps.exchange_debug_token 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
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
EXEC firebase.appcheck.apps.generate_app_attest_challenge 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required;
```
</TabItem>
<TabItem value="exchange_app_attest_attestation">

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

```sql
EXEC firebase.appcheck.apps.exchange_app_attest_attestation 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
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
EXEC firebase.appcheck.apps.exchange_app_attest_assertion 
@projectsId='{{ projectsId }}' --required, 
@appsId='{{ appsId }}' --required 
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
