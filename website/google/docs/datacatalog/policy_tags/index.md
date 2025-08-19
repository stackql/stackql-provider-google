--- 
title: policy_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_tags
  - datacatalog
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

Creates, updates, deletes, gets or lists a <code>policy_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policy_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.policy_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_taxonomies_policy_tags_get"
    values={[
        { label: 'projects_locations_taxonomies_policy_tags_get', value: 'projects_locations_taxonomies_policy_tags_get' },
        { label: 'projects_locations_taxonomies_policy_tags_list', value: 'projects_locations_taxonomies_policy_tags_list' }
    ]}
>
<TabItem value="projects_locations_taxonomies_policy_tags_get">

Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.

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
    <td>Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="childPolicyTags" /></td>
    <td><code>array</code></td>
    <td>Output only. Resource names of child policy tags of this policy tag.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of this policy tag. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns and page breaks, and be at most 2000 bytes long when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-defined name of this policy tag. The name can't start or end with spaces and must be unique within the parent taxonomy, contain only Unicode letters, numbers, underscores, dashes and spaces, and be at most 200 bytes long when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="parentPolicyTag" /></td>
    <td><code>string</code></td>
    <td>Resource name of this policy tag's parent policy tag. If empty, this is a top level tag. If not set, defaults to an empty string. For example, for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag, and, for "Geolocation", this field is empty.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_taxonomies_policy_tags_list">

Response message for ListPolicyTags.

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
    <td>Pagination token of the next results page. Empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTags" /></td>
    <td><code>array</code></td>
    <td>The policy tags that belong to the taxonomy.</td>
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
    <td><a href="#projects_locations_taxonomies_policy_tags_get"><CopyableCode code="projects_locations_taxonomies_policy_tags_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a>, <a href="#parameter-policyTagsId"><code>policyTagsId</code></a></td>
    <td></td>
    <td>Gets a policy tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_policy_tags_list"><CopyableCode code="projects_locations_taxonomies_policy_tags_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all policy tags in a taxonomy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_policy_tags_create"><CopyableCode code="projects_locations_taxonomies_policy_tags_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td></td>
    <td>Creates a policy tag in a taxonomy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_policy_tags_patch"><CopyableCode code="projects_locations_taxonomies_policy_tags_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a>, <a href="#parameter-policyTagsId"><code>policyTagsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a policy tag, including its display name, description, and parent policy tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_policy_tags_delete"><CopyableCode code="projects_locations_taxonomies_policy_tags_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a>, <a href="#parameter-policyTagsId"><code>policyTagsId</code></a></td>
    <td></td>
    <td>Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants</td>
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
<tr id="parameter-policyTagsId">
    <td><CopyableCode code="policyTagsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-taxonomiesId">
    <td><CopyableCode code="taxonomiesId" /></td>
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
    defaultValue="projects_locations_taxonomies_policy_tags_get"
    values={[
        { label: 'projects_locations_taxonomies_policy_tags_get', value: 'projects_locations_taxonomies_policy_tags_get' },
        { label: 'projects_locations_taxonomies_policy_tags_list', value: 'projects_locations_taxonomies_policy_tags_list' }
    ]}
>
<TabItem value="projects_locations_taxonomies_policy_tags_get">

Gets a policy tag.

```sql
SELECT
name,
childPolicyTags,
description,
displayName,
parentPolicyTag
FROM google.datacatalog.policy_tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND taxonomiesId = '{{ taxonomiesId }}' -- required
AND policyTagsId = '{{ policyTagsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_taxonomies_policy_tags_list">

Lists all policy tags in a taxonomy.

```sql
SELECT
nextPageToken,
policyTags
FROM google.datacatalog.policy_tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND taxonomiesId = '{{ taxonomiesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_taxonomies_policy_tags_create"
    values={[
        { label: 'projects_locations_taxonomies_policy_tags_create', value: 'projects_locations_taxonomies_policy_tags_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_taxonomies_policy_tags_create">

Creates a policy tag in a taxonomy.

```sql
INSERT INTO google.datacatalog.policy_tags (
data__name,
data__displayName,
data__description,
data__parentPolicyTag,
projectsId,
locationsId,
taxonomiesId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ parentPolicyTag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ taxonomiesId }}'
RETURNING
name,
childPolicyTags,
description,
displayName,
parentPolicyTag
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: policy_tags
  props:
    - name: projectsId
      value: string
      description: Required parameter for the policy_tags resource.
    - name: locationsId
      value: string
      description: Required parameter for the policy_tags resource.
    - name: taxonomiesId
      value: string
      description: Required parameter for the policy_tags resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs.
        
    - name: displayName
      value: string
      description: >
        Required. User-defined name of this policy tag. The name can't start or end with spaces and must be unique within the parent taxonomy, contain only Unicode letters, numbers, underscores, dashes and spaces, and be at most 200 bytes long when encoded in UTF-8.
        
    - name: description
      value: string
      description: >
        Description of this policy tag. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns and page breaks, and be at most 2000 bytes long when encoded in UTF-8.
        
    - name: parentPolicyTag
      value: string
      description: >
        Resource name of this policy tag's parent policy tag. If empty, this is a top level tag. If not set, defaults to an empty string. For example, for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag, and, for "Geolocation", this field is empty.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_taxonomies_policy_tags_patch"
    values={[
        { label: 'projects_locations_taxonomies_policy_tags_patch', value: 'projects_locations_taxonomies_policy_tags_patch' }
    ]}
>
<TabItem value="projects_locations_taxonomies_policy_tags_patch">

Updates a policy tag, including its display name, description, and parent policy tag.

```sql
UPDATE google.datacatalog.policy_tags
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__parentPolicyTag = '{{ parentPolicyTag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND taxonomiesId = '{{ taxonomiesId }}' --required
AND policyTagsId = '{{ policyTagsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
childPolicyTags,
description,
displayName,
parentPolicyTag;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_taxonomies_policy_tags_delete"
    values={[
        { label: 'projects_locations_taxonomies_policy_tags_delete', value: 'projects_locations_taxonomies_policy_tags_delete' }
    ]}
>
<TabItem value="projects_locations_taxonomies_policy_tags_delete">

Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants

```sql
DELETE FROM google.datacatalog.policy_tags
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND taxonomiesId = '{{ taxonomiesId }}' --required
AND policyTagsId = '{{ policyTagsId }}' --required;
```
</TabItem>
</Tabs>
