--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.revisions" /></td></tr>
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

A revision of a QaScorecard. Modifying published scorecard fields would invalidate existing scorecard results — the questions may have changed, or the score weighting will make existing scores impossible to understand. So changes must create a new revision, rather than modifying the existing resource.

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
    <td>Identifier. The name of the scorecard revision. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/qaScorecards/&#123;qa_scorecard&#125;/revisions/&#123;revision&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="alternateIds" /></td>
    <td><code>array</code></td>
    <td>Output only. Alternative IDs for this revision of the scorecard, e.g., `latest`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>A QaScorecard represents a collection of questions to be scored during analysis. (id: GoogleCloudContactcenterinsightsV1QaScorecard)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the scorecard revision, indicating whether it's ready to be used in analysis.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response from a ListQaScorecardRevisions request.

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
    <td><CopyableCode code="qaScorecardRevisions" /></td>
    <td><code>array</code></td>
    <td>The QaScorecards under the parent.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Gets a QaScorecardRevision.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all revisions under the parent QaScorecard.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a></td>
    <td><a href="#parameter-qaScorecardRevisionId"><code>qaScorecardRevisionId</code></a></td>
    <td>Creates a QaScorecardRevision.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a QaScorecardRevision.</td>
</tr>
<tr>
    <td><a href="#tune_qa_scorecard_revision"><CopyableCode code="tune_qa_scorecard_revision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Fine tune one or more QaModels.</td>
</tr>
<tr>
    <td><a href="#deploy"><CopyableCode code="deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deploy a QaScorecardRevision.</td>
</tr>
<tr>
    <td><a href="#undeploy"><CopyableCode code="undeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaScorecardsId"><code>qaScorecardsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Undeploy a QaScorecardRevision.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-qaScorecardsId">
    <td><CopyableCode code="qaScorecardsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-qaScorecardRevisionId">
    <td><CopyableCode code="qaScorecardRevisionId" /></td>
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

Gets a QaScorecardRevision.

```sql
SELECT
name,
alternateIds,
createTime,
snapshot,
state
FROM google.contactcenterinsights.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND qaScorecardsId = '{{ qaScorecardsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all revisions under the parent QaScorecard.

```sql
SELECT
nextPageToken,
qaScorecardRevisions
FROM google.contactcenterinsights.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND qaScorecardsId = '{{ qaScorecardsId }}' -- required
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

Creates a QaScorecardRevision.

```sql
INSERT INTO google.contactcenterinsights.revisions (
data__name,
data__snapshot,
projectsId,
locationsId,
qaScorecardsId,
qaScorecardRevisionId
)
SELECT 
'{{ name }}',
'{{ snapshot }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ qaScorecardsId }}',
'{{ qaScorecardRevisionId }}'
RETURNING
name,
alternateIds,
createTime,
snapshot,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: revisions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the revisions resource.
    - name: locationsId
      value: string
      description: Required parameter for the revisions resource.
    - name: qaScorecardsId
      value: string
      description: Required parameter for the revisions resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the scorecard revision. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}/revisions/{revision}
        
    - name: snapshot
      value: object
      description: >
        A QaScorecard represents a collection of questions to be scored during analysis.
        
    - name: qaScorecardRevisionId
      value: string
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

Deletes a QaScorecardRevision.

```sql
DELETE FROM google.contactcenterinsights.revisions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND qaScorecardsId = '{{ qaScorecardsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="tune_qa_scorecard_revision"
    values={[
        { label: 'tune_qa_scorecard_revision', value: 'tune_qa_scorecard_revision' },
        { label: 'deploy', value: 'deploy' },
        { label: 'undeploy', value: 'undeploy' }
    ]}
>
<TabItem value="tune_qa_scorecard_revision">

Fine tune one or more QaModels.

```sql
EXEC google.contactcenterinsights.revisions.tune_qa_scorecard_revision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@qaScorecardsId='{{ qaScorecardsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="deploy">

Deploy a QaScorecardRevision.

```sql
EXEC google.contactcenterinsights.revisions.deploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@qaScorecardsId='{{ qaScorecardsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required;
```
</TabItem>
<TabItem value="undeploy">

Undeploy a QaScorecardRevision.

```sql
EXEC google.contactcenterinsights.revisions.undeploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@qaScorecardsId='{{ qaScorecardsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>
