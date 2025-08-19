--- 
title: collectors
hide_title: false
hide_table_of_contents: false
keywords:
  - collectors
  - rapidmigrationassessment
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

Creates, updates, deletes, gets or lists a <code>collectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>collectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.rapidmigrationassessment.collectors" /></td></tr>
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

Message describing Collector object.

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
    <td>name of resource.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>Output only. Store cloud storage bucket name (which is a guid) created with this Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Client version.</td>
</tr>
<tr>
    <td><CopyableCode code="collectionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>How many days to collect data.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User specified description of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified name of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="eulaUri" /></td>
    <td><code>string</code></td>
    <td>Uri for EULA (End User License Agreement) from customer.</td>
</tr>
<tr>
    <td><CopyableCode code="expectedAssetCount" /></td>
    <td><code>string (int64)</code></td>
    <td>User specified expected asset count.</td>
</tr>
<tr>
    <td><CopyableCode code="guestOsScan" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference to MC Source Guest Os Scan. (id: GuestOsScan)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Service Account email used to ingest data to this Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the Collector.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="vsphereScan" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference to MC Source vsphere_scan. (id: VSphereScan)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing Collectors.

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
    <td><CopyableCode code="collectors" /></td>
    <td><code>array</code></td>
    <td>The list of Collectors.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td></td>
    <td>Gets details of a single Collector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Collectors in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-collectorId"><code>collectorId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a Collector to manage the on-prem appliance which collects information about Customer assets.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Collector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Collector - changes state of collector to "Deleting". Background jobs does final deletion through producer API.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td></td>
    <td>Resumes the given collector.</td>
</tr>
<tr>
    <td><a href="#register"><CopyableCode code="register" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td></td>
    <td>Registers the given collector.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectorsId"><code>collectorsId</code></a></td>
    <td></td>
    <td>Pauses the given collector.</td>
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
<tr id="parameter-collectorsId">
    <td><CopyableCode code="collectorsId" /></td>
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
<tr id="parameter-collectorId">
    <td><CopyableCode code="collectorId" /></td>
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

Gets details of a single Collector.

```sql
SELECT
name,
bucket,
clientVersion,
collectionDays,
createTime,
description,
displayName,
eulaUri,
expectedAssetCount,
guestOsScan,
labels,
serviceAccount,
state,
updateTime,
vsphereScan
FROM google.rapidmigrationassessment.collectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectorsId = '{{ collectorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Collectors in a given project and location.

```sql
SELECT
collectors,
nextPageToken,
unreachable
FROM google.rapidmigrationassessment.collectors
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

Create a Collector to manage the on-prem appliance which collects information about Customer assets.

```sql
INSERT INTO google.rapidmigrationassessment.collectors (
data__name,
data__labels,
data__displayName,
data__description,
data__serviceAccount,
data__expectedAssetCount,
data__collectionDays,
data__eulaUri,
projectsId,
locationsId,
collectorId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ displayName }}',
'{{ description }}',
'{{ serviceAccount }}',
'{{ expectedAssetCount }}',
{{ collectionDays }},
'{{ eulaUri }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectorId }}',
'{{ requestId }}'
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
- name: collectors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the collectors resource.
    - name: locationsId
      value: string
      description: Required parameter for the collectors resource.
    - name: name
      value: string
      description: >
        name of resource.
        
    - name: labels
      value: object
      description: >
        Labels as key value pairs.
        
    - name: displayName
      value: string
      description: >
        User specified name of the Collector.
        
    - name: description
      value: string
      description: >
        User specified description of the Collector.
        
    - name: serviceAccount
      value: string
      description: >
        Service Account email used to ingest data to this Collector.
        
    - name: expectedAssetCount
      value: string
      description: >
        User specified expected asset count.
        
    - name: collectionDays
      value: integer
      description: >
        How many days to collect data.
        
    - name: eulaUri
      value: string
      description: >
        Uri for EULA (End User License Agreement) from customer.
        
    - name: collectorId
      value: string
    - name: requestId
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

Updates the parameters of a single Collector.

```sql
UPDATE google.rapidmigrationassessment.collectors
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__serviceAccount = '{{ serviceAccount }}',
data__expectedAssetCount = '{{ expectedAssetCount }}',
data__collectionDays = {{ collectionDays }},
data__eulaUri = '{{ eulaUri }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectorsId = '{{ collectorsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single Collector - changes state of collector to "Deleting". Background jobs does final deletion through producer API.

```sql
DELETE FROM google.rapidmigrationassessment.collectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectorsId = '{{ collectorsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resume"
    values={[
        { label: 'resume', value: 'resume' },
        { label: 'register', value: 'register' },
        { label: 'pause', value: 'pause' }
    ]}
>
<TabItem value="resume">

Resumes the given collector.

```sql
EXEC google.rapidmigrationassessment.collectors.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectorsId='{{ collectorsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="register">

Registers the given collector.

```sql
EXEC google.rapidmigrationassessment.collectors.register 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectorsId='{{ collectorsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="pause">

Pauses the given collector.

```sql
EXEC google.rapidmigrationassessment.collectors.pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectorsId='{{ collectorsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
