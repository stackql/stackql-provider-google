--- 
title: artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - artifacts
  - apigeeregistry
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

Creates, updates, deletes, gets or lists an <code>artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>artifacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_get"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_get', value: 'projects_locations_apis_versions_specs_artifacts_get' },
        { label: 'projects_locations_apis_versions_specs_artifacts_list', value: 'projects_locations_apis_versions_specs_artifacts_list' },
        { label: 'projects_locations_apis_versions_artifacts_get', value: 'projects_locations_apis_versions_artifacts_get' },
        { label: 'projects_locations_apis_deployments_artifacts_get', value: 'projects_locations_apis_deployments_artifacts_get' },
        { label: 'projects_locations_apis_versions_artifacts_list', value: 'projects_locations_apis_versions_artifacts_list' },
        { label: 'projects_locations_apis_deployments_artifacts_list', value: 'projects_locations_apis_deployments_artifacts_list' },
        { label: 'projects_locations_apis_artifacts_get', value: 'projects_locations_apis_artifacts_get' },
        { label: 'projects_locations_apis_artifacts_list', value: 'projects_locations_apis_artifacts_list' },
        { label: 'projects_locations_artifacts_get', value: 'projects_locations_artifacts_get' },
        { label: 'projects_locations_artifacts_list', value: 'projects_locations_artifacts_list' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_get">

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_versions_specs_artifacts_list">

Response message for ListArtifacts.

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The artifacts from the specified publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_get">

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_get">

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_list">

Response message for ListArtifacts.

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The artifacts from the specified publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_list">

Response message for ListArtifacts.

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The artifacts from the specified publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_artifacts_get">

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_artifacts_list">

Response message for ListArtifacts.

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The artifacts from the specified publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_artifacts_get">

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_artifacts_list">

Response message for ListArtifacts.

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
    <td><CopyableCode code="artifacts" /></td>
    <td><code>array</code></td>
    <td>The artifacts from the specified publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#projects_locations_apis_versions_specs_artifacts_get"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_artifacts_list"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching artifacts.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_get"><CopyableCode code="projects_locations_apis_versions_artifacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_get"><CopyableCode code="projects_locations_apis_deployments_artifacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_list"><CopyableCode code="projects_locations_apis_versions_artifacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching artifacts.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_list"><CopyableCode code="projects_locations_apis_deployments_artifacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching artifacts.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_get"><CopyableCode code="projects_locations_apis_artifacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_list"><CopyableCode code="projects_locations_apis_artifacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching artifacts.</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_get"><CopyableCode code="projects_locations_artifacts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_list"><CopyableCode code="projects_locations_artifacts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching artifacts.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_artifacts_create"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td><a href="#parameter-artifactId"><code>artifactId</code></a></td>
    <td>Creates a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_create"><CopyableCode code="projects_locations_apis_versions_artifacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-artifactId"><code>artifactId</code></a></td>
    <td>Creates a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_create"><CopyableCode code="projects_locations_apis_deployments_artifacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-artifactId"><code>artifactId</code></a></td>
    <td>Creates a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_create"><CopyableCode code="projects_locations_apis_artifacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-artifactId"><code>artifactId</code></a></td>
    <td>Creates a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_create"><CopyableCode code="projects_locations_artifacts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-artifactId"><code>artifactId</code></a></td>
    <td>Creates a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_artifacts_replace_artifact"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_replace_artifact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Used to replace a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_replace_artifact"><CopyableCode code="projects_locations_apis_versions_artifacts_replace_artifact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Used to replace a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_replace_artifact"><CopyableCode code="projects_locations_apis_deployments_artifacts_replace_artifact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Used to replace a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_replace_artifact"><CopyableCode code="projects_locations_apis_artifacts_replace_artifact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Used to replace a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_replace_artifact"><CopyableCode code="projects_locations_artifacts_replace_artifact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Used to replace a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_artifacts_delete"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Removes a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_delete"><CopyableCode code="projects_locations_apis_versions_artifacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Removes a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_delete"><CopyableCode code="projects_locations_apis_deployments_artifacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Removes a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_delete"><CopyableCode code="projects_locations_apis_artifacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Removes a specified artifact.</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_delete"><CopyableCode code="projects_locations_artifacts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Removes a specified artifact.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-artifactsId">
    <td><CopyableCode code="artifactsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-specsId">
    <td><CopyableCode code="specsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-artifactId">
    <td><CopyableCode code="artifactId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="projects_locations_apis_versions_specs_artifacts_get"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_get', value: 'projects_locations_apis_versions_specs_artifacts_get' },
        { label: 'projects_locations_apis_versions_specs_artifacts_list', value: 'projects_locations_apis_versions_specs_artifacts_list' },
        { label: 'projects_locations_apis_versions_artifacts_get', value: 'projects_locations_apis_versions_artifacts_get' },
        { label: 'projects_locations_apis_deployments_artifacts_get', value: 'projects_locations_apis_deployments_artifacts_get' },
        { label: 'projects_locations_apis_versions_artifacts_list', value: 'projects_locations_apis_versions_artifacts_list' },
        { label: 'projects_locations_apis_deployments_artifacts_list', value: 'projects_locations_apis_deployments_artifacts_list' },
        { label: 'projects_locations_apis_artifacts_get', value: 'projects_locations_apis_artifacts_get' },
        { label: 'projects_locations_apis_artifacts_list', value: 'projects_locations_apis_artifacts_list' },
        { label: 'projects_locations_artifacts_get', value: 'projects_locations_artifacts_get' },
        { label: 'projects_locations_artifacts_list', value: 'projects_locations_artifacts_list' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_get">

Returns a specified artifact.

```sql
SELECT
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND specsId = '{{ specsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_specs_artifacts_list">

Returns matching artifacts.

```sql
SELECT
artifacts,
nextPageToken
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND specsId = '{{ specsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_get">

Returns a specified artifact.

```sql
SELECT
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_get">

Returns a specified artifact.

```sql
SELECT
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_list">

Returns matching artifacts.

```sql
SELECT
artifacts,
nextPageToken
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_list">

Returns matching artifacts.

```sql
SELECT
artifacts,
nextPageToken
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_get">

Returns a specified artifact.

```sql
SELECT
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_list">

Returns matching artifacts.

```sql
SELECT
artifacts,
nextPageToken
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_artifacts_get">

Returns a specified artifact.

```sql
SELECT
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_artifacts_list">

Returns matching artifacts.

```sql
SELECT
artifacts,
nextPageToken
FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_create"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_create', value: 'projects_locations_apis_versions_specs_artifacts_create' },
        { label: 'projects_locations_apis_versions_artifacts_create', value: 'projects_locations_apis_versions_artifacts_create' },
        { label: 'projects_locations_apis_deployments_artifacts_create', value: 'projects_locations_apis_deployments_artifacts_create' },
        { label: 'projects_locations_apis_artifacts_create', value: 'projects_locations_apis_artifacts_create' },
        { label: 'projects_locations_artifacts_create', value: 'projects_locations_artifacts_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_create">

Creates a specified artifact.

```sql
INSERT INTO google.apigeeregistry.artifacts (
data__name,
data__mimeType,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
versionsId,
specsId,
artifactId
)
SELECT 
'{{ name }}',
'{{ mimeType }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ versionsId }}',
'{{ specsId }}',
'{{ artifactId }}'
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_create">

Creates a specified artifact.

```sql
INSERT INTO google.apigeeregistry.artifacts (
data__name,
data__mimeType,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
versionsId,
artifactId
)
SELECT 
'{{ name }}',
'{{ mimeType }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ versionsId }}',
'{{ artifactId }}'
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_create">

Creates a specified artifact.

```sql
INSERT INTO google.apigeeregistry.artifacts (
data__name,
data__mimeType,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
deploymentsId,
artifactId
)
SELECT 
'{{ name }}',
'{{ mimeType }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ deploymentsId }}',
'{{ artifactId }}'
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_create">

Creates a specified artifact.

```sql
INSERT INTO google.apigeeregistry.artifacts (
data__name,
data__mimeType,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
artifactId
)
SELECT 
'{{ name }}',
'{{ mimeType }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ artifactId }}'
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_artifacts_create">

Creates a specified artifact.

```sql
INSERT INTO google.apigeeregistry.artifacts (
data__name,
data__mimeType,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
artifactId
)
SELECT 
'{{ name }}',
'{{ mimeType }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ artifactId }}'
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: artifacts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the artifacts resource.
    - name: locationsId
      value: string
      description: Required parameter for the artifacts resource.
    - name: apisId
      value: string
      description: Required parameter for the artifacts resource.
    - name: versionsId
      value: string
      description: Required parameter for the artifacts resource.
    - name: specsId
      value: string
      description: Required parameter for the artifacts resource.
    - name: deploymentsId
      value: string
      description: Required parameter for the artifacts resource.
    - name: name
      value: string
      description: >
        Resource name.
        
    - name: mimeType
      value: string
      description: >
        A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").
        
    - name: contents
      value: string
      description: >
        Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.
        
    - name: labels
      value: object
      description: >
        Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.
        
    - name: annotations
      value: object
      description: >
        Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
        
    - name: artifactId
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_replace_artifact"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_replace_artifact', value: 'projects_locations_apis_versions_specs_artifacts_replace_artifact' },
        { label: 'projects_locations_apis_versions_artifacts_replace_artifact', value: 'projects_locations_apis_versions_artifacts_replace_artifact' },
        { label: 'projects_locations_apis_deployments_artifacts_replace_artifact', value: 'projects_locations_apis_deployments_artifacts_replace_artifact' },
        { label: 'projects_locations_apis_artifacts_replace_artifact', value: 'projects_locations_apis_artifacts_replace_artifact' },
        { label: 'projects_locations_artifacts_replace_artifact', value: 'projects_locations_artifacts_replace_artifact' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_replace_artifact">

Used to replace a specified artifact.

```sql
REPLACE google.apigeeregistry.artifacts
SET 
data__name = '{{ name }}',
data__mimeType = '{{ mimeType }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND specsId = '{{ specsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_replace_artifact">

Used to replace a specified artifact.

```sql
REPLACE google.apigeeregistry.artifacts
SET 
data__name = '{{ name }}',
data__mimeType = '{{ mimeType }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_replace_artifact">

Used to replace a specified artifact.

```sql
REPLACE google.apigeeregistry.artifacts
SET 
data__name = '{{ name }}',
data__mimeType = '{{ mimeType }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_replace_artifact">

Used to replace a specified artifact.

```sql
REPLACE google.apigeeregistry.artifacts
SET 
data__name = '{{ name }}',
data__mimeType = '{{ mimeType }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND artifactsId = '{{ artifactsId }}' --required
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_artifacts_replace_artifact">

Used to replace a specified artifact.

```sql
REPLACE google.apigeeregistry.artifacts
SET 
data__name = '{{ name }}',
data__mimeType = '{{ mimeType }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required
RETURNING
name,
annotations,
contents,
createTime,
hash,
labels,
mimeType,
sizeBytes,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_delete"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_delete', value: 'projects_locations_apis_versions_specs_artifacts_delete' },
        { label: 'projects_locations_apis_versions_artifacts_delete', value: 'projects_locations_apis_versions_artifacts_delete' },
        { label: 'projects_locations_apis_deployments_artifacts_delete', value: 'projects_locations_apis_deployments_artifacts_delete' },
        { label: 'projects_locations_apis_artifacts_delete', value: 'projects_locations_apis_artifacts_delete' },
        { label: 'projects_locations_artifacts_delete', value: 'projects_locations_artifacts_delete' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_delete">

Removes a specified artifact.

```sql
DELETE FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND specsId = '{{ specsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_delete">

Removes a specified artifact.

```sql
DELETE FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_delete">

Removes a specified artifact.

```sql
DELETE FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_delete">

Removes a specified artifact.

```sql
DELETE FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND artifactsId = '{{ artifactsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_artifacts_delete">

Removes a specified artifact.

```sql
DELETE FROM google.apigeeregistry.artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND artifactsId = '{{ artifactsId }}' --required;
```
</TabItem>
</Tabs>
