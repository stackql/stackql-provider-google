--- 
title: interconnect_remote_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnect_remote_locations
  - compute
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

Creates, updates, deletes, gets or lists an <code>interconnect_remote_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>interconnect_remote_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnect_remote_locations" /></td></tr>
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

Represents a Cross-Cloud Interconnect Remote Location resource. You can use this resource to find remote location details about an Interconnect attachment (VLAN).

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The postal address of the Point of Presence, each line in the address is separated by a newline character.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentConfigurationConstraints" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Subset of fields from InterconnectAttachment's |configurationConstraints| field that apply to all attachments for this remote location. (id: InterconnectAttachmentConfigurationConstraints)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Metropolitan area designator that indicates which city an interconnect is located. For example: "Chicago, IL", "Amsterdam, Netherlands".</td>
</tr>
<tr>
    <td><CopyableCode code="constraints" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Constraints on the parameters for creating Cross-Cloud Interconnect and associated InterconnectAttachments. (id: InterconnectRemoteLocationConstraints)</td>
</tr>
<tr>
    <td><CopyableCode code="continent" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Continent for this location, which can take one of the following values: - AFRICA - ASIA_PAC - EUROPE - NORTH_AMERICA - SOUTH_AMERICA </td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="facilityProvider" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The name of the provider for this facility (e.g., EQUINIX).</td>
</tr>
<tr>
    <td><CopyableCode code="facilityProviderFacilityId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] A provider-assigned Identifier for this facility (e.g., Ashburn-DC1).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#interconnectRemoteLocation for interconnect remote locations. (default: compute#interconnectRemoteLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="lacp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Link Aggregation Control Protocol (LACP) constraints, which can take one of the following values: LACP_SUPPORTED, LACP_UNSUPPORTED</td>
</tr>
<tr>
    <td><CopyableCode code="maxLagSize100Gbps" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] The maximum number of 100 Gbps ports supported in a link aggregation group (LAG). When linkType is 100 Gbps, requestedLinkCount cannot exceed max_lag_size_100_gbps.</td>
</tr>
<tr>
    <td><CopyableCode code="maxLagSize10Gbps" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] The maximum number of 10 Gbps ports supported in a link aggregation group (LAG). When linkType is 10 Gbps, requestedLinkCount cannot exceed max_lag_size_10_gbps.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringdbFacilityId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The peeringdb identifier for this facility (corresponding with a netfac type in peeringdb).</td>
</tr>
<tr>
    <td><CopyableCode code="permittedConnections" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Permitted connections.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteService" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Indicates the service provider present at the remote location. Example values: "Amazon Web Services", "Microsoft Azure".</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of this InterconnectRemoteLocation, which can take one of the following values: - CLOSED: The InterconnectRemoteLocation is closed and is unavailable for provisioning new Cross-Cloud Interconnects. - AVAILABLE: The InterconnectRemoteLocation is available for provisioning new Cross-Cloud Interconnects. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response to the list request, and contains a list of interconnect remote locations.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of InterconnectRemoteLocation resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#interconnectRemoteLocationList for lists of interconnect remote locations. (default: compute#interconnectRemoteLocationList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token lets you get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnectRemoteLocation"><code>interconnectRemoteLocation</code></a></td>
    <td></td>
    <td>Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of interconnect remote locations available to the specified project.</td>
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
<tr id="parameter-interconnectRemoteLocation">
    <td><CopyableCode code="interconnectRemoteLocation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.

```sql
SELECT
id,
name,
address,
attachmentConfigurationConstraints,
city,
constraints,
continent,
creationTimestamp,
description,
facilityProvider,
facilityProviderFacilityId,
kind,
lacp,
maxLagSize100Gbps,
maxLagSize10Gbps,
peeringdbFacilityId,
permittedConnections,
remoteService,
selfLink,
status
FROM google.compute.interconnect_remote_locations
WHERE project = '{{ project }}' -- required
AND interconnectRemoteLocation = '{{ interconnectRemoteLocation }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of interconnect remote locations available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.interconnect_remote_locations
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>
