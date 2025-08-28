--- 
title: releases
hide_title: false
hide_table_of_contents: false
keywords:
  - releases
  - clouddeploy
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

Creates, updates, deletes, gets or lists a <code>releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>releases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.releases" /></td></tr>
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
    <td>Identifier. Name of the `Release`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;`. The `release` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="abandoned" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this is an abandoned release.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="buildArtifacts" /></td>
    <td><code>array</code></td>
    <td>Optional. List of artifacts to pass through to Skaffold command.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Output only. Information around the state of the Release. (id: ReleaseCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Release` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTargetTypeSnapshots" /></td>
    <td><code>array</code></td>
    <td>Output only. Snapshot of the custom target types referenced by the targets taken at release creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryPipelineSnapshot" /></td>
    <td><code>object</code></td>
    <td>A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress. (id: DeliveryPipeline)</td>
</tr>
<tr>
    <td><CopyableCode code="deployParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The deploy parameters to use for all targets in this release.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Release`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="renderEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the render completed.</td>
</tr>
<tr>
    <td><CopyableCode code="renderStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the render began.</td>
</tr>
<tr>
    <td><CopyableCode code="renderState" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the render operation.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldConfigPath" /></td>
    <td><code>string</code></td>
    <td>Optional. Filepath of the Skaffold config inside of the config URI.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldConfigUri" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud Storage URI of tar.gz archive containing Skaffold configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArtifacts" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from target ID to the target artifacts created during the render operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetRenders" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from target ID to details of the render operation for that target.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSnapshots" /></td>
    <td><code>array</code></td>
    <td>Output only. Snapshot of the targets taken at release creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Release`.</td>
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
    <td>Identifier. Name of the `Release`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;release&#125;`. The `release` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="abandoned" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this is an abandoned release.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="buildArtifacts" /></td>
    <td><code>array</code></td>
    <td>Optional. List of artifacts to pass through to Skaffold command.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Output only. Information around the state of the Release. (id: ReleaseCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Release` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTargetTypeSnapshots" /></td>
    <td><code>array</code></td>
    <td>Output only. Snapshot of the custom target types referenced by the targets taken at release creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryPipelineSnapshot" /></td>
    <td><code>object</code></td>
    <td>A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress. (id: DeliveryPipeline)</td>
</tr>
<tr>
    <td><CopyableCode code="deployParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The deploy parameters to use for all targets in this release.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Release`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="renderEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the render completed.</td>
</tr>
<tr>
    <td><CopyableCode code="renderStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the render began.</td>
</tr>
<tr>
    <td><CopyableCode code="renderState" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the render operation.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldConfigPath" /></td>
    <td><code>string</code></td>
    <td>Optional. Filepath of the Skaffold config inside of the config URI.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldConfigUri" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud Storage URI of tar.gz archive containing Skaffold configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="skaffoldVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArtifacts" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from target ID to the target artifacts created during the render operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetRenders" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from target ID to details of the render operation for that target.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSnapshots" /></td>
    <td><code>array</code></td>
    <td>Output only. Snapshot of the targets taken at release creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Release`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td></td>
    <td>Gets details of a single Release.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Releases in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a></td>
    <td><a href="#parameter-releaseId"><code>releaseId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-overrideDeployPolicy"><code>overrideDeployPolicy</code></a></td>
    <td>Creates a new Release in a given project and location.</td>
</tr>
<tr>
    <td><a href="#abandon"><CopyableCode code="abandon" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a></td>
    <td></td>
    <td>Abandons a Release in the Delivery Pipeline.</td>
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
<tr id="parameter-deliveryPipelinesId">
    <td><CopyableCode code="deliveryPipelinesId" /></td>
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
<tr id="parameter-releasesId">
    <td><CopyableCode code="releasesId" /></td>
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
<tr id="parameter-overrideDeployPolicy">
    <td><CopyableCode code="overrideDeployPolicy" /></td>
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
<tr id="parameter-releaseId">
    <td><CopyableCode code="releaseId" /></td>
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

Gets details of a single Release.

```sql
SELECT
name,
abandoned,
annotations,
buildArtifacts,
condition,
createTime,
customTargetTypeSnapshots,
deliveryPipelineSnapshot,
deployParameters,
description,
etag,
labels,
renderEndTime,
renderStartTime,
renderState,
skaffoldConfigPath,
skaffoldConfigUri,
skaffoldVersion,
targetArtifacts,
targetRenders,
targetSnapshots,
uid
FROM google.clouddeploy.releases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND releasesId = '{{ releasesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Releases in a given project and location.

```sql
SELECT
name,
abandoned,
annotations,
buildArtifacts,
condition,
createTime,
customTargetTypeSnapshots,
deliveryPipelineSnapshot,
deployParameters,
description,
etag,
labels,
renderEndTime,
renderStartTime,
renderState,
skaffoldConfigPath,
skaffoldConfigUri,
skaffoldVersion,
targetArtifacts,
targetRenders,
targetSnapshots,
uid
FROM google.clouddeploy.releases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
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

Creates a new Release in a given project and location.

```sql
INSERT INTO google.clouddeploy.releases (
data__name,
data__description,
data__annotations,
data__labels,
data__skaffoldConfigUri,
data__skaffoldConfigPath,
data__buildArtifacts,
data__etag,
data__skaffoldVersion,
data__deployParameters,
projectsId,
locationsId,
deliveryPipelinesId,
releaseId,
requestId,
validateOnly,
overrideDeployPolicy
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ annotations }}',
'{{ labels }}',
'{{ skaffoldConfigUri }}',
'{{ skaffoldConfigPath }}',
'{{ buildArtifacts }}',
'{{ etag }}',
'{{ skaffoldVersion }}',
'{{ deployParameters }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deliveryPipelinesId }}',
'{{ releaseId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ overrideDeployPolicy }}'
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
- name: releases
  props:
    - name: projectsId
      value: string
      description: Required parameter for the releases resource.
    - name: locationsId
      value: string
      description: Required parameter for the releases resource.
    - name: deliveryPipelinesId
      value: string
      description: Required parameter for the releases resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the `Release`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}`. The `release` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
        
    - name: description
      value: string
      description: >
        Optional. Description of the `Release`. Max length is 255 characters.
        
    - name: annotations
      value: object
      description: >
        Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
        
    - name: labels
      value: object
      description: >
        Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
        
    - name: skaffoldConfigUri
      value: string
      description: >
        Optional. Cloud Storage URI of tar.gz archive containing Skaffold configuration.
        
    - name: skaffoldConfigPath
      value: string
      description: >
        Optional. Filepath of the Skaffold config inside of the config URI.
        
    - name: buildArtifacts
      value: array
      description: >
        Optional. List of artifacts to pass through to Skaffold command.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: skaffoldVersion
      value: string
      description: >
        Optional. The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.
        
    - name: deployParameters
      value: object
      description: >
        Optional. The deploy parameters to use for all targets in this release.
        
    - name: releaseId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: overrideDeployPolicy
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="abandon"
    values={[
        { label: 'abandon', value: 'abandon' }
    ]}
>
<TabItem value="abandon">

Abandons a Release in the Delivery Pipeline.

```sql
EXEC google.clouddeploy.releases.abandon 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required;
```
</TabItem>
</Tabs>
