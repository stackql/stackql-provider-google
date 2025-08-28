--- 
title: peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - peerings
  - managedidentities
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

Creates, updates, deletes, gets or lists a <code>peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedidentities.peerings" /></td></tr>
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
    <td>Output only. Unique name of the peering in this scope including projects and location using the form: `projects/&#123;project_id&#125;/locations/global/peerings/&#123;peering_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. The full names of the Google Compute Engine [networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainResource" /></td>
    <td><code>string</code></td>
    <td>Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/&#123;project_id&#125;/locations/global/domains/&#123;domain_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this Peering.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this peering, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time.</td>
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
    <td>Output only. Unique name of the peering in this scope including projects and location using the form: `projects/&#123;project_id&#125;/locations/global/peerings/&#123;peering_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. The full names of the Google Compute Engine [networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainResource" /></td>
    <td><code>string</code></td>
    <td>Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/&#123;project_id&#125;/locations/global/domains/&#123;domain_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this Peering.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this peering, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-peeringsId"><code>peeringsId</code></a></td>
    <td></td>
    <td>Gets details of a single Peering.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Peerings in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-peeringId"><code>peeringId</code></a></td>
    <td>Creates a Peering for Managed AD instance.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-peeringsId"><code>peeringsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the labels for specified Peering.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-peeringsId"><code>peeringsId</code></a></td>
    <td></td>
    <td>Deletes identified Peering.</td>
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
<tr id="parameter-peeringsId">
    <td><CopyableCode code="peeringsId" /></td>
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
<tr id="parameter-peeringId">
    <td><CopyableCode code="peeringId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single Peering.

```sql
SELECT
name,
authorizedNetwork,
createTime,
domainResource,
labels,
state,
statusMessage,
updateTime
FROM google.managedidentities.peerings
WHERE projectsId = '{{ projectsId }}' -- required
AND peeringsId = '{{ peeringsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Peerings in a given project.

```sql
SELECT
name,
authorizedNetwork,
createTime,
domainResource,
labels,
state,
statusMessage,
updateTime
FROM google.managedidentities.peerings
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates a Peering for Managed AD instance.

```sql
INSERT INTO google.managedidentities.peerings (
data__labels,
data__authorizedNetwork,
data__domainResource,
projectsId,
peeringId
)
SELECT 
'{{ labels }}',
'{{ authorizedNetwork }}',
'{{ domainResource }}',
'{{ projectsId }}',
'{{ peeringId }}'
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
- name: peerings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the peerings resource.
    - name: labels
      value: object
      description: >
        Optional. Resource labels to represent user-provided metadata.
        
    - name: authorizedNetwork
      value: string
      description: >
        Required. The full names of the Google Compute Engine [networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.
        
    - name: domainResource
      value: string
      description: >
        Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`
        
    - name: peeringId
      value: string
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

Updates the labels for specified Peering.

```sql
UPDATE google.managedidentities.peerings
SET 
data__labels = '{{ labels }}',
data__authorizedNetwork = '{{ authorizedNetwork }}',
data__domainResource = '{{ domainResource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND peeringsId = '{{ peeringsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes identified Peering.

```sql
DELETE FROM google.managedidentities.peerings
WHERE projectsId = '{{ projectsId }}' --required
AND peeringsId = '{{ peeringsId }}' --required;
```
</TabItem>
</Tabs>
