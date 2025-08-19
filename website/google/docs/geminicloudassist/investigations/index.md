--- 
title: investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - investigations
  - geminicloudassist
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

Creates, updates, deletes, gets or lists an <code>investigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>investigations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.geminicloudassist.investigations" /></td></tr>
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

Message describing Investigation object Next Id: 24

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
    <td>Identifier. name of resource</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations on the investigation. Unlike labels, these may carry semantic meaning in running the investigation, and will not be read by other systems such as billing. (id: InvestigationAnnotations)</td>
</tr>
<tr>
    <td><CopyableCode code="clarificationsNeeded" /></td>
    <td><code>object</code></td>
    <td>Optional. Questions that the system needs to ask the user. The results will be passed back by the UI as new Observations. The ID for those observations will be the key of the entry in the clarifications_needed map.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="dataVersion" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The data model version of this Investigation. Should be either 1 or 2. Treat 0 as 1. If 1, use V1 Investigation data model. If 2, use the Investigation Observation data model.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] If the investigation execution state is FAILED, this field will contain the error message. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="executionState" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] The execution state of this investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="observations" /></td>
    <td><code>object</code></td>
    <td>Optional. A map from observation ID to the observation. This is a map so that we can cleanly overwrite old observations with the version from the latest revision. See Observation for guidance on choosing IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="observerStatuses" /></td>
    <td><code>object</code></td>
    <td>Optional. Plural version of above. Code will transition to this over time.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. The Run operation most recently performed on the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] Current revision of the investigation</td>
</tr>
<tr>
    <td><CopyableCode code="revisionIndex" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output only] Index of the current revision of the investigation. 1-based.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionPredecessor" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the revision that was this revision's predecessor. The UI, for example, will set this to the existing revision when when a new revision is created due to an edit.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Required. Human-readable display title for the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing Investigations

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
    <td><CopyableCode code="investigations" /></td>
    <td><code>array</code></td>
    <td>The list of Investigation</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Investigation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Investigations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-investigationId"><code>investigationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Investigation in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Investigation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Investigation.</td>
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
<tr id="parameter-investigationsId">
    <td><CopyableCode code="investigationsId" /></td>
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
<tr id="parameter-investigationId">
    <td><CopyableCode code="investigationId" /></td>
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

Gets details of a single Investigation.

```sql
SELECT
name,
annotations,
clarificationsNeeded,
createTime,
dataVersion,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime
FROM google.geminicloudassist.investigations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND investigationsId = '{{ investigationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Investigations in a given project and location.

```sql
SELECT
investigations,
nextPageToken,
unreachable
FROM google.geminicloudassist.investigations
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

Creates a new Investigation in a given project and location.

```sql
INSERT INTO google.geminicloudassist.investigations (
data__name,
data__labels,
data__revisionPredecessor,
data__annotations,
data__title,
data__observations,
data__observerStatuses,
data__dataVersion,
data__clarificationsNeeded,
projectsId,
locationsId,
investigationId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ revisionPredecessor }}',
'{{ annotations }}',
'{{ title }}',
'{{ observations }}',
'{{ observerStatuses }}',
{{ dataVersion }},
'{{ clarificationsNeeded }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ investigationId }}',
'{{ requestId }}'
RETURNING
name,
annotations,
clarificationsNeeded,
createTime,
dataVersion,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: investigations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the investigations resource.
    - name: locationsId
      value: string
      description: Required parameter for the investigations resource.
    - name: name
      value: string
      description: >
        Identifier. name of resource
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: revisionPredecessor
      value: string
      description: >
        Optional. The name of the revision that was this revision's predecessor. The UI, for example, will set this to the existing revision when when a new revision is created due to an edit.
        
    - name: annotations
      value: object
      description: >
        Optional. Annotations on the investigation. Unlike labels, these may carry semantic meaning in running the investigation, and will not be read by other systems such as billing.
        
    - name: title
      value: string
      description: >
        Required. Human-readable display title for the investigation.
        
    - name: observations
      value: object
      description: >
        Optional. A map from observation ID to the observation. This is a map so that we can cleanly overwrite old observations with the version from the latest revision. See Observation for guidance on choosing IDs.
        
    - name: observerStatuses
      value: object
      description: >
        Optional. Plural version of above. Code will transition to this over time.
        
    - name: dataVersion
      value: integer
      description: >
        Optional. The data model version of this Investigation. Should be either 1 or 2. Treat 0 as 1. If 1, use V1 Investigation data model. If 2, use the Investigation Observation data model.
        
    - name: clarificationsNeeded
      value: object
      description: >
        Optional. Questions that the system needs to ask the user. The results will be passed back by the UI as new Observations. The ID for those observations will be the key of the entry in the clarifications_needed map.
        
    - name: investigationId
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

Updates the parameters of a single Investigation.

```sql
UPDATE google.geminicloudassist.investigations
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__revisionPredecessor = '{{ revisionPredecessor }}',
data__annotations = '{{ annotations }}',
data__title = '{{ title }}',
data__observations = '{{ observations }}',
data__observerStatuses = '{{ observerStatuses }}',
data__dataVersion = {{ dataVersion }},
data__clarificationsNeeded = '{{ clarificationsNeeded }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND investigationsId = '{{ investigationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
annotations,
clarificationsNeeded,
createTime,
dataVersion,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime;
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

Deletes a single Investigation.

```sql
DELETE FROM google.geminicloudassist.investigations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND investigationsId = '{{ investigationsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
