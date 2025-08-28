--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>findings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_sources_findings_list"
    values={[
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' },
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' }
    ]}
>
<TabItem value="folders_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td>Finding matching the search request. (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Output only. Resource that is associated with this finding. (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the finding between the points in time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td>Finding matching the search request. (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Output only. Resource that is associated with this finding. (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the finding between the points in time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td>Finding matching the search request. (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Output only. Resource that is associated with this finding. (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the finding between the points in time.</td>
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
    <td><a href="#folders_sources_findings_list"><CopyableCode code="folders_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_list"><CopyableCode code="projects_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_list"><CopyableCode code="organizations_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_create"><CopyableCode code="organizations_sources_findings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-findingId"><code>findingId</code></a></td>
    <td>Creates a finding. The corresponding source must exist for finding creation to succeed.</td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_patch"><CopyableCode code="folders_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_patch"><CopyableCode code="projects_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_patch"><CopyableCode code="organizations_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.</td>
</tr>
<tr>
    <td><a href="#folders_findings_bulk_mute"><CopyableCode code="folders_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.</td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_group"><CopyableCode code="folders_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td>Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_set_state"><CopyableCode code="folders_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the state of a finding.</td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_set_mute"><CopyableCode code="folders_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the mute state of a finding.</td>
</tr>
<tr>
    <td><a href="#projects_findings_bulk_mute"><CopyableCode code="projects_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_group"><CopyableCode code="projects_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td>Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_set_state"><CopyableCode code="projects_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the state of a finding.</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_set_mute"><CopyableCode code="projects_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the mute state of a finding.</td>
</tr>
<tr>
    <td><a href="#organizations_findings_bulk_mute"><CopyableCode code="organizations_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_group"><CopyableCode code="organizations_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td>Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_set_state"><CopyableCode code="organizations_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the state of a finding.</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_set_mute"><CopyableCode code="organizations_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Updates the mute state of a finding.</td>
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
<tr id="parameter-findingsId">
    <td><CopyableCode code="findingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-compareDuration">
    <td><CopyableCode code="compareDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    defaultValue="folders_sources_findings_list"
    values={[
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' },
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' }
    ]}
