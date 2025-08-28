--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - integrations
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_connections_list"
    values={[
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_list">

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
    <td>Output only. Resource name of the Connection. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="asyncOperationsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Async operations enabled for the connection. If Async Operations is enabled, Connection allows the customers to initiate async long running operations using the actions API.</td>
</tr>
<tr>
    <td><CopyableCode code="authConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for establishing the connection's authentication with an external system. (id: GoogleCloudConnectorsV1AuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authOverrideEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Auth override enabled for the connection. If Auth Override is enabled, Connection allows the backend service auth to be overridden in the entities/actions API.</td>
</tr>
<tr>
    <td><CopyableCode code="billingConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Billing config for the connection. (id: GoogleCloudConnectorsV1BillingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="configVariables" /></td>
    <td><code>array</code></td>
    <td>Optional. Configuration for configuring the connection with an external system.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionRevision" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Connection revision. This field is only updated when the connection is created or updated by User.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorVersion" /></td>
    <td><code>string</code></td>
    <td>Required. Connector version on which the connection is created. The format is: projects/*/locations/*/providers/*/connectors/*/versions/* Only global location is supported for ConnectorVersion resource.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorVersionInfraConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Infra configs supported by Connector Version. (id: GoogleCloudConnectorsV1ConnectorVersionInfraConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorVersionLaunchStage" /></td>
    <td><code>string</code></td>
    <td>Output only. Flag to mark the version indicating the launch stage.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Created time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s).</td>
</tr>
<tr>
    <td><CopyableCode code="envoyImageLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. GCR location where the envoy image is stored. formatted like: gcr.io/&#123;bucketName&#125;/&#123;imageName&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="euaOauthAuthConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional Oauth2.0 Auth config for EUA. If the connection is configured using non-OAuth authentication but OAuth needs to be used for EUA, this field can be populated with the OAuth config. This should be a OAuth2AuthCodeFlow Auth type only. (id: GoogleCloudConnectorsV1AuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="eventingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Eventing config of a connection (id: GoogleCloudConnectorsV1EventingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="eventingEnablementType" /></td>
    <td><code>string</code></td>
    <td>Optional. Eventing enablement type. Will be nil if eventing is not enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="eventingRuntimeData" /></td>
    <td><code>object</code></td>
    <td>Output only. Eventing Runtime Data. (id: GoogleCloudConnectorsV1EventingRuntimeData)</td>
</tr>
<tr>
    <td><CopyableCode code="fallbackOnAdminCredentials" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Fallback on admin credentials for the connection. If this both auth_override_enabled and fallback_on_admin_credentials are set to true, the connection will use the admin credentials if the dynamic auth header is not present during auth override.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Hostname of the Service Directory service with TLS.</td>
</tr>
<tr>
    <td><CopyableCode code="imageLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. GCR location where the runtime image is stored. formatted like: gcr.io/&#123;bucketName&#125;/&#123;imageName&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="isTrustedTester" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is trusted tester program enabled for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="lockConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration that indicates whether or not the Connection can be edited. (id: GoogleCloudConnectorsV1LockConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Log configuration for the connection. (id: GoogleCloudConnectorsV1LogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Node configuration for the connection. (id: GoogleCloudConnectorsV1NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. Service account needed for runtime plane to access Google Cloud resources.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectory" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"</td>
</tr>
<tr>
    <td><CopyableCode code="sslConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Ssl config of a connection (id: GoogleCloudConnectorsV1SslConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Current status of the connection. (id: GoogleCloudConnectorsV1ConnectionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. This subscription type enum states the subscription type of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Suspended indicates if a user has suspended a connection or not.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsServiceDirectory" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Service Directory service with TLS.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficShapingConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Traffic shaping configuration for the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Updated time.</td>
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
    <td><a href="#projects_locations_connections_list"><CopyableCode code="projects_locations_connections_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Connections in a given project and location.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_connections_list"
    values={[
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_list">

Lists Connections in a given project and location.

```sql
SELECT
name,
asyncOperationsEnabled,
authConfig,
authOverrideEnabled,
billingConfig,
configVariables,
connectionRevision,
connectorVersion,
connectorVersionInfraConfig,
connectorVersionLaunchStage,
createTime,
description,
destinationConfigs,
envoyImageLocation,
euaOauthAuthConfig,
eventingConfig,
eventingEnablementType,
eventingRuntimeData,
fallbackOnAdminCredentials,
host,
imageLocation,
isTrustedTester,
labels,
lockConfig,
logConfig,
nodeConfig,
serviceAccount,
serviceDirectory,
sslConfig,
status,
subscriptionType,
suspended,
tlsServiceDirectory,
trafficShapingConfigs,
updateTime
FROM google.integrations.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
