--- 
title: interconnects
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnects
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

Creates, updates, deletes, gets or lists an <code>interconnects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>interconnects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnects" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="aaiEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable the application awareness feature on this Cloud Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="adminEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Administrative status of the interconnect. When this is set to true, the Interconnect is functional and can carry traffic. When set to false, no packets can be carried over the interconnect and no BGP routes are exchanged over it. By default, the status is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationAwareInterconnect" /></td>
    <td><code>object</code></td>
    <td>Configuration information for application awareness on this Cloud Interconnect. (id: InterconnectApplicationAwareInterconnect)</td>
</tr>
<tr>
    <td><CopyableCode code="availableFeatures" /></td>
    <td><code>array</code></td>
    <td>[Output only] List of features available for this Interconnect connection, which can take one of the following values: - IF_MACSEC If present then the Interconnect connection is provisioned on MACsec capable hardware ports. If not present then the Interconnect connection is provisioned on non-MACsec capable ports and MACsec isn't supported and enabling MACsec fails.</td>
</tr>
<tr>
    <td><CopyableCode code="circuitInfos" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of CircuitInfo objects, that describe the individual circuits in this LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customerName" /></td>
    <td><code>string</code></td>
    <td>Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="expectedOutages" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of outages expected for this Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="googleIpAddress" /></td>
    <td><code>string</code></td>
    <td>[Output Only] IP address configured on the Google side of the Interconnect link. This can be used only for ping tests.</td>
</tr>
<tr>
    <td><CopyableCode code="googleReferenceId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Google reference ID to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectAttachments" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of the URLs of all InterconnectAttachments configured to use this Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectGroups" /></td>
    <td><code>array</code></td>
    <td>[Output Only] URLs of InterconnectGroups that include this Interconnect. Order is arbitrary and items are unique.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectType" /></td>
    <td><code>string</code></td>
    <td>Type of interconnect, which can take one of the following values: - PARTNER: A partner-managed interconnection shared between customers though a partner. - DEDICATED: A dedicated physical interconnection with the customer. Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#interconnect for interconnects. (default: compute#interconnect)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this Interconnect, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="linkType" /></td>
    <td><code>string</code></td>
    <td>Type of link requested, which can take one of the following values: - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. - LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics. Note that this field indicates the speed of each of the links in the bundle, not the speed of the entire bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>URL of the InterconnectLocation object that represents where this connection is to be provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="macsec" /></td>
    <td><code>object</code></td>
    <td>Configuration that enables Media Access Control security (MACsec) on the Cloud Interconnect connection between Google and your on-premises router. (id: InterconnectMacsec)</td>
</tr>
<tr>
    <td><CopyableCode code="macsecEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="nocContactEmail" /></td>
    <td><code>string</code></td>
    <td>Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. If specified, this will be used for notifications in addition to all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications. This field is required for users who sign up for Cloud Interconnect using workforce identity federation.</td>
</tr>
<tr>
    <td><CopyableCode code="operationalStatus" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The current status of this Interconnect's functionality, which can take one of the following values: - OS_ACTIVE: A valid Interconnect, which is turned up and is ready to use. Attachments may be provisioned on this Interconnect. - OS_UNPROVISIONED: An Interconnect that has not completed turnup. No attachments may be provisioned on this Interconnect. - OS_UNDER_MAINTENANCE: An Interconnect that is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect. </td>
</tr>
<tr>
    <td><CopyableCode code="peerIpAddress" /></td>
    <td><code>string</code></td>
    <td>[Output Only] IP address configured on the customer side of the Interconnect link. The customer should configure this IP address during turnup when prompted by Google NOC. This can be used only for ping tests.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] Number of links actually provisioned in this interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteLocation" /></td>
    <td><code>string</code></td>
    <td>Indicates that this is a Cross-Cloud Interconnect. This field specifies the location outside of Google's network that the interconnect is connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedFeatures" /></td>
    <td><code>array</code></td>
    <td>Optional. List of features requested for this Interconnect connection, which can take one of the following values: - IF_MACSEC If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available. This parameter can be provided only with Interconnect INSERT. It isn't valid for Interconnect PATCH.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Target number of physical links in the link bundle, as requested by the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The current state of Interconnect functionality, which can take one of the following values: - ACTIVE: The Interconnect is valid, turned up and ready to use. Attachments may be provisioned on this Interconnect. - UNPROVISIONED: The Interconnect has not completed turnup. No attachments may be provisioned on this Interconnect. - UNDER_MAINTENANCE: The Interconnect is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Interconnect resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#interconnectList for lists of interconnects. (default: compute#interconnectList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td></td>
    <td>Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of Interconnects available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an Interconnect in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified Interconnect.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.</td>
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
<tr id="parameter-interconnect">
    <td><CopyableCode code="interconnect" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.

