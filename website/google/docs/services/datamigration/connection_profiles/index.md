--- 
title: connection_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_profiles
  - datamigration
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

Creates, updates, deletes, gets or lists a <code>connection_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connection_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.connection_profiles" /></td></tr>
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
    <td>The name of this connection profile resource in the form of projects/&#123;project&#125;/locations/&#123;location&#125;/connectionProfiles/&#123;connectionProfile&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="alloydb" /></td>
    <td><code>object</code></td>
    <td>An AlloyDB cluster connection profile. (id: AlloyDbConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsql" /></td>
    <td><code>object</code></td>
    <td>A CloudSQL database connection profile. (id: CloudSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The connection profile display name.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="mysql" /></td>
    <td><code>object</code></td>
    <td>A MySQL database connection profile. (id: MySqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracle" /></td>
    <td><code>object</code></td>
    <td>An Oracle database connection profile. (id: OracleConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresql" /></td>
    <td><code>object</code></td>
    <td>A PostgreSQL database connection profile. (id: PostgreSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The database provider.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Optional. The connection profile role.</td>
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
    <td><CopyableCode code="sqlserver" /></td>
    <td><code>object</code></td>
    <td>Connection profile for a SQL Server data source. (id: SqlServerConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current connection profile state (e.g. DRAFT, READY, or FAILED).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
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
    <td>The name of this connection profile resource in the form of projects/&#123;project&#125;/locations/&#123;location&#125;/connectionProfiles/&#123;connectionProfile&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="alloydb" /></td>
    <td><code>object</code></td>
    <td>An AlloyDB cluster connection profile. (id: AlloyDbConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsql" /></td>
    <td><code>object</code></td>
    <td>A CloudSQL database connection profile. (id: CloudSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The connection profile display name.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="mysql" /></td>
    <td><code>object</code></td>
    <td>A MySQL database connection profile. (id: MySqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracle" /></td>
    <td><code>object</code></td>
    <td>An Oracle database connection profile. (id: OracleConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresql" /></td>
    <td><code>object</code></td>
    <td>A PostgreSQL database connection profile. (id: PostgreSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The database provider.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Optional. The connection profile role.</td>
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
    <td><CopyableCode code="sqlserver" /></td>
    <td><code>object</code></td>
    <td>Connection profile for a SQL Server data source. (id: SqlServerConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current connection profile state (e.g. DRAFT, READY, or FAILED).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td></td>
    <td>Gets details of a single connection profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Retrieves a list of all connection profiles in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionProfileId"><code>connectionProfileId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-skipValidation"><code>skipValidation</code></a></td>
    <td>Creates a new connection profile in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-skipValidation"><code>skipValidation</code></a></td>
    <td>Update the configuration of a single connection profile.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.</td>
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
<tr id="parameter-connectionProfilesId">
    <td><CopyableCode code="connectionProfilesId" /></td>
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
<tr id="parameter-connectionProfileId">
    <td><CopyableCode code="connectionProfileId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-skipValidation">
    <td><CopyableCode code="skipValidation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single connection profile.

```sql
SELECT
name,
alloydb,
cloudsql,
createTime,
displayName,
error,
labels,
mysql,
oracle,
postgresql,
provider,
role,
satisfiesPzi,
satisfiesPzs,
sqlserver,
state,
updateTime
FROM google.datamigration.connection_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionProfilesId = '{{ connectionProfilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of all connection profiles in a given project and location.

```sql
SELECT
name,
alloydb,
cloudsql,
createTime,
displayName,
error,
labels,
mysql,
oracle,
postgresql,
provider,
role,
satisfiesPzi,
satisfiesPzs,
sqlserver,
state,
updateTime
FROM google.datamigration.connection_profiles
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

Creates a new connection profile in a given project and location.

```sql
INSERT INTO google.datamigration.connection_profiles (
data__name,
data__labels,
data__state,
data__displayName,
data__role,
data__mysql,
data__postgresql,
data__sqlserver,
data__oracle,
data__cloudsql,
data__alloydb,
data__provider,
projectsId,
locationsId,
connectionProfileId,
requestId,
validateOnly,
skipValidation
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ state }}',
'{{ displayName }}',
'{{ role }}',
'{{ mysql }}',
'{{ postgresql }}',
'{{ sqlserver }}',
'{{ oracle }}',
'{{ cloudsql }}',
'{{ alloydb }}',
'{{ provider }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionProfileId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ skipValidation }}'
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
- name: connection_profiles
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connection_profiles resource.
    - name: locationsId
      value: string
      description: Required parameter for the connection_profiles resource.
    - name: name
      value: string
      description: >
        The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
        
    - name: labels
      value: object
      description: >
        The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
        
    - name: state
      value: string
      description: >
        The current connection profile state (e.g. DRAFT, READY, or FAILED).
        
      valid_values: ['STATE_UNSPECIFIED', 'DRAFT', 'CREATING', 'READY', 'UPDATING', 'DELETING', 'DELETED', 'FAILED']
    - name: displayName
      value: string
      description: >
        The connection profile display name.
        
    - name: role
      value: string
      description: >
        Optional. The connection profile role.
        
      valid_values: ['ROLE_UNSPECIFIED', 'SOURCE', 'DESTINATION']
    - name: mysql
      value: object
      description: >
        A MySQL database connection profile.
        
    - name: postgresql
      value: object
      description: >
        A PostgreSQL database connection profile.
        
    - name: sqlserver
      value: object
      description: >
        Connection profile for a SQL Server data source.
        
    - name: oracle
      value: object
      description: >
        An Oracle database connection profile.
        
    - name: cloudsql
      value: object
      description: >
        A CloudSQL database connection profile.
        
    - name: alloydb
      value: object
      description: >
        An AlloyDB cluster connection profile.
        
    - name: provider
      value: string
      description: >
        The database provider.
        
      valid_values: ['DATABASE_PROVIDER_UNSPECIFIED', 'CLOUDSQL', 'RDS', 'AURORA', 'ALLOYDB', 'AZURE_DATABASE']
    - name: connectionProfileId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: skipValidation
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

Update the configuration of a single connection profile.

```sql
UPDATE google.datamigration.connection_profiles
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__state = '{{ state }}',
data__displayName = '{{ displayName }}',
data__role = '{{ role }}',
data__mysql = '{{ mysql }}',
data__postgresql = '{{ postgresql }}',
data__sqlserver = '{{ sqlserver }}',
data__oracle = '{{ oracle }}',
data__cloudsql = '{{ cloudsql }}',
data__alloydb = '{{ alloydb }}',
data__provider = '{{ provider }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND skipValidation = {{ skipValidation}}
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

Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.

```sql
DELETE FROM google.datamigration.connection_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
