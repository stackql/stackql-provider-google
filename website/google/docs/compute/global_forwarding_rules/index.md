--- 
title: global_forwarding_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - global_forwarding_rules
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

Creates, updates, deletes, gets or lists a <code>global_forwarding_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>global_forwarding_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.global_forwarding_rules" /></td></tr>
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

Represents a Forwarding Rule resource. Forwarding rule resources in Google Cloud can be either regional or global in scope: * [Global](https://cloud.google.com/compute/docs/reference/rest/v1/globalForwardingRules) * [Regional](https://cloud.google.com/compute/docs/reference/rest/v1/forwardingRules) A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules can also reference target instances and Cloud VPN Classic gateways (targetVpnGateway). For more information, read Forwarding rule concepts and Using protocol forwarding.

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
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. For Private Service Connect forwarding rules that forward traffic to Google APIs, the forwarding rule name must be a 1-20 characters string with lowercase letters and numbers and must start with a letter. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="IPAddress" /></td>
    <td><code>string</code></td>
    <td>IP address for which this forwarding rule accepts traffic. When a client sends traffic to this IP address, the forwarding rule directs the traffic to the referenced target or backendService. While creating a forwarding rule, specifying an IPAddress is required under the following circumstances: - When the target is set to targetGrpcProxy and validateForProxyless is set to true, the IPAddress should be set to 0.0.0.0. - When the target is a Private Service Connect Google APIs bundle, you must specify an IPAddress. Otherwise, you can optionally specify an IP address that references an existing static (reserved) IP address resource. When omitted, Google Cloud assigns an ephemeral IP address. Use one of the following formats to specify an IP address while creating a forwarding rule: * IP address number, as in `100.1.2.3` * IPv6 address range, as in `2600:1234::/96` * Full resource URL, as in https://www.googleapis.com/compute/v1/projects/ project_id/regions/region/addresses/address-name * Partial URL or by name, as in: - projects/project_id/regions/region/addresses/address-name - regions/region/addresses/address-name - global/addresses/address-name - address-name The forwarding rule's target or backendService, and in most cases, also the loadBalancingScheme, determine the type of IP address that you can use. For detailed information, see [IP address specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications). When reading an IPAddress, the API always returns the IP address number.</td>
</tr>
<tr>
    <td><CopyableCode code="IPProtocol" /></td>
    <td><code>string</code></td>
    <td>The IP protocol to which this rule applies. For protocol forwarding, valid options are TCP, UDP, ESP, AH, SCTP, ICMP and L3_DEFAULT. The valid IP protocols are different for different load balancing products as described in [Load balancing features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).</td>
</tr>
<tr>
    <td><CopyableCode code="allPorts" /></td>
    <td><code>boolean</code></td>
    <td>The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The allPorts field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, SCTP, or L3_DEFAULT. - It's applicable only to the following products: internal passthrough Network Load Balancers, backend service-based external passthrough Network Load Balancers, and internal and external protocol forwarding. - Set this field to true to allow packets addressed to any port or packets lacking destination port information (for example, UDP fragments after the first fragment) to be forwarded to the backends configured with this forwarding rule. The L3_DEFAULT protocol requires allPorts be set to true. </td>
</tr>
<tr>
    <td><CopyableCode code="allowGlobalAccess" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, clients can access the internal passthrough Network Load Balancers, the regional internal Application Load Balancer, and the regional internal proxy Network Load Balancer from all regions. If false, only allows access from the local region the load balancer is located at. Note that for INTERNAL_MANAGED forwarding rules, this field cannot be changed after the forwarding rule is created.</td>
</tr>
<tr>
    <td><CopyableCode code="allowPscGlobalAccess" /></td>
    <td><code>boolean</code></td>
    <td>This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.</td>
</tr>
<tr>
    <td><CopyableCode code="backendService" /></td>
    <td><code>string</code></td>
    <td>Identifies the backend service to which the forwarding rule sends traffic. Required for internal and external passthrough Network Load Balancers; must be omitted for all other load balancer types.</td>
</tr>
<tr>
    <td><CopyableCode code="baseForwardingRule" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL for the corresponding base forwarding rule. By base forwarding rule, we mean the forwarding rule that has the same IP address, protocol, and port settings with the current forwarding rule, but without sourceIPRanges specified. Always empty if the current forwarding rule does not have sourceIPRanges specified.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="externalManagedBackendBucketMigrationState" /></td>
    <td><code>string</code></td>
    <td>Specifies the canary migration state for the backend buckets attached to this forwarding rule. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC. To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate traffic to backend buckets attached to this forwarding rule by percentage using externalManagedBackendBucketMigrationTestingPercentage. Rolling back a migration requires the states to be set in reverse order. So changing the scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL.</td>
</tr>
<tr>
    <td><CopyableCode code="externalManagedBackendBucketMigrationTestingPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Determines the fraction of requests to backend buckets that should be processed by the global external Application Load Balancer. The value of this field must be in the range [0, 100]. This value can only be set if the loadBalancingScheme in the BackendService is set to EXTERNAL (when using the classic Application Load Balancer) and the migration state is TEST_BY_PERCENTAGE.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a ForwardingRule. Include the fingerprint in patch request to ensure that you do not overwrite changes that were applied from another concurrent request. To see the latest fingerprint, make a get() request to retrieve a ForwardingRule.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCollection" /></td>
    <td><code>string</code></td>
    <td>Resource reference of a PublicDelegatedPrefix. The PDP must be a sub-PDP in EXTERNAL_IPV6_FORWARDING_RULE_CREATION mode. Use one of the following formats to specify a sub-PDP when creating an IPv6 NetLB forwarding rule using BYOIP: Full resource URL, as in https://www.googleapis.com/compute/v1/projects/project_id/regions/region /publicDelegatedPrefixes/sub-pdp-name Partial URL, as in: - projects/project_id/regions/region/publicDelegatedPrefixes/sub-pdp-name - regions/region/publicDelegatedPrefixes/sub-pdp-name </td>
</tr>
<tr>
    <td><CopyableCode code="ipVersion" /></td>
    <td><code>string</code></td>
    <td>The IP Version that will be used by this forwarding rule. Valid options are IPV4 or IPV6.</td>
</tr>
<tr>
    <td><CopyableCode code="isMirroringCollector" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops, instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them. This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#forwardingRule for forwarding rule resources. (default: compute#forwardingRule)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this resource, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a ForwardingRule.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingScheme" /></td>
    <td><code>string</code></td>
    <td>Specifies the forwarding rule type. For more information about forwarding rules, refer to Forwarding rule concepts.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataFilters" /></td>
    <td><code>array</code></td>
    <td>Opaque filter criteria used by load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to load balancer, xDS clients present node metadata. When there is a match, the relevant configuration is made available to those proxies. Otherwise, all the resources (e.g. TargetHttpProxy, UrlMap) referenced by the ForwardingRule are not visible to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadataFilters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here will be applifed before those specified in the UrlMap that this ForwardingRule references. metadataFilters only applies to Loadbalancers that have their loadBalancingScheme set to INTERNAL_SELF_MANAGED.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>This field is not used for global external load balancing. For internal passthrough Network Load Balancers, this field identifies the network that the load balanced IP should belong to for this forwarding rule. If the subnetwork is specified, the network of the subnetwork will be used. If neither subnetwork nor this field is specified, the default network will be used. For Private Service Connect forwarding rules that forward traffic to Google APIs, a network must be provided.</td>
</tr>
<tr>
    <td><CopyableCode code="networkTier" /></td>
    <td><code>string</code></td>
    <td>This signifies the networking tier used for configuring this load balancer and can only take the following values: PREMIUM, STANDARD. For regional ForwardingRule, the valid values are PREMIUM and STANDARD. For GlobalForwardingRule, the valid value is PREMIUM. If this field is not specified, it is assumed to be PREMIUM. If IPAddress is specified, this value must be equal to the networkTier of the Address.</td>
</tr>
<tr>
    <td><CopyableCode code="noAutomateDnsZone" /></td>
    <td><code>boolean</code></td>
    <td>This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field. Once set, this field is not mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="portRange" /></td>
    <td><code>string</code></td>
    <td>The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The portRange field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, or SCTP, and - It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN. - Some products have restrictions on what ports can be used. See port specifications for details. For external forwarding rules, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair, and cannot have overlapping portRanges. For internal forwarding rules within the same VPC network, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair, and cannot have overlapping portRanges. @pattern: \\d+(?:-\\d+)?</td>
</tr>
<tr>
    <td><CopyableCode code="ports" /></td>
    <td><code>array</code></td>
    <td>The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The ports field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, or SCTP, and - It's applicable only to the following products: internal passthrough Network Load Balancers, backend service-based external passthrough Network Load Balancers, and internal protocol forwarding. - You can specify a list of up to five ports by number, separated by commas. The ports can be contiguous or discontiguous. For external forwarding rules, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair if they share at least one port number. For internal forwarding rules within the same VPC network, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair if they share at least one port number. @pattern: \\d+(?:-\\d+)?</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnectionId" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The PSC connection id of the PSC forwarding rule.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnectionStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectoryRegistrations" /></td>
    <td><code>array</code></td>
    <td>Service Directory resources to register this forwarding rule with. Currently, only supports a single Service Directory resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLabel" /></td>
    <td><code>string</code></td>
    <td>An optional prefix to the service name for this forwarding rule. If specified, the prefix is the first label of the fully qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. This field is only used for internal load balancing. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The internal fully qualified service name for this forwarding rule. This field is only used for internal load balancing.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceIpRanges" /></td>
    <td><code>array</code></td>
    <td>If not empty, this forwarding rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a forwarding rule can only have up to 64 source IP ranges, and this field can only be used with a regional forwarding rule whose scheme is EXTERNAL. Each source_ip_range entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>This field identifies the subnetwork that the load balanced IP should belong to for this forwarding rule, used with internal load balancers and external passthrough Network Load Balancers with IPv6. If the network specified is in auto subnet mode, this field is optional. However, a subnetwork must be specified if the network is in custom subnet mode or when creating external forwarding rule with IPv6.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must be in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object. - For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications). - For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle: - vpc-sc - APIs that support VPC Service Controls. - all-apis - All supported Google APIs. - For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment. The target is not mutable once set as a service attachment. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of ForwardingRule resources.

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
    <td>A list of ForwardingRule resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#forwardingRuleList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-forwardingRule"><code>forwardingRule</code></a></td>
    <td></td>
    <td>Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of GlobalForwardingRule resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a GlobalForwardingRule resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-forwardingRule"><code>forwardingRule</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-forwardingRule"><code>forwardingRule</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified GlobalForwardingRule resource.</td>
