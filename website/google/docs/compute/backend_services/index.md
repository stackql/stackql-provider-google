--- 
title: backend_services
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_services
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

Creates, updates, deletes, gets or lists a <code>backend_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backend_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.backend_services" /></td></tr>
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

Represents a Backend Service resource. A backend service defines how Google Cloud load balancers distribute traffic. The backend service configuration contains a set of values, such as the protocol used to connect to backends, various distribution and session settings, health checks, and timeouts. These settings provide fine-grained control over how your load balancer behaves. Most of the settings have default values that allow for easy configuration if you need to get started quickly. Backend services in Google Compute Engine can be either regionally or globally scoped. * [Global](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) * [Regional](https://cloud.google.com/compute/docs/reference/rest/v1/regionBackendServices) For more information, see Backend Services.

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
    <td><CopyableCode code="affinityCookieTtlSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>Lifetime of cookies in seconds. This setting is applicable to Application Load Balancers and Traffic Director and requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600). Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="backends" /></td>
    <td><code>array</code></td>
    <td>The list of backends that serve this BackendService.</td>
</tr>
<tr>
    <td><CopyableCode code="cdnPolicy" /></td>
    <td><code>object</code></td>
    <td>Cloud CDN configuration for this BackendService. Only available for specified load balancer types. (id: BackendServiceCdnPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="circuitBreakers" /></td>
    <td><code>object</code></td>
    <td>Settings controlling the volume of requests, connections and retries to this backend service. (id: CircuitBreakers)</td>
</tr>
<tr>
    <td><CopyableCode code="compressionMode" /></td>
    <td><code>string</code></td>
    <td>Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionDraining" /></td>
    <td><code>object</code></td>
    <td>connectionDraining cannot be specified with haPolicy. (id: ConnectionDraining)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionTrackingPolicy" /></td>
    <td><code>object</code></td>
    <td>Connection Tracking configuration for this BackendService. Connection tracking policy settings are only available for external passthrough Network Load Balancers and internal passthrough Network Load Balancers. connectionTrackingPolicy cannot be specified with haPolicy. (id: BackendServiceConnectionTrackingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="consistentHash" /></td>
    <td><code>object</code></td>
    <td>Consistent Hash-based load balancing can be used to provide soft session affinity based on HTTP headers, cookies or other properties. This load balancing policy is applicable only for HTTP connections. The affinity to a particular destination host will be lost when one or more hosts are added/removed from the destination service. This field specifies parameters that control consistent hashing. This field is only applicable when localityLbPolicy is set to MAGLEV or RING_HASH. This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.  (id: ConsistentHashLoadBalancerSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customMetrics" /></td>
    <td><code>array</code></td>
    <td>List of custom metrics that are used for the WEIGHTED_ROUND_ROBIN locality_lb_policy.</td>
</tr>
<tr>
    <td><CopyableCode code="customRequestHeaders" /></td>
    <td><code>array</code></td>
    <td>Headers that the load balancer adds to proxied requests. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).</td>
</tr>
<tr>
    <td><CopyableCode code="customResponseHeaders" /></td>
    <td><code>array</code></td>
    <td>Headers that the load balancer adds to proxied responses. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeSecurityPolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource URL for the edge security policy associated with this backend service.</td>
</tr>
<tr>
    <td><CopyableCode code="enableCDN" /></td>
    <td><code>boolean</code></td>
    <td>If true, enables Cloud CDN for the backend service of a global external Application Load Balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="externalManagedMigrationState" /></td>
    <td><code>string</code></td>
    <td>Specifies the canary migration state. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC. To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate traffic by percentage using externalManagedMigrationTestingPercentage. Rolling back a migration requires the states to be set in reverse order. So changing the scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL.</td>
</tr>
<tr>
    <td><CopyableCode code="externalManagedMigrationTestingPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Determines the fraction of requests that should be processed by the Global external Application Load Balancer. The value of this field must be in the range [0, 100]. Session affinity options will slightly affect this routing behavior, for more details, see: Session Affinity. This value can only be set if the loadBalancingScheme in the BackendService is set to EXTERNAL (when using the classic Application Load Balancer) and the migration state is TEST_BY_PERCENTAGE.</td>
</tr>
<tr>
    <td><CopyableCode code="failoverPolicy" /></td>
    <td><code>object</code></td>
    <td>Requires at least one backend instance group to be defined as a backup (failover) backend. For load balancers that have configurable failover: [Internal passthrough Network Load Balancers](https://cloud.google.com/load-balancing/docs/internal/failover-overview) and [external passthrough Network Load Balancers](https://cloud.google.com/load-balancing/docs/network/networklb-failover-overview). failoverPolicy cannot be specified with haPolicy. (id: BackendServiceFailoverPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a BackendService.</td>
</tr>
<tr>
    <td><CopyableCode code="haPolicy" /></td>
    <td><code>object</code></td>
    <td>Configures self-managed High Availability (HA) for External and Internal Protocol Forwarding. The backends of this regional backend service must only specify zonal network endpoint groups (NEGs) of type GCE_VM_IP. When haPolicy is set for an Internal Passthrough Network Load Balancer, the regional backend service must set the network field. All zonal NEGs must belong to the same network. However, individual NEGs can belong to different subnetworks of that network. When haPolicy is specified, the set of attached network endpoints across all backends comprise an High Availability domain from which one endpoint is selected as the active endpoint (the leader) that receives all traffic. haPolicy can be added only at backend service creation time. Once set up, it cannot be deleted. Note that haPolicy is not for load balancing, and therefore cannot be specified with sessionAffinity, connectionTrackingPolicy, and failoverPolicy. haPolicy requires customers to be responsible for tracking backend endpoint health and electing a leader among the healthy endpoints. Therefore, haPolicy cannot be specified with healthChecks. haPolicy can only be specified for External Passthrough Network Load Balancers and Internal Passthrough Network Load Balancers. (id: BackendServiceHAPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="healthChecks" /></td>
    <td><code>array</code></td>
    <td>The list of URLs to the healthChecks, httpHealthChecks (legacy), or httpsHealthChecks (legacy) resource for health checking this backend service. Not all backend services support legacy health checks. See Load balancer guide. Currently, at most one health check can be specified for each backend service. Backend services with instance group or zonal NEG backends must have a health check unless haPolicy is specified. Backend services with internet or serverless NEG backends must not have a health check. healthChecks[] cannot be specified with haPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="iap" /></td>
    <td><code>object</code></td>
    <td>The configurations for Identity-Aware Proxy on this resource. Not available for internal passthrough Network Load Balancers and external passthrough Network Load Balancers. (id: BackendServiceIAP)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressSelectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Specifies a preference for traffic sent from the proxy to the backend (or from the client to the backend for proxyless gRPC). The possible values are: - IPV4_ONLY: Only send IPv4 traffic to the backends of the backend service (Instance Group, Managed Instance Group, Network Endpoint Group), regardless of traffic from the client to the proxy. Only IPv4 health checks are used to check the health of the backends. This is the default setting. - PREFER_IPV6: Prioritize the connection to the endpoint's IPv6 address over its IPv4 address (provided there is a healthy IPv6 address). - IPV6_ONLY: Only send IPv6 traffic to the backends of the backend service (Instance Group, Managed Instance Group, Network Endpoint Group), regardless of traffic from the client to the proxy. Only IPv6 health checks are used to check the health of the backends. This field is applicable to either: - Advanced global external Application Load Balancer (load balancing scheme EXTERNAL_MANAGED), - Regional external Application Load Balancer, - Internal proxy Network Load Balancer (load balancing scheme INTERNAL_MANAGED), - Regional internal Application Load Balancer (load balancing scheme INTERNAL_MANAGED), - Traffic Director with Envoy proxies and proxyless gRPC (load balancing scheme INTERNAL_SELF_MANAGED). </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#backendService for backend services. (default: compute#backendService)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingScheme" /></td>
    <td><code>string</code></td>
    <td>Specifies the load balancer type. A backend service created for one type of load balancer cannot be used with another. For more information, refer to Choosing a load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="localityLbPolicies" /></td>
    <td><code>array</code></td>
    <td>A list of locality load-balancing policies to be used in order of preference. When you use localityLbPolicies, you must set at least one value for either the localityLbPolicies[].policy or the localityLbPolicies[].customPolicy field. localityLbPolicies overrides any value set in the localityLbPolicy field. For an example of how to use this field, see Define a list of preferred policies. Caution: This field and its children are intended for use in a service mesh that includes gRPC clients only. Envoy proxies can't use backend services that have this configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="localityLbPolicy" /></td>
    <td><code>string</code></td>
    <td>The load balancing algorithm used within the scope of the locality. The possible values are: - ROUND_ROBIN: This is a simple policy in which each healthy backend is selected in round robin order. This is the default. - LEAST_REQUEST: An O(1) algorithm which selects two random healthy hosts and picks the host which has fewer active requests. - RING_HASH: The ring/modulo hash load balancer implements consistent hashing to backends. The algorithm has the property that the addition/removal of a host from a set of N hosts only affects 1/N of the requests. - RANDOM: The load balancer selects a random healthy host. - ORIGINAL_DESTINATION: Backend host is selected based on the client connection metadata, i.e., connections are opened to the same address as the destination address of the incoming connection before the connection was redirected to the load balancer. - MAGLEV: used as a drop in replacement for the ring hash load balancer. Maglev is not as stable as ring hash but has faster table lookup build times and host selection times. For more information about Maglev, see Maglev: A Fast and Reliable Software Network Load Balancer. - WEIGHTED_ROUND_ROBIN: Per-endpoint Weighted Round Robin Load Balancing using weights computed from Backend reported Custom Metrics. If set, the Backend Service responses are expected to contain non-standard HTTP response header field Endpoint-Load-Metrics. The reported metrics to use for computing the weights are specified via the customMetrics field. This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED, INTERNAL_MANAGED, or EXTERNAL_MANAGED. If sessionAffinity is not configured—that is, if session affinity remains at the default value of NONE—then the default value for localityLbPolicy is ROUND_ROBIN. If session affinity is set to a value other than NONE, then the default value for localityLbPolicy is MAGLEV. Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. localityLbPolicy cannot be specified with haPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>This field denotes the logging options for the load balancer traffic served by this backend service. If logging is enabled, logs will be exported to Stackdriver. (id: BackendServiceLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="maxStreamDuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the default maximum duration (timeout) for streams to this service. Duration is computed from the beginning of the stream until the response has been completely processed, including all retries. A stream that does not complete in this duration is closed. If not specified, there will be no timeout limit, i.e. the maximum duration is infinite. This value can be overridden in the PathMatcher configuration of the UrlMap that references this backend service. This field is only allowed when the loadBalancingScheme of the backend service is INTERNAL_SELF_MANAGED. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadatas" /></td>
    <td><code>object</code></td>
    <td>Deployment metadata associated with the resource to be set by a GKE hub controller and read by the backend RCTH</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which this backend service belongs. This field must be set for Internal Passthrough Network Load Balancers when the haPolicy is enabled, and for External Passthrough Network Load Balancers when the haPolicy fastIpMove is enabled. This field can only be specified when the load balancing scheme is set to INTERNAL, or when the load balancing scheme is set to EXTERNAL and haPolicy fastIpMove is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="outlierDetection" /></td>
    <td><code>object</code></td>
    <td>Settings controlling the ejection of unhealthy backend endpoints from the load balancing pool of each individual proxy instance that processes the traffic for the given backend service. If not set, this feature is considered disabled. Results of the outlier detection algorithm (ejection of endpoints from the load balancing pool and returning them back to the pool) are executed independently by each proxy instance of the load balancer. In most cases, more than one proxy instance handles the traffic received by a backend service. Thus, it is possible that an unhealthy endpoint is detected and ejected by only some of the proxies, and while this happens, other proxies may continue to send requests to the same unhealthy endpoint until they detect and eject the unhealthy endpoint. Applicable backend endpoints can be: - VM instances in an Instance Group - Endpoints in a Zonal NEG (GCE_VM_IP, GCE_VM_IP_PORT) - Endpoints in a Hybrid Connectivity NEG (NON_GCP_PRIVATE_IP_PORT) - Serverless NEGs, that resolve to Cloud Run, App Engine, or Cloud Functions Services - Private Service Connect NEGs, that resolve to Google-managed regional API endpoints or managed services published using Private Service Connect Applicable backend service types can be: - A global backend service with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED. - A regional backend service with the serviceProtocol set to HTTP, HTTPS, HTTP2 or H2C, and loadBalancingScheme set to INTERNAL_MANAGED or EXTERNAL_MANAGED. Not supported for Serverless NEGs. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. (id: OutlierDetection)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: BackendServiceParams)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80. For internal passthrough Network Load Balancers and external passthrough Network Load Balancers, omit port.</td>
</tr>
<tr>
    <td><CopyableCode code="portName" /></td>
    <td><code>string</code></td>
    <td>A named port on a backend instance group representing the port for communication to the backend VMs in that group. The named port must be [defined on each backend instance group](https://cloud.google.com/load-balancing/docs/backend-service#named_ports). This parameter has no meaning if the backends are NEGs. For internal passthrough Network Load Balancers and external passthrough Network Load Balancers, omit port_name.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol this BackendService uses to communicate with backends. Possible values are HTTP, HTTPS, HTTP2, H2C, TCP, SSL, UDP or GRPC. depending on the chosen load balancer or Traffic Director configuration. Refer to the documentation for the load balancers or for Traffic Director for more information. Must be set to GRPC when the backend service is referenced by a URL map that is bound to target gRPC proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource URL for the security policy associated with this backend service.</td>
</tr>
<tr>
    <td><CopyableCode code="securitySettings" /></td>
    <td><code>object</code></td>
    <td>This field specifies the security settings that apply to this backend service. This field is applicable to a global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED. (id: SecuritySettings)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceBindings" /></td>
    <td><code>array</code></td>
    <td>URLs of networkservices.ServiceBinding resources. Can only be set if load balancing scheme is INTERNAL_SELF_MANAGED. If set, lists of backends and health checks must be both empty.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLbPolicy" /></td>
    <td><code>string</code></td>
    <td>URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionAffinity" /></td>
    <td><code>string</code></td>
    <td>Type of session affinity to use. The default is NONE. Only NONE and HEADER_FIELD are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. For more details, see: [Session Affinity](https://cloud.google.com/load-balancing/docs/backend-service#session_affinity). sessionAffinity cannot be specified with haPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="strongSessionAffinityCookie" /></td>
    <td><code>object</code></td>
    <td>Describes the HTTP cookie used for stateful session affinity. This field is applicable and required if the sessionAffinity is set to STRONG_COOKIE_AFFINITY. (id: BackendServiceHttpCookie)</td>
</tr>
<tr>
    <td><CopyableCode code="subsetting" /></td>
    <td><code>object</code></td>
    <td>subsetting cannot be specified with haPolicy. (id: Subsetting)</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>The backend service timeout has a different meaning depending on the type of load balancer. For more information see, Backend service settings. The default is 30 seconds. The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds. This value can be overridden in the PathMatcher configuration of the UrlMap that references this backend service. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. Instead, use maxStreamDuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsSettings" /></td>
    <td><code>object</code></td>
    <td>Configuration for Backend Authenticated TLS and mTLS. May only be specified when the backend protocol is SSL, HTTPS or HTTP2. (id: BackendServiceTlsSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="usedBy" /></td>
    <td><code>array</code></td>
    <td>[Output Only] List of resources referencing given backend service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of BackendService resources.

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
    <td>A list of BackendService resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#backendServiceList for lists of backend services. (default: compute#backendServiceList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td></td>
    <td>Returns the specified BackendService resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of BackendService resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified BackendService resource.</td>
</tr>
<tr>
    <td><a href="#set_security_policy"><CopyableCode code="set_security_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview</td>
</tr>
<tr>
    <td><a href="#set_edge_security_policy"><CopyableCode code="set_edge_security_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendService"><code>backendService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the edge security policy for the specified backend service.</td>
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
<tr id="parameter-backendService">
    <td><CopyableCode code="backendService" /></td>
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

Returns the specified BackendService resource.

```sql
SELECT
id,
name,
affinityCookieTtlSec,
backends,
cdnPolicy,
circuitBreakers,
compressionMode,
connectionDraining,
connectionTrackingPolicy,
consistentHash,
creationTimestamp,
customMetrics,
customRequestHeaders,
customResponseHeaders,
description,
edgeSecurityPolicy,
enableCDN,
externalManagedMigrationState,
externalManagedMigrationTestingPercentage,
failoverPolicy,
fingerprint,
haPolicy,
healthChecks,
iap,
ipAddressSelectionPolicy,
kind,
loadBalancingScheme,
localityLbPolicies,
localityLbPolicy,
logConfig,
maxStreamDuration,
metadatas,
network,
outlierDetection,
params,
port,
portName,
protocol,
region,
securityPolicy,
securitySettings,
selfLink,
serviceBindings,
serviceLbPolicy,
sessionAffinity,
strongSessionAffinityCookie,
subsetting,
timeoutSec,
tlsSettings,
usedBy
FROM google.compute.backend_services
WHERE project = '{{ project }}' -- required
AND backendService = '{{ backendService }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of BackendService resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.backend_services
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

Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .

```sql
INSERT INTO google.compute.backend_services (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__backends,
data__healthChecks,
data__timeoutSec,
data__port,
data__protocol,
data__fingerprint,
data__portName,
data__enableCDN,
data__sessionAffinity,
data__affinityCookieTtlSec,
data__region,
data__failoverPolicy,
data__loadBalancingScheme,
data__connectionDraining,
data__iap,
data__cdnPolicy,
data__customRequestHeaders,
data__customResponseHeaders,
data__securityPolicy,
data__edgeSecurityPolicy,
data__logConfig,
data__securitySettings,
data__localityLbPolicy,
data__consistentHash,
data__circuitBreakers,
data__outlierDetection,
data__network,
data__subsetting,
data__connectionTrackingPolicy,
data__maxStreamDuration,
data__compressionMode,
data__serviceLbPolicy,
data__serviceBindings,
data__localityLbPolicies,
data__externalManagedMigrationState,
data__externalManagedMigrationTestingPercentage,
data__ipAddressSelectionPolicy,
data__metadatas,
data__haPolicy,
data__usedBy,
data__strongSessionAffinityCookie,
data__tlsSettings,
data__customMetrics,
data__params,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ selfLink }}',
'{{ backends }}',
'{{ healthChecks }}',
{{ timeoutSec }},
{{ port }},
'{{ protocol }}',
'{{ fingerprint }}',
'{{ portName }}',
{{ enableCDN }},
'{{ sessionAffinity }}',
{{ affinityCookieTtlSec }},
'{{ region }}',
'{{ failoverPolicy }}',
'{{ loadBalancingScheme }}',
'{{ connectionDraining }}',
'{{ iap }}',
'{{ cdnPolicy }}',
'{{ customRequestHeaders }}',
'{{ customResponseHeaders }}',
'{{ securityPolicy }}',
'{{ edgeSecurityPolicy }}',
'{{ logConfig }}',
'{{ securitySettings }}',
'{{ localityLbPolicy }}',
'{{ consistentHash }}',
'{{ circuitBreakers }}',
'{{ outlierDetection }}',
'{{ network }}',
'{{ subsetting }}',
'{{ connectionTrackingPolicy }}',
'{{ maxStreamDuration }}',
'{{ compressionMode }}',
'{{ serviceLbPolicy }}',
'{{ serviceBindings }}',
'{{ localityLbPolicies }}',
'{{ externalManagedMigrationState }}',
{{ externalManagedMigrationTestingPercentage }},
'{{ ipAddressSelectionPolicy }}',
'{{ metadatas }}',
'{{ haPolicy }}',
'{{ usedBy }}',
'{{ strongSessionAffinityCookie }}',
'{{ tlsSettings }}',
'{{ customMetrics }}',
'{{ params }}',
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
- name: backend_services
  props:
    - name: project
      value: string
      description: Required parameter for the backend_services resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of resource. Always compute#backendService for backend services.
        
      default: compute#backendService
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
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: backends
      value: array
      description: >
        The list of backends that serve this BackendService.
        
    - name: healthChecks
      value: array
      description: >
        The list of URLs to the healthChecks, httpHealthChecks (legacy), or httpsHealthChecks (legacy) resource for health checking this backend service. Not all backend services support legacy health checks. See Load balancer guide. Currently, at most one health check can be specified for each backend service. Backend services with instance group or zonal NEG backends must have a health check unless haPolicy is specified. Backend services with internet or serverless NEG backends must not have a health check. healthChecks[] cannot be specified with haPolicy.
        
    - name: timeoutSec
      value: integer
      description: >
        The backend service timeout has a different meaning depending on the type of load balancer. For more information see, Backend service settings. The default is 30 seconds. The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds. This value can be overridden in the PathMatcher configuration of the UrlMap that references this backend service. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. Instead, use maxStreamDuration.
        
    - name: port
      value: integer
      description: >
        Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80. For internal passthrough Network Load Balancers and external passthrough Network Load Balancers, omit port.
        
    - name: protocol
      value: string
      description: >
        The protocol this BackendService uses to communicate with backends. Possible values are HTTP, HTTPS, HTTP2, H2C, TCP, SSL, UDP or GRPC. depending on the chosen load balancer or Traffic Director configuration. Refer to the documentation for the load balancers or for Traffic Director for more information. Must be set to GRPC when the backend service is referenced by a URL map that is bound to target gRPC proxy.
        
      valid_values: ['GRPC', 'H2C', 'HTTP', 'HTTP2', 'HTTPS', 'SSL', 'TCP', 'UDP', 'UNSPECIFIED']
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a BackendService.
        
    - name: portName
      value: string
      description: >
        A named port on a backend instance group representing the port for communication to the backend VMs in that group. The named port must be [defined on each backend instance group](https://cloud.google.com/load-balancing/docs/backend-service#named_ports). This parameter has no meaning if the backends are NEGs. For internal passthrough Network Load Balancers and external passthrough Network Load Balancers, omit port_name.
        
    - name: enableCDN
      value: boolean
      description: >
        If true, enables Cloud CDN for the backend service of a global external Application Load Balancer.
        
    - name: sessionAffinity
      value: string
      description: >
        Type of session affinity to use. The default is NONE. Only NONE and HEADER_FIELD are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. For more details, see: [Session Affinity](https://cloud.google.com/load-balancing/docs/backend-service#session_affinity). sessionAffinity cannot be specified with haPolicy.
        
      valid_values: ['CLIENT_IP', 'CLIENT_IP_NO_DESTINATION', 'CLIENT_IP_PORT_PROTO', 'CLIENT_IP_PROTO', 'GENERATED_COOKIE', 'HEADER_FIELD', 'HTTP_COOKIE', 'NONE', 'STRONG_COOKIE_AFFINITY']
    - name: affinityCookieTtlSec
      value: integer
      description: >
        Lifetime of cookies in seconds. This setting is applicable to Application Load Balancers and Traffic Director and requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600). Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
        
    - name: failoverPolicy
      value: object
      description: >
        Requires at least one backend instance group to be defined as a backup (failover) backend. For load balancers that have configurable failover: [Internal passthrough Network Load Balancers](https://cloud.google.com/load-balancing/docs/internal/failover-overview) and [external passthrough Network Load Balancers](https://cloud.google.com/load-balancing/docs/network/networklb-failover-overview). failoverPolicy cannot be specified with haPolicy.
        
    - name: loadBalancingScheme
      value: string
      description: >
        Specifies the load balancer type. A backend service created for one type of load balancer cannot be used with another. For more information, refer to Choosing a load balancer.
        
      valid_values: ['EXTERNAL', 'EXTERNAL_MANAGED', 'INTERNAL', 'INTERNAL_MANAGED', 'INTERNAL_SELF_MANAGED', 'INVALID_LOAD_BALANCING_SCHEME']
    - name: connectionDraining
      value: object
      description: >
        connectionDraining cannot be specified with haPolicy.
        
    - name: iap
      value: object
      description: >
        The configurations for Identity-Aware Proxy on this resource. Not available for internal passthrough Network Load Balancers and external passthrough Network Load Balancers.
        
    - name: cdnPolicy
      value: object
      description: >
        Cloud CDN configuration for this BackendService. Only available for specified load balancer types.
        
    - name: customRequestHeaders
      value: array
      description: >
        Headers that the load balancer adds to proxied requests. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).
        
    - name: customResponseHeaders
      value: array
      description: >
        Headers that the load balancer adds to proxied responses. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).
        
    - name: securityPolicy
      value: string
      description: >
        [Output Only] The resource URL for the security policy associated with this backend service.
        
    - name: edgeSecurityPolicy
      value: string
      description: >
        [Output Only] The resource URL for the edge security policy associated with this backend service.
        
    - name: logConfig
      value: object
      description: >
        This field denotes the logging options for the load balancer traffic served by this backend service. If logging is enabled, logs will be exported to Stackdriver.
        
    - name: securitySettings
      value: object
      description: >
        This field specifies the security settings that apply to this backend service. This field is applicable to a global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
        
    - name: localityLbPolicy
      value: string
      description: >
        The load balancing algorithm used within the scope of the locality. The possible values are: - ROUND_ROBIN: This is a simple policy in which each healthy backend is selected in round robin order. This is the default. - LEAST_REQUEST: An O(1) algorithm which selects two random healthy hosts and picks the host which has fewer active requests. - RING_HASH: The ring/modulo hash load balancer implements consistent hashing to backends. The algorithm has the property that the addition/removal of a host from a set of N hosts only affects 1/N of the requests. - RANDOM: The load balancer selects a random healthy host. - ORIGINAL_DESTINATION: Backend host is selected based on the client connection metadata, i.e., connections are opened to the same address as the destination address of the incoming connection before the connection was redirected to the load balancer. - MAGLEV: used as a drop in replacement for the ring hash load balancer. Maglev is not as stable as ring hash but has faster table lookup build times and host selection times. For more information about Maglev, see Maglev: A Fast and Reliable Software Network Load Balancer. - WEIGHTED_ROUND_ROBIN: Per-endpoint Weighted Round Robin Load Balancing using weights computed from Backend reported Custom Metrics. If set, the Backend Service responses are expected to contain non-standard HTTP response header field Endpoint-Load-Metrics. The reported metrics to use for computing the weights are specified via the customMetrics field. This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED, INTERNAL_MANAGED, or EXTERNAL_MANAGED. If sessionAffinity is not configured—that is, if session affinity remains at the default value of NONE—then the default value for localityLbPolicy is ROUND_ROBIN. If session affinity is set to a value other than NONE, then the default value for localityLbPolicy is MAGLEV. Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. localityLbPolicy cannot be specified with haPolicy.
        
      valid_values: ['INVALID_LB_POLICY', 'LEAST_REQUEST', 'MAGLEV', 'ORIGINAL_DESTINATION', 'RANDOM', 'RING_HASH', 'ROUND_ROBIN', 'WEIGHTED_GCP_RENDEZVOUS', 'WEIGHTED_MAGLEV', 'WEIGHTED_ROUND_ROBIN']
    - name: consistentHash
      value: object
      description: >
        Consistent Hash-based load balancing can be used to provide soft session affinity based on HTTP headers, cookies or other properties. This load balancing policy is applicable only for HTTP connections. The affinity to a particular destination host will be lost when one or more hosts are added/removed from the destination service. This field specifies parameters that control consistent hashing. This field is only applicable when localityLbPolicy is set to MAGLEV or RING_HASH. This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED. 
        
    - name: circuitBreakers
      value: object
      description: >
        Settings controlling the volume of requests, connections and retries to this backend service.
        
    - name: outlierDetection
      value: object
      description: >
        Settings controlling the ejection of unhealthy backend endpoints from the load balancing pool of each individual proxy instance that processes the traffic for the given backend service. If not set, this feature is considered disabled. Results of the outlier detection algorithm (ejection of endpoints from the load balancing pool and returning them back to the pool) are executed independently by each proxy instance of the load balancer. In most cases, more than one proxy instance handles the traffic received by a backend service. Thus, it is possible that an unhealthy endpoint is detected and ejected by only some of the proxies, and while this happens, other proxies may continue to send requests to the same unhealthy endpoint until they detect and eject the unhealthy endpoint. Applicable backend endpoints can be: - VM instances in an Instance Group - Endpoints in a Zonal NEG (GCE_VM_IP, GCE_VM_IP_PORT) - Endpoints in a Hybrid Connectivity NEG (NON_GCP_PRIVATE_IP_PORT) - Serverless NEGs, that resolve to Cloud Run, App Engine, or Cloud Functions Services - Private Service Connect NEGs, that resolve to Google-managed regional API endpoints or managed services published using Private Service Connect Applicable backend service types can be: - A global backend service with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED. - A regional backend service with the serviceProtocol set to HTTP, HTTPS, HTTP2 or H2C, and loadBalancingScheme set to INTERNAL_MANAGED or EXTERNAL_MANAGED. Not supported for Serverless NEGs. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
        
    - name: network
      value: string
      description: >
        The URL of the network to which this backend service belongs. This field must be set for Internal Passthrough Network Load Balancers when the haPolicy is enabled, and for External Passthrough Network Load Balancers when the haPolicy fastIpMove is enabled. This field can only be specified when the load balancing scheme is set to INTERNAL, or when the load balancing scheme is set to EXTERNAL and haPolicy fastIpMove is enabled.
        
    - name: subsetting
      value: object
      description: >
        subsetting cannot be specified with haPolicy.
        
    - name: connectionTrackingPolicy
      value: object
      description: >
        Connection Tracking configuration for this BackendService. Connection tracking policy settings are only available for external passthrough Network Load Balancers and internal passthrough Network Load Balancers. connectionTrackingPolicy cannot be specified with haPolicy.
        
    - name: maxStreamDuration
      value: object
      description: >
        Specifies the default maximum duration (timeout) for streams to this service. Duration is computed from the beginning of the stream until the response has been completely processed, including all retries. A stream that does not complete in this duration is closed. If not specified, there will be no timeout limit, i.e. the maximum duration is infinite. This value can be overridden in the PathMatcher configuration of the UrlMap that references this backend service. This field is only allowed when the loadBalancingScheme of the backend service is INTERNAL_SELF_MANAGED.
        
    - name: compressionMode
      value: string
      description: >
        Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
        
      valid_values: ['AUTOMATIC', 'DISABLED']
    - name: serviceLbPolicy
      value: string
      description: >
        URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.
        
    - name: serviceBindings
      value: array
      description: >
        URLs of networkservices.ServiceBinding resources. Can only be set if load balancing scheme is INTERNAL_SELF_MANAGED. If set, lists of backends and health checks must be both empty.
        
    - name: localityLbPolicies
      value: array
      description: >
        A list of locality load-balancing policies to be used in order of preference. When you use localityLbPolicies, you must set at least one value for either the localityLbPolicies[].policy or the localityLbPolicies[].customPolicy field. localityLbPolicies overrides any value set in the localityLbPolicy field. For an example of how to use this field, see Define a list of preferred policies. Caution: This field and its children are intended for use in a service mesh that includes gRPC clients only. Envoy proxies can't use backend services that have this configuration.
        
    - name: externalManagedMigrationState
      value: string
      description: >
        Specifies the canary migration state. Possible values are PREPARE, TEST_BY_PERCENTAGE, and TEST_ALL_TRAFFIC. To begin the migration from EXTERNAL to EXTERNAL_MANAGED, the state must be changed to PREPARE. The state must be changed to TEST_ALL_TRAFFIC before the loadBalancingScheme can be changed to EXTERNAL_MANAGED. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate traffic by percentage using externalManagedMigrationTestingPercentage. Rolling back a migration requires the states to be set in reverse order. So changing the scheme from EXTERNAL_MANAGED to EXTERNAL requires the state to be set to TEST_ALL_TRAFFIC at the same time. Optionally, the TEST_BY_PERCENTAGE state can be used to migrate some traffic back to EXTERNAL or PREPARE can be used to migrate all traffic back to EXTERNAL.
        
      valid_values: ['PREPARE', 'TEST_ALL_TRAFFIC', 'TEST_BY_PERCENTAGE']
    - name: externalManagedMigrationTestingPercentage
      value: number
      description: >
        Determines the fraction of requests that should be processed by the Global external Application Load Balancer. The value of this field must be in the range [0, 100]. Session affinity options will slightly affect this routing behavior, for more details, see: Session Affinity. This value can only be set if the loadBalancingScheme in the BackendService is set to EXTERNAL (when using the classic Application Load Balancer) and the migration state is TEST_BY_PERCENTAGE.
        
    - name: ipAddressSelectionPolicy
      value: string
      description: >
        Specifies a preference for traffic sent from the proxy to the backend (or from the client to the backend for proxyless gRPC). The possible values are: - IPV4_ONLY: Only send IPv4 traffic to the backends of the backend service (Instance Group, Managed Instance Group, Network Endpoint Group), regardless of traffic from the client to the proxy. Only IPv4 health checks are used to check the health of the backends. This is the default setting. - PREFER_IPV6: Prioritize the connection to the endpoint's IPv6 address over its IPv4 address (provided there is a healthy IPv6 address). - IPV6_ONLY: Only send IPv6 traffic to the backends of the backend service (Instance Group, Managed Instance Group, Network Endpoint Group), regardless of traffic from the client to the proxy. Only IPv6 health checks are used to check the health of the backends. This field is applicable to either: - Advanced global external Application Load Balancer (load balancing scheme EXTERNAL_MANAGED), - Regional external Application Load Balancer, - Internal proxy Network Load Balancer (load balancing scheme INTERNAL_MANAGED), - Regional internal Application Load Balancer (load balancing scheme INTERNAL_MANAGED), - Traffic Director with Envoy proxies and proxyless gRPC (load balancing scheme INTERNAL_SELF_MANAGED). 
        
      valid_values: ['IPV4_ONLY', 'IPV6_ONLY', 'IP_ADDRESS_SELECTION_POLICY_UNSPECIFIED', 'PREFER_IPV6']
    - name: metadatas
      value: object
      description: >
        Deployment metadata associated with the resource to be set by a GKE hub controller and read by the backend RCTH
        
    - name: haPolicy
      value: object
      description: >
        Configures self-managed High Availability (HA) for External and Internal Protocol Forwarding. The backends of this regional backend service must only specify zonal network endpoint groups (NEGs) of type GCE_VM_IP. When haPolicy is set for an Internal Passthrough Network Load Balancer, the regional backend service must set the network field. All zonal NEGs must belong to the same network. However, individual NEGs can belong to different subnetworks of that network. When haPolicy is specified, the set of attached network endpoints across all backends comprise an High Availability domain from which one endpoint is selected as the active endpoint (the leader) that receives all traffic. haPolicy can be added only at backend service creation time. Once set up, it cannot be deleted. Note that haPolicy is not for load balancing, and therefore cannot be specified with sessionAffinity, connectionTrackingPolicy, and failoverPolicy. haPolicy requires customers to be responsible for tracking backend endpoint health and electing a leader among the healthy endpoints. Therefore, haPolicy cannot be specified with healthChecks. haPolicy can only be specified for External Passthrough Network Load Balancers and Internal Passthrough Network Load Balancers.
        
    - name: usedBy
      value: array
      description: >
        [Output Only] List of resources referencing given backend service.
        
    - name: strongSessionAffinityCookie
      value: object
      description: >
        Describes the HTTP cookie used for stateful session affinity. This field is applicable and required if the sessionAffinity is set to STRONG_COOKIE_AFFINITY.
        
    - name: tlsSettings
      value: object
      description: >
        Configuration for Backend Authenticated TLS and mTLS. May only be specified when the backend protocol is SSL, HTTPS or HTTP2.
        
    - name: customMetrics
      value: array
      description: >
        List of custom metrics that are used for the WEIGHTED_ROUND_ROBIN locality_lb_policy.
        
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

Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

```sql
UPDATE google.compute.backend_services
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__backends = '{{ backends }}',
data__healthChecks = '{{ healthChecks }}',
data__timeoutSec = {{ timeoutSec }},
data__port = {{ port }},
data__protocol = '{{ protocol }}',
data__fingerprint = '{{ fingerprint }}',
data__portName = '{{ portName }}',
data__enableCDN = {{ enableCDN }},
data__sessionAffinity = '{{ sessionAffinity }}',
data__affinityCookieTtlSec = {{ affinityCookieTtlSec }},
data__region = '{{ region }}',
data__failoverPolicy = '{{ failoverPolicy }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__connectionDraining = '{{ connectionDraining }}',
data__iap = '{{ iap }}',
data__cdnPolicy = '{{ cdnPolicy }}',
data__customRequestHeaders = '{{ customRequestHeaders }}',
data__customResponseHeaders = '{{ customResponseHeaders }}',
data__securityPolicy = '{{ securityPolicy }}',
data__edgeSecurityPolicy = '{{ edgeSecurityPolicy }}',
data__logConfig = '{{ logConfig }}',
data__securitySettings = '{{ securitySettings }}',
data__localityLbPolicy = '{{ localityLbPolicy }}',
data__consistentHash = '{{ consistentHash }}',
data__circuitBreakers = '{{ circuitBreakers }}',
data__outlierDetection = '{{ outlierDetection }}',
data__network = '{{ network }}',
data__subsetting = '{{ subsetting }}',
data__connectionTrackingPolicy = '{{ connectionTrackingPolicy }}',
data__maxStreamDuration = '{{ maxStreamDuration }}',
data__compressionMode = '{{ compressionMode }}',
data__serviceLbPolicy = '{{ serviceLbPolicy }}',
data__serviceBindings = '{{ serviceBindings }}',
data__localityLbPolicies = '{{ localityLbPolicies }}',
data__externalManagedMigrationState = '{{ externalManagedMigrationState }}',
data__externalManagedMigrationTestingPercentage = {{ externalManagedMigrationTestingPercentage }},
data__ipAddressSelectionPolicy = '{{ ipAddressSelectionPolicy }}',
data__metadatas = '{{ metadatas }}',
data__haPolicy = '{{ haPolicy }}',
data__usedBy = '{{ usedBy }}',
data__strongSessionAffinityCookie = '{{ strongSessionAffinityCookie }}',
data__tlsSettings = '{{ tlsSettings }}',
data__customMetrics = '{{ customMetrics }}',
data__params = '{{ params }}'
WHERE 
project = '{{ project }}' --required
AND backendService = '{{ backendService }}' --required
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


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

```sql
REPLACE google.compute.backend_services
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__backends = '{{ backends }}',
data__healthChecks = '{{ healthChecks }}',
data__timeoutSec = {{ timeoutSec }},
data__port = {{ port }},
data__protocol = '{{ protocol }}',
data__fingerprint = '{{ fingerprint }}',
data__portName = '{{ portName }}',
data__enableCDN = {{ enableCDN }},
data__sessionAffinity = '{{ sessionAffinity }}',
data__affinityCookieTtlSec = {{ affinityCookieTtlSec }},
data__region = '{{ region }}',
data__failoverPolicy = '{{ failoverPolicy }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__connectionDraining = '{{ connectionDraining }}',
data__iap = '{{ iap }}',
data__cdnPolicy = '{{ cdnPolicy }}',
data__customRequestHeaders = '{{ customRequestHeaders }}',
data__customResponseHeaders = '{{ customResponseHeaders }}',
data__securityPolicy = '{{ securityPolicy }}',
data__edgeSecurityPolicy = '{{ edgeSecurityPolicy }}',
data__logConfig = '{{ logConfig }}',
data__securitySettings = '{{ securitySettings }}',
data__localityLbPolicy = '{{ localityLbPolicy }}',
data__consistentHash = '{{ consistentHash }}',
data__circuitBreakers = '{{ circuitBreakers }}',
data__outlierDetection = '{{ outlierDetection }}',
data__network = '{{ network }}',
data__subsetting = '{{ subsetting }}',
data__connectionTrackingPolicy = '{{ connectionTrackingPolicy }}',
data__maxStreamDuration = '{{ maxStreamDuration }}',
data__compressionMode = '{{ compressionMode }}',
data__serviceLbPolicy = '{{ serviceLbPolicy }}',
data__serviceBindings = '{{ serviceBindings }}',
data__localityLbPolicies = '{{ localityLbPolicies }}',
data__externalManagedMigrationState = '{{ externalManagedMigrationState }}',
data__externalManagedMigrationTestingPercentage = {{ externalManagedMigrationTestingPercentage }},
data__ipAddressSelectionPolicy = '{{ ipAddressSelectionPolicy }}',
data__metadatas = '{{ metadatas }}',
data__haPolicy = '{{ haPolicy }}',
data__usedBy = '{{ usedBy }}',
data__strongSessionAffinityCookie = '{{ strongSessionAffinityCookie }}',
data__tlsSettings = '{{ tlsSettings }}',
data__customMetrics = '{{ customMetrics }}',
data__params = '{{ params }}'
WHERE 
project = '{{ project }}' --required
AND backendService = '{{ backendService }}' --required
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

Deletes the specified BackendService resource.

```sql
DELETE FROM google.compute.backend_services
WHERE project = '{{ project }}' --required
AND backendService = '{{ backendService }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_security_policy"
    values={[
        { label: 'set_security_policy', value: 'set_security_policy' },
        { label: 'set_edge_security_policy', value: 'set_edge_security_policy' }
    ]}
>
<TabItem value="set_security_policy">

Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview

```sql
EXEC google.compute.backend_services.set_security_policy 
@project='{{ project }}' --required, 
@backendService='{{ backendService }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"securityPolicy": "{{ securityPolicy }}"
}';
```
</TabItem>
<TabItem value="set_edge_security_policy">

Sets the edge security policy for the specified backend service.

```sql
EXEC google.compute.backend_services.set_edge_security_policy 
@project='{{ project }}' --required, 
@backendService='{{ backendService }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"securityPolicy": "{{ securityPolicy }}"
}';
```
</TabItem>
</Tabs>
