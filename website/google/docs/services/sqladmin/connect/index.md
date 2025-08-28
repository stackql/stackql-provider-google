--- 
title: connect
hide_title: false
hide_table_of_contents: false
keywords:
  - connect
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

Creates, updates, deletes, gets or lists a <code>connect</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connect</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.connect" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="backendType" /></td>
    <td><code>string</code></td>
    <td>`SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.</td>
</tr>
<tr>
    <td><CopyableCode code="customSubjectAlternativeNames" /></td>
    <td><code>array</code></td>
    <td>Custom subject alternative names for the server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The dns name of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsNames" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of DNS names used by this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddresses" /></td>
    <td><code>array</code></td>
    <td>The assigned IP addresses for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#connectSettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="mdxProtocolSupport" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. mdx_protocol_support controls how the client uses metadata exchange when connecting to the instance. The values in the list representing parts of the MDX protocol that are supported by this instance. When the list is empty, the instance does not support MDX, so the client must not send an MDX request. The default is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of read pool nodes in a read pool.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. Entries containing information about each read pool node of the read pool.</td>
</tr>
<tr>
    <td><CopyableCode code="pscEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether PSC connectivity is enabled for this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The cloud region for the instance. For example, `us-central1`, `europe-west1`. The region cannot be changed after instance creation.</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaCert" /></td>
    <td><code>object</code></td>
    <td>SslCerts Resource (id: SslCert)</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaMode" /></td>
    <td><code>string</code></td>
    <td>Specify what type of CA is used for the server certificate.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-readTime"><code>readTime</code></a></td>
    <td>Retrieves connect settings about a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#generate_ephemeral"><CopyableCode code="generate_ephemeral" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.</td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieves connect settings about a Cloud SQL instance.

```sql
SELECT
backendType,
customSubjectAlternativeNames,
databaseVersion,
dnsName,
dnsNames,
ipAddresses,
kind,
mdxProtocolSupport,
nodeCount,
nodes,
pscEnabled,
region,
serverCaCert,
serverCaMode
FROM google.sqladmin.connect
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND readTime = '{{ readTime }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_ephemeral"
    values={[
        { label: 'generate_ephemeral', value: 'generate_ephemeral' }
    ]}
>
<TabItem value="generate_ephemeral">

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

```sql
EXEC google.sqladmin.connect.generate_ephemeral 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"public_key": "{{ public_key }}", 
"access_token": "{{ access_token }}", 
"readTime": "{{ readTime }}", 
"validDuration": "{{ validDuration }}"
}';
```
</TabItem>
</Tabs>
