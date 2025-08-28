--- 
title: user_events
hide_title: false
hide_table_of_contents: false
keywords:
  - user_events
  - recommendationengine
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

Creates, updates, deletes, gets or lists a <code>user_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_events</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommendationengine.user_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_user_events_list"
    values={[
        { label: 'projects_locations_catalogs_event_stores_user_events_list', value: 'projects_locations_catalogs_event_stores_user_events_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_user_events_list">

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
    <td><CopyableCode code="eventDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. User event detailed information common across different recommendation types. (id: GoogleCloudRecommendationengineV1beta1EventDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="eventSource" /></td>
    <td><code>string</code></td>
    <td>Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Only required for ImportUserEvents method. Timestamp of user event created.</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="productEventDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Retail product specific user event metadata. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `category-page-view` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` * `search` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_event_detail' should be set for this unless the shopping cart is empty. This field is not allowed for the following event types: * `home-page-view` (id: GoogleCloudRecommendationengineV1beta1ProductEventDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="userInfo" /></td>
    <td><code>object</code></td>
    <td>Required. User information. (id: GoogleCloudRecommendationengineV1beta1UserInfo)</td>
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
    <td><a href="#projects_locations_catalogs_event_stores_user_events_list"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_user_events_write"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td></td>
    <td>Writes a single user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_user_events_collect"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_collect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td><a href="#parameter-userEvent"><code>userEvent</code></a>, <a href="#parameter-uri"><code>uri</code></a>, <a href="#parameter-ets"><code>ets</code></a></td>
    <td>Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_user_events_purge"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td></td>
    <td>Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_user_events_import"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td></td>
    <td>Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_user_events_rejoin"><CopyableCode code="projects_locations_catalogs_event_stores_user_events_rejoin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td></td>
    <td>Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.</td>
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
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-eventStoresId">
    <td><CopyableCode code="eventStoresId" /></td>
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
<tr id="parameter-ets">
    <td><CopyableCode code="ets" /></td>
    <td><code>string (int64)</code></td>
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
<tr id="parameter-uri">
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userEvent">
    <td><CopyableCode code="userEvent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_user_events_list"
    values={[
        { label: 'projects_locations_catalogs_event_stores_user_events_list', value: 'projects_locations_catalogs_event_stores_user_events_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_user_events_list">

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

```sql
SELECT
eventDetail,
eventSource,
eventTime,
eventType,
productEventDetail,
userInfo
FROM google.recommendationengine.user_events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND eventStoresId = '{{ eventStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_user_events_write"
    values={[
        { label: 'projects_locations_catalogs_event_stores_user_events_write', value: 'projects_locations_catalogs_event_stores_user_events_write' },
        { label: 'projects_locations_catalogs_event_stores_user_events_collect', value: 'projects_locations_catalogs_event_stores_user_events_collect' },
        { label: 'projects_locations_catalogs_event_stores_user_events_purge', value: 'projects_locations_catalogs_event_stores_user_events_purge' },
        { label: 'projects_locations_catalogs_event_stores_user_events_import', value: 'projects_locations_catalogs_event_stores_user_events_import' },
        { label: 'projects_locations_catalogs_event_stores_user_events_rejoin', value: 'projects_locations_catalogs_event_stores_user_events_rejoin' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_user_events_write">

Writes a single user event.

```sql
EXEC google.recommendationengine.user_events.projects_locations_catalogs_event_stores_user_events_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required 
@@json=
'{
"eventType": "{{ eventType }}", 
"userInfo": "{{ userInfo }}", 
"eventDetail": "{{ eventDetail }}", 
"productEventDetail": "{{ productEventDetail }}", 
"eventTime": "{{ eventTime }}", 
"eventSource": "{{ eventSource }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_event_stores_user_events_collect">

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

```sql
EXEC google.recommendationengine.user_events.projects_locations_catalogs_event_stores_user_events_collect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required, 
@userEvent='{{ userEvent }}', 
@uri='{{ uri }}', 
@ets='{{ ets }}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_event_stores_user_events_purge">

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

```sql
EXEC google.recommendationengine.user_events.projects_locations_catalogs_event_stores_user_events_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_event_stores_user_events_import">

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

```sql
EXEC google.recommendationengine.user_events.projects_locations_catalogs_event_stores_user_events_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"inputConfig": "{{ inputConfig }}", 
"errorsConfig": "{{ errorsConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_event_stores_user_events_rejoin">

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

```sql
EXEC google.recommendationengine.user_events.projects_locations_catalogs_event_stores_user_events_rejoin 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required 
@@json=
'{
"userEventRejoinScope": "{{ userEventRejoinScope }}"
}';
```
</TabItem>
</Tabs>
