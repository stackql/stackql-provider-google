--- 
title: prediction_api_key_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - prediction_api_key_registrations
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

Creates, updates, deletes, gets or lists a <code>prediction_api_key_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>prediction_api_key_registrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommendationengine.prediction_api_key_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_prediction_api_key_registrations_list"
    values={[
        { label: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_list', value: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_prediction_api_key_registrations_list">

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
    <td><CopyableCode code="apiKey" /></td>
    <td><code>string</code></td>
    <td>The API key.</td>
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
    <td><a href="#projects_locations_catalogs_event_stores_prediction_api_key_registrations_list"><CopyableCode code="projects_locations_catalogs_event_stores_prediction_api_key_registrations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List the registered apiKeys for use with predict method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_prediction_api_key_registrations_create"><CopyableCode code="projects_locations_catalogs_event_stores_prediction_api_key_registrations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a></td>
    <td></td>
    <td>Register an API key for use with predict method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete"><CopyableCode code="projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a>, <a href="#parameter-predictionApiKeyRegistrationsId"><code>predictionApiKeyRegistrationsId</code></a></td>
    <td></td>
    <td>Unregister an apiKey from using for predict method.</td>
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
<tr id="parameter-predictionApiKeyRegistrationsId">
    <td><CopyableCode code="predictionApiKeyRegistrationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_locations_catalogs_event_stores_prediction_api_key_registrations_list"
    values={[
        { label: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_list', value: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_prediction_api_key_registrations_list">

List the registered apiKeys for use with predict method.

```sql
SELECT
apiKey
FROM google.recommendationengine.prediction_api_key_registrations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND eventStoresId = '{{ eventStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_prediction_api_key_registrations_create"
    values={[
        { label: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_create', value: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_prediction_api_key_registrations_create">

Register an API key for use with predict method.

```sql
INSERT INTO google.recommendationengine.prediction_api_key_registrations (
data__predictionApiKeyRegistration,
projectsId,
locationsId,
catalogsId,
eventStoresId
)
SELECT 
'{{ predictionApiKeyRegistration }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ eventStoresId }}'
RETURNING
apiKey
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: prediction_api_key_registrations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the prediction_api_key_registrations resource.
    - name: locationsId
      value: string
      description: Required parameter for the prediction_api_key_registrations resource.
    - name: catalogsId
      value: string
      description: Required parameter for the prediction_api_key_registrations resource.
    - name: eventStoresId
      value: string
      description: Required parameter for the prediction_api_key_registrations resource.
    - name: predictionApiKeyRegistration
      value: object
      description: >
        Required. The prediction API key registration.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete"
    values={[
        { label: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete', value: 'projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete">

Unregister an apiKey from using for predict method.

```sql
DELETE FROM google.recommendationengine.prediction_api_key_registrations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND eventStoresId = '{{ eventStoresId }}' --required
AND predictionApiKeyRegistrationsId = '{{ predictionApiKeyRegistrationsId }}' --required;
```
</TabItem>
</Tabs>
