--- 
title: sfdc_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - sfdc_channels
  - integrations
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

Creates, updates, deletes, gets or lists a <code>sfdc_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sfdc_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.sfdc_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_sfdc_channels_get"
    values={[
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_get', value: 'projects_locations_products_sfdc_instances_sfdc_channels_get' },
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_list', value: 'projects_locations_products_sfdc_instances_sfdc_channels_list' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_get', value: 'projects_locations_sfdc_instances_sfdc_channels_get' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_list', value: 'projects_locations_sfdc_instances_sfdc_channels_list' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_get">

The SfdcChannel that points to a CDC or Platform Event Channel.

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
    <td>Resource name of the SFDC channel projects/&#123;project&#125;/locations/&#123;location&#125;/sfdcInstances/&#123;sfdc_instance&#125;/sfdcChannels/&#123;sfdc_channel&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="channelTopic" /></td>
    <td><code>string</code></td>
    <td>Required. The Channel topic defined by salesforce once an channel is opened</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel is created</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel was deleted. Empty if not deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description for this channel</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Client level unique name/alias to easily reference a channel.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReplayId" /></td>
    <td><code>string</code></td>
    <td>Output only. Last sfdc messsage replay id for channel</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_list">

Response to list SfdcChannels.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcChannels" /></td>
    <td><code>array</code></td>
    <td>The list of SfdcChannels retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_get">

The SfdcChannel that points to a CDC or Platform Event Channel.

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
    <td>Resource name of the SFDC channel projects/&#123;project&#125;/locations/&#123;location&#125;/sfdcInstances/&#123;sfdc_instance&#125;/sfdcChannels/&#123;sfdc_channel&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="channelTopic" /></td>
    <td><code>string</code></td>
    <td>Required. The Channel topic defined by salesforce once an channel is opened</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel is created</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel was deleted. Empty if not deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description for this channel</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Client level unique name/alias to easily reference a channel.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReplayId" /></td>
    <td><code>string</code></td>
    <td>Output only. Last sfdc messsage replay id for channel</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the channel was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_list">

Response to list SfdcChannels.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="sfdcChannels" /></td>
    <td><code>array</code></td>
    <td>The list of SfdcChannels retrieved.</td>
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
    <td><a href="#projects_locations_products_sfdc_instances_sfdc_channels_get"><CopyableCode code="projects_locations_products_sfdc_instances_sfdc_channels_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td></td>
    <td>Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_sfdc_channels_list"><CopyableCode code="projects_locations_products_sfdc_instances_sfdc_channels_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_sfdc_channels_get"><CopyableCode code="projects_locations_sfdc_instances_sfdc_channels_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td></td>
    <td>Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_sfdc_channels_list"><CopyableCode code="projects_locations_sfdc_instances_sfdc_channels_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_sfdc_channels_create"><CopyableCode code="projects_locations_products_sfdc_instances_sfdc_channels_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_sfdc_channels_create"><CopyableCode code="projects_locations_sfdc_instances_sfdc_channels_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a></td>
    <td></td>
    <td>Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_sfdc_channels_patch"><CopyableCode code="projects_locations_products_sfdc_instances_sfdc_channels_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_sfdc_channels_patch"><CopyableCode code="projects_locations_sfdc_instances_sfdc_channels_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_sfdc_instances_sfdc_channels_delete"><CopyableCode code="projects_locations_products_sfdc_instances_sfdc_channels_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td></td>
    <td>Deletes an sfdc channel.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sfdc_instances_sfdc_channels_delete"><CopyableCode code="projects_locations_sfdc_instances_sfdc_channels_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sfdcInstancesId"><code>sfdcInstancesId</code></a>, <a href="#parameter-sfdcChannelsId"><code>sfdcChannelsId</code></a></td>
    <td></td>
    <td>Deletes an sfdc channel.</td>
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
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sfdcChannelsId">
    <td><CopyableCode code="sfdcChannelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sfdcInstancesId">
    <td><CopyableCode code="sfdcInstancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_products_sfdc_instances_sfdc_channels_get"
    values={[
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_get', value: 'projects_locations_products_sfdc_instances_sfdc_channels_get' },
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_list', value: 'projects_locations_products_sfdc_instances_sfdc_channels_list' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_get', value: 'projects_locations_sfdc_instances_sfdc_channels_get' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_list', value: 'projects_locations_sfdc_instances_sfdc_channels_list' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_get">

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

```sql
SELECT
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime
FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_list">

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

```sql
SELECT
nextPageToken,
sfdcChannels
FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_get">

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

```sql
SELECT
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime
FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_list">

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

```sql
SELECT
nextPageToken,
sfdcChannels
FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_sfdc_channels_create"
    values={[
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_create', value: 'projects_locations_products_sfdc_instances_sfdc_channels_create' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_create', value: 'projects_locations_sfdc_instances_sfdc_channels_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_create">

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

```sql
INSERT INTO google.integrations.sfdc_channels (
data__name,
data__displayName,
data__description,
data__channelTopic,
projectsId,
locationsId,
productsId,
sfdcInstancesId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ channelTopic }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}',
'{{ sfdcInstancesId }}'
RETURNING
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_create">

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

```sql
INSERT INTO google.integrations.sfdc_channels (
data__name,
data__displayName,
data__description,
data__channelTopic,
projectsId,
locationsId,
sfdcInstancesId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ channelTopic }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sfdcInstancesId }}'
RETURNING
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sfdc_channels
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sfdc_channels resource.
    - name: locationsId
      value: string
      description: Required parameter for the sfdc_channels resource.
    - name: productsId
      value: string
      description: Required parameter for the sfdc_channels resource.
    - name: sfdcInstancesId
      value: string
      description: Required parameter for the sfdc_channels resource.
    - name: name
      value: string
      description: >
        Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
        
    - name: displayName
      value: string
      description: >
        Optional. Client level unique name/alias to easily reference a channel.
        
    - name: description
      value: string
      description: >
        Optional. The description for this channel
        
    - name: channelTopic
      value: string
      description: >
        Required. The Channel topic defined by salesforce once an channel is opened
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_sfdc_channels_patch"
    values={[
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_patch', value: 'projects_locations_products_sfdc_instances_sfdc_channels_patch' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_patch', value: 'projects_locations_sfdc_instances_sfdc_channels_patch' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_patch">

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

```sql
UPDATE google.integrations.sfdc_channels
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__channelTopic = '{{ channelTopic }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_patch">

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

```sql
UPDATE google.integrations.sfdc_channels
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__channelTopic = '{{ channelTopic }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
channelTopic,
createTime,
deleteTime,
description,
displayName,
isActive,
lastReplayId,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_sfdc_instances_sfdc_channels_delete"
    values={[
        { label: 'projects_locations_products_sfdc_instances_sfdc_channels_delete', value: 'projects_locations_products_sfdc_instances_sfdc_channels_delete' },
        { label: 'projects_locations_sfdc_instances_sfdc_channels_delete', value: 'projects_locations_sfdc_instances_sfdc_channels_delete' }
    ]}
>
<TabItem value="projects_locations_products_sfdc_instances_sfdc_channels_delete">

Deletes an sfdc channel.

```sql
DELETE FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_sfdc_instances_sfdc_channels_delete">

Deletes an sfdc channel.

```sql
DELETE FROM google.integrations.sfdc_channels
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sfdcInstancesId = '{{ sfdcInstancesId }}' --required
AND sfdcChannelsId = '{{ sfdcChannelsId }}' --required;
```
</TabItem>
</Tabs>
