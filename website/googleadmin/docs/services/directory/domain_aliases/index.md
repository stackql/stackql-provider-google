--- 
title: domain_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_aliases
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

Creates, updates, deletes, gets or lists a <code>domain_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domain_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.domain_aliases" /></td></tr>
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
    <td>The creation time of the domain alias. (Read-only).</td>
</tr>
<tr>
    <td><CopyableCode code="domainAliasName" /></td>
    <td><code>string</code></td>
    <td>The domain alias name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#domainAlias)</td>
</tr>
<tr>
    <td><CopyableCode code="parentDomainName" /></td>
    <td><code>string</code></td>
    <td>The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates the verification state of a domain alias. (Read-only)</td>
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
    <td><CopyableCode code="domainAliases" /></td>
    <td><code>array</code></td>
    <td>A list of domain alias objects.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#domainAliases)</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-domainAliasName"><code>domainAliasName</code></a></td>
    <td></td>
    <td>Retrieves a domain alias of the customer.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-parentDomainName"><code>parentDomainName</code></a></td>
    <td></td>
    <td>Lists the domain aliases of the customer.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Inserts a domain alias of the customer.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-domainAliasName"><code>domainAliasName</code></a></td>
    <td></td>
    <td>Deletes a domain Alias of the customer.</td>
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
<tr id="parameter-domainAliasName">
    <td><CopyableCode code="domainAliasName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentDomainName">
    <td><CopyableCode code="parentDomainName" /></td>
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

Retrieves a domain alias of the customer.

```sql
SELECT
creationTime,
domainAliasName,
etag,
kind,
parentDomainName,
verified
FROM googleadmin.directory.domain_aliases
WHERE customer = '{{ customer }}' -- required
AND domainAliasName = '{{ domainAliasName }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the domain aliases of the customer.

```sql
SELECT
domainAliases,
etag,
kind
FROM googleadmin.directory.domain_aliases
WHERE customer = '{{ customer }}' -- required
AND parentDomainName = '{{ parentDomainName }}' -- required;
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

Inserts a domain alias of the customer.

```sql
INSERT INTO googleadmin.directory.domain_aliases (
data__kind,
data__parentDomainName,
data__verified,
data__creationTime,
data__etag,
data__domainAliasName,
customer
)
SELECT 
'{{ kind }}',
'{{ parentDomainName }}',
{{ verified }},
'{{ creationTime }}',
'{{ etag }}',
'{{ domainAliasName }}',
'{{ customer }}'
RETURNING
creationTime,
domainAliasName,
etag,
kind,
parentDomainName,
verified
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: domain_aliases
  props:
    - name: customer
      value: string
      description: Required parameter for the domain_aliases resource.
    - name: kind
      value: string
      description: >
        Kind of resource this is.
        
      default: admin#directory#domainAlias
    - name: parentDomainName
      value: string
      description: >
        The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.
        
    - name: verified
      value: boolean
      description: >
        Indicates the verification state of a domain alias. (Read-only)
        
    - name: creationTime
      value: string
      description: >
        The creation time of the domain alias. (Read-only).
        
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: domainAliasName
      value: string
      description: >
        The domain alias name.
        
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

Deletes a domain Alias of the customer.

```sql
DELETE FROM googleadmin.directory.domain_aliases
WHERE customer = '{{ customer }}' --required
AND domainAliasName = '{{ domainAliasName }}' --required;
```
</TabItem>
</Tabs>
