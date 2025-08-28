--- 
title: specs
hide_title: false
hide_table_of_contents: false
keywords:
  - specs
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

Creates, updates, deletes, gets or lists a <code>specs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>specs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.specs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_versions_specs_get"
    values={[
        { label: 'projects_locations_apis_versions_specs_get', value: 'projects_locations_apis_versions_specs_get' },
        { label: 'projects_locations_apis_versions_specs_list', value: 'projects_locations_apis_versions_specs_list' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_get">

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
    <td>Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp; when the spec resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description.</td>
</tr>
<tr>
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>A possibly-hierarchical name used to refer to the spec from other specs.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A style (format) descriptor for this spec that is specified as a [Media Type](https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Revision creation timestamp; when the represented revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp: when the represented revision was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceUri" /></td>
    <td><code>string</code></td>
    <td>The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_versions_specs_list">

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
    <td>Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp; when the spec resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description.</td>
</tr>
<tr>
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>A possibly-hierarchical name used to refer to the spec from other specs.</td>
</tr>
<tr>
    <td><CopyableCode code="hash" /></td>
    <td><code>string</code></td>
    <td>Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>A style (format) descriptor for this spec that is specified as a [Media Type](https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Revision creation timestamp; when the represented revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp: when the represented revision was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceUri" /></td>
    <td><code>string</code></td>
    <td>The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.</td>
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
    <td><a href="#projects_locations_apis_versions_specs_get"><CopyableCode code="projects_locations_apis_versions_specs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td></td>
    <td>Returns a specified spec.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_list"><CopyableCode code="projects_locations_apis_versions_specs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching specs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_create"><CopyableCode code="projects_locations_apis_versions_specs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-apiSpecId"><code>apiSpecId</code></a></td>
    <td>Creates a specified spec.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_patch"><CopyableCode code="projects_locations_apis_versions_specs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Used to modify a specified spec.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_delete"><CopyableCode code="projects_locations_apis_versions_specs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Removes a specified spec, all revisions, and all child resources (e.g., artifacts).</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_tag_revision"><CopyableCode code="projects_locations_apis_versions_specs_tag_revision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td></td>
    <td>Adds a tag to a specified revision of a spec.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_specs_rollback"><CopyableCode code="projects_locations_apis_versions_specs_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td></td>
    <td>Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-apiSpecId">
    <td><CopyableCode code="apiSpecId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_get"
    values={[
        { label: 'projects_locations_apis_versions_specs_get', value: 'projects_locations_apis_versions_specs_get' },
        { label: 'projects_locations_apis_versions_specs_list', value: 'projects_locations_apis_versions_specs_list' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_get">

Returns a specified spec.

```sql
SELECT
name,
annotations,
contents,
createTime,
description,
filename,
hash,
labels,
mimeType,
revisionCreateTime,
revisionId,
revisionUpdateTime,
sizeBytes,
sourceUri
FROM google.apigeeregistry.specs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND specsId = '{{ specsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_versions_specs_list">

Returns matching specs.

```sql
SELECT
name,
annotations,
contents,
createTime,
description,
filename,
hash,
labels,
mimeType,
revisionCreateTime,
revisionId,
revisionUpdateTime,
sizeBytes,
sourceUri
FROM google.apigeeregistry.specs
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
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_create"
    values={[
        { label: 'projects_locations_apis_versions_specs_create', value: 'projects_locations_apis_versions_specs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_create">

Creates a specified spec.

```sql
INSERT INTO google.apigeeregistry.specs (
data__name,
data__filename,
data__description,
data__mimeType,
data__sourceUri,
data__contents,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
versionsId,
apiSpecId
)
SELECT 
'{{ name }}',
'{{ filename }}',
'{{ description }}',
'{{ mimeType }}',
'{{ sourceUri }}',
'{{ contents }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ versionsId }}',
'{{ apiSpecId }}'
RETURNING
name,
annotations,
contents,
createTime,
description,
filename,
hash,
labels,
mimeType,
revisionCreateTime,
revisionId,
revisionUpdateTime,
sizeBytes,
sourceUri
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: specs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the specs resource.
    - name: locationsId
      value: string
      description: Required parameter for the specs resource.
    - name: apisId
      value: string
      description: Required parameter for the specs resource.
    - name: versionsId
      value: string
      description: Required parameter for the specs resource.
    - name: name
      value: string
      description: >
        Resource name.
        
    - name: filename
      value: string
      description: >
        A possibly-hierarchical name used to refer to the spec from other specs.
        
    - name: description
      value: string
      description: >
        A detailed description.
        
    - name: mimeType
      value: string
      description: >
        A style (format) descriptor for this spec that is specified as a [Media Type](https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").
        
    - name: sourceUri
      value: string
      description: >
        The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.
        
    - name: contents
      value: string
      description: >
        Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.
        
    - name: labels
      value: object
      description: >
        Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
        
    - name: annotations
      value: object
      description: >
        Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
        
    - name: apiSpecId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_patch"
    values={[
        { label: 'projects_locations_apis_versions_specs_patch', value: 'projects_locations_apis_versions_specs_patch' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_patch">

Used to modify a specified spec.

```sql
UPDATE google.apigeeregistry.specs
SET 
data__name = '{{ name }}',
data__filename = '{{ filename }}',
data__description = '{{ description }}',
data__mimeType = '{{ mimeType }}',
data__sourceUri = '{{ sourceUri }}',
data__contents = '{{ contents }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND specsId = '{{ specsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
annotations,
contents,
createTime,
description,
filename,
hash,
labels,
mimeType,
revisionCreateTime,
revisionId,
revisionUpdateTime,
sizeBytes,
sourceUri;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_apis_versions_specs_delete"
    values={[
        { label: 'projects_locations_apis_versions_specs_delete', value: 'projects_locations_apis_versions_specs_delete' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_delete">

Removes a specified spec, all revisions, and all child resources (e.g., artifacts).

```sql
DELETE FROM google.apigeeregistry.specs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND specsId = '{{ specsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_apis_versions_specs_tag_revision"
    values={[
        { label: 'projects_locations_apis_versions_specs_tag_revision', value: 'projects_locations_apis_versions_specs_tag_revision' },
        { label: 'projects_locations_apis_versions_specs_rollback', value: 'projects_locations_apis_versions_specs_rollback' }
    ]}
>
<TabItem value="projects_locations_apis_versions_specs_tag_revision">

Adds a tag to a specified revision of a spec.

```sql
EXEC google.apigeeregistry.specs.projects_locations_apis_versions_specs_tag_revision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@specsId='{{ specsId }}' --required 
@@json=
'{
"tag": "{{ tag }}"
}';
```
</TabItem>
<TabItem value="projects_locations_apis_versions_specs_rollback">

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

```sql
EXEC google.apigeeregistry.specs.projects_locations_apis_versions_specs_rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@specsId='{{ specsId }}' --required 
@@json=
'{
"revisionId": "{{ revisionId }}"
}';
```
</TabItem>
</Tabs>
