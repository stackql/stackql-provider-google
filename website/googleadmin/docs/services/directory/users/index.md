--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.users" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td>Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB. (id: UserName)</td>
</tr>
<tr>
    <td><CopyableCode code="addresses" /></td>
    <td><code>any</code></td>
    <td>The list of the user's addresses. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="agreedToTerms" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of the user's alias email addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if user is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="changePasswordAtNextLogin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>User's G Suite account creation time. (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="customSchemas" /></td>
    <td><code>object</code></td>
    <td>Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.</td>
</tr>
<tr>
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td>Output only. The customer ID to [retrieve all account users](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) request.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>any</code></td>
    <td>The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIds" /></td>
    <td><code>any</code></td>
    <td>The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>any</code></td>
    <td>The user's gender. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="hashFunction" /></td>
    <td><code>string</code></td>
    <td>Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.</td>
</tr>
<tr>
    <td><CopyableCode code="ims" /></td>
    <td><code>any</code></td>
    <td>The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="includeInGlobalAddressList" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).</td>
</tr>
<tr>
    <td><CopyableCode code="ipWhitelisted" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="isAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates a user with super administrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](https://developers.google.com/workspace/admin/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](https://developers.google.com/workspace/admin/directory/v1/reference/users/insert.html) or [update](https://developers.google.com/workspace/admin/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.</td>
</tr>
<tr>
    <td><CopyableCode code="isDelegatedAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).</td>
