--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - appcheck
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.resource_policies" /></td></tr>
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
    <td>Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/&#123;project_number&#125;/services/&#123;service_id&#125;/resourcePolicies/&#123;resource_policy_id&#125; ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcementMode" /></td>
    <td><code>string</code></td>
    <td>Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>string</code></td>
    <td>Required. Service specific name of the resource object to which this policy applies, in the format: * **iOS OAuth clients** (Google Identity for iOS): `//oauth2.googleapis.com/projects/&#123;project_number&#125;/oauthClients/&#123;oauth_client_id&#125;` Note that the resource must belong to the service specified in the `name` and be from the same project as this policy, but the resource is allowed to be missing at the time of creation of this policy; in that case, we make a best-effort attempt at respecting this policy, but it may not have any effect until the resource is fully created.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this resource policy configuration object was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/&#123;project_number&#125;/services/&#123;service_id&#125;/resourcePolicies/&#123;resource_policy_id&#125; ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcementMode" /></td>
    <td><code>string</code></td>
    <td>Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>string</code></td>
    <td>Required. Service specific name of the resource object to which this policy applies, in the format: * **iOS OAuth clients** (Google Identity for iOS): `//oauth2.googleapis.com/projects/&#123;project_number&#125;/oauthClients/&#123;oauth_client_id&#125;` Note that the resource must belong to the service specified in the `name` and be from the same project as this policy, but the resource is allowed to be missing at the time of creation of this policy; in that case, we make a best-effort attempt at respecting this policy, but it may not have any effect until the resource is fully created.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this resource policy configuration object was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-resourcePoliciesId"><code>resourcePoliciesId</code></a></td>
    <td></td>
    <td>Gets the requested ResourcePolicy configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all ResourcePolicy configurations for the specified project and service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Creates the specified ResourcePolicy configuration.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-resourcePoliciesId"><code>resourcePoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified ResourcePolicy configuration.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Atomically updates the specified ResourcePolicy configurations.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-resourcePoliciesId"><code>resourcePoliciesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified ResourcePolicy configuration.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourcePoliciesId">
    <td><CopyableCode code="resourcePoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Gets the requested ResourcePolicy configuration.

```sql
SELECT
name,
enforcementMode,
etag,
targetResource,
updateTime
FROM firebase.appcheck.resource_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND resourcePoliciesId = '{{ resourcePoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all ResourcePolicy configurations for the specified project and service.

```sql
SELECT
name,
enforcementMode,
etag,
targetResource,
updateTime
FROM firebase.appcheck.resource_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates the specified ResourcePolicy configuration.

```sql
INSERT INTO firebase.appcheck.resource_policies (
data__name,
data__targetResource,
data__enforcementMode,
data__etag,
projectsId,
servicesId
)
SELECT 
'{{ name }}',
'{{ targetResource }}',
'{{ enforcementMode }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ servicesId }}'
RETURNING
name,
enforcementMode,
etag,
targetResource,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: resource_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the resource_policies resource.
    - name: servicesId
      value: string
      description: Required parameter for the resource_policies resource.
    - name: name
      value: string
      description: >
        Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
        
    - name: targetResource
      value: string
      description: >
        Required. Service specific name of the resource object to which this policy applies, in the format: * **iOS OAuth clients** (Google Identity for iOS): `//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauth_client_id}` Note that the resource must belong to the service specified in the `name` and be from the same project as this policy, but the resource is allowed to be missing at the time of creation of this policy; in that case, we make a best-effort attempt at respecting this policy, but it may not have any effect until the resource is fully created.
        
    - name: enforcementMode
      value: string
      description: >
        Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service.
        
      valid_values: ['OFF', 'UNENFORCED', 'ENFORCED']
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'batch_update', value: 'batch_update' }
    ]}
>
<TabItem value="patch">

Updates the specified ResourcePolicy configuration.

```sql
UPDATE firebase.appcheck.resource_policies
SET 
data__name = '{{ name }}',
data__targetResource = '{{ targetResource }}',
data__enforcementMode = '{{ enforcementMode }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND resourcePoliciesId = '{{ resourcePoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
enforcementMode,
etag,
targetResource,
updateTime;
```
</TabItem>
<TabItem value="batch_update">

Atomically updates the specified ResourcePolicy configurations.

```sql
UPDATE firebase.appcheck.resource_policies
SET 
data__updateMask = '{{ updateMask }}',
data__requests = '{{ requests }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND servicesId = '{{ servicesId }}' --required
RETURNING
resourcePolicies;
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

Deletes the specified ResourcePolicy configuration.

```sql
DELETE FROM firebase.appcheck.resource_policies
WHERE projectsId = '{{ projectsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND resourcePoliciesId = '{{ resourcePoliciesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
