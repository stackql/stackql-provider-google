--- 
title: management_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - management_servers
  - backupdr
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

Creates, updates, deletes, gets or lists a <code>management_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>management_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.management_servers" /></td></tr>
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

ManagementServer describes a single BackupDR ManagementServer instance.

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
    <td>Output only. Identifier. The resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="baProxyUri" /></td>
    <td><code>array</code></td>
    <td>Output only. The hostname or ip address of the exposed AGM endpoints, used by BAs to connect to BA proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the ManagementServer instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. Labels currently defined: 1. migrate_from_go= If set to true, the MS is created in migration ready mode.</td>
</tr>
<tr>
    <td><CopyableCode code="managementUri" /></td>
    <td><code>object</code></td>
    <td>Output only. The hostname or ip address of the exposed AGM endpoints, used by clients to connect to AGM/RD graphical user interface and APIs. (id: ManagementURI)</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>Optional. VPC networks to which the ManagementServer instance is connected. For this version, only a single network is supported. This field is optional if MS is created without PSA</td>
</tr>
<tr>
    <td><CopyableCode code="oauth2ClientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The OAuth 2.0 client id is required to make API calls to the BackupDR instance API of this ManagementServer. This is the value that should be provided in the 'aud' field of the OIDC ID Token (see openid specification https://openid.net/specs/openid-connect-core-1_0.html#IDToken).</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The ManagementServer state.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the ManagementServer resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workforceIdentityBasedManagementUri" /></td>
    <td><code>object</code></td>
    <td>Output only. The hostnames of the exposed AGM endpoints for both types of user i.e. 1p and 3p, used to connect AGM/RM UI. (id: WorkforceIdentityBasedManagementURI)</td>
</tr>
<tr>
    <td><CopyableCode code="workforceIdentityBasedOauth2ClientId" /></td>
    <td><code>object</code></td>
    <td>Output only. The OAuth client IDs for both types of user i.e. 1p and 3p. (id: WorkforceIdentityBasedOAuth2ClientID)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for listing management servers.

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
    <td><CopyableCode code="managementServers" /></td>
    <td><code>array</code></td>
    <td>The list of ManagementServer instances in the project for the specified location. If the '&#123;location&#125;' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return management servers in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-managementServersId"><code>managementServersId</code></a></td>
    <td></td>
    <td>Gets details of a single ManagementServer.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ManagementServers in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-managementServerId"><code>managementServerId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ManagementServer in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-managementServersId"><code>managementServersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single ManagementServer.</td>
</tr>
<tr>
    <td><a href="#ms_compliance_metadata"><CopyableCode code="ms_compliance_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Returns the Assured Workloads compliance metadata for a given project.</td>
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
<tr id="parameter-managementServersId">
    <td><CopyableCode code="managementServersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-managementServerId">
    <td><CopyableCode code="managementServerId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
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

Gets details of a single ManagementServer.

```sql
SELECT
name,
baProxyUri,
createTime,
description,
etag,
labels,
managementUri,
networks,
oauth2ClientId,
satisfiesPzi,
satisfiesPzs,
state,
type,
updateTime,
workforceIdentityBasedManagementUri,
workforceIdentityBasedOauth2ClientId
FROM google.backupdr.management_servers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND managementServersId = '{{ managementServersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ManagementServers in a given project and location.

```sql
SELECT
managementServers,
nextPageToken,
unreachable
FROM google.backupdr.management_servers
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new ManagementServer in a given project and location.

```sql
INSERT INTO google.backupdr.management_servers (
data__description,
data__labels,
data__type,
data__networks,
data__etag,
projectsId,
locationsId,
managementServerId,
requestId
)
SELECT 
'{{ description }}',
'{{ labels }}',
'{{ type }}',
'{{ networks }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ managementServerId }}',
'{{ requestId }}'
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
- name: management_servers
  props:
    - name: projectsId
      value: string
      description: Required parameter for the management_servers resource.
    - name: locationsId
      value: string
      description: Required parameter for the management_servers resource.
    - name: description
      value: string
      description: >
        Optional. The description of the ManagementServer instance (2048 characters or less).
        
    - name: labels
      value: object
      description: >
        Optional. Resource labels to represent user provided metadata. Labels currently defined: 1. migrate_from_go= If set to true, the MS is created in migration ready mode.
        
    - name: type
      value: string
      description: >
        Optional. The type of the ManagementServer resource.
        
      valid_values: ['INSTANCE_TYPE_UNSPECIFIED', 'BACKUP_RESTORE']
    - name: networks
      value: array
      description: >
        Optional. VPC networks to which the ManagementServer instance is connected. For this version, only a single network is supported. This field is optional if MS is created without PSA
        
    - name: etag
      value: string
      description: >
        Optional. Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other.
        
    - name: managementServerId
      value: string
    - name: requestId
      value: string
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

Deletes a single ManagementServer.

```sql
DELETE FROM google.backupdr.management_servers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND managementServersId = '{{ managementServersId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ms_compliance_metadata"
    values={[
        { label: 'ms_compliance_metadata', value: 'ms_compliance_metadata' }
    ]}
>
<TabItem value="ms_compliance_metadata">

Returns the Assured Workloads compliance metadata for a given project.

```sql
EXEC google.backupdr.management_servers.ms_compliance_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}"
}';
```
</TabItem>
</Tabs>
