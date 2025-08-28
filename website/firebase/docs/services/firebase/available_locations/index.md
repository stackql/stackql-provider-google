--- 
title: available_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - available_locations
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

Creates, updates, deletes, gets or lists an <code>available_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>available_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.available_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>Products and services that are available in the location for default Google Cloud resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Project's location for default Google Cloud resources. It will be one of the available [Google App Engine locations](https://cloud.google.com/about/locations#region).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the location for default Google Cloud resources is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>**DECOMMISSIONED.** **If called, this endpoint will return a 404 error.** _Instead, use the applicable resource-specific REST API (or associated documentation, as needed) to determine valid locations for each resource used in your Project._ Lists the valid ["locations for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location) for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's location for default Google Cloud resources, which is the geographical location where the Project's resources associated with Google App Engine (such as the default Cloud Firestore instance) will be provisioned by default. However, if the location for default Google Cloud resources has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible locations. To list all locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/&#123;parent=projects/-&#125;/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

**DECOMMISSIONED.** **If called, this endpoint will return a 404 error.** _Instead, use the applicable resource-specific REST API (or associated documentation, as needed) to determine valid locations for each resource used in your Project._ Lists the valid ["locations for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location) for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's location for default Google Cloud resources, which is the geographical location where the Project's resources associated with Google App Engine (such as the default Cloud Firestore instance) will be provisioned by default. However, if the location for default Google Cloud resources has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible locations. To list all locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/&#123;parent=projects/-&#125;/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

```sql
SELECT
features,
locationId,
type
FROM firebase.firebase.available_locations
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
