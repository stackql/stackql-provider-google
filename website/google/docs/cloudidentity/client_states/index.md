--- 
title: client_states
hide_title: false
hide_table_of_contents: false
keywords:
  - client_states
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>client_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>client_states</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.client_states" /></td></tr>
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

Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users

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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/&#123;device&#125;/deviceUsers/&#123;device_user&#125;/clientState/&#123;partner&#125;`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `&#123;customer&#125;-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')</td>
</tr>
<tr>
    <td><CopyableCode code="assetTags" /></td>
    <td><code>array</code></td>
    <td>The caller can specify asset tags for this resource</td>
</tr>
<tr>
    <td><CopyableCode code="complianceState" /></td>
    <td><code>string</code></td>
    <td>The compliance state of the resource as specified by the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the client state data was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customId" /></td>
    <td><code>string</code></td>
    <td>This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest</td>
</tr>
<tr>
    <td><CopyableCode code="healthScore" /></td>
    <td><code>string</code></td>
    <td>The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.</td>
</tr>
<tr>
    <td><CopyableCode code="keyValuePairs" /></td>
    <td><code>object</code></td>
    <td>The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the client state data was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>string</code></td>
    <td>The management state of the resource as specified by the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerType" /></td>
    <td><code>string</code></td>
    <td>Output only. The owner of the ClientState</td>
</tr>
<tr>
    <td><CopyableCode code="scoreReason" /></td>
    <td><code>string</code></td>
    <td>A descriptive cause of the health score.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message that is returned in ListClientStates.

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
    <td><CopyableCode code="clientStates" /></td>
    <td><code>array</code></td>
    <td>Client states meeting the list restrictions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results. Empty if there are no more results.</td>
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
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a>, <a href="#parameter-clientStatesId"><code>clientStatesId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Gets the client state for the device user</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the client states for the given search query.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a>, <a href="#parameter-clientStatesId"><code>clientStatesId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the client state for the device user **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium</td>
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
<tr id="parameter-clientStatesId">
    <td><CopyableCode code="clientStatesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deviceUsersId">
    <td><CopyableCode code="deviceUsersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-devicesId">
    <td><CopyableCode code="devicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
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
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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

Gets the client state for the device user

```sql
SELECT
name,
assetTags,
complianceState,
createTime,
customId,
etag,
healthScore,
keyValuePairs,
lastUpdateTime,
managed,
ownerType,
scoreReason
FROM google.cloudidentity.client_states
WHERE devicesId = '{{ devicesId }}' -- required
AND deviceUsersId = '{{ deviceUsersId }}' -- required
AND clientStatesId = '{{ clientStatesId }}' -- required
AND customer = '{{ customer }}';
```
</TabItem>
<TabItem value="list">

Lists the client states for the given search query.

```sql
SELECT
clientStates,
nextPageToken
FROM google.cloudidentity.client_states
WHERE devicesId = '{{ devicesId }}' -- required
AND deviceUsersId = '{{ deviceUsersId }}' -- required
AND customer = '{{ customer }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}';
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

Updates the client state for the device user **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

```sql
UPDATE google.cloudidentity.client_states
SET 
data__etag = '{{ etag }}',
data__customId = '{{ customId }}',
data__assetTags = '{{ assetTags }}',
data__healthScore = '{{ healthScore }}',
data__scoreReason = '{{ scoreReason }}',
data__managed = '{{ managed }}',
data__complianceState = '{{ complianceState }}',
data__keyValuePairs = '{{ keyValuePairs }}'
WHERE 
devicesId = '{{ devicesId }}' --required
AND deviceUsersId = '{{ deviceUsersId }}' --required
AND clientStatesId = '{{ clientStatesId }}' --required
AND customer = '{{ customer}}'
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
