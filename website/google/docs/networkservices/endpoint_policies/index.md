--- 
title: endpoint_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_policies
  - networkservices
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

Creates, updates, deletes, gets or lists an <code>endpoint_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>endpoint_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.endpoint_policies" /></td></tr>
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

EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.

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
    <td>Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/&#123;project&#125;/locations/global/endpointPolicies/&#123;endpoint_policy&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="clientTlsPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointMatcher" /></td>
    <td><code>object</code></td>
    <td>Required. A matcher that selects endpoints to which the policies should be applied. (id: EndpointMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the EndpointPolicy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverTlsPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficPortSelector" /></td>
    <td><code>object</code></td>
    <td>Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports. (id: TrafficPortSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of endpoint policy. This is primarily used to validate the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response returned by the ListEndpointPolicies method.

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
    <td><CopyableCode code="endpointPolicies" /></td>
    <td><code>array</code></td>
    <td>List of EndpointPolicy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointPoliciesId"><code>endpointPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single EndpointPolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists EndpointPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-endpointPolicyId"><code>endpointPolicyId</code></a></td>
    <td>Creates a new EndpointPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointPoliciesId"><code>endpointPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single EndpointPolicy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointPoliciesId"><code>endpointPoliciesId</code></a></td>
    <td></td>
    <td>Deletes a single EndpointPolicy.</td>
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
<tr id="parameter-endpointPoliciesId">
    <td><CopyableCode code="endpointPoliciesId" /></td>
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
<tr id="parameter-endpointPolicyId">
    <td><CopyableCode code="endpointPolicyId" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single EndpointPolicy.

```sql
SELECT
name,
authorizationPolicy,
clientTlsPolicy,
createTime,
description,
endpointMatcher,
labels,
serverTlsPolicy,
trafficPortSelector,
type,
updateTime
FROM google.networkservices.endpoint_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND endpointPoliciesId = '{{ endpointPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists EndpointPolicies in a given project and location.

```sql
SELECT
endpointPolicies,
nextPageToken,
unreachable
FROM google.networkservices.endpoint_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new EndpointPolicy in a given project and location.

```sql
INSERT INTO google.networkservices.endpoint_policies (
data__name,
data__labels,
data__type,
data__authorizationPolicy,
data__endpointMatcher,
data__trafficPortSelector,
data__description,
data__serverTlsPolicy,
data__clientTlsPolicy,
projectsId,
locationsId,
endpointPolicyId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ type }}',
'{{ authorizationPolicy }}',
'{{ endpointMatcher }}',
'{{ trafficPortSelector }}',
'{{ description }}',
'{{ serverTlsPolicy }}',
'{{ clientTlsPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ endpointPolicyId }}'
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
- name: endpoint_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the endpoint_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the endpoint_policies resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
        
    - name: labels
      value: object
      description: >
        Optional. Set of label tags associated with the EndpointPolicy resource.
        
    - name: type
      value: string
      description: >
        Required. The type of endpoint policy. This is primarily used to validate the configuration.
        
      valid_values: ['ENDPOINT_POLICY_TYPE_UNSPECIFIED', 'SIDECAR_PROXY', 'GRPC_SERVER']
    - name: authorizationPolicy
      value: string
      description: >
        Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
        
    - name: endpointMatcher
      value: object
      description: >
        Required. A matcher that selects endpoints to which the policies should be applied.
        
    - name: trafficPortSelector
      value: object
      description: >
        Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
        
    - name: description
      value: string
      description: >
        Optional. A free-text description of the resource. Max length 1024 characters.
        
    - name: serverTlsPolicy
      value: string
      description: >
        Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
        
    - name: clientTlsPolicy
      value: string
      description: >
        Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
        
    - name: endpointPolicyId
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

Updates the parameters of a single EndpointPolicy.

```sql
UPDATE google.networkservices.endpoint_policies
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__type = '{{ type }}',
data__authorizationPolicy = '{{ authorizationPolicy }}',
data__endpointMatcher = '{{ endpointMatcher }}',
data__trafficPortSelector = '{{ trafficPortSelector }}',
data__description = '{{ description }}',
data__serverTlsPolicy = '{{ serverTlsPolicy }}',
data__clientTlsPolicy = '{{ clientTlsPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND endpointPoliciesId = '{{ endpointPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a single EndpointPolicy.

```sql
DELETE FROM google.networkservices.endpoint_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND endpointPoliciesId = '{{ endpointPoliciesId }}' --required;
```
</TabItem>
</Tabs>
