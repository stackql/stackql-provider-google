--- 
title: data_exchanges_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_exchanges_subscriptions
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

Creates, updates, deletes, gets or lists a <code>data_exchanges_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_exchanges_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.data_exchanges_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_exchanges_list_subscriptions"
    values={[
        { label: 'projects_locations_data_exchanges_list_subscriptions', value: 'projects_locations_data_exchanges_list_subscriptions' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_list_subscriptions">

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
    <td><a href="#projects_locations_data_exchanges_list_subscriptions"><CopyableCode code="projects_locations_data_exchanges_list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-includeDeletedSubscriptions"><code>includeDeletedSubscriptions</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all subscriptions on a given Data Exchange or Listing.</td>
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
<tr id="parameter-dataExchangesId">
    <td><CopyableCode code="dataExchangesId" /></td>
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
<tr id="parameter-includeDeletedSubscriptions">
    <td><CopyableCode code="includeDeletedSubscriptions" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_data_exchanges_list_subscriptions"
    values={[
        { label: 'projects_locations_data_exchanges_list_subscriptions', value: 'projects_locations_data_exchanges_list_subscriptions' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_list_subscriptions">

Lists all subscriptions on a given Data Exchange or Listing.

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
FROM google.analyticshub.data_exchanges_subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND includeDeletedSubscriptions = '{{ includeDeletedSubscriptions }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
