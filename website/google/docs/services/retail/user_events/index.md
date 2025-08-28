--- 
title: user_events
hide_title: false
hide_table_of_contents: false
keywords:
  - user_events
  - retail
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.user_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_catalogs_user_events_write"><CopyableCode code="projects_locations_catalogs_user_events_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-writeAsync"><code>writeAsync</code></a></td>
    <td>Writes a single user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_user_events_collect"><CopyableCode code="projects_locations_catalogs_user_events_collect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Writes a single user event from the browser. For larger user event payload over 16 KB, the POST method should be used instead, otherwise a 400 Bad Request error is returned. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_user_events_purge"><CopyableCode code="projects_locations_catalogs_user_events_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_user_events_import"><CopyableCode code="projects_locations_catalogs_user_events_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_user_events_rejoin"><CopyableCode code="projects_locations_catalogs_user_events_rejoin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.</td>
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
<tr id="parameter-writeAsync">
    <td><CopyableCode code="writeAsync" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_user_events_write"
    values={[
        { label: 'projects_locations_catalogs_user_events_write', value: 'projects_locations_catalogs_user_events_write' },
        { label: 'projects_locations_catalogs_user_events_collect', value: 'projects_locations_catalogs_user_events_collect' },
        { label: 'projects_locations_catalogs_user_events_purge', value: 'projects_locations_catalogs_user_events_purge' },
        { label: 'projects_locations_catalogs_user_events_import', value: 'projects_locations_catalogs_user_events_import' },
        { label: 'projects_locations_catalogs_user_events_rejoin', value: 'projects_locations_catalogs_user_events_rejoin' }
    ]}
>
<TabItem value="projects_locations_catalogs_user_events_write">

Writes a single user event.

```sql
EXEC google.retail.user_events.projects_locations_catalogs_user_events_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@writeAsync={{ writeAsync }} 
@@json=
'{
"eventType": "{{ eventType }}", 
"visitorId": "{{ visitorId }}", 
"sessionId": "{{ sessionId }}", 
"eventTime": "{{ eventTime }}", 
"experimentIds": "{{ experimentIds }}", 
"attributionToken": "{{ attributionToken }}", 
"productDetails": "{{ productDetails }}", 
"completionDetail": "{{ completionDetail }}", 
"attributes": "{{ attributes }}", 
"cartId": "{{ cartId }}", 
"purchaseTransaction": "{{ purchaseTransaction }}", 
"searchQuery": "{{ searchQuery }}", 
"filter": "{{ filter }}", 
"orderBy": "{{ orderBy }}", 
"offset": {{ offset }}, 
"pageCategories": "{{ pageCategories }}", 
"userInfo": "{{ userInfo }}", 
"uri": "{{ uri }}", 
"referrerUri": "{{ referrerUri }}", 
"pageViewId": "{{ pageViewId }}", 
"entity": "{{ entity }}", 
"panels": "{{ panels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_user_events_collect">

Writes a single user event from the browser. For larger user event payload over 16 KB, the POST method should be used instead, otherwise a 400 Bad Request error is returned. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

```sql
EXEC google.retail.user_events.projects_locations_catalogs_user_events_collect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"prebuiltRule": "{{ prebuiltRule }}", 
"userEvent": "{{ userEvent }}", 
"uri": "{{ uri }}", 
"ets": "{{ ets }}", 
"rawJson": "{{ rawJson }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_user_events_purge">

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

```sql
EXEC google.retail.user_events.projects_locations_catalogs_user_events_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_user_events_import">

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

```sql
EXEC google.retail.user_events.projects_locations_catalogs_user_events_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"inputConfig": "{{ inputConfig }}", 
"errorsConfig": "{{ errorsConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_user_events_rejoin">

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

```sql
EXEC google.retail.user_events.projects_locations_catalogs_user_events_rejoin 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"userEventRejoinScope": "{{ userEventRejoinScope }}"
}';
```
</TabItem>
</Tabs>
