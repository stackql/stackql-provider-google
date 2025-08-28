--- 
title: services_subnetwork
hide_title: false
hide_table_of_contents: false
keywords:
  - services_subnetwork
  - servicenetworking
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

Creates, updates, deletes, gets or lists a <code>services_subnetwork</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services_subnetwork</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.services_subnetwork" /></td></tr>
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
    <td><a href="#add_subnetwork"><CopyableCode code="add_subnetwork" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a></td>
    <td></td>
    <td>For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId1">
    <td><CopyableCode code="servicesId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId2">
    <td><CopyableCode code="servicesId2" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_subnetwork"
    values={[
        { label: 'add_subnetwork', value: 'add_subnetwork' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_subnetwork">

For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.

```sql
INSERT INTO google.servicenetworking.services_subnetwork (
data__consumerNetwork,
data__subnetwork,
data__region,
data__ipPrefixLength,
data__description,
data__subnetworkUsers,
data__consumer,
data__requestedAddress,
data__secondaryIpRangeSpecs,
data__privateIpv6GoogleAccess,
data__requestedRanges,
data__outsideAllocationPublicIpRange,
data__purpose,
data__checkServiceNetworkingUsePermission,
data__useCustomComputeIdempotencyWindow,
data__computeIdempotencyWindow,
data__allowSubnetCidrRoutesOverlap,
data__role,
data__internalRange,
data__skipRequestedAddressValidation,
servicesId,
servicesId1,
servicesId2
)
SELECT 
'{{ consumerNetwork }}',
'{{ subnetwork }}',
'{{ region }}',
{{ ipPrefixLength }},
'{{ description }}',
'{{ subnetworkUsers }}',
'{{ consumer }}',
'{{ requestedAddress }}',
'{{ secondaryIpRangeSpecs }}',
'{{ privateIpv6GoogleAccess }}',
'{{ requestedRanges }}',
'{{ outsideAllocationPublicIpRange }}',
'{{ purpose }}',
{{ checkServiceNetworkingUsePermission }},
{{ useCustomComputeIdempotencyWindow }},
'{{ computeIdempotencyWindow }}',
{{ allowSubnetCidrRoutesOverlap }},
'{{ role }}',
'{{ internalRange }}',
{{ skipRequestedAddressValidation }},
'{{ servicesId }}',
'{{ servicesId1 }}',
'{{ servicesId2 }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: services_subnetwork
  props:
    - name: servicesId
      value: string
      description: Required parameter for the services_subnetwork resource.
    - name: servicesId1
      value: string
      description: Required parameter for the services_subnetwork resource.
    - name: servicesId2
      value: string
      description: Required parameter for the services_subnetwork resource.
    - name: consumerNetwork
      value: string
      description: >
        Required. The name of the service consumer's VPC network. The network must have an existing private connection that was provisioned through the connections.create method. The name must be in the following format: `projects/{project}/global/networks/{network}`, where {project} is a project number, such as `12345`. {network} is the name of a VPC network in the project.
        
    - name: subnetwork
      value: string
      description: >
        Required. A name for the new subnet. For information about the naming requirements, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation.
        
    - name: region
      value: string
      description: >
        Required. The name of a [region](https://cloud.google.com/compute/docs/regions-zones) for the subnet, such `europe-west1`.
        
    - name: ipPrefixLength
      value: integer
      description: >
        Required. The prefix length of the subnet's IP address range. Use CIDR range notation, such as `29` to provision a subnet with an `x.x.x.x/29` CIDR range. The IP address range is drawn from a pool of available ranges in the service consumer's allocated range. GCE disallows subnets with prefix_length > 29
        
    - name: description
      value: string
      description: >
        Optional. Description of the subnet.
        
    - name: subnetworkUsers
      value: array
      description: >
        A list of members that are granted the `roles/servicenetworking.subnetworkAdmin` role on the subnet.
        
    - name: consumer
      value: string
      description: >
        Required. A resource that represents the service consumer, such as `projects/123456`. The project number can be different from the value in the consumer network parameter. For example, the network might be part of a Shared VPC network. In those cases, Service Networking validates that this resource belongs to that Shared VPC.
        
    - name: requestedAddress
      value: string
      description: >
        Optional. The starting address of a range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix range is the CIDR range for the subnet. The range must be within the allocated range that is assigned to the private connection. If the CIDR range isn't available, the call fails.
        
    - name: secondaryIpRangeSpecs
      value: array
      description: >
        Optional. A list of secondary IP ranges to be created within the new subnetwork.
        
    - name: privateIpv6GoogleAccess
      value: string
      description: >
        Optional. The private IPv6 google access type for the VMs in this subnet. For information about the access types that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation.
        
    - name: requestedRanges
      value: array
      description: >
        Optional. The name of one or more allocated IP address ranges associated with this private service access connection. If no range names are provided all ranges associated with this connection will be considered. If a CIDR range with the specified IP prefix length is not available within these ranges, the call fails.
        
    - name: outsideAllocationPublicIpRange
      value: string
      description: >
        Optional. Enable outside allocation using public IP addresses. Any public IP range may be specified. If this field is provided, we will not use customer reserved ranges for this primary IP range.
        
    - name: purpose
      value: string
      description: >
        Optional. Defines the purpose field of the subnet, e.g. 'PRIVATE_SERVICE_CONNECT'. For information about the purposes that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation.
        
    - name: checkServiceNetworkingUsePermission
      value: boolean
      description: >
        Optional. The IAM permission check determines whether the consumer project has 'servicenetworking.services.use' permission or not.
        
    - name: useCustomComputeIdempotencyWindow
      value: boolean
      description: >
        Optional. Specifies if Service Networking should use a custom time bucket for GCE idempotency. If false, Service Networking uses a 300 second (5 minute) GCE idempotency window. If true, Service Networking uses a custom idempotency window provided by the user in field compute_idempotency_window.
        
    - name: computeIdempotencyWindow
      value: string
      description: >
        Optional. Specifies a custom time bucket for GCE subnetwork request idempotency. If two equivalent concurrent requests are made, GCE will know to ignore the request if it has already been completed or is in progress. Only requests with matching compute_idempotency_window have guaranteed idempotency. Changing this time window between requests results in undefined behavior. Zero (or empty) value with custom_compute_idempotency_window=true specifies no idempotency (i.e. no request ID is provided to GCE). Maximum value of 14 days (enforced by GCE limit).
        
    - name: allowSubnetCidrRoutesOverlap
      value: boolean
      description: >
        Optional. Defines the allowSubnetCidrRoutesOverlap field of the subnet, e.g. Available in alpha and beta according to [Compute API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/subnetworks/insert)
        
    - name: role
      value: string
      description: >
        Optional. Defines the role field of the subnet, e.g. 'ACTIVE'. For information about the roles that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation.
        
    - name: internalRange
      value: string
      description: >
        Optional. The url of an Internal Range. Eg: `projects//locations/global/internalRanges/`. If specified, it means that the subnetwork cidr will be created using the combination of requested_address/ip_prefix_length. Note that the subnet cidr has to be within the cidr range of this Internal Range.
        
    - name: skipRequestedAddressValidation
      value: boolean
      description: >
        Optional. Skips validating if the requested_address is in use by SN VPC’s peering group. Compute Engine will still perform this check and fail the request if the requested_address is in use. Note that Compute Engine does not check for the existence of dynamic routes when performing this check. Caller of this API should make sure that there are no dynamic routes overlapping with the requested_address/prefix_length IP address range otherwise the created subnet could cause misrouting.
        
```
</TabItem>
</Tabs>
