--- 
title: query_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - query_templates
  - analyticshub
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

Creates, updates, deletes, gets or lists a <code>query_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>query_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.analyticshub.query_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_exchanges_query_templates_get"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_get', value: 'projects_locations_data_exchanges_query_templates_get' },
        { label: 'projects_locations_data_exchanges_query_templates_list', value: 'projects_locations_data_exchanges_query_templates_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_get">

A query template is a container for sharing table-valued functions defined by contributors in a data clean room.

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
    <td>Output only. The resource name of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/456`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the QueryTemplate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Short description of the QueryTemplate. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human-readable display name of the QueryTemplate. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>string</code></td>
    <td>Optional. Documentation describing the QueryTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryContact" /></td>
    <td><code>string</code></td>
    <td>Optional. Email or URL of the primary point of contact of the QueryTemplate. Max Length: 1000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="proposer" /></td>
    <td><code>string</code></td>
    <td>Optional. Will be deprecated. Email or URL of the primary point of contact of the QueryTemplate. Max Length: 1000 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="routine" /></td>
    <td><code>object</code></td>
    <td>Optional. The routine associated with the QueryTemplate. (id: Routine)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The QueryTemplate lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the QueryTemplate was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_exchanges_query_templates_list">

Message for response to the list of QueryTemplates.

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
    <td>A token to request the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="queryTemplates" /></td>
    <td><code>array</code></td>
    <td>The list of QueryTemplates.</td>
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
    <td><a href="#projects_locations_data_exchanges_query_templates_get"><CopyableCode code="projects_locations_data_exchanges_query_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-queryTemplatesId"><code>queryTemplatesId</code></a></td>
    <td></td>
    <td>Gets a QueryTemplate</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_list"><CopyableCode code="projects_locations_data_exchanges_query_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all QueryTemplates in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_create"><CopyableCode code="projects_locations_data_exchanges_query_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a></td>
    <td><a href="#parameter-queryTemplateId"><code>queryTemplateId</code></a></td>
    <td>Creates a new QueryTemplate</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_patch"><CopyableCode code="projects_locations_data_exchanges_query_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-queryTemplatesId"><code>queryTemplatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing QueryTemplate</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_delete"><CopyableCode code="projects_locations_data_exchanges_query_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-queryTemplatesId"><code>queryTemplatesId</code></a></td>
    <td></td>
    <td>Deletes a query template.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_submit"><CopyableCode code="projects_locations_data_exchanges_query_templates_submit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-queryTemplatesId"><code>queryTemplatesId</code></a></td>
    <td></td>
    <td>Submits a query template for approval.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_exchanges_query_templates_approve"><CopyableCode code="projects_locations_data_exchanges_query_templates_approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataExchangesId"><code>dataExchangesId</code></a>, <a href="#parameter-queryTemplatesId"><code>queryTemplatesId</code></a></td>
    <td></td>
    <td>Approves a query template.</td>
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
<tr id="parameter-dataExchangesId">
    <td><CopyableCode code="dataExchangesId" /></td>
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
<tr id="parameter-queryTemplatesId">
    <td><CopyableCode code="queryTemplatesId" /></td>
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
<tr id="parameter-queryTemplateId">
    <td><CopyableCode code="queryTemplateId" /></td>
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
    defaultValue="projects_locations_data_exchanges_query_templates_get"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_get', value: 'projects_locations_data_exchanges_query_templates_get' },
        { label: 'projects_locations_data_exchanges_query_templates_list', value: 'projects_locations_data_exchanges_query_templates_list' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_get">

Gets a QueryTemplate

```sql
SELECT
name,
createTime,
description,
displayName,
documentation,
primaryContact,
proposer,
routine,
state,
updateTime
FROM google.analyticshub.query_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND queryTemplatesId = '{{ queryTemplatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_exchanges_query_templates_list">

Lists all QueryTemplates in a given project and location.

```sql
SELECT
nextPageToken,
queryTemplates
FROM google.analyticshub.query_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataExchangesId = '{{ dataExchangesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_query_templates_create"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_create', value: 'projects_locations_data_exchanges_query_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_create">

Creates a new QueryTemplate

```sql
INSERT INTO google.analyticshub.query_templates (
data__displayName,
data__description,
data__proposer,
data__primaryContact,
data__documentation,
data__routine,
projectsId,
locationsId,
dataExchangesId,
queryTemplateId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ proposer }}',
'{{ primaryContact }}',
'{{ documentation }}',
'{{ routine }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataExchangesId }}',
'{{ queryTemplateId }}'
RETURNING
name,
createTime,
description,
displayName,
documentation,
primaryContact,
proposer,
routine,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: query_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the query_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the query_templates resource.
    - name: dataExchangesId
      value: string
      description: Required parameter for the query_templates resource.
    - name: displayName
      value: string
      description: >
        Required. Human-readable display name of the QueryTemplate. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.
        
    - name: description
      value: string
      description: >
        Optional. Short description of the QueryTemplate. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
        
    - name: proposer
      value: string
      description: >
        Optional. Will be deprecated. Email or URL of the primary point of contact of the QueryTemplate. Max Length: 1000 bytes.
        
    - name: primaryContact
      value: string
      description: >
        Optional. Email or URL of the primary point of contact of the QueryTemplate. Max Length: 1000 bytes.
        
    - name: documentation
      value: string
      description: >
        Optional. Documentation describing the QueryTemplate.
        
    - name: routine
      value: object
      description: >
        Optional. The routine associated with the QueryTemplate.
        
    - name: queryTemplateId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_query_templates_patch"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_patch', value: 'projects_locations_data_exchanges_query_templates_patch' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_patch">

Updates an existing QueryTemplate

```sql
UPDATE google.analyticshub.query_templates
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__proposer = '{{ proposer }}',
data__primaryContact = '{{ primaryContact }}',
data__documentation = '{{ documentation }}',
data__routine = '{{ routine }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required
AND queryTemplatesId = '{{ queryTemplatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
documentation,
primaryContact,
proposer,
routine,
state,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_data_exchanges_query_templates_delete"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_delete', value: 'projects_locations_data_exchanges_query_templates_delete' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_delete">

Deletes a query template.

```sql
DELETE FROM google.analyticshub.query_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataExchangesId = '{{ dataExchangesId }}' --required
AND queryTemplatesId = '{{ queryTemplatesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_data_exchanges_query_templates_submit"
    values={[
        { label: 'projects_locations_data_exchanges_query_templates_submit', value: 'projects_locations_data_exchanges_query_templates_submit' },
        { label: 'projects_locations_data_exchanges_query_templates_approve', value: 'projects_locations_data_exchanges_query_templates_approve' }
    ]}
>
<TabItem value="projects_locations_data_exchanges_query_templates_submit">

Submits a query template for approval.

```sql
EXEC google.analyticshub.query_templates.projects_locations_data_exchanges_query_templates_submit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataExchangesId='{{ dataExchangesId }}' --required, 
@queryTemplatesId='{{ queryTemplatesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_exchanges_query_templates_approve">

Approves a query template.

```sql
EXEC google.analyticshub.query_templates.projects_locations_data_exchanges_query_templates_approve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataExchangesId='{{ dataExchangesId }}' --required, 
@queryTemplatesId='{{ queryTemplatesId }}' --required;
```
</TabItem>
</Tabs>
