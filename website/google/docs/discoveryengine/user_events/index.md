--- 
title: user_events
hide_title: false
hide_table_of_contents: false
keywords:
  - user_events
  - discoveryengine
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.user_events" /></td></tr>
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
    <td><a href="#projects_locations_collections_data_stores_user_events_write"><CopyableCode code="projects_locations_collections_data_stores_user_events_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-writeAsync"><code>writeAsync</code></a></td>
    <td>Writes a single user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_user_events_collect"><CopyableCode code="projects_locations_collections_data_stores_user_events_collect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-userEvent"><code>userEvent</code></a>, <a href="#parameter-uri"><code>uri</code></a>, <a href="#parameter-ets"><code>ets</code></a></td>
    <td>Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_user_events_purge"><CopyableCode code="projects_locations_collections_data_stores_user_events_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_user_events_import"><CopyableCode code="projects_locations_collections_data_stores_user_events_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_user_events_write"><CopyableCode code="projects_locations_data_stores_user_events_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-writeAsync"><code>writeAsync</code></a></td>
    <td>Writes a single user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_user_events_collect"><CopyableCode code="projects_locations_data_stores_user_events_collect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-userEvent"><code>userEvent</code></a>, <a href="#parameter-uri"><code>uri</code></a>, <a href="#parameter-ets"><code>ets</code></a></td>
    <td>Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_user_events_purge"><CopyableCode code="projects_locations_data_stores_user_events_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_user_events_import"><CopyableCode code="projects_locations_data_stores_user_events_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_events_write"><CopyableCode code="projects_locations_user_events_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-writeAsync"><code>writeAsync</code></a></td>
    <td>Writes a single user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_events_collect"><CopyableCode code="projects_locations_user_events_collect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-userEvent"><code>userEvent</code></a>, <a href="#parameter-uri"><code>uri</code></a>, <a href="#parameter-ets"><code>ets</code></a></td>
    <td>Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_events_import"><CopyableCode code="projects_locations_user_events_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
