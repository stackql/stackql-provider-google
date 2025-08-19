--- 
title: response_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - response_policies
  - dns
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

Creates, updates, deletes, gets or lists a <code>response_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>response_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.response_policies" /></td></tr>
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

A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (int64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this Response Policy.</td>
</tr>
<tr>
    <td><CopyableCode code="gkeClusters" /></td>
    <td><code>array</code></td>
    <td>The list of Google Kubernetes Engine clusters to which this response policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#responsePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User labels.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of network names specifying networks to which this policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="responsePolicyName" /></td>
    <td><code>string</code></td>
    <td>User assigned name for this Response Policy.</td>
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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>This field indicates that more results are available beyond the last page displayed. To fetch the results, make another list request and use this value as your page token. This lets you retrieve the complete contents of a very large collection one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You can't retrieve a consistent snapshot of a collection larger than the maximum page size.</td>
</tr>
<tr>
    <td><CopyableCode code="responsePolicies" /></td>
    <td><code>array</code></td>
    <td>The Response Policy resources.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates all Response Policies associated with a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new Response Policy</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Updates an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-responsePolicy">
    <td><CopyableCode code="responsePolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientOperationId">
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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

Fetches the representation of an existing Response Policy.

```sql
SELECT
id,
description,
gkeClusters,
kind,
labels,
networks,
responsePolicyName
FROM google.dns.response_policies
WHERE project = '{{ project }}' -- required
AND responsePolicy = '{{ responsePolicy }}' -- required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
<TabItem value="list">

Enumerates all Response Policies associated with a project.

```sql
SELECT
nextPageToken,
responsePolicies
FROM google.dns.response_policies
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new Response Policy

```sql
INSERT INTO google.dns.response_policies (
data__id,
data__responsePolicyName,
data__description,
data__networks,
data__gkeClusters,
data__labels,
data__kind,
project,
clientOperationId
)
SELECT 
'{{ id }}',
'{{ responsePolicyName }}',
'{{ description }}',
'{{ networks }}',
'{{ gkeClusters }}',
'{{ labels }}',
'{{ kind }}',
'{{ project }}',
'{{ clientOperationId }}'
RETURNING
id,
description,
gkeClusters,
kind,
labels,
networks,
responsePolicyName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: response_policies
  props:
    - name: project
      value: string
      description: Required parameter for the response_policies resource.
    - name: id
      value: string
      description: >
        Unique identifier for the resource; defined by the server (output only).
        
    - name: responsePolicyName
      value: string
      description: >
        User assigned name for this Response Policy.
        
    - name: description
      value: string
      description: >
        User-provided description for this Response Policy.
        
    - name: networks
      value: array
      description: >
        List of network names specifying networks to which this policy is applied.
        
    - name: gkeClusters
      value: array
      description: >
        The list of Google Kubernetes Engine clusters to which this response policy is applied.
        
    - name: labels
      value: object
      description: >
        User labels.
        
    - name: kind
      value: string
      default: dns#responsePolicy
    - name: clientOperationId
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

Applies a partial update to an existing Response Policy.

```sql
UPDATE google.dns.response_policies
SET 
data__id = '{{ id }}',
data__responsePolicyName = '{{ responsePolicyName }}',
data__description = '{{ description }}',
data__networks = '{{ networks }}',
data__gkeClusters = '{{ gkeClusters }}',
data__labels = '{{ labels }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicy;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing Response Policy.

```sql
REPLACE google.dns.response_policies
SET 
data__id = '{{ id }}',
data__responsePolicyName = '{{ responsePolicyName }}',
data__description = '{{ description }}',
data__networks = '{{ networks }}',
data__gkeClusters = '{{ gkeClusters }}',
data__labels = '{{ labels }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicy;
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

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

```sql
DELETE FROM google.dns.response_policies
WHERE project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
</Tabs>
