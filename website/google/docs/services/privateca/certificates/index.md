--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.privateca.certificates" /></td></tr>
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
    <td>Identifier. The resource name for this Certificate in the format `projects/*/locations/*/caPools/*/certificates/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateDescription" /></td>
    <td><code>object</code></td>
    <td>Output only. A structured description of the issued X.509 certificate. (id: CertificateDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="certificateTemplate" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/*/locations/*/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Immutable. A description of the certificate and key that does not require X.509 or ASN.1. (id: CertificateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="issuerCertificateAuthority" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the issuing CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels with user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificate" /></td>
    <td><code>string</code></td>
    <td>Output only. The pem-encoded, signed X.509 certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificateChain" /></td>
    <td><code>array</code></td>
    <td>Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCsr" /></td>
    <td><code>string</code></td>
    <td>Immutable. A pem-encoded X.509 certificate signing request (CSR).</td>
</tr>
<tr>
    <td><CopyableCode code="revocationDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present. (id: RevocationDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="subjectMode" /></td>
    <td><code>string</code></td>
    <td>Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Certificate was updated.</td>
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
    <td>Identifier. The resource name for this Certificate in the format `projects/*/locations/*/caPools/*/certificates/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateDescription" /></td>
    <td><code>object</code></td>
    <td>Output only. A structured description of the issued X.509 certificate. (id: CertificateDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="certificateTemplate" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/*/locations/*/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Immutable. A description of the certificate and key that does not require X.509 or ASN.1. (id: CertificateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="issuerCertificateAuthority" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the issuing CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels with user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificate" /></td>
    <td><code>string</code></td>
    <td>Output only. The pem-encoded, signed X.509 certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificateChain" /></td>
    <td><code>array</code></td>
    <td>Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.</td>
</tr>
<tr>
    <td><CopyableCode code="pemCsr" /></td>
    <td><code>string</code></td>
    <td>Immutable. A pem-encoded X.509 certificate signing request (CSR).</td>
</tr>
<tr>
    <td><CopyableCode code="revocationDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present. (id: RevocationDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="subjectMode" /></td>
    <td><code>string</code></td>
    <td>Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Certificate was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Returns a Certificate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Certificates.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a></td>
    <td><a href="#parameter-certificateId"><code>certificateId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-issuingCertificateAuthorityId"><code>issuingCertificateAuthorityId</code></a></td>
    <td>Create a new Certificate in a given Project, Location from a particular CaPool.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a Certificate. Currently, the only field you can update is the labels field.</td>
</tr>
<tr>
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-caPoolsId"><code>caPoolsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Revoke a Certificate.</td>
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
<tr id="parameter-certificatesId">
    <td><CopyableCode code="certificatesId" /></td>
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
<tr id="parameter-certificateId">
    <td><CopyableCode code="certificateId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-issuingCertificateAuthorityId">
    <td><CopyableCode code="issuingCertificateAuthorityId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Returns a Certificate.

```sql
SELECT
name,
certificateDescription,
certificateTemplate,
config,
createTime,
issuerCertificateAuthority,
labels,
lifetime,
pemCertificate,
pemCertificateChain,
pemCsr,
revocationDetails,
subjectMode,
updateTime
FROM google.privateca.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND caPoolsId = '{{ caPoolsId }}' -- required
AND certificatesId = '{{ certificatesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Certificates.

```sql
SELECT
name,
certificateDescription,
certificateTemplate,
config,
createTime,
issuerCertificateAuthority,
labels,
lifetime,
pemCertificate,
pemCertificateChain,
pemCsr,
revocationDetails,
subjectMode,
updateTime
FROM google.privateca.certificates
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

Create a new Certificate in a given Project, Location from a particular CaPool.

```sql
INSERT INTO google.privateca.certificates (
data__name,
data__pemCsr,
data__config,
data__lifetime,
data__certificateTemplate,
data__subjectMode,
data__labels,
projectsId,
locationsId,
caPoolsId,
certificateId,
requestId,
validateOnly,
issuingCertificateAuthorityId
)
SELECT 
'{{ name }}',
'{{ pemCsr }}',
'{{ config }}',
'{{ lifetime }}',
'{{ certificateTemplate }}',
'{{ subjectMode }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ caPoolsId }}',
'{{ certificateId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ issuingCertificateAuthorityId }}'
RETURNING
name,
certificateDescription,
certificateTemplate,
config,
createTime,
issuerCertificateAuthority,
labels,
lifetime,
pemCertificate,
pemCertificateChain,
pemCsr,
revocationDetails,
subjectMode,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: certificates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the certificates resource.
    - name: locationsId
      value: string
      description: Required parameter for the certificates resource.
    - name: caPoolsId
      value: string
      description: Required parameter for the certificates resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name for this Certificate in the format `projects/*/locations/*/caPools/*/certificates/*`.
        
    - name: pemCsr
      value: string
      description: >
        Immutable. A pem-encoded X.509 certificate signing request (CSR).
        
    - name: config
      value: object
      description: >
        Immutable. A description of the certificate and key that does not require X.509 or ASN.1.
        
    - name: lifetime
      value: string
      description: >
        Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.
        
    - name: certificateTemplate
      value: string
      description: >
        Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/*/locations/*/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.
        
    - name: subjectMode
      value: string
      description: >
        Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.
        
      valid_values: ['SUBJECT_REQUEST_MODE_UNSPECIFIED', 'DEFAULT', 'RDN_SEQUENCE', 'REFLECTED_SPIFFE']
    - name: labels
      value: object
      description: >
        Optional. Labels with user-defined metadata.
        
    - name: certificateId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: issuingCertificateAuthorityId
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

Update a Certificate. Currently, the only field you can update is the labels field.

```sql
UPDATE google.privateca.certificates
SET 
data__name = '{{ name }}',
data__pemCsr = '{{ pemCsr }}',
data__config = '{{ config }}',
data__lifetime = '{{ lifetime }}',
data__certificateTemplate = '{{ certificateTemplate }}',
data__subjectMode = '{{ subjectMode }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND caPoolsId = '{{ caPoolsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
certificateDescription,
certificateTemplate,
config,
createTime,
issuerCertificateAuthority,
labels,
lifetime,
pemCertificate,
pemCertificateChain,
pemCsr,
revocationDetails,
subjectMode,
updateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke"
    values={[
        { label: 'revoke', value: 'revoke' }
    ]}
>
<TabItem value="revoke">

Revoke a Certificate.

```sql
EXEC google.privateca.certificates.revoke 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@caPoolsId='{{ caPoolsId }}' --required, 
@certificatesId='{{ certificatesId }}' --required 
@@json=
'{
"reason": "{{ reason }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
