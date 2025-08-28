--- 
title: authz_extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - authz_extensions
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

Creates, updates, deletes, gets or lists an <code>authz_extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>authz_extensions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.authz_extensions" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/authzExtensions/&#123;authz_extension&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authority" /></td>
    <td><code>string</code></td>
    <td>Required. The `:authority` header in the gRPC request sent from Envoy to the extension service.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="failOpen" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardHeaders" /></td>
    <td><code>array</code></td>
    <td>Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `AuthzExtension` resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingScheme" /></td>
    <td><code>string</code></td>
    <td>Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.`. The following variables are supported in the metadata Struct: `&#123;forwarding_rule_id&#125;` - substituted with the forwarding rule's fully qualified resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/regions/&#123;region&#125;/backendServices/&#123;backendService&#125;` or `https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/global/backendServices/&#123;backendService&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="wireFormat" /></td>
    <td><code>string</code></td>
    <td>Optional. The format of communication supported by the callout extension. If not specified, the default value `EXT_PROC_GRPC` is used.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/authzExtensions/&#123;authz_extension&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authority" /></td>
    <td><code>string</code></td>
    <td>Required. The `:authority` header in the gRPC request sent from Envoy to the extension service.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="failOpen" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardHeaders" /></td>
    <td><code>array</code></td>
    <td>Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `AuthzExtension` resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingScheme" /></td>
    <td><code>string</code></td>
    <td>Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.`. The following variables are supported in the metadata Struct: `&#123;forwarding_rule_id&#125;` - substituted with the forwarding rule's fully qualified resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/regions/&#123;region&#125;/backendServices/&#123;backendService&#125;` or `https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/global/backendServices/&#123;backendService&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="wireFormat" /></td>
    <td><code>string</code></td>
    <td>Optional. The format of communication supported by the callout extension. If not specified, the default value `EXT_PROC_GRPC` is used.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzExtensionsId"><code>authzExtensionsId</code></a></td>
    <td></td>
    <td>Gets details of the specified `AuthzExtension` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists `AuthzExtension` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-authzExtensionId"><code>authzExtensionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new `AuthzExtension` resource in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzExtensionsId"><code>authzExtensionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of the specified `AuthzExtension` resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzExtensionsId"><code>authzExtensionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified `AuthzExtension` resource.</td>
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
<tr id="parameter-authzExtensionsId">
    <td><CopyableCode code="authzExtensionsId" /></td>
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
<tr id="parameter-authzExtensionId">
    <td><CopyableCode code="authzExtensionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of the specified `AuthzExtension` resource.

```sql
SELECT
name,
authority,
createTime,
description,
failOpen,
forwardHeaders,
labels,
loadBalancingScheme,
metadata,
service,
timeout,
updateTime,
wireFormat
FROM google.networkservices.authz_extensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authzExtensionsId = '{{ authzExtensionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists `AuthzExtension` resources in a given project and location.

```sql
SELECT
name,
authority,
createTime,
description,
failOpen,
forwardHeaders,
labels,
loadBalancingScheme,
metadata,
service,
timeout,
updateTime,
wireFormat
FROM google.networkservices.authz_extensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new `AuthzExtension` resource in a given project and location.

```sql
INSERT INTO google.networkservices.authz_extensions (
data__name,
data__description,
data__labels,
data__loadBalancingScheme,
data__authority,
data__service,
data__timeout,
data__failOpen,
data__metadata,
data__forwardHeaders,
data__wireFormat,
projectsId,
locationsId,
authzExtensionId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ loadBalancingScheme }}',
'{{ authority }}',
'{{ service }}',
'{{ timeout }}',
{{ failOpen }},
'{{ metadata }}',
'{{ forwardHeaders }}',
'{{ wireFormat }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authzExtensionId }}',
'{{ requestId }}'
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
- name: authz_extensions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the authz_extensions resource.
    - name: locationsId
      value: string
      description: Required parameter for the authz_extensions resource.
    - name: name
      value: string
      description: >
        Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`.
        
    - name: description
      value: string
      description: >
        Optional. A human-readable description of the resource.
        
    - name: labels
      value: object
      description: >
        Optional. Set of labels associated with the `AuthzExtension` resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources.
        
    - name: loadBalancingScheme
      value: string
      description: >
        Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).
        
      valid_values: ['LOAD_BALANCING_SCHEME_UNSPECIFIED', 'INTERNAL_MANAGED', 'EXTERNAL_MANAGED']
    - name: authority
      value: string
      description: >
        Required. The `:authority` header in the gRPC request sent from Envoy to the extension service.
        
    - name: service
      value: string
      description: >
        Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`.
        
    - name: timeout
      value: string
      description: >
        Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.
        
    - name: failOpen
      value: boolean
      description: >
        Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset.
        
    - name: metadata
      value: object
      description: >
        Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.`. The following variables are supported in the metadata Struct: `{forwarding_rule_id}` - substituted with the forwarding rule's fully qualified resource name.
        
    - name: forwardHeaders
      value: array
      description: >
        Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name.
        
    - name: wireFormat
      value: string
      description: >
        Optional. The format of communication supported by the callout extension. If not specified, the default value `EXT_PROC_GRPC` is used.
        
      valid_values: ['WIRE_FORMAT_UNSPECIFIED', 'EXT_PROC_GRPC', 'EXT_AUTHZ_GRPC']
    - name: authzExtensionId
      value: string
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

Updates the parameters of the specified `AuthzExtension` resource.

```sql
UPDATE google.networkservices.authz_extensions
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__authority = '{{ authority }}',
data__service = '{{ service }}',
data__timeout = '{{ timeout }}',
data__failOpen = {{ failOpen }},
data__metadata = '{{ metadata }}',
data__forwardHeaders = '{{ forwardHeaders }}',
data__wireFormat = '{{ wireFormat }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authzExtensionsId = '{{ authzExtensionsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes the specified `AuthzExtension` resource.

```sql
DELETE FROM google.networkservices.authz_extensions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authzExtensionsId = '{{ authzExtensionsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
