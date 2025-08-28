--- 
title: artifacts_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - artifacts_contents
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

Creates, updates, deletes, gets or lists an <code>artifacts_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>artifacts_contents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.artifacts_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_get_contents"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_get_contents', value: 'projects_locations_apis_versions_specs_artifacts_get_contents' },
        { label: 'projects_locations_apis_versions_artifacts_get_contents', value: 'projects_locations_apis_versions_artifacts_get_contents' },
        { label: 'projects_locations_apis_deployments_artifacts_get_contents', value: 'projects_locations_apis_deployments_artifacts_get_contents' },
        { label: 'projects_locations_apis_artifacts_get_contents', value: 'projects_locations_apis_artifacts_get_contents' },
        { label: 'projects_locations_artifacts_get_contents', value: 'projects_locations_artifacts_get_contents' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_get_contents">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_get_contents">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_get_contents">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_artifacts_get_contents">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_artifacts_get_contents">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
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
    <td><a href="#projects_locations_apis_versions_specs_artifacts_get_contents"><CopyableCode code="projects_locations_apis_versions_specs_artifacts_get_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_artifacts_get_contents"><CopyableCode code="projects_locations_apis_versions_artifacts_get_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_artifacts_get_contents"><CopyableCode code="projects_locations_apis_deployments_artifacts_get_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_artifacts_get_contents"><CopyableCode code="projects_locations_apis_artifacts_get_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).</td>
</tr>
<tr>
    <td><a href="#projects_locations_artifacts_get_contents"><CopyableCode code="projects_locations_artifacts_get_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-artifactsId"><code>artifactsId</code></a></td>
    <td></td>
    <td>Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_artifacts_get_contents"
    values={[
        { label: 'projects_locations_apis_versions_specs_artifacts_get_contents', value: 'projects_locations_apis_versions_specs_artifacts_get_contents' },
        { label: 'projects_locations_apis_versions_artifacts_get_contents', value: 'projects_locations_apis_versions_artifacts_get_contents' },
        { label: 'projects_locations_apis_deployments_artifacts_get_contents', value: 'projects_locations_apis_deployments_artifacts_get_contents' },
        { label: 'projects_locations_apis_artifacts_get_contents', value: 'projects_locations_apis_artifacts_get_contents' },
        { label: 'projects_locations_artifacts_get_contents', value: 'projects_locations_artifacts_get_contents' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_artifacts_get_contents">

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigeeregistry.artifacts_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND specsId = '{{ specsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_artifacts_get_contents">

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigeeregistry.artifacts_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_artifacts_get_contents">

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigeeregistry.artifacts_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_artifacts_get_contents">

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigeeregistry.artifacts_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_artifacts_get_contents">

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigeeregistry.artifacts_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND artifactsId = '{{ artifactsId }}' -- required;
```
</TabItem>
</Tabs>
