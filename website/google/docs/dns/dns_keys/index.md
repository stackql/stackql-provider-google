--- 
title: dns_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_keys
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

Creates, updates, deletes, gets or lists a <code>dns_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.dns_keys" /></td></tr>
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

A DNSSEC key pair.

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
    <td><code>string</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string</code></td>
    <td>The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.</td>
</tr>
<tr>
    <td><CopyableCode code="digests" /></td>
    <td><code>array</code></td>
    <td>Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures.</td>
</tr>
<tr>
    <td><CopyableCode code="keyLength" /></td>
    <td><code>integer (uint32)</code></td>
    <td>Length of the key in bits. Specified at creation time, and then immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="keyTag" /></td>
    <td><code>integer (int32)</code></td>
    <td>The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#dnsKey)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKey" /></td>
    <td><code>string</code></td>
    <td>Base64 encoded public half of this key. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response to a request to enumerate DnsKeys in a ManagedZone.

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
    <td><CopyableCode code="dnsKeys" /></td>
    <td><code>array</code></td>
    <td>The requested resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: dns#dnsKeysListResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>This field indicates that more results are available beyond the last page displayed. To fetch the results, make another list request and use this value as your page token. This lets you retrieve the complete contents of a very large collection one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You can't retrieve a consistent snapshot of a collection larger than the maximum page size.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a>, <a href="#parameter-dnsKeyId"><code>dnsKeyId</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a>, <a href="#parameter-digestType"><code>digestType</code></a></td>
    <td>Fetches the representation of an existing DnsKey.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-digestType"><code>digestType</code></a></td>
    <td>Enumerates DnsKeys to a ResourceRecordSet collection.</td>
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
<tr id="parameter-dnsKeyId">
    <td><CopyableCode code="dnsKeyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-managedZone">
    <td><CopyableCode code="managedZone" /></td>
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
<tr id="parameter-digestType">
    <td><CopyableCode code="digestType" /></td>
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

Fetches the representation of an existing DnsKey.

```sql
SELECT
id,
algorithm,
creationTime,
description,
digests,
isActive,
keyLength,
keyTag,
kind,
publicKey,
type
FROM google.dns.dns_keys
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND dnsKeyId = '{{ dnsKeyId }}' -- required
AND clientOperationId = '{{ clientOperationId }}'
AND digestType = '{{ digestType }}';
```
</TabItem>
<TabItem value="list">

Enumerates DnsKeys to a ResourceRecordSet collection.

```sql
SELECT
dnsKeys,
kind,
nextPageToken
FROM google.dns.dns_keys
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND digestType = '{{ digestType }}';
```
</TabItem>
</Tabs>
