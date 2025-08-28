--- 
title: dns_peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_peerings
  - datafusion
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

Creates, updates, deletes, gets or lists a <code>dns_peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datafusion.dns_peerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name of the dns peering zone. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;/dnsPeerings/&#123;dns_peering&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional description of the dns zone.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Required. The dns name suffix of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="targetNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional target network to which dns peering should happen.</td>
</tr>
<tr>
    <td><CopyableCode code="targetProject" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional target project to which dns peering should happen.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DNS peerings for a given resource.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-dnsPeeringId"><code>dnsPeeringId</code></a></td>
    <td>Creates DNS peering on the given resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-dnsPeeringsId"><code>dnsPeeringsId</code></a></td>
    <td></td>
    <td>Deletes DNS peering on the given resource.</td>
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
<tr id="parameter-dnsPeeringsId">
    <td><CopyableCode code="dnsPeeringsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-dnsPeeringId">
    <td><CopyableCode code="dnsPeeringId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists DNS peerings for a given resource.

```sql
SELECT
name,
description,
domain,
targetNetwork,
targetProject
FROM google.datafusion.dns_peerings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates DNS peering on the given resource.

```sql
INSERT INTO google.datafusion.dns_peerings (
data__name,
data__domain,
data__description,
data__targetProject,
data__targetNetwork,
projectsId,
locationsId,
instancesId,
dnsPeeringId
)
SELECT 
'{{ name }}',
'{{ domain }}',
'{{ description }}',
'{{ targetProject }}',
'{{ targetNetwork }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instancesId }}',
'{{ dnsPeeringId }}'
RETURNING
name,
description,
domain,
targetNetwork,
targetProject
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dns_peerings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the dns_peerings resource.
    - name: locationsId
      value: string
      description: Required parameter for the dns_peerings resource.
    - name: instancesId
      value: string
      description: Required parameter for the dns_peerings resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering}
        
    - name: domain
      value: string
      description: >
        Required. The dns name suffix of the zone.
        
    - name: description
      value: string
      description: >
        Optional. Optional description of the dns zone.
        
    - name: targetProject
      value: string
      description: >
        Optional. Optional target project to which dns peering should happen.
        
    - name: targetNetwork
      value: string
      description: >
        Optional. Optional target network to which dns peering should happen.
        
    - name: dnsPeeringId
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

Deletes DNS peering on the given resource.

```sql
DELETE FROM google.datafusion.dns_peerings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND dnsPeeringsId = '{{ dnsPeeringsId }}' --required;
```
</TabItem>
</Tabs>
