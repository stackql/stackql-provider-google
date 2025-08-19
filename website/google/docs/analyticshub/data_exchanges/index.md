--- 
title: data_exchanges
hide_title: false
hide_table_of_contents: false
keywords:
  - data_exchanges
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

Creates, updates, deletes, gets or lists a <code>data_exchanges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_exchanges</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.data_exchanges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_exchanges_get"
    values={[
        { label: 'projects_locations_data_exchanges_get', value: 'projects_locations_data_exchanges_get' },
        { label: 'projects_locations_data_exchanges_list', value: 'projects_locations_data_exchanges_list' },
        { label: 'organizations_locations_data_exchanges_list', value: 'organizations_locations_data_exchanges_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_get">

A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.

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
    <td>Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of discovery on the discovery page for all the listings under this exchange. Updating this field also updates (overwrites) the discovery_type field for all the listings under this exchange.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>string</code></td>
    <td>Optional. Documentation describing the data exchange.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string (byte)</code></td>
    <td>Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.</td>
</tr>
<tr>
    <td><CopyableCode code="listingCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of listings contained in the data exchange.</td>
</tr>
<tr>
    <td><CopyableCode code="logLinkedDatasetQueryUserEmail" /></td>
    <td><code>boolean</code></td>
    <td>Optional. By default, false. If true, the DataExchange has an email sharing mandate enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryContact" /></td>
    <td><code>string</code></td>
    <td>Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="sharingEnvironmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurable data sharing environment option for a data exchange. (id: SharingEnvironmentConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_exchanges_list">

Message for response to the list of data exchanges.

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
    <td><CopyableCode code="dataExchanges" /></td>
    <td><code>array</code></td>
    <td>The list of data exchanges.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to request the next page of results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_data_exchanges_list">

Message for response to listing data exchanges in an organization and location.

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
    <td><CopyableCode code="dataExchanges" /></td>
    <td><code>array</code></td>
    <td>The list of data exchanges.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to request the next page of results.</td>
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
    <td><a href="#projects_locations_data_exchanges_get"><CopyableCode code="projects_locations_data_exchanges_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td></td>
    <td>Gets the details of a data exchange.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_list"><CopyableCode code="projects_locations_data_exchanges_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all data exchanges in a given project and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_data_exchanges_list"><CopyableCode code="organizations_locations_data_exchanges_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all data exchanges from projects in a given organization and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_create"><CopyableCode code="projects_locations_data_exchanges_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataExchangeId"><code>dataExchangeId</code></a></td>
    <td>Creates a new data exchange.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_patch"><CopyableCode code="projects_locations_data_exchanges_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing data exchange.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_delete"><CopyableCode code="projects_locations_data_exchanges_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td></td>
    <td>Deletes an existing data exchange.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_subscribe"><CopyableCode code="projects_locations_data_exchanges_subscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td></td>
    <td>Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataExchangeId">
    <td><CopyableCode code="dataExchangeId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_get"
    values={[
        { label: 'projects_locations_data_exchanges_get', value: 'projects_locations_data_exchanges_get' },
        { label: 'projects_locations_data_exchanges_list', value: 'projects_locations_data_exchanges_list' },
        { label: 'organizations_locations_data_exchanges_list', value: 'organizations_locations_data_exchanges_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_get">

Gets the details of a data exchange.

```sql
SELECT
name,
description,
discoveryType,
displayName,
documentation,
icon,
listingCount,
logLinkedDatasetQueryUserEmail,
primaryContact,
sharingEnvironmentConfig
FROM google.analyticshub.data_exchanges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_exchanges_list">

Lists all data exchanges in a given project and location.

```sql
SELECT
dataExchanges,
nextPageToken
FROM google.analyticshub.data_exchanges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_locations_data_exchanges_list">

Lists all data exchanges from projects in a given organization and location.

```sql
SELECT
dataExchanges,
nextPageToken
FROM google.analyticshub.data_exchanges
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_create"
    values={[
        { label: 'projects_locations_data_exchanges_create', value: 'projects_locations_data_exchanges_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_create">

Creates a new data exchange.

```sql
INSERT INTO google.analyticshub.data_exchanges (
data__displayName,
data__description,
data__primaryContact,
data__documentation,
data__icon,
data__sharingEnvironmentConfig,
data__discoveryType,
data__logLinkedDatasetQueryUserEmail,
projectsId,
locationsId,
dataExchangeId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ primaryContact }}',
'{{ documentation }}',
'{{ icon }}',
'{{ sharingEnvironmentConfig }}',
'{{ discoveryType }}',
{{ logLinkedDatasetQueryUserEmail }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataExchangeId }}'
RETURNING
name,
description,
discoveryType,
displayName,
documentation,
icon,
listingCount,
logLinkedDatasetQueryUserEmail,
primaryContact,
sharingEnvironmentConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: data_exchanges
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_exchanges resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_exchanges resource.
    - name: displayName
      value: string
      description: >
        Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.
        
    - name: description
      value: string
      description: >
        Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
        
    - name: primaryContact
      value: string
      description: >
        Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.
        
    - name: documentation
      value: string
      description: >
        Optional. Documentation describing the data exchange.
        
    - name: icon
      value: string
      description: >
        Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
        
    - name: sharingEnvironmentConfig
      value: object
      description: >
        Optional. Configurable data sharing environment option for a data exchange.
        
    - name: discoveryType
      value: string
      description: >
        Optional. Type of discovery on the discovery page for all the listings under this exchange. Updating this field also updates (overwrites) the discovery_type field for all the listings under this exchange.
        
      valid_values: ['DISCOVERY_TYPE_UNSPECIFIED', 'DISCOVERY_TYPE_PRIVATE', 'DISCOVERY_TYPE_PUBLIC']
    - name: logLinkedDatasetQueryUserEmail
      value: boolean
      description: >
        Optional. By default, false. If true, the DataExchange has an email sharing mandate enabled.
        
    - name: dataExchangeId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_patch"
    values={[
        { label: 'projects_locations_data_exchanges_patch', value: 'projects_locations_data_exchanges_patch' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_patch">

Updates an existing data exchange.

```sql
UPDATE google.analyticshub.data_exchanges
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__primaryContact = '{{ primaryContact }}',
data__documentation = '{{ documentation }}',
data__icon = '{{ icon }}',
data__sharingEnvironmentConfig = '{{ sharingEnvironmentConfig }}',
data__discoveryType = '{{ discoveryType }}',
data__logLinkedDatasetQueryUserEmail = {{ logLinkedDatasetQueryUserEmail }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
discoveryType,
displayName,
documentation,
icon,
listingCount,
logLinkedDatasetQueryUserEmail,
primaryContact,
sharingEnvironmentConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_delete"
    values={[
        { label: 'projects_locations_data_exchanges_delete', value: 'projects_locations_data_exchanges_delete' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_delete">

Deletes an existing data exchange.

```sql
DELETE FROM google.analyticshub.data_exchanges
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_data_exchanges_subscribe"
    values={[
        { label: 'projects_locations_data_exchanges_subscribe', value: 'projects_locations_data_exchanges_subscribe' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_subscribe">

Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.

```sql
EXEC google.analyticshub.data_exchanges.projects_locations_data_exchanges_subscribe 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataExchangesId='{{ dataExchangesId }}' --required 
@@json=
'{
"destination": "{{ destination }}", 
"destinationDataset": "{{ destinationDataset }}", 
"subscription": "{{ subscription }}", 
"subscriberContact": "{{ subscriberContact }}"
}';
```
</TabItem>
</Tabs>
