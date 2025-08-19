--- 
title: certificate_revocation_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_revocation_lists
  - privateca
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

Creates, updates, deletes, gets or lists a <code>certificate_revocation_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificate_revocation_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.privateca.certificate_revocation_lists" /></td></tr>
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

A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.

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
    <td>Identifier. The resource name for this CertificateRevocationList in the format `projects/*/locations/*/caPools/*certificateAuthorities/*/ certificateRevocationLists/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The location where 'pem_crl' can be accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateRevocationList was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels with user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The PEM-encoded X.509 CRL.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="revokedCertificates" /></td>
    <td><code>array</code></td>
    <td>Output only. The revoked serial numbers that appear in pem_crl.</td>
</tr>
<tr>
    <td><CopyableCode code="sequenceNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The CRL sequence number that appears in pem_crl.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The State for this CertificateRevocationList.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateRevocationList was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for CertificateAuthorityService.ListCertificateRevocationLists.

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
    <td><CopyableCode code="certificateRevocationLists" /></td>
    <td><code>array</code></td>
    <td>The list of CertificateRevocationLists.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.page_token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>A list of locations (e.g. "us-west1") that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a>, <a href="#parameter-certificateRevocationListsId"><code>certificateRevocationListsId</code></a></td>
    <td></td>
    <td>Returns a CertificateRevocationList.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists CertificateRevocationLists.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a>, <a href="#parameter-certificateRevocationListsId"><code>certificateRevocationListsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a CertificateRevocationList.</td>
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
<tr id="parameter-caPoolsId">
    <td><CopyableCode code="caPoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-certificateAuthoritiesId">
    <td><CopyableCode code="certificateAuthoritiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-certificateRevocationListsId">
    <td><CopyableCode code="certificateRevocationListsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Returns a CertificateRevocationList.

```sql
SELECT
name,
accessUrl,
createTime,
labels,
pemCrl,
revisionId,
revokedCertificates,
sequenceNumber,
state,
updateTime
FROM google.privateca.certificate_revocation_lists
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' -- required
AND certificateRevocationListsId = '{{ certificateRevocationListsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists CertificateRevocationLists.

```sql
SELECT
certificateRevocationLists,
nextPageToken,
unreachable
FROM google.privateca.certificate_revocation_lists
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Update a CertificateRevocationList.

```sql
UPDATE google.privateca.certificate_revocation_lists
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND caPoolsId = '{{ caPoolsId }}' --required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' --required
AND certificateRevocationListsId = '{{ certificateRevocationListsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
