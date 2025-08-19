--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - aiplatform
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.endpoints" /></td></tr>
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

Models are deployed into it, and afterwards Endpoint is called to obtain predictions and explanations.

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
    <td>Output only. The resource name of the Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="clientConnectionConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations that are applied to the endpoint for online prediction. (id: GoogleCloudAiplatformV1ClientConnectionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedEndpointDns" /></td>
    <td><code>string</code></td>
    <td>Output only. DNS of the dedicated endpoint. Will only be populated if dedicated_endpoint_enabled is true. Depending on the features enabled, uid might be a random number or a string. For example, if fast_tryout is enabled, uid will be fasttryout. Format: `https://&#123;endpoint_id&#125;.&#123;region&#125;-&#123;uid&#125;.prediction.vertexai.goog`.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedEndpointEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS &#123;region&#125;-aiplatform.googleapis.com. The limitation will be removed soon.</td>
</tr>
<tr>
    <td><CopyableCode code="deployedModels" /></td>
    <td><code>array</code></td>
    <td>Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and EndpointService.UndeployModel respectively.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enablePrivateServiceConnect" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: If true, expose the Endpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="gdcConfig" /></td>
    <td><code>object</code></td>
    <td>Configures the Google Distributed Cloud (GDC) environment for online prediction. Only set this field when the Endpoint is to be deployed in a GDC environment. (id: GoogleCloudAiplatformV1GdcConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="genAiAdvancedFeaturesConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for GenAiAdvancedFeatures. If the endpoint is serving GenAI models, advanced features like native RAG integration can be configured. Currently, only Model Garden models are supported. (id: GoogleCloudAiplatformV1GenAiAdvancedFeaturesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="modelDeploymentMonitoringJob" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by JobService.CreateModelDeploymentMonitoringJob. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/modelDeploymentMonitoringJobs/&#123;model_deployment_monitoring_job&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Where `&#123;project&#125;` is a project number, as in `12345`, and `&#123;network&#125;` is network name.</td>
</tr>
<tr>
    <td><CopyableCode code="predictRequestResponseLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Configures the request-response logging for online prediction. (id: GoogleCloudAiplatformV1PredictRequestResponseLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateServiceConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for private service connect. network and private_service_connect_config are mutually exclusive. (id: GoogleCloudAiplatformV1PrivateServiceConnectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficSplit" /></td>
    <td><code>object</code></td>
    <td>A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel. If a DeployedModel's ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Endpoint was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for EndpointService.ListEndpoints.

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
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>List of Endpoints in the requested page.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results. Pass to ListEndpointsRequest.page_token to obtain that page.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Gets an Endpoint.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-gdcZone"><code>gdcZone</code></a></td>
    <td>Lists Endpoints in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-endpointId"><code>endpointId</code></a></td>
    <td>Creates an Endpoint.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Endpoint.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Updates an Endpoint with a long running operation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Deletes an Endpoint.</td>
</tr>
<tr>
    <td><a href="#deploy_model"><CopyableCode code="deploy_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Deploys a Model into this Endpoint, creating a DeployedModel within it.</td>
</tr>
<tr>
    <td><a href="#undeploy_model"><CopyableCode code="undeploy_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.</td>
</tr>
<tr>
    <td><a href="#mutate_deployed_model"><CopyableCode code="mutate_deployed_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `required_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).</td>
</tr>
<tr>
    <td><a href="#predict"><CopyableCode code="predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform an online prediction.</td>
</tr>
<tr>
    <td><a href="#raw_predict"><CopyableCode code="raw_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.</td>
</tr>
<tr>
    <td><a href="#stream_raw_predict"><CopyableCode code="stream_raw_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform a streaming online prediction with an arbitrary HTTP payload.</td>
</tr>
<tr>
    <td><a href="#direct_predict"><CopyableCode code="direct_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks.</td>
</tr>
<tr>
    <td><a href="#direct_raw_predict"><CopyableCode code="direct_raw_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform an unary online prediction request to a gRPC model server for custom containers.</td>
</tr>
<tr>
    <td><a href="#server_streaming_predict"><CopyableCode code="server_streaming_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform a server-side streaming online prediction request for Vertex LLM streaming.</td>
</tr>
<tr>
    <td><a href="#predict_long_running"><CopyableCode code="predict_long_running" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#explain"><CopyableCode code="explain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform an online explanation. If deployed_model_id is specified, the corresponding DeployModel must have explanation_spec populated. If deployed_model_id is not specified, all DeployedModels must have explanation_spec populated.</td>
</tr>
<tr>
    <td><a href="#generate_content"><CopyableCode code="generate_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Generate content with multimodal inputs.</td>
</tr>
<tr>
    <td><a href="#stream_generate_content"><CopyableCode code="stream_generate_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Generate content with multimodal inputs with streaming support.</td>
</tr>
<tr>
    <td><a href="#count_tokens"><CopyableCode code="count_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Perform a token counting.</td>
</tr>
<tr>
    <td><a href="#compute_tokens"><CopyableCode code="compute_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpointsId"><code>endpointsId</code></a></td>
    <td></td>
    <td>Return a list of tokens based on the input text.</td>
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
<tr id="parameter-endpointsId">
    <td><CopyableCode code="endpointsId" /></td>
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
<tr id="parameter-endpointId">
    <td><CopyableCode code="endpointId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gdcZone">
    <td><CopyableCode code="gdcZone" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets an Endpoint.

```sql
SELECT
name,
clientConnectionConfig,
createTime,
dedicatedEndpointDns,
dedicatedEndpointEnabled,
deployedModels,
description,
displayName,
enablePrivateServiceConnect,
encryptionSpec,
etag,
gdcConfig,
genAiAdvancedFeaturesConfig,
labels,
modelDeploymentMonitoringJob,
network,
predictRequestResponseLoggingConfig,
privateServiceConnectConfig,
satisfiesPzi,
satisfiesPzs,
trafficSplit,
updateTime
FROM google.aiplatform.endpoints
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND endpointsId = '{{ endpointsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Endpoints in a Location.

```sql
SELECT
endpoints,
nextPageToken
FROM google.aiplatform.endpoints
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
AND orderBy = '{{ orderBy }}'
AND gdcZone = '{{ gdcZone }}';
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

Creates an Endpoint.

```sql
INSERT INTO google.aiplatform.endpoints (
data__displayName,
data__description,
data__trafficSplit,
data__etag,
data__labels,
data__encryptionSpec,
data__network,
data__enablePrivateServiceConnect,
data__privateServiceConnectConfig,
data__predictRequestResponseLoggingConfig,
data__dedicatedEndpointEnabled,
data__gdcConfig,
data__clientConnectionConfig,
data__genAiAdvancedFeaturesConfig,
projectsId,
locationsId,
endpointId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ trafficSplit }}',
'{{ etag }}',
'{{ labels }}',
'{{ encryptionSpec }}',
'{{ network }}',
{{ enablePrivateServiceConnect }},
'{{ privateServiceConnectConfig }}',
'{{ predictRequestResponseLoggingConfig }}',
{{ dedicatedEndpointEnabled }},
'{{ gdcConfig }}',
'{{ clientConnectionConfig }}',
'{{ genAiAdvancedFeaturesConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ endpointId }}'
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
- name: endpoints
  props:
    - name: projectsId
      value: string
      description: Required parameter for the endpoints resource.
    - name: locationsId
      value: string
      description: Required parameter for the endpoints resource.
    - name: displayName
      value: string
      description: >
        Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: description
      value: string
      description: >
        The description of the Endpoint.
        
    - name: trafficSplit
      value: object
      description: >
        A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel. If a DeployedModel's ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment.
        
    - name: etag
      value: string
      description: >
        Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.
        
    - name: network
      value: string
      description: >
        Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.
        
    - name: enablePrivateServiceConnect
      value: boolean
      description: >
        Deprecated: If true, expose the Endpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set.
        
    - name: privateServiceConnectConfig
      value: object
      description: >
        Optional. Configuration for private service connect. network and private_service_connect_config are mutually exclusive.
        
    - name: predictRequestResponseLoggingConfig
      value: object
      description: >
        Configures the request-response logging for online prediction.
        
    - name: dedicatedEndpointEnabled
      value: boolean
      description: >
        If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.
        
    - name: gdcConfig
      value: object
      description: >
        Configures the Google Distributed Cloud (GDC) environment for online prediction. Only set this field when the Endpoint is to be deployed in a GDC environment.
        
    - name: clientConnectionConfig
      value: object
      description: >
        Configurations that are applied to the endpoint for online prediction.
        
    - name: genAiAdvancedFeaturesConfig
      value: object
      description: >
        Optional. Configuration for GenAiAdvancedFeatures. If the endpoint is serving GenAI models, advanced features like native RAG integration can be configured. Currently, only Model Garden models are supported.
        
    - name: endpointId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="patch">

Updates an Endpoint.

```sql
UPDATE google.aiplatform.endpoints
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__trafficSplit = '{{ trafficSplit }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__network = '{{ network }}',
data__enablePrivateServiceConnect = {{ enablePrivateServiceConnect }},
data__privateServiceConnectConfig = '{{ privateServiceConnectConfig }}',
data__predictRequestResponseLoggingConfig = '{{ predictRequestResponseLoggingConfig }}',
data__dedicatedEndpointEnabled = {{ dedicatedEndpointEnabled }},
data__gdcConfig = '{{ gdcConfig }}',
data__clientConnectionConfig = '{{ clientConnectionConfig }}',
data__genAiAdvancedFeaturesConfig = '{{ genAiAdvancedFeaturesConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND endpointsId = '{{ endpointsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
clientConnectionConfig,
createTime,
dedicatedEndpointDns,
dedicatedEndpointEnabled,
deployedModels,
description,
displayName,
enablePrivateServiceConnect,
encryptionSpec,
etag,
gdcConfig,
genAiAdvancedFeaturesConfig,
labels,
modelDeploymentMonitoringJob,
network,
predictRequestResponseLoggingConfig,
privateServiceConnectConfig,
satisfiesPzi,
satisfiesPzs,
trafficSplit,
updateTime;
```
</TabItem>
<TabItem value="update">

Updates an Endpoint with a long running operation.

```sql
UPDATE google.aiplatform.endpoints
SET 
data__endpoint = '{{ endpoint }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND endpointsId = '{{ endpointsId }}' --required
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

Deletes an Endpoint.

```sql
DELETE FROM google.aiplatform.endpoints
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND endpointsId = '{{ endpointsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deploy_model"
    values={[
        { label: 'deploy_model', value: 'deploy_model' },
        { label: 'undeploy_model', value: 'undeploy_model' },
        { label: 'mutate_deployed_model', value: 'mutate_deployed_model' },
        { label: 'predict', value: 'predict' },
        { label: 'raw_predict', value: 'raw_predict' },
        { label: 'stream_raw_predict', value: 'stream_raw_predict' },
        { label: 'direct_predict', value: 'direct_predict' },
        { label: 'direct_raw_predict', value: 'direct_raw_predict' },
        { label: 'server_streaming_predict', value: 'server_streaming_predict' },
        { label: 'predict_long_running', value: 'predict_long_running' },
        { label: 'explain', value: 'explain' },
        { label: 'generate_content', value: 'generate_content' },
        { label: 'stream_generate_content', value: 'stream_generate_content' },
        { label: 'count_tokens', value: 'count_tokens' },
        { label: 'compute_tokens', value: 'compute_tokens' }
    ]}
>
<TabItem value="deploy_model">

Deploys a Model into this Endpoint, creating a DeployedModel within it.

```sql
EXEC google.aiplatform.endpoints.deploy_model 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"deployedModel": "{{ deployedModel }}", 
"trafficSplit": "{{ trafficSplit }}"
}';
```
</TabItem>
<TabItem value="undeploy_model">

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

```sql
EXEC google.aiplatform.endpoints.undeploy_model 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"deployedModelId": "{{ deployedModelId }}", 
"trafficSplit": "{{ trafficSplit }}"
}';
```
</TabItem>
<TabItem value="mutate_deployed_model">

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `required_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

```sql
EXEC google.aiplatform.endpoints.mutate_deployed_model 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"deployedModel": "{{ deployedModel }}", 
"updateMask": "{{ updateMask }}"
}';
```
</TabItem>
<TabItem value="predict">

Perform an online prediction.

```sql
EXEC google.aiplatform.endpoints.predict 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="raw_predict">

Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.

```sql
EXEC google.aiplatform.endpoints.raw_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
<TabItem value="stream_raw_predict">

Perform a streaming online prediction with an arbitrary HTTP payload.

```sql
EXEC google.aiplatform.endpoints.stream_raw_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
<TabItem value="direct_predict">

Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks.

```sql
EXEC google.aiplatform.endpoints.direct_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"inputs": "{{ inputs }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="direct_raw_predict">

Perform an unary online prediction request to a gRPC model server for custom containers.

```sql
EXEC google.aiplatform.endpoints.direct_raw_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"methodName": "{{ methodName }}", 
"input": "{{ input }}"
}';
```
</TabItem>
<TabItem value="server_streaming_predict">

Perform a server-side streaming online prediction request for Vertex LLM streaming.

```sql
EXEC google.aiplatform.endpoints.server_streaming_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"inputs": "{{ inputs }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="predict_long_running">

This resource represents a long-running operation that is the result of a network API call.

```sql
EXEC google.aiplatform.endpoints.predict_long_running 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="explain">

Perform an online explanation. If deployed_model_id is specified, the corresponding DeployModel must have explanation_spec populated. If deployed_model_id is not specified, all DeployedModels must have explanation_spec populated.

```sql
EXEC google.aiplatform.endpoints.explain 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"parameters": "{{ parameters }}", 
"explanationSpecOverride": "{{ explanationSpecOverride }}", 
"deployedModelId": "{{ deployedModelId }}"
}';
```
</TabItem>
<TabItem value="generate_content">

Generate content with multimodal inputs.

```sql
EXEC google.aiplatform.endpoints.generate_content 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"cachedContent": "{{ cachedContent }}", 
"tools": "{{ tools }}", 
"toolConfig": "{{ toolConfig }}", 
"labels": "{{ labels }}", 
"safetySettings": "{{ safetySettings }}", 
"modelArmorConfig": "{{ modelArmorConfig }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="stream_generate_content">

Generate content with multimodal inputs with streaming support.

```sql
EXEC google.aiplatform.endpoints.stream_generate_content 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"cachedContent": "{{ cachedContent }}", 
"tools": "{{ tools }}", 
"toolConfig": "{{ toolConfig }}", 
"labels": "{{ labels }}", 
"safetySettings": "{{ safetySettings }}", 
"modelArmorConfig": "{{ modelArmorConfig }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="count_tokens">

Perform a token counting.

```sql
EXEC google.aiplatform.endpoints.count_tokens 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"instances": "{{ instances }}", 
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"tools": "{{ tools }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="compute_tokens">

Return a list of tokens based on the input text.

```sql
EXEC google.aiplatform.endpoints.compute_tokens 
@endpointsId='{{ endpointsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"model": "{{ model }}", 
"contents": "{{ contents }}"
}';
```
</TabItem>
</Tabs>
