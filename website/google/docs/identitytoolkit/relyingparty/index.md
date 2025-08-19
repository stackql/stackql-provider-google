--- 
title: relyingparty
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty
  - identitytoolkit
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

Creates, updates, deletes, gets or lists a <code>relyingparty</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>relyingparty</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty" /></td></tr>
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
    <td><a href="#download_account"><CopyableCode code="download_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Batch download user accounts.</td>
</tr>
<tr>
    <td><a href="#email_link_signin"><CopyableCode code="email_link_signin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Reset password for a user.</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Reset password for a user.</td>
</tr>
<tr>
    <td><a href="#send_verification_code"><CopyableCode code="send_verification_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Send SMS verification code.</td>
</tr>
<tr>
    <td><a href="#set_account_info"><CopyableCode code="set_account_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Set account info for a user.</td>
</tr>
<tr>
    <td><a href="#set_project_config"><CopyableCode code="set_project_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Set project configuration.</td>
</tr>
<tr>
    <td><a href="#sign_out_user"><CopyableCode code="sign_out_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Sign out user.</td>
</tr>
<tr>
    <td><a href="#signup_new_user"><CopyableCode code="signup_new_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Signup new user.</td>
</tr>
<tr>
    <td><a href="#upload_account"><CopyableCode code="upload_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Batch upload existing user accounts.</td>
</tr>
<tr>
    <td><a href="#verify_assertion"><CopyableCode code="verify_assertion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the assertion returned by the IdP.</td>
</tr>
<tr>
    <td><a href="#verify_custom_token"><CopyableCode code="verify_custom_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the developer asserted ID token.</td>
</tr>
<tr>
    <td><a href="#verify_password"><CopyableCode code="verify_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the user entered password.</td>
</tr>
<tr>
    <td><a href="#verify_phone_number"><CopyableCode code="verify_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies ownership of a phone number and creates/updates the user account accordingly.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="download_account"
    values={[
        { label: 'download_account', value: 'download_account' },
        { label: 'email_link_signin', value: 'email_link_signin' },
        { label: 'reset_password', value: 'reset_password' },
        { label: 'send_verification_code', value: 'send_verification_code' },
        { label: 'set_account_info', value: 'set_account_info' },
        { label: 'set_project_config', value: 'set_project_config' },
        { label: 'sign_out_user', value: 'sign_out_user' },
        { label: 'signup_new_user', value: 'signup_new_user' },
        { label: 'upload_account', value: 'upload_account' },
        { label: 'verify_assertion', value: 'verify_assertion' },
        { label: 'verify_custom_token', value: 'verify_custom_token' },
        { label: 'verify_password', value: 'verify_password' },
        { label: 'verify_phone_number', value: 'verify_phone_number' }
    ]}
>
<TabItem value="download_account">

Batch download user accounts.

```sql
EXEC google.identitytoolkit.relyingparty.download_account 
@@json=
'{
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"maxResults": {{ maxResults }}, 
"nextPageToken": "{{ nextPageToken }}", 
"targetProjectId": "{{ targetProjectId }}"
}';
```
</TabItem>
<TabItem value="email_link_signin">

Reset password for a user.

```sql
EXEC google.identitytoolkit.relyingparty.email_link_signin 
@@json=
'{
"email": "{{ email }}", 
"idToken": "{{ idToken }}", 
"oobCode": "{{ oobCode }}"
}';
```
</TabItem>
<TabItem value="reset_password">

Reset password for a user.

```sql
EXEC google.identitytoolkit.relyingparty.reset_password 
@@json=
'{
"email": "{{ email }}", 
"newPassword": "{{ newPassword }}", 
"oldPassword": "{{ oldPassword }}", 
"oobCode": "{{ oobCode }}"
}';
```
</TabItem>
<TabItem value="send_verification_code">

Send SMS verification code.

```sql
EXEC google.identitytoolkit.relyingparty.send_verification_code 
@@json=
'{
"iosReceipt": "{{ iosReceipt }}", 
"iosSecret": "{{ iosSecret }}", 
"phoneNumber": "{{ phoneNumber }}", 
"recaptchaToken": "{{ recaptchaToken }}"
}';
```
</TabItem>
<TabItem value="set_account_info">

Set account info for a user.

```sql
EXEC google.identitytoolkit.relyingparty.set_account_info 
@@json=
'{
"captchaChallenge": "{{ captchaChallenge }}", 
"captchaResponse": "{{ captchaResponse }}", 
"createdAt": "{{ createdAt }}", 
"customAttributes": "{{ customAttributes }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"deleteAttribute": "{{ deleteAttribute }}", 
"deleteProvider": "{{ deleteProvider }}", 
"disableUser": {{ disableUser }}, 
"displayName": "{{ displayName }}", 
"email": "{{ email }}", 
"emailVerified": {{ emailVerified }}, 
"idToken": "{{ idToken }}", 
"instanceId": "{{ instanceId }}", 
"lastLoginAt": "{{ lastLoginAt }}", 
"localId": "{{ localId }}", 
"oobCode": "{{ oobCode }}", 
"password": "{{ password }}", 
"phoneNumber": "{{ phoneNumber }}", 
"photoUrl": "{{ photoUrl }}", 
"provider": "{{ provider }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"upgradeToFederatedLogin": {{ upgradeToFederatedLogin }}, 
"validSince": "{{ validSince }}"
}';
```
</TabItem>
<TabItem value="set_project_config">

