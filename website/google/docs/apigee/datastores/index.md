--- 
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
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

Creates, updates, deletes, gets or lists a <code>datastores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datastores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.datastores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_analytics_datastores_get"
    values={[
        { label: 'organizations_analytics_datastores_get', value: 'organizations_analytics_datastores_get' },
        { label: 'organizations_analytics_datastores_list', value: 'organizations_analytics_datastores_list' }
    ]}
>
<TabItem value="organizations_analytics_datastores_get">

The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z</td>
</tr>
<tr>
    <td><CopyableCode code="datastoreConfig" /></td>
    <td><code>object</code></td>
    <td>Datastore Configurations. (id: GoogleCloudApigeeV1DatastoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name in UI</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z</td>
</tr>
<tr>
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>Output only. Organization that the datastore belongs to</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource link of Datastore. Example: `/organizations/&#123;org&#125;/analytics/datastores/&#123;uuid&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>Destination storage type. Supported types `gcs` or `bigquery`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_analytics_datastores_list">

The response for ListDatastores

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
    <td><CopyableCode code="datastores" /></td>
    <td><code>array</code></td>
    <td>A list of datastores</td>
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
    <td><a href="#organizations_analytics_datastores_get"><CopyableCode code="organizations_analytics_datastores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td></td>
    <td>Get a Datastore</td>
</tr>
<tr>
    <td><a href="#organizations_analytics_datastores_list"><CopyableCode code="organizations_analytics_datastores_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-targetType"><code>targetType</code></a></td>
    <td>List Datastores</td>
</tr>
<tr>
    <td><a href="#organizations_analytics_datastores_create"><CopyableCode code="organizations_analytics_datastores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Create a Datastore for an org</td>
</tr>
<tr>
    <td><a href="#organizations_analytics_datastores_update"><CopyableCode code="organizations_analytics_datastores_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td></td>
    <td>Update a Datastore</td>
</tr>
<tr>
    <td><a href="#organizations_analytics_datastores_delete"><CopyableCode code="organizations_analytics_datastores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td></td>
    <td>Delete a Datastore from an org.</td>
</tr>
<tr>
    <td><a href="#organizations_analytics_datastores_test"><CopyableCode code="organizations_analytics_datastores_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage</td>
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
<tr id="parameter-datastoresId">
    <td><CopyableCode code="datastoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_analytics_datastores_get"
    values={[
        { label: 'organizations_analytics_datastores_get', value: 'organizations_analytics_datastores_get' },
        { label: 'organizations_analytics_datastores_list', value: 'organizations_analytics_datastores_list' }
    ]}
>
<TabItem value="organizations_analytics_datastores_get">

Get a Datastore

```sql
SELECT
createTime,
datastoreConfig,
displayName,
lastUpdateTime,
org,
self,
targetType
FROM google.apigee.datastores
WHERE organizationsId = '{{ organizationsId }}' -- required
AND datastoresId = '{{ datastoresId }}' -- required;
```
</TabItem>
<TabItem value="organizations_analytics_datastores_list">

List Datastores

```sql
SELECT
datastores
FROM google.apigee.datastores
WHERE organizationsId = '{{ organizationsId }}' -- required
AND targetType = '{{ targetType }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_analytics_datastores_create"
    values={[
        { label: 'organizations_analytics_datastores_create', value: 'organizations_analytics_datastores_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_analytics_datastores_create">

Create a Datastore for an org

```sql
INSERT INTO google.apigee.datastores (
data__displayName,
data__targetType,
data__datastoreConfig,
organizationsId
)
SELECT 
'{{ displayName }}',
'{{ targetType }}',
'{{ datastoreConfig }}',
'{{ organizationsId }}'
RETURNING
createTime,
datastoreConfig,
displayName,
lastUpdateTime,
org,
self,
targetType
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: datastores
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the datastores resource.
    - name: displayName
      value: string
      description: >
        Required. Display name in UI
        
    - name: targetType
      value: string
      description: >
        Destination storage type. Supported types `gcs` or `bigquery`.
        
    - name: datastoreConfig
      value: object
      description: >
        Datastore Configurations.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_analytics_datastores_update"
    values={[
        { label: 'organizations_analytics_datastores_update', value: 'organizations_analytics_datastores_update' }
    ]}
>
<TabItem value="organizations_analytics_datastores_update">

Update a Datastore

```sql
REPLACE google.apigee.datastores
SET 
data__displayName = '{{ displayName }}',
data__targetType = '{{ targetType }}',
data__datastoreConfig = '{{ datastoreConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND datastoresId = '{{ datastoresId }}' --required
RETURNING
createTime,
datastoreConfig,
displayName,
lastUpdateTime,
org,
self,
targetType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_analytics_datastores_delete"
    values={[
        { label: 'organizations_analytics_datastores_delete', value: 'organizations_analytics_datastores_delete' }
    ]}
>
<TabItem value="organizations_analytics_datastores_delete">

Delete a Datastore from an org.

```sql
DELETE FROM google.apigee.datastores
WHERE organizationsId = '{{ organizationsId }}' --required
AND datastoresId = '{{ datastoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_analytics_datastores_test"
    values={[
        { label: 'organizations_analytics_datastores_test', value: 'organizations_analytics_datastores_test' }
    ]}
>
<TabItem value="organizations_analytics_datastores_test">

Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage

```sql
EXEC google.apigee.datastores.organizations_analytics_datastores_test 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"displayName": "{{ displayName }}", 
"targetType": "{{ targetType }}", 
"datastoreConfig": "{{ datastoreConfig }}"
}';
```
</TabItem>
</Tabs>
