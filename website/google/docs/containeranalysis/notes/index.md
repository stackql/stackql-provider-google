--- 
title: notes
hide_title: false
hide_table_of_contents: false
keywords:
  - notes
  - containeranalysis
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

Creates, updates, deletes, gets or lists a <code>notes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.containeranalysis.notes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_notes_get"
    values={[
        { label: 'projects_locations_notes_get', value: 'projects_locations_notes_get' },
        { label: 'projects_locations_notes_list', value: 'projects_locations_notes_list' },
        { label: 'projects_notes_get', value: 'projects_notes_get' },
        { label: 'projects_notes_list', value: 'projects_notes_list' }
    ]}
>
<TabItem value="projects_locations_notes_get">

A type of analysis that can be done for a resource.

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
    <td>Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>A note describing an attestation role. (id: AttestationNote)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>A note describing build provenance for a verifiable build. (id: BuildNote)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>A note describing a compliance check. (id: ComplianceNote)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this note was created. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>A note describing something that can be deployed. (id: DeploymentNote)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>A note describing the initial analysis of a resource. (id: DiscoveryNote)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>A note describing a dsse attestation note. (id: DSSEAttestationNote)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time of expiration for this note. Empty if note does not expire.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>A note describing a base image. (id: ImageNote)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of analysis. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="longDescription" /></td>
    <td><code>string</code></td>
    <td>A detailed description of this note.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>A note describing a package hosted by various package managers. (id: PackageNote)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedNoteNames" /></td>
    <td><code>array</code></td>
    <td>Other notes related to this note.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedUrl" /></td>
    <td><code>array</code></td>
    <td>URLs associated with this note.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>A note describing an SBOM reference. (id: SBOMReferenceNote)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>A note describing a secret. (id: SecretNote)</td>
</tr>
<tr>
    <td><CopyableCode code="shortDescription" /></td>
    <td><code>string</code></td>
    <td>A one sentence description of this note.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this note was last updated. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>A note describing available package upgrades. (id: UpgradeNote)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>A note describing a package vulnerability. (id: VulnerabilityNote)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilityAssessment" /></td>
    <td><code>object</code></td>
    <td>A note describing a vulnerability assessment. (id: VulnerabilityAssessmentNote)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_notes_list">

Response for listing notes.

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
    <td>The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>array</code></td>
    <td>The notes requested.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notes_get">

A type of analysis that can be done for a resource.

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
    <td>Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>A note describing an attestation role. (id: AttestationNote)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>A note describing build provenance for a verifiable build. (id: BuildNote)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>A note describing a compliance check. (id: ComplianceNote)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this note was created. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>A note describing something that can be deployed. (id: DeploymentNote)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>A note describing the initial analysis of a resource. (id: DiscoveryNote)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>A note describing a dsse attestation note. (id: DSSEAttestationNote)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time of expiration for this note. Empty if note does not expire.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>A note describing a base image. (id: ImageNote)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of analysis. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="longDescription" /></td>
    <td><code>string</code></td>
    <td>A detailed description of this note.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>A note describing a package hosted by various package managers. (id: PackageNote)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedNoteNames" /></td>
    <td><code>array</code></td>
    <td>Other notes related to this note.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedUrl" /></td>
    <td><code>array</code></td>
    <td>URLs associated with this note.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>A note describing an SBOM reference. (id: SBOMReferenceNote)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>A note describing a secret. (id: SecretNote)</td>
</tr>
<tr>
    <td><CopyableCode code="shortDescription" /></td>
    <td><code>string</code></td>
    <td>A one sentence description of this note.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this note was last updated. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>A note describing available package upgrades. (id: UpgradeNote)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>A note describing a package vulnerability. (id: VulnerabilityNote)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilityAssessment" /></td>
    <td><code>object</code></td>
    <td>A note describing a vulnerability assessment. (id: VulnerabilityAssessmentNote)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notes_list">

Response for listing notes.

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
    <td>The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>array</code></td>
    <td>The notes requested.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]`</td>
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
    <td><a href="#projects_locations_notes_get"><CopyableCode code="projects_locations_notes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td></td>
    <td>Gets the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_list"><CopyableCode code="projects_locations_notes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists notes for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_notes_get"><CopyableCode code="projects_notes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td></td>
    <td>Gets the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_notes_list"><CopyableCode code="projects_notes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists notes for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_create"><CopyableCode code="projects_locations_notes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-noteId"><code>noteId</code></a></td>
    <td>Creates a new note.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_batch_create"><CopyableCode code="projects_locations_notes_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new notes in batch.</td>
</tr>
<tr>
    <td><a href="#projects_notes_create"><CopyableCode code="projects_notes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-noteId"><code>noteId</code></a></td>
    <td>Creates a new note.</td>
</tr>
<tr>
    <td><a href="#projects_notes_batch_create"><CopyableCode code="projects_notes_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates new notes in batch.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_patch"><CopyableCode code="projects_locations_notes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_notes_patch"><CopyableCode code="projects_notes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_delete"><CopyableCode code="projects_locations_notes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td></td>
    <td>Deletes the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_notes_delete"><CopyableCode code="projects_notes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td></td>
    <td>Deletes the specified note.</td>
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
<tr id="parameter-notesId">
    <td><CopyableCode code="notesId" /></td>
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
<tr id="parameter-noteId">
    <td><CopyableCode code="noteId" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_notes_get"
    values={[
        { label: 'projects_locations_notes_get', value: 'projects_locations_notes_get' },
        { label: 'projects_locations_notes_list', value: 'projects_locations_notes_list' },
        { label: 'projects_notes_get', value: 'projects_notes_get' },
        { label: 'projects_notes_list', value: 'projects_notes_list' }
    ]}
>
<TabItem value="projects_locations_notes_get">

Gets the specified note.

```sql
SELECT
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment
FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notesId = '{{ notesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_notes_list">

