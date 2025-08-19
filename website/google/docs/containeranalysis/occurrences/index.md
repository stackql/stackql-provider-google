--- 
title: occurrences
hide_title: false
hide_table_of_contents: false
keywords:
  - occurrences
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

Creates, updates, deletes, gets or lists an <code>occurrences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>occurrences</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.containeranalysis.occurrences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_occurrences_get"
    values={[
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
<TabItem value="projects_locations_occurrences_get">

An instance of an analysis type that has been found on a resource.

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_notes_occurrences_list">

Response for listing occurrences for a note.

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
    <td>Token to provide to skip to a particular spot in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="occurrences" /></td>
    <td><code>array</code></td>
    <td>The occurrences attached to the specified note.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_occurrences_get">

An instance of an analysis type that has been found on a resource.

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_occurrences_list">

Response for listing occurrences.

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
    <td><CopyableCode code="occurrences" /></td>
    <td><code>array</code></td>
    <td>The occurrences requested.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notes_occurrences_list">

Response for listing occurrences for a note.

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
    <td>Token to provide to skip to a particular spot in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="occurrences" /></td>
    <td><code>array</code></td>
    <td>The occurrences attached to the specified note.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_occurrences_list">

Response for listing occurrences.

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
    <td><CopyableCode code="occurrences" /></td>
    <td><code>array</code></td>
    <td>The occurrences requested.</td>
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
    <td><a href="#projects_locations_occurrences_get"><CopyableCode code="projects_locations_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_occurrences_list"><CopyableCode code="projects_locations_notes_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_get"><CopyableCode code="projects_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_list"><CopyableCode code="projects_locations_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists occurrences for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_notes_occurrences_list"><CopyableCode code="projects_notes_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_list"><CopyableCode code="projects_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists occurrences for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_create"><CopyableCode code="projects_locations_occurrences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_batch_create"><CopyableCode code="projects_locations_occurrences_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new occurrences in batch.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_create"><CopyableCode code="projects_occurrences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_batch_create"><CopyableCode code="projects_occurrences_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates new occurrences in batch.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_patch"><CopyableCode code="projects_locations_occurrences_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_patch"><CopyableCode code="projects_occurrences_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_delete"><CopyableCode code="projects_locations_occurrences_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_delete"><CopyableCode code="projects_occurrences_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.</td>
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
<tr id="parameter-occurrencesId">
    <td><CopyableCode code="occurrencesId" /></td>
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
    defaultValue="projects_locations_occurrences_get"
    values={[
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
<TabItem value="projects_locations_occurrences_get">

Gets the specified occurrence.

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
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_notes_occurrences_list">

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

```sql
SELECT
nextPageToken,
occurrences
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notesId = '{{ notesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_occurrences_get">

Gets the specified occurrence.

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
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_occurrences_list">

Lists occurrences for the specified project.

```sql
SELECT
nextPageToken,
occurrences,
unreachable
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="projects_notes_occurrences_list">

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

```sql
SELECT
nextPageToken,
occurrences
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND notesId = '{{ notesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_occurrences_list">

Lists occurrences for the specified project.

```sql
SELECT
nextPageToken,
occurrences,
unreachable
FROM google.containeranalysis.occurrences
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
    defaultValue="projects_locations_occurrences_create"
    values={[
        { label: 'projects_locations_occurrences_create', value: 'projects_locations_occurrences_create' },
        { label: 'projects_locations_occurrences_batch_create', value: 'projects_locations_occurrences_batch_create' },
        { label: 'projects_occurrences_create', value: 'projects_occurrences_create' },
        { label: 'projects_occurrences_batch_create', value: 'projects_occurrences_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_occurrences_create">

Creates a new occurrence.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__name,
data__resourceUri,
data__noteName,
data__kind,
data__remediation,
data__createTime,
data__updateTime,
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
data__sbomReference,
data__secret,
data__envelope,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ resourceUri }}',
'{{ noteName }}',
'{{ kind }}',
'{{ remediation }}',
'{{ createTime }}',
'{{ updateTime }}',
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
'{{ sbomReference }}',
'{{ secret }}',
'{{ envelope }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
;
```
</TabItem>
<TabItem value="projects_locations_occurrences_batch_create">

Creates new occurrences in batch.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__occurrences,
projectsId,
locationsId
)
SELECT 
'{{ occurrences }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
occurrences
;
```
</TabItem>
<TabItem value="projects_occurrences_create">

Creates a new occurrence.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__name,
data__resourceUri,
data__noteName,
data__kind,
data__remediation,
data__createTime,
data__updateTime,
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
data__sbomReference,
data__secret,
data__envelope,
projectsId
)
SELECT 
'{{ name }}',
'{{ resourceUri }}',
'{{ noteName }}',
'{{ kind }}',
'{{ remediation }}',
'{{ createTime }}',
'{{ updateTime }}',
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
'{{ sbomReference }}',
'{{ secret }}',
'{{ envelope }}',
'{{ projectsId }}'
RETURNING
name,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
;
```
</TabItem>
<TabItem value="projects_occurrences_batch_create">

Creates new occurrences in batch.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__occurrences,
projectsId
)
SELECT 
'{{ occurrences }}',
'{{ projectsId }}'
RETURNING
occurrences
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: occurrences
  props:
    - name: projectsId
      value: string
      description: Required parameter for the occurrences resource.
    - name: locationsId
      value: string
      description: Required parameter for the occurrences resource.
    - name: name
      value: string
      description: >
        Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
        
    - name: resourceUri
      value: string
      description: >
        Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.
        
    - name: noteName
      value: string
      description: >
        Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
        
    - name: kind
      value: string
      description: >
        Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
        
      valid_values: ['NOTE_KIND_UNSPECIFIED', 'VULNERABILITY', 'BUILD', 'IMAGE', 'PACKAGE', 'DEPLOYMENT', 'DISCOVERY', 'ATTESTATION', 'UPGRADE', 'COMPLIANCE', 'DSSE_ATTESTATION', 'VULNERABILITY_ASSESSMENT', 'SBOM_REFERENCE', 'SECRET']
    - name: remediation
      value: string
      description: >
        A description of actions that can be taken to remedy the note.
        
    - name: createTime
      value: string
      description: >
        Output only. The time this occurrence was created.
        
    - name: updateTime
      value: string
      description: >
        Output only. The time this occurrence was last updated.
        
    - name: vulnerability
      value: object
      description: >
        Describes a security vulnerability.
        
    - name: build
      value: object
      description: >
        Describes a verifiable build.
        
    - name: image
      value: object
      description: >
        Describes how this resource derives from the basis in the associated note.
        
    - name: package
      value: object
      description: >
        Describes the installation of a package on the linked resource.
        
    - name: deployment
      value: object
      description: >
        Describes the deployment of an artifact on a runtime.
        
    - name: discovery
      value: object
      description: >
        Describes when a resource was discovered.
        
    - name: attestation
      value: object
      description: >
        Describes an attestation of an artifact.
        
    - name: upgrade
      value: object
      description: >
        Describes an available package upgrade on the linked resource.
        
    - name: compliance
      value: object
      description: >
        Describes a compliance violation on a linked resource.
        
    - name: dsseAttestation
      value: object
      description: >
        Describes an attestation of an artifact using dsse.
        
    - name: sbomReference
      value: object
      description: >
        Describes a specific SBOM reference occurrences.
        
    - name: secret
      value: object
      description: >
        Describes a secret.
        
    - name: envelope
      value: object
      description: >
        https://github.com/secure-systems-lab/dsse
        
    - name: occurrences
      value: array
      description: >
        Required. The occurrences to create. Max allowed length is 1000.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_occurrences_patch"
    values={[
        { label: 'projects_locations_occurrences_patch', value: 'projects_locations_occurrences_patch' },
        { label: 'projects_occurrences_patch', value: 'projects_occurrences_patch' }
    ]}
>
<TabItem value="projects_locations_occurrences_patch">

Updates the specified occurrence.

```sql
UPDATE google.containeranalysis.occurrences
SET 
data__name = '{{ name }}',
data__resourceUri = '{{ resourceUri }}',
data__noteName = '{{ noteName }}',
data__kind = '{{ kind }}',
data__remediation = '{{ remediation }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
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
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__envelope = '{{ envelope }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
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
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability;
```
</TabItem>
<TabItem value="projects_occurrences_patch">

Updates the specified occurrence.

```sql
UPDATE google.containeranalysis.occurrences
SET 
data__name = '{{ name }}',
data__resourceUri = '{{ resourceUri }}',
data__noteName = '{{ noteName }}',
data__kind = '{{ kind }}',
data__remediation = '{{ remediation }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}',
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
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__envelope = '{{ envelope }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
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
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_occurrences_delete"
    values={[
        { label: 'projects_locations_occurrences_delete', value: 'projects_locations_occurrences_delete' },
        { label: 'projects_occurrences_delete', value: 'projects_occurrences_delete' }
    ]}
>
<TabItem value="projects_locations_occurrences_delete">

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

```sql
DELETE FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required;
```
</TabItem>
<TabItem value="projects_occurrences_delete">

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

```sql
DELETE FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required;
```
</TabItem>
</Tabs>