>
<TabItem value="folders_sources_findings_list">

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE foldersId = '{{ foldersId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_sources_findings_list">

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE projectsId = '{{ projectsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_sources_findings_list">

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sources_findings_create"
    values={[
        { label: 'organizations_sources_findings_create', value: 'organizations_sources_findings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sources_findings_create">

Creates a finding. The corresponding source must exist for finding creation to succeed.

```sql
INSERT INTO google.securitycenter.findings (
data__name,
data__parent,
data__resourceName,
data__state,
data__category,
data__externalUri,
data__sourceProperties,
data__eventTime,
data__createTime,
data__severity,
data__canonicalName,
data__mute,
data__findingClass,
data__indicator,
data__vulnerability,
data__mitreAttack,
data__access,
data__connections,
data__muteInitiator,
data__processes,
data__compliances,
data__description,
data__exfiltration,
data__iamBindings,
data__nextSteps,
data__moduleName,
data__containers,
data__kubernetes,
data__database,
data__attackExposure,
data__files,
data__cloudDlpInspection,
data__cloudDlpDataProfile,
data__kernelRootkit,
data__orgPolicies,
data__job,
data__application,
data__ipRules,
data__backupDisasterRecovery,
data__securityPosture,
data__logEntries,
data__loadBalancers,
data__cloudArmor,
data__notebook,
data__toxicCombination,
data__groupMemberships,
data__disk,
data__dataAccessEvents,
data__dataFlowEvents,
data__networks,
data__dataRetentionDeletionEvents,
data__affectedResources,
data__aiModel,
data__chokepoint,
data__complianceDetails,
data__vertexAi,
organizationsId,
sourcesId,
findingId
)
SELECT 
'{{ name }}',
'{{ parent }}',
'{{ resourceName }}',
'{{ state }}',
'{{ category }}',
'{{ externalUri }}',
'{{ sourceProperties }}',
'{{ eventTime }}',
'{{ createTime }}',
'{{ severity }}',
'{{ canonicalName }}',
'{{ mute }}',
'{{ findingClass }}',
'{{ indicator }}',
'{{ vulnerability }}',
'{{ mitreAttack }}',
'{{ access }}',
'{{ connections }}',
'{{ muteInitiator }}',
'{{ processes }}',
'{{ compliances }}',
'{{ description }}',
'{{ exfiltration }}',
'{{ iamBindings }}',
'{{ nextSteps }}',
'{{ moduleName }}',
'{{ containers }}',
'{{ kubernetes }}',
'{{ database }}',
'{{ attackExposure }}',
'{{ files }}',
'{{ cloudDlpInspection }}',
'{{ cloudDlpDataProfile }}',
'{{ kernelRootkit }}',
'{{ orgPolicies }}',
'{{ job }}',
'{{ application }}',
'{{ ipRules }}',
'{{ backupDisasterRecovery }}',
'{{ securityPosture }}',
'{{ logEntries }}',
'{{ loadBalancers }}',
'{{ cloudArmor }}',
'{{ notebook }}',
'{{ toxicCombination }}',
'{{ groupMemberships }}',
'{{ disk }}',
'{{ dataAccessEvents }}',
'{{ dataFlowEvents }}',
'{{ networks }}',
'{{ dataRetentionDeletionEvents }}',
'{{ affectedResources }}',
'{{ aiModel }}',
'{{ chokepoint }}',
'{{ complianceDetails }}',
'{{ vertexAi }}',
'{{ organizationsId }}',
'{{ sourcesId }}',
'{{ findingId }}'
RETURNING
name,
access,
affectedResources,
aiModel,
application,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
disk,
eventTime,
exfiltration,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
processes,
resourceName,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: findings
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the findings resource.
    - name: sourcesId
      value: string
      description: Required parameter for the findings resource.
    - name: name
      value: string
      description: >
        The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
        
    - name: parent
      value: string
      description: >
        The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"
        
    - name: resourceName
      value: string
      description: >
        For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
        
    - name: state
      value: string
      description: >
        The state of the finding.
        
      valid_values: ['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE']
    - name: category
      value: string
      description: >
        The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
        
    - name: externalUri
      value: string
      description: >
        The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
        
    - name: sourceProperties
      value: object
      description: >
        Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
        
    - name: eventTime
      value: string
      description: >
        The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
        
    - name: createTime
      value: string
      description: >
        The time at which the finding was created in Security Command Center.
        
    - name: severity
      value: string
      description: >
        The severity of the finding. This field is managed by the source that writes the finding.
        
      valid_values: ['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW']
    - name: canonicalName
      value: string
      description: >
        The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.
        
    - name: mute
      value: string
      description: >
        Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
        
      valid_values: ['MUTE_UNSPECIFIED', 'MUTED', 'UNMUTED', 'UNDEFINED']
    - name: findingClass
      value: string
      description: >
        The class of the finding.
        
      valid_values: ['FINDING_CLASS_UNSPECIFIED', 'THREAT', 'VULNERABILITY', 'MISCONFIGURATION', 'OBSERVATION', 'SCC_ERROR', 'POSTURE_VIOLATION', 'TOXIC_COMBINATION', 'SENSITIVE_DATA_RISK', 'CHOKEPOINT']
    - name: indicator
      value: object
      description: >
        Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
        
    - name: vulnerability
      value: object
      description: >
        Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
        
    - name: mitreAttack
      value: object
      description: >
        MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
        
    - name: access
      value: object
      description: >
        Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.
        
    - name: connections
      value: array
      description: >
        Contains information about the IP connection associated with the finding.
        
    - name: muteInitiator
      value: string
      description: >
        Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.
        
    - name: processes
      value: array
      description: >
        Represents operating system processes associated with the Finding.
        
    - name: compliances
      value: array
      description: >
        Contains compliance information for security standards associated to the finding.
        
    - name: description
      value: string
      description: >
        Contains more details about the finding.
        
    - name: exfiltration
      value: object
      description: >
        Represents exfiltrations associated with the finding.
        
    - name: iamBindings
      value: array
      description: >
        Represents IAM bindings associated with the finding.
        
    - name: nextSteps
      value: string
      description: >
        Steps to address the finding.
        
    - name: moduleName
      value: string
      description: >
        Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
        
    - name: containers
      value: array
      description: >
        Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.
        
    - name: kubernetes
      value: object
      description: >
        Kubernetes resources associated with the finding.
        
    - name: database
      value: object
      description: >
        Database associated with the finding.
        
    - name: attackExposure
      value: object
      description: >
        The results of an attack path simulation relevant to this finding.
        
    - name: files
      value: array
      description: >
        File associated with the finding.
        
    - name: cloudDlpInspection
      value: object
      description: >
        Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.
        
    - name: cloudDlpDataProfile
      value: object
      description: >
        Cloud DLP data profile that is associated with the finding.
        
    - name: kernelRootkit
      value: object
      description: >
        Signature of the kernel rootkit.
        
    - name: orgPolicies
      value: array
      description: >
        Contains information about the org policies associated with the finding.
        
    - name: job
      value: object
      description: >
        Job associated with the finding.
        
    - name: application
      value: object
      description: >
        Represents an application associated with the finding.
        
    - name: ipRules
      value: object
      description: >
        IP rules associated with the finding.
        
    - name: backupDisasterRecovery
      value: object
      description: >
        Fields related to Backup and DR findings.
        
    - name: securityPosture
      value: object
      description: >
        The security posture associated with the finding.
        
    - name: logEntries
      value: array
      description: >
        Log entries that are relevant to the finding.
        
    - name: loadBalancers
      value: array
      description: >
        The load balancers associated with the finding.
        
    - name: cloudArmor
      value: object
      description: >
        Fields related to Cloud Armor findings.
        
    - name: notebook
      value: object
      description: >
        Notebook associated with the finding.
        
    - name: toxicCombination
      value: object
      description: >
        Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests.
        
    - name: groupMemberships
      value: array
      description: >
        Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests.
        
    - name: disk
      value: object
      description: >
        Disk associated with the finding.
        
    - name: dataAccessEvents
      value: array
      description: >
        Data access events associated with the finding.
        
    - name: dataFlowEvents
      value: array
      description: >
        Data flow events associated with the finding.
        
    - name: networks
      value: array
      description: >
        Represents the VPC networks that the resource is attached to.
        
    - name: dataRetentionDeletionEvents
      value: array
      description: >
        Data retention deletion events associated with the finding.
        
    - name: affectedResources
      value: object
      description: >
        AffectedResources associated with the finding.
        
    - name: aiModel
      value: object
      description: >
        The AI model associated with the finding.
        
    - name: chokepoint
      value: object
      description: >
        Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests.
        
    - name: complianceDetails
      value: object
      description: >
        Details about the compliance implications of the finding.
        
    - name: vertexAi
      value: object
      description: >
        VertexAi associated with the finding.
        
    - name: findingId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_sources_findings_patch"
    values={[
        { label: 'folders_sources_findings_patch', value: 'folders_sources_findings_patch' },
        { label: 'projects_sources_findings_patch', value: 'projects_sources_findings_patch' },
        { label: 'organizations_sources_findings_patch', value: 'organizations_sources_findings_patch' }
    ]}
>
<TabItem value="folders_sources_findings_patch">

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

```sql
UPDATE google.securitycenter.findings
SET 
data__name = '{{ name }}',
data__parent = '{{ parent }}',
data__resourceName = '{{ resourceName }}',
data__state = '{{ state }}',
data__category = '{{ category }}',
data__externalUri = '{{ externalUri }}',
data__sourceProperties = '{{ sourceProperties }}',
data__eventTime = '{{ eventTime }}',
data__createTime = '{{ createTime }}',
data__severity = '{{ severity }}',
data__canonicalName = '{{ canonicalName }}',
data__mute = '{{ mute }}',
data__findingClass = '{{ findingClass }}',
data__indicator = '{{ indicator }}',
data__vulnerability = '{{ vulnerability }}',
data__mitreAttack = '{{ mitreAttack }}',
data__access = '{{ access }}',
data__connections = '{{ connections }}',
data__muteInitiator = '{{ muteInitiator }}',
data__processes = '{{ processes }}',
data__compliances = '{{ compliances }}',
data__description = '{{ description }}',
data__exfiltration = '{{ exfiltration }}',
data__iamBindings = '{{ iamBindings }}',
data__nextSteps = '{{ nextSteps }}',
data__moduleName = '{{ moduleName }}',
data__containers = '{{ containers }}',
data__kubernetes = '{{ kubernetes }}',
data__database = '{{ database }}',
data__attackExposure = '{{ attackExposure }}',
data__files = '{{ files }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__orgPolicies = '{{ orgPolicies }}',
data__job = '{{ job }}',
data__application = '{{ application }}',
data__ipRules = '{{ ipRules }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__securityPosture = '{{ securityPosture }}',
data__logEntries = '{{ logEntries }}',
data__loadBalancers = '{{ loadBalancers }}',
data__cloudArmor = '{{ cloudArmor }}',
data__notebook = '{{ notebook }}',
data__toxicCombination = '{{ toxicCombination }}',
data__groupMemberships = '{{ groupMemberships }}',
data__disk = '{{ disk }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__networks = '{{ networks }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__affectedResources = '{{ affectedResources }}',
data__aiModel = '{{ aiModel }}',
data__chokepoint = '{{ chokepoint }}',
data__complianceDetails = '{{ complianceDetails }}',
data__vertexAi = '{{ vertexAi }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
aiModel,
application,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
disk,
eventTime,
exfiltration,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
processes,
resourceName,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
<TabItem value="projects_sources_findings_patch">

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

```sql
UPDATE google.securitycenter.findings
SET 
data__name = '{{ name }}',
data__parent = '{{ parent }}',
data__resourceName = '{{ resourceName }}',
data__state = '{{ state }}',
data__category = '{{ category }}',
data__externalUri = '{{ externalUri }}',
data__sourceProperties = '{{ sourceProperties }}',
data__eventTime = '{{ eventTime }}',
data__createTime = '{{ createTime }}',
data__severity = '{{ severity }}',
data__canonicalName = '{{ canonicalName }}',
data__mute = '{{ mute }}',
data__findingClass = '{{ findingClass }}',
data__indicator = '{{ indicator }}',
data__vulnerability = '{{ vulnerability }}',
data__mitreAttack = '{{ mitreAttack }}',
data__access = '{{ access }}',
data__connections = '{{ connections }}',
data__muteInitiator = '{{ muteInitiator }}',
data__processes = '{{ processes }}',
data__compliances = '{{ compliances }}',
data__description = '{{ description }}',
data__exfiltration = '{{ exfiltration }}',
data__iamBindings = '{{ iamBindings }}',
data__nextSteps = '{{ nextSteps }}',
data__moduleName = '{{ moduleName }}',
data__containers = '{{ containers }}',
data__kubernetes = '{{ kubernetes }}',
data__database = '{{ database }}',
data__attackExposure = '{{ attackExposure }}',
data__files = '{{ files }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__orgPolicies = '{{ orgPolicies }}',
data__job = '{{ job }}',
data__application = '{{ application }}',
data__ipRules = '{{ ipRules }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__securityPosture = '{{ securityPosture }}',
data__logEntries = '{{ logEntries }}',
data__loadBalancers = '{{ loadBalancers }}',
data__cloudArmor = '{{ cloudArmor }}',
data__notebook = '{{ notebook }}',
data__toxicCombination = '{{ toxicCombination }}',
data__groupMemberships = '{{ groupMemberships }}',
data__disk = '{{ disk }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__networks = '{{ networks }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__affectedResources = '{{ affectedResources }}',
data__aiModel = '{{ aiModel }}',
data__chokepoint = '{{ chokepoint }}',
data__complianceDetails = '{{ complianceDetails }}',
data__vertexAi = '{{ vertexAi }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
aiModel,
application,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
disk,
eventTime,
exfiltration,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
processes,
resourceName,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
<TabItem value="organizations_sources_findings_patch">

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

```sql
UPDATE google.securitycenter.findings
SET 
data__name = '{{ name }}',
data__parent = '{{ parent }}',
data__resourceName = '{{ resourceName }}',
data__state = '{{ state }}',
data__category = '{{ category }}',
data__externalUri = '{{ externalUri }}',
data__sourceProperties = '{{ sourceProperties }}',
data__eventTime = '{{ eventTime }}',
data__createTime = '{{ createTime }}',
data__severity = '{{ severity }}',
data__canonicalName = '{{ canonicalName }}',
data__mute = '{{ mute }}',
data__findingClass = '{{ findingClass }}',
data__indicator = '{{ indicator }}',
data__vulnerability = '{{ vulnerability }}',
data__mitreAttack = '{{ mitreAttack }}',
data__access = '{{ access }}',
data__connections = '{{ connections }}',
data__muteInitiator = '{{ muteInitiator }}',
data__processes = '{{ processes }}',
data__compliances = '{{ compliances }}',
data__description = '{{ description }}',
data__exfiltration = '{{ exfiltration }}',
data__iamBindings = '{{ iamBindings }}',
data__nextSteps = '{{ nextSteps }}',
data__moduleName = '{{ moduleName }}',
data__containers = '{{ containers }}',
data__kubernetes = '{{ kubernetes }}',
data__database = '{{ database }}',
data__attackExposure = '{{ attackExposure }}',
data__files = '{{ files }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__orgPolicies = '{{ orgPolicies }}',
data__job = '{{ job }}',
data__application = '{{ application }}',
data__ipRules = '{{ ipRules }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__securityPosture = '{{ securityPosture }}',
data__logEntries = '{{ logEntries }}',
data__loadBalancers = '{{ loadBalancers }}',
data__cloudArmor = '{{ cloudArmor }}',
data__notebook = '{{ notebook }}',
data__toxicCombination = '{{ toxicCombination }}',
data__groupMemberships = '{{ groupMemberships }}',
data__disk = '{{ disk }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__networks = '{{ networks }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__affectedResources = '{{ affectedResources }}',
data__aiModel = '{{ aiModel }}',
data__chokepoint = '{{ chokepoint }}',
data__complianceDetails = '{{ complianceDetails }}',
data__vertexAi = '{{ vertexAi }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
aiModel,
application,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
disk,
eventTime,
exfiltration,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
processes,
resourceName,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="folders_findings_bulk_mute"
    values={[
        { label: 'folders_findings_bulk_mute', value: 'folders_findings_bulk_mute' },
        { label: 'folders_sources_findings_group', value: 'folders_sources_findings_group' },
        { label: 'folders_sources_findings_set_state', value: 'folders_sources_findings_set_state' },
        { label: 'folders_sources_findings_set_mute', value: 'folders_sources_findings_set_mute' },
        { label: 'projects_findings_bulk_mute', value: 'projects_findings_bulk_mute' },
        { label: 'projects_sources_findings_group', value: 'projects_sources_findings_group' },
        { label: 'projects_sources_findings_set_state', value: 'projects_sources_findings_set_state' },
        { label: 'projects_sources_findings_set_mute', value: 'projects_sources_findings_set_mute' },
        { label: 'organizations_findings_bulk_mute', value: 'organizations_findings_bulk_mute' },
        { label: 'organizations_sources_findings_group', value: 'organizations_sources_findings_group' },
        { label: 'organizations_sources_findings_set_state', value: 'organizations_sources_findings_set_state' },
        { label: 'organizations_sources_findings_set_mute', value: 'organizations_sources_findings_set_mute' }
    ]}
>
<TabItem value="folders_findings_bulk_mute">

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

```sql
EXEC google.securitycenter.findings.folders_findings_bulk_mute 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}';
```
</TabItem>
<TabItem value="folders_sources_findings_group">

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings

```sql
EXEC google.securitycenter.findings.folders_sources_findings_group 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"readTime": "{{ readTime }}", 
"compareDuration": "{{ compareDuration }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="folders_sources_findings_set_state">

Updates the state of a finding.

```sql
EXEC google.securitycenter.findings.folders_sources_findings_set_state 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
}';
```
</TabItem>
<TabItem value="folders_sources_findings_set_mute">

Updates the mute state of a finding.

```sql
EXEC google.securitycenter.findings.folders_sources_findings_set_mute 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}';
```
</TabItem>
<TabItem value="projects_findings_bulk_mute">

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

```sql
EXEC google.securitycenter.findings.projects_findings_bulk_mute 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}';
```
</TabItem>
<TabItem value="projects_sources_findings_group">

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings

```sql
EXEC google.securitycenter.findings.projects_sources_findings_group 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"readTime": "{{ readTime }}", 
"compareDuration": "{{ compareDuration }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="projects_sources_findings_set_state">

Updates the state of a finding.

```sql
EXEC google.securitycenter.findings.projects_sources_findings_set_state 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
}';
```
</TabItem>
<TabItem value="projects_sources_findings_set_mute">

Updates the mute state of a finding.

```sql
EXEC google.securitycenter.findings.projects_sources_findings_set_mute 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}';
```
</TabItem>
<TabItem value="organizations_findings_bulk_mute">

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

```sql
EXEC google.securitycenter.findings.organizations_findings_bulk_mute 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}';
```
</TabItem>
<TabItem value="organizations_sources_findings_group">

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/&#123;organization_id&#125;/sources/-/findings, /v1/folders/&#123;folder_id&#125;/sources/-/findings, /v1/projects/&#123;project_id&#125;/sources/-/findings

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_group 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"readTime": "{{ readTime }}", 
"compareDuration": "{{ compareDuration }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="organizations_sources_findings_set_state">

Updates the state of a finding.

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_set_state 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
}';
```
</TabItem>
<TabItem value="organizations_sources_findings_set_mute">

Updates the mute state of a finding.

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_set_mute 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}';
```
</TabItem>
</Tabs>
