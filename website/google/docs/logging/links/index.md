--- 
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
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

Creates, updates, deletes, gets or lists a <code>links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_buckets_links_get"
    values={[
        { label: 'projects_locations_buckets_links_get', value: 'projects_locations_buckets_links_get' },
        { label: 'organizations_locations_buckets_links_get', value: 'organizations_locations_buckets_links_get' },
        { label: 'folders_locations_buckets_links_get', value: 'folders_locations_buckets_links_get' },
        { label: 'billing_accounts_locations_buckets_links_get', value: 'billing_accounts_locations_buckets_links_get' },
        { label: 'projects_locations_buckets_links_list', value: 'projects_locations_buckets_links_list' },
        { label: 'organizations_locations_buckets_links_list', value: 'organizations_locations_buckets_links_list' },
        { label: 'folders_locations_buckets_links_list', value: 'folders_locations_buckets_links_list' },
        { label: 'billing_accounts_locations_buckets_links_list', value: 'billing_accounts_locations_buckets_links_list' },
        { label: 'locations_buckets_links_list', value: 'locations_buckets_links_list' }
    ]}
>
<TabItem value="projects_locations_buckets_links_get">

Describes a link connected to an analytics enabled bucket.

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
    <td>Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket. (id: BigQueryDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this link.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource lifecycle state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_links_get">

Describes a link connected to an analytics enabled bucket.

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
    <td>Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket. (id: BigQueryDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this link.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource lifecycle state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_links_get">

Describes a link connected to an analytics enabled bucket.

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
    <td>Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket. (id: BigQueryDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this link.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource lifecycle state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_get">

Describes a link connected to an analytics enabled bucket.

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
    <td>Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket. (id: BigQueryDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this link.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource lifecycle state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_buckets_links_list">

The response from ListLinks.

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
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>A list of links.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_links_list">

The response from ListLinks.

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
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>A list of links.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_links_list">

The response from ListLinks.

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
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>A list of links.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_list">

The response from ListLinks.

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
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>A list of links.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="locations_buckets_links_list">

The response from ListLinks.

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
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>A list of links.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
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
    <td><a href="#projects_locations_buckets_links_get"><CopyableCode code="projects_locations_buckets_links_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Gets a link.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_links_get"><CopyableCode code="organizations_locations_buckets_links_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Gets a link.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_links_get"><CopyableCode code="folders_locations_buckets_links_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Gets a link.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_links_get"><CopyableCode code="billing_accounts_locations_buckets_links_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Gets a link.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_links_list"><CopyableCode code="projects_locations_buckets_links_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists links.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_links_list"><CopyableCode code="organizations_locations_buckets_links_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists links.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_links_list"><CopyableCode code="folders_locations_buckets_links_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists links.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_links_list"><CopyableCode code="billing_accounts_locations_buckets_links_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists links.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_links_list"><CopyableCode code="locations_buckets_links_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists links.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_links_create"><CopyableCode code="projects_locations_buckets_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_links_create"><CopyableCode code="organizations_locations_buckets_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_links_create"><CopyableCode code="folders_locations_buckets_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_links_create"><CopyableCode code="billing_accounts_locations_buckets_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_links_create"><CopyableCode code="locations_buckets_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_links_delete"><CopyableCode code="projects_locations_buckets_links_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Deletes a link. This will also delete the corresponding BigQuery linked dataset.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_links_delete"><CopyableCode code="organizations_locations_buckets_links_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Deletes a link. This will also delete the corresponding BigQuery linked dataset.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_links_delete"><CopyableCode code="folders_locations_buckets_links_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Deletes a link. This will also delete the corresponding BigQuery linked dataset.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_links_delete"><CopyableCode code="billing_accounts_locations_buckets_links_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Deletes a link. This will also delete the corresponding BigQuery linked dataset.</td>
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
<tr id="parameter-linksId">
    <td><CopyableCode code="linksId" /></td>
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
<tr id="parameter-linkId">
    <td><CopyableCode code="linkId" /></td>
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
    defaultValue="projects_locations_buckets_links_get"
    values={[
        { label: 'projects_locations_buckets_links_get', value: 'projects_locations_buckets_links_get' },
        { label: 'organizations_locations_buckets_links_get', value: 'organizations_locations_buckets_links_get' },
        { label: 'folders_locations_buckets_links_get', value: 'folders_locations_buckets_links_get' },
        { label: 'billing_accounts_locations_buckets_links_get', value: 'billing_accounts_locations_buckets_links_get' },
        { label: 'projects_locations_buckets_links_list', value: 'projects_locations_buckets_links_list' },
        { label: 'organizations_locations_buckets_links_list', value: 'organizations_locations_buckets_links_list' },
        { label: 'folders_locations_buckets_links_list', value: 'folders_locations_buckets_links_list' },
        { label: 'billing_accounts_locations_buckets_links_list', value: 'billing_accounts_locations_buckets_links_list' },
        { label: 'locations_buckets_links_list', value: 'locations_buckets_links_list' }
    ]}
>
<TabItem value="projects_locations_buckets_links_get">

Gets a link.

```sql
SELECT
name,
bigqueryDataset,
createTime,
description,
lifecycleState
FROM google.logging.links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND linksId = '{{ linksId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_links_get">

Gets a link.

```sql
SELECT
name,
bigqueryDataset,
createTime,
description,
lifecycleState
FROM google.logging.links
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND linksId = '{{ linksId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_buckets_links_get">

Gets a link.

```sql
SELECT
name,
bigqueryDataset,
createTime,
description,
lifecycleState
FROM google.logging.links
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND linksId = '{{ linksId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_get">

Gets a link.

```sql
SELECT
name,
bigqueryDataset,
createTime,
description,
lifecycleState
FROM google.logging.links
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND linksId = '{{ linksId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_buckets_links_list">

Lists links.

```sql
SELECT
links,
nextPageToken
FROM google.logging.links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_locations_buckets_links_list">

Lists links.

```sql
SELECT
links,
nextPageToken
FROM google.logging.links
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="folders_locations_buckets_links_list">

Lists links.

```sql
SELECT
links,
nextPageToken
FROM google.logging.links
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_list">

Lists links.

```sql
SELECT
links,
nextPageToken
FROM google.logging.links
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="locations_buckets_links_list">

Lists links.

```sql
SELECT
links,
nextPageToken
FROM google.logging.links
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_buckets_links_create"
    values={[
        { label: 'projects_locations_buckets_links_create', value: 'projects_locations_buckets_links_create' },
        { label: 'organizations_locations_buckets_links_create', value: 'organizations_locations_buckets_links_create' },
        { label: 'folders_locations_buckets_links_create', value: 'folders_locations_buckets_links_create' },
        { label: 'billing_accounts_locations_buckets_links_create', value: 'billing_accounts_locations_buckets_links_create' },
        { label: 'locations_buckets_links_create', value: 'locations_buckets_links_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_buckets_links_create">

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

```sql
INSERT INTO google.logging.links (
data__description,
data__bigqueryDataset,
projectsId,
locationsId,
bucketsId,
linkId
)
SELECT 
'{{ description }}',
'{{ bigqueryDataset }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ linkId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="organizations_locations_buckets_links_create">

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

```sql
INSERT INTO google.logging.links (
data__description,
data__bigqueryDataset,
organizationsId,
locationsId,
bucketsId,
linkId
)
SELECT 
'{{ description }}',
'{{ bigqueryDataset }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ linkId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="folders_locations_buckets_links_create">

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

```sql
INSERT INTO google.logging.links (
data__description,
data__bigqueryDataset,
foldersId,
locationsId,
bucketsId,
linkId
)
SELECT 
'{{ description }}',
'{{ bigqueryDataset }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ linkId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_create">

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

```sql
INSERT INTO google.logging.links (
data__description,
data__bigqueryDataset,
billingAccountsId,
locationsId,
bucketsId,
linkId
)
SELECT 
'{{ description }}',
'{{ bigqueryDataset }}',
'{{ billingAccountsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ linkId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="locations_buckets_links_create">

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

```sql
INSERT INTO google.logging.links (
data__description,
data__bigqueryDataset,
parentType,
parent,
linkId
)
SELECT 
'{{ description }}',
'{{ bigqueryDataset }}',
'{{ parentType }}',
'{{ parent }}',
'{{ linkId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: links
  props:
    - name: projectsId
      value: string
      description: Required parameter for the links resource.
    - name: locationsId
      value: string
      description: Required parameter for the links resource.
    - name: bucketsId
      value: string
      description: Required parameter for the links resource.
    - name: organizationsId
      value: string
      description: Required parameter for the links resource.
    - name: foldersId
      value: string
      description: Required parameter for the links resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the links resource.
    - name: parentType
      value: string
      description: Required parameter for the links resource.
    - name: parent
      value: string
      description: Required parameter for the links resource.
    - name: description
      value: string
      description: >
        Optional. Describes this link.The maximum length of the description is 8000 characters.
        
    - name: bigqueryDataset
      value: object
      description: >
        Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket.
        
    - name: linkId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_buckets_links_delete"
    values={[
        { label: 'projects_locations_buckets_links_delete', value: 'projects_locations_buckets_links_delete' },
        { label: 'organizations_locations_buckets_links_delete', value: 'organizations_locations_buckets_links_delete' },
        { label: 'folders_locations_buckets_links_delete', value: 'folders_locations_buckets_links_delete' },
        { label: 'billing_accounts_locations_buckets_links_delete', value: 'billing_accounts_locations_buckets_links_delete' }
    ]}
>
<TabItem value="projects_locations_buckets_links_delete">

Deletes a link. This will also delete the corresponding BigQuery linked dataset.

```sql
DELETE FROM google.logging.links
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND linksId = '{{ linksId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_links_delete">

Deletes a link. This will also delete the corresponding BigQuery linked dataset.

```sql
DELETE FROM google.logging.links
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND linksId = '{{ linksId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_buckets_links_delete">

Deletes a link. This will also delete the corresponding BigQuery linked dataset.

```sql
DELETE FROM google.logging.links
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND linksId = '{{ linksId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_links_delete">

Deletes a link. This will also delete the corresponding BigQuery linked dataset.

```sql
DELETE FROM google.logging.links
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND linksId = '{{ linksId }}' --required;
```
</TabItem>
</Tabs>