<tr id="parameter-writeAsync">
    <td><CopyableCode code="writeAsync" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_user_events_write"
    values={[
        { label: 'projects_locations_collections_data_stores_user_events_write', value: 'projects_locations_collections_data_stores_user_events_write' },
        { label: 'projects_locations_collections_data_stores_user_events_collect', value: 'projects_locations_collections_data_stores_user_events_collect' },
        { label: 'projects_locations_collections_data_stores_user_events_purge', value: 'projects_locations_collections_data_stores_user_events_purge' },
        { label: 'projects_locations_collections_data_stores_user_events_import', value: 'projects_locations_collections_data_stores_user_events_import' },
        { label: 'projects_locations_data_stores_user_events_write', value: 'projects_locations_data_stores_user_events_write' },
        { label: 'projects_locations_data_stores_user_events_collect', value: 'projects_locations_data_stores_user_events_collect' },
        { label: 'projects_locations_data_stores_user_events_purge', value: 'projects_locations_data_stores_user_events_purge' },
        { label: 'projects_locations_data_stores_user_events_import', value: 'projects_locations_data_stores_user_events_import' },
        { label: 'projects_locations_user_events_write', value: 'projects_locations_user_events_write' },
        { label: 'projects_locations_user_events_collect', value: 'projects_locations_user_events_collect' },
        { label: 'projects_locations_user_events_import', value: 'projects_locations_user_events_import' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_user_events_write">

Writes a single user event.

```sql
EXEC google.discoveryengine.user_events.projects_locations_collections_data_stores_user_events_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@writeAsync={{ writeAsync }} 
@@json=
'{
"eventType": "{{ eventType }}", 
"conversionType": "{{ conversionType }}", 
"userPseudoId": "{{ userPseudoId }}", 
"engine": "{{ engine }}", 
"dataStore": "{{ dataStore }}", 
"eventTime": "{{ eventTime }}", 
"userInfo": "{{ userInfo }}", 
"directUserRequest": {{ directUserRequest }}, 
"sessionId": "{{ sessionId }}", 
"pageInfo": "{{ pageInfo }}", 
"attributionToken": "{{ attributionToken }}", 
"filter": "{{ filter }}", 
"documents": "{{ documents }}", 
"panel": "{{ panel }}", 
"searchInfo": "{{ searchInfo }}", 
"completionInfo": "{{ completionInfo }}", 
"transactionInfo": "{{ transactionInfo }}", 
"tagIds": "{{ tagIds }}", 
"promotionIds": "{{ promotionIds }}", 
"attributes": "{{ attributes }}", 
"mediaInfo": "{{ mediaInfo }}", 
"panels": "{{ panels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_user_events_collect">

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

```sql
EXEC google.discoveryengine.user_events.projects_locations_collections_data_stores_user_events_collect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@userEvent='{{ userEvent }}', 
@uri='{{ uri }}', 
@ets='{{ ets }}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_user_events_purge">

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

```sql
EXEC google.discoveryengine.user_events.projects_locations_collections_data_stores_user_events_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_user_events_import">

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

```sql
EXEC google.discoveryengine.user_events.projects_locations_collections_data_stores_user_events_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"gcsSource": "{{ gcsSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"errorConfig": "{{ errorConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_user_events_write">

Writes a single user event.

```sql
EXEC google.discoveryengine.user_events.projects_locations_data_stores_user_events_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@writeAsync={{ writeAsync }} 
@@json=
'{
"eventType": "{{ eventType }}", 
"conversionType": "{{ conversionType }}", 
"userPseudoId": "{{ userPseudoId }}", 
"engine": "{{ engine }}", 
"dataStore": "{{ dataStore }}", 
"eventTime": "{{ eventTime }}", 
"userInfo": "{{ userInfo }}", 
"directUserRequest": {{ directUserRequest }}, 
"sessionId": "{{ sessionId }}", 
"pageInfo": "{{ pageInfo }}", 
"attributionToken": "{{ attributionToken }}", 
"filter": "{{ filter }}", 
"documents": "{{ documents }}", 
"panel": "{{ panel }}", 
"searchInfo": "{{ searchInfo }}", 
"completionInfo": "{{ completionInfo }}", 
"transactionInfo": "{{ transactionInfo }}", 
"tagIds": "{{ tagIds }}", 
"promotionIds": "{{ promotionIds }}", 
"attributes": "{{ attributes }}", 
"mediaInfo": "{{ mediaInfo }}", 
"panels": "{{ panels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_user_events_collect">

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

```sql
EXEC google.discoveryengine.user_events.projects_locations_data_stores_user_events_collect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@userEvent='{{ userEvent }}', 
@uri='{{ uri }}', 
@ets='{{ ets }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_user_events_purge">

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

```sql
EXEC google.discoveryengine.user_events.projects_locations_data_stores_user_events_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_user_events_import">

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

```sql
EXEC google.discoveryengine.user_events.projects_locations_data_stores_user_events_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"gcsSource": "{{ gcsSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"errorConfig": "{{ errorConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_user_events_write">

Writes a single user event.

```sql
EXEC google.discoveryengine.user_events.projects_locations_user_events_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@writeAsync={{ writeAsync }} 
@@json=
'{
"eventType": "{{ eventType }}", 
"conversionType": "{{ conversionType }}", 
"userPseudoId": "{{ userPseudoId }}", 
"engine": "{{ engine }}", 
"dataStore": "{{ dataStore }}", 
"eventTime": "{{ eventTime }}", 
"userInfo": "{{ userInfo }}", 
"directUserRequest": {{ directUserRequest }}, 
"sessionId": "{{ sessionId }}", 
"pageInfo": "{{ pageInfo }}", 
"attributionToken": "{{ attributionToken }}", 
"filter": "{{ filter }}", 
"documents": "{{ documents }}", 
"panel": "{{ panel }}", 
"searchInfo": "{{ searchInfo }}", 
"completionInfo": "{{ completionInfo }}", 
"transactionInfo": "{{ transactionInfo }}", 
"tagIds": "{{ tagIds }}", 
"promotionIds": "{{ promotionIds }}", 
"attributes": "{{ attributes }}", 
"mediaInfo": "{{ mediaInfo }}", 
"panels": "{{ panels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_user_events_collect">

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

```sql
EXEC google.discoveryengine.user_events.projects_locations_user_events_collect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@userEvent='{{ userEvent }}', 
@uri='{{ uri }}', 
@ets='{{ ets }}';
```
</TabItem>
<TabItem value="projects_locations_user_events_import">

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

```sql
EXEC google.discoveryengine.user_events.projects_locations_user_events_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"gcsSource": "{{ gcsSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"errorConfig": "{{ errorConfig }}"
}';
```
</TabItem>
</Tabs>
