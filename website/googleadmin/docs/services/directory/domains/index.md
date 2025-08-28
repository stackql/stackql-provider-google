--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.domains" /></td></tr>
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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).</td>
</tr>
<tr>
    <td><CopyableCode code="domainAliases" /></td>
    <td><code>array</code></td>
    <td>A list of domain alias objects. (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The domain name of the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the domain is a primary domain (Read-only).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#domain)</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates the verification state of a domain. (Read-only).</td>
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
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>A list of domain objects.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#domains)</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Retrieves a domain of the customer.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Lists the domains of the customer.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Inserts a domain of the customer.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Deletes a domain of the customer.</td>
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
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
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

Retrieves a domain of the customer.

```sql
SELECT
creationTime,
domainAliases,
domainName,
etag,
isPrimary,
kind,
verified
FROM googleadmin.directory.domains
WHERE customer = '{{ customer }}' -- required
AND domainName = '{{ domainName }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the domains of the customer.

```sql
SELECT
domains,
etag,
kind
FROM googleadmin.directory.domains
WHERE customer = '{{ customer }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Inserts a domain of the customer.

```sql
INSERT INTO googleadmin.directory.domains (
data__kind,
data__domainAliases,
data__verified,
data__etag,
data__creationTime,
data__isPrimary,
data__domainName,
customer
)
SELECT 
'{{ kind }}',
'{{ domainAliases }}',
{{ verified }},
'{{ etag }}',
'{{ creationTime }}',
{{ isPrimary }},
'{{ domainName }}',
'{{ customer }}'
RETURNING
creationTime,
domainAliases,
domainName,
etag,
isPrimary,
kind,
verified
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: domains
  props:
    - name: customer
      value: string
      description: Required parameter for the domains resource.
    - name: kind
      value: string
      description: >
        Kind of resource this is.
        
      default: admin#directory#domain
    - name: domainAliases
      value: array
      description: >
        A list of domain alias objects. (Read-only)
        
    - name: verified
      value: boolean
      description: >
        Indicates the verification state of a domain. (Read-only).
        
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: creationTime
      value: string
      description: >
        Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).
        
    - name: isPrimary
      value: boolean
      description: >
        Indicates if the domain is a primary domain (Read-only).
        
    - name: domainName
      value: string
      description: >
        The domain name of the customer.
        
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

Deletes a domain of the customer.

```sql
DELETE FROM googleadmin.directory.domains
WHERE customer = '{{ customer }}' --required
AND domainName = '{{ domainName }}' --required;
```
</TabItem>
</Tabs>
