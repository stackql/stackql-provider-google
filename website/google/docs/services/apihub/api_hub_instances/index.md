--- 
title: api_hub_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - api_hub_instances
  - apihub
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

Creates, updates, deletes, gets or lists an <code>api_hub_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>api_hub_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.api_hub_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>Identifier. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apiHubInstances/&#123;apiHubInstance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. Config of the ApiHub instance. (id: GoogleCloudApihubV1Config)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the ApiHub instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the ApiHub instance.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Extra information about ApiHub instance state. Currently the message would be populated when state is `FAILED`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apiHubInstancesId"><code>apiHubInstancesId</code></a></td>
    <td></td>
    <td>Gets details of a single API Hub instance.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-apiHubInstanceId"><code>apiHubInstanceId</code></a></td>
    <td>Provisions instance resources for the API Hub.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apiHubInstancesId"><code>apiHubInstancesId</code></a></td>
    <td></td>
    <td>Deletes the API hub instance.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Looks up an Api Hub instance in a given GCP project. There will always be only one Api Hub instance for a GCP project across all locations.</td>
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
<tr id="parameter-apiHubInstancesId">
    <td><CopyableCode code="apiHubInstancesId" /></td>
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
<tr id="parameter-apiHubInstanceId">
    <td><CopyableCode code="apiHubInstanceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets details of a single API Hub instance.

```sql
SELECT
name,
config,
createTime,
description,
labels,
state,
stateMessage,
updateTime
FROM google.apihub.api_hub_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apiHubInstancesId = '{{ apiHubInstancesId }}' -- required;
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

Provisions instance resources for the API Hub.

```sql
INSERT INTO google.apihub.api_hub_instances (
data__name,
data__config,
data__labels,
data__description,
projectsId,
locationsId,
apiHubInstanceId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ labels }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apiHubInstanceId }}'
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
- name: api_hub_instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the api_hub_instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the api_hub_instances resource.
    - name: name
      value: string
      description: >
        Identifier. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`.
        
    - name: config
      value: object
      description: >
        Required. Config of the ApiHub instance.
        
    - name: labels
      value: object
      description: >
        Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
        
    - name: description
      value: string
      description: >
        Optional. Description of the ApiHub instance.
        
    - name: apiHubInstanceId
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

Deletes the API hub instance.

```sql
DELETE FROM google.apihub.api_hub_instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apiHubInstancesId = '{{ apiHubInstancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lookup"
    values={[
        { label: 'lookup', value: 'lookup' }
    ]}
>
<TabItem value="lookup">

Looks up an Api Hub instance in a given GCP project. There will always be only one Api Hub instance for a GCP project across all locations.

```sql
EXEC google.apihub.api_hub_instances.lookup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required;
```
</TabItem>
</Tabs>
