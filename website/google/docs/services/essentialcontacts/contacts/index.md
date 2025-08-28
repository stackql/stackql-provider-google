--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
  - essentialcontacts
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

Creates, updates, deletes, gets or lists a <code>contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.essentialcontacts.contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_contacts_get"
    values={[
        { label: 'projects_contacts_get', value: 'projects_contacts_get' },
        { label: 'folders_contacts_get', value: 'folders_contacts_get' },
        { label: 'organizations_contacts_get', value: 'organizations_contacts_get' },
        { label: 'projects_contacts_list', value: 'projects_contacts_list' },
        { label: 'folders_contacts_list', value: 'folders_contacts_list' },
        { label: 'organizations_contacts_list', value: 'organizations_contacts_list' }
    ]}
>
<TabItem value="projects_contacts_get">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_contacts_get">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_contacts_get">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_contacts_list">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_contacts_list">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_contacts_list">

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
    <td>Output only. The identifier for the contact. Format: &#123;resource_type&#125;/&#123;resource_id&#125;/contacts/&#123;contact_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. The email address to send notifications to. The email address does not need to be a Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="languageTag" /></td>
    <td><code>string</code></td>
    <td>Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationCategorySubscriptions" /></td>
    <td><code>array</code></td>
    <td>Required. The categories of notifications that the contact will receive communications for.</td>
</tr>
<tr>
    <td><CopyableCode code="validateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.</td>
</tr>
<tr>
    <td><CopyableCode code="validationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.</td>
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
    <td><a href="#projects_contacts_get"><CopyableCode code="projects_contacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Gets a single contact.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_get"><CopyableCode code="folders_contacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Gets a single contact.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_get"><CopyableCode code="organizations_contacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Gets a single contact.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_list"><CopyableCode code="projects_contacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the contacts that have been set on a resource.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_list"><CopyableCode code="folders_contacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the contacts that have been set on a resource.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_list"><CopyableCode code="organizations_contacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the contacts that have been set on a resource.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_create"><CopyableCode code="projects_contacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Adds a new contact for a resource.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_create"><CopyableCode code="folders_contacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Adds a new contact for a resource.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_create"><CopyableCode code="organizations_contacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Adds a new contact for a resource.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_patch"><CopyableCode code="projects_contacts_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a contact. Note: A contact's email address cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_patch"><CopyableCode code="folders_contacts_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a contact. Note: A contact's email address cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_patch"><CopyableCode code="organizations_contacts_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a contact. Note: A contact's email address cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_delete"><CopyableCode code="projects_contacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Deletes a contact.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_delete"><CopyableCode code="folders_contacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Deletes a contact.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_delete"><CopyableCode code="organizations_contacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-contactsId"><code>contactsId</code></a></td>
    <td></td>
    <td>Deletes a contact.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_compute"><CopyableCode code="projects_contacts_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-notificationCategories"><code>notificationCategories</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.</td>
</tr>
<tr>
    <td><a href="#projects_contacts_send_test_message"><CopyableCode code="projects_contacts_send_test_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Allows a contact admin to send a test message to contact to verify that it has been configured correctly.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_compute"><CopyableCode code="folders_contacts_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-notificationCategories"><code>notificationCategories</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.</td>
</tr>
<tr>
    <td><a href="#folders_contacts_send_test_message"><CopyableCode code="folders_contacts_send_test_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Allows a contact admin to send a test message to contact to verify that it has been configured correctly.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_compute"><CopyableCode code="organizations_contacts_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-notificationCategories"><code>notificationCategories</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.</td>