</tr>
<tr>
    <td><a href="#set_target"><CopyableCode code="set_target" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-forwardingRule"><code>forwardingRule</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.</td>
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
<tr id="parameter-forwardingRule">
    <td><CopyableCode code="forwardingRule" /></td>
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

Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.

```sql
SELECT
id,
name,
IPAddress,
IPProtocol,
allPorts,
allowGlobalAccess,
allowPscGlobalAccess,
backendService,
baseForwardingRule,
creationTimestamp,
description,
externalManagedBackendBucketMigrationState,
externalManagedBackendBucketMigrationTestingPercentage,
fingerprint,
ipCollection,
ipVersion,
isMirroringCollector,
kind,
labelFingerprint,
labels,
loadBalancingScheme,
metadataFilters,
network,
networkTier,
noAutomateDnsZone,
portRange,
ports,
pscConnectionId,
pscConnectionStatus,
region,
selfLink,
selfLinkWithId,
serviceDirectoryRegistrations,
serviceLabel,
serviceName,
sourceIpRanges,
subnetwork,
target
FROM google.compute.global_forwarding_rules
WHERE project = '{{ project }}' -- required
AND forwardingRule = '{{ forwardingRule }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of GlobalForwardingRule resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.global_forwarding_rules
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

Creates a GlobalForwardingRule resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.global_forwarding_rules (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__region,
data__IPAddress,
data__IPProtocol,
data__portRange,
data__ports,
data__target,
data__selfLink,
data__selfLinkWithId,
data__loadBalancingScheme,
data__subnetwork,
data__network,
data__backendService,
data__serviceDirectoryRegistrations,
data__serviceLabel,
data__serviceName,
data__networkTier,
data__labels,
data__labelFingerprint,
data__ipVersion,
data__fingerprint,
data__allPorts,
data__allowGlobalAccess,
data__metadataFilters,
data__isMirroringCollector,
data__sourceIpRanges,
data__pscConnectionId,
data__pscConnectionStatus,
data__baseForwardingRule,
data__allowPscGlobalAccess,
data__noAutomateDnsZone,
data__ipCollection,
data__externalManagedBackendBucketMigrationState,
data__externalManagedBackendBucketMigrationTestingPercentage,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ region }}',
'{{ IPAddress }}',
'{{ IPProtocol }}',
'{{ portRange }}',
'{{ ports }}',
'{{ target }}',
'{{ selfLink }}',
'{{ selfLinkWithId }}',
'{{ loadBalancingScheme }}',
'{{ subnetwork }}',
'{{ network }}',
'{{ backendService }}',
'{{ serviceDirectoryRegistrations }}',
'{{ serviceLabel }}',
'{{ serviceName }}',
'{{ networkTier }}',
'{{ labels }}',
'{{ labelFingerprint }}',
'{{ ipVersion }}',
'{{ fingerprint }}',
{{ allPorts }},
{{ allowGlobalAccess }},
'{{ metadataFilters }}',
{{ isMirroringCollector }},
'{{ sourceIpRanges }}',
'{{ pscConnectionId }}',
'{{ pscConnectionStatus }}',
'{{ baseForwardingRule }}',
{{ allowPscGlobalAccess }},
{{ noAutomateDnsZone }},
'{{ ipCollection }}',
'{{ externalManagedBackendBucketMigrationState }}',
{{ externalManagedBackendBucketMigrationTestingPercentage }},
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
- name: global_forwarding_rules
  props:
    - name: project
      value: string
      description: Required parameter for the global_forwarding_rules resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#forwardingRule for forwarding rule resources.
        
      default: compute#forwardingRule
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
        Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. For Private Service Connect forwarding rules that forward traffic to Google APIs, the forwarding rule name must be a 1-20 characters string with lowercase letters and numbers and must start with a letter.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
        
    - name: IPAddress
      value: string
      description: >
        IP address for which this forwarding rule accepts traffic. When a client sends traffic to this IP address, the forwarding rule directs the traffic to the referenced target or backendService. While creating a forwarding rule, specifying an IPAddress is required under the following circumstances: - When the target is set to targetGrpcProxy and validateForProxyless is set to true, the IPAddress should be set to 0.0.0.0. - When the target is a Private Service Connect Google APIs bundle, you must specify an IPAddress. Otherwise, you can optionally specify an IP address that references an existing static (reserved) IP address resource. When omitted, Google Cloud assigns an ephemeral IP address. Use one of the following formats to specify an IP address while creating a forwarding rule: * IP address number, as in `100.1.2.3` * IPv6 address range, as in `2600:1234::/96` * Full resource URL, as in https://www.googleapis.com/compute/v1/projects/ project_id/regions/region/addresses/address-name * Partial URL or by name, as in: - projects/project_id/regions/region/addresses/address-name - regions/region/addresses/address-name - global/addresses/address-name - address-name The forwarding rule's target or backendService, and in most cases, also the loadBalancingScheme, determine the type of IP address that you can use. For detailed information, see [IP address specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications). When reading an IPAddress, the API always returns the IP address number.
        
    - name: IPProtocol
      value: string
      description: >
        The IP protocol to which this rule applies. For protocol forwarding, valid options are TCP, UDP, ESP, AH, SCTP, ICMP and L3_DEFAULT. The valid IP protocols are different for different load balancing products as described in [Load balancing features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).
        
      valid_values: ['AH', 'ESP', 'ICMP', 'L3_DEFAULT', 'SCTP', 'TCP', 'UDP']
    - name: portRange
      value: string
      description: >
        The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The portRange field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, or SCTP, and - It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN. - Some products have restrictions on what ports can be used. See port specifications for details. For external forwarding rules, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair, and cannot have overlapping portRanges. For internal forwarding rules within the same VPC network, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair, and cannot have overlapping portRanges. @pattern: \\d+(?:-\\d+)?
        
    - name: ports
      value: array
      description: >
        The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The ports field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, or SCTP, and - It's applicable only to the following products: internal passthrough Network Load Balancers, backend service-based external passthrough Network Load Balancers, and internal protocol forwarding. - You can specify a list of up to five ports by number, separated by commas. The ports can be contiguous or discontiguous. For external forwarding rules, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair if they share at least one port number. For internal forwarding rules within the same VPC network, two or more forwarding rules cannot use the same [IPAddress, IPProtocol] pair if they share at least one port number. @pattern: \\d+(?:-\\d+)?
        
    - name: target
      value: string
      description: >
        The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must be in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object. - For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications). - For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle: - vpc-sc - APIs that support VPC Service Controls. - all-apis - All supported Google APIs. - For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment. The target is not mutable once set as a service attachment. 
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: selfLinkWithId
      value: string
      description: >
        [Output Only] Server-defined URL for this resource with the resource id.
        
    - name: loadBalancingScheme
      value: string
      description: >
        Specifies the forwarding rule type. For more information about forwarding rules, refer to Forwarding rule concepts.
        
      valid_values: ['EXTERNAL', 'EXTERNAL_MANAGED', 'INTERNAL', 'INTERNAL_MANAGED', 'INTERNAL_SELF_MANAGED', 'INVALID']
    - name: subnetwork
      value: string
      description: >
        This field identifies the subnetwork that the load balanced IP should belong to for this forwarding rule, used with internal load balancers and external passthrough Network Load Balancers with IPv6. If the network specified is in auto subnet mode, this field is optional. However, a subnetwork must be specified if the network is in custom subnet mode or when creating external forwarding rule with IPv6.
        
    - name: network
      value: string
      description: >
        This field is not used for global external load balancing. For internal passthrough Network Load Balancers, this field identifies the network that the load balanced IP should belong to for this forwarding rule. If the subnetwork is specified, the network of the subnetwork will be used. If neither subnetwork nor this field is specified, the default network will be used. For Private Service Connect forwarding rules that forward traffic to Google APIs, a network must be provided.
        
    - name: backendService
      value: string
      description: >
        Identifies the backend service to which the forwarding rule sends traffic. Required for internal and external passthrough Network Load Balancers; must be omitted for all other load balancer types.
        
    - name: serviceDirectoryRegistrations
      value: array
      description: >
        Service Directory resources to register this forwarding rule with. Currently, only supports a single Service Directory resource.
        
    - name: serviceLabel
      value: string
      description: >
        An optional prefix to the service name for this forwarding rule. If specified, the prefix is the first label of the fully qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. This field is only used for internal load balancing.
        
    - name: serviceName
      value: string
      description: >
        [Output Only] The internal fully qualified service name for this forwarding rule. This field is only used for internal load balancing.
        
    - name: networkTier
      value: string
      description: >
        This signifies the networking tier used for configuring this load balancer and can only take the following values: PREMIUM, STANDARD. For regional ForwardingRule, the valid values are PREMIUM and STANDARD. For GlobalForwardingRule, the valid value is PREMIUM. If this field is not specified, it is assumed to be PREMIUM. If IPAddress is specified, this value must be equal to the networkTier of the Address.
        
      valid_values: ['FIXED_STANDARD', 'PREMIUM', 'STANDARD', 'STANDARD_OVERRIDES_FIXED_STANDARD']
    - name: labels
      value: object
      description: >
        Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.
        
    - name: labelFingerprint
      value: string
      description: >
        A fingerprint for the labels being applied to this resource, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a ForwardingRule.
        
    - name: ipVersion
      value: string
      description: >
        The IP Version that will be used by this forwarding rule. Valid options are IPV4 or IPV6.
        
      valid_values: ['IPV4', 'IPV6', 'UNSPECIFIED_VERSION']
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a ForwardingRule. Include the fingerprint in patch request to ensure that you do not overwrite changes that were applied from another concurrent request. To see the latest fingerprint, make a get() request to retrieve a ForwardingRule.
        
    - name: allPorts
      value: boolean
      description: >
        The ports, portRange, and allPorts fields are mutually exclusive. Only packets addressed to ports in the specified range will be forwarded to the backends configured with this forwarding rule. The allPorts field has the following limitations: - It requires that the forwarding rule IPProtocol be TCP, UDP, SCTP, or L3_DEFAULT. - It's applicable only to the following products: internal passthrough Network Load Balancers, backend service-based external passthrough Network Load Balancers, and internal and external protocol forwarding. - Set this field to true to allow packets addressed to any port or packets lacking destination port information (for example, UDP fragments after the first fragment) to be forwarded to the backends configured with this forwarding rule. The L3_DEFAULT protocol requires allPorts be set to true. 
        
    - name: allowGlobalAccess
      value: boolean
      description: >
        If set to true, clients can access the internal passthrough Network Load Balancers, the regional internal Application Load Balancer, and the regional internal proxy Network Load Balancer from all regions. If false, only allows access from the local region the load balancer is located at. Note that for INTERNAL_MANAGED forwarding rules, this field cannot be changed after the forwarding rule is created.
        
    - name: metadataFilters
      value: array
      description: >
        Opaque filter criteria used by load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to load balancer, xDS clients present node metadata. When there is a match, the relevant configuration is made available to those proxies. Otherwise, all the resources (e.g. TargetHttpProxy, UrlMap) referenced by the ForwardingRule are not visible to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadataFilters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here will be applifed before those specified in the UrlMap that this ForwardingRule references. metadataFilters only applies to Loadbalancers that have their loadBalancingScheme set to INTERNAL_SELF_MANAGED.
        
    - name: isMirroringCollector
      value: boolean
      description: >
        Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops, instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them. This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
        
    - name: sourceIpRanges
      value: array
      description: >
        If not empty, this forwarding rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a forwarding rule can only have up to 64 source IP ranges, and this field can only be used with a regional forwarding rule whose scheme is EXTERNAL. Each source_ip_range entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).
        
    - name: pscConnectionId
      value: string
      description: >
        [Output Only] The PSC connection id of the PSC forwarding rule.
        
    - name: pscConnectionStatus
      value: string
      valid_values: ['ACCEPTED', 'CLOSED', 'NEEDS_ATTENTION', 'PENDING', 'REJECTED', 'STATUS_UNSPECIFIED']
    - name: baseForwardingRule
      value: string
      description: >
        [Output Only] The URL for the corresponding base forwarding rule. By base forwarding rule, we mean the forwarding rule that has the same IP address, protocol, and port settings with the current forwarding rule, but without sourceIPRanges specified. Always empty if the current forwarding rule does not have sourceIPRanges specified.
        
    - name: allowPscGlobalAccess
      value: boolean
      description: >
        This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.
        
    - name: noAutomateDnsZone
      value: boolean
      description: >
        This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field. Once set, this field is not mutable.
        
    - name: ipCollection
      value: string
      description: >
        Resource reference of a PublicDelegatedPrefix. The PDP must be a sub-PDP in EXTERNAL_IPV6_FORWARDING_RULE_CREATION mode. Use one of the following formats to specify a sub-PDP when creating an IPv6 NetLB forwarding rule using BYOIP: Full resource URL, as in https://www.googleapis.com/compute/v1/projects/project_id/regions/region /publicDelegatedPrefixes/sub-pdp-name Partial URL, as in: - projects/project_id/regions/region/publicDelegatedPrefixes/sub-pdp-name - regions/region/publicDelegatedPrefixes/sub-pdp-name 
        
    - name: externalManagedBackendBucketMigrationState
      value: string
      description: >
        Specifies the canary migration state for the backend buckets attached to this forwarding rule. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC. To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate traffic to backend buckets attached to this forwarding rule by percentage using externalManagedBackendBucketMigrationTestingPercentage. Rolling back a migration requires the states to be set in reverse order. So changing the scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL.
        
      valid_values: ['PREPARE', 'TEST_ALL_TRAFFIC', 'TEST_BY_PERCENTAGE']
    - name: externalManagedBackendBucketMigrationTestingPercentage
      value: number
      description: >
        Determines the fraction of requests to backend buckets that should be processed by the global external Application Load Balancer. The value of this field must be in the range [0, 100]. This value can only be set if the loadBalancingScheme in the BackendService is set to EXTERNAL (when using the classic Application Load Balancer) and the migration state is TEST_BY_PERCENTAGE.
        
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

Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.

```sql
UPDATE google.compute.global_forwarding_rules
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__region = '{{ region }}',
data__IPAddress = '{{ IPAddress }}',
data__IPProtocol = '{{ IPProtocol }}',
data__portRange = '{{ portRange }}',
data__ports = '{{ ports }}',
data__target = '{{ target }}',
data__selfLink = '{{ selfLink }}',
data__selfLinkWithId = '{{ selfLinkWithId }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__subnetwork = '{{ subnetwork }}',
data__network = '{{ network }}',
data__backendService = '{{ backendService }}',
data__serviceDirectoryRegistrations = '{{ serviceDirectoryRegistrations }}',
data__serviceLabel = '{{ serviceLabel }}',
data__serviceName = '{{ serviceName }}',
data__networkTier = '{{ networkTier }}',
data__labels = '{{ labels }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__ipVersion = '{{ ipVersion }}',
data__fingerprint = '{{ fingerprint }}',
data__allPorts = {{ allPorts }},
data__allowGlobalAccess = {{ allowGlobalAccess }},
data__metadataFilters = '{{ metadataFilters }}',
data__isMirroringCollector = {{ isMirroringCollector }},
data__sourceIpRanges = '{{ sourceIpRanges }}',
data__pscConnectionId = '{{ pscConnectionId }}',
data__pscConnectionStatus = '{{ pscConnectionStatus }}',
data__baseForwardingRule = '{{ baseForwardingRule }}',
data__allowPscGlobalAccess = {{ allowPscGlobalAccess }},
data__noAutomateDnsZone = {{ noAutomateDnsZone }},
data__ipCollection = '{{ ipCollection }}',
data__externalManagedBackendBucketMigrationState = '{{ externalManagedBackendBucketMigrationState }}',
data__externalManagedBackendBucketMigrationTestingPercentage = {{ externalManagedBackendBucketMigrationTestingPercentage }}
WHERE 
project = '{{ project }}' --required
AND forwardingRule = '{{ forwardingRule }}' --required
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

Deletes the specified GlobalForwardingRule resource.

```sql
DELETE FROM google.compute.global_forwarding_rules
WHERE project = '{{ project }}' --required
AND forwardingRule = '{{ forwardingRule }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_target"
    values={[
        { label: 'set_target', value: 'set_target' },
        { label: 'set_labels', value: 'set_labels' }
    ]}
>
<TabItem value="set_target">

Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.

```sql
EXEC google.compute.global_forwarding_rules.set_target 
@project='{{ project }}' --required, 
@forwardingRule='{{ forwardingRule }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"target": "{{ target }}"
}';
```
</TabItem>
<TabItem value="set_labels">

Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.

```sql
EXEC google.compute.global_forwarding_rules.set_labels 
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
