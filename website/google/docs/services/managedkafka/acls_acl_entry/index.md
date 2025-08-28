--- 
title: acls_acl_entry
hide_title: false
hide_table_of_contents: false
keywords:
  - acls_acl_entry
  - managedkafka
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

Creates, updates, deletes, gets or lists an <code>acls_acl_entry</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>acls_acl_entry</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.acls_acl_entry" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_acl_entry"><CopyableCode code="add_acl_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-aclsId"><code>aclsId</code></a></td>
    <td></td>
    <td>Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.</td>
</tr>
<tr>
    <td><a href="#remove_acl_entry"><CopyableCode code="remove_acl_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-aclsId"><code>aclsId</code></a></td>
    <td></td>
    <td>Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).</td>
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
<tr id="parameter-aclsId">
    <td><CopyableCode code="aclsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_acl_entry"
    values={[
        { label: 'add_acl_entry', value: 'add_acl_entry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_acl_entry">

Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.

```sql
INSERT INTO google.managedkafka.acls_acl_entry (
data__principal,
data__permissionType,
data__operation,
data__host,
projectsId,
locationsId,
clustersId,
aclsId
)
SELECT 
'{{ principal }}',
'{{ permissionType }}',
'{{ operation }}',
'{{ host }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}',
'{{ aclsId }}'
RETURNING
acl,
aclCreated
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: acls_acl_entry
  props:
    - name: projectsId
      value: string
      description: Required parameter for the acls_acl_entry resource.
    - name: locationsId
      value: string
      description: Required parameter for the acls_acl_entry resource.
    - name: clustersId
      value: string
      description: Required parameter for the acls_acl_entry resource.
    - name: aclsId
      value: string
      description: Required parameter for the acls_acl_entry resource.
    - name: principal
      value: string
      description: >
        Required. The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.
        
    - name: permissionType
      value: string
      description: >
        Required. The permission type. Accepted values are (case insensitive): ALLOW, DENY.
        
    - name: operation
      value: string
      description: >
        Required. The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols for valid combinations of resource_type and operation for different Kafka API requests.
        
    - name: host
      value: string
      description: >
        Required. The host. Must be set to "*" for Managed Service for Apache Kafka.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_acl_entry"
    values={[
        { label: 'remove_acl_entry', value: 'remove_acl_entry' }
    ]}
>
<TabItem value="remove_acl_entry">

Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).

```sql
DELETE FROM google.managedkafka.acls_acl_entry
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND aclsId = '{{ aclsId }}' --required;
```
</TabItem>
</Tabs>
