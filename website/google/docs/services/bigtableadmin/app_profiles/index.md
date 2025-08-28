--- 
title: app_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - app_profiles
  - bigtableadmin
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

Creates, updates, deletes, gets or lists an <code>app_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>app_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.app_profiles" /></td></tr>
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
    <td>The unique name of the app profile, up to 50 characters long. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/appProfiles/_a-zA-Z0-9*`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataBoostIsolationReadOnly" /></td>
    <td><code>object</code></td>
    <td>Specifies that this app profile is intended for read-only usage via the Data Boost feature. (id: DataBoostIsolationReadOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Long form description of the use case for this AppProfile.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="multiClusterRoutingUseAny" /></td>
    <td><code>object</code></td>
    <td>Use a multi-cluster routing policy. (id: MultiClusterRoutingUseAny)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>This field has been deprecated in favor of `standard_isolation.priority`. If you set this field, `standard_isolation.priority` will be set instead. The priority of requests sent using this app profile.</td>
</tr>
<tr>
    <td><CopyableCode code="singleClusterRouting" /></td>
    <td><code>object</code></td>
    <td>Use a single-cluster routing policy. (id: SingleClusterRouting)</td>
</tr>
<tr>
    <td><CopyableCode code="standardIsolation" /></td>
    <td><code>object</code></td>
    <td>The standard options used for isolating this app profile's traffic from other use cases. (id: StandardIsolation)</td>
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
    <td>The unique name of the app profile, up to 50 characters long. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/appProfiles/_a-zA-Z0-9*`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataBoostIsolationReadOnly" /></td>
    <td><code>object</code></td>
    <td>Specifies that this app profile is intended for read-only usage via the Data Boost feature. (id: DataBoostIsolationReadOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Long form description of the use case for this AppProfile.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="multiClusterRoutingUseAny" /></td>
    <td><code>object</code></td>
    <td>Use a multi-cluster routing policy. (id: MultiClusterRoutingUseAny)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>This field has been deprecated in favor of `standard_isolation.priority`. If you set this field, `standard_isolation.priority` will be set instead. The priority of requests sent using this app profile.</td>
</tr>
<tr>
    <td><CopyableCode code="singleClusterRouting" /></td>
    <td><code>object</code></td>
    <td>Use a single-cluster routing policy. (id: SingleClusterRouting)</td>
</tr>
<tr>
    <td><CopyableCode code="standardIsolation" /></td>
    <td><code>object</code></td>
    <td>The standard options used for isolating this app profile's traffic from other use cases. (id: StandardIsolation)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-appProfilesId"><code>appProfilesId</code></a></td>
    <td></td>
    <td>Gets information about an app profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists information about app profiles in an instance.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-appProfileId"><code>appProfileId</code></a>, <a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Creates an app profile within an instance.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-appProfilesId"><code>appProfilesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Updates an app profile within an instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-appProfilesId"><code>appProfilesId</code></a></td>
    <td><a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Deletes an app profile from an instance.</td>
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
<tr id="parameter-appProfilesId">
    <td><CopyableCode code="appProfilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appProfileId">
    <td><CopyableCode code="appProfileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreWarnings">
    <td><CopyableCode code="ignoreWarnings" /></td>
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

Gets information about an app profile.

```sql
SELECT
name,
dataBoostIsolationReadOnly,
description,
etag,
multiClusterRoutingUseAny,
priority,
singleClusterRouting,
standardIsolation
FROM google.bigtableadmin.app_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND appProfilesId = '{{ appProfilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists information about app profiles in an instance.

```sql
SELECT
name,
dataBoostIsolationReadOnly,
description,
etag,
multiClusterRoutingUseAny,
priority,
singleClusterRouting,
standardIsolation
FROM google.bigtableadmin.app_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
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

Creates an app profile within an instance.

```sql
INSERT INTO google.bigtableadmin.app_profiles (
data__name,
data__etag,
data__description,
data__multiClusterRoutingUseAny,
data__singleClusterRouting,
data__priority,
data__standardIsolation,
data__dataBoostIsolationReadOnly,
projectsId,
instancesId,
appProfileId,
ignoreWarnings
)
SELECT 
'{{ name }}',
'{{ etag }}',
'{{ description }}',
'{{ multiClusterRoutingUseAny }}',
'{{ singleClusterRouting }}',
'{{ priority }}',
'{{ standardIsolation }}',
'{{ dataBoostIsolationReadOnly }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ appProfileId }}',
'{{ ignoreWarnings }}'
RETURNING
name,
dataBoostIsolationReadOnly,
description,
etag,
multiClusterRoutingUseAny,
priority,
singleClusterRouting,
standardIsolation
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: app_profiles
  props:
    - name: projectsId
      value: string
      description: Required parameter for the app_profiles resource.
    - name: instancesId
      value: string
      description: Required parameter for the app_profiles resource.
    - name: name
      value: string
      description: >
        The unique name of the app profile, up to 50 characters long. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.
        
    - name: etag
      value: string
      description: >
        Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.
        
    - name: description
      value: string
      description: >
        Long form description of the use case for this AppProfile.
        
    - name: multiClusterRoutingUseAny
      value: object
      description: >
        Use a multi-cluster routing policy.
        
    - name: singleClusterRouting
      value: object
      description: >
        Use a single-cluster routing policy.
        
    - name: priority
      value: string
      description: >
        This field has been deprecated in favor of `standard_isolation.priority`. If you set this field, `standard_isolation.priority` will be set instead. The priority of requests sent using this app profile.
        
      valid_values: ['PRIORITY_UNSPECIFIED', 'PRIORITY_LOW', 'PRIORITY_MEDIUM', 'PRIORITY_HIGH']
    - name: standardIsolation
      value: object
      description: >
        The standard options used for isolating this app profile's traffic from other use cases.
        
    - name: dataBoostIsolationReadOnly
      value: object
      description: >
        Specifies that this app profile is intended for read-only usage via the Data Boost feature.
        
    - name: appProfileId
      value: string
    - name: ignoreWarnings
      value: boolean
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

Updates an app profile within an instance.

```sql
UPDATE google.bigtableadmin.app_profiles
SET 
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__description = '{{ description }}',
data__multiClusterRoutingUseAny = '{{ multiClusterRoutingUseAny }}',
data__singleClusterRouting = '{{ singleClusterRouting }}',
data__priority = '{{ priority }}',
data__standardIsolation = '{{ standardIsolation }}',
data__dataBoostIsolationReadOnly = '{{ dataBoostIsolationReadOnly }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND appProfilesId = '{{ appProfilesId }}' --required
AND updateMask = '{{ updateMask}}'
AND ignoreWarnings = {{ ignoreWarnings}}
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an app profile from an instance.

```sql
DELETE FROM google.bigtableadmin.app_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND appProfilesId = '{{ appProfilesId }}' --required
AND ignoreWarnings = '{{ ignoreWarnings }}';
```
</TabItem>
</Tabs>
