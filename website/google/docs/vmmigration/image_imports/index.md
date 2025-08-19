--- 
title: image_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - image_imports
  - vmmigration
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

Creates, updates, deletes, gets or lists an <code>image_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image_imports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.image_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

ImageImport describes the configuration of the image import to run.

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
    <td>Output only. The resource path of the ImageImport.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudStorageUri" /></td>
    <td><code>string</code></td>
    <td>Immutable. The path to the Cloud Storage file from which the image should be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the image import was created.</td>
</tr>
<tr>
    <td><CopyableCode code="diskImageTargetDefaults" /></td>
    <td><code>object</code></td>
    <td>Immutable. Target details for importing a disk image, will be used by ImageImportJob. (id: DiskImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Immutable. The encryption details used by the image import process during the image adaptation for Compute Engine. (id: Encryption)</td>
</tr>
<tr>
    <td><CopyableCode code="machineImageTargetDefaults" /></td>
    <td><code>object</code></td>
    <td>Immutable. Target details for importing a machine image, will be used by ImageImportJob. (id: MachineImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="recentImageImportJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The result of the most recent runs for this ImageImport. All jobs for this ImageImport can be listed via ListImageImportJobs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for 'ListImageImports' call.

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
    <td><CopyableCode code="imageImports" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of target response.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Output only. Locations that could not be reached.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-imageImportsId"><code>imageImportsId</code></a></td>
    <td></td>
    <td>Gets details of a single ImageImport.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ImageImports in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-imageImportId"><code>imageImportId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ImageImport in a given project.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-imageImportsId"><code>imageImportsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single ImageImport.</td>
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
<tr id="parameter-imageImportsId">
    <td><CopyableCode code="imageImportsId" /></td>
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
<tr id="parameter-imageImportId">
    <td><CopyableCode code="imageImportId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single ImageImport.

```sql
SELECT
name,
cloudStorageUri,
createTime,
diskImageTargetDefaults,
encryption,
machineImageTargetDefaults,
recentImageImportJobs
FROM google.vmmigration.image_imports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND imageImportsId = '{{ imageImportsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ImageImports in a given project.

```sql
SELECT
imageImports,
nextPageToken,
unreachable
FROM google.vmmigration.image_imports
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new ImageImport in a given project.

```sql
INSERT INTO google.vmmigration.image_imports (
data__cloudStorageUri,
data__diskImageTargetDefaults,
data__machineImageTargetDefaults,
data__encryption,
projectsId,
locationsId,
imageImportId,
requestId
)
SELECT 
'{{ cloudStorageUri }}',
'{{ diskImageTargetDefaults }}',
'{{ machineImageTargetDefaults }}',
'{{ encryption }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ imageImportId }}',
'{{ requestId }}'
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
- name: image_imports
  props:
    - name: projectsId
      value: string
      description: Required parameter for the image_imports resource.
    - name: locationsId
      value: string
      description: Required parameter for the image_imports resource.
    - name: cloudStorageUri
      value: string
      description: >
        Immutable. The path to the Cloud Storage file from which the image should be imported.
        
    - name: diskImageTargetDefaults
      value: object
      description: >
        Immutable. Target details for importing a disk image, will be used by ImageImportJob.
        
    - name: machineImageTargetDefaults
      value: object
      description: >
        Immutable. Target details for importing a machine image, will be used by ImageImportJob.
        
    - name: encryption
      value: object
      description: >
        Immutable. The encryption details used by the image import process during the image adaptation for Compute Engine.
        
    - name: imageImportId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single ImageImport.

```sql
DELETE FROM google.vmmigration.image_imports
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND imageImportsId = '{{ imageImportsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
