--- 
title: policy_orchestrators
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_orchestrators
  - osconfig
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

Creates, updates, deletes, gets or lists a <code>policy_orchestrators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policy_orchestrators</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.osconfig.policy_orchestrators" /></td></tr>
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

PolicyOrchestrator helps managing project+zone level policy resources (e.g. OS Policy Assignments), by providing tools to create, update and delete them across projects and locations, at scale. Policy orchestrator functions as an endless loop. Each iteration orchestrator computes a set of resources that should be affected, then progressively applies changes to them. If for some reason this set of resources changes over time (e.g. new projects are added), the future loop iterations will address that. Orchestrator can either upsert or delete policy resources. For more details, see the description of the `action`, and `orchestrated_resource` fields. Note that policy orchestrator do not "manage" the resources it creates. Every iteration is independent and only minimal history of past actions is retained (apart from Cloud Logging). If orchestrator gets deleted, it does not affect the resources it created in the past. Those will remain where they were. Same applies if projects are removed from the orchestrator's scope.

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
    <td>Immutable. Identifier. In form of * `organizations/&#123;organization_id&#125;/locations/global/policyOrchestrators/&#123;orchestrator_id&#125;` * `folders/&#123;folder_id&#125;/locations/global/policyOrchestrators/&#123;orchestrator_id&#125;` * `projects/&#123;project_id_or_number&#125;/locations/global/policyOrchestrators/&#123;orchestrator_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Required. Action to be done by the orchestrator in `projects/&#123;project_id&#125;/zones/&#123;zone_id&#125;` locations defined by the `orchestration_scope`. Allowed values: - `UPSERT` - Orchestrator will create or update target resources. - `DELETE` - Orchestrator will delete target resources, if they exist</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the policy orchestrator resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Freeform text describing the purpose of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="orchestratedResource" /></td>
    <td><code>object</code></td>
    <td>Required. Resource to be orchestrated by the policy orchestrator. (id: GoogleCloudOsconfigV2__OrchestratedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrationScope" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines scope for the orchestration, in context of the enclosing PolicyOrchestrator resource. Scope is expanded into a list of pairs, in which the rollout action will take place. Expansion starts with a Folder resource parenting the PolicyOrchestrator resource: - All the descendant projects are listed. - List of project is cross joined with a list of all available zones. - Resulting list of pairs is filtered according to the selectors. (id: GoogleCloudOsconfigV2__OrchestrationScope)</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrationState" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the orchestration. (id: GoogleCloudOsconfigV2_PolicyOrchestrator_OrchestrationState)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Set to true, if the there are ongoing changes being applied by the orchestrator.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. State of the orchestrator. Can be updated to change orchestrator behaviour. Allowed values: - `ACTIVE` - orchestrator is actively looking for actions to be taken. - `STOPPED` - orchestrator won't make any changes. Note: There might be more states added in the future. We use string here instead of an enum, to avoid the need of propagating new states to all the client code.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the policy orchestrator resource was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for the list policy orchestrator resources.

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
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="policyOrchestrators" /></td>
    <td><code>array</code></td>
    <td>The policy orchestrators for the specified parent resource.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policyOrchestratorsId"><code>policyOrchestratorsId</code></a></td>
    <td></td>
    <td>Retrieves an existing policy orchestrator, parented by an organization.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the policy orchestrators under the given parent organization resource.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-policyOrchestratorId"><code>policyOrchestratorId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new policy orchestrator under the given organizations resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policyOrchestratorsId"><code>policyOrchestratorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing policy orchestrator, parented by an organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policyOrchestratorsId"><code>policyOrchestratorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an existing policy orchestrator resource, parented by an organization.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policyOrchestratorsId">
    <td><CopyableCode code="policyOrchestratorsId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-policyOrchestratorId">
    <td><CopyableCode code="policyOrchestratorId" /></td>
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

Retrieves an existing policy orchestrator, parented by an organization.

```sql
SELECT
name,
action,
createTime,
description,
etag,
labels,
orchestratedResource,
orchestrationScope,
orchestrationState,
reconciling,
state,
updateTime
FROM google.osconfig.policy_orchestrators
WHERE organizationsId = '{{ organizationsId }}' -- required
AND policyOrchestratorsId = '{{ policyOrchestratorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the policy orchestrators under the given parent organization resource.

```sql
SELECT
nextPageToken,
policyOrchestrators,
unreachable
FROM google.osconfig.policy_orchestrators
WHERE organizationsId = '{{ organizationsId }}' -- required
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

Creates a new policy orchestrator under the given organizations resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).

```sql
INSERT INTO google.osconfig.policy_orchestrators (
data__name,
data__description,
data__state,
data__orchestrationScope,
data__action,
data__orchestratedResource,
data__labels,
organizationsId,
policyOrchestratorId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ state }}',
'{{ orchestrationScope }}',
'{{ action }}',
'{{ orchestratedResource }}',
'{{ labels }}',
'{{ organizationsId }}',
'{{ policyOrchestratorId }}',
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
- name: policy_orchestrators
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the policy_orchestrators resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}`
        
    - name: description
      value: string
      description: >
        Optional. Freeform text describing the purpose of the resource.
        
    - name: state
      value: string
      description: >
        Optional. State of the orchestrator. Can be updated to change orchestrator behaviour. Allowed values: - `ACTIVE` - orchestrator is actively looking for actions to be taken. - `STOPPED` - orchestrator won't make any changes. Note: There might be more states added in the future. We use string here instead of an enum, to avoid the need of propagating new states to all the client code.
        
    - name: orchestrationScope
      value: object
      description: >
        Optional. Defines scope for the orchestration, in context of the enclosing PolicyOrchestrator resource. Scope is expanded into a list of pairs, in which the rollout action will take place. Expansion starts with a Folder resource parenting the PolicyOrchestrator resource: - All the descendant projects are listed. - List of project is cross joined with a list of all available zones. - Resulting list of pairs is filtered according to the selectors.
        
    - name: action
      value: string
      description: >
        Required. Action to be done by the orchestrator in `projects/{project_id}/zones/{zone_id}` locations defined by the `orchestration_scope`. Allowed values: - `UPSERT` - Orchestrator will create or update target resources. - `DELETE` - Orchestrator will delete target resources, if they exist
        
    - name: orchestratedResource
      value: object
      description: >
        Required. Resource to be orchestrated by the policy orchestrator.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: policyOrchestratorId
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

Updates an existing policy orchestrator, parented by an organization.

```sql
UPDATE google.osconfig.policy_orchestrators
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__orchestrationScope = '{{ orchestrationScope }}',
data__action = '{{ action }}',
data__orchestratedResource = '{{ orchestratedResource }}',
data__labels = '{{ labels }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND policyOrchestratorsId = '{{ policyOrchestratorsId }}' --required
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

Deletes an existing policy orchestrator resource, parented by an organization.

```sql
DELETE FROM google.osconfig.policy_orchestrators
WHERE organizationsId = '{{ organizationsId }}' --required
AND policyOrchestratorsId = '{{ policyOrchestratorsId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
