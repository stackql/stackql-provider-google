--- 
title: occurrences_notes
hide_title: false
hide_table_of_contents: false
keywords:
  - occurrences_notes
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

Creates, updates, deletes, gets or lists an <code>occurrences_notes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>occurrences_notes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.containeranalysis.occurrences_notes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_occurrences_get_notes"
    values={[
        { label: 'projects_locations_occurrences_get_notes', value: 'projects_locations_occurrences_get_notes' },
        { label: 'projects_occurrences_get_notes', value: 'projects_occurrences_get_notes' }
    ]}
>
<TabItem value="projects_locations_occurrences_get_notes">

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
<TabItem value="projects_occurrences_get_notes">

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
    <td><a href="#projects_locations_occurrences_get_notes"><CopyableCode code="projects_locations_occurrences_get_notes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_get_notes"><CopyableCode code="projects_occurrences_get_notes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_occurrences_get_notes"
    values={[
        { label: 'projects_locations_occurrences_get_notes', value: 'projects_locations_occurrences_get_notes' },
        { label: 'projects_occurrences_get_notes', value: 'projects_occurrences_get_notes' }
    ]}
>
<TabItem value="projects_locations_occurrences_get_notes">

Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.

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
FROM google.containeranalysis.occurrences_notes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required;
```
</TabItem>
<TabItem value="projects_occurrences_get_notes">

Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.

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
FROM google.containeranalysis.occurrences_notes
WHERE projectsId = '{{ projectsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required;
```
</TabItem>
</Tabs>
