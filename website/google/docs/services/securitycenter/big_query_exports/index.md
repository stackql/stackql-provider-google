--- 
title: big_query_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - big_query_exports
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>big_query_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>big_query_exports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.big_query_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_big_query_exports_get"
    values={[
        { label: 'folders_big_query_exports_get', value: 'folders_big_query_exports_get' },
        { label: 'projects_big_query_exports_get', value: 'projects_big_query_exports_get' },
        { label: 'organizations_big_query_exports_get', value: 'organizations_big_query_exports_get' },
        { label: 'folders_big_query_exports_list', value: 'folders_big_query_exports_list' },
        { label: 'projects_big_query_exports_list', value: 'projects_big_query_exports_list' },
        { label: 'organizations_big_query_exports_list', value: 'organizations_big_query_exports_list' }
    ]}
>
<TabItem value="folders_big_query_exports_get">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_big_query_exports_get">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_big_query_exports_get">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_big_query_exports_list">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_big_query_exports_list">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_big_query_exports_list">

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
    <td>The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/&#123;organization_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "folders/&#123;folder_id&#125;/bigQueryExports/&#123;export_id&#125;" Example format: "projects/&#123;project_id&#125;/bigQueryExports/&#123;export_id&#125;" This field is provided in responses, and is ignored when provided in create requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the export (max of 1024 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `&gt;`, `&lt;`, `&gt;=`, `&lt;=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.</td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.</td>
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
    <td><a href="#folders_big_query_exports_get"><CopyableCode code="folders_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Gets a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_get"><CopyableCode code="projects_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Gets a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_get"><CopyableCode code="organizations_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Gets a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_list"><CopyableCode code="folders_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.</td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_list"><CopyableCode code="projects_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.</td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_list"><CopyableCode code="organizations_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.</td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_create"><CopyableCode code="folders_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td>Creates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_create"><CopyableCode code="projects_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td>Creates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_create"><CopyableCode code="organizations_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td>Creates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_patch"><CopyableCode code="folders_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_patch"><CopyableCode code="projects_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_patch"><CopyableCode code="organizations_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a BigQuery export.</td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_delete"><CopyableCode code="folders_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Deletes an existing BigQuery export.</td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_delete"><CopyableCode code="projects_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Deletes an existing BigQuery export.</td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_delete"><CopyableCode code="organizations_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td>Deletes an existing BigQuery export.</td>
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
<tr id="parameter-bigQueryExportsId">
    <td><CopyableCode code="bigQueryExportsId" /></td>
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
<tr id="parameter-bigQueryExportId">
    <td><CopyableCode code="bigQueryExportId" /></td>
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
    defaultValue="folders_big_query_exports_get"
    values={[
        { label: 'folders_big_query_exports_get', value: 'folders_big_query_exports_get' },
        { label: 'projects_big_query_exports_get', value: 'projects_big_query_exports_get' },
        { label: 'organizations_big_query_exports_get', value: 'organizations_big_query_exports_get' },
        { label: 'folders_big_query_exports_list', value: 'folders_big_query_exports_list' },
        { label: 'projects_big_query_exports_list', value: 'projects_big_query_exports_list' },
        { label: 'organizations_big_query_exports_list', value: 'organizations_big_query_exports_list' }
    ]}
>
<TabItem value="folders_big_query_exports_get">

Gets a BigQuery export.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required;
```
</TabItem>
<TabItem value="projects_big_query_exports_get">

Gets a BigQuery export.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_big_query_exports_get">

Gets a BigQuery export.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required;
```
</TabItem>
<TabItem value="folders_big_query_exports_list">

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_big_query_exports_list">

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_big_query_exports_list">

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="folders_big_query_exports_create"
    values={[
        { label: 'folders_big_query_exports_create', value: 'folders_big_query_exports_create' },
        { label: 'projects_big_query_exports_create', value: 'projects_big_query_exports_create' },
        { label: 'organizations_big_query_exports_create', value: 'organizations_big_query_exports_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="folders_big_query_exports_create">

Creates a BigQuery export.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
foldersId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ foldersId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="projects_big_query_exports_create">

Creates a BigQuery export.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
projectsId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ projectsId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="organizations_big_query_exports_create">

Creates a BigQuery export.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
organizationsId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ organizationsId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: big_query_exports
  props:
    - name: foldersId
      value: string
      description: Required parameter for the big_query_exports resource.
    - name: projectsId
      value: string
      description: Required parameter for the big_query_exports resource.
    - name: organizationsId
      value: string
      description: Required parameter for the big_query_exports resource.
    - name: name
      value: string
      description: >
        The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
        
    - name: description
      value: string
      description: >
        The description of the export (max of 1024 characters).
        
    - name: filter
      value: string
      description: >
        Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
        
    - name: dataset
      value: string
      description: >
        The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).
        
    - name: bigQueryExportId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_big_query_exports_patch"
    values={[
        { label: 'folders_big_query_exports_patch', value: 'folders_big_query_exports_patch' },
        { label: 'projects_big_query_exports_patch', value: 'projects_big_query_exports_patch' },
        { label: 'organizations_big_query_exports_patch', value: 'organizations_big_query_exports_patch' }
    ]}
>
<TabItem value="folders_big_query_exports_patch">

Updates a BigQuery export.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
<TabItem value="projects_big_query_exports_patch">

Updates a BigQuery export.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
<TabItem value="organizations_big_query_exports_patch">

Updates a BigQuery export.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="folders_big_query_exports_delete"
    values={[
        { label: 'folders_big_query_exports_delete', value: 'folders_big_query_exports_delete' },
        { label: 'projects_big_query_exports_delete', value: 'projects_big_query_exports_delete' },
        { label: 'organizations_big_query_exports_delete', value: 'organizations_big_query_exports_delete' }
    ]}
>
<TabItem value="folders_big_query_exports_delete">

Deletes an existing BigQuery export.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required;
```
</TabItem>
<TabItem value="projects_big_query_exports_delete">

Deletes an existing BigQuery export.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required;
```
</TabItem>
<TabItem value="organizations_big_query_exports_delete">

Deletes an existing BigQuery export.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required;
```
</TabItem>
</Tabs>
