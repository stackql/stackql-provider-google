--- 
title: subnetworks
hide_title: false
hide_table_of_contents: false
keywords:
  - subnetworks
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

Creates, updates, deletes, gets or lists a <code>subnetworks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subnetworks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.subnetworks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td>The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="enableFlowLogs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled. This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The external IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a Subnetwork. An up-to-date fingerprint must be provided in order to update the Subnetwork, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a Subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayAddress" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="internalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The internal IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 100.64.0.0/10. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field is set at resource creation time. The range can be any range listed in the Valid ranges list. The range can be expanded after creation using expandIpCidrRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCollection" /></td>
    <td><code>string</code></td>
    <td>Reference to the source of IP, like a PublicDelegatedPrefix (PDP) for BYOIP. The PDP must be a sub-PDP in EXTERNAL_IPV6_SUBNETWORK_CREATION mode. Use one of the following formats to specify a sub-PDP when creating a dual stack subnetwork with external access using BYOIP: - Full resource URL, as in https://www.googleapis.com/compute/v1/projects/projectId/regions/region /publicDelegatedPrefixes/sub-pdp-name - Partial URL, as in - projects/projectId/regions/region/publicDelegatedPrefixes/ sub-pdp-name - regions/region/publicDelegatedPrefixes/sub-pdp-name </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6AccessType" /></td>
    <td><code>string</code></td>
    <td>The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This field is for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6GceEndpoint" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Possible endpoints of this subnetwork. It can be one of the following: - VM_ONLY: The subnetwork can be used for creating instances and IPv6 addresses with VM endpoint type. Such a subnetwork gets external IPv6 ranges from a public delegated prefix and cannot be used to create NetLb. - VM_AND_FR: The subnetwork can be used for creating both VM instances and Forwarding Rules. It can also be used to reserve IPv6 addresses with both VM and FR endpoint types. Such a subnetwork gets its IPv6 range from Google IP Pool directly. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources. (default: compute#subnetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>This field denotes the VPC flow logging options for this subnetwork. If logging is enabled, logs are exported to Cloud Logging. (id: SubnetworkLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: SubnetworkParams)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpGoogleAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpv6GoogleAccess" /></td>
    <td><code>string</code></td>
    <td>This field is for internal use. This field can be both set at resource creation time and updated using patch.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>URL of the region where the Subnetwork resides. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedInternalRange" /></td>
    <td><code>string</code></td>
    <td>The URL of the reserved internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of subnetwork. Currently, this field is only used when purpose is set to GLOBAL_MANAGED_PROXY or REGIONAL_MANAGED_PROXY. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Envoy-based load balancers in a region. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryIpRanges" /></td>
    <td><code>array</code></td>
    <td>An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges. This field can be updated with a patch request.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set to IPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used. This field can be both set at resource creation time and updated using patch.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The state of the subnetwork, which can be one of the following values: READY: Subnetwork is created and ready to use DRAINING: only applicable to subnetworks that have the purpose set to INTERNAL_HTTPS_LOAD_BALANCER and indicates that connections to the load balancer are being drained. A subnetwork that is draining cannot be used or modified until it reaches a status of READY</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedExternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of external IPv6 network ranges reserved from the subnetwork's external IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedInternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of internal IPv6 network ranges reserved from the subnetwork's internal IPv6 range for system use.</td>
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
    <td>A list of Subnetwork resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks. (default: compute#subnetworkList)</td>
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
<TabItem value="aggregated_list">

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
    <td>The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="enableFlowLogs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled. This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The external IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a Subnetwork. An up-to-date fingerprint must be provided in order to update the Subnetwork, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a Subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayAddress" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="internalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The internal IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 100.64.0.0/10. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field is set at resource creation time. The range can be any range listed in the Valid ranges list. The range can be expanded after creation using expandIpCidrRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCollection" /></td>
    <td><code>string</code></td>
    <td>Reference to the source of IP, like a PublicDelegatedPrefix (PDP) for BYOIP. The PDP must be a sub-PDP in EXTERNAL_IPV6_SUBNETWORK_CREATION mode. Use one of the following formats to specify a sub-PDP when creating a dual stack subnetwork with external access using BYOIP: - Full resource URL, as in https://www.googleapis.com/compute/v1/projects/projectId/regions/region /publicDelegatedPrefixes/sub-pdp-name - Partial URL, as in - projects/projectId/regions/region/publicDelegatedPrefixes/ sub-pdp-name - regions/region/publicDelegatedPrefixes/sub-pdp-name </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6AccessType" /></td>
    <td><code>string</code></td>
    <td>The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This field is for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6GceEndpoint" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Possible endpoints of this subnetwork. It can be one of the following: - VM_ONLY: The subnetwork can be used for creating instances and IPv6 addresses with VM endpoint type. Such a subnetwork gets external IPv6 ranges from a public delegated prefix and cannot be used to create NetLb. - VM_AND_FR: The subnetwork can be used for creating both VM instances and Forwarding Rules. It can also be used to reserve IPv6 addresses with both VM and FR endpoint types. Such a subnetwork gets its IPv6 range from Google IP Pool directly. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources. (default: compute#subnetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>This field denotes the VPC flow logging options for this subnetwork. If logging is enabled, logs are exported to Cloud Logging. (id: SubnetworkLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: SubnetworkParams)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpGoogleAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpv6GoogleAccess" /></td>
    <td><code>string</code></td>
    <td>This field is for internal use. This field can be both set at resource creation time and updated using patch.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>URL of the region where the Subnetwork resides. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedInternalRange" /></td>
    <td><code>string</code></td>
    <td>The URL of the reserved internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of subnetwork. Currently, this field is only used when purpose is set to GLOBAL_MANAGED_PROXY or REGIONAL_MANAGED_PROXY. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Envoy-based load balancers in a region. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryIpRanges" /></td>
    <td><code>array</code></td>
    <td>An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges. This field can be updated with a patch request.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set to IPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used. This field can be both set at resource creation time and updated using patch.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The state of the subnetwork, which can be one of the following values: READY: Subnetwork is created and ready to use DRAINING: only applicable to subnetworks that have the purpose set to INTERNAL_HTTPS_LOAD_BALANCER and indicates that connections to the load balancer are being drained. A subnetwork that is draining cannot be used or modified until it reaches a status of READY</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedExternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of external IPv6 network ranges reserved from the subnetwork's external IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedInternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of internal IPv6 network ranges reserved from the subnetwork's internal IPv6 range for system use.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td></td>
    <td>Returns the specified subnetwork.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of subnetworks available to the specified project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of subnetworks. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a subnetwork in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-drainTimeoutSeconds"><code>drainTimeoutSeconds</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified subnetwork.</td>
</tr>
<tr>
    <td><a href="#expand_ip_cidr_range"><CopyableCode code="expand_ip_cidr_range" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Expands the IP CIDR range of the subnetwork to a specified value.</td>
</tr>
<tr>
    <td><a href="#set_private_ip_google_access"><CopyableCode code="set_private_ip_google_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subnetwork">
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-drainTimeoutSeconds">
    <td><CopyableCode code="drainTimeoutSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified subnetwork.

```sql
SELECT
id,
name,
creationTimestamp,
description,
enableFlowLogs,
externalIpv6Prefix,
fingerprint,
gatewayAddress,
internalIpv6Prefix,
ipCidrRange,
ipCollection,
ipv6AccessType,
ipv6CidrRange,
ipv6GceEndpoint,
kind,
logConfig,
network,
params,
privateIpGoogleAccess,
privateIpv6GoogleAccess,
purpose,
region,
reservedInternalRange,
role,
secondaryIpRanges,
selfLink,
stackType,
state,
systemReservedExternalIpv6Ranges,
systemReservedInternalIpv6Ranges
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND subnetwork = '{{ subnetwork }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of subnetworks available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of subnetworks. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
creationTimestamp,
description,
enableFlowLogs,
externalIpv6Prefix,
fingerprint,
gatewayAddress,
internalIpv6Prefix,
ipCidrRange,
ipCollection,
ipv6AccessType,
ipv6CidrRange,
ipv6GceEndpoint,
kind,
logConfig,
network,
params,
privateIpGoogleAccess,
privateIpv6GoogleAccess,
purpose,
region,
reservedInternalRange,
role,
secondaryIpRanges,
selfLink,
stackType,
state,
systemReservedExternalIpv6Ranges,
systemReservedInternalIpv6Ranges
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
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

Creates a subnetwork in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.subnetworks (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__network,
data__ipCidrRange,
data__reservedInternalRange,
data__gatewayAddress,
data__region,
data__selfLink,
data__privateIpGoogleAccess,
data__secondaryIpRanges,
data__fingerprint,
data__enableFlowLogs,
data__privateIpv6GoogleAccess,
data__ipv6CidrRange,
data__externalIpv6Prefix,
data__internalIpv6Prefix,
data__purpose,
data__role,
data__state,
data__logConfig,
data__stackType,
data__ipv6AccessType,
data__ipCollection,
data__ipv6GceEndpoint,
data__params,
project,
region,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ network }}',
'{{ ipCidrRange }}',
'{{ reservedInternalRange }}',
'{{ gatewayAddress }}',
'{{ region }}',
'{{ selfLink }}',
{{ privateIpGoogleAccess }},
'{{ secondaryIpRanges }}',
'{{ fingerprint }}',
{{ enableFlowLogs }},
'{{ privateIpv6GoogleAccess }}',
'{{ ipv6CidrRange }}',
'{{ externalIpv6Prefix }}',
'{{ internalIpv6Prefix }}',
'{{ purpose }}',
'{{ role }}',
'{{ state }}',
'{{ logConfig }}',
'{{ stackType }}',
'{{ ipv6AccessType }}',
'{{ ipCollection }}',
'{{ ipv6GceEndpoint }}',
'{{ params }}',
'{{ project }}',
'{{ region }}',
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
- name: subnetworks
  props:
    - name: project
      value: string
      description: Required parameter for the subnetworks resource.
    - name: region
      value: string
      description: Required parameter for the subnetworks resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
        
      default: compute#subnetwork
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
        The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.
        
    - name: network
      value: string
      description: >
        The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. This field can be set only at resource creation time.
        
    - name: ipCidrRange
      value: string
      description: >
        The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 100.64.0.0/10. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field is set at resource creation time. The range can be any range listed in the Valid ranges list. The range can be expanded after creation using expandIpCidrRange.
        
    - name: reservedInternalRange
      value: string
      description: >
        The URL of the reserved internal range.
        
    - name: gatewayAddress
      value: string
      description: >
        [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.
        
    - name: region
      value: string
      description: >
        URL of the region where the Subnetwork resides. This field can be set only at resource creation time.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: privateIpGoogleAccess
      value: boolean
      description: >
        Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.
        
    - name: secondaryIpRanges
      value: array
      description: >
        An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges. This field can be updated with a patch request.
        
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a Subnetwork. An up-to-date fingerprint must be provided in order to update the Subnetwork, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a Subnetwork.
        
    - name: enableFlowLogs
      value: boolean
      description: >
        Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled. This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.
        
    - name: privateIpv6GoogleAccess
      value: string
      description: >
        This field is for internal use. This field can be both set at resource creation time and updated using patch.
        
      valid_values: ['DISABLE_GOOGLE_ACCESS', 'ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE', 'ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE']
    - name: ipv6CidrRange
      value: string
      description: >
        [Output Only] This field is for internal use.
        
    - name: externalIpv6Prefix
      value: string
      description: >
        The external IPv6 address range that is owned by this subnetwork.
        
    - name: internalIpv6Prefix
      value: string
      description: >
        The internal IPv6 address range that is owned by this subnetwork.
        
    - name: purpose
      value: string
      valid_values: ['GLOBAL_MANAGED_PROXY', 'INTERNAL_HTTPS_LOAD_BALANCER', 'PEER_MIGRATION', 'PRIVATE', 'PRIVATE_NAT', 'PRIVATE_RFC_1918', 'PRIVATE_SERVICE_CONNECT', 'REGIONAL_MANAGED_PROXY']
    - name: role
      value: string
      description: >
        The role of subnetwork. Currently, this field is only used when purpose is set to GLOBAL_MANAGED_PROXY or REGIONAL_MANAGED_PROXY. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Envoy-based load balancers in a region. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request.
        
      valid_values: ['ACTIVE', 'BACKUP']
    - name: state
      value: string
      description: >
        [Output Only] The state of the subnetwork, which can be one of the following values: READY: Subnetwork is created and ready to use DRAINING: only applicable to subnetworks that have the purpose set to INTERNAL_HTTPS_LOAD_BALANCER and indicates that connections to the load balancer are being drained. A subnetwork that is draining cannot be used or modified until it reaches a status of READY
        
      valid_values: ['DRAINING', 'READY']
    - name: logConfig
      value: object
      description: >
        This field denotes the VPC flow logging options for this subnetwork. If logging is enabled, logs are exported to Cloud Logging.
        
    - name: stackType
      value: string
      description: >
        The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set to IPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used. This field can be both set at resource creation time and updated using patch.
        
      valid_values: ['IPV4_IPV6', 'IPV4_ONLY', 'IPV6_ONLY']
    - name: ipv6AccessType
      value: string
      description: >
        The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack.
        
      valid_values: ['EXTERNAL', 'INTERNAL']
    - name: ipCollection
      value: string
      description: >
        Reference to the source of IP, like a PublicDelegatedPrefix (PDP) for BYOIP. The PDP must be a sub-PDP in EXTERNAL_IPV6_SUBNETWORK_CREATION mode. Use one of the following formats to specify a sub-PDP when creating a dual stack subnetwork with external access using BYOIP: - Full resource URL, as in https://www.googleapis.com/compute/v1/projects/projectId/regions/region /publicDelegatedPrefixes/sub-pdp-name - Partial URL, as in - projects/projectId/regions/region/publicDelegatedPrefixes/ sub-pdp-name - regions/region/publicDelegatedPrefixes/sub-pdp-name 
        
    - name: ipv6GceEndpoint
      value: string
      description: >
        [Output Only] Possible endpoints of this subnetwork. It can be one of the following: - VM_ONLY: The subnetwork can be used for creating instances and IPv6 addresses with VM endpoint type. Such a subnetwork gets external IPv6 ranges from a public delegated prefix and cannot be used to create NetLb. - VM_AND_FR: The subnetwork can be used for creating both VM instances and Forwarding Rules. It can also be used to reserve IPv6 addresses with both VM and FR endpoint types. Such a subnetwork gets its IPv6 range from Google IP Pool directly. 
        
      valid_values: ['VM_AND_FR', 'VM_ONLY']
    - name: params
      value: object
      description: >
        Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload.
        
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

Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.

```sql
UPDATE google.compute.subnetworks
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__network = '{{ network }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__reservedInternalRange = '{{ reservedInternalRange }}',
data__gatewayAddress = '{{ gatewayAddress }}',
data__region = '{{ region }}',
data__selfLink = '{{ selfLink }}',
data__privateIpGoogleAccess = {{ privateIpGoogleAccess }},
data__secondaryIpRanges = '{{ secondaryIpRanges }}',
data__fingerprint = '{{ fingerprint }}',
data__enableFlowLogs = {{ enableFlowLogs }},
data__privateIpv6GoogleAccess = '{{ privateIpv6GoogleAccess }}',
data__ipv6CidrRange = '{{ ipv6CidrRange }}',
data__externalIpv6Prefix = '{{ externalIpv6Prefix }}',
data__internalIpv6Prefix = '{{ internalIpv6Prefix }}',
data__purpose = '{{ purpose }}',
data__role = '{{ role }}',
data__state = '{{ state }}',
data__logConfig = '{{ logConfig }}',
data__stackType = '{{ stackType }}',
data__ipv6AccessType = '{{ ipv6AccessType }}',
data__ipCollection = '{{ ipCollection }}',
data__ipv6GceEndpoint = '{{ ipv6GceEndpoint }}',
data__params = '{{ params }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND subnetwork = '{{ subnetwork }}' --required
AND drainTimeoutSeconds = '{{ drainTimeoutSeconds}}'
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

Deletes the specified subnetwork.

```sql
DELETE FROM google.compute.subnetworks
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND subnetwork = '{{ subnetwork }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="expand_ip_cidr_range"
    values={[
        { label: 'expand_ip_cidr_range', value: 'expand_ip_cidr_range' },
        { label: 'set_private_ip_google_access', value: 'set_private_ip_google_access' }
    ]}
>
<TabItem value="expand_ip_cidr_range">

Expands the IP CIDR range of the subnetwork to a specified value.

```sql
EXEC google.compute.subnetworks.expand_ip_cidr_range 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@subnetwork='{{ subnetwork }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"ipCidrRange": "{{ ipCidrRange }}"
}';
```
</TabItem>
<TabItem value="set_private_ip_google_access">

Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.

```sql
EXEC google.compute.subnetworks.set_private_ip_google_access 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@subnetwork='{{ subnetwork }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"privateIpGoogleAccess": {{ privateIpGoogleAccess }}
}';
```
</TabItem>
</Tabs>
