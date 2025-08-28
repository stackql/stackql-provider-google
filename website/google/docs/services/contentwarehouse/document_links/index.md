--- 
title: document_links
hide_title: false
hide_table_of_contents: false
keywords:
  - document_links
  - contentwarehouse
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

Creates, updates, deletes, gets or lists a <code>document_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>document_links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contentwarehouse.document_links" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Create a link between a source document and a target document.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentLinksId"><code>documentLinksId</code></a></td>
    <td></td>
    <td>Remove the link between the source and target documents.</td>
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
<tr id="parameter-documentLinksId">
    <td><CopyableCode code="documentLinksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a link between a source document and a target document.

```sql
INSERT INTO google.contentwarehouse.document_links (
data__requestMetadata,
data__documentLink,
projectsId,
locationsId,
documentsId
)
SELECT 
'{{ requestMetadata }}',
'{{ documentLink }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ documentsId }}'
RETURNING
name,
createTime,
description,
sourceDocumentReference,
state,
targetDocumentReference,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: document_links
  props:
    - name: projectsId
      value: string
      description: Required parameter for the document_links resource.
    - name: locationsId
      value: string
      description: Required parameter for the document_links resource.
    - name: documentsId
      value: string
      description: Required parameter for the document_links resource.
    - name: requestMetadata
      value: object
      description: >
        The meta information collected about the document creator, used to enforce access control for the service.
        
    - name: documentLink
      value: object
      description: >
        A document-link between source and target document.
        
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

Remove the link between the source and target documents.

```sql
DELETE FROM google.contentwarehouse.document_links
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND documentsId = '{{ documentsId }}' --required
AND documentLinksId = '{{ documentLinksId }}' --required;
```
</TabItem>
</Tabs>