</tr>
<tr>
    <td><CopyableCode code="isEnforcedIn2Sv" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is 2-step verification enforced (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="isEnrolledIn2Sv" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is enrolled in 2-step verification (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="isMailboxSetup" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>any</code></td>
    <td>The list of the user's keywords. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`. (default: admin#directory#user)</td>
</tr>
<tr>
    <td><CopyableCode code="languages" /></td>
    <td><code>any</code></td>
    <td>The user's languages. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="lastLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>User's last login time. (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>any</code></td>
    <td>The user's locations. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="nonEditableAliases" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>any</code></td>
    <td>Notes for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).</td>
</tr>
<tr>
    <td><CopyableCode code="organizations" /></td>
    <td><code>any</code></td>
    <td>The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>User's password</td>
</tr>
<tr>
    <td><CopyableCode code="phones" /></td>
    <td><code>any</code></td>
    <td>The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="posixAccounts" /></td>
    <td><code>any</code></td>
    <td>The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryEmail" /></td>
    <td><code>string</code></td>
    <td>The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryEmail" /></td>
    <td><code>string</code></td>
    <td>Recovery email of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryPhone" /></td>
    <td><code>string</code></td>
    <td>Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.</td>
</tr>
<tr>
    <td><CopyableCode code="relations" /></td>
    <td><code>any</code></td>
    <td>The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>any</code></td>
    <td>A list of SSH public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if user is suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailPhotoEtag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the user's photo (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailPhotoUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL of the user's profile photo. The URL might be temporary or private.</td>
</tr>
<tr>
    <td><CopyableCode code="websites" /></td>
    <td><code>any</code></td>
    <td>The user's websites. The maximum allowed data size for this field is 2KB.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td>Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB. (id: UserName)</td>
</tr>
<tr>
    <td><CopyableCode code="addresses" /></td>
    <td><code>any</code></td>
    <td>The list of the user's addresses. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="agreedToTerms" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of the user's alias email addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if user is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="changePasswordAtNextLogin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>User's G Suite account creation time. (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="customSchemas" /></td>
    <td><code>object</code></td>
    <td>Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.</td>
</tr>
<tr>
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td>Output only. The customer ID to [retrieve all account users](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) request.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>any</code></td>
    <td>The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIds" /></td>
    <td><code>any</code></td>
    <td>The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>any</code></td>
    <td>The user's gender. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="hashFunction" /></td>
    <td><code>string</code></td>
    <td>Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.</td>
</tr>
<tr>
    <td><CopyableCode code="ims" /></td>
    <td><code>any</code></td>
    <td>The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="includeInGlobalAddressList" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).</td>
</tr>
<tr>
    <td><CopyableCode code="ipWhitelisted" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="isAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates a user with super administrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](https://developers.google.com/workspace/admin/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](https://developers.google.com/workspace/admin/directory/v1/reference/users/insert.html) or [update](https://developers.google.com/workspace/admin/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.</td>
</tr>
<tr>
    <td><CopyableCode code="isDelegatedAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).</td>
</tr>
<tr>
    <td><CopyableCode code="isEnforcedIn2Sv" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is 2-step verification enforced (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="isEnrolledIn2Sv" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is enrolled in 2-step verification (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="isMailboxSetup" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>any</code></td>
    <td>The list of the user's keywords. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`. (default: admin#directory#user)</td>
</tr>
<tr>
    <td><CopyableCode code="languages" /></td>
    <td><code>any</code></td>
    <td>The user's languages. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="lastLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>User's last login time. (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>any</code></td>
    <td>The user's locations. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="nonEditableAliases" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>any</code></td>
    <td>Notes for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).</td>
</tr>
<tr>
    <td><CopyableCode code="organizations" /></td>
    <td><code>any</code></td>
    <td>The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>User's password</td>
</tr>
<tr>
    <td><CopyableCode code="phones" /></td>
    <td><code>any</code></td>
    <td>The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.</td>
</tr>
<tr>
    <td><CopyableCode code="posixAccounts" /></td>
    <td><code>any</code></td>
    <td>The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryEmail" /></td>
    <td><code>string</code></td>
    <td>The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryEmail" /></td>
    <td><code>string</code></td>
    <td>Recovery email of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryPhone" /></td>
    <td><code>string</code></td>
    <td>Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.</td>
</tr>
<tr>
    <td><CopyableCode code="relations" /></td>
    <td><code>any</code></td>
    <td>The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>any</code></td>
    <td>A list of SSH public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if user is suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailPhotoEtag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the user's photo (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailPhotoUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL of the user's profile photo. The URL might be temporary or private.</td>
</tr>
<tr>
    <td><CopyableCode code="websites" /></td>
    <td><code>any</code></td>
    <td>The user's websites. The maximum allowed data size for this field is 2KB.</td>
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
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td><a href="#parameter-customFieldMask"><code>customFieldMask</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-viewType"><code>viewType</code></a></td>
    <td>Retrieves a user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-customFieldMask"><code>customFieldMask</code></a>, <a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-viewType"><code>viewType</code></a></td>
    <td>Retrieves a paginated list of either deleted users or all users in a domain.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-resolveConflictAccount"><code>resolveConflictAccount</code></a></td>
    <td>Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Deletes a user.</td>
</tr>
<tr>
    <td><a href="#make_admin"><CopyableCode code="make_admin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Makes a user a super administrator.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Undeletes a deleted user.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-customFieldMask"><code>customFieldMask</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-viewType"><code>viewType</code></a></td>
    <td>Watches for changes in users list.</td>
</tr>
<tr>
    <td><a href="#sign_out"><CopyableCode code="sign_out" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userKey">
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customFieldMask">
    <td><CopyableCode code="customFieldMask" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-event">
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resolveConflictAccount">
    <td><CopyableCode code="resolveConflictAccount" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-viewType">
    <td><CopyableCode code="viewType" /></td>
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

Retrieves a user.

```sql
SELECT
id,
name,
addresses,
agreedToTerms,
aliases,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites
FROM googleadmin.directory.users
WHERE userKey = '{{ userKey }}' -- required
AND customFieldMask = '{{ customFieldMask }}'
AND projection = '{{ projection }}'
AND viewType = '{{ viewType }}';
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of either deleted users or all users in a domain.

```sql
SELECT
id,
name,
addresses,
agreedToTerms,
aliases,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites
FROM googleadmin.directory.users
WHERE domain = '{{ domain }}' -- required
AND customFieldMask = '{{ customFieldMask }}'
AND customer = '{{ customer }}'
AND event = '{{ event }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND projection = '{{ projection }}'
AND query = '{{ query }}'
AND showDeleted = '{{ showDeleted }}'
AND sortOrder = '{{ sortOrder }}'
AND viewType = '{{ viewType }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.

```sql
INSERT INTO googleadmin.directory.users (
data__id,
data__primaryEmail,
data__password,
data__hashFunction,
data__suspended,
data__changePasswordAtNextLogin,
data__ipWhitelisted,
data__name,
data__emails,
data__externalIds,
data__relations,
data__addresses,
data__organizations,
data__phones,
data__languages,
data__posixAccounts,
data__sshPublicKeys,
data__notes,
data__websites,
data__locations,
data__includeInGlobalAddressList,
data__keywords,
data__gender,
data__ims,
data__customSchemas,
data__archived,
data__orgUnitPath,
data__recoveryEmail,
data__recoveryPhone,
resolveConflictAccount
)
SELECT 
'{{ id }}',
'{{ primaryEmail }}',
'{{ password }}',
'{{ hashFunction }}',
{{ suspended }},
{{ changePasswordAtNextLogin }},
{{ ipWhitelisted }},
'{{ name }}',
'{{ emails }}',
'{{ externalIds }}',
'{{ relations }}',
'{{ addresses }}',
'{{ organizations }}',
'{{ phones }}',
'{{ languages }}',
'{{ posixAccounts }}',
'{{ sshPublicKeys }}',
'{{ notes }}',
'{{ websites }}',
'{{ locations }}',
{{ includeInGlobalAddressList }},
'{{ keywords }}',
'{{ gender }}',
'{{ ims }}',
'{{ customSchemas }}',
{{ archived }},
'{{ orgUnitPath }}',
'{{ recoveryEmail }}',
'{{ recoveryPhone }}',
'{{ resolveConflictAccount }}'
RETURNING
id,
name,
addresses,
agreedToTerms,
aliases,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: users
  props:
    - name: id
      value: string
      description: >
        The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.
        
    - name: primaryEmail
      value: string
      description: >
        The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.
        
    - name: password
      value: string
      description: >
        User's password
        
    - name: hashFunction
      value: string
      description: >
        Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.
        
    - name: suspended
      value: boolean
      description: >
        Indicates if user is suspended.
        
    - name: changePasswordAtNextLogin
      value: boolean
      description: >
        Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).
        
    - name: ipWhitelisted
      value: boolean
      description: >
        If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.
        
    - name: name
      value: object
      description: >
        Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.
        
    - name: emails
      value: any
      description: >
        The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.
        
    - name: externalIds
      value: any
      description: >
        The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.
        
    - name: relations
      value: any
      description: >
        The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.
        
    - name: addresses
      value: any
      description: >
        The list of the user's addresses. The maximum allowed data size for this field is 10KB.
        
    - name: organizations
      value: any
      description: >
        The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.
        
    - name: phones
      value: any
      description: >
        The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.
        
    - name: languages
      value: any
      description: >
        The user's languages. The maximum allowed data size for this field is 1KB.
        
    - name: posixAccounts
      value: any
      description: >
        The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.
        
    - name: sshPublicKeys
      value: any
      description: >
        A list of SSH public keys.
        
    - name: notes
      value: any
      description: >
        Notes for the user.
        
    - name: websites
      value: any
      description: >
        The user's websites. The maximum allowed data size for this field is 2KB.
        
    - name: locations
      value: any
      description: >
        The user's locations. The maximum allowed data size for this field is 10KB.
        
    - name: includeInGlobalAddressList
      value: boolean
      description: >
        Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).
        
    - name: keywords
      value: any
      description: >
        The list of the user's keywords. The maximum allowed data size for this field is 1KB.
        
    - name: gender
      value: any
      description: >
        The user's gender. The maximum allowed data size for this field is 1KB.
        
    - name: ims
      value: any
      description: >
        The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.
        
    - name: customSchemas
      value: object
      description: >
        Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.
        
    - name: archived
      value: boolean
      description: >
        Indicates if user is archived.
        
    - name: orgUnitPath
      value: string
      description: >
        The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).
        
    - name: recoveryEmail
      value: string
      description: >
        Recovery email of the user.
        
    - name: recoveryPhone
      value: string
      description: >
        Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.
        
    - name: resolveConflictAccount
      value: boolean
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

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

```sql
UPDATE googleadmin.directory.users
SET 
data__id = '{{ id }}',
data__primaryEmail = '{{ primaryEmail }}',
data__password = '{{ password }}',
data__hashFunction = '{{ hashFunction }}',
data__suspended = {{ suspended }},
data__changePasswordAtNextLogin = {{ changePasswordAtNextLogin }},
data__ipWhitelisted = {{ ipWhitelisted }},
data__name = '{{ name }}',
data__emails = '{{ emails }}',
data__externalIds = '{{ externalIds }}',
data__relations = '{{ relations }}',
data__addresses = '{{ addresses }}',
data__organizations = '{{ organizations }}',
data__phones = '{{ phones }}',
data__languages = '{{ languages }}',
data__posixAccounts = '{{ posixAccounts }}',
data__sshPublicKeys = '{{ sshPublicKeys }}',
data__notes = '{{ notes }}',
data__websites = '{{ websites }}',
data__locations = '{{ locations }}',
data__includeInGlobalAddressList = {{ includeInGlobalAddressList }},
data__keywords = '{{ keywords }}',
data__gender = '{{ gender }}',
data__ims = '{{ ims }}',
data__customSchemas = '{{ customSchemas }}',
data__archived = {{ archived }},
data__orgUnitPath = '{{ orgUnitPath }}',
data__recoveryEmail = '{{ recoveryEmail }}',
data__recoveryPhone = '{{ recoveryPhone }}'
WHERE 
userKey = '{{ userKey }}' --required
RETURNING
id,
name,
addresses,
agreedToTerms,
aliases,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information.

```sql
REPLACE googleadmin.directory.users
SET 
data__id = '{{ id }}',
data__primaryEmail = '{{ primaryEmail }}',
data__password = '{{ password }}',
data__hashFunction = '{{ hashFunction }}',
data__suspended = {{ suspended }},
data__changePasswordAtNextLogin = {{ changePasswordAtNextLogin }},
data__ipWhitelisted = {{ ipWhitelisted }},
data__name = '{{ name }}',
data__emails = '{{ emails }}',
data__externalIds = '{{ externalIds }}',
data__relations = '{{ relations }}',
data__addresses = '{{ addresses }}',
data__organizations = '{{ organizations }}',
data__phones = '{{ phones }}',
data__languages = '{{ languages }}',
data__posixAccounts = '{{ posixAccounts }}',
data__sshPublicKeys = '{{ sshPublicKeys }}',
data__notes = '{{ notes }}',
data__websites = '{{ websites }}',
data__locations = '{{ locations }}',
data__includeInGlobalAddressList = {{ includeInGlobalAddressList }},
data__keywords = '{{ keywords }}',
data__gender = '{{ gender }}',
data__ims = '{{ ims }}',
data__customSchemas = '{{ customSchemas }}',
data__archived = {{ archived }},
data__orgUnitPath = '{{ orgUnitPath }}',
data__recoveryEmail = '{{ recoveryEmail }}',
data__recoveryPhone = '{{ recoveryPhone }}'
WHERE 
userKey = '{{ userKey }}' --required
RETURNING
id,
name,
addresses,
agreedToTerms,
aliases,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites;
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

Deletes a user.

```sql
DELETE FROM googleadmin.directory.users
WHERE userKey = '{{ userKey }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="make_admin"
    values={[
        { label: 'make_admin', value: 'make_admin' },
        { label: 'undelete', value: 'undelete' },
        { label: 'watch', value: 'watch' },
        { label: 'sign_out', value: 'sign_out' }
    ]}
>
<TabItem value="make_admin">

Makes a user a super administrator.

```sql
EXEC googleadmin.directory.users.make_admin 
@userKey='{{ userKey }}' --required 
@@json=
'{
"status": {{ status }}
}';
```
</TabItem>
<TabItem value="undelete">

Undeletes a deleted user.

```sql
EXEC googleadmin.directory.users.undelete 
@userKey='{{ userKey }}' --required 
@@json=
'{
"orgUnitPath": "{{ orgUnitPath }}"
}';
```
</TabItem>
<TabItem value="watch">

Watches for changes in users list.

```sql
EXEC googleadmin.directory.users.watch 
@domain='{{ domain }}', 
@customer='{{ customer }}', 
@event='{{ event }}', 
@customFieldMask='{{ customFieldMask }}', 
@maxResults='{{ maxResults }}', 
@orderBy='{{ orderBy }}', 
@pageToken='{{ pageToken }}', 
@projection='{{ projection }}', 
@query='{{ query }}', 
@showDeleted='{{ showDeleted }}', 
@sortOrder='{{ sortOrder }}', 
@viewType='{{ viewType }}' 
@@json=
'{
"id": "{{ id }}", 
"token": "{{ token }}", 
"expiration": "{{ expiration }}", 
"type": "{{ type }}", 
"address": "{{ address }}", 
"payload": {{ payload }}, 
"params": "{{ params }}", 
"resourceId": "{{ resourceId }}", 
"resourceUri": "{{ resourceUri }}", 
"kind": "{{ kind }}"
}';
```
</TabItem>
<TabItem value="sign_out">

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

```sql
EXEC googleadmin.directory.users.sign_out 
@userKey='{{ userKey }}' --required;
```
</TabItem>
</Tabs>
