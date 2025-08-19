--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - integrations
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_certificates_get"
    values={[
        { label: 'projects_locations_products_certificates_get', value: 'projects_locations_products_certificates_get' },
        { label: 'projects_locations_products_certificates_list', value: 'projects_locations_products_certificates_list' },
        { label: 'projects_locations_certificates_get', value: 'projects_locations_certificates_get' },
        { label: 'projects_locations_certificates_list', value: 'projects_locations_certificates_list' }
    ]}
>
<TabItem value="projects_locations_products_certificates_get">

The certificate definition

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
    <td>Output only. Auto generated primary key</td>
</tr>
<tr>
    <td><CopyableCode code="certificateStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="credentialId" /></td>
    <td><code>string</code></td>
    <td>Immutable. Credential id that will be used to register with trawler</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="rawCertificate" /></td>
    <td><code>object</code></td>
    <td>Input only. Raw client certificate which would be registered with trawler (id: GoogleCloudIntegrationsV1alphaClientCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="requestorId" /></td>
    <td><code>string</code></td>
    <td>Immutable. Requestor ID to be used to register certificate with trawler</td>
</tr>
<tr>
    <td><CopyableCode code="validEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp after which certificate will expire</td>
</tr>
<tr>
    <td><CopyableCode code="validStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp after which certificate will be valid</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_certificates_list">

Response to list Certificates.

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
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of Certificates retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_certificates_get">

The certificate definition

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
    <td>Output only. Auto generated primary key</td>
</tr>
<tr>
    <td><CopyableCode code="certificateStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="credentialId" /></td>
    <td><code>string</code></td>
    <td>Immutable. Credential id that will be used to register with trawler</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the certificate</td>
</tr>
<tr>
    <td><CopyableCode code="rawCertificate" /></td>
    <td><code>object</code></td>
    <td>Input only. Raw client certificate which would be registered with trawler (id: GoogleCloudIntegrationsV1alphaClientCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="requestorId" /></td>
    <td><code>string</code></td>
    <td>Immutable. Requestor ID to be used to register certificate with trawler</td>
</tr>
<tr>
    <td><CopyableCode code="validEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp after which certificate will expire</td>
</tr>
<tr>
    <td><CopyableCode code="validStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp after which certificate will be valid</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_certificates_list">

Response to list Certificates.

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
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of Certificates retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
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
    <td><a href="#projects_locations_products_certificates_get"><CopyableCode code="projects_locations_products_certificates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Get a certificates in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_certificates_list"><CopyableCode code="projects_locations_products_certificates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>List all the certificates that match the filter. Restrict to certificate of current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_certificates_get"><CopyableCode code="projects_locations_certificates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Get a certificates in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_certificates_list"><CopyableCode code="projects_locations_certificates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>List all the certificates that match the filter. Restrict to certificate of current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_certificates_create"><CopyableCode code="projects_locations_products_certificates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.</td>
</tr>
<tr>
    <td><a href="#projects_locations_certificates_create"><CopyableCode code="projects_locations_certificates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_certificates_patch"><CopyableCode code="projects_locations_products_certificates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.</td>
</tr>
<tr>
    <td><a href="#projects_locations_certificates_patch"><CopyableCode code="projects_locations_certificates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_certificates_delete"><CopyableCode code="projects_locations_products_certificates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Delete a certificate</td>
</tr>
<tr>
    <td><a href="#projects_locations_certificates_delete"><CopyableCode code="projects_locations_certificates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Delete a certificate</td>
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
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_products_certificates_get"
    values={[
        { label: 'projects_locations_products_certificates_get', value: 'projects_locations_products_certificates_get' },
        { label: 'projects_locations_products_certificates_list', value: 'projects_locations_products_certificates_list' },
        { label: 'projects_locations_certificates_get', value: 'projects_locations_certificates_get' },
        { label: 'projects_locations_certificates_list', value: 'projects_locations_certificates_list' }
    ]}
>
<TabItem value="projects_locations_products_certificates_get">

Get a certificates in the specified project.

```sql
SELECT
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime
FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND certificatesId = '{{ certificatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_certificates_list">

List all the certificates that match the filter. Restrict to certificate of current client only.

```sql
SELECT
certificates,
nextPageToken
FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="projects_locations_certificates_get">

Get a certificates in the specified project.

```sql
SELECT
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime
FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND certificatesId = '{{ certificatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_certificates_list">

List all the certificates that match the filter. Restrict to certificate of current client only.

```sql
SELECT
certificates,
nextPageToken
FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_certificates_create"
    values={[
        { label: 'projects_locations_products_certificates_create', value: 'projects_locations_products_certificates_create' },
        { label: 'projects_locations_certificates_create', value: 'projects_locations_certificates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_certificates_create">

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

```sql
INSERT INTO google.integrations.certificates (
data__displayName,
data__description,
data__requestorId,
data__credentialId,
data__certificateStatus,
data__rawCertificate,
projectsId,
locationsId,
productsId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ requestorId }}',
'{{ credentialId }}',
'{{ certificateStatus }}',
'{{ rawCertificate }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}'
RETURNING
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime
;
```
</TabItem>
<TabItem value="projects_locations_certificates_create">

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

```sql
INSERT INTO google.integrations.certificates (
data__displayName,
data__description,
data__requestorId,
data__credentialId,
data__certificateStatus,
data__rawCertificate,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ requestorId }}',
'{{ credentialId }}',
'{{ certificateStatus }}',
'{{ rawCertificate }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime
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
    - name: productsId
      value: string
      description: Required parameter for the certificates resource.
    - name: displayName
      value: string
      description: >
        Required. Name of the certificate
        
    - name: description
      value: string
      description: >
        Description of the certificate
        
    - name: requestorId
      value: string
      description: >
        Immutable. Requestor ID to be used to register certificate with trawler
        
    - name: credentialId
      value: string
      description: >
        Immutable. Credential id that will be used to register with trawler
        
    - name: certificateStatus
      value: string
      description: >
        Status of the certificate
        
      valid_values: ['STATE_UNSPECIFIED', 'ACTIVE', 'EXPIRED']
    - name: rawCertificate
      value: object
      description: >
        Input only. Raw client certificate which would be registered with trawler
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_products_certificates_patch"
    values={[
        { label: 'projects_locations_products_certificates_patch', value: 'projects_locations_products_certificates_patch' },
        { label: 'projects_locations_certificates_patch', value: 'projects_locations_certificates_patch' }
    ]}
>
<TabItem value="projects_locations_products_certificates_patch">

Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.

```sql
UPDATE google.integrations.certificates
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__requestorId = '{{ requestorId }}',
data__credentialId = '{{ credentialId }}',
data__certificateStatus = '{{ certificateStatus }}',
data__rawCertificate = '{{ rawCertificate }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime;
```
</TabItem>
<TabItem value="projects_locations_certificates_patch">

Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.

```sql
UPDATE google.integrations.certificates
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__requestorId = '{{ requestorId }}',
data__credentialId = '{{ credentialId }}',
data__certificateStatus = '{{ certificateStatus }}',
data__rawCertificate = '{{ rawCertificate }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
certificateStatus,
credentialId,
description,
displayName,
rawCertificate,
requestorId,
validEndTime,
validStartTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_certificates_delete"
    values={[
        { label: 'projects_locations_products_certificates_delete', value: 'projects_locations_products_certificates_delete' },
        { label: 'projects_locations_certificates_delete', value: 'projects_locations_certificates_delete' }
    ]}
>
<TabItem value="projects_locations_products_certificates_delete">

Delete a certificate

```sql
DELETE FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_certificates_delete">

Delete a certificate

```sql
DELETE FROM google.integrations.certificates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required;
```
</TabItem>
</Tabs>
