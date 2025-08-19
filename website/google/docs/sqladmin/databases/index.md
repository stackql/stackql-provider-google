--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>databases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.databases" /></td></tr>
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

Represents a SQL database on the Cloud SQL instance.

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
    <td>The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.</td>
</tr>
<tr>
    <td><CopyableCode code="charset" /></td>
    <td><code>string</code></td>
    <td>The Cloud SQL charset value.</td>
</tr>
<tr>
    <td><CopyableCode code="collation" /></td>
    <td><code>string</code></td>
    <td>The Cloud SQL collation value.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated and will be removed from a future version of the API.</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>The name of the Cloud SQL instance. This does not include the project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#database`.</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverDatabaseDetails" /></td>
    <td><code>object</code></td>
    <td>Represents a Sql Server database on the Cloud SQL instance. (id: SqlServerDatabaseDetails)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Database list response.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List of database resources in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#databasesList`.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-database"><code>database</code></a></td>
    <td></td>
    <td>Retrieves a resource containing information about a database inside a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists databases in the specified Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-database"><code>database</code></a></td>
    <td></td>
    <td>Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-database"><code>database</code></a></td>
    <td></td>
    <td>Updates a resource containing information about a database inside a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-database"><code>database</code></a></td>
    <td></td>
    <td>Deletes a database from a Cloud SQL instance.</td>
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
<tr id="parameter-database">
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

Retrieves a resource containing information about a database inside a Cloud SQL instance.

```sql
SELECT
name,
charset,
collation,
etag,
instance,
kind,
project,
selfLink,
sqlserverDatabaseDetails
FROM google.sqladmin.databases
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND database = '{{ database }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists databases in the specified Cloud SQL instance.

```sql
SELECT
items,
kind
FROM google.sqladmin.databases
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

```sql
INSERT INTO google.sqladmin.databases (
data__kind,
data__charset,
data__collation,
data__etag,
data__name,
data__instance,
data__selfLink,
data__project,
data__sqlserverDatabaseDetails,
project,
instance
)
SELECT 
'{{ kind }}',
'{{ charset }}',
'{{ collation }}',
'{{ etag }}',
'{{ name }}',
'{{ instance }}',
'{{ selfLink }}',
'{{ project }}',
'{{ sqlserverDatabaseDetails }}',
'{{ project }}',
'{{ instance }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: databases
  props:
    - name: project
      value: string
      description: Required parameter for the databases resource.
    - name: instance
      value: string
      description: Required parameter for the databases resource.
    - name: kind
      value: string
      description: >
        This is always `sql#database`.
        
    - name: charset
      value: string
      description: >
        The Cloud SQL charset value.
        
    - name: collation
      value: string
      description: >
        The Cloud SQL collation value.
        
    - name: etag
      value: string
      description: >
        This field is deprecated and will be removed from a future version of the API.
        
    - name: name
      value: string
      description: >
        The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
        
    - name: instance
      value: string
      description: >
        The name of the Cloud SQL instance. This does not include the project ID.
        
    - name: selfLink
      value: string
      description: >
        The URI of this resource.
        
    - name: project
      value: string
      description: >
        The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
        
    - name: sqlserverDatabaseDetails
      value: object
      description: >
        Represents a Sql Server database on the Cloud SQL instance.
        
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

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

```sql
UPDATE google.sqladmin.databases
SET 
data__kind = '{{ kind }}',
data__charset = '{{ charset }}',
data__collation = '{{ collation }}',
data__etag = '{{ etag }}',
data__name = '{{ name }}',
data__instance = '{{ instance }}',
data__selfLink = '{{ selfLink }}',
data__project = '{{ project }}',
data__sqlserverDatabaseDetails = '{{ sqlserverDatabaseDetails }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND database = '{{ database }}' --required
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a resource containing information about a database inside a Cloud SQL instance.

```sql
REPLACE google.sqladmin.databases
SET 
data__kind = '{{ kind }}',
data__charset = '{{ charset }}',
data__collation = '{{ collation }}',
data__etag = '{{ etag }}',
data__name = '{{ name }}',
data__instance = '{{ instance }}',
data__selfLink = '{{ selfLink }}',
data__project = '{{ project }}',
data__sqlserverDatabaseDetails = '{{ sqlserverDatabaseDetails }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND database = '{{ database }}' --required
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
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

Deletes a database from a Cloud SQL instance.

```sql
DELETE FROM google.sqladmin.databases
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND database = '{{ database }}' --required;
```
</TabItem>
</Tabs>
