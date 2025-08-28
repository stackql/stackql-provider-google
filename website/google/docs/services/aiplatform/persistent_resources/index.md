--- 
title: persistent_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - persistent_resources
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

Creates, updates, deletes, gets or lists a <code>persistent_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>persistent_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.persistent_resources" /></td></tr>
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
    <td>Immutable. Resource name of a PersistentResource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the PersistentResource. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for a PersistentResource. If set, this PersistentResource and all sub-resources of this PersistentResource will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize PersistentResource. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. For example, `projects/12345/global/networks/myVPC`. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Where &#123;project&#125; is a project number, as in `12345`, and &#123;network&#125; is a network name. To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering). If this field is left unspecified, the resources aren't peered with any network.</td>
</tr>
<tr>
    <td><CopyableCode code="pscInterfaceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for PSC-I for PersistentResource. (id: GoogleCloudAiplatformV1PscInterfaceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRanges" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. If set, we will deploy the persistent resource within the provided IP ranges. Otherwise, the persistent resource is deployed to any IP ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePools" /></td>
    <td><code>array</code></td>
    <td>Required. The spec of the pools of different resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRuntime" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information of the Persistent Resource. (id: GoogleCloudAiplatformV1ResourceRuntime)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRuntimeSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistent Resource runtime spec. For example, used for Ray cluster configuration. (id: GoogleCloudAiplatformV1ResourceRuntimeSpec)</td>
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
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource for the first time entered the `RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of a Study.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource was most recently updated.</td>
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
    <td>Immutable. Resource name of a PersistentResource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the PersistentResource. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for a PersistentResource. If set, this PersistentResource and all sub-resources of this PersistentResource will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize PersistentResource. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. For example, `projects/12345/global/networks/myVPC`. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Where &#123;project&#125; is a project number, as in `12345`, and &#123;network&#125; is a network name. To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering). If this field is left unspecified, the resources aren't peered with any network.</td>
</tr>
<tr>
    <td><CopyableCode code="pscInterfaceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for PSC-I for PersistentResource. (id: GoogleCloudAiplatformV1PscInterfaceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRanges" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. If set, we will deploy the persistent resource within the provided IP ranges. Otherwise, the persistent resource is deployed to any IP ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePools" /></td>
    <td><code>array</code></td>
    <td>Required. The spec of the pools of different resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRuntime" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information of the Persistent Resource. (id: GoogleCloudAiplatformV1ResourceRuntime)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRuntimeSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistent Resource runtime spec. For example, used for Ray cluster configuration. (id: GoogleCloudAiplatformV1ResourceRuntimeSpec)</td>
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
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource for the first time entered the `RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of a Study.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the PersistentResource was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-persistentResourcesId"><code>persistentResourcesId</code></a></td>
    <td></td>
    <td>Gets a PersistentResource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists PersistentResources in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-persistentResourceId"><code>persistentResourceId</code></a></td>
    <td>Creates a PersistentResource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-persistentResourcesId"><code>persistentResourcesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a PersistentResource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-persistentResourcesId"><code>persistentResourcesId</code></a></td>
    <td></td>
    <td>Deletes a PersistentResource.</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-persistentResourcesId"><code>persistentResourcesId</code></a></td>
    <td></td>
    <td>Reboots a PersistentResource.</td>
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
<tr id="parameter-persistentResourcesId">
    <td><CopyableCode code="persistentResourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
<tr id="parameter-persistentResourceId">
    <td><CopyableCode code="persistentResourceId" /></td>
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

Gets a PersistentResource.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
error,
labels,
network,
pscInterfaceConfig,
reservedIpRanges,
resourcePools,
resourceRuntime,
resourceRuntimeSpec,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
updateTime
FROM google.aiplatform.persistent_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND persistentResourcesId = '{{ persistentResourcesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists PersistentResources in a Location.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
error,
labels,
network,
pscInterfaceConfig,
reservedIpRanges,
resourcePools,
resourceRuntime,
resourceRuntimeSpec,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
updateTime
FROM google.aiplatform.persistent_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a PersistentResource.

```sql
INSERT INTO google.aiplatform.persistent_resources (
data__name,
data__displayName,
data__resourcePools,
data__labels,
data__network,
data__pscInterfaceConfig,
data__encryptionSpec,
data__resourceRuntimeSpec,
data__reservedIpRanges,
projectsId,
locationsId,
persistentResourceId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ resourcePools }}',
'{{ labels }}',
'{{ network }}',
'{{ pscInterfaceConfig }}',
'{{ encryptionSpec }}',
'{{ resourceRuntimeSpec }}',
'{{ reservedIpRanges }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ persistentResourceId }}'
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
- name: persistent_resources
  props:
    - name: projectsId
      value: string
      description: Required parameter for the persistent_resources resource.
    - name: locationsId
      value: string
      description: Required parameter for the persistent_resources resource.
    - name: name
      value: string
      description: >
        Immutable. Resource name of a PersistentResource.
        
    - name: displayName
      value: string
      description: >
        Optional. The display name of the PersistentResource. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: resourcePools
      value: array
      description: >
        Required. The spec of the pools of different resources.
        
    - name: labels
      value: object
      description: >
        Optional. The labels with user-defined metadata to organize PersistentResource. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: network
      value: string
      description: >
        Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. For example, `projects/12345/global/networks/myVPC`. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/{project}/global/networks/{network}`. Where {project} is a project number, as in `12345`, and {network} is a network name. To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering). If this field is left unspecified, the resources aren't peered with any network.
        
    - name: pscInterfaceConfig
      value: object
      description: >
        Optional. Configuration for PSC-I for PersistentResource.
        
    - name: encryptionSpec
      value: object
      description: >
        Optional. Customer-managed encryption key spec for a PersistentResource. If set, this PersistentResource and all sub-resources of this PersistentResource will be secured by this key.
        
    - name: resourceRuntimeSpec
      value: object
      description: >
        Optional. Persistent Resource runtime spec. For example, used for Ray cluster configuration.
        
    - name: reservedIpRanges
      value: array
      description: >
        Optional. A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. If set, we will deploy the persistent resource within the provided IP ranges. Otherwise, the persistent resource is deployed to any IP ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].
        
    - name: persistentResourceId
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

Updates a PersistentResource.

```sql
UPDATE google.aiplatform.persistent_resources
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__resourcePools = '{{ resourcePools }}',
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__pscInterfaceConfig = '{{ pscInterfaceConfig }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__resourceRuntimeSpec = '{{ resourceRuntimeSpec }}',
data__reservedIpRanges = '{{ reservedIpRanges }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND persistentResourcesId = '{{ persistentResourcesId }}' --required
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

Deletes a PersistentResource.

```sql
DELETE FROM google.aiplatform.persistent_resources
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND persistentResourcesId = '{{ persistentResourcesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot"
    values={[
        { label: 'reboot', value: 'reboot' }
    ]}
>
<TabItem value="reboot">

Reboots a PersistentResource.

```sql
EXEC google.aiplatform.persistent_resources.reboot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@persistentResourcesId='{{ persistentResourcesId }}' --required;
```
</TabItem>
</Tabs>
