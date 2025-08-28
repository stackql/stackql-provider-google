--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - analyticshub
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_subscriptions_get"
    values={[
        { label: 'projects_locations_subscriptions_get', value: 'projects_locations_subscriptions_get' },
        { label: 'projects_locations_subscriptions_list', value: 'projects_locations_subscriptions_list' }
    ]}
>
<TabItem value="projects_locations_subscriptions_get">

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
    <td>Output only. The resource name of the subscription. e.g. `projects/myproject/locations/us/subscriptions/123`.</td>
</tr>
<tr>
    <td><CopyableCode code="commercialInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. This is set if this is a commercial subscription i.e. if this subscription was created from subscribing to a commercial listing. (id: GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataExchange" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/us/dataExchanges/456</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. BigQuery destination dataset to create for the subscriber. (id: DestinationDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the subscription was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedDatasetMap" /></td>
    <td><code>object</code></td>
    <td>Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/us/dataExchanges/456/listings/789 -&gt; projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedResources" /></td>
    <td><code>array</code></td>
    <td>Output only. Linked resources created in the subscription. Only contains values if state = STATE_ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="listing" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the source Listing. e.g. projects/123/locations/us/dataExchanges/456/listings/789</td>
</tr>
<tr>
    <td><CopyableCode code="logLinkedDatasetQueryUserEmail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. By default, false. If true, the Subscriber agreed to the email sharing mandate that is enabled for DataExchange/Listing.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the project of this subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Organization of the project this subscription belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Output only. Listing shared asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriberContact" /></td>
    <td><code>string</code></td>
    <td>Output only. Email of the subscriber.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_subscriptions_list">

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
    <td>Output only. The resource name of the subscription. e.g. `projects/myproject/locations/us/subscriptions/123`.</td>
</tr>
<tr>
    <td><CopyableCode code="commercialInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. This is set if this is a commercial subscription i.e. if this subscription was created from subscribing to a commercial listing. (id: GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataExchange" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/us/dataExchanges/456</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDataset" /></td>
    <td><code>object</code></td>
    <td>Optional. BigQuery destination dataset to create for the subscriber. (id: DestinationDataset)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the subscription was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedDatasetMap" /></td>
    <td><code>object</code></td>
    <td>Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/us/dataExchanges/456/listings/789 -&gt; projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedResources" /></td>
    <td><code>array</code></td>
    <td>Output only. Linked resources created in the subscription. Only contains values if state = STATE_ACTIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="listing" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the source Listing. e.g. projects/123/locations/us/dataExchanges/456/listings/789</td>
</tr>
<tr>
    <td><CopyableCode code="logLinkedDatasetQueryUserEmail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. By default, false. If true, the Subscriber agreed to the email sharing mandate that is enabled for DataExchange/Listing.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the project of this subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Organization of the project this subscription belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Output only. Listing shared asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriberContact" /></td>
    <td><code>string</code></td>
    <td>Output only. Email of the subscriber.</td>
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
    <td><a href="#projects_locations_subscriptions_get"><CopyableCode code="projects_locations_subscriptions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Gets the details of a Subscription.</td>
</tr>
<tr>
    <td><a href="#projects_locations_subscriptions_list"><CopyableCode code="projects_locations_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all subscriptions in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_subscriptions_delete"><CopyableCode code="projects_locations_subscriptions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Deletes a subscription.</td>
</tr>
<tr>
    <td><a href="#projects_locations_subscriptions_refresh"><CopyableCode code="projects_locations_subscriptions_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.</td>
</tr>
<tr>
    <td><a href="#projects_locations_subscriptions_revoke"><CopyableCode code="projects_locations_subscriptions_revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Revokes a given subscription.</td>
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
<tr id="parameter-subscriptionsId">
    <td><CopyableCode code="subscriptionsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_subscriptions_get"
    values={[
        { label: 'projects_locations_subscriptions_get', value: 'projects_locations_subscriptions_get' },
        { label: 'projects_locations_subscriptions_list', value: 'projects_locations_subscriptions_list' }
    ]}
>
<TabItem value="projects_locations_subscriptions_get">

Gets the details of a Subscription.

```sql
SELECT
name,
commercialInfo,
creationTime,
dataExchange,
destinationDataset,
lastModifyTime,
linkedDatasetMap,
linkedResources,
listing,
logLinkedDatasetQueryUserEmail,
organizationDisplayName,
organizationId,
resourceType,
state,
subscriberContact
FROM google.analyticshub.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND subscriptionsId = '{{ subscriptionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_subscriptions_list">

Lists all subscriptions in a given project and location.

```sql
SELECT
name,
commercialInfo,
creationTime,
dataExchange,
destinationDataset,
lastModifyTime,
linkedDatasetMap,
linkedResources,
listing,
logLinkedDatasetQueryUserEmail,
organizationDisplayName,
organizationId,
resourceType,
state,
subscriberContact
FROM google.analyticshub.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_subscriptions_delete"
    values={[
        { label: 'projects_locations_subscriptions_delete', value: 'projects_locations_subscriptions_delete' }
    ]}
>
<TabItem value="projects_locations_subscriptions_delete">

Deletes a subscription.

```sql
DELETE FROM google.analyticshub.subscriptions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_subscriptions_refresh"
    values={[
        { label: 'projects_locations_subscriptions_refresh', value: 'projects_locations_subscriptions_refresh' },
        { label: 'projects_locations_subscriptions_revoke', value: 'projects_locations_subscriptions_revoke' }
    ]}
>
<TabItem value="projects_locations_subscriptions_refresh">

Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.

```sql
EXEC google.analyticshub.subscriptions.projects_locations_subscriptions_refresh 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_subscriptions_revoke">

Revokes a given subscription.

```sql
EXEC google.analyticshub.subscriptions.projects_locations_subscriptions_revoke 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"revokeCommercial": {{ revokeCommercial }}
}';
```
</TabItem>
</Tabs>