```sql
SELECT
id,
name,
aaiEnabled,
adminEnabled,
applicationAwareInterconnect,
availableFeatures,
circuitInfos,
creationTimestamp,
customerName,
description,
expectedOutages,
googleIpAddress,
googleReferenceId,
interconnectAttachments,
interconnectGroups,
interconnectType,
kind,
labelFingerprint,
labels,
linkType,
location,
macsec,
macsecEnabled,
nocContactEmail,
operationalStatus,
peerIpAddress,
provisionedLinkCount,
remoteLocation,
requestedFeatures,
requestedLinkCount,
satisfiesPzs,
selfLink,
state
FROM google.compute.interconnects
WHERE project = '{{ project }}' -- required
AND interconnect = '{{ interconnect }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of Interconnects available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.interconnects
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates an Interconnect in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.interconnects (
data__kind,
data__description,
data__selfLink,
data__id,
data__creationTimestamp,
data__name,
data__location,
data__linkType,
data__requestedLinkCount,
data__interconnectType,
data__adminEnabled,
data__nocContactEmail,
data__customerName,
data__operationalStatus,
data__provisionedLinkCount,
data__interconnectAttachments,
data__peerIpAddress,
data__googleIpAddress,
data__googleReferenceId,
data__expectedOutages,
data__circuitInfos,
data__labels,
data__labelFingerprint,
data__state,
data__satisfiesPzs,
data__macsec,
data__macsecEnabled,
data__remoteLocation,
data__requestedFeatures,
data__availableFeatures,
data__applicationAwareInterconnect,
data__aaiEnabled,
data__interconnectGroups,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ description }}',
'{{ selfLink }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ location }}',
'{{ linkType }}',
{{ requestedLinkCount }},
'{{ interconnectType }}',
{{ adminEnabled }},
'{{ nocContactEmail }}',
'{{ customerName }}',
'{{ operationalStatus }}',
{{ provisionedLinkCount }},
'{{ interconnectAttachments }}',
'{{ peerIpAddress }}',
'{{ googleIpAddress }}',
'{{ googleReferenceId }}',
'{{ expectedOutages }}',
'{{ circuitInfos }}',
'{{ labels }}',
'{{ labelFingerprint }}',
'{{ state }}',
{{ satisfiesPzs }},
'{{ macsec }}',
{{ macsecEnabled }},
'{{ remoteLocation }}',
'{{ requestedFeatures }}',
'{{ availableFeatures }}',
'{{ applicationAwareInterconnect }}',
{{ aaiEnabled }},
'{{ interconnectGroups }}',
'{{ project }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: interconnects
  props:
    - name: project
      value: string
      description: Required parameter for the interconnects resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#interconnect for interconnects.
        
      default: compute#interconnect
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: location
      value: string
      description: >
        URL of the InterconnectLocation object that represents where this connection is to be provisioned.
        
    - name: linkType
      value: string
      description: >
        Type of link requested, which can take one of the following values: - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. - LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics. Note that this field indicates the speed of each of the links in the bundle, not the speed of the entire bundle.
        
      valid_values: ['LINK_TYPE_ETHERNET_100G_LR', 'LINK_TYPE_ETHERNET_10G_LR', 'LINK_TYPE_ETHERNET_400G_LR4']
    - name: requestedLinkCount
      value: integer
      description: >
        Target number of physical links in the link bundle, as requested by the customer.
        
    - name: interconnectType
      value: string
      description: >
        Type of interconnect, which can take one of the following values: - PARTNER: A partner-managed interconnection shared between customers though a partner. - DEDICATED: A dedicated physical interconnection with the customer. Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
        
      valid_values: ['DEDICATED', 'IT_PRIVATE', 'PARTNER']
    - name: adminEnabled
      value: boolean
      description: >
        Administrative status of the interconnect. When this is set to true, the Interconnect is functional and can carry traffic. When set to false, no packets can be carried over the interconnect and no BGP routes are exchanged over it. By default, the status is set to true.
        
    - name: nocContactEmail
      value: string
      description: >
        Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. If specified, this will be used for notifications in addition to all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications. This field is required for users who sign up for Cloud Interconnect using workforce identity federation.
        
    - name: customerName
      value: string
      description: >
        Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.
        
    - name: operationalStatus
      value: string
      description: >
        [Output Only] The current status of this Interconnect's functionality, which can take one of the following values: - OS_ACTIVE: A valid Interconnect, which is turned up and is ready to use. Attachments may be provisioned on this Interconnect. - OS_UNPROVISIONED: An Interconnect that has not completed turnup. No attachments may be provisioned on this Interconnect. - OS_UNDER_MAINTENANCE: An Interconnect that is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect. 
        
      valid_values: ['OS_ACTIVE', 'OS_UNPROVISIONED']
    - name: provisionedLinkCount
      value: integer
      description: >
        [Output Only] Number of links actually provisioned in this interconnect.
        
    - name: interconnectAttachments
      value: array
      description: >
        [Output Only] A list of the URLs of all InterconnectAttachments configured to use this Interconnect.
        
    - name: peerIpAddress
      value: string
      description: >
        [Output Only] IP address configured on the customer side of the Interconnect link. The customer should configure this IP address during turnup when prompted by Google NOC. This can be used only for ping tests.
        
    - name: googleIpAddress
      value: string
      description: >
        [Output Only] IP address configured on the Google side of the Interconnect link. This can be used only for ping tests.
        
    - name: googleReferenceId
      value: string
      description: >
        [Output Only] Google reference ID to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.
        
    - name: expectedOutages
      value: array
      description: >
        [Output Only] A list of outages expected for this Interconnect.
        
    - name: circuitInfos
      value: array
      description: >
        [Output Only] A list of CircuitInfo objects, that describe the individual circuits in this LAG.
        
    - name: labels
      value: object
      description: >
        Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.
        
    - name: labelFingerprint
      value: string
      description: >
        A fingerprint for the labels being applied to this Interconnect, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an Interconnect.
        
    - name: state
      value: string
      description: >
        [Output Only] The current state of Interconnect functionality, which can take one of the following values: - ACTIVE: The Interconnect is valid, turned up and ready to use. Attachments may be provisioned on this Interconnect. - UNPROVISIONED: The Interconnect has not completed turnup. No attachments may be provisioned on this Interconnect. - UNDER_MAINTENANCE: The Interconnect is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect. 
        
      valid_values: ['ACTIVE', 'UNPROVISIONED']
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: macsec
      value: object
      description: >
        Configuration that enables Media Access Control security (MACsec) on the Cloud Interconnect connection between Google and your on-premises router.
        
    - name: macsecEnabled
      value: boolean
      description: >
        Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.
        
    - name: remoteLocation
      value: string
      description: >
        Indicates that this is a Cross-Cloud Interconnect. This field specifies the location outside of Google's network that the interconnect is connected to.
        
    - name: requestedFeatures
      value: array
      description: >
        Optional. List of features requested for this Interconnect connection, which can take one of the following values: - IF_MACSEC If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available. This parameter can be provided only with Interconnect INSERT. It isn't valid for Interconnect PATCH.
        
    - name: availableFeatures
      value: array
      description: >
        [Output only] List of features available for this Interconnect connection, which can take one of the following values: - IF_MACSEC If present then the Interconnect connection is provisioned on MACsec capable hardware ports. If not present then the Interconnect connection is provisioned on non-MACsec capable ports and MACsec isn't supported and enabling MACsec fails.
        
    - name: applicationAwareInterconnect
      value: object
      description: >
        Configuration information for application awareness on this Cloud Interconnect.
        
    - name: aaiEnabled
      value: boolean
      description: >
        Enable or disable the application awareness feature on this Cloud Interconnect.
        
    - name: interconnectGroups
      value: array
      description: >
        [Output Only] URLs of InterconnectGroups that include this Interconnect. Order is arbitrary and items are unique.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

```sql
UPDATE google.compute.interconnects
SET 
data__kind = '{{ kind }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__location = '{{ location }}',
data__linkType = '{{ linkType }}',
data__requestedLinkCount = {{ requestedLinkCount }},
data__interconnectType = '{{ interconnectType }}',
data__adminEnabled = {{ adminEnabled }},
data__nocContactEmail = '{{ nocContactEmail }}',
data__customerName = '{{ customerName }}',
data__operationalStatus = '{{ operationalStatus }}',
data__provisionedLinkCount = {{ provisionedLinkCount }},
data__interconnectAttachments = '{{ interconnectAttachments }}',
data__peerIpAddress = '{{ peerIpAddress }}',
data__googleIpAddress = '{{ googleIpAddress }}',
data__googleReferenceId = '{{ googleReferenceId }}',
data__expectedOutages = '{{ expectedOutages }}',
data__circuitInfos = '{{ circuitInfos }}',
data__labels = '{{ labels }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__state = '{{ state }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__macsec = '{{ macsec }}',
data__macsecEnabled = {{ macsecEnabled }},
data__remoteLocation = '{{ remoteLocation }}',
data__requestedFeatures = '{{ requestedFeatures }}',
data__availableFeatures = '{{ availableFeatures }}',
data__applicationAwareInterconnect = '{{ applicationAwareInterconnect }}',
data__aaiEnabled = {{ aaiEnabled }},
data__interconnectGroups = '{{ interconnectGroups }}'
WHERE 
project = '{{ project }}' --required
AND interconnect = '{{ interconnect }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified Interconnect.

```sql
DELETE FROM google.compute.interconnects
WHERE project = '{{ project }}' --required
AND interconnect = '{{ interconnect }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' }
    ]}
>
<TabItem value="set_labels">

Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.

```sql
EXEC google.compute.interconnects.set_labels 
@project='{{ project }}' --required, 
@resource='{{ resource }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}';
```
</TabItem>
</Tabs>
