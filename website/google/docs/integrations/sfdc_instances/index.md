--- 
title: sfdc_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - sfdc_instances
  - integrations
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

Creates, updates, deletes, gets or lists a <code>sfdc_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sfdc_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.sfdc_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_get"
    values={[
        { label: 'projects_locations_products_sfdc_instances_get', value: 'projects_locations_products_sfdc_instances_get' },
        { label: 'projects_locations_products_sfdc_instances_list', value: 'projects_locations_products_sfdc_instances_list' },
        { label: 'projects_locations_sfdc_instances_get', value: 'projects_locations_sfdc_instances_get' },
        { label: 'projects_locations_sfdc_instances_list', value: 'projects_locations_sfdc_instances_list' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_get">

The SfdcInstance resource use to hold channels and connection config data.

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
    <td>Resource name of the SFDC instance projects/&#123;project&#125;/locations/&#123;location&#125;/sfdcInstances/&#123;sfdcInstance&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="authConfigId" /></td>
    <td><code>array</code></td>
    <td>A list of AuthConfigs that can be tried to open the channel to SFDC</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance is created</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance was deleted. Empty if not deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the sfdc instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User selected unique name/alias to easily reference an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAuthority" /></td>
    <td><code>string</code></td>
    <td>Optional. URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcOrgId" /></td>
    <td><code>string</code></td>
    <td>The SFDC Org Id. This is defined in salesforce.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_sfdc_instances_list">

Response to list SfdcInstances.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcInstances" /></td>
    <td><code>array</code></td>
    <td>The list of SfdcInstances retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sfdc_instances_get">

The SfdcInstance resource use to hold channels and connection config data.

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
    <td>Resource name of the SFDC instance projects/&#123;project&#125;/locations/&#123;location&#125;/sfdcInstances/&#123;sfdcInstance&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="authConfigId" /></td>
    <td><code>array</code></td>
    <td>A list of AuthConfigs that can be tried to open the channel to SFDC</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance is created</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance was deleted. Empty if not deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the sfdc instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User selected unique name/alias to easily reference an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAuthority" /></td>
    <td><code>string</code></td>
    <td>Optional. URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcOrgId" /></td>
    <td><code>string</code></td>
    <td>The SFDC Org Id. This is defined in salesforce.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the instance was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sfdc_instances_list">

Response to list SfdcInstances.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcInstances" /></td>
    <td><code>array</code></td>
    <td>The list of SfdcInstances retrieved.</td>
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
    <td><a href="#projects_locations_products_sfdc_instances_get"><CopyableCode code="projects_locations_products_sfdc_instances_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_list"><CopyableCode code="projects_locations_products_sfdc_instances_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_get"><CopyableCode code="projects_locations_sfdc_instances_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_list"><CopyableCode code="projects_locations_sfdc_instances_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_create"><CopyableCode code="projects_locations_products_sfdc_instances_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_create"><CopyableCode code="projects_locations_sfdc_instances_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_patch"><CopyableCode code="projects_locations_products_sfdc_instances_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_patch"><CopyableCode code="projects_locations_sfdc_instances_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_delete"><CopyableCode code="projects_locations_products_sfdc_instances_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Deletes an sfdc instance.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_delete"><CopyableCode code="projects_locations_sfdc_instances_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Deletes an sfdc instance.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sfdcInstancesId">
    <td><CopyableCode code="sfdcInstancesId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_products_sfdc_instances_get"
    values={[
        { label: 'projects_locations_products_sfdc_instances_get', value: 'projects_locations_products_sfdc_instances_get' },
        { label: 'projects_locations_products_sfdc_instances_list', value: 'projects_locations_products_sfdc_instances_list' },
        { label: 'projects_locations_sfdc_instances_get', value: 'projects_locations_sfdc_instances_get' },
        { label: 'projects_locations_sfdc_instances_list', value: 'projects_locations_sfdc_instances_list' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_get">

Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.

```sql
SELECT
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime
FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_sfdc_instances_list">

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

```sql
SELECT
nextPageToken,
sfdcInstances
FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_get">

Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.

```sql
SELECT
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime
FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_list">

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

```sql
SELECT
nextPageToken,
sfdcInstances
FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_create"
    values={[
        { label: 'projects_locations_products_sfdc_instances_create', value: 'projects_locations_products_sfdc_instances_create' },
        { label: 'projects_locations_sfdc_instances_create', value: 'projects_locations_sfdc_instances_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_create">

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

```sql
INSERT INTO google.integrations.sfdc_instances (
data__name,
data__displayName,
data__description,
data__sfdcOrgId,
data__authConfigId,
data__serviceAuthority,
projectsId,
locationsId,
productsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ sfdcOrgId }}',
'{{ authConfigId }}',
'{{ serviceAuthority }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}'
RETURNING
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_create">

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

```sql
INSERT INTO google.integrations.sfdc_instances (
data__name,
data__displayName,
data__description,
data__sfdcOrgId,
data__authConfigId,
data__serviceAuthority,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ sfdcOrgId }}',
'{{ authConfigId }}',
'{{ serviceAuthority }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sfdc_instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sfdc_instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the sfdc_instances resource.
    - name: productsId
      value: string
      description: Required parameter for the sfdc_instances resource.
    - name: name
      value: string
      description: >
        Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.
        
    - name: displayName
      value: string
      description: >
        Optional. User selected unique name/alias to easily reference an instance.
        
    - name: description
      value: string
      description: >
        Optional. A description of the sfdc instance.
        
    - name: sfdcOrgId
      value: string
      description: >
        The SFDC Org Id. This is defined in salesforce.
        
    - name: authConfigId
      value: array
      description: >
        A list of AuthConfigs that can be tried to open the channel to SFDC
        
    - name: serviceAuthority
      value: string
      description: >
        Optional. URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_patch"
    values={[
        { label: 'projects_locations_products_sfdc_instances_patch', value: 'projects_locations_products_sfdc_instances_patch' },
        { label: 'projects_locations_sfdc_instances_patch', value: 'projects_locations_sfdc_instances_patch' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_patch">

Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.

```sql
UPDATE google.integrations.sfdc_instances
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__sfdcOrgId = '{{ sfdcOrgId }}',
data__authConfigId = '{{ authConfigId }}',
data__serviceAuthority = '{{ serviceAuthority }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_patch">

Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.

```sql
UPDATE google.integrations.sfdc_instances
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__sfdcOrgId = '{{ sfdcOrgId }}',
data__authConfigId = '{{ authConfigId }}',
data__serviceAuthority = '{{ serviceAuthority }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
authConfigId,
createTime,
deleteTime,
description,
displayName,
serviceAuthority,
sfdcOrgId,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_delete"
    values={[
        { label: 'projects_locations_products_sfdc_instances_delete', value: 'projects_locations_products_sfdc_instances_delete' },
        { label: 'projects_locations_sfdc_instances_delete', value: 'projects_locations_sfdc_instances_delete' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_delete">

Deletes an sfdc instance.

```sql
DELETE FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_delete">

Deletes an sfdc instance.

```sql
DELETE FROM google.integrations.sfdc_instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required;
```
</TabItem>
</Tabs>
