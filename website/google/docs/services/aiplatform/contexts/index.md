--- 
title: contexts
hide_title: false
hide_table_of_contents: false
keywords:
  - contexts
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>contexts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>contexts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.contexts" /></td></tr>
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
    <td>Immutable. The resource name of the Context.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Context</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the Context. May be up to 128 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Contexts. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Context (System labels are excluded).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Properties of the Context. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.</td>
</tr>
<tr>
    <td><CopyableCode code="parentContexts" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of resource names of Contexts that are parents of this Context. A Context may have at most 10 parent_contexts.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the schema in schema_name to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Context was last updated.</td>
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
    <td>Immutable. The resource name of the Context.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Context</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the Context. May be up to 128 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Contexts. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Context (System labels are excluded).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Properties of the Context. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.</td>
</tr>
<tr>
    <td><CopyableCode code="parentContexts" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of resource names of Contexts that are parents of this Context. A Context may have at most 10 parent_contexts.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the schema in schema_name to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Context was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Retrieves a specific Context.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Contexts on the MetadataStore.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td><a href="#parameter-contextId"><code>contextId</code></a></td>
    <td>Creates a Context associated with a MetadataStore.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a stored Context.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a stored Context.</td>
</tr>
<tr>
    <td><a href="#retrieve_contexts"><CopyableCode code="retrieve_contexts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves relevant contexts for a query.</td>
</tr>
<tr>
    <td><a href="#purge"><CopyableCode code="purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td></td>
    <td>Purges Contexts.</td>
</tr>
<tr>
    <td><a href="#add_context_artifacts_and_executions"><CopyableCode code="add_context_artifacts_and_executions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.</td>
</tr>
<tr>
    <td><a href="#add_context_children"><CopyableCode code="add_context_children" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Adds a set of Contexts as children to a parent Context. If any of the child Contexts have already been added to the parent Context, they are simply skipped. If this call would create a cycle or cause any Context to have more than 10 parents, the request will fail with an INVALID_ARGUMENT error.</td>
</tr>
<tr>
    <td><a href="#remove_context_children"><CopyableCode code="remove_context_children" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-contextsId"><code>contextsId</code></a></td>
    <td></td>
    <td>Remove a set of children contexts from a parent Context. If any of the child Contexts were NOT added to the parent Context, they are simply skipped.</td>
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
<tr id="parameter-contextsId">
    <td><CopyableCode code="contextsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-metadataStoresId">
    <td><CopyableCode code="metadataStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-contextId">
    <td><CopyableCode code="contextId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Retrieves a specific Context.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
parentContexts,
schemaTitle,
schemaVersion,
updateTime
FROM google.aiplatform.contexts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataStoresId = '{{ metadataStoresId }}' -- required
AND contextsId = '{{ contextsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Contexts on the MetadataStore.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
parentContexts,
schemaTitle,
schemaVersion,
updateTime
FROM google.aiplatform.contexts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataStoresId = '{{ metadataStoresId }}' -- required
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

Creates a Context associated with a MetadataStore.

```sql
INSERT INTO google.aiplatform.contexts (
data__name,
data__displayName,
data__etag,
data__labels,
data__schemaTitle,
data__schemaVersion,
data__metadata,
data__description,
projectsId,
locationsId,
metadataStoresId,
contextId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ etag }}',
'{{ labels }}',
'{{ schemaTitle }}',
'{{ schemaVersion }}',
'{{ metadata }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ metadataStoresId }}',
'{{ contextId }}'
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
parentContexts,
schemaTitle,
schemaVersion,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: contexts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the contexts resource.
    - name: locationsId
      value: string
      description: Required parameter for the contexts resource.
    - name: metadataStoresId
      value: string
      description: Required parameter for the contexts resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the Context.
        
    - name: displayName
      value: string
      description: >
        User provided display name of the Context. May be up to 128 Unicode characters.
        
    - name: etag
      value: string
      description: >
        An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your Contexts. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Context (System labels are excluded).
        
    - name: schemaTitle
      value: string
      description: >
        The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.
        
    - name: schemaVersion
      value: string
      description: >
        The version of the schema in schema_name to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.
        
    - name: metadata
      value: object
      description: >
        Properties of the Context. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.
        
    - name: description
      value: string
      description: >
        Description of the Context
        
    - name: contextId
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

Updates a stored Context.

```sql
UPDATE google.aiplatform.contexts
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__schemaTitle = '{{ schemaTitle }}',
data__schemaVersion = '{{ schemaVersion }}',
data__metadata = '{{ metadata }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataStoresId = '{{ metadataStoresId }}' --required
AND contextsId = '{{ contextsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
parentContexts,
schemaTitle,
schemaVersion,
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

Deletes a stored Context.

```sql
DELETE FROM google.aiplatform.contexts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataStoresId = '{{ metadataStoresId }}' --required
AND contextsId = '{{ contextsId }}' --required
AND force = '{{ force }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="retrieve_contexts"
    values={[
        { label: 'retrieve_contexts', value: 'retrieve_contexts' },
        { label: 'purge', value: 'purge' },
        { label: 'add_context_artifacts_and_executions', value: 'add_context_artifacts_and_executions' },
        { label: 'add_context_children', value: 'add_context_children' },
        { label: 'remove_context_children', value: 'remove_context_children' }
    ]}
>
<TabItem value="retrieve_contexts">

Retrieves relevant contexts for a query.

```sql
EXEC google.aiplatform.contexts.retrieve_contexts 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"vertexRagStore": "{{ vertexRagStore }}", 
"query": "{{ query }}"
}';
```
</TabItem>
<TabItem value="purge">

Purges Contexts.

```sql
EXEC google.aiplatform.contexts.purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="add_context_artifacts_and_executions">

Adds a set of Artifacts and Executions to a Context. If any of the Artifacts or Executions have already been added to a Context, they are simply skipped.

```sql
EXEC google.aiplatform.contexts.add_context_artifacts_and_executions 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required, 
@contextsId='{{ contextsId }}' --required 
@@json=
'{
"artifacts": "{{ artifacts }}", 
"executions": "{{ executions }}"
}';
```
</TabItem>
<TabItem value="add_context_children">

Adds a set of Contexts as children to a parent Context. If any of the child Contexts have already been added to the parent Context, they are simply skipped. If this call would create a cycle or cause any Context to have more than 10 parents, the request will fail with an INVALID_ARGUMENT error.

```sql
EXEC google.aiplatform.contexts.add_context_children 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required, 
@contextsId='{{ contextsId }}' --required 
@@json=
'{
"childContexts": "{{ childContexts }}"
}';
```
</TabItem>
<TabItem value="remove_context_children">

Remove a set of children contexts from a parent Context. If any of the child Contexts were NOT added to the parent Context, they are simply skipped.

```sql
EXEC google.aiplatform.contexts.remove_context_children 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required, 
@contextsId='{{ contextsId }}' --required 
@@json=
'{
"childContexts": "{{ childContexts }}"
}';
```
</TabItem>
</Tabs>
