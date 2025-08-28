--- 
title: secrets_version
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets_version
  - secretmanager
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

Creates, updates, deletes, gets or lists a <code>secrets_version</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>secrets_version</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.secretmanager.secrets_version" /></td></tr>
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
    <td><a href="#add_version"><CopyableCode code="add_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td></td>
    <td>Creates a new SecretVersion containing secret data and attaches it to an existing Secret.</td>
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
<tr id="parameter-secretsId">
    <td><CopyableCode code="secretsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_version"
    values={[
        { label: 'add_version', value: 'add_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_version">

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

```sql
INSERT INTO google.secretmanager.secrets_version (
data__payload,
projectsId,
secretsId
)
SELECT 
'{{ payload }}',
'{{ projectsId }}',
'{{ secretsId }}'
RETURNING
name,
clientSpecifiedPayloadChecksum,
createTime,
customerManagedEncryption,
destroyTime,
etag,
replicationStatus,
scheduledDestroyTime,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: secrets_version
  props:
    - name: projectsId
      value: string
      description: Required parameter for the secrets_version resource.
    - name: secretsId
      value: string
      description: Required parameter for the secrets_version resource.
    - name: payload
      value: object
      description: >
        Required. The secret payload of the SecretVersion.
        
```
</TabItem>
</Tabs>
