--- 
title: service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_accounts
  - iam
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

Creates, updates, deletes, gets or lists a <code>service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.service_accounts" /></td></tr>
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

An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. //

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
    <td>The resource name of the service account. Use one of the following formats: * `projects/&#123;PROJECT_ID&#125;/serviceAccounts/&#123;EMAIL_ADDRESS&#125;` * `projects/&#123;PROJECT_ID&#125;/serviceAccounts/&#123;UNIQUE_ID&#125;` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/&#123;EMAIL_ADDRESS&#125;` * `projects/-/serviceAccounts/&#123;UNIQUE_ID&#125;` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified, human-readable description of the service account. The maximum length is 256 UTF-8 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the service account is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified, human-readable name for the service account. The maximum length is 100 UTF-8 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Deprecated. Do not use.</td>
</tr>
<tr>
    <td><CopyableCode code="oauth2ClientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The OAuth 2.0 client ID for the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the project that owns the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique, stable numeric ID for the service account. Each service account retains its unique ID even if you delete the service account. For example, if you delete a service account, then create a new service account with the same name, the new service account has a different unique ID than the deleted service account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The service account list response.

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
    <td><CopyableCode code="accounts" /></td>
    <td><code>array</code></td>
    <td>The list of matching service accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next page of results, set ListServiceAccountsRequest.page_token to this value.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Gets a ServiceAccount.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists every ServiceAccount that belongs to a specific project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a ServiceAccount.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Patches a ServiceAccount.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>**Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.</td>
</tr>
<tr>
    <td><a href="#sign_blob"><CopyableCode code="sign_blob" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td> Signs a blob using the system-managed private key for a ServiceAccount.</td>
</tr>
<tr>
    <td><a href="#sign_jwt"><CopyableCode code="sign_jwt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td> Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceAccountsId">
    <td><CopyableCode code="serviceAccountsId" /></td>
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

Gets a ServiceAccount.

```sql
SELECT
name,
description,
disabled,
displayName,
email,
etag,
oauth2ClientId,
projectId,
uniqueId
FROM google.iam.service_accounts
WHERE projectsId = '{{ projectsId }}' -- required
AND serviceAccountsId = '{{ serviceAccountsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists every ServiceAccount that belongs to a specific project.

```sql
SELECT
accounts,
nextPageToken
FROM google.iam.service_accounts
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates a ServiceAccount.

```sql
INSERT INTO google.iam.service_accounts (
data__accountId,
data__serviceAccount,
projectsId
)
SELECT 
'{{ accountId }}',
'{{ serviceAccount }}',
'{{ projectsId }}'
RETURNING
name,
description,
disabled,
displayName,
email,
etag,
oauth2ClientId,
projectId,
uniqueId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: service_accounts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the service_accounts resource.
    - name: accountId
      value: string
      description: >
        Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035.
        
    - name: serviceAccount
      value: object
      description: >
        An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. //
        
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

Patches a ServiceAccount.

```sql
UPDATE google.iam.service_accounts
SET 
data__serviceAccount = '{{ serviceAccount }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND serviceAccountsId = '{{ serviceAccountsId }}' --required
RETURNING
name,
description,
disabled,
displayName,
email,
etag,
oauth2ClientId,
projectId,
uniqueId;
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

**Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.

```sql
REPLACE google.iam.service_accounts
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND serviceAccountsId = '{{ serviceAccountsId }}' --required
RETURNING
name,
description,
disabled,
displayName,
email,
etag,
oauth2ClientId,
projectId,
uniqueId;
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

Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.

```sql
DELETE FROM google.iam.service_accounts
WHERE projectsId = '{{ projectsId }}' --required
AND serviceAccountsId = '{{ serviceAccountsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' },
        { label: 'enable', value: 'enable' },
        { label: 'disable', value: 'disable' },
        { label: 'sign_blob', value: 'sign_blob' },
        { label: 'sign_jwt', value: 'sign_jwt' }
    ]}
>
<TabItem value="undelete">

Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.

```sql
EXEC google.iam.service_accounts.undelete 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required;
```
</TabItem>
<TabItem value="enable">

Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.

```sql
EXEC google.iam.service_accounts.enable 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required;
```
</TabItem>
<TabItem value="disable">

Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.

```sql
EXEC google.iam.service_accounts.disable 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required;
```
</TabItem>
<TabItem value="sign_blob">

 Signs a blob using the system-managed private key for a ServiceAccount.

```sql
EXEC google.iam.service_accounts.sign_blob 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"bytesToSign": "{{ bytesToSign }}"
}';
```
</TabItem>
<TabItem value="sign_jwt">

 Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.

```sql
EXEC google.iam.service_accounts.sign_jwt 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"payload": "{{ payload }}"
}';
```
</TabItem>
</Tabs>
