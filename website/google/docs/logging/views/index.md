--- 
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - logging
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

Creates, updates, deletes, gets or lists a <code>views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_buckets_views_get"
    values={[
        { label: 'projects_locations_buckets_views_get', value: 'projects_locations_buckets_views_get' },
        { label: 'organizations_locations_buckets_views_get', value: 'organizations_locations_buckets_views_get' },
        { label: 'folders_locations_buckets_views_get', value: 'folders_locations_buckets_views_get' },
        { label: 'billing_accounts_locations_buckets_views_get', value: 'billing_accounts_locations_buckets_views_get' },
        { label: 'projects_locations_buckets_views_list', value: 'projects_locations_buckets_views_list' },
        { label: 'organizations_locations_buckets_views_list', value: 'organizations_locations_buckets_views_list' },
        { label: 'folders_locations_buckets_views_list', value: 'folders_locations_buckets_views_list' },
        { label: 'billing_accounts_locations_buckets_views_list', value: 'billing_accounts_locations_buckets_views_list' },
        { label: 'locations_buckets_views_list', value: 'locations_buckets_views_list' }
    ]}
>
<TabItem value="projects_locations_buckets_views_get">

Describes a view over log entries in a bucket.

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
    <td>Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this view.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the view.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_views_get">

Describes a view over log entries in a bucket.

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
    <td>Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this view.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the view.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_views_get">

Describes a view over log entries in a bucket.

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
    <td>Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this view.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the view.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_get">

Describes a view over log entries in a bucket.

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
    <td>Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this view.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the view.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_buckets_views_list">

The response from ListViews.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="views" /></td>
    <td><code>array</code></td>
    <td>A list of views.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_views_list">

The response from ListViews.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="views" /></td>
    <td><code>array</code></td>
    <td>A list of views.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_views_list">

The response from ListViews.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="views" /></td>
    <td><code>array</code></td>
    <td>A list of views.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_list">

The response from ListViews.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="views" /></td>
    <td><code>array</code></td>
    <td>A list of views.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="locations_buckets_views_list">

The response from ListViews.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="views" /></td>
    <td><code>array</code></td>
    <td>A list of views.</td>
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
    <td><a href="#projects_locations_buckets_views_get"><CopyableCode code="projects_locations_buckets_views_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Gets a view on a log bucket.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_get"><CopyableCode code="organizations_locations_buckets_views_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Gets a view on a log bucket.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_get"><CopyableCode code="folders_locations_buckets_views_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Gets a view on a log bucket.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_get"><CopyableCode code="billing_accounts_locations_buckets_views_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Gets a view on a log bucket.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_views_list"><CopyableCode code="projects_locations_buckets_views_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists views on a log bucket.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_list"><CopyableCode code="organizations_locations_buckets_views_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists views on a log bucket.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_list"><CopyableCode code="folders_locations_buckets_views_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists views on a log bucket.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_list"><CopyableCode code="billing_accounts_locations_buckets_views_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists views on a log bucket.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_views_list"><CopyableCode code="locations_buckets_views_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists views on a log bucket.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_views_create"><CopyableCode code="projects_locations_buckets_views_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_create"><CopyableCode code="organizations_locations_buckets_views_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_create"><CopyableCode code="folders_locations_buckets_views_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_create"><CopyableCode code="billing_accounts_locations_buckets_views_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_views_create"><CopyableCode code="locations_buckets_views_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_views_patch"><CopyableCode code="projects_locations_buckets_views_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_patch"><CopyableCode code="organizations_locations_buckets_views_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_patch"><CopyableCode code="folders_locations_buckets_views_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_patch"><CopyableCode code="billing_accounts_locations_buckets_views_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_views_delete"><CopyableCode code="projects_locations_buckets_views_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_views_delete"><CopyableCode code="organizations_locations_buckets_views_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_views_delete"><CopyableCode code="folders_locations_buckets_views_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_views_delete"><CopyableCode code="billing_accounts_locations_buckets_views_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-viewsId"><code>viewsId</code></a></td>
    <td></td>
    <td>Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bucketsId">
    <td><CopyableCode code="bucketsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-viewsId">
    <td><CopyableCode code="viewsId" /></td>
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
<tr id="parameter-viewId">
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_buckets_views_get"
    values={[
        { label: 'projects_locations_buckets_views_get', value: 'projects_locations_buckets_views_get' },
        { label: 'organizations_locations_buckets_views_get', value: 'organizations_locations_buckets_views_get' },
        { label: 'folders_locations_buckets_views_get', value: 'folders_locations_buckets_views_get' },
        { label: 'billing_accounts_locations_buckets_views_get', value: 'billing_accounts_locations_buckets_views_get' },
        { label: 'projects_locations_buckets_views_list', value: 'projects_locations_buckets_views_list' },
        { label: 'organizations_locations_buckets_views_list', value: 'organizations_locations_buckets_views_list' },
        { label: 'folders_locations_buckets_views_list', value: 'folders_locations_buckets_views_list' },
        { label: 'billing_accounts_locations_buckets_views_list', value: 'billing_accounts_locations_buckets_views_list' },
        { label: 'locations_buckets_views_list', value: 'locations_buckets_views_list' }
    ]}
