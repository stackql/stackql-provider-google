--- 
title: listings_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - listings_subscriptions
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

Creates, updates, deletes, gets or lists a <code>listings_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>listings_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.listings_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_list_subscriptions"
    values={[
        { label: 'projects_locations_data_exchanges_listings_list_subscriptions', value: 'projects_locations_data_exchanges_listings_list_subscriptions' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_list_subscriptions">

Message for response to the listing of shared resource subscriptions.

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
    <td>Next page token.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedResourceSubscriptions" /></td>
    <td><code>array</code></td>
    <td>The list of subscriptions.</td>
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
    <td><a href="#projects_locations_data_exchanges_listings_list_subscriptions"><CopyableCode code="projects_locations_data_exchanges_listings_list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-listingsId"><code>listingsId</code></a></td>
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
<tr id="parameter-listingsId">
    <td><CopyableCode code="listingsId" /></td>
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
    defaultValue="projects_locations_data_exchanges_listings_list_subscriptions"
    values={[
        { label: 'projects_locations_data_exchanges_listings_list_subscriptions', value: 'projects_locations_data_exchanges_listings_list_subscriptions' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_list_subscriptions">

Lists all subscriptions on a given Data Exchange or Listing.

```sql
SELECT
nextPageToken,
sharedResourceSubscriptions
FROM google.analyticshub.listings_subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND listingsId = '{{ listingsId }}' -- required
AND includeDeletedSubscriptions = '{{ includeDeletedSubscriptions }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
