--- 
title: security_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles
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

Creates, updates, deletes, gets or lists a <code>security_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.security_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_security_profiles_get"
    values={[
        { label: 'organizations_locations_security_profiles_get', value: 'organizations_locations_security_profiles_get' },
        { label: 'organizations_locations_security_profiles_list', value: 'organizations_locations_security_profiles_list' }
    ]}
>
<TabItem value="organizations_locations_security_profiles_get">

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
    <td>Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/*/locations/&#123;location&#125;/securityProfiles/&#123;security_profile&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="customInterceptProfile" /></td>
    <td><code>object</code></td>
    <td>The custom TPPI configuration for the SecurityProfile. (id: CustomInterceptProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="customMirroringProfile" /></td>
    <td><code>object</code></td>
    <td>The custom Packet Mirroring v2 configuration for the SecurityProfile. (id: CustomMirroringProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the profile. Max length 512 characters.</td>
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
    <td><code>object</code></td>
    <td>The threat prevention configuration for the SecurityProfile. (id: ThreatPreventionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Immutable. The single ProfileType that the SecurityProfile resource configures.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last resource update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_security_profiles_list">

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
    <td>Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/*/locations/&#123;location&#125;/securityProfiles/&#123;security_profile&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="customInterceptProfile" /></td>
    <td><code>object</code></td>
    <td>The custom TPPI configuration for the SecurityProfile. (id: CustomInterceptProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="customMirroringProfile" /></td>
    <td><code>object</code></td>
    <td>The custom Packet Mirroring v2 configuration for the SecurityProfile. (id: CustomMirroringProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the profile. Max length 512 characters.</td>
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
    <td><code>object</code></td>
    <td>The threat prevention configuration for the SecurityProfile. (id: ThreatPreventionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Immutable. The single ProfileType that the SecurityProfile resource configures.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last resource update timestamp.</td>
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
    <td><a href="#organizations_locations_security_profiles_get"><CopyableCode code="organizations_locations_security_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a></td>
    <td></td>
    <td>Gets details of a single SecurityProfile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profiles_list"><CopyableCode code="organizations_locations_security_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists SecurityProfiles in a given organization and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profiles_create"><CopyableCode code="organizations_locations_security_profiles_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-securityProfileId"><code>securityProfileId</code></a></td>
    <td>Creates a new SecurityProfile in a given organization and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profiles_patch"><CopyableCode code="organizations_locations_security_profiles_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single SecurityProfile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_security_profiles_delete"><CopyableCode code="organizations_locations_security_profiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single SecurityProfile.</td>
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
<tr id="parameter-securityProfilesId">
    <td><CopyableCode code="securityProfilesId" /></td>
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
<tr id="parameter-securityProfileId">
    <td><CopyableCode code="securityProfileId" /></td>
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
    defaultValue="organizations_locations_security_profiles_get"
    values={[
        { label: 'organizations_locations_security_profiles_get', value: 'organizations_locations_security_profiles_get' },
        { label: 'organizations_locations_security_profiles_list', value: 'organizations_locations_security_profiles_list' }
    ]}
>
<TabItem value="organizations_locations_security_profiles_get">

Gets details of a single SecurityProfile.

```sql
SELECT
name,
createTime,
customInterceptProfile,
customMirroringProfile,
description,
etag,
labels,
threatPreventionProfile,
type,
updateTime
FROM google.networksecurity.security_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityProfilesId = '{{ securityProfilesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_security_profiles_list">

Lists SecurityProfiles in a given organization and location.

```sql
SELECT
name,
createTime,
customInterceptProfile,
customMirroringProfile,
description,
etag,
labels,
threatPreventionProfile,
type,
updateTime
FROM google.networksecurity.security_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_security_profiles_create"
    values={[
        { label: 'organizations_locations_security_profiles_create', value: 'organizations_locations_security_profiles_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_security_profiles_create">

Creates a new SecurityProfile in a given organization and location.

```sql
INSERT INTO google.networksecurity.security_profiles (
data__threatPreventionProfile,
data__customMirroringProfile,
data__customInterceptProfile,
data__name,
data__description,
data__labels,
data__type,
organizationsId,
locationsId,
securityProfileId
)
SELECT 
'{{ threatPreventionProfile }}',
'{{ customMirroringProfile }}',
'{{ customInterceptProfile }}',
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ type }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ securityProfileId }}'
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
- name: security_profiles
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the security_profiles resource.
    - name: locationsId
      value: string
      description: Required parameter for the security_profiles resource.
    - name: threatPreventionProfile
      value: object
      description: >
        The threat prevention configuration for the SecurityProfile.
        
    - name: customMirroringProfile
      value: object
      description: >
        The custom Packet Mirroring v2 configuration for the SecurityProfile.
        
    - name: customInterceptProfile
      value: object
      description: >
        The custom TPPI configuration for the SecurityProfile.
        
    - name: name
      value: string
      description: >
        Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/*/locations/{location}/securityProfiles/{security_profile}`.
        
    - name: description
      value: string
      description: >
        Optional. An optional description of the profile. Max length 512 characters.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs.
        
    - name: type
      value: string
      description: >
        Immutable. The single ProfileType that the SecurityProfile resource configures.
        
      valid_values: ['PROFILE_TYPE_UNSPECIFIED', 'THREAT_PREVENTION', 'CUSTOM_MIRRORING', 'CUSTOM_INTERCEPT']
    - name: securityProfileId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_security_profiles_patch"
    values={[
        { label: 'organizations_locations_security_profiles_patch', value: 'organizations_locations_security_profiles_patch' }
    ]}
>
<TabItem value="organizations_locations_security_profiles_patch">

Updates the parameters of a single SecurityProfile.

```sql
UPDATE google.networksecurity.security_profiles
SET 
data__threatPreventionProfile = '{{ threatPreventionProfile }}',
data__customMirroringProfile = '{{ customMirroringProfile }}',
data__customInterceptProfile = '{{ customInterceptProfile }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__type = '{{ type }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityProfilesId = '{{ securityProfilesId }}' --required
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
    defaultValue="organizations_locations_security_profiles_delete"
    values={[
        { label: 'organizations_locations_security_profiles_delete', value: 'organizations_locations_security_profiles_delete' }
    ]}
>
<TabItem value="organizations_locations_security_profiles_delete">

Deletes a single SecurityProfile.

```sql
DELETE FROM google.networksecurity.security_profiles
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityProfilesId = '{{ securityProfilesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
