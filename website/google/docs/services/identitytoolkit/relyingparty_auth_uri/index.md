--- 
title: relyingparty_auth_uri
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty_auth_uri
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

Creates, updates, deletes, gets or lists a <code>relyingparty_auth_uri</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>relyingparty_auth_uri</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty_auth_uri" /></td></tr>
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
    <td><a href="#create_auth_uri"><CopyableCode code="create_auth_uri" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates the URI used by the IdP to authenticate the user.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_auth_uri"
    values={[
        { label: 'create_auth_uri', value: 'create_auth_uri' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auth_uri">

Creates the URI used by the IdP to authenticate the user.

```sql
INSERT INTO google.identitytoolkit.relyingparty_auth_uri (
data__appId,
data__authFlowType,
data__clientId,
data__context,
data__continueUri,
data__customParameter,
data__hostedDomain,
data__identifier,
data__oauthConsumerKey,
data__oauthScope,
data__openidRealm,
data__otaApp,
data__providerId,
data__sessionId,
data__tenantId,
data__tenantProjectNumber
)
SELECT 
'{{ appId }}',
'{{ authFlowType }}',
'{{ clientId }}',
'{{ context }}',
'{{ continueUri }}',
'{{ customParameter }}',
'{{ hostedDomain }}',
'{{ identifier }}',
'{{ oauthConsumerKey }}',
'{{ oauthScope }}',
'{{ openidRealm }}',
'{{ otaApp }}',
'{{ providerId }}',
'{{ sessionId }}',
'{{ tenantId }}',
'{{ tenantProjectNumber }}'
RETURNING
allProviders,
authUri,
captchaRequired,
forExistingProvider,
kind,
providerId,
registered,
sessionId,
signinMethods
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: relyingparty_auth_uri
  props:
    - name: appId
      value: string
      description: >
        The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
        
    - name: authFlowType
      value: string
      description: >
        Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider.
        
    - name: clientId
      value: string
      description: >
        The relying party OAuth client ID.
        
    - name: context
      value: string
      description: >
        The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
        
    - name: continueUri
      value: string
      description: >
        The URI to which the IDP redirects the user after the federated login flow.
        
    - name: customParameter
      value: object
      description: >
        The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
        
    - name: hostedDomain
      value: string
      description: >
        The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
        
    - name: identifier
      value: string
      description: >
        The email or federated ID of the user.
        
    - name: oauthConsumerKey
      value: string
      description: >
        The developer's consumer key for OpenId OAuth Extension
        
    - name: oauthScope
      value: string
      description: >
        Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
        
    - name: openidRealm
      value: string
      description: >
        Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
        
    - name: otaApp
      value: string
      description: >
        The native app package for OTA installation.
        
    - name: providerId
      value: string
      description: >
        The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
        
    - name: sessionId
      value: string
      description: >
        The session_id passed by client.
        
    - name: tenantId
      value: string
      description: >
        For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
        
    - name: tenantProjectNumber
      value: string
      description: >
        Tenant project number to be used for idp discovery.
        
```
</TabItem>
</Tabs>
