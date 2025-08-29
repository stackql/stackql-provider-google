--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - firebase
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.projects" /></td></tr>
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
    <td>The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google's [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-assigned display name of the Project.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.</td>
</tr>
<tr>
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Output only. **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default Firebase resources associated with the Project. (id: DefaultResources)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The lifecycle state of the Project.</td>
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
    <td>The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google's [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-assigned display name of the Project.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.</td>
</tr>
<tr>
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Output only. **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default Firebase resources associated with the Project. (id: DefaultResources)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The lifecycle state of the Project.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the specified FirebaseProject.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the attributes of the specified FirebaseProject. All [query parameters](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/list#query-parameters) are required.</td>
</tr>
<tr>
    <td><a href="#search_apps"><CopyableCode code="search_apps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).</td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
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

Gets the specified FirebaseProject.

```sql
SELECT
name,
annotations,
displayName,
etag,
projectId,
projectNumber,
resources,
state
FROM firebase.firebase.projects
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

```sql
SELECT
name,
annotations,
displayName,
etag,
projectId,
projectNumber,
resources,
state
FROM firebase.firebase.projects
WHERE pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND showDeleted = '{{ showDeleted }}';
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

Updates the attributes of the specified FirebaseProject. All [query parameters](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/list#query-parameters) are required.

```sql
UPDATE firebase.firebase.projects
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
annotations,
displayName,
etag,
projectId,
projectNumber,
resources,
state;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_apps"
    values={[
        { label: 'search_apps', value: 'search_apps' }
    ]}
>
<TabItem value="search_apps">

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

```sql
EXEC firebase.firebase.projects.search_apps 
@projectsId='{{ projectsId }}' --required, 
@pageToken='{{ pageToken }}', 
@pageSize='{{ pageSize }}', 
@filter='{{ filter }}', 
@showDeleted={{ showDeleted }};
```
</TabItem>
</Tabs>
