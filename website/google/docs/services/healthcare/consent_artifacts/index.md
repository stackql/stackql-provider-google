--- 
title: consent_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - consent_artifacts
  - healthcare
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

Creates, updates, deletes, gets or lists a <code>consent_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>consent_artifacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.consent_artifacts" /></td></tr>
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
    <td>Identifier. Resource name of the Consent artifact, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consentArtifacts/&#123;consent_artifact_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="consentContentScreenshots" /></td>
    <td><code>array</code></td>
    <td>Optional. Screenshots, PDFs, or other binary information documenting the user's consent.</td>
</tr>
<tr>
    <td><CopyableCode code="consentContentVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. An string indicating the version of the consent information shown to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="guardianSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. A signature from a guardian. (id: Signature)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Required. User's UUID provided by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="userSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. User's signature. (id: Signature)</td>
</tr>
<tr>
    <td><CopyableCode code="witnessSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. A signature from a witness. (id: Signature)</td>
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
    <td>Identifier. Resource name of the Consent artifact, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consentArtifacts/&#123;consent_artifact_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="consentContentScreenshots" /></td>
    <td><code>array</code></td>
    <td>Optional. Screenshots, PDFs, or other binary information documenting the user's consent.</td>
</tr>
<tr>
    <td><CopyableCode code="consentContentVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. An string indicating the version of the consent information shown to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="guardianSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. A signature from a guardian. (id: Signature)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Required. User's UUID provided by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="userSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. User's signature. (id: Signature)</td>
</tr>
<tr>
    <td><CopyableCode code="witnessSignature" /></td>
    <td><code>object</code></td>
    <td>Optional. A signature from a witness. (id: Signature)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-consentArtifactsId"><code>consentArtifactsId</code></a></td>
    <td></td>
    <td>Gets the specified Consent artifact.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the Consent artifacts in the specified consent store.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Creates a new Consent artifact in the parent consent store.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-consentArtifactsId"><code>consentArtifactsId</code></a></td>
    <td></td>
    <td>Deletes the specified Consent artifact. Fails if the artifact is referenced by the latest revision of any Consent.</td>
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
<tr id="parameter-consentArtifactsId">
    <td><CopyableCode code="consentArtifactsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-consentStoresId">
    <td><CopyableCode code="consentStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified Consent artifact.

```sql
SELECT
name,
consentContentScreenshots,
consentContentVersion,
guardianSignature,
metadata,
userId,
userSignature,
witnessSignature
FROM google.healthcare.consent_artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required
AND consentArtifactsId = '{{ consentArtifactsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Consent artifacts in the specified consent store.

```sql
SELECT
name,
consentContentScreenshots,
consentContentVersion,
guardianSignature,
metadata,
userId,
userSignature,
witnessSignature
FROM google.healthcare.consent_artifacts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new Consent artifact in the parent consent store.

```sql
INSERT INTO google.healthcare.consent_artifacts (
data__name,
data__userId,
data__userSignature,
data__guardianSignature,
data__witnessSignature,
data__consentContentScreenshots,
data__consentContentVersion,
data__metadata,
projectsId,
locationsId,
datasetsId,
consentStoresId
)
SELECT 
'{{ name }}',
'{{ userId }}',
'{{ userSignature }}',
'{{ guardianSignature }}',
'{{ witnessSignature }}',
'{{ consentContentScreenshots }}',
'{{ consentContentVersion }}',
'{{ metadata }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ consentStoresId }}'
RETURNING
name,
consentContentScreenshots,
consentContentVersion,
guardianSignature,
metadata,
userId,
userSignature,
witnessSignature
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: consent_artifacts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the consent_artifacts resource.
    - name: locationsId
      value: string
      description: Required parameter for the consent_artifacts resource.
    - name: datasetsId
      value: string
      description: Required parameter for the consent_artifacts resource.
    - name: consentStoresId
      value: string
      description: Required parameter for the consent_artifacts resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation.
        
    - name: userId
      value: string
      description: >
        Required. User's UUID provided by the client.
        
    - name: userSignature
      value: object
      description: >
        Optional. User's signature.
        
    - name: guardianSignature
      value: object
      description: >
        Optional. A signature from a guardian.
        
    - name: witnessSignature
      value: object
      description: >
        Optional. A signature from a witness.
        
    - name: consentContentScreenshots
      value: array
      description: >
        Optional. Screenshots, PDFs, or other binary information documenting the user's consent.
        
    - name: consentContentVersion
      value: string
      description: >
        Optional. An string indicating the version of the consent information shown to the user.
        
    - name: metadata
      value: object
      description: >
        Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.
        
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

Deletes the specified Consent artifact. Fails if the artifact is referenced by the latest revision of any Consent.

```sql
DELETE FROM google.healthcare.consent_artifacts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required
AND consentArtifactsId = '{{ consentArtifactsId }}' --required;
```
</TabItem>
</Tabs>
