--- 
title: peered_dns_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - peered_dns_domains
  - servicenetworking
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

Creates, updates, deletes, gets or lists a <code>peered_dns_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>peered_dns_domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.peered_dns_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="peeredDnsDomains" /></td>
    <td><code>array</code></td>
    <td>The list of peered DNS domains.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td></td>
    <td>Lists peered DNS domains for a connection.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td></td>
    <td>Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a>, <a href="#parameter-peeredDnsDomainsId"><code>peeredDnsDomainsId</code></a></td>
    <td></td>
    <td>Deletes a peered DNS domain.</td>
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
<tr id="parameter-networksId">
    <td><CopyableCode code="networksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-peeredDnsDomainsId">
    <td><CopyableCode code="peeredDnsDomainsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists peered DNS domains for a connection.

```sql
SELECT
peeredDnsDomains
FROM google.servicenetworking.peered_dns_domains
WHERE servicesId = '{{ servicesId }}' -- required
AND projectsId = '{{ projectsId }}' -- required
AND networksId = '{{ networksId }}' -- required;
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

Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.

```sql
INSERT INTO google.servicenetworking.peered_dns_domains (
data__name,
data__dnsSuffix,
servicesId,
projectsId,
networksId
)
SELECT 
'{{ name }}',
'{{ dnsSuffix }}',
'{{ servicesId }}',
'{{ projectsId }}',
'{{ networksId }}'
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
- name: peered_dns_domains
  props:
    - name: servicesId
      value: string
      description: Required parameter for the peered_dns_domains resource.
    - name: projectsId
      value: string
      description: Required parameter for the peered_dns_domains resource.
    - name: networksId
      value: string
      description: Required parameter for the peered_dns_domains resource.
    - name: name
      value: string
      description: >
        Required. User assigned name for this resource. Must be unique within the consumer network. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
        
    - name: dnsSuffix
      value: string
      description: >
        The DNS domain name suffix e.g. `example.com.`. Cloud DNS requires that a DNS suffix ends with a trailing dot.
        
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

Deletes a peered DNS domain.

```sql
DELETE FROM google.servicenetworking.peered_dns_domains
WHERE servicesId = '{{ servicesId }}' --required
AND projectsId = '{{ projectsId }}' --required
AND networksId = '{{ networksId }}' --required
AND peeredDnsDomainsId = '{{ peeredDnsDomainsId }}' --required;
```
</TabItem>
</Tabs>
