--- 
title: connection_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_profiles
  - datastream
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.datastream.connection_profiles" /></td></tr>
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
    <td>Output only. Identifier. The resource's name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryProfile" /></td>
    <td><code>object</code></td>
    <td>BigQuery Connection Profile configuration. (id: BigQueryProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>Forward SSH tunnel connectivity. (id: ForwardSshTunnelConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsProfile" /></td>
    <td><code>object</code></td>
    <td>Cloud Storage ConnectionProfile configuration. (id: GcsProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="mongodbProfile" /></td>
    <td><code>object</code></td>
    <td>MongoDB Connection Profile configuration. (id: MongodbProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="mysqlProfile" /></td>
    <td><code>object</code></td>
    <td>MySQL ConnectionProfile configuration. (id: MysqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleProfile" /></td>
    <td><code>object</code></td>
    <td>Oracle ConnectionProfile configuration. (id: OracleProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresqlProfile" /></td>
    <td><code>object</code></td>
    <td>PostgreSQL Connection Profile configuration. (id: PostgresqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="privateConnectivity" /></td>
    <td><code>object</code></td>
    <td>Private connectivity. (id: PrivateConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceProfile" /></td>
    <td><code>object</code></td>
    <td>Salesforce Connection Profile configuration. (id: SalesforceProfile)</td>
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
    <td><CopyableCode code="sqlServerProfile" /></td>
    <td><code>object</code></td>
    <td>SQLServer Connection Profile configuration. (id: SqlServerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="staticServiceIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>Static Service IP connectivity. (id: StaticServiceIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the resource.</td>
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
    <td>Output only. Identifier. The resource's name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryProfile" /></td>
    <td><code>object</code></td>
    <td>BigQuery Connection Profile configuration. (id: BigQueryProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>Forward SSH tunnel connectivity. (id: ForwardSshTunnelConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsProfile" /></td>
    <td><code>object</code></td>
    <td>Cloud Storage ConnectionProfile configuration. (id: GcsProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="mongodbProfile" /></td>
    <td><code>object</code></td>
    <td>MongoDB Connection Profile configuration. (id: MongodbProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="mysqlProfile" /></td>
    <td><code>object</code></td>
    <td>MySQL ConnectionProfile configuration. (id: MysqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleProfile" /></td>
    <td><code>object</code></td>
    <td>Oracle ConnectionProfile configuration. (id: OracleProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresqlProfile" /></td>
    <td><code>object</code></td>
    <td>PostgreSQL Connection Profile configuration. (id: PostgresqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="privateConnectivity" /></td>
    <td><code>object</code></td>
    <td>Private connectivity. (id: PrivateConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceProfile" /></td>
    <td><code>object</code></td>
    <td>Salesforce Connection Profile configuration. (id: SalesforceProfile)</td>
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
    <td><CopyableCode code="sqlServerProfile" /></td>
    <td><code>object</code></td>
    <td>SQLServer Connection Profile configuration. (id: SqlServerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="staticServiceIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>Static Service IP connectivity. (id: StaticServiceIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the resource.</td>
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
    <td>Use this method to get details about a connection profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Use this method to list connection profiles created in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionProfileId"><code>connectionProfileId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Use this method to create a connection profile in a project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Use this method to update the parameters of a connection profile.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Use this method to delete a connection profile.</td>
</tr>
<tr>
    <td><a href="#discover"><CopyableCode code="discover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.</td>
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

Use this method to get details about a connection profile.

```sql
SELECT
name,
bigqueryProfile,
createTime,
displayName,
forwardSshConnectivity,
gcsProfile,
labels,
mongodbProfile,
mysqlProfile,
oracleProfile,
postgresqlProfile,
privateConnectivity,
salesforceProfile,
satisfiesPzi,
satisfiesPzs,
sqlServerProfile,
staticServiceIpConnectivity,
updateTime
FROM google.datastream.connection_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionProfilesId = '{{ connectionProfilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Use this method to list connection profiles created in a project and location.

```sql
SELECT
name,
bigqueryProfile,
createTime,
displayName,
forwardSshConnectivity,
gcsProfile,
labels,
mongodbProfile,
mysqlProfile,
oracleProfile,
postgresqlProfile,
privateConnectivity,
salesforceProfile,
satisfiesPzi,
satisfiesPzs,
sqlServerProfile,
staticServiceIpConnectivity,
updateTime
FROM google.datastream.connection_profiles
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

Use this method to create a connection profile in a project and location.

```sql
INSERT INTO google.datastream.connection_profiles (
data__labels,
data__displayName,
data__oracleProfile,
data__gcsProfile,
data__mysqlProfile,
data__bigqueryProfile,
data__postgresqlProfile,
data__sqlServerProfile,
data__salesforceProfile,
data__mongodbProfile,
data__staticServiceIpConnectivity,
data__forwardSshConnectivity,
data__privateConnectivity,
projectsId,
locationsId,
connectionProfileId,
requestId,
validateOnly,
force
)
SELECT 
'{{ labels }}',
'{{ displayName }}',
'{{ oracleProfile }}',
'{{ gcsProfile }}',
'{{ mysqlProfile }}',
'{{ bigqueryProfile }}',
'{{ postgresqlProfile }}',
'{{ sqlServerProfile }}',
'{{ salesforceProfile }}',
'{{ mongodbProfile }}',
'{{ staticServiceIpConnectivity }}',
'{{ forwardSshConnectivity }}',
'{{ privateConnectivity }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionProfileId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ force }}'
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
    - name: labels
      value: object
      description: >
        Labels.
        
    - name: displayName
      value: string
      description: >
        Required. Display name.
        
    - name: oracleProfile
      value: object
      description: >
        Oracle ConnectionProfile configuration.
        
    - name: gcsProfile
      value: object
      description: >
        Cloud Storage ConnectionProfile configuration.
        
    - name: mysqlProfile
      value: object
      description: >
        MySQL ConnectionProfile configuration.
        
    - name: bigqueryProfile
      value: object
      description: >
        BigQuery Connection Profile configuration.
        
    - name: postgresqlProfile
      value: object
      description: >
        PostgreSQL Connection Profile configuration.
        
    - name: sqlServerProfile
      value: object
      description: >
        SQLServer Connection Profile configuration.
        
    - name: salesforceProfile
      value: object
      description: >
        Salesforce Connection Profile configuration.
        
    - name: mongodbProfile
      value: object
      description: >
        MongoDB Connection Profile configuration.
        
    - name: staticServiceIpConnectivity
      value: object
      description: >
        Static Service IP connectivity.
        
    - name: forwardSshConnectivity
      value: object
      description: >
        Forward SSH tunnel connectivity.
        
    - name: privateConnectivity
      value: object
      description: >
        Private connectivity.
        
    - name: connectionProfileId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: force
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

Use this method to update the parameters of a connection profile.

```sql
UPDATE google.datastream.connection_profiles
SET 
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__oracleProfile = '{{ oracleProfile }}',
data__gcsProfile = '{{ gcsProfile }}',
data__mysqlProfile = '{{ mysqlProfile }}',
data__bigqueryProfile = '{{ bigqueryProfile }}',
data__postgresqlProfile = '{{ postgresqlProfile }}',
data__sqlServerProfile = '{{ sqlServerProfile }}',
data__salesforceProfile = '{{ salesforceProfile }}',
data__mongodbProfile = '{{ mongodbProfile }}',
data__staticServiceIpConnectivity = '{{ staticServiceIpConnectivity }}',
data__forwardSshConnectivity = '{{ forwardSshConnectivity }}',
data__privateConnectivity = '{{ privateConnectivity }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND force = {{ force}}
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

Use this method to delete a connection profile.

```sql
DELETE FROM google.datastream.connection_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="discover"
    values={[
        { label: 'discover', value: 'discover' }
    ]}
>
<TabItem value="discover">

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

```sql
EXEC google.datastream.connection_profiles.discover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"connectionProfile": "{{ connectionProfile }}", 
"connectionProfileName": "{{ connectionProfileName }}", 
"fullHierarchy": {{ fullHierarchy }}, 
"hierarchyDepth": {{ hierarchyDepth }}, 
"oracleRdbms": "{{ oracleRdbms }}", 
"mysqlRdbms": "{{ mysqlRdbms }}", 
"postgresqlRdbms": "{{ postgresqlRdbms }}", 
"sqlServerRdbms": "{{ sqlServerRdbms }}", 
"salesforceOrg": "{{ salesforceOrg }}", 
"mongodbCluster": "{{ mongodbCluster }}"
}';
```
</TabItem>
</Tabs>
