--- 
title: replays
hide_title: false
hide_table_of_contents: false
keywords:
  - replays
  - policysimulator
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

Creates, updates, deletes, gets or lists a <code>replays</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>replays</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.policysimulator.replays" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_replays_get"
    values={[
        { label: 'projects_locations_replays_get', value: 'projects_locations_replays_get' },
        { label: 'folders_locations_replays_get', value: 'folders_locations_replays_get' },
        { label: 'organizations_locations_replays_get', value: 'organizations_locations_replays_get' }
    ]}
>
<TabItem value="projects_locations_replays_get">

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
    <td>Output only. The resource name of the `Replay`, which has the following format: `&#123;projects|folders|organizations&#125;/&#123;resource-id&#125;/locations/global/replays/&#123;replay-id&#125;`, where `&#123;resource-id&#125;` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration used for the `Replay`. (id: GoogleCloudPolicysimulatorV1ReplayConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="resultsSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Summary statistics about the replayed log entries. (id: GoogleCloudPolicysimulatorV1ReplayResultsSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the `Replay`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_replays_get">

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
    <td>Output only. The resource name of the `Replay`, which has the following format: `&#123;projects|folders|organizations&#125;/&#123;resource-id&#125;/locations/global/replays/&#123;replay-id&#125;`, where `&#123;resource-id&#125;` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration used for the `Replay`. (id: GoogleCloudPolicysimulatorV1ReplayConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="resultsSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Summary statistics about the replayed log entries. (id: GoogleCloudPolicysimulatorV1ReplayResultsSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the `Replay`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_replays_get">

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
    <td>Output only. The resource name of the `Replay`, which has the following format: `&#123;projects|folders|organizations&#125;/&#123;resource-id&#125;/locations/global/replays/&#123;replay-id&#125;`, where `&#123;resource-id&#125;` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration used for the `Replay`. (id: GoogleCloudPolicysimulatorV1ReplayConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="resultsSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Summary statistics about the replayed log entries. (id: GoogleCloudPolicysimulatorV1ReplayResultsSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the `Replay`.</td>
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
    <td><a href="#projects_locations_replays_get"><CopyableCode code="projects_locations_replays_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td></td>
    <td>Gets the specified Replay. Each `Replay` is available for at least 7 days.</td>
</tr>
<tr>
    <td><a href="#folders_locations_replays_get"><CopyableCode code="folders_locations_replays_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td></td>
    <td>Gets the specified Replay. Each `Replay` is available for at least 7 days.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_replays_get"><CopyableCode code="organizations_locations_replays_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td></td>
    <td>Gets the specified Replay. Each `Replay` is available for at least 7 days.</td>
</tr>
<tr>
    <td><a href="#projects_locations_replays_create"><CopyableCode code="projects_locations_replays_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates and starts a Replay using the given ReplayConfig.</td>
</tr>
<tr>
    <td><a href="#folders_locations_replays_create"><CopyableCode code="folders_locations_replays_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates and starts a Replay using the given ReplayConfig.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_replays_create"><CopyableCode code="organizations_locations_replays_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates and starts a Replay using the given ReplayConfig.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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
<tr id="parameter-replaysId">
    <td><CopyableCode code="replaysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_replays_get"
    values={[
        { label: 'projects_locations_replays_get', value: 'projects_locations_replays_get' },
        { label: 'folders_locations_replays_get', value: 'folders_locations_replays_get' },
        { label: 'organizations_locations_replays_get', value: 'organizations_locations_replays_get' }
    ]}
>
<TabItem value="projects_locations_replays_get">

Gets the specified Replay. Each `Replay` is available for at least 7 days.

```sql
SELECT
name,
config,
resultsSummary,
state
FROM google.policysimulator.replays
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_replays_get">

Gets the specified Replay. Each `Replay` is available for at least 7 days.

```sql
SELECT
name,
config,
resultsSummary,
state
FROM google.policysimulator.replays
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_replays_get">

Gets the specified Replay. Each `Replay` is available for at least 7 days.

```sql
SELECT
name,
config,
resultsSummary,
state
FROM google.policysimulator.replays
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_replays_create"
    values={[
        { label: 'projects_locations_replays_create', value: 'projects_locations_replays_create' },
        { label: 'folders_locations_replays_create', value: 'folders_locations_replays_create' },
        { label: 'organizations_locations_replays_create', value: 'organizations_locations_replays_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_replays_create">

Creates and starts a Replay using the given ReplayConfig.

```sql
INSERT INTO google.policysimulator.replays (
data__config,
projectsId,
locationsId
)
SELECT 
'{{ config }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="folders_locations_replays_create">

Creates and starts a Replay using the given ReplayConfig.

```sql
INSERT INTO google.policysimulator.replays (
data__config,
foldersId,
locationsId
)
SELECT 
'{{ config }}',
'{{ foldersId }}',
'{{ locationsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="organizations_locations_replays_create">

Creates and starts a Replay using the given ReplayConfig.

```sql
INSERT INTO google.policysimulator.replays (
data__config,
organizationsId,
locationsId
)
SELECT 
'{{ config }}',
'{{ organizationsId }}',
'{{ locationsId }}'
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
- name: replays
  props:
    - name: projectsId
      value: string
      description: Required parameter for the replays resource.
    - name: locationsId
      value: string
      description: Required parameter for the replays resource.
    - name: foldersId
      value: string
      description: Required parameter for the replays resource.
    - name: organizationsId
      value: string
      description: Required parameter for the replays resource.
    - name: config
      value: object
      description: >
        Required. The configuration used for the `Replay`.
        
```
</TabItem>
</Tabs>
