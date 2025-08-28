--- 
title: contentitems
hide_title: false
hide_table_of_contents: false
keywords:
  - contentitems
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>contentitems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contentitems</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.contentitems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_contentitems_get"
    values={[
        { label: 'projects_locations_lakes_contentitems_get', value: 'projects_locations_lakes_contentitems_get' },
        { label: 'projects_locations_lakes_contentitems_list', value: 'projects_locations_lakes_contentitems_list' }
    ]}
>
<TabItem value="projects_locations_lakes_contentitems_get">

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
    <td>Output only. The relative resource name of the content, of the form: projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/content/&#123;content_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Content creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataText" /></td>
    <td><code>string</code></td>
    <td>Required. Content data in string format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the content.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the content.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook" /></td>
    <td><code>object</code></td>
    <td>Notebook related configurations. (id: GoogleCloudDataplexV1ContentNotebook)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlScript" /></td>
    <td><code>object</code></td>
    <td>Sql Script related configurations. (id: GoogleCloudDataplexV1ContentSqlScript)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the content was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_contentitems_list">

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
    <td>Output only. The relative resource name of the content, of the form: projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/content/&#123;content_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Content creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataText" /></td>
    <td><code>string</code></td>
    <td>Required. Content data in string format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the content.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the content.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook" /></td>
    <td><code>object</code></td>
    <td>Notebook related configurations. (id: GoogleCloudDataplexV1ContentNotebook)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlScript" /></td>
    <td><code>object</code></td>
    <td>Sql Script related configurations. (id: GoogleCloudDataplexV1ContentSqlScript)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the content was last updated.</td>
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
    <td><a href="#projects_locations_lakes_contentitems_get"><CopyableCode code="projects_locations_lakes_contentitems_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-contentitemsId"><code>contentitemsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Get a content resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_contentitems_list"><CopyableCode code="projects_locations_lakes_contentitems_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_contentitems_create"><CopyableCode code="projects_locations_lakes_contentitems_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_contentitems_patch"><CopyableCode code="projects_locations_lakes_contentitems_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-contentitemsId"><code>contentitemsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a content. Only supports full resource update.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_contentitems_delete"><CopyableCode code="projects_locations_lakes_contentitems_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-contentitemsId"><code>contentitemsId</code></a></td>
    <td></td>
    <td>Delete a content.</td>
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
<tr id="parameter-contentitemsId">
    <td><CopyableCode code="contentitemsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_contentitems_get"
    values={[
        { label: 'projects_locations_lakes_contentitems_get', value: 'projects_locations_lakes_contentitems_get' },
        { label: 'projects_locations_lakes_contentitems_list', value: 'projects_locations_lakes_contentitems_list' }
    ]}
>
<TabItem value="projects_locations_lakes_contentitems_get">

Get a content resource.

```sql
SELECT
name,
createTime,
dataText,
description,
labels,
notebook,
path,
sqlScript,
uid,
updateTime
FROM google.dataplex.contentitems
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND contentitemsId = '{{ contentitemsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_locations_lakes_contentitems_list">

List content.

```sql
SELECT
name,
createTime,
dataText,
description,
labels,
notebook,
path,
sqlScript,
uid,
updateTime
FROM google.dataplex.contentitems
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_contentitems_create"
    values={[
        { label: 'projects_locations_lakes_contentitems_create', value: 'projects_locations_lakes_contentitems_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_contentitems_create">

Create a content.

```sql
INSERT INTO google.dataplex.contentitems (
data__path,
data__labels,
data__description,
data__dataText,
data__sqlScript,
data__notebook,
projectsId,
locationsId,
lakesId,
validateOnly
)
SELECT 
'{{ path }}',
'{{ labels }}',
'{{ description }}',
'{{ dataText }}',
'{{ sqlScript }}',
'{{ notebook }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ validateOnly }}'
RETURNING
name,
createTime,
dataText,
description,
labels,
notebook,
path,
sqlScript,
uid,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: contentitems
  props:
    - name: projectsId
      value: string
      description: Required parameter for the contentitems resource.
    - name: locationsId
      value: string
      description: Required parameter for the contentitems resource.
    - name: lakesId
      value: string
      description: Required parameter for the contentitems resource.
    - name: path
      value: string
      description: >
        Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.
        
    - name: labels
      value: object
      description: >
        Optional. User defined labels for the content.
        
    - name: description
      value: string
      description: >
        Optional. Description of the content.
        
    - name: dataText
      value: string
      description: >
        Required. Content data in string format.
        
    - name: sqlScript
      value: object
      description: >
        Sql Script related configurations.
        
    - name: notebook
      value: object
      description: >
        Notebook related configurations.
        
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_contentitems_patch"
    values={[
        { label: 'projects_locations_lakes_contentitems_patch', value: 'projects_locations_lakes_contentitems_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_contentitems_patch">

Update a content. Only supports full resource update.

```sql
UPDATE google.dataplex.contentitems
SET 
data__path = '{{ path }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__dataText = '{{ dataText }}',
data__sqlScript = '{{ sqlScript }}',
data__notebook = '{{ notebook }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND contentitemsId = '{{ contentitemsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
createTime,
dataText,
description,
labels,
notebook,
path,
sqlScript,
uid,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_lakes_contentitems_delete"
    values={[
        { label: 'projects_locations_lakes_contentitems_delete', value: 'projects_locations_lakes_contentitems_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_contentitems_delete">

Delete a content.

```sql
DELETE FROM google.dataplex.contentitems
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND contentitemsId = '{{ contentitemsId }}' --required;
```
</TabItem>
</Tabs>
