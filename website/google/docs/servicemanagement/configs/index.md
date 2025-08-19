--- 
title: configs
hide_title: false
hide_table_of_contents: false
keywords:
  - configs
  - servicemanagement
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

Creates, updates, deletes, gets or lists a <code>configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicemanagement.configs" /></td></tr>
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

`Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth

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
    <td>A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.</td>
</tr>
<tr>
    <td><CopyableCode code="apis" /></td>
    <td><code>array</code></td>
    <td>A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.</td>
</tr>
<tr>
    <td><CopyableCode code="aspects" /></td>
    <td><code>array</code></td>
    <td>Configuration aspects. This is a repeated field to allow multiple aspects to be configured. The kind field in each ConfigAspect specifies the type of aspect. The spec field contains the configuration for that aspect. The schema for the spec field is defined by the backend service owners.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication" /></td>
    <td><code>object</code></td>
    <td>Auth configuration. (id: Authentication)</td>
</tr>
<tr>
    <td><CopyableCode code="backend" /></td>
    <td><code>object</code></td>
    <td>API backend configuration. (id: Backend)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>Billing configuration. (id: Billing)</td>
</tr>
<tr>
    <td><CopyableCode code="configVersion" /></td>
    <td><code>integer (uint32)</code></td>
    <td>Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>object</code></td>
    <td>Context configuration. (id: Context)</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>object</code></td>
    <td>Configuration for the service control plane. (id: Control)</td>
</tr>
<tr>
    <td><CopyableCode code="customError" /></td>
    <td><code>object</code></td>
    <td>Custom error configuration. (id: CustomError)</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Additional API documentation. (id: Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="enums" /></td>
    <td><code>array</code></td>
    <td>A list of all enum types included in this API service. Enums referenced directly or indirectly by the `apis` are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum</td>
</tr>
<tr>
    <td><CopyableCode code="http" /></td>
    <td><code>object</code></td>
    <td>HTTP configuration. (id: Http)</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Logging configuration. (id: Logging)</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>array</code></td>
    <td>Defines the logs used by this service.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Defines the metrics used by this service.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoredResources" /></td>
    <td><code>array</code></td>
    <td>Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration. (id: Monitoring)</td>
</tr>
<tr>
    <td><CopyableCode code="producerProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google project that owns this service.</td>
</tr>
<tr>
    <td><CopyableCode code="publishing" /></td>
    <td><code>object</code></td>
    <td>Settings for [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from APIs defined as protocol buffers. (id: Publishing)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Quota configuration. (id: Quota)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The source information for this configuration if available. (id: SourceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="systemParameters" /></td>
    <td><code>object</code></td>
    <td>System parameter configuration. (id: SystemParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTypes" /></td>
    <td><code>array</code></td>
    <td>A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The product title for this service, it is the name displayed in Google Cloud Console.</td>
</tr>
<tr>
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included. Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling usage of this service. (id: Usage)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListServiceConfigs method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token of the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of service configuration resources.</td>
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
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-configId"><code>configId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a service configuration (version) for a managed service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the history of the service configuration for a managed service, from the newest to the oldest.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.</td>
</tr>
<tr>
    <td><a href="#submit"><CopyableCode code="submit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation</td>
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
<tr id="parameter-configId">
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
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

Gets a service configuration (version) for a managed service.

```sql
SELECT
id,
name,
apis,
aspects,
authentication,
backend,
billing,
configVersion,
context,
control,
customError,
documentation,
endpoints,
enums,
http,
logging,
logs,
metrics,
monitoredResources,
monitoring,
producerProjectId,
publishing,
quota,
sourceInfo,
systemParameters,
systemTypes,
title,
types,
usage
FROM google.servicemanagement.configs
WHERE serviceName = '{{ serviceName }}' -- required
AND configId = '{{ configId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists the history of the service configuration for a managed service, from the newest to the oldest.