>
<TabItem value="projects_locations_buckets_views_get">

Gets a view on a log bucket.

```sql
SELECT
name,
createTime,
description,
filter,
updateTime
FROM google.logging.views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_get">

Gets a view on a log bucket.

```sql
SELECT
name,
createTime,
description,
filter,
updateTime
FROM google.logging.views
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_buckets_views_get">

Gets a view on a log bucket.

```sql
SELECT
name,
createTime,
description,
filter,
updateTime
FROM google.logging.views
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_get">

Gets a view on a log bucket.

```sql
SELECT
name,
createTime,
description,
filter,
updateTime
FROM google.logging.views
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND viewsId = '{{ viewsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_buckets_views_list">

Lists views on a log bucket.

```sql
SELECT
nextPageToken,
views
FROM google.logging.views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_list">

Lists views on a log bucket.

```sql
SELECT
nextPageToken,
views
FROM google.logging.views
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="folders_locations_buckets_views_list">

Lists views on a log bucket.

```sql
SELECT
nextPageToken,
views
FROM google.logging.views
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_list">

Lists views on a log bucket.

```sql
SELECT
nextPageToken,
views
FROM google.logging.views
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="locations_buckets_views_list">

Lists views on a log bucket.

```sql
SELECT
nextPageToken,
views
FROM google.logging.views
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_buckets_views_create"
    values={[
        { label: 'projects_locations_buckets_views_create', value: 'projects_locations_buckets_views_create' },
        { label: 'organizations_locations_buckets_views_create', value: 'organizations_locations_buckets_views_create' },
        { label: 'folders_locations_buckets_views_create', value: 'folders_locations_buckets_views_create' },
        { label: 'billing_accounts_locations_buckets_views_create', value: 'billing_accounts_locations_buckets_views_create' },
        { label: 'locations_buckets_views_create', value: 'locations_buckets_views_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_buckets_views_create">

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

```sql
INSERT INTO google.logging.views (
data__description,
data__filter,
projectsId,
locationsId,
bucketsId,
viewId
)
SELECT 
'{{ description }}',
'{{ filter }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ viewId }}'
RETURNING
name,
createTime,
description,
filter,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_create">

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

```sql
INSERT INTO google.logging.views (
data__description,
data__filter,
organizationsId,
locationsId,
bucketsId,
viewId
)
SELECT 
'{{ description }}',
'{{ filter }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ viewId }}'
RETURNING
name,
createTime,
description,
filter,
updateTime
;
```
</TabItem>
<TabItem value="folders_locations_buckets_views_create">

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

