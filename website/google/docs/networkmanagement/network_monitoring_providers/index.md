--- 
title: network_monitoring_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - network_monitoring_providers
  - networkmanagement
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

Creates, updates, deletes, gets or lists a <code>network_monitoring_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_monitoring_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.network_monitoring_providers" /></td></tr>
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

Message describing NetworkMonitoringProvider resource.

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
    <td>Output only. Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkMonitoringProvider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of error messages detected for the NetworkMonitoringProvider.</td>
</tr>
<tr>
    <td><CopyableCode code="providerType" /></td>
    <td><code>string</code></td>
    <td>Required. Type of the NetworkMonitoringProvider.</td>
</tr>
<tr>
    <td><CopyableCode code="providerUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to the provider's UI.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the NetworkMonitoringProvider.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkMonitoringProvider was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing NetworkMonitoringProviders

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
    <td><CopyableCode code="networkMonitoringProviders" /></td>
    <td><code>array</code></td>
    <td>The list of NetworkMonitoringProvider</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td></td>
    <td>Gets the NetworkMonitoringProvider resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists NetworkMonitoringProviders for a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-networkMonitoringProviderId"><code>networkMonitoringProviderId</code></a></td>
    <td>Creates a NetworkMonitoringProvider resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td></td>
    <td>Deletes a NetworkMonitoringProvider resource and all of its child resources.</td>
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
<tr id="parameter-networkMonitoringProvidersId">
    <td><CopyableCode code="networkMonitoringProvidersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkMonitoringProviderId">
    <td><CopyableCode code="networkMonitoringProviderId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the NetworkMonitoringProvider resource.

```sql
SELECT
name,
createTime,
errors,
providerType,
providerUri,
state,
updateTime
FROM google.networkmanagement.network_monitoring_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists NetworkMonitoringProviders for a given project and location.

```sql
SELECT
networkMonitoringProviders,
nextPageToken
FROM google.networkmanagement.network_monitoring_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a NetworkMonitoringProvider resource.

```sql
INSERT INTO google.networkmanagement.network_monitoring_providers (
data__providerType,
projectsId,
locationsId,
networkMonitoringProviderId
)
SELECT 
'{{ providerType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ networkMonitoringProviderId }}'
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
- name: network_monitoring_providers
  props:
    - name: projectsId
      value: string
      description: Required parameter for the network_monitoring_providers resource.
    - name: locationsId
      value: string
      description: Required parameter for the network_monitoring_providers resource.
    - name: providerType
      value: string
      description: >
        Required. Type of the NetworkMonitoringProvider.
        
      valid_values: ['PROVIDER_TYPE_UNSPECIFIED', 'EXTERNAL']
    - name: networkMonitoringProviderId
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

Deletes a NetworkMonitoringProvider resource and all of its child resources.

```sql
DELETE FROM google.networkmanagement.network_monitoring_providers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' --required;
```
</TabItem>
</Tabs>
