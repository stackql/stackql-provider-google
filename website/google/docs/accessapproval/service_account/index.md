--- 
title: service_account
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account
  - accessapproval
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

Creates, updates, deletes, gets or lists a <code>service_account</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_account</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accessapproval.service_account" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get_service_account"
    values={[
        { label: 'projects_get_service_account', value: 'projects_get_service_account' },
        { label: 'folders_get_service_account', value: 'folders_get_service_account' },
        { label: 'organizations_get_service_account', value: 'organizations_get_service_account' }
    ]}
>
<TabItem value="projects_get_service_account">

Access Approval service account related to a project/folder/organization.

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
    <td>The resource name of the Access Approval service account. Format is one of: * "projects/&#123;project&#125;/serviceAccount" * "folders/&#123;folder&#125;/serviceAccount" * "organizations/&#123;organization&#125;/serviceAccount"</td>
</tr>
<tr>
    <td><CopyableCode code="accountEmail" /></td>
    <td><code>string</code></td>
    <td>Email address of the service account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_get_service_account">

Access Approval service account related to a project/folder/organization.

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
    <td>The resource name of the Access Approval service account. Format is one of: * "projects/&#123;project&#125;/serviceAccount" * "folders/&#123;folder&#125;/serviceAccount" * "organizations/&#123;organization&#125;/serviceAccount"</td>
</tr>
<tr>
    <td><CopyableCode code="accountEmail" /></td>
    <td><code>string</code></td>
    <td>Email address of the service account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_get_service_account">

Access Approval service account related to a project/folder/organization.

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
    <td>The resource name of the Access Approval service account. Format is one of: * "projects/&#123;project&#125;/serviceAccount" * "folders/&#123;folder&#125;/serviceAccount" * "organizations/&#123;organization&#125;/serviceAccount"</td>
</tr>
<tr>
    <td><CopyableCode code="accountEmail" /></td>
    <td><code>string</code></td>
    <td>Email address of the service account.</td>
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
    <td><a href="#projects_get_service_account"><CopyableCode code="projects_get_service_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.</td>
</tr>
<tr>
    <td><a href="#folders_get_service_account"><CopyableCode code="folders_get_service_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.</td>
</tr>
<tr>
    <td><a href="#organizations_get_service_account"><CopyableCode code="organizations_get_service_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_get_service_account"
    values={[
        { label: 'projects_get_service_account', value: 'projects_get_service_account' },
        { label: 'folders_get_service_account', value: 'folders_get_service_account' },
        { label: 'organizations_get_service_account', value: 'organizations_get_service_account' }
    ]}
>
<TabItem value="projects_get_service_account">

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

```sql
SELECT
name,
accountEmail
FROM google.accessapproval.service_account
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
<TabItem value="folders_get_service_account">

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

```sql
SELECT
name,
accountEmail
FROM google.accessapproval.service_account
WHERE foldersId = '{{ foldersId }}' -- required;
```
</TabItem>
<TabItem value="organizations_get_service_account">

Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.

```sql
SELECT
name,
accountEmail
FROM google.accessapproval.service_account
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>
