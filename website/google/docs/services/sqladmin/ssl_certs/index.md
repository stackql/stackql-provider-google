--- 
title: ssl_certs
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_certs
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>ssl_certs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssl_certs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.ssl_certs" /></td></tr>
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
    <td><CopyableCode code="cert" /></td>
    <td><code>string</code></td>
    <td>PEM representation.</td>
</tr>
<tr>
    <td><CopyableCode code="certSerialNumber" /></td>
    <td><code>string</code></td>
    <td>Serial number, as extracted from the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="commonName" /></td>
    <td><code>string</code></td>
    <td>User supplied name. Constrained to [a-zA-Z.-_ ]+.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>Name of the database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#sslCert`.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sha1Fingerprint" /></td>
    <td><code>string</code></td>
    <td>Sha1 Fingerprint.</td>
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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List of client certificates for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#sslCertsList`.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-sha1Fingerprint"><code>sha1Fingerprint</code></a></td>
    <td></td>
    <td>Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists all of the current SSL certificates for the instance.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-sha1Fingerprint"><code>sha1Fingerprint</code></a></td>
    <td></td>
    <td>Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sha1Fingerprint">
    <td><CopyableCode code="sha1Fingerprint" /></td>
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

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

```sql
SELECT
cert,
certSerialNumber,
commonName,
createTime,
expirationTime,
instance,
kind,
selfLink,
sha1Fingerprint
FROM google.sqladmin.ssl_certs
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND sha1Fingerprint = '{{ sha1Fingerprint }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all of the current SSL certificates for the instance.

```sql
SELECT
items,
kind
FROM google.sqladmin.ssl_certs
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required;
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

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

```sql
INSERT INTO google.sqladmin.ssl_certs (
data__commonName,
project,
instance
)
SELECT 
'{{ commonName }}',
'{{ project }}',
'{{ instance }}'
RETURNING
clientCert,
kind,
operation,
serverCaCert
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ssl_certs
  props:
    - name: project
      value: string
      description: Required parameter for the ssl_certs resource.
    - name: instance
      value: string
      description: Required parameter for the ssl_certs resource.
    - name: commonName
      value: string
      description: >
        User supplied name. Must be a distinct name from the other certificates for this instance.
        
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

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

```sql
DELETE FROM google.sqladmin.ssl_certs
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND sha1Fingerprint = '{{ sha1Fingerprint }}' --required;
```
</TabItem>
</Tabs>
