--- 
title: security_profile_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profile_groups
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>security_profile_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_profile_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.security_profile_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_security_profile_groups_get"
    values={[
        { label: 'organizations_locations_security_profile_groups_get', value: 'organizations_locations_security_profile_groups_get' },
        { label: 'organizations_locations_security_profile_groups_list', value: 'organizations_locations_security_profile_groups_list' }
    ]}
>
<TabItem value="organizations_locations_security_profile_groups_get">

SecurityProfileGroup is a resource that defines the behavior for various ProfileTypes.

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
    <td>Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/*/locations/&#123;location&#125;/securityProfileGroups/&#123;security_profile_group&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="customInterceptProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to a SecurityProfile with the CustomIntercept configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="customMirroringProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to a SecurityProfile with the CustomMirroring configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPathId" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. Identifier used by the data-path. Unique within &#123;container, location&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the profile group. Max length 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="threatPreventionProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to a SecurityProfile with the ThreatPrevention configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last resource update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_security_profile_groups_list">

Response returned by the ListSecurityProfileGroups method.

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
    <td>If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.</td>
</tr>
<tr>
    <td><CopyableCode code="securityProfileGroups" /></td>
    <td><code>array</code></td>
    <td>List of SecurityProfileGroups resources.</td>
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
    <td><a href="#organizations_locations_security_profile_groups_get"><CopyableCode code="organizations_locations_security_profile_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfileGroupsId"><code>securityProfileGroupsId</code></a></td>
    <td></td>
    <td>Gets details of a single SecurityProfileGroup.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profile_groups_list"><CopyableCode code="organizations_locations_security_profile_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists SecurityProfileGroups in a given organization and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profile_groups_create"><CopyableCode code="organizations_locations_security_profile_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-securityProfileGroupId"><code>securityProfileGroupId</code></a></td>
    <td>Creates a new SecurityProfileGroup in a given organization and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profile_groups_patch"><CopyableCode code="organizations_locations_security_profile_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfileGroupsId"><code>securityProfileGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single SecurityProfileGroup.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profile_groups_delete"><CopyableCode code="organizations_locations_security_profile_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfileGroupsId"><code>securityProfileGroupsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single SecurityProfileGroup.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityProfileGroupsId">
    <td><CopyableCode code="securityProfileGroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-securityProfileGroupId">
    <td><CopyableCode code="securityProfileGroupId" /></td>
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
    defaultValue="organizations_locations_security_profile_groups_get"
    values={[
        { label: 'organizations_locations_security_profile_groups_get', value: 'organizations_locations_security_profile_groups_get' },
        { label: 'organizations_locations_security_profile_groups_list', value: 'organizations_locations_security_profile_groups_list' }
    ]}
>
<TabItem value="organizations_locations_security_profile_groups_get">

Gets details of a single SecurityProfileGroup.

```sql
SELECT
name,
createTime,
customInterceptProfile,
customMirroringProfile,
dataPathId,
description,
etag,
labels,
threatPreventionProfile,
updateTime
FROM google.networksecurity.security_profile_groups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityProfileGroupsId = '{{ securityProfileGroupsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_security_profile_groups_list">

Lists SecurityProfileGroups in a given organization and location.

```sql
SELECT
nextPageToken,
securityProfileGroups
FROM google.networksecurity.security_profile_groups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_security_profile_groups_create"
    values={[
        { label: 'organizations_locations_security_profile_groups_create', value: 'organizations_locations_security_profile_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_security_profile_groups_create">

Creates a new SecurityProfileGroup in a given organization and location.

```sql
INSERT INTO google.networksecurity.security_profile_groups (
data__name,
data__description,
data__labels,
data__threatPreventionProfile,
data__customMirroringProfile,
data__customInterceptProfile,
organizationsId,
locationsId,
securityProfileGroupId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ threatPreventionProfile }}',
'{{ customMirroringProfile }}',
'{{ customInterceptProfile }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ securityProfileGroupId }}'
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
- name: security_profile_groups
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the security_profile_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the security_profile_groups resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/*/locations/{location}/securityProfileGroups/{security_profile_group}`.
        
    - name: description
      value: string
      description: >
        Optional. An optional description of the profile group. Max length 2048 characters.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs.
        
    - name: threatPreventionProfile
      value: string
      description: >
        Optional. Reference to a SecurityProfile with the ThreatPrevention configuration.
        
    - name: customMirroringProfile
      value: string
      description: >
        Optional. Reference to a SecurityProfile with the CustomMirroring configuration.
        
    - name: customInterceptProfile
      value: string
      description: >
        Optional. Reference to a SecurityProfile with the CustomIntercept configuration.
        
    - name: securityProfileGroupId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_security_profile_groups_patch"
    values={[
        { label: 'organizations_locations_security_profile_groups_patch', value: 'organizations_locations_security_profile_groups_patch' }
    ]}
>
<TabItem value="organizations_locations_security_profile_groups_patch">

Updates the parameters of a single SecurityProfileGroup.

```sql
UPDATE google.networksecurity.security_profile_groups
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__threatPreventionProfile = '{{ threatPreventionProfile }}',
data__customMirroringProfile = '{{ customMirroringProfile }}',
data__customInterceptProfile = '{{ customInterceptProfile }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityProfileGroupsId = '{{ securityProfileGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_locations_security_profile_groups_delete"
    values={[
        { label: 'organizations_locations_security_profile_groups_delete', value: 'organizations_locations_security_profile_groups_delete' }
    ]}
>
<TabItem value="organizations_locations_security_profile_groups_delete">

Deletes a single SecurityProfileGroup.

```sql
DELETE FROM google.networksecurity.security_profile_groups
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityProfileGroupsId = '{{ securityProfileGroupsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
