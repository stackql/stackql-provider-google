--- 
title: resource_record_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_record_sets
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

Creates, updates, deletes, gets or lists a <code>resource_record_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_record_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.resource_record_sets" /></td></tr>
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
    <td>For example, www.example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#resourceRecordSet)</td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicy" /></td>
    <td><code>object</code></td>
    <td>Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid `ResourceRecordSet` contains only `rrdata` (for static resolution) or a `routing_policy` (for dynamic resolution). (id: RRSetRoutingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="rrdatas" /></td>
    <td><code>array</code></td>
    <td>As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.</td>
</tr>
<tr>
    <td><CopyableCode code="signatureRrdatas" /></td>
    <td><code>array</code></td>
    <td>As defined in RFC 4034 (section 3.2).</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of seconds that this `ResourceRecordSet` can be cached by resolvers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The identifier of a supported record type. See the list of Supported DNS record types.</td>
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
    <td>For example, www.example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#resourceRecordSet)</td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicy" /></td>
    <td><code>object</code></td>
    <td>Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid `ResourceRecordSet` contains only `rrdata` (for static resolution) or a `routing_policy` (for dynamic resolution). (id: RRSetRoutingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="rrdatas" /></td>
    <td><code>array</code></td>
    <td>As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.</td>
</tr>
<tr>
    <td><CopyableCode code="signatureRrdatas" /></td>
    <td><code>array</code></td>
    <td>As defined in RFC 4034 (section 3.2).</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of seconds that this `ResourceRecordSet` can be cached by resolvers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The identifier of a supported record type. See the list of Supported DNS record types.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing ResourceRecordSet.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Enumerates ResourceRecordSets that you have created but not yet deleted.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new ResourceRecordSet.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing ResourceRecordSet.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created ResourceRecordSet.</td>
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
<tr id="parameter-managedZone">
    <td><CopyableCode code="managedZone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
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

Fetches the representation of an existing ResourceRecordSet.

```sql
SELECT
name,
kind,
routingPolicy,
rrdatas,
signatureRrdatas,
ttl,
type
FROM google.dns.resource_record_sets
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND name = '{{ name }}' -- required
AND type = '{{ type }}' -- required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
<TabItem value="list">

Enumerates ResourceRecordSets that you have created but not yet deleted.

```sql
SELECT
name,
kind,
routingPolicy,
rrdatas,
signatureRrdatas,
ttl,
type
FROM google.dns.resource_record_sets
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND name = '{{ name }}'
AND type = '{{ type }}';
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

Creates a new ResourceRecordSet.

```sql
INSERT INTO google.dns.resource_record_sets (
data__name,
data__type,
data__ttl,
data__rrdatas,
data__signatureRrdatas,
data__routingPolicy,
data__kind,
project,
managedZone,
clientOperationId
)
SELECT 
'{{ name }}',
'{{ type }}',
{{ ttl }},
'{{ rrdatas }}',
'{{ signatureRrdatas }}',
'{{ routingPolicy }}',
'{{ kind }}',
'{{ project }}',
'{{ managedZone }}',
'{{ clientOperationId }}'
RETURNING
name,
kind,
routingPolicy,
rrdatas,
signatureRrdatas,
ttl,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: resource_record_sets
  props:
    - name: project
      value: string
      description: Required parameter for the resource_record_sets resource.
    - name: managedZone
      value: string
      description: Required parameter for the resource_record_sets resource.
    - name: name
      value: string
      description: >
        For example, www.example.com.
        
    - name: type
      value: string
      description: >
        The identifier of a supported record type. See the list of Supported DNS record types.
        
    - name: ttl
      value: integer
      description: >
        Number of seconds that this `ResourceRecordSet` can be cached by resolvers.
        
    - name: rrdatas
      value: array
      description: >
        As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.
        
    - name: signatureRrdatas
      value: array
      description: >
        As defined in RFC 4034 (section 3.2).
        
    - name: routingPolicy
      value: object
      description: >
        Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid `ResourceRecordSet` contains only `rrdata` (for static resolution) or a `routing_policy` (for dynamic resolution).
        
    - name: kind
      value: string
      default: dns#resourceRecordSet
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

Applies a partial update to an existing ResourceRecordSet.

```sql
UPDATE google.dns.resource_record_sets
SET 
data__name = '{{ name }}',
data__type = '{{ type }}',
data__ttl = {{ ttl }},
data__rrdatas = '{{ rrdatas }}',
data__signatureRrdatas = '{{ signatureRrdatas }}',
data__routingPolicy = '{{ routingPolicy }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND managedZone = '{{ managedZone }}' --required
AND name = '{{ name }}' --required
AND type = '{{ type }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
name,
kind,
routingPolicy,
rrdatas,
signatureRrdatas,
ttl,
type;
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

Deletes a previously created ResourceRecordSet.

```sql
DELETE FROM google.dns.resource_record_sets
WHERE project = '{{ project }}' --required
AND managedZone = '{{ managedZone }}' --required
AND name = '{{ name }}' --required
AND type = '{{ type }}' --required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
</Tabs>