```sql
SELECT
nextPageToken,
serviceConfigs
FROM google.servicemanagement.configs
WHERE serviceName = '{{ serviceName }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
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

Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.

```sql
INSERT INTO google.servicemanagement.configs (
data__name,
data__title,
data__producerProjectId,
data__id,
data__apis,
data__types,
data__enums,
data__documentation,
data__backend,
data__http,
data__quota,
data__authentication,
data__context,
data__usage,
data__customError,
data__endpoints,
data__control,
data__logs,
data__metrics,
data__monitoredResources,
data__billing,
data__logging,
data__monitoring,
data__systemParameters,
data__sourceInfo,
data__publishing,
data__systemTypes,
data__aspects,
data__configVersion,
serviceName
)
SELECT 
'{{ name }}',
'{{ title }}',
'{{ producerProjectId }}',
'{{ id }}',
'{{ apis }}',
'{{ types }}',
'{{ enums }}',
'{{ documentation }}',
'{{ backend }}',
'{{ http }}',
'{{ quota }}',
'{{ authentication }}',
'{{ context }}',
'{{ usage }}',
'{{ customError }}',
'{{ endpoints }}',
'{{ control }}',
'{{ logs }}',
'{{ metrics }}',
'{{ monitoredResources }}',
'{{ billing }}',
'{{ logging }}',
'{{ monitoring }}',
'{{ systemParameters }}',
'{{ sourceInfo }}',
'{{ publishing }}',
'{{ systemTypes }}',
'{{ aspects }}',
{{ configVersion }},
'{{ serviceName }}'
RETURNING
id,
name,
apis,
aspects,
authentication,
backend,
billing,
configVersion,
context,
control,
customError,
documentation,
endpoints,
enums,
http,
logging,
logs,
metrics,
monitoredResources,
monitoring,
producerProjectId,
publishing,
quota,
sourceInfo,
systemParameters,
systemTypes,
title,
types,
usage
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: configs
  props:
    - name: serviceName
      value: string
      description: Required parameter for the configs resource.
    - name: name
      value: string
      description: >
        The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.
        
    - name: title
      value: string
      description: >
        The product title for this service, it is the name displayed in Google Cloud Console.
        
    - name: producerProjectId
      value: string
      description: >
        The Google project that owns this service.
        
    - name: id
      value: string
      description: >
        A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead.
        
    - name: apis
      value: array
      description: >
        A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.
        
    - name: types
      value: array
      description: >
        A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included. Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32
        
    - name: enums
      value: array
      description: >
        A list of all enum types included in this API service. Enums referenced directly or indirectly by the `apis` are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum
        
    - name: documentation
      value: object
      description: >
        Additional API documentation.
        
    - name: backend
      value: object
      description: >
        API backend configuration.
        
    - name: http
      value: object
      description: >
        HTTP configuration.
        
    - name: quota
      value: object
      description: >
        Quota configuration.
        
    - name: authentication
      value: object
      description: >
        Auth configuration.
        
    - name: context
      value: object
      description: >
        Context configuration.
        
    - name: usage
      value: object
      description: >
        Configuration controlling usage of this service.
        
    - name: customError
      value: object
      description: >
        Custom error configuration.
        
    - name: endpoints
      value: array
      description: >
        Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.
        
    - name: control
      value: object
      description: >
        Configuration for the service control plane.
        
    - name: logs
      value: array
      description: >
        Defines the logs used by this service.
        
    - name: metrics
      value: array
      description: >
        Defines the metrics used by this service.
        
    - name: monitoredResources
      value: array
      description: >
        Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.
        
    - name: billing
      value: object
      description: >
        Billing configuration.
        
    - name: logging
      value: object
      description: >
        Logging configuration.
        
    - name: monitoring
      value: object
      description: >
        Monitoring configuration.
        
    - name: systemParameters
      value: object
      description: >
        System parameter configuration.
        
    - name: sourceInfo
      value: object
      description: >
        Output only. The source information for this configuration if available.
        
    - name: publishing
      value: object
      description: >
        Settings for [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from APIs defined as protocol buffers.
        
    - name: systemTypes
      value: array
      description: >
        A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.
        
    - name: aspects
      value: array
      description: >
        Configuration aspects. This is a repeated field to allow multiple aspects to be configured. The kind field in each ConfigAspect specifies the type of aspect. The spec field contains the configuration for that aspect. The schema for the spec field is defined by the backend service owners.
        
    - name: configVersion
      value: integer
      description: >
        Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="submit"
    values={[
        { label: 'submit', value: 'submit' }
    ]}
>
<TabItem value="submit">

Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation

```sql
EXEC google.servicemanagement.configs.submit 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"configSource": "{{ configSource }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
</Tabs>
