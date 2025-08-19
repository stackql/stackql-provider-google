--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.policies" /></td></tr>
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

A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.

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
    <td><code>string (uint64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>User-assigned name for this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="alternativeNameServerConfig" /></td>
    <td><code>object</code></td>
    <td>Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified. (id: PolicyAlternativeNameServerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.</td>
</tr>
<tr>
    <td><CopyableCode code="dns64Config" /></td>
    <td><code>object</code></td>
    <td>Configurations related to DNS64 for this Policy. (id: PolicyDns64Config)</td>
</tr>
<tr>
    <td><CopyableCode code="enableInboundForwarding" /></td>
    <td><code>boolean</code></td>
    <td>Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="enableLogging" /></td>
    <td><code>boolean</code></td>
    <td>Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#policy)</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of network names specifying networks to which this policy is applied.</td>
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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: dns#policiesListResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>This field indicates that more results are available beyond the last page displayed. To fetch the results, make another list request and use this value as your page token. This lets you retrieve the complete contents of a very large collection one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You can't retrieve a consistent snapshot of a collection larger than the maximum page size.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td>The policy resources.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing Policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates all Policies associated with a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new Policy.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing Policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Updates an existing Policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created Policy. Fails if the policy is still being referenced by a network.</td>
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
<tr id="parameter-policy">
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

Fetches the representation of an existing Policy.

```sql
SELECT
id,
name,
alternativeNameServerConfig,
description,
dns64Config,
enableInboundForwarding,
enableLogging,
kind,
networks
FROM google.dns.policies
WHERE project = '{{ project }}' -- required
AND policy = '{{ policy }}' -- required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
<TabItem value="list">

Enumerates all Policies associated with a project.

```sql
SELECT
kind,
nextPageToken,
policies
FROM google.dns.policies
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

Creates a new Policy.

```sql
INSERT INTO google.dns.policies (
data__id,
data__name,
data__enableInboundForwarding,
data__description,
data__networks,
data__alternativeNameServerConfig,
data__enableLogging,
data__dns64Config,
data__kind,
project,
clientOperationId
)
SELECT 
'{{ id }}',
'{{ name }}',
{{ enableInboundForwarding }},
'{{ description }}',
'{{ networks }}',
'{{ alternativeNameServerConfig }}',
{{ enableLogging }},
'{{ dns64Config }}',
'{{ kind }}',
'{{ project }}',
'{{ clientOperationId }}'
RETURNING
id,
name,
alternativeNameServerConfig,
description,
dns64Config,
enableInboundForwarding,
enableLogging,
kind,
networks
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: policies
  props:
    - name: project
      value: string
      description: Required parameter for the policies resource.
    - name: id
      value: string
      description: >
        Unique identifier for the resource; defined by the server (output only).
        
    - name: name
      value: string
      description: >
        User-assigned name for this policy.
        
    - name: enableInboundForwarding
      value: boolean
      description: >
        Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.
        
    - name: description
      value: string
      description: >
        A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.
        
    - name: networks
      value: array
      description: >
        List of network names specifying networks to which this policy is applied.
        
    - name: alternativeNameServerConfig
      value: object
      description: >
        Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
        
    - name: enableLogging
      value: boolean
      description: >
        Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
        
    - name: dns64Config
      value: object
      description: >
        Configurations related to DNS64 for this Policy.
        
    - name: kind
      value: string
      default: dns#policy
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

Applies a partial update to an existing Policy.

```sql
UPDATE google.dns.policies
SET 
data__id = '{{ id }}',
data__name = '{{ name }}',
data__enableInboundForwarding = {{ enableInboundForwarding }},
data__description = '{{ description }}',
data__networks = '{{ networks }}',
data__alternativeNameServerConfig = '{{ alternativeNameServerConfig }}',
data__enableLogging = {{ enableLogging }},
data__dns64Config = '{{ dns64Config }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND policy = '{{ policy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
policy;
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

Updates an existing Policy.

```sql
REPLACE google.dns.policies
SET 
data__id = '{{ id }}',
data__name = '{{ name }}',
data__enableInboundForwarding = {{ enableInboundForwarding }},
data__description = '{{ description }}',
data__networks = '{{ networks }}',
data__alternativeNameServerConfig = '{{ alternativeNameServerConfig }}',
data__enableLogging = {{ enableLogging }},
data__dns64Config = '{{ dns64Config }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND policy = '{{ policy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
policy;
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

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

```sql
DELETE FROM google.dns.policies
WHERE project = '{{ project }}' --required
AND policy = '{{ policy }}' --required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
</Tabs>
