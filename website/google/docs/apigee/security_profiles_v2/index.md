--- 
title: security_profiles_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles_v2
  - apigee
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

Creates, updates, deletes, gets or lists a <code>security_profiles_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_profiles_v2</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_profiles_v2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_security_profiles_v2_get"
    values={[
        { label: 'organizations_security_profiles_v2_get', value: 'organizations_security_profiles_v2_get' },
        { label: 'organizations_security_profiles_v2_list', value: 'organizations_security_profiles_v2_list' }
    ]}
>
<TabItem value="organizations_security_profiles_v2_get">

Security profile for risk assessment version 2.

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
    <td>Identifier. Name of the security profile v2 resource. Format: organizations/&#123;org&#125;/securityProfilesV2/&#123;profile&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security profile creation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="googleDefined" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the security profile is google defined.</td>
</tr>
<tr>
    <td><CopyableCode code="profileAssessmentConfigs" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of the security profile update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_profiles_v2_list">

Response for ListSecurityProfilesV2.

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
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="securityProfilesV2" /></td>
    <td><code>array</code></td>
    <td>List of security profiles in the organization.</td>
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
    <td><a href="#organizations_security_profiles_v2_get"><CopyableCode code="organizations_security_profiles_v2_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesV2Id"><code>securityProfilesV2Id</code></a></td>
    <td></td>
    <td>Get a security profile v2.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_v2_list"><CopyableCode code="organizations_security_profiles_v2_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List security profiles v2.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_v2_create"><CopyableCode code="organizations_security_profiles_v2_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-securityProfileV2Id"><code>securityProfileV2Id</code></a></td>
    <td>Create a security profile v2.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_v2_patch"><CopyableCode code="organizations_security_profiles_v2_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesV2Id"><code>securityProfilesV2Id</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a security profile V2.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_v2_delete"><CopyableCode code="organizations_security_profiles_v2_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesV2Id"><code>securityProfilesV2Id</code></a></td>
    <td></td>
    <td>Delete a security profile v2.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityProfilesV2Id">
    <td><CopyableCode code="securityProfilesV2Id" /></td>
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
<tr id="parameter-securityProfileV2Id">
    <td><CopyableCode code="securityProfileV2Id" /></td>
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
    defaultValue="organizations_security_profiles_v2_get"
    values={[
        { label: 'organizations_security_profiles_v2_get', value: 'organizations_security_profiles_v2_get' },
        { label: 'organizations_security_profiles_v2_list', value: 'organizations_security_profiles_v2_list' }
    ]}
>
<TabItem value="organizations_security_profiles_v2_get">

Get a security profile v2.

```sql
SELECT
name,
createTime,
description,
googleDefined,
profileAssessmentConfigs,
updateTime
FROM google.apigee.security_profiles_v2
WHERE organizationsId = '{{ organizationsId }}' -- required
AND securityProfilesV2Id = '{{ securityProfilesV2Id }}' -- required;
```
</TabItem>
<TabItem value="organizations_security_profiles_v2_list">

List security profiles v2.

```sql
SELECT
nextPageToken,
securityProfilesV2
FROM google.apigee.security_profiles_v2
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_security_profiles_v2_create"
    values={[
        { label: 'organizations_security_profiles_v2_create', value: 'organizations_security_profiles_v2_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_security_profiles_v2_create">

Create a security profile v2.

```sql
INSERT INTO google.apigee.security_profiles_v2 (
data__name,
data__description,
data__profileAssessmentConfigs,
organizationsId,
securityProfileV2Id
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ profileAssessmentConfigs }}',
'{{ organizationsId }}',
'{{ securityProfileV2Id }}'
RETURNING
name,
createTime,
description,
googleDefined,
profileAssessmentConfigs,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_profiles_v2
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the security_profiles_v2 resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}
        
    - name: description
      value: string
      description: >
        Optional. The description of the security profile.
        
    - name: profileAssessmentConfigs
      value: object
      description: >
        Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.
        
    - name: securityProfileV2Id
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_security_profiles_v2_patch"
    values={[
        { label: 'organizations_security_profiles_v2_patch', value: 'organizations_security_profiles_v2_patch' }
    ]}
>
<TabItem value="organizations_security_profiles_v2_patch">

Update a security profile V2.

```sql
UPDATE google.apigee.security_profiles_v2
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__profileAssessmentConfigs = '{{ profileAssessmentConfigs }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND securityProfilesV2Id = '{{ securityProfilesV2Id }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
googleDefined,
profileAssessmentConfigs,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_security_profiles_v2_delete"
    values={[
        { label: 'organizations_security_profiles_v2_delete', value: 'organizations_security_profiles_v2_delete' }
    ]}
>
<TabItem value="organizations_security_profiles_v2_delete">

Delete a security profile v2.

```sql
DELETE FROM google.apigee.security_profiles_v2
WHERE organizationsId = '{{ organizationsId }}' --required
AND securityProfilesV2Id = '{{ securityProfilesV2Id }}' --required;
```
</TabItem>
</Tabs>
