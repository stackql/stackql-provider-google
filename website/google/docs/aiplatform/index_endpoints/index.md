--- 
title: index_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - index_endpoints
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

Creates, updates, deletes, gets or lists an <code>index_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>index_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.index_endpoints" /></td></tr>
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

Indexes are deployed into it. An IndexEndpoint can have multiple DeployedIndexes.

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
    <td>Output only. The resource name of the IndexEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this IndexEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployedIndexes" /></td>
    <td><code>array</code></td>
    <td>Output only. The indexes deployed in this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the IndexEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the IndexEndpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enablePrivateServiceConnect" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Deprecated: If true, expose the IndexEndpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Immutable. Customer-managed encryption key spec for an IndexEndpoint. If set, this IndexEndpoint and all sub-resources of this IndexEndpoint will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your IndexEndpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the IndexEndpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. network and private_service_connect_config are mutually exclusive. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Where &#123;project&#125; is a project number, as in '12345', and &#123;network&#125; is network name.</td>
</tr>
<tr>
    <td><CopyableCode code="privateServiceConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for private service connect. network and private_service_connect_config are mutually exclusive. (id: GoogleCloudAiplatformV1PrivateServiceConnectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="publicEndpointDomainName" /></td>
    <td><code>string</code></td>
    <td>Output only. If public_endpoint_enabled is true, this field will be populated with the domain name to use for this index endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="publicEndpointEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the deployed index will be accessible through public endpoint.</td>
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
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this IndexEndpoint was last updated. This timestamp is not updated when the endpoint's DeployedIndexes are updated, e.g. due to updates of the original Indexes they are the deployments of.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for IndexEndpointService.ListIndexEndpoints.

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
    <td><CopyableCode code="indexEndpoints" /></td>
    <td><code>array</code></td>
    <td>List of IndexEndpoints in the requested page.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass to ListIndexEndpointsRequest.page_token to obtain that page.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Gets an IndexEndpoint.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists IndexEndpoints in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an IndexEndpoint.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an IndexEndpoint.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Deletes an IndexEndpoint.</td>
</tr>
<tr>
    <td><a href="#deploy_index"><CopyableCode code="deploy_index" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Deploys an Index into this IndexEndpoint, creating a DeployedIndex within it.</td>
</tr>
<tr>
    <td><a href="#undeploy_index"><CopyableCode code="undeploy_index" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from it, and freeing all resources it's using.</td>
</tr>
<tr>
    <td><a href="#mutate_deployed_index"><CopyableCode code="mutate_deployed_index" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Update an existing DeployedIndex under an IndexEndpoint.</td>
</tr>
<tr>
    <td><a href="#find_neighbors"><CopyableCode code="find_neighbors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Finds the nearest neighbors of each vector within the request.</td>
</tr>
<tr>
    <td><a href="#read_index_datapoints"><CopyableCode code="read_index_datapoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-indexEndpointsId"><code>indexEndpointsId</code></a></td>
    <td></td>
    <td>Reads the datapoints/vectors of the given IDs. A maximum of 1000 datapoints can be retrieved in a batch.</td>
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
<tr id="parameter-indexEndpointsId">
    <td><CopyableCode code="indexEndpointsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets an IndexEndpoint.

```sql
SELECT
name,
createTime,
deployedIndexes,
description,
displayName,
enablePrivateServiceConnect,
encryptionSpec,
etag,
labels,
network,
privateServiceConnectConfig,
publicEndpointDomainName,
publicEndpointEnabled,
satisfiesPzi,
satisfiesPzs,
updateTime
FROM google.aiplatform.index_endpoints
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND indexEndpointsId = '{{ indexEndpointsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists IndexEndpoints in a Location.

```sql
SELECT
indexEndpoints,
nextPageToken
FROM google.aiplatform.index_endpoints
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
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

Creates an IndexEndpoint.

