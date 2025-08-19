--- 
title: listings
hide_title: false
hide_table_of_contents: false
keywords:
  - listings
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

Creates, updates, deletes, gets or lists a <code>listings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>listings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.listings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_get"
    values={[
        { label: 'projects_locations_data_exchanges_listings_get', value: 'projects_locations_data_exchanges_listings_get' },
        { label: 'projects_locations_data_exchanges_listings_list', value: 'projects_locations_data_exchanges_listings_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_get">

A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.

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
    <td>Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`</td>
</tr>
<tr>
    <td><CopyableCode code="allowOnlyMetadataSharing" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the listing is only available to get the resource metadata. Listing is non subscribable.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDataset" /></td>
    <td><code>object</code></td>
    <td>Shared dataset i.e. BigQuery dataset source. (id: BigQueryDatasetSource)</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Optional. Categories of the listing. Up to five categories are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="commercialInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Commercial info contains the information about the commercial data products associated with the listing. (id: GoogleCloudBigqueryAnalyticshubV1ListingCommercialInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProvider" /></td>
    <td><code>object</code></td>
    <td>Optional. Details of the data provider who owns the source data. (id: DataProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of discovery of the listing on the discovery page.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>string</code></td>
    <td>Optional. Documentation describing the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string (byte)</code></td>
    <td>Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.</td>
</tr>
<tr>
    <td><CopyableCode code="logLinkedDatasetQueryUserEmail" /></td>
    <td><code>boolean</code></td>
    <td>Optional. By default, false. If true, the Listing has an email sharing mandate enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryContact" /></td>
    <td><code>string</code></td>
    <td>Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>Optional. Details of the publisher who owns the listing and who can share the source data. (id: Publisher)</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>object</code></td>
    <td>Pub/Sub topic source. (id: PubSubTopicSource)</td>
</tr>
<tr>
    <td><CopyableCode code="requestAccess" /></td>
    <td><code>string</code></td>
    <td>Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Output only. Listing shared asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedExportConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, restricted export configuration will be propagated and enforced on the linked dataset. (id: RestrictedExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the listing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_exchanges_listings_list">

Message for response to the list of Listings.

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
    <td><CopyableCode code="listings" /></td>
    <td><code>array</code></td>
    <td>The list of Listing.</td>
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
    <td><a href="#projects_locations_data_exchanges_listings_get"><CopyableCode code="projects_locations_data_exchanges_listings_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-listingsId"><code>listingsId</code></a></td>
    <td></td>
    <td>Gets the details of a listing.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_listings_list"><CopyableCode code="projects_locations_data_exchanges_listings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all listings in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_listings_create"><CopyableCode code="projects_locations_data_exchanges_listings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-listingId"><code>listingId</code></a></td>
    <td>Creates a new listing.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_listings_patch"><CopyableCode code="projects_locations_data_exchanges_listings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-listingsId"><code>listingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing listing.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_listings_delete"><CopyableCode code="projects_locations_data_exchanges_listings_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-listingsId"><code>listingsId</code></a></td>
    <td><a href="#parameter-deleteCommercial"><code>deleteCommercial</code></a></td>
    <td>Deletes a listing.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_listings_subscribe"><CopyableCode code="projects_locations_data_exchanges_listings_subscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-listingsId"><code>listingsId</code></a></td>
    <td></td>
    <td>Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.</td>
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
<tr id="parameter-deleteCommercial">
    <td><CopyableCode code="deleteCommercial" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-listingId">
    <td><CopyableCode code="listingId" /></td>
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
    defaultValue="projects_locations_data_exchanges_listings_get"
    values={[
        { label: 'projects_locations_data_exchanges_listings_get', value: 'projects_locations_data_exchanges_listings_get' },
        { label: 'projects_locations_data_exchanges_listings_list', value: 'projects_locations_data_exchanges_listings_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_get">

Gets the details of a listing.

```sql
SELECT
name,
allowOnlyMetadataSharing,
bigqueryDataset,
categories,
commercialInfo,
dataProvider,
description,
discoveryType,
displayName,
documentation,
icon,
logLinkedDatasetQueryUserEmail,
primaryContact,
publisher,
pubsubTopic,
requestAccess,
resourceType,
restrictedExportConfig,
state
FROM google.analyticshub.listings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND listingsId = '{{ listingsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_exchanges_listings_list">

Lists all listings in a given project and location.

```sql
SELECT
listings,
nextPageToken
FROM google.analyticshub.listings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_create"
    values={[
        { label: 'projects_locations_data_exchanges_listings_create', value: 'projects_locations_data_exchanges_listings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_create">

Creates a new listing.

```sql
INSERT INTO google.analyticshub.listings (
data__bigqueryDataset,
data__pubsubTopic,
data__displayName,
data__description,
data__primaryContact,
data__documentation,
data__icon,
data__dataProvider,
data__categories,
data__publisher,
data__requestAccess,
data__restrictedExportConfig,
data__discoveryType,
data__logLinkedDatasetQueryUserEmail,
data__allowOnlyMetadataSharing,
projectsId,
locationsId,
dataExchangesId,
listingId
)
SELECT 
'{{ bigqueryDataset }}',
'{{ pubsubTopic }}',
'{{ displayName }}',
'{{ description }}',
'{{ primaryContact }}',
'{{ documentation }}',
'{{ icon }}',
'{{ dataProvider }}',
'{{ categories }}',
'{{ publisher }}',
'{{ requestAccess }}',
'{{ restrictedExportConfig }}',
'{{ discoveryType }}',
{{ logLinkedDatasetQueryUserEmail }},
{{ allowOnlyMetadataSharing }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataExchangesId }}',
'{{ listingId }}'
RETURNING
name,
allowOnlyMetadataSharing,
bigqueryDataset,
categories,
commercialInfo,
dataProvider,
description,
discoveryType,
displayName,
documentation,
icon,
logLinkedDatasetQueryUserEmail,
primaryContact,
publisher,
pubsubTopic,
requestAccess,
resourceType,
restrictedExportConfig,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: listings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the listings resource.
    - name: locationsId
      value: string
      description: Required parameter for the listings resource.
    - name: dataExchangesId
      value: string
      description: Required parameter for the listings resource.
    - name: bigqueryDataset
      value: object
      description: >
        Shared dataset i.e. BigQuery dataset source.
        
    - name: pubsubTopic
      value: object
      description: >
        Pub/Sub topic source.
        
    - name: displayName
      value: string
      description: >
        Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.
        
    - name: description
      value: string
      description: >
        Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
        
    - name: primaryContact
      value: string
      description: >
        Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.
        
    - name: documentation
      value: string
      description: >
        Optional. Documentation describing the listing.
        
    - name: icon
      value: string
      description: >
        Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
        
    - name: dataProvider
      value: object
      description: >
        Optional. Details of the data provider who owns the source data.
        
    - name: categories
      value: array
      description: >
        Optional. Categories of the listing. Up to five categories are allowed.
        
    - name: publisher
      value: object
      description: >
        Optional. Details of the publisher who owns the listing and who can share the source data.
        
    - name: requestAccess
      value: string
      description: >
        Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.
        
    - name: restrictedExportConfig
      value: object
      description: >
        Optional. If set, restricted export configuration will be propagated and enforced on the linked dataset.
        
    - name: discoveryType
      value: string
      description: >
        Optional. Type of discovery of the listing on the discovery page.
        
      valid_values: ['DISCOVERY_TYPE_UNSPECIFIED', 'DISCOVERY_TYPE_PRIVATE', 'DISCOVERY_TYPE_PUBLIC']
    - name: logLinkedDatasetQueryUserEmail
      value: boolean
      description: >
        Optional. By default, false. If true, the Listing has an email sharing mandate enabled.
        
    - name: allowOnlyMetadataSharing
      value: boolean
      description: >
        Optional. If true, the listing is only available to get the resource metadata. Listing is non subscribable.
        
    - name: listingId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_patch"
    values={[
        { label: 'projects_locations_data_exchanges_listings_patch', value: 'projects_locations_data_exchanges_listings_patch' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_patch">

Updates an existing listing.

```sql
UPDATE google.analyticshub.listings
SET 
data__bigqueryDataset = '{{ bigqueryDataset }}',
data__pubsubTopic = '{{ pubsubTopic }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__primaryContact = '{{ primaryContact }}',
data__documentation = '{{ documentation }}',
data__icon = '{{ icon }}',
data__dataProvider = '{{ dataProvider }}',
data__categories = '{{ categories }}',
data__publisher = '{{ publisher }}',
data__requestAccess = '{{ requestAccess }}',
data__restrictedExportConfig = '{{ restrictedExportConfig }}',
data__discoveryType = '{{ discoveryType }}',
data__logLinkedDatasetQueryUserEmail = {{ logLinkedDatasetQueryUserEmail }},
data__allowOnlyMetadataSharing = {{ allowOnlyMetadataSharing }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required
AND listingsId = '{{ listingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowOnlyMetadataSharing,
bigqueryDataset,
categories,
commercialInfo,
dataProvider,
description,
discoveryType,
displayName,
documentation,
icon,
logLinkedDatasetQueryUserEmail,
primaryContact,
publisher,
pubsubTopic,
requestAccess,
resourceType,
restrictedExportConfig,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_delete"
    values={[
        { label: 'projects_locations_data_exchanges_listings_delete', value: 'projects_locations_data_exchanges_listings_delete' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_delete">

Deletes a listing.

```sql
DELETE FROM google.analyticshub.listings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required
AND listingsId = '{{ listingsId }}' --required
AND deleteCommercial = '{{ deleteCommercial }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_data_exchanges_listings_subscribe"
    values={[
        { label: 'projects_locations_data_exchanges_listings_subscribe', value: 'projects_locations_data_exchanges_listings_subscribe' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_listings_subscribe">

Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.

```sql
EXEC google.analyticshub.listings.projects_locations_data_exchanges_listings_subscribe 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataExchangesId='{{ dataExchangesId }}' --required, 
@listingsId='{{ listingsId }}' --required 
@@json=
'{
"destinationDataset": "{{ destinationDataset }}", 
"destinationPubsubSubscription": "{{ destinationPubsubSubscription }}"
}';
```
</TabItem>
</Tabs>
