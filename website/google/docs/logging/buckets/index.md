--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_buckets_get"
    values={[
        { label: 'projects_locations_buckets_get', value: 'projects_locations_buckets_get' },
        { label: 'organizations_locations_buckets_get', value: 'organizations_locations_buckets_get' },
        { label: 'folders_locations_buckets_get', value: 'folders_locations_buckets_get' },
        { label: 'billing_accounts_locations_buckets_get', value: 'billing_accounts_locations_buckets_get' },
        { label: 'locations_buckets_list', value: 'locations_buckets_list' },
        { label: 'projects_locations_buckets_list', value: 'projects_locations_buckets_list' },
        { label: 'organizations_locations_buckets_list', value: 'organizations_locations_buckets_list' },
        { label: 'folders_locations_buckets_list', value: 'folders_locations_buckets_list' },
        { label: 'billing_accounts_locations_buckets_list', value: 'billing_accounts_locations_buckets_list' }
    ]}
>
<TabItem value="projects_locations_buckets_get">

Describes a repository in which log entries are stored.

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
    <td>Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. (id: CmekSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="indexConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of indexed fields and related configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The bucket lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedFields" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the bucket.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_get">

Describes a repository in which log entries are stored.

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
    <td>Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. (id: CmekSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="indexConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of indexed fields and related configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The bucket lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedFields" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the bucket.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_get">

Describes a repository in which log entries are stored.

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
    <td>Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. (id: CmekSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="indexConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of indexed fields and related configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The bucket lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedFields" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the bucket.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_get">

Describes a repository in which log entries are stored.

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
    <td>Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. (id: CmekSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="indexConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of indexed fields and related configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Output only. The bucket lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedFields" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the bucket.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="locations_buckets_list">

The response from ListBuckets.

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>A list of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_buckets_list">

The response from ListBuckets.

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>A list of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_buckets_list">

The response from ListBuckets.

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>A list of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_buckets_list">

The response from ListBuckets.

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>A list of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_buckets_list">

The response from ListBuckets.

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>A list of buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
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
    <td><a href="#projects_locations_buckets_get"><CopyableCode code="projects_locations_buckets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Gets a log bucket.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_get"><CopyableCode code="organizations_locations_buckets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Gets a log bucket.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_get"><CopyableCode code="folders_locations_buckets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Gets a log bucket.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_get"><CopyableCode code="billing_accounts_locations_buckets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Gets a log bucket.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_list"><CopyableCode code="locations_buckets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log buckets.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_list"><CopyableCode code="projects_locations_buckets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log buckets.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_list"><CopyableCode code="organizations_locations_buckets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log buckets.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_list"><CopyableCode code="folders_locations_buckets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log buckets.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_list"><CopyableCode code="billing_accounts_locations_buckets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log buckets.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_create"><CopyableCode code="locations_buckets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_create"><CopyableCode code="projects_locations_buckets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_create"><CopyableCode code="organizations_locations_buckets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_create"><CopyableCode code="folders_locations_buckets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_create"><CopyableCode code="billing_accounts_locations_buckets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_patch"><CopyableCode code="projects_locations_buckets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_patch"><CopyableCode code="organizations_locations_buckets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_patch"><CopyableCode code="folders_locations_buckets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_patch"><CopyableCode code="billing_accounts_locations_buckets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_delete"><CopyableCode code="projects_locations_buckets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_delete"><CopyableCode code="organizations_locations_buckets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_delete"><CopyableCode code="folders_locations_buckets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_delete"><CopyableCode code="billing_accounts_locations_buckets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.</td>
</tr>
<tr>
    <td><a href="#locations_buckets_undelete"><CopyableCode code="locations_buckets_undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_undelete"><CopyableCode code="projects_locations_buckets_undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_undelete"><CopyableCode code="organizations_locations_buckets_undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_undelete"><CopyableCode code="folders_locations_buckets_undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_undelete"><CopyableCode code="billing_accounts_locations_buckets_undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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
<tr id="parameter-bucketId">
    <td><CopyableCode code="bucketId" /></td>
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
    defaultValue="projects_locations_buckets_get"
    values={[
        { label: 'projects_locations_buckets_get', value: 'projects_locations_buckets_get' },
        { label: 'organizations_locations_buckets_get', value: 'organizations_locations_buckets_get' },
        { label: 'folders_locations_buckets_get', value: 'folders_locations_buckets_get' },
        { label: 'billing_accounts_locations_buckets_get', value: 'billing_accounts_locations_buckets_get' },
        { label: 'locations_buckets_list', value: 'locations_buckets_list' },
        { label: 'projects_locations_buckets_list', value: 'projects_locations_buckets_list' },
        { label: 'organizations_locations_buckets_list', value: 'organizations_locations_buckets_list' },
        { label: 'folders_locations_buckets_list', value: 'folders_locations_buckets_list' },
        { label: 'billing_accounts_locations_buckets_list', value: 'billing_accounts_locations_buckets_list' }
    ]}
>
<TabItem value="projects_locations_buckets_get">

Gets a log bucket.

```sql
SELECT
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
FROM google.logging.buckets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_get">

Gets a log bucket.

```sql
SELECT
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
FROM google.logging.buckets
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_buckets_get">

Gets a log bucket.

```sql
SELECT
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
FROM google.logging.buckets
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_get">

Gets a log bucket.

```sql
SELECT
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
FROM google.logging.buckets
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required;
```
</TabItem>
<TabItem value="locations_buckets_list">

Lists log buckets.

```sql
SELECT
buckets,
nextPageToken
FROM google.logging.buckets
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_locations_buckets_list">

Lists log buckets.

```sql
SELECT
buckets,
nextPageToken
FROM google.logging.buckets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_locations_buckets_list">

Lists log buckets.

```sql
SELECT
buckets,
nextPageToken
FROM google.logging.buckets
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="folders_locations_buckets_list">

Lists log buckets.

```sql
SELECT
buckets,
nextPageToken
FROM google.logging.buckets
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_list">

Lists log buckets.

```sql
SELECT
buckets,
nextPageToken
FROM google.logging.buckets
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="locations_buckets_create"
    values={[
        { label: 'locations_buckets_create', value: 'locations_buckets_create' },
        { label: 'projects_locations_buckets_create', value: 'projects_locations_buckets_create' },
        { label: 'organizations_locations_buckets_create', value: 'organizations_locations_buckets_create' },
        { label: 'folders_locations_buckets_create', value: 'folders_locations_buckets_create' },
        { label: 'billing_accounts_locations_buckets_create', value: 'billing_accounts_locations_buckets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="locations_buckets_create">

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
parentType,
parent,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ parentType }}',
'{{ parent }}',
'{{ bucketId }}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_buckets_create">

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
projectsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_buckets_create">

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
organizationsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
;
```
</TabItem>
<TabItem value="folders_locations_buckets_create">

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
foldersId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_create">

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
billingAccountsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ billingAccountsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: buckets
  props:
    - name: parentType
      value: string
      description: Required parameter for the buckets resource.
    - name: parent
      value: string
      description: Required parameter for the buckets resource.
    - name: projectsId
      value: string
      description: Required parameter for the buckets resource.
    - name: locationsId
      value: string
      description: Required parameter for the buckets resource.
    - name: organizationsId
      value: string
      description: Required parameter for the buckets resource.
    - name: foldersId
      value: string
      description: Required parameter for the buckets resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the buckets resource.
    - name: description
      value: string
      description: >
        Optional. Describes this bucket.
        
    - name: retentionDays
      value: integer
      description: >
        Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
        
    - name: locked
      value: boolean
      description: >
        Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
        
    - name: analyticsEnabled
      value: boolean
      description: >
        Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.
        
    - name: restrictedFields
      value: array
      description: >
        Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)
        
    - name: indexConfigs
      value: array
      description: >
        Optional. A list of indexed fields and related configuration data.
        
    - name: cmekSettings
      value: object
      description: >
        Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.
        
    - name: bucketId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_buckets_patch"
    values={[
        { label: 'projects_locations_buckets_patch', value: 'projects_locations_buckets_patch' },
        { label: 'organizations_locations_buckets_patch', value: 'organizations_locations_buckets_patch' },
        { label: 'folders_locations_buckets_patch', value: 'folders_locations_buckets_patch' },
        { label: 'billing_accounts_locations_buckets_patch', value: 'billing_accounts_locations_buckets_patch' }
    ]}
>
<TabItem value="projects_locations_buckets_patch">

Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_buckets_patch">

Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime;
```
</TabItem>
<TabItem value="folders_locations_buckets_patch">

Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_patch">

Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
analyticsEnabled,
cmekSettings,
createTime,
description,
indexConfigs,
lifecycleState,
locked,
restrictedFields,
retentionDays,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_buckets_delete"
    values={[
        { label: 'projects_locations_buckets_delete', value: 'projects_locations_buckets_delete' },
        { label: 'organizations_locations_buckets_delete', value: 'organizations_locations_buckets_delete' },
        { label: 'folders_locations_buckets_delete', value: 'folders_locations_buckets_delete' },
        { label: 'billing_accounts_locations_buckets_delete', value: 'billing_accounts_locations_buckets_delete' }
    ]}
>
<TabItem value="projects_locations_buckets_delete">

Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.

```sql
DELETE FROM google.logging.buckets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_delete">

Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.

```sql
DELETE FROM google.logging.buckets
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_buckets_delete">

Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.

```sql
DELETE FROM google.logging.buckets
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_delete">

Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.

```sql
DELETE FROM google.logging.buckets
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="locations_buckets_undelete"
    values={[
        { label: 'locations_buckets_undelete', value: 'locations_buckets_undelete' },
        { label: 'projects_locations_buckets_undelete', value: 'projects_locations_buckets_undelete' },
        { label: 'organizations_locations_buckets_undelete', value: 'organizations_locations_buckets_undelete' },
        { label: 'folders_locations_buckets_undelete', value: 'folders_locations_buckets_undelete' },
        { label: 'billing_accounts_locations_buckets_undelete', value: 'billing_accounts_locations_buckets_undelete' }
    ]}
>
<TabItem value="locations_buckets_undelete">

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

```sql
EXEC google.logging.buckets.locations_buckets_undelete 
@name='{{ name }}' --required;
```
</TabItem>
<TabItem value="projects_locations_buckets_undelete">

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

```sql
EXEC google.logging.buckets.projects_locations_buckets_undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bucketsId='{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_buckets_undelete">

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

```sql
EXEC google.logging.buckets.organizations_locations_buckets_undelete 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bucketsId='{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_buckets_undelete">

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

```sql
EXEC google.logging.buckets.folders_locations_buckets_undelete 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bucketsId='{{ bucketsId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_undelete">

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

```sql
EXEC google.logging.buckets.billing_accounts_locations_buckets_undelete 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bucketsId='{{ bucketsId }}' --required;
```
</TabItem>
</Tabs>
