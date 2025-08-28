--- 
title: apis
hide_title: false
hide_table_of_contents: false
keywords:
  - apis
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

Creates, updates, deletes, gets or lists an <code>apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_get"
    values={[
        { label: 'projects_locations_apis_get', value: 'projects_locations_apis_get' },
        { label: 'projects_locations_apis_list', value: 'projects_locations_apis_list' }
    ]}
>
<TabItem value="projects_locations_apis_get">

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
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Human-meaningful name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedDeployment" /></td>
    <td><code>string</code></td>
    <td>The recommended deployment of the API. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended version of the API. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_list">

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
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Human-meaningful name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedDeployment" /></td>
    <td><code>string</code></td>
    <td>The recommended deployment of the API. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended version of the API. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
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
    <td><a href="#projects_locations_apis_get"><CopyableCode code="projects_locations_apis_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Returns a specified API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_list"><CopyableCode code="projects_locations_apis_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching APIs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_create"><CopyableCode code="projects_locations_apis_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-apiId"><code>apiId</code></a></td>
    <td>Creates a specified API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_patch"><CopyableCode code="projects_locations_apis_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Used to modify a specified API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_delete"><CopyableCode code="projects_locations_apis_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Removes a specified API and all of the resources that it owns.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-apiId">
    <td><CopyableCode code="apiId" /></td>
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
    defaultValue="projects_locations_apis_get"
    values={[
        { label: 'projects_locations_apis_get', value: 'projects_locations_apis_get' },
        { label: 'projects_locations_apis_list', value: 'projects_locations_apis_list' }
    ]}
>
<TabItem value="projects_locations_apis_get">

Returns a specified API.

```sql
SELECT
name,
annotations,
availability,
createTime,
description,
displayName,
labels,
recommendedDeployment,
recommendedVersion,
updateTime
FROM google.apigeeregistry.apis
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_list">

Returns matching APIs.

```sql
SELECT
name,
annotations,
availability,
createTime,
description,
displayName,
labels,
recommendedDeployment,
recommendedVersion,
updateTime
FROM google.apigeeregistry.apis
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
    defaultValue="projects_locations_apis_create"
    values={[
        { label: 'projects_locations_apis_create', value: 'projects_locations_apis_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_apis_create">

Creates a specified API.

```sql
INSERT INTO google.apigeeregistry.apis (
data__name,
data__displayName,
data__description,
data__availability,
data__recommendedVersion,
data__recommendedDeployment,
data__labels,
data__annotations,
projectsId,
locationsId,
apiId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ availability }}',
'{{ recommendedVersion }}',
'{{ recommendedDeployment }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apiId }}'
RETURNING
name,
annotations,
availability,
createTime,
description,
displayName,
labels,
recommendedDeployment,
recommendedVersion,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apis
  props:
    - name: projectsId
      value: string
      description: Required parameter for the apis resource.
    - name: locationsId
      value: string
      description: Required parameter for the apis resource.
    - name: name
      value: string
      description: >
        Resource name.
        
    - name: displayName
      value: string
      description: >
        Human-meaningful name.
        
    - name: description
      value: string
      description: >
        A detailed description.
        
    - name: availability
      value: string
      description: >
        A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".
        
    - name: recommendedVersion
      value: string
      description: >
        The recommended version of the API. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
        
    - name: recommendedDeployment
      value: string
      description: >
        The recommended deployment of the API. Format: `projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}`
        
    - name: labels
      value: object
      description: >
        Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
        
    - name: annotations
      value: object
      description: >
        Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
        
    - name: apiId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_apis_patch"
    values={[
        { label: 'projects_locations_apis_patch', value: 'projects_locations_apis_patch' }
    ]}
>
<TabItem value="projects_locations_apis_patch">

Used to modify a specified API.

```sql
UPDATE google.apigeeregistry.apis
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__availability = '{{ availability }}',
data__recommendedVersion = '{{ recommendedVersion }}',
data__recommendedDeployment = '{{ recommendedDeployment }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
annotations,
availability,
createTime,
description,
displayName,
labels,
recommendedDeployment,
recommendedVersion,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_apis_delete"
    values={[
        { label: 'projects_locations_apis_delete', value: 'projects_locations_apis_delete' }
    ]}
>
<TabItem value="projects_locations_apis_delete">

Removes a specified API and all of the resources that it owns.

```sql
DELETE FROM google.apigeeregistry.apis
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