Set project configuration.

```sql
EXEC google.identitytoolkit.relyingparty.set_project_config 
@@json=
'{
"allowPasswordUser": {{ allowPasswordUser }}, 
"apiKey": "{{ apiKey }}", 
"authorizedDomains": "{{ authorizedDomains }}", 
"changeEmailTemplate": "{{ changeEmailTemplate }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"enableAnonymousUser": {{ enableAnonymousUser }}, 
"idpConfig": "{{ idpConfig }}", 
"legacyResetPasswordTemplate": "{{ legacyResetPasswordTemplate }}", 
"resetPasswordTemplate": "{{ resetPasswordTemplate }}", 
"useEmailSending": {{ useEmailSending }}, 
"verifyEmailTemplate": "{{ verifyEmailTemplate }}"
}';
```
</TabItem>
<TabItem value="sign_out_user">

Sign out user.

```sql
EXEC google.identitytoolkit.relyingparty.sign_out_user 
@@json=
'{
"instanceId": "{{ instanceId }}", 
"localId": "{{ localId }}"
}';
```
</TabItem>
<TabItem value="signup_new_user">

Signup new user.

```sql
EXEC google.identitytoolkit.relyingparty.signup_new_user 
@@json=
'{
"captchaChallenge": "{{ captchaChallenge }}", 
"captchaResponse": "{{ captchaResponse }}", 
"disabled": {{ disabled }}, 
"displayName": "{{ displayName }}", 
"email": "{{ email }}", 
"emailVerified": {{ emailVerified }}, 
"idToken": "{{ idToken }}", 
"instanceId": "{{ instanceId }}", 
"localId": "{{ localId }}", 
"password": "{{ password }}", 
"phoneNumber": "{{ phoneNumber }}", 
"photoUrl": "{{ photoUrl }}", 
"tenantId": "{{ tenantId }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}"
}';
```
</TabItem>
<TabItem value="upload_account">

Batch upload existing user accounts.

```sql
EXEC google.identitytoolkit.relyingparty.upload_account 
@@json=
'{
"allowOverwrite": {{ allowOverwrite }}, 
"blockSize": {{ blockSize }}, 
"cpuMemCost": {{ cpuMemCost }}, 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"dkLen": {{ dkLen }}, 
"hashAlgorithm": "{{ hashAlgorithm }}", 
"memoryCost": {{ memoryCost }}, 
"parallelization": {{ parallelization }}, 
"rounds": {{ rounds }}, 
"saltSeparator": "{{ saltSeparator }}", 
"sanityCheck": {{ sanityCheck }}, 
"signerKey": "{{ signerKey }}", 
"targetProjectId": "{{ targetProjectId }}", 
"users": "{{ users }}"
}';
```
</TabItem>
<TabItem value="verify_assertion">

Verifies the assertion returned by the IdP.

```sql
EXEC google.identitytoolkit.relyingparty.verify_assertion 
@@json=
'{
"autoCreate": {{ autoCreate }}, 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"idToken": "{{ idToken }}", 
"instanceId": "{{ instanceId }}", 
"pendingIdToken": "{{ pendingIdToken }}", 
"postBody": "{{ postBody }}", 
"requestUri": "{{ requestUri }}", 
"returnIdpCredential": {{ returnIdpCredential }}, 
"returnRefreshToken": {{ returnRefreshToken }}, 
"returnSecureToken": {{ returnSecureToken }}, 
"sessionId": "{{ sessionId }}", 
"tenantId": "{{ tenantId }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}"
}';
```
</TabItem>
<TabItem value="verify_custom_token">

Verifies the developer asserted ID token.

```sql
EXEC google.identitytoolkit.relyingparty.verify_custom_token 
@@json=
'{
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"instanceId": "{{ instanceId }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"token": "{{ token }}"
}';
```
</TabItem>
<TabItem value="verify_password">

Verifies the user entered password.

```sql
EXEC google.identitytoolkit.relyingparty.verify_password 
@@json=
'{
"captchaChallenge": "{{ captchaChallenge }}", 
"captchaResponse": "{{ captchaResponse }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"email": "{{ email }}", 
"idToken": "{{ idToken }}", 
"instanceId": "{{ instanceId }}", 
"password": "{{ password }}", 
"pendingIdToken": "{{ pendingIdToken }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"tenantId": "{{ tenantId }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}"
}';
```
</TabItem>
<TabItem value="verify_phone_number">

Verifies ownership of a phone number and creates/updates the user account accordingly.

```sql
EXEC google.identitytoolkit.relyingparty.verify_phone_number 
@@json=
'{
"code": "{{ code }}", 
"idToken": "{{ idToken }}", 
"operation": "{{ operation }}", 
"phoneNumber": "{{ phoneNumber }}", 
"sessionInfo": "{{ sessionInfo }}", 
"temporaryProof": "{{ temporaryProof }}", 
"verificationProof": "{{ verificationProof }}"
}';
```
</TabItem>
</Tabs>
