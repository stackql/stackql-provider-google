--- 
title: insights_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - insights_configs
  - developerconnect
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

Creates, updates, deletes, gets or lists an <code>insights_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>insights_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.insights_configs" /></td></tr>
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
    <td>Identifier. The name of the InsightsConfig. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/insightsConfigs/&#123;insightsConfig&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="appHubApplication" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the App Hub Application. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/applications/&#123;application&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="artifactConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. The artifact configurations of the artifacts that are deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Any errors that occurred while setting up the InsightsConfig. Each error will be in the format: `field_name: error_message`, e.g. GetAppHubApplication: Permission denied while getting App Hub application. Please grant permissions to the P4SA.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with an InsightsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of InsightsConfig does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfigs" /></td>
    <td><code>array</code></td>
    <td>Output only. The runtime configurations where the application is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The state of the InsightsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update timestamp</td>
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
    <td>Identifier. The name of the InsightsConfig. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/insightsConfigs/&#123;insightsConfig&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="appHubApplication" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the App Hub Application. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/applications/&#123;application&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="artifactConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. The artifact configurations of the artifacts that are deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Any errors that occurred while setting up the InsightsConfig. Each error will be in the format: `field_name: error_message`, e.g. GetAppHubApplication: Permission denied while getting App Hub application. Please grant permissions to the P4SA.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with an InsightsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of InsightsConfig does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfigs" /></td>
    <td><code>array</code></td>
    <td>Output only. The runtime configurations where the application is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The state of the InsightsConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update timestamp</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightsConfigsId"><code>insightsConfigsId</code></a></td>
    <td></td>
    <td>Gets details of a single Insight.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists InsightsConfigs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-insightsConfigId"><code>insightsConfigId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new InsightsConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightsConfigsId"><code>insightsConfigsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single InsightsConfig.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightsConfigsId"><code>insightsConfigsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Delete a single Insight.</td>
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
<tr id="parameter-insightsConfigsId">
    <td><CopyableCode code="insightsConfigsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insightsConfigId">
    <td><CopyableCode code="insightsConfigId" /></td>
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

Gets details of a single Insight.

```sql
SELECT
name,
annotations,
appHubApplication,
artifactConfigs,
createTime,
errors,
labels,
reconciling,
runtimeConfigs,
state,
updateTime
FROM google.developerconnect.insights_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightsConfigsId = '{{ insightsConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists InsightsConfigs in a given project and location.

```sql
SELECT
name,
annotations,
appHubApplication,
artifactConfigs,
createTime,
errors,
labels,
reconciling,
runtimeConfigs,
state,
updateTime
FROM google.developerconnect.insights_configs
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

Creates a new InsightsConfig in a given project and location.

```sql
INSERT INTO google.developerconnect.insights_configs (
data__appHubApplication,
data__name,
data__artifactConfigs,
data__state,
data__annotations,
data__labels,
projectsId,
locationsId,
insightsConfigId,
validateOnly
)
SELECT 
'{{ appHubApplication }}',
'{{ name }}',
'{{ artifactConfigs }}',
'{{ state }}',
'{{ annotations }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ insightsConfigId }}',
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
- name: insights_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the insights_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the insights_configs resource.
    - name: appHubApplication
      value: string
      description: >
        Optional. The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}
        
    - name: name
      value: string
      description: >
        Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig}
        
    - name: artifactConfigs
      value: array
      description: >
        Optional. The artifact configurations of the artifacts that are deployed.
        
    - name: state
      value: string
      description: >
        Optional. Output only. The state of the InsightsConfig.
        
      valid_values: ['STATE_UNSPECIFIED', 'PENDING', 'COMPLETE', 'ERROR']
    - name: annotations
      value: object
      description: >
        Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.
        
    - name: labels
      value: object
      description: >
        Optional. Set of labels associated with an InsightsConfig.
        
    - name: insightsConfigId
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

Updates the parameters of a single InsightsConfig.

```sql
UPDATE google.developerconnect.insights_configs
SET 
data__appHubApplication = '{{ appHubApplication }}',
data__name = '{{ name }}',
data__artifactConfigs = '{{ artifactConfigs }}',
data__state = '{{ state }}',
data__annotations = '{{ annotations }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND insightsConfigsId = '{{ insightsConfigsId }}' --required
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
AND validateOnly = {{ validateOnly}}
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

Delete a single Insight.

```sql
DELETE FROM google.developerconnect.insights_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND insightsConfigsId = '{{ insightsConfigsId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
