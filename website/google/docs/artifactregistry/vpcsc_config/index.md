--- 
title: vpcsc_config
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcsc_config
  - artifactregistry
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

Creates, updates, deletes, gets or lists a <code>vpcsc_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpcsc_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.artifactregistry.vpcsc_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpcsc_config"
    values={[
        { label: 'get_vpcsc_config', value: 'get_vpcsc_config' }
    ]}
>
<TabItem value="get_vpcsc_config">

The Artifact Registry VPC SC config that apply to a Project.

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
    <td>The name of the project's VPC SC Config. Always of the form: projects/&#123;projectID&#125;/locations/&#123;location&#125;/vpcscConfig In update request: never set In response: always set</td>
</tr>
<tr>
    <td><CopyableCode code="vpcscPolicy" /></td>
    <td><code>string</code></td>
    <td>The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny).</td>
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
    <td><a href="#get_vpcsc_config"><CopyableCode code="get_vpcsc_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves the VPCSC Config for the Project.</td>
</tr>
<tr>
    <td><a href="#update_vpcsc_config"><CopyableCode code="update_vpcsc_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the VPCSC Config for the Project.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="get_vpcsc_config"
    values={[
        { label: 'get_vpcsc_config', value: 'get_vpcsc_config' }
    ]}
>
<TabItem value="get_vpcsc_config">

Retrieves the VPCSC Config for the Project.

```sql
SELECT
name,
vpcscPolicy
FROM google.artifactregistry.vpcsc_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpcsc_config"
    values={[
        { label: 'update_vpcsc_config', value: 'update_vpcsc_config' }
    ]}
>
<TabItem value="update_vpcsc_config">

Updates the VPCSC Config for the Project.

```sql
UPDATE google.artifactregistry.vpcsc_config
SET 
data__name = '{{ name }}',
data__vpcscPolicy = '{{ vpcscPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
vpcscPolicy;
```
</TabItem>
</Tabs>
