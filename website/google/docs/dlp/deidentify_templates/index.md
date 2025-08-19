--- 
title: deidentify_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - deidentify_templates
  - dlp
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

Creates, updates, deletes, gets or lists a <code>deidentify_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deidentify_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.deidentify_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_deidentify_templates_get"
    values={[
        { label: 'projects_locations_deidentify_templates_get', value: 'projects_locations_deidentify_templates_get' },
        { label: 'organizations_locations_deidentify_templates_get', value: 'organizations_locations_deidentify_templates_get' },
        { label: 'projects_locations_deidentify_templates_list', value: 'projects_locations_deidentify_templates_list' },
        { label: 'projects_deidentify_templates_get', value: 'projects_deidentify_templates_get' },
        { label: 'organizations_locations_deidentify_templates_list', value: 'organizations_locations_deidentify_templates_list' },
        { label: 'organizations_deidentify_templates_get', value: 'organizations_deidentify_templates_get' },
        { label: 'projects_deidentify_templates_list', value: 'projects_deidentify_templates_list' },
        { label: 'organizations_deidentify_templates_list', value: 'organizations_deidentify_templates_list' }
    ]}
>
<TabItem value="projects_locations_deidentify_templates_get">

DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. (id: GooglePrivacyDlpV2DeidentifyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_get">

DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. (id: GooglePrivacyDlpV2DeidentifyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_deidentify_templates_list">

Response message for ListDeidentifyTemplates.

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
    <td><CopyableCode code="deidentifyTemplates" /></td>
    <td><code>array</code></td>
    <td>List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_deidentify_templates_get">

DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. (id: GooglePrivacyDlpV2DeidentifyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_list">

Response message for ListDeidentifyTemplates.

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
    <td><CopyableCode code="deidentifyTemplates" /></td>
    <td><code>array</code></td>
    <td>List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_deidentify_templates_get">

DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. (id: GooglePrivacyDlpV2DeidentifyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_deidentify_templates_list">

Response message for ListDeidentifyTemplates.

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
    <td><CopyableCode code="deidentifyTemplates" /></td>
    <td><code>array</code></td>
    <td>List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_deidentify_templates_list">

Response message for ListDeidentifyTemplates.

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
    <td><CopyableCode code="deidentifyTemplates" /></td>
    <td><code>array</code></td>
    <td>List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request.</td>
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
    <td><a href="#projects_locations_deidentify_templates_get"><CopyableCode code="projects_locations_deidentify_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_deidentify_templates_get"><CopyableCode code="organizations_locations_deidentify_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_deidentify_templates_list"><CopyableCode code="projects_locations_deidentify_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_deidentify_templates_get"><CopyableCode code="projects_deidentify_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_deidentify_templates_list"><CopyableCode code="organizations_locations_deidentify_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_deidentify_templates_get"><CopyableCode code="organizations_deidentify_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_deidentify_templates_list"><CopyableCode code="projects_deidentify_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_deidentify_templates_list"><CopyableCode code="organizations_deidentify_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_deidentify_templates_create"><CopyableCode code="projects_locations_deidentify_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_deidentify_templates_create"><CopyableCode code="organizations_locations_deidentify_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_deidentify_templates_create"><CopyableCode code="projects_deidentify_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_deidentify_templates_create"><CopyableCode code="organizations_deidentify_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_deidentify_templates_patch"><CopyableCode code="projects_locations_deidentify_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_deidentify_templates_patch"><CopyableCode code="organizations_locations_deidentify_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_deidentify_templates_patch"><CopyableCode code="projects_deidentify_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_deidentify_templates_patch"><CopyableCode code="organizations_deidentify_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_deidentify_templates_delete"><CopyableCode code="projects_locations_deidentify_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_deidentify_templates_delete"><CopyableCode code="organizations_locations_deidentify_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_deidentify_templates_delete"><CopyableCode code="projects_deidentify_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_deidentify_templates_delete"><CopyableCode code="organizations_deidentify_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-deidentifyTemplatesId"><code>deidentifyTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.</td>
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
<tr id="parameter-deidentifyTemplatesId">
    <td><CopyableCode code="deidentifyTemplatesId" /></td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
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
    defaultValue="projects_locations_deidentify_templates_get"
    values={[
        { label: 'projects_locations_deidentify_templates_get', value: 'projects_locations_deidentify_templates_get' },
        { label: 'organizations_locations_deidentify_templates_get', value: 'organizations_locations_deidentify_templates_get' },
        { label: 'projects_locations_deidentify_templates_list', value: 'projects_locations_deidentify_templates_list' },
        { label: 'projects_deidentify_templates_get', value: 'projects_deidentify_templates_get' },
        { label: 'organizations_locations_deidentify_templates_list', value: 'organizations_locations_deidentify_templates_list' },
        { label: 'organizations_deidentify_templates_get', value: 'organizations_deidentify_templates_get' },
        { label: 'projects_deidentify_templates_list', value: 'projects_deidentify_templates_list' },
        { label: 'organizations_deidentify_templates_list', value: 'organizations_deidentify_templates_list' }
    ]}
>
<TabItem value="projects_locations_deidentify_templates_get">

Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_get">

Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_deidentify_templates_list">

Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
deidentifyTemplates,
nextPageToken
FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="projects_deidentify_templates_get">

Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_list">

Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
deidentifyTemplates,
nextPageToken
FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="organizations_deidentify_templates_get">

Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_deidentify_templates_list">

Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
deidentifyTemplates,
nextPageToken
FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="organizations_deidentify_templates_list">

Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
SELECT
deidentifyTemplates,
nextPageToken
FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_deidentify_templates_create"
    values={[
        { label: 'projects_locations_deidentify_templates_create', value: 'projects_locations_deidentify_templates_create' },
        { label: 'organizations_locations_deidentify_templates_create', value: 'organizations_locations_deidentify_templates_create' },
        { label: 'projects_deidentify_templates_create', value: 'projects_deidentify_templates_create' },
        { label: 'organizations_deidentify_templates_create', value: 'organizations_deidentify_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_deidentify_templates_create">

Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
INSERT INTO google.dlp.deidentify_templates (
data__deidentifyTemplate,
data__templateId,
data__locationId,
projectsId,
locationsId
)
SELECT 
'{{ deidentifyTemplate }}',
'{{ templateId }}',
'{{ locationId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_create">

Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
INSERT INTO google.dlp.deidentify_templates (
data__deidentifyTemplate,
data__templateId,
data__locationId,
organizationsId,
locationsId
)
SELECT 
'{{ deidentifyTemplate }}',
'{{ templateId }}',
'{{ locationId }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="projects_deidentify_templates_create">

Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
INSERT INTO google.dlp.deidentify_templates (
data__deidentifyTemplate,
data__templateId,
data__locationId,
projectsId
)
SELECT 
'{{ deidentifyTemplate }}',
'{{ templateId }}',
'{{ locationId }}',
'{{ projectsId }}'
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="organizations_deidentify_templates_create">

Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
INSERT INTO google.dlp.deidentify_templates (
data__deidentifyTemplate,
data__templateId,
data__locationId,
organizationsId
)
SELECT 
'{{ deidentifyTemplate }}',
'{{ templateId }}',
'{{ locationId }}',
'{{ organizationsId }}'
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deidentify_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the deidentify_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the deidentify_templates resource.
    - name: organizationsId
      value: string
      description: Required parameter for the deidentify_templates resource.
    - name: deidentifyTemplate
      value: object
      description: >
        Required. The DeidentifyTemplate to create.
        
    - name: templateId
      value: string
      description: >
        The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
        
    - name: locationId
      value: string
      description: >
        Deprecated. This field has no effect.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_deidentify_templates_patch"
    values={[
        { label: 'projects_locations_deidentify_templates_patch', value: 'projects_locations_deidentify_templates_patch' },
        { label: 'organizations_locations_deidentify_templates_patch', value: 'organizations_locations_deidentify_templates_patch' },
        { label: 'projects_deidentify_templates_patch', value: 'projects_deidentify_templates_patch' },
        { label: 'organizations_deidentify_templates_patch', value: 'organizations_deidentify_templates_patch' }
    ]}
>
<TabItem value="projects_locations_deidentify_templates_patch">

Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
UPDATE google.dlp.deidentify_templates
SET 
data__deidentifyTemplate = '{{ deidentifyTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_patch">

Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
UPDATE google.dlp.deidentify_templates
SET 
data__deidentifyTemplate = '{{ deidentifyTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime;
```
</TabItem>
<TabItem value="projects_deidentify_templates_patch">

Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
UPDATE google.dlp.deidentify_templates
SET 
data__deidentifyTemplate = '{{ deidentifyTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime;
```
</TabItem>
<TabItem value="organizations_deidentify_templates_patch">

Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
UPDATE google.dlp.deidentify_templates
SET 
data__deidentifyTemplate = '{{ deidentifyTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required
RETURNING
name,
createTime,
deidentifyConfig,
description,
displayName,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_deidentify_templates_delete"
    values={[
        { label: 'projects_locations_deidentify_templates_delete', value: 'projects_locations_deidentify_templates_delete' },
        { label: 'organizations_locations_deidentify_templates_delete', value: 'organizations_locations_deidentify_templates_delete' },
        { label: 'projects_deidentify_templates_delete', value: 'projects_deidentify_templates_delete' },
        { label: 'organizations_deidentify_templates_delete', value: 'organizations_deidentify_templates_delete' }
    ]}
>
<TabItem value="projects_locations_deidentify_templates_delete">

Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
DELETE FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_deidentify_templates_delete">

Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
DELETE FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required;
```
</TabItem>
<TabItem value="projects_deidentify_templates_delete">

Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
DELETE FROM google.dlp.deidentify_templates
WHERE projectsId = '{{ projectsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required;
```
</TabItem>
<TabItem value="organizations_deidentify_templates_delete">

Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.

```sql
DELETE FROM google.dlp.deidentify_templates
WHERE organizationsId = '{{ organizationsId }}' --required
AND deidentifyTemplatesId = '{{ deidentifyTemplatesId }}' --required;
```
</TabItem>
</Tabs>
