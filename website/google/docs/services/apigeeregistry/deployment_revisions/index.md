--- 
title: deployment_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_revisions
  - apigeeregistry
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

Creates, updates, deletes, gets or lists a <code>deployment_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployment_revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.deployment_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_deployments_list_revisions"
    values={[
        { label: 'projects_locations_apis_deployments_list_revisions', value: 'projects_locations_apis_deployments_list_revisions' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_list_revisions">

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="accessGuidance" /></td>
    <td><code>string</code></td>
    <td>Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="apiSpecRevision" /></td>
    <td><code>string</code></td>
    <td>The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apis/&#123;api&#125;/versions/&#123;version&#125;/specs/&#123;spec@revision&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp; when the deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Human-meaningful name.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>The address where the deployment is serving. Changes to this value will update the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="externalChannelUri" /></td>
    <td><code>string</code></td>
    <td>The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="intendedAudience" /></td>
    <td><code>string</code></td>
    <td>Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Revision creation timestamp; when the represented revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp: when the represented revision was last modified.</td>
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
    <td><a href="#projects_locations_apis_deployments_list_revisions"><CopyableCode code="projects_locations_apis_deployments_list_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all revisions of a deployment. Revisions are returned in descending order of revision creation time.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_deployments_delete_revision"><CopyableCode code="projects_locations_apis_deployments_delete_revision" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Deletes a revision of a deployment.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_apis_deployments_list_revisions"
    values={[
        { label: 'projects_locations_apis_deployments_list_revisions', value: 'projects_locations_apis_deployments_list_revisions' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_list_revisions">

Lists all revisions of a deployment. Revisions are returned in descending order of revision creation time.

```sql
SELECT
name,
accessGuidance,
annotations,
apiSpecRevision,
createTime,
description,
displayName,
endpointUri,
externalChannelUri,
intendedAudience,
labels,
revisionCreateTime,
revisionId,
revisionUpdateTime
FROM google.apigeeregistry.deployment_revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_apis_deployments_delete_revision"
    values={[
        { label: 'projects_locations_apis_deployments_delete_revision', value: 'projects_locations_apis_deployments_delete_revision' }
    ]}
>
<TabItem value="projects_locations_apis_deployments_delete_revision">

Deletes a revision of a deployment.

```sql
DELETE FROM google.apigeeregistry.deployment_revisions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required;
```
</TabItem>
</Tabs>
