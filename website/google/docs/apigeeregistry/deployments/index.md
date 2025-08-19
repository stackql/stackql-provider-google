--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_deployments_get"
    values={[
        { label: 'projects_locations_apis_deployments_get', value: 'projects_locations_apis_deployments_get' },
        { label: 'projects_locations_apis_deployments_list', value: 'projects_locations_apis_deployments_list' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_get">

Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.

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
    <td><CopyableCode code="accessGuidance" /></td>
    <td><code>string</code></td>
    <td>Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="apiSpecRevision" /></td>
    <td><code>string</code></td>
    <td>The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;/specs/&#123;spec@revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp; when the deployment resource was created.</td>
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
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>The address where the deployment is serving. Changes to this value will update the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="externalChannelUri" /></td>
    <td><code>string</code></td>
    <td>The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="intendedAudience" /></td>
    <td><code>string</code></td>
    <td>Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Revision creation timestamp; when the represented revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp: when the represented revision was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_apis_deployments_list">

Response message for ListApiDeployments.

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
    <td><CopyableCode code="apiDeployments" /></td>
    <td><code>array</code></td>
    <td>The deployments from the specified publisher.</td>
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
    <td><a href="#projects_locations_apis_deployments_get"><CopyableCode code="projects_locations_apis_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Returns a specified deployment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_list"><CopyableCode code="projects_locations_apis_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns matching deployments.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_create"><CopyableCode code="projects_locations_apis_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-apiDeploymentId"><code>apiDeploymentId</code></a></td>
    <td>Creates a specified deployment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_patch"><CopyableCode code="projects_locations_apis_deployments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Used to modify a specified deployment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_delete"><CopyableCode code="projects_locations_apis_deployments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Removes a specified deployment, all revisions, and all child resources (e.g., artifacts).</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_tag_revision"><CopyableCode code="projects_locations_apis_deployments_tag_revision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Adds a tag to a specified revision of a deployment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_rollback"><CopyableCode code="projects_locations_apis_deployments_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-apiDeploymentId">
    <td><CopyableCode code="apiDeploymentId" /></td>
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
    defaultValue="projects_locations_apis_deployments_get"
    values={[
        { label: 'projects_locations_apis_deployments_get', value: 'projects_locations_apis_deployments_get' },
        { label: 'projects_locations_apis_deployments_list', value: 'projects_locations_apis_deployments_list' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_get">

Returns a specified deployment.

```sql
SELECT
name,
accessGuidance,
annotations,
apiSpecRevision,
createTime,
description,
displayName,
endpointUri,
externalChannelUri,
intendedAudience,
labels,
revisionCreateTime,
revisionId,
revisionUpdateTime
FROM google.apigeeregistry.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_list">

Returns matching deployments.

```sql
SELECT
apiDeployments,
nextPageToken
FROM google.apigeeregistry.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_apis_deployments_create"
    values={[
        { label: 'projects_locations_apis_deployments_create', value: 'projects_locations_apis_deployments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_create">

Creates a specified deployment.

```sql
INSERT INTO google.apigeeregistry.deployments (
data__name,
data__displayName,
data__description,
data__apiSpecRevision,
data__endpointUri,
data__externalChannelUri,
data__intendedAudience,
data__accessGuidance,
data__labels,
data__annotations,
projectsId,
locationsId,
apisId,
apiDeploymentId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ apiSpecRevision }}',
'{{ endpointUri }}',
'{{ externalChannelUri }}',
'{{ intendedAudience }}',
'{{ accessGuidance }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ apiDeploymentId }}'
RETURNING
name,
accessGuidance,
annotations,
apiSpecRevision,
createTime,
description,
displayName,
endpointUri,
externalChannelUri,
intendedAudience,
labels,
revisionCreateTime,
revisionId,
revisionUpdateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deployments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the deployments resource.
    - name: locationsId
      value: string
      description: Required parameter for the deployments resource.
    - name: apisId
      value: string
      description: Required parameter for the deployments resource.
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
        
    - name: apiSpecRevision
      value: string
      description: >
        The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec@revision}`
        
    - name: endpointUri
      value: string
      description: >
        The address where the deployment is serving. Changes to this value will update the revision.
        
    - name: externalChannelUri
      value: string
      description: >
        The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.
        
    - name: intendedAudience
      value: string
      description: >
        Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.
        
    - name: accessGuidance
      value: string
      description: >
        Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.
        
    - name: labels
      value: object
      description: >
        Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
        
    - name: annotations
      value: object
      description: >
        Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
        
    - name: apiDeploymentId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_apis_deployments_patch"
    values={[
        { label: 'projects_locations_apis_deployments_patch', value: 'projects_locations_apis_deployments_patch' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_patch">

Used to modify a specified deployment.

```sql
UPDATE google.apigeeregistry.deployments
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__apiSpecRevision = '{{ apiSpecRevision }}',
data__endpointUri = '{{ endpointUri }}',
data__externalChannelUri = '{{ externalChannelUri }}',
data__intendedAudience = '{{ intendedAudience }}',
data__accessGuidance = '{{ accessGuidance }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
accessGuidance,
annotations,
apiSpecRevision,
createTime,
description,
displayName,
endpointUri,
externalChannelUri,
intendedAudience,
labels,
revisionCreateTime,
revisionId,
revisionUpdateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_apis_deployments_delete"
    values={[
        { label: 'projects_locations_apis_deployments_delete', value: 'projects_locations_apis_deployments_delete' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_delete">

Removes a specified deployment, all revisions, and all child resources (e.g., artifacts).

```sql
DELETE FROM google.apigeeregistry.deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_apis_deployments_tag_revision"
    values={[
        { label: 'projects_locations_apis_deployments_tag_revision', value: 'projects_locations_apis_deployments_tag_revision' },
        { label: 'projects_locations_apis_deployments_rollback', value: 'projects_locations_apis_deployments_rollback' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_tag_revision">

Adds a tag to a specified revision of a deployment.

```sql
EXEC google.apigeeregistry.deployments.projects_locations_apis_deployments_tag_revision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"tag": "{{ tag }}"
}';
```
</TabItem>
<TabItem value="projects_locations_apis_deployments_rollback">

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

```sql
EXEC google.apigeeregistry.deployments.projects_locations_apis_deployments_rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"revisionId": "{{ revisionId }}"
}';
```
</TabItem>
</Tabs>
