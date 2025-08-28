--- 
title: admin_sdk_config
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_sdk_config
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

Creates, updates, deletes, gets or lists an <code>admin_sdk_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>admin_sdk_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.admin_sdk_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_admin_sdk_config"
    values={[
        { label: 'get_admin_sdk_config', value: 'get_admin_sdk_config' }
    ]}
>
<TabItem value="get_admin_sdk_config">

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
    <td><CopyableCode code="databaseURL" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, find the URL of the default Realtime Database instance using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. If the default instance for the Project has not yet been provisioned, the return might not contain a default instance. Note that the config that's generated for the Firebase console or the Firebase CLI uses the Realtime Database endpoint to populate this value for that config._ The URL of the default Firebase Realtime Database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, use product-specific REST APIs to find the location of each resource in a Project. This field may not be populated, especially for newly provisioned projects after October 30, 2024._ The ID of the Project's ["location for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location), which are resources associated with Google App Engine. The location is one of the available [App Engine locations](https://cloud.google.com/about/locations#region). This field is omitted if the location for default Google Cloud resources has not been set.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Immutable. A user-assigned unique identifier for the `FirebaseProject`. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBucket" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, find the name of the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. If the default bucket for the Project has not yet been provisioned, the return might not contain a default bucket. Note that the config that's generated for the Firebase console or the Firebase CLI uses the Cloud Storage for Firebase endpoint to populate this value for that config._ The name of the default Cloud Storage for Firebase bucket.</td>
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
    <td><a href="#get_admin_sdk_config"><CopyableCode code="get_admin_sdk_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the configuration artifact associated with the specified FirebaseProject, which can be used by servers to simplify initialization. Typically, this configuration is used with the Firebase Admin SDK [initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) command.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_admin_sdk_config"
    values={[
        { label: 'get_admin_sdk_config', value: 'get_admin_sdk_config' }
    ]}
>
<TabItem value="get_admin_sdk_config">

Gets the configuration artifact associated with the specified FirebaseProject, which can be used by servers to simplify initialization. Typically, this configuration is used with the Firebase Admin SDK [initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) command.

```sql
SELECT
databaseURL,
locationId,
projectId,
storageBucket
FROM firebase.firebase.admin_sdk_config
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
</Tabs>