Lists notes for the specified project.

```sql
SELECT
nextPageToken,
notes,
unreachable
FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="projects_notes_get">

Gets the specified note.

```sql
SELECT
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment
FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' -- required
AND notesId = '{{ notesId }}' -- required;
```
</TabItem>
<TabItem value="projects_notes_list">

Lists notes for the specified project.

```sql
SELECT
nextPageToken,
notes,
unreachable
FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_notes_create"
    values={[
        { label: 'projects_locations_notes_create', value: 'projects_locations_notes_create' },
        { label: 'projects_locations_notes_batch_create', value: 'projects_locations_notes_batch_create' },
        { label: 'projects_notes_create', value: 'projects_notes_create' },
        { label: 'projects_notes_batch_create', value: 'projects_notes_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_notes_create">

Creates a new note.

```sql
INSERT INTO google.containeranalysis.notes (
data__name,
data__shortDescription,
data__longDescription,
data__kind,
data__relatedUrl,
data__expirationTime,
data__createTime,
data__updateTime,
data__relatedNoteNames,
data__vulnerability,
data__build,
data__image,
data__package,
data__deployment,
data__discovery,
data__attestation,
data__upgrade,
data__compliance,
data__dsseAttestation,
data__vulnerabilityAssessment,
data__sbomReference,
data__secret,
projectsId,
locationsId,
noteId
)
SELECT 
'{{ name }}',
'{{ shortDescription }}',
'{{ longDescription }}',
'{{ kind }}',
'{{ relatedUrl }}',
'{{ expirationTime }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ relatedNoteNames }}',
'{{ vulnerability }}',
'{{ build }}',
'{{ image }}',
'{{ package }}',
'{{ deployment }}',
'{{ discovery }}',
'{{ attestation }}',
'{{ upgrade }}',
'{{ compliance }}',
'{{ dsseAttestation }}',
'{{ vulnerabilityAssessment }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ noteId }}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment
;
```
</TabItem>
<TabItem value="projects_locations_notes_batch_create">

Creates new notes in batch.

```sql
INSERT INTO google.containeranalysis.notes (
data__notes,
projectsId,
locationsId
)
SELECT 
'{{ notes }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
notes
;
```
</TabItem>
<TabItem value="projects_notes_create">

Creates a new note.

```sql
INSERT INTO google.containeranalysis.notes (
data__name,
data__shortDescription,
data__longDescription,
data__kind,
data__relatedUrl,
data__expirationTime,
data__createTime,
data__updateTime,
data__relatedNoteNames,
data__vulnerability,
data__build,
data__image,
data__package,
data__deployment,
data__discovery,
data__attestation,
data__upgrade,
data__compliance,
data__dsseAttestation,
data__vulnerabilityAssessment,
data__sbomReference,
data__secret,
projectsId,
noteId
)
SELECT 
'{{ name }}',
'{{ shortDescription }}',
'{{ longDescription }}',
'{{ kind }}',
'{{ relatedUrl }}',
'{{ expirationTime }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ relatedNoteNames }}',
'{{ vulnerability }}',
'{{ build }}',
'{{ image }}',
'{{ package }}',
'{{ deployment }}',
'{{ discovery }}',
'{{ attestation }}',
'{{ upgrade }}',
'{{ compliance }}',
'{{ dsseAttestation }}',
'{{ vulnerabilityAssessment }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ projectsId }}',
'{{ noteId }}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment
;
```
</TabItem>
<TabItem value="projects_notes_batch_create">

Creates new notes in batch.

```sql
INSERT INTO google.containeranalysis.notes (
data__notes,
projectsId
)
SELECT 
'{{ notes }}',
'{{ projectsId }}'
RETURNING
notes
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the notes resource.
    - name: locationsId
      value: string
      description: Required parameter for the notes resource.
    - name: name
      value: string
      description: >
        Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
        
    - name: shortDescription
      value: string
      description: >
        A one sentence description of this note.
        
    - name: longDescription
      value: string
      description: >
        A detailed description of this note.
        
    - name: kind
      value: string
      description: >
        Output only. The type of analysis. This field can be used as a filter in list requests.
        
      valid_values: ['NOTE_KIND_UNSPECIFIED', 'VULNERABILITY', 'BUILD', 'IMAGE', 'PACKAGE', 'DEPLOYMENT', 'DISCOVERY', 'ATTESTATION', 'UPGRADE', 'COMPLIANCE', 'DSSE_ATTESTATION', 'VULNERABILITY_ASSESSMENT', 'SBOM_REFERENCE', 'SECRET']
    - name: relatedUrl
      value: array
      description: >
        URLs associated with this note.
        
    - name: expirationTime
      value: string
      description: >
        Time of expiration for this note. Empty if note does not expire.
        
    - name: createTime
      value: string
      description: >
        Output only. The time this note was created. This field can be used as a filter in list requests.
        
    - name: updateTime
      value: string
      description: >
        Output only. The time this note was last updated. This field can be used as a filter in list requests.
        
    - name: relatedNoteNames
      value: array
      description: >
        Other notes related to this note.
        
    - name: vulnerability
      value: object
      description: >
        A note describing a package vulnerability.
        
    - name: build
      value: object
      description: >
        A note describing build provenance for a verifiable build.
        
    - name: image
      value: object
      description: >
        A note describing a base image.
        
    - name: package
      value: object
      description: >
        A note describing a package hosted by various package managers.
        
    - name: deployment
      value: object
      description: >
        A note describing something that can be deployed.
        
    - name: discovery
      value: object
      description: >
        A note describing the initial analysis of a resource.
        
    - name: attestation
      value: object
      description: >
        A note describing an attestation role.
        
    - name: upgrade
      value: object
      description: >
        A note describing available package upgrades.
        
    - name: compliance
      value: object
      description: >
        A note describing a compliance check.
        
    - name: dsseAttestation
      value: object
      description: >
        A note describing a dsse attestation note.
        
    - name: vulnerabilityAssessment
      value: object
      description: >
        A note describing a vulnerability assessment.
        
    - name: sbomReference
      value: object
      description: >
        A note describing an SBOM reference.
        
    - name: secret
      value: object
      description: >
        A note describing a secret.
        
    - name: notes
      value: object
      description: >
        Required. The notes to create. Max allowed length is 1000.
        
    - name: noteId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_notes_patch"
    values={[
        { label: 'projects_locations_notes_patch', value: 'projects_locations_notes_patch' },
        { label: 'projects_notes_patch', value: 'projects_notes_patch' }
    ]}
>
<TabItem value="projects_locations_notes_patch">

Updates the specified note.

```sql
UPDATE google.containeranalysis.notes
SET 
data__name = '{{ name }}',
data__shortDescription = '{{ shortDescription }}',
data__longDescription = '{{ longDescription }}',
data__kind = '{{ kind }}',
data__relatedUrl = '{{ relatedUrl }}',
data__expirationTime = '{{ expirationTime }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
data__relatedNoteNames = '{{ relatedNoteNames }}',
data__vulnerability = '{{ vulnerability }}',
data__build = '{{ build }}',
data__image = '{{ image }}',
data__package = '{{ package }}',
data__deployment = '{{ deployment }}',
data__discovery = '{{ discovery }}',
data__attestation = '{{ attestation }}',
data__upgrade = '{{ upgrade }}',
data__compliance = '{{ compliance }}',
data__dsseAttestation = '{{ dsseAttestation }}',
data__vulnerabilityAssessment = '{{ vulnerabilityAssessment }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notesId = '{{ notesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment;
```
</TabItem>
<TabItem value="projects_notes_patch">

Updates the specified note.

```sql
UPDATE google.containeranalysis.notes
SET 
data__name = '{{ name }}',
data__shortDescription = '{{ shortDescription }}',
data__longDescription = '{{ longDescription }}',
data__kind = '{{ kind }}',
data__relatedUrl = '{{ relatedUrl }}',
data__expirationTime = '{{ expirationTime }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
data__relatedNoteNames = '{{ relatedNoteNames }}',
data__vulnerability = '{{ vulnerability }}',
data__build = '{{ build }}',
data__image = '{{ image }}',
data__package = '{{ package }}',
data__deployment = '{{ deployment }}',
data__discovery = '{{ discovery }}',
data__attestation = '{{ attestation }}',
data__upgrade = '{{ upgrade }}',
data__compliance = '{{ compliance }}',
data__dsseAttestation = '{{ dsseAttestation }}',
data__vulnerabilityAssessment = '{{ vulnerabilityAssessment }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND notesId = '{{ notesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
expirationTime,
image,
kind,
longDescription,
package,
relatedNoteNames,
relatedUrl,
sbomReference,
secret,
shortDescription,
updateTime,
upgrade,
vulnerability,
vulnerabilityAssessment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_notes_delete"
    values={[
        { label: 'projects_locations_notes_delete', value: 'projects_locations_notes_delete' },
        { label: 'projects_notes_delete', value: 'projects_notes_delete' }
    ]}
>
<TabItem value="projects_locations_notes_delete">

Deletes the specified note.

```sql
DELETE FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notesId = '{{ notesId }}' --required;
```
</TabItem>
<TabItem value="projects_notes_delete">

Deletes the specified note.

```sql
DELETE FROM google.containeranalysis.notes
WHERE projectsId = '{{ projectsId }}' --required
AND notesId = '{{ notesId }}' --required;
```
</TabItem>
</Tabs>