```sql
INSERT INTO google.logging.views (
data__description,
data__filter,
foldersId,
locationsId,
bucketsId,
viewId
)
SELECT 
'{{ description }}',
'{{ filter }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ viewId }}'
RETURNING
name,
createTime,
description,
filter,
updateTime
;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_create">

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

```sql
INSERT INTO google.logging.views (
data__description,
data__filter,
billingAccountsId,
locationsId,
bucketsId,
viewId
)
SELECT 
'{{ description }}',
'{{ filter }}',
'{{ billingAccountsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ viewId }}'
RETURNING
name,
createTime,
description,
filter,
updateTime
;
```
</TabItem>
<TabItem value="locations_buckets_views_create">

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

```sql
INSERT INTO google.logging.views (
data__description,
data__filter,
parentType,
parent,
viewId
)
SELECT 
'{{ description }}',
'{{ filter }}',
'{{ parentType }}',
'{{ parent }}',
'{{ viewId }}'
RETURNING
name,
createTime,
description,
filter,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: views
  props:
    - name: projectsId
      value: string
      description: Required parameter for the views resource.
    - name: locationsId
      value: string
      description: Required parameter for the views resource.
    - name: bucketsId
      value: string
      description: Required parameter for the views resource.
    - name: organizationsId
      value: string
      description: Required parameter for the views resource.
    - name: foldersId
      value: string
      description: Required parameter for the views resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the views resource.
    - name: parentType
      value: string
      description: Required parameter for the views resource.
    - name: parent
      value: string
      description: Required parameter for the views resource.
    - name: description
      value: string
      description: >
        Optional. Describes this view.
        
    - name: filter
      value: string
      description: >
        Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")
        
    - name: viewId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_buckets_views_patch"
    values={[
        { label: 'projects_locations_buckets_views_patch', value: 'projects_locations_buckets_views_patch' },
        { label: 'organizations_locations_buckets_views_patch', value: 'organizations_locations_buckets_views_patch' },
        { label: 'folders_locations_buckets_views_patch', value: 'folders_locations_buckets_views_patch' },
        { label: 'billing_accounts_locations_buckets_views_patch', value: 'billing_accounts_locations_buckets_views_patch' }
    ]}
>
<TabItem value="projects_locations_buckets_views_patch">

Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

```sql
UPDATE google.logging.views
SET 
data__description = '{{ description }}',
data__filter = '{{ filter }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
filter,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_patch">

Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

```sql
UPDATE google.logging.views
SET 
data__description = '{{ description }}',
data__filter = '{{ filter }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
filter,
updateTime;
```
</TabItem>
<TabItem value="folders_locations_buckets_views_patch">

Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

```sql
UPDATE google.logging.views
SET 
data__description = '{{ description }}',
data__filter = '{{ filter }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
filter,
updateTime;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_patch">

Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

```sql
UPDATE google.logging.views
SET 
data__description = '{{ description }}',
data__filter = '{{ filter }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
filter,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_buckets_views_delete"
    values={[
        { label: 'projects_locations_buckets_views_delete', value: 'projects_locations_buckets_views_delete' },
        { label: 'organizations_locations_buckets_views_delete', value: 'organizations_locations_buckets_views_delete' },
        { label: 'folders_locations_buckets_views_delete', value: 'folders_locations_buckets_views_delete' },
        { label: 'billing_accounts_locations_buckets_views_delete', value: 'billing_accounts_locations_buckets_views_delete' }
    ]}
>
<TabItem value="projects_locations_buckets_views_delete">

Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.

```sql
DELETE FROM google.logging.views
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_views_delete">

Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.

```sql
DELETE FROM google.logging.views
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_buckets_views_delete">

Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.

```sql
DELETE FROM google.logging.views
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_views_delete">

Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.

```sql
DELETE FROM google.logging.views
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND viewsId = '{{ viewsId }}' --required;
```
</TabItem>
</Tabs>
