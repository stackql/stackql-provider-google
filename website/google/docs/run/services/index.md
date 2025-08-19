--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - run
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.services" /></td></tr>
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

Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.

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
    <td>The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="buildConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for building a Cloud Run function. (id: GoogleCloudRunV2BuildConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="client" /></td>
    <td><code>string</code></td>
    <td>Arbitrary identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Arbitrary version identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="customAudiences" /></td>
    <td><code>array</code></td>
    <td>One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultUriDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables public resolution of the default URI of this service.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the Service. This field currently has a 512-character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="iapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. IAP settings on the Service.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress" /></td>
    <td><code>string</code></td>
    <td>Optional. Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.</td>
</tr>
<tr>
    <td><CopyableCode code="invokerIamDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables IAM permission check for run.routes.invoke for callers of this service. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCreatedRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="latestReadyRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRegionSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for multi-region deployment. (id: GoogleCloudRunV2MultiRegionSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revision`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies service-level scaling settings (id: GoogleCloudRunV2ServiceScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Required. The template used to create revisions for this Service. (id: GoogleCloudRunV2RevisionTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
</tr>
<tr>
    <td><CopyableCode code="threatDetectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. True if Cloud Run Threat Detection monitoring is enabled for the parent project of this Service.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Output only. The main URI in which this Service is serving traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="urls" /></td>
    <td><code>array</code></td>
    <td>Output only. All URLs serving traffic for this Service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message containing a list of Services.

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
    <td>A token indicating there are more items than page_size. Use it in the next ListServices request to continue.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>The resulting list of Services.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets information about a Service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Services. Results are sorted by creation time, descending.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Service in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a Service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
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

Gets information about a Service.

```sql
SELECT
name,
annotations,
binaryAuthorization,
buildConfig,
client,
clientVersion,
conditions,
createTime,
creator,
customAudiences,
defaultUriDisabled,
deleteTime,
description,
etag,
expireTime,
generation,
iapEnabled,
ingress,
invokerIamDisabled,
labels,
lastModifier,
latestCreatedRevision,
latestReadyRevision,
launchStage,
multiRegionSettings,
observedGeneration,
reconciling,
satisfiesPzs,
scaling,
template,
terminalCondition,
threatDetectionEnabled,
traffic,
trafficStatuses,
uid,
updateTime,
uri,
urls
FROM google.run.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Services. Results are sorted by creation time, descending.

```sql
SELECT
nextPageToken,
services
FROM google.run.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a new Service in a given project and location.

```sql
INSERT INTO google.run.services (
data__name,
data__description,
data__labels,
data__annotations,
data__client,
data__clientVersion,
data__ingress,
data__launchStage,
data__binaryAuthorization,
data__template,
data__traffic,
data__scaling,
data__invokerIamDisabled,
data__defaultUriDisabled,
data__iapEnabled,
data__multiRegionSettings,
data__customAudiences,
data__buildConfig,
data__etag,
projectsId,
locationsId,
serviceId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ annotations }}',
'{{ client }}',
'{{ clientVersion }}',
'{{ ingress }}',
'{{ launchStage }}',
'{{ binaryAuthorization }}',
'{{ template }}',
'{{ traffic }}',
'{{ scaling }}',
{{ invokerIamDisabled }},
{{ defaultUriDisabled }},
{{ iapEnabled }},
'{{ multiRegionSettings }}',
'{{ customAudiences }}',
'{{ buildConfig }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ serviceId }}',
'{{ validateOnly }}'
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
- name: services
  props:
    - name: projectsId
      value: string
      description: Required parameter for the services resource.
    - name: locationsId
      value: string
      description: Required parameter for the services resource.
    - name: name
      value: string
      description: >
        The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}
        
    - name: description
      value: string
      description: >
        User-provided description of the Service. This field currently has a 512-character limit.
        
    - name: labels
      value: object
      description: >
        Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.
        
    - name: annotations
      value: object
      description: >
        Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules.
        
    - name: client
      value: string
      description: >
        Arbitrary identifier for the API client.
        
    - name: clientVersion
      value: string
      description: >
        Arbitrary version identifier for the API client.
        
    - name: ingress
      value: string
      description: >
        Optional. Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
        
      valid_values: ['INGRESS_TRAFFIC_UNSPECIFIED', 'INGRESS_TRAFFIC_ALL', 'INGRESS_TRAFFIC_INTERNAL_ONLY', 'INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER', 'INGRESS_TRAFFIC_NONE']
    - name: launchStage
      value: string
      description: >
        Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
        
      valid_values: ['LAUNCH_STAGE_UNSPECIFIED', 'UNIMPLEMENTED', 'PRELAUNCH', 'EARLY_ACCESS', 'ALPHA', 'BETA', 'GA', 'DEPRECATED']
    - name: binaryAuthorization
      value: object
      description: >
        Optional. Settings for the Binary Authorization feature.
        
    - name: template
      value: object
      description: >
        Required. The template used to create revisions for this Service.
        
    - name: traffic
      value: array
      description: >
        Optional. Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.
        
    - name: scaling
      value: object
      description: >
        Optional. Specifies service-level scaling settings
        
    - name: invokerIamDisabled
      value: boolean
      description: >
        Optional. Disables IAM permission check for run.routes.invoke for callers of this service. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.
        
    - name: defaultUriDisabled
      value: boolean
      description: >
        Optional. Disables public resolution of the default URI of this service.
        
    - name: iapEnabled
      value: boolean
      description: >
        Optional. IAP settings on the Service.
        
    - name: multiRegionSettings
      value: object
      description: >
        Optional. Settings for multi-region deployment.
        
    - name: customAudiences
      value: array
      description: >
        One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
        
    - name: buildConfig
      value: object
      description: >
        Optional. Configuration for building a Cloud Run function.
        
    - name: etag
      value: string
      description: >
        Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
        
    - name: serviceId
      value: string
    - name: validateOnly
      value: boolean
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

Updates a Service.

```sql
UPDATE google.run.services
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}',
data__client = '{{ client }}',
data__clientVersion = '{{ clientVersion }}',
data__ingress = '{{ ingress }}',
data__launchStage = '{{ launchStage }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__template = '{{ template }}',
data__traffic = '{{ traffic }}',
data__scaling = '{{ scaling }}',
data__invokerIamDisabled = {{ invokerIamDisabled }},
data__defaultUriDisabled = {{ defaultUriDisabled }},
data__iapEnabled = {{ iapEnabled }},
data__multiRegionSettings = '{{ multiRegionSettings }}',
data__customAudiences = '{{ customAudiences }}',
data__buildConfig = '{{ buildConfig }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
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

Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.

```sql
DELETE FROM google.run.services
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
