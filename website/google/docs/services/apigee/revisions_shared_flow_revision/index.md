--- 
title: revisions_shared_flow_revision
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions_shared_flow_revision
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

Creates, updates, deletes, gets or lists a <code>revisions_shared_flow_revision</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions_shared_flow_revision</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.revisions_shared_flow_revision" /></td></tr>
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
    <td><a href="#organizations_sharedflows_revisions_update_shared_flow_revision"><CopyableCode code="organizations_sharedflows_revisions_update_shared_flow_revision" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-validate"><code>validate</code></a></td>
    <td>Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.</td>
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
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sharedflowsId">
    <td><CopyableCode code="sharedflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validate">
    <td><CopyableCode code="validate" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="organizations_sharedflows_revisions_update_shared_flow_revision"
    values={[
        { label: 'organizations_sharedflows_revisions_update_shared_flow_revision', value: 'organizations_sharedflows_revisions_update_shared_flow_revision' }
    ]}
>
<TabItem value="organizations_sharedflows_revisions_update_shared_flow_revision">

Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.

```sql
UPDATE google.apigee.revisions_shared_flow_revision
SET 
data__contentType = '{{ contentType }}',
data__data = '{{ data }}',
data__extensions = '{{ extensions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sharedflowsId = '{{ sharedflowsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND validate = {{ validate}}
RETURNING
name,
configurationVersion,
contextInfo,
createdAt,
description,
displayName,
entityMetaDataAsProperties,
lastModifiedAt,
policies,
resourceFiles,
resources,
revision,
sharedFlows,
type;
```
</TabItem>
</Tabs>
