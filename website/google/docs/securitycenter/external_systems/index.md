--- 
title: external_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - external_systems
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

Creates, updates, deletes, gets or lists an <code>external_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>external_systems</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.external_systems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#folders_sources_findings_external_systems_patch"><CopyableCode code="folders_sources_findings_external_systems_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a>, <a href="#parameter-externalSystemsId"><code>externalSystemsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates external system. This is for a given finding.</td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_external_systems_patch"><CopyableCode code="projects_sources_findings_external_systems_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a>, <a href="#parameter-externalSystemsId"><code>externalSystemsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates external system. This is for a given finding.</td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_external_systems_patch"><CopyableCode code="organizations_sources_findings_external_systems_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a>, <a href="#parameter-externalSystemsId"><code>externalSystemsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates external system. This is for a given finding.</td>
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
<tr id="parameter-externalSystemsId">
    <td><CopyableCode code="externalSystemsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="folders_sources_findings_external_systems_patch"
    values={[
        { label: 'folders_sources_findings_external_systems_patch', value: 'folders_sources_findings_external_systems_patch' },
        { label: 'projects_sources_findings_external_systems_patch', value: 'projects_sources_findings_external_systems_patch' },
        { label: 'organizations_sources_findings_external_systems_patch', value: 'organizations_sources_findings_external_systems_patch' }
    ]}
>
<TabItem value="folders_sources_findings_external_systems_patch">

Updates external system. This is for a given finding.

```sql
UPDATE google.securitycenter.external_systems
SET 
data__name = '{{ name }}',
data__assignees = '{{ assignees }}',
data__externalUid = '{{ externalUid }}',
data__status = '{{ status }}',
data__externalSystemUpdateTime = '{{ externalSystemUpdateTime }}',
data__caseUri = '{{ caseUri }}',
data__casePriority = '{{ casePriority }}',
data__caseSla = '{{ caseSla }}',
data__caseCreateTime = '{{ caseCreateTime }}',
data__caseCloseTime = '{{ caseCloseTime }}',
data__ticketInfo = '{{ ticketInfo }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND externalSystemsId = '{{ externalSystemsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
assignees,
caseCloseTime,
caseCreateTime,
casePriority,
caseSla,
caseUri,
externalSystemUpdateTime,
externalUid,
status,
ticketInfo;
```
</TabItem>
<TabItem value="projects_sources_findings_external_systems_patch">

Updates external system. This is for a given finding.

```sql
UPDATE google.securitycenter.external_systems
SET 
data__name = '{{ name }}',
data__assignees = '{{ assignees }}',
data__externalUid = '{{ externalUid }}',
data__status = '{{ status }}',
data__externalSystemUpdateTime = '{{ externalSystemUpdateTime }}',
data__caseUri = '{{ caseUri }}',
data__casePriority = '{{ casePriority }}',
data__caseSla = '{{ caseSla }}',
data__caseCreateTime = '{{ caseCreateTime }}',
data__caseCloseTime = '{{ caseCloseTime }}',
data__ticketInfo = '{{ ticketInfo }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND externalSystemsId = '{{ externalSystemsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
assignees,
caseCloseTime,
caseCreateTime,
casePriority,
caseSla,
caseUri,
externalSystemUpdateTime,
externalUid,
status,
ticketInfo;
```
</TabItem>
<TabItem value="organizations_sources_findings_external_systems_patch">

Updates external system. This is for a given finding.

```sql
UPDATE google.securitycenter.external_systems
SET 
data__name = '{{ name }}',
data__assignees = '{{ assignees }}',
data__externalUid = '{{ externalUid }}',
data__status = '{{ status }}',
data__externalSystemUpdateTime = '{{ externalSystemUpdateTime }}',
data__caseUri = '{{ caseUri }}',
data__casePriority = '{{ casePriority }}',
data__caseSla = '{{ caseSla }}',
data__caseCreateTime = '{{ caseCreateTime }}',
data__caseCloseTime = '{{ caseCloseTime }}',
data__ticketInfo = '{{ ticketInfo }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND externalSystemsId = '{{ externalSystemsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
assignees,
caseCloseTime,
caseCreateTime,
casePriority,
caseSla,
caseUri,
externalSystemUpdateTime,
externalUid,
status,
ticketInfo;
```
</TabItem>
</Tabs>
