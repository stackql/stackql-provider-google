--- 
title: certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authorities
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

Creates, updates, deletes, gets or lists a <code>certificate_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificate_authorities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.privateca.certificate_authorities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch"
    values={[
        { label: 'fetch', value: 'fetch' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="fetch">

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
    <td><CopyableCode code="pemCsr" /></td>
    <td><code>string</code></td>
    <td>Output only. The PEM-encoded signed certificate signing request (CSR).</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>Identifier. The resource name for this CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessUrls" /></td>
    <td><code>object</code></td>
    <td>Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs. (id: AccessUrls)</td>
</tr>
<tr>
    <td><CopyableCode code="caCertificateDescriptions" /></td>
    <td><code>array</code></td>
    <td>Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The config used to create a self-signed X.509 certificate or CSR. (id: CertificateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.</td>
</tr>
<tr>
    <td><CopyableCode code="gcsBucket" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.</td>
</tr>
<tr>
    <td><CopyableCode code="keySpec" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR. (id: KeyVersionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels with user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCaCertificates" /></td>
    <td><code>array</code></td>
    <td>Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The State for this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="subordinateConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate. (id: SubordinateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The Type of this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userDefinedAccessUrls" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined URLs for CA certificate and CRLs. The service does not publish content to these URLs. It is up to the user to mirror content to these URLs. (id: UserDefinedAccessUrls)</td>
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
    <td>Identifier. The resource name for this CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessUrls" /></td>
    <td><code>object</code></td>
    <td>Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs. (id: AccessUrls)</td>
</tr>
<tr>
    <td><CopyableCode code="caCertificateDescriptions" /></td>
    <td><code>array</code></td>
    <td>Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The config used to create a self-signed X.509 certificate or CSR. (id: CertificateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.</td>
</tr>
<tr>
    <td><CopyableCode code="gcsBucket" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.</td>
</tr>
<tr>
    <td><CopyableCode code="keySpec" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR. (id: KeyVersionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels with user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCaCertificates" /></td>
    <td><code>array</code></td>
    <td>Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The State for this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="subordinateConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate. (id: SubordinateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The Type of this CertificateAuthority.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CertificateAuthority was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userDefinedAccessUrls" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined URLs for CA certificate and CRLs. The service does not publish content to these URLs. It is up to the user to mirror content to these URLs. (id: UserDefinedAccessUrls)</td>
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
    <td><a href="#fetch"><CopyableCode code="fetch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Returns a CertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists CertificateAuthorities.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a></td>
    <td><a href="#parameter-certificateAuthorityId"><code>certificateAuthorityId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a new CertificateAuthority in a given Project and Location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a CertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-ignoreActiveCertificates"><code>ignoreActiveCertificates</code></a>, <a href="#parameter-skipGracePeriod"><code>skipGracePeriod</code></a>, <a href="#parameter-ignoreDependentResources"><code>ignoreDependentResources</code></a></td>
    <td>Delete a CertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#activate"><CopyableCode code="activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Disable a CertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Enable a CertificateAuthority.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificateAuthoritiesId"><code>certificateAuthoritiesId</code></a></td>
    <td></td>
    <td>Undelete a CertificateAuthority that has been deleted.</td>
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
<tr id="parameter-certificateAuthorityId">
    <td><CopyableCode code="certificateAuthorityId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreActiveCertificates">
    <td><CopyableCode code="ignoreActiveCertificates" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreDependentResources">
    <td><CopyableCode code="ignoreDependentResources" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-skipGracePeriod">
    <td><CopyableCode code="skipGracePeriod" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="fetch"
    values={[
        { label: 'fetch', value: 'fetch' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="fetch">

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

```sql
SELECT
pemCsr
FROM google.privateca.certificate_authorities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' -- required;
```
</TabItem>
<TabItem value="get">

Returns a CertificateAuthority.

```sql
SELECT
name,
accessUrls,
caCertificateDescriptions,
config,
createTime,
deleteTime,
expireTime,
gcsBucket,
keySpec,
labels,
lifetime,
pemCaCertificates,
satisfiesPzi,
satisfiesPzs,
state,
subordinateConfig,
tier,
type,
updateTime,
userDefinedAccessUrls
FROM google.privateca.certificate_authorities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists CertificateAuthorities.

```sql
SELECT
name,
accessUrls,
caCertificateDescriptions,
config,
createTime,
deleteTime,
expireTime,
gcsBucket,
keySpec,
labels,
lifetime,
pemCaCertificates,
satisfiesPzi,
satisfiesPzs,
state,
subordinateConfig,
tier,
type,
updateTime,
userDefinedAccessUrls
FROM google.privateca.certificate_authorities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Create a new CertificateAuthority in a given Project and Location.

```sql
INSERT INTO google.privateca.certificate_authorities (
data__name,
data__type,
data__config,
data__lifetime,
data__keySpec,
data__subordinateConfig,
data__gcsBucket,
data__labels,
data__userDefinedAccessUrls,
projectsId,
locationsId,
caPoolsId,
certificateAuthorityId,
requestId
)
SELECT 
'{{ name }}',
'{{ type }}',
'{{ config }}',
'{{ lifetime }}',
'{{ keySpec }}',
'{{ subordinateConfig }}',
'{{ gcsBucket }}',
'{{ labels }}',
'{{ userDefinedAccessUrls }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ caPoolsId }}',
'{{ certificateAuthorityId }}',
'{{ requestId }}'
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
- name: certificate_authorities
  props:
    - name: projectsId
      value: string
      description: Required parameter for the certificate_authorities resource.
    - name: locationsId
      value: string
      description: Required parameter for the certificate_authorities resource.
    - name: caPoolsId
      value: string
      description: Required parameter for the certificate_authorities resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name for this CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.
        
    - name: type
      value: string
      description: >
        Required. Immutable. The Type of this CertificateAuthority.
        
      valid_values: ['TYPE_UNSPECIFIED', 'SELF_SIGNED', 'SUBORDINATE']
    - name: config
      value: object
      description: >
        Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.
        
    - name: lifetime
      value: string
      description: >
        Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
        
    - name: keySpec
      value: object
      description: >
        Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
        
    - name: subordinateConfig
      value: object
      description: >
        Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.
        
    - name: gcsBucket
      value: string
      description: >
        Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
        
    - name: labels
      value: object
      description: >
        Optional. Labels with user-defined metadata.
        
    - name: userDefinedAccessUrls
      value: object
      description: >
        Optional. User-defined URLs for CA certificate and CRLs. The service does not publish content to these URLs. It is up to the user to mirror content to these URLs.
        
    - name: certificateAuthorityId
      value: string
    - name: requestId
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

Update a CertificateAuthority.

```sql
UPDATE google.privateca.certificate_authorities
SET 
data__name = '{{ name }}',
data__type = '{{ type }}',
data__config = '{{ config }}',
data__lifetime = '{{ lifetime }}',
data__keySpec = '{{ keySpec }}',
data__subordinateConfig = '{{ subordinateConfig }}',
data__gcsBucket = '{{ gcsBucket }}',
data__labels = '{{ labels }}',
data__userDefinedAccessUrls = '{{ userDefinedAccessUrls }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND caPoolsId = '{{ caPoolsId }}' --required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' --required
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a CertificateAuthority.

```sql
DELETE FROM google.privateca.certificate_authorities
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND caPoolsId = '{{ caPoolsId }}' --required
AND certificateAuthoritiesId = '{{ certificateAuthoritiesId }}' --required
AND requestId = '{{ requestId }}'
AND ignoreActiveCertificates = '{{ ignoreActiveCertificates }}'
AND skipGracePeriod = '{{ skipGracePeriod }}'
AND ignoreDependentResources = '{{ ignoreDependentResources }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate"
    values={[
        { label: 'activate', value: 'activate' },
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' },
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="activate">

Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

```sql
EXEC google.privateca.certificate_authorities.activate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@caPoolsId='{{ caPoolsId }}' --required, 
@certificateAuthoritiesId='{{ certificateAuthoritiesId }}' --required 
@@json=
'{
"pemCaCertificate": "{{ pemCaCertificate }}", 
"subordinateConfig": "{{ subordinateConfig }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="disable">

Disable a CertificateAuthority.

```sql
EXEC google.privateca.certificate_authorities.disable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@caPoolsId='{{ caPoolsId }}' --required, 
@certificateAuthoritiesId='{{ certificateAuthoritiesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"ignoreDependentResources": {{ ignoreDependentResources }}
}';
```
</TabItem>
<TabItem value="enable">

Enable a CertificateAuthority.

```sql
EXEC google.privateca.certificate_authorities.enable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@caPoolsId='{{ caPoolsId }}' --required, 
@certificateAuthoritiesId='{{ certificateAuthoritiesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="undelete">

Undelete a CertificateAuthority that has been deleted.

```sql
EXEC google.privateca.certificate_authorities.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@caPoolsId='{{ caPoolsId }}' --required, 
@certificateAuthoritiesId='{{ certificateAuthoritiesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