```sql
INSERT INTO google.aiplatform.index_endpoints (
data__displayName,
data__description,
data__etag,
data__labels,
data__network,
data__enablePrivateServiceConnect,
data__privateServiceConnectConfig,
data__publicEndpointEnabled,
data__encryptionSpec,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ etag }}',
'{{ labels }}',
'{{ network }}',
{{ enablePrivateServiceConnect }},
'{{ privateServiceConnectConfig }}',
{{ publicEndpointEnabled }},
'{{ encryptionSpec }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: index_endpoints
  props:
    - name: projectsId
      value: string
      description: Required parameter for the index_endpoints resource.
    - name: locationsId
      value: string
      description: Required parameter for the index_endpoints resource.
    - name: displayName
      value: string
      description: >
        Required. The display name of the IndexEndpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: description
      value: string
      description: >
        The description of the IndexEndpoint.
        
    - name: etag
      value: string
      description: >
        Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your IndexEndpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: network
      value: string
      description: >
        Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the IndexEndpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. network and private_service_connect_config are mutually exclusive. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where {project} is a project number, as in '12345', and {network} is network name.
        
    - name: enablePrivateServiceConnect
      value: boolean
      description: >
        Optional. Deprecated: If true, expose the IndexEndpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set.
        
    - name: privateServiceConnectConfig
      value: object
      description: >
        Optional. Configuration for private service connect. network and private_service_connect_config are mutually exclusive.
        
    - name: publicEndpointEnabled
      value: boolean
      description: >
        Optional. If true, the deployed index will be accessible through public endpoint.
        
    - name: encryptionSpec
      value: object
      description: >
        Immutable. Customer-managed encryption key spec for an IndexEndpoint. If set, this IndexEndpoint and all sub-resources of this IndexEndpoint will be secured by this key.
        
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

Updates an IndexEndpoint.

```sql
UPDATE google.aiplatform.index_endpoints
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__enablePrivateServiceConnect = {{ enablePrivateServiceConnect }},
data__privateServiceConnectConfig = '{{ privateServiceConnectConfig }}',
data__publicEndpointEnabled = {{ publicEndpointEnabled }},
data__encryptionSpec = '{{ encryptionSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND indexEndpointsId = '{{ indexEndpointsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
deployedIndexes,
description,
displayName,
enablePrivateServiceConnect,
encryptionSpec,
etag,
labels,
network,
privateServiceConnectConfig,
publicEndpointDomainName,
publicEndpointEnabled,
satisfiesPzi,
satisfiesPzs,
updateTime;
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

Deletes an IndexEndpoint.

```sql
DELETE FROM google.aiplatform.index_endpoints
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND indexEndpointsId = '{{ indexEndpointsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deploy_index"
    values={[
        { label: 'deploy_index', value: 'deploy_index' },
        { label: 'undeploy_index', value: 'undeploy_index' },
        { label: 'mutate_deployed_index', value: 'mutate_deployed_index' },
        { label: 'find_neighbors', value: 'find_neighbors' },
        { label: 'read_index_datapoints', value: 'read_index_datapoints' }
    ]}
>
<TabItem value="deploy_index">

Deploys an Index into this IndexEndpoint, creating a DeployedIndex within it.

```sql
EXEC google.aiplatform.index_endpoints.deploy_index 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@indexEndpointsId='{{ indexEndpointsId }}' --required 
@@json=
'{
"deployedIndex": "{{ deployedIndex }}"
}';
```
</TabItem>
<TabItem value="undeploy_index">

Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from it, and freeing all resources it's using.

```sql
EXEC google.aiplatform.index_endpoints.undeploy_index 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@indexEndpointsId='{{ indexEndpointsId }}' --required 
@@json=
'{
"deployedIndexId": "{{ deployedIndexId }}"
}';
```
</TabItem>
<TabItem value="mutate_deployed_index">

Update an existing DeployedIndex under an IndexEndpoint.

```sql
EXEC google.aiplatform.index_endpoints.mutate_deployed_index 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@indexEndpointsId='{{ indexEndpointsId }}' --required 
@@json=
'{
"id": "{{ id }}", 
"index": "{{ index }}", 
"displayName": "{{ displayName }}", 
"automaticResources": "{{ automaticResources }}", 
"dedicatedResources": "{{ dedicatedResources }}", 
"enableAccessLogging": {{ enableAccessLogging }}, 
"enableDatapointUpsertLogging": {{ enableDatapointUpsertLogging }}, 
"deployedIndexAuthConfig": "{{ deployedIndexAuthConfig }}", 
"reservedIpRanges": "{{ reservedIpRanges }}", 
"deploymentGroup": "{{ deploymentGroup }}", 
"deploymentTier": "{{ deploymentTier }}", 
"pscAutomationConfigs": "{{ pscAutomationConfigs }}"
}';
```
</TabItem>
<TabItem value="find_neighbors">

Finds the nearest neighbors of each vector within the request.

```sql
EXEC google.aiplatform.index_endpoints.find_neighbors 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@indexEndpointsId='{{ indexEndpointsId }}' --required 
@@json=
'{
"deployedIndexId": "{{ deployedIndexId }}", 
"queries": "{{ queries }}", 
"returnFullDatapoint": {{ returnFullDatapoint }}
}';
```
</TabItem>
<TabItem value="read_index_datapoints">

Reads the datapoints/vectors of the given IDs. A maximum of 1000 datapoints can be retrieved in a batch.

```sql
EXEC google.aiplatform.index_endpoints.read_index_datapoints 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@indexEndpointsId='{{ indexEndpointsId }}' --required 
@@json=
'{
"deployedIndexId": "{{ deployedIndexId }}", 
"ids": "{{ ids }}"
}';
```
</TabItem>
</Tabs>
