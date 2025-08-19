--- 
title: apis
hide_title: false
hide_table_of_contents: false
keywords:
  - apis
  - apihub
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.apis" /></td></tr>
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

An API resource in the API Hub.

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
    <td>Identifier. The name of the API resource in the API Hub. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="apiFunctionalRequirements" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="apiRequirements" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="apiStyle" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="apiTechnicalRequirements" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="businessUnit" /></td>
    <td><code>object</code></td>
    <td>Optional. The business unit owning the API. This maps to the following system defined attribute: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/system-business-unit` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the API resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the API resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the API resource.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. The documentation for the API resource. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Optional. Fingerprint of the API resource.</td>
</tr>
<tr>
    <td><CopyableCode code="maturityLevel" /></td>
    <td><code>object</code></td>
    <td>Optional. The maturity level of the API. This maps to the following system defined attribute: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/system-maturity-level` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>Optional. Owner details for the API resource. (id: GoogleCloudApihubV1Owner)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The selected version for an API resource. This can be used when special handling is needed on client side for particular version of the API. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of sources and metadata from the sources of the API resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetUser" /></td>
    <td><code>object</code></td>
    <td>Optional. The target users for the API. This maps to the following system defined attribute: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/system-target-user` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Optional. The team owning the API. This maps to the following system defined attribute: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/system-team` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the API resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of versions present in an API resource. Note: An API resource can be associated with more than 1 version. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The ListApis method's response.

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
    <td><CopyableCode code="apis" /></td>
    <td><code>array</code></td>
    <td>The API resources present in the API hub.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Get API resource details including the API versions contained in it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List API resources in the API hub.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-apiId"><code>apiId</code></a></td>
    <td>Create an API resource in the API hub. Once an API resource is created, versions can be added to it.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get API resource details including the API versions contained in it.

```sql
SELECT
name,
apiFunctionalRequirements,
apiRequirements,
apiStyle,
apiTechnicalRequirements,
attributes,
businessUnit,
createTime,
description,
displayName,
documentation,
fingerprint,
maturityLevel,
owner,
selectedVersion,
sourceMetadata,
targetUser,
team,
updateTime,
versions
FROM google.apihub.apis
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required;
```
</TabItem>
<TabItem value="list">

List API resources in the API hub.

```sql
SELECT
apis,
nextPageToken
FROM google.apihub.apis
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

```sql
INSERT INTO google.apihub.apis (
data__name,
data__displayName,
data__description,
data__documentation,
data__owner,
data__targetUser,
data__team,
data__businessUnit,
data__maturityLevel,
data__attributes,
data__apiStyle,
data__selectedVersion,
data__apiRequirements,
data__fingerprint,
data__apiFunctionalRequirements,
data__apiTechnicalRequirements,
projectsId,
locationsId,
apiId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ documentation }}',
'{{ owner }}',
'{{ targetUser }}',
'{{ team }}',
'{{ businessUnit }}',
'{{ maturityLevel }}',
'{{ attributes }}',
'{{ apiStyle }}',
'{{ selectedVersion }}',
'{{ apiRequirements }}',
'{{ fingerprint }}',
'{{ apiFunctionalRequirements }}',
'{{ apiTechnicalRequirements }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apiId }}'
RETURNING
name,
apiFunctionalRequirements,
apiRequirements,
apiStyle,
apiTechnicalRequirements,
attributes,
businessUnit,
createTime,
description,
displayName,
documentation,
fingerprint,
maturityLevel,
owner,
selectedVersion,
sourceMetadata,
targetUser,
team,
updateTime,
versions
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
        Identifier. The name of the API resource in the API Hub. Format: `projects/{project}/locations/{location}/apis/{api}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the API resource.
        
    - name: description
      value: string
      description: >
        Optional. The description of the API resource.
        
    - name: documentation
      value: object
      description: >
        Optional. The documentation for the API resource.
        
    - name: owner
      value: object
      description: >
        Optional. Owner details for the API resource.
        
    - name: targetUser
      value: object
      description: >
        Optional. The target users for the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-target-user` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
        
    - name: team
      value: object
      description: >
        Optional. The team owning the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-team` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
        
    - name: businessUnit
      value: object
      description: >
        Optional. The business unit owning the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-business-unit` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
        
    - name: maturityLevel
      value: object
      description: >
        Optional. The maturity level of the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-maturity-level` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
        
    - name: attributes
      value: object
      description: >
        Optional. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource.
        
    - name: apiStyle
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: selectedVersion
      value: string
      description: >
        Optional. The selected version for an API resource. This can be used when special handling is needed on client side for particular version of the API. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
        
    - name: apiRequirements
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: fingerprint
      value: string
      description: >
        Optional. Fingerprint of the API resource.
        
    - name: apiFunctionalRequirements
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: apiTechnicalRequirements
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: apiId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields.

```sql
UPDATE google.apihub.apis
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__documentation = '{{ documentation }}',
data__owner = '{{ owner }}',
data__targetUser = '{{ targetUser }}',
data__team = '{{ team }}',
data__businessUnit = '{{ businessUnit }}',
data__maturityLevel = '{{ maturityLevel }}',
data__attributes = '{{ attributes }}',
data__apiStyle = '{{ apiStyle }}',
data__selectedVersion = '{{ selectedVersion }}',
data__apiRequirements = '{{ apiRequirements }}',
data__fingerprint = '{{ fingerprint }}',
data__apiFunctionalRequirements = '{{ apiFunctionalRequirements }}',
data__apiTechnicalRequirements = '{{ apiTechnicalRequirements }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
apiFunctionalRequirements,
apiRequirements,
apiStyle,
apiTechnicalRequirements,
attributes,
businessUnit,
createTime,
description,
displayName,
documentation,
fingerprint,
maturityLevel,
owner,
selectedVersion,
sourceMetadata,
targetUser,
team,
updateTime,
versions;
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

Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

```sql
DELETE FROM google.apihub.apis
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