</tr>
<tr>
    <td><a href="#organizations_contacts_send_test_message"><CopyableCode code="organizations_contacts_send_test_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Allows a contact admin to send a test message to contact to verify that it has been configured correctly.</td>
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
<tr id="parameter-contactsId">
    <td><CopyableCode code="contactsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-notificationCategories">
    <td><CopyableCode code="notificationCategories" /></td>
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
    defaultValue="projects_contacts_get"
    values={[
        { label: 'projects_contacts_get', value: 'projects_contacts_get' },
        { label: 'folders_contacts_get', value: 'folders_contacts_get' },
        { label: 'organizations_contacts_get', value: 'organizations_contacts_get' },
        { label: 'projects_contacts_list', value: 'projects_contacts_list' },
        { label: 'folders_contacts_list', value: 'folders_contacts_list' },
        { label: 'organizations_contacts_list', value: 'organizations_contacts_list' }
    ]}
>
<TabItem value="projects_contacts_get">

Gets a single contact.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE projectsId = '{{ projectsId }}' -- required
AND contactsId = '{{ contactsId }}' -- required;
```
</TabItem>
<TabItem value="folders_contacts_get">

Gets a single contact.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE foldersId = '{{ foldersId }}' -- required
AND contactsId = '{{ contactsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_contacts_get">

Gets a single contact.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE organizationsId = '{{ organizationsId }}' -- required
AND contactsId = '{{ contactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_contacts_list">

Lists the contacts that have been set on a resource.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_contacts_list">

Lists the contacts that have been set on a resource.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_contacts_list">

Lists the contacts that have been set on a resource.

```sql
SELECT
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
FROM google.essentialcontacts.contacts
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_contacts_create"
    values={[
        { label: 'projects_contacts_create', value: 'projects_contacts_create' },
        { label: 'folders_contacts_create', value: 'folders_contacts_create' },
        { label: 'organizations_contacts_create', value: 'organizations_contacts_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_contacts_create">

Adds a new contact for a resource.

```sql
INSERT INTO google.essentialcontacts.contacts (
data__email,
data__notificationCategorySubscriptions,
data__languageTag,
projectsId
)
SELECT 
'{{ email }}',
'{{ notificationCategorySubscriptions }}',
'{{ languageTag }}',
'{{ projectsId }}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
;
```
</TabItem>
<TabItem value="folders_contacts_create">

Adds a new contact for a resource.

```sql
INSERT INTO google.essentialcontacts.contacts (
data__email,
data__notificationCategorySubscriptions,
data__languageTag,
foldersId
)
SELECT 
'{{ email }}',
'{{ notificationCategorySubscriptions }}',
'{{ languageTag }}',
'{{ foldersId }}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
;
```
</TabItem>
<TabItem value="organizations_contacts_create">

Adds a new contact for a resource.

```sql
INSERT INTO google.essentialcontacts.contacts (
data__email,
data__notificationCategorySubscriptions,
data__languageTag,
organizationsId
)
SELECT 
'{{ email }}',
'{{ notificationCategorySubscriptions }}',
'{{ languageTag }}',
'{{ organizationsId }}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: contacts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the contacts resource.
    - name: foldersId
      value: string
      description: Required parameter for the contacts resource.
    - name: organizationsId
      value: string
      description: Required parameter for the contacts resource.
    - name: email
      value: string
      description: >
        Required. The email address to send notifications to. The email address does not need to be a Google Account.
        
    - name: notificationCategorySubscriptions
      value: array
      description: >
        Required. The categories of notifications that the contact will receive communications for.
        
    - name: languageTag
      value: string
      description: >
        Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_contacts_patch"
    values={[
        { label: 'projects_contacts_patch', value: 'projects_contacts_patch' },
        { label: 'folders_contacts_patch', value: 'folders_contacts_patch' },
        { label: 'organizations_contacts_patch', value: 'organizations_contacts_patch' }
    ]}
>
<TabItem value="projects_contacts_patch">

Updates a contact. Note: A contact's email address cannot be changed.

```sql
UPDATE google.essentialcontacts.contacts
SET 
data__email = '{{ email }}',
data__notificationCategorySubscriptions = '{{ notificationCategorySubscriptions }}',
data__languageTag = '{{ languageTag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND contactsId = '{{ contactsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState;
```
</TabItem>
<TabItem value="folders_contacts_patch">

Updates a contact. Note: A contact's email address cannot be changed.

```sql
UPDATE google.essentialcontacts.contacts
SET 
data__email = '{{ email }}',
data__notificationCategorySubscriptions = '{{ notificationCategorySubscriptions }}',
data__languageTag = '{{ languageTag }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND contactsId = '{{ contactsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState;
```
</TabItem>
<TabItem value="organizations_contacts_patch">

Updates a contact. Note: A contact's email address cannot be changed.

```sql
UPDATE google.essentialcontacts.contacts
SET 
data__email = '{{ email }}',
data__notificationCategorySubscriptions = '{{ notificationCategorySubscriptions }}',
data__languageTag = '{{ languageTag }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND contactsId = '{{ contactsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
email,
languageTag,
notificationCategorySubscriptions,
validateTime,
validationState;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_contacts_delete"
    values={[
        { label: 'projects_contacts_delete', value: 'projects_contacts_delete' },
        { label: 'folders_contacts_delete', value: 'folders_contacts_delete' },
        { label: 'organizations_contacts_delete', value: 'organizations_contacts_delete' }
    ]}
>
<TabItem value="projects_contacts_delete">

Deletes a contact.

```sql
DELETE FROM google.essentialcontacts.contacts
WHERE projectsId = '{{ projectsId }}' --required
AND contactsId = '{{ contactsId }}' --required;
```
</TabItem>
<TabItem value="folders_contacts_delete">

Deletes a contact.

```sql
DELETE FROM google.essentialcontacts.contacts
WHERE foldersId = '{{ foldersId }}' --required
AND contactsId = '{{ contactsId }}' --required;
```
</TabItem>
<TabItem value="organizations_contacts_delete">

Deletes a contact.

```sql
DELETE FROM google.essentialcontacts.contacts
WHERE organizationsId = '{{ organizationsId }}' --required
AND contactsId = '{{ contactsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_contacts_compute"
    values={[
        { label: 'projects_contacts_compute', value: 'projects_contacts_compute' },
        { label: 'projects_contacts_send_test_message', value: 'projects_contacts_send_test_message' },
        { label: 'folders_contacts_compute', value: 'folders_contacts_compute' },
        { label: 'folders_contacts_send_test_message', value: 'folders_contacts_send_test_message' },
        { label: 'organizations_contacts_compute', value: 'organizations_contacts_compute' },
        { label: 'organizations_contacts_send_test_message', value: 'organizations_contacts_send_test_message' }
    ]}
>
<TabItem value="projects_contacts_compute">

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

```sql
EXEC google.essentialcontacts.contacts.projects_contacts_compute 
@projectsId='{{ projectsId }}' --required, 
@notificationCategories='{{ notificationCategories }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_contacts_send_test_message">

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

```sql
EXEC google.essentialcontacts.contacts.projects_contacts_send_test_message 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"contacts": "{{ contacts }}", 
"notificationCategory": "{{ notificationCategory }}"
}';
```
</TabItem>
<TabItem value="folders_contacts_compute">

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

```sql
EXEC google.essentialcontacts.contacts.folders_contacts_compute 
@foldersId='{{ foldersId }}' --required, 
@notificationCategories='{{ notificationCategories }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_contacts_send_test_message">

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

```sql
EXEC google.essentialcontacts.contacts.folders_contacts_send_test_message 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"contacts": "{{ contacts }}", 
"notificationCategory": "{{ notificationCategory }}"
}';
```
</TabItem>
<TabItem value="organizations_contacts_compute">

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

```sql
EXEC google.essentialcontacts.contacts.organizations_contacts_compute 
@organizationsId='{{ organizationsId }}' --required, 
@notificationCategories='{{ notificationCategories }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_contacts_send_test_message">

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

```sql
EXEC google.essentialcontacts.contacts.organizations_contacts_send_test_message 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"contacts": "{{ contacts }}", 
"notificationCategory": "{{ notificationCategory }}"
}';
```
</TabItem>
</Tabs>
