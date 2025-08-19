--- 
title: certificate_issuance_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_issuance_configs
  - certificatemanager
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

Creates, updates, deletes, gets or lists a <code>certificate_issuance_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>certificate_issuance_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.certificatemanager.certificate_issuance_configs" /></td></tr>
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

CertificateIssuanceConfig specifies how to issue and manage a certificate.

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
    <td>Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateAuthorityConfig" /></td>
    <td><code>object</code></td>
    <td>Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc. (id: CertificateAuthorityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a CertificateIssuanceConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. One or more paragraphs of text description of a CertificateIssuanceConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="keyAlgorithm" /></td>
    <td><code>string</code></td>
    <td>Required. The key algorithm to use when generating the private key.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with a CertificateIssuanceConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. Workload certificate lifetime requested.</td>
</tr>
<tr>
    <td><CopyableCode code="rotationWindowPercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a CertificateIssuanceConfig.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for the `ListCertificateIssuanceConfigs` method.

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
    <td><CopyableCode code="certificateIssuanceConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of certificate configs for the parent resource.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificateIssuanceConfigsId"><code>certificateIssuanceConfigsId</code></a></td>
    <td></td>
    <td>Gets details of a single CertificateIssuanceConfig.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists CertificateIssuanceConfigs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-certificateIssuanceConfigId"><code>certificateIssuanceConfigId</code></a></td>
    <td>Creates a new CertificateIssuanceConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificateIssuanceConfigsId"><code>certificateIssuanceConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a CertificateIssuanceConfig.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificateIssuanceConfigsId"><code>certificateIssuanceConfigsId</code></a></td>
    <td></td>
    <td>Deletes a single CertificateIssuanceConfig.</td>
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
<tr id="parameter-certificateIssuanceConfigsId">
    <td><CopyableCode code="certificateIssuanceConfigsId" /></td>
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
<tr id="parameter-certificateIssuanceConfigId">
    <td><CopyableCode code="certificateIssuanceConfigId" /></td>
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

Gets details of a single CertificateIssuanceConfig.

```sql
SELECT
name,
certificateAuthorityConfig,
createTime,
description,
keyAlgorithm,
labels,
lifetime,
rotationWindowPercentage,
updateTime
FROM google.certificatemanager.certificate_issuance_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND certificateIssuanceConfigsId = '{{ certificateIssuanceConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists CertificateIssuanceConfigs in a given project and location.

```sql
SELECT
certificateIssuanceConfigs,
nextPageToken,
unreachable
FROM google.certificatemanager.certificate_issuance_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new CertificateIssuanceConfig in a given project and location.

```sql
INSERT INTO google.certificatemanager.certificate_issuance_configs (
data__name,
data__labels,
data__description,
data__certificateAuthorityConfig,
data__lifetime,
data__rotationWindowPercentage,
data__keyAlgorithm,
projectsId,
locationsId,
certificateIssuanceConfigId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ certificateAuthorityConfig }}',
'{{ lifetime }}',
{{ rotationWindowPercentage }},
'{{ keyAlgorithm }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ certificateIssuanceConfigId }}'
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
- name: certificate_issuance_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the certificate_issuance_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the certificate_issuance_configs resource.
    - name: name
      value: string
      description: >
        Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`.
        
    - name: labels
      value: object
      description: >
        Optional. Set of labels associated with a CertificateIssuanceConfig.
        
    - name: description
      value: string
      description: >
        Optional. One or more paragraphs of text description of a CertificateIssuanceConfig.
        
    - name: certificateAuthorityConfig
      value: object
      description: >
        Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
        
    - name: lifetime
      value: string
      description: >
        Required. Workload certificate lifetime requested.
        
    - name: rotationWindowPercentage
      value: integer
      description: >
        Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.
        
    - name: keyAlgorithm
      value: string
      description: >
        Required. The key algorithm to use when generating the private key.
        
      valid_values: ['KEY_ALGORITHM_UNSPECIFIED', 'RSA_2048', 'ECDSA_P256']
    - name: certificateIssuanceConfigId
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

Updates a CertificateIssuanceConfig.

```sql
UPDATE google.certificatemanager.certificate_issuance_configs
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__certificateAuthorityConfig = '{{ certificateAuthorityConfig }}',
data__lifetime = '{{ lifetime }}',
data__rotationWindowPercentage = {{ rotationWindowPercentage }},
data__keyAlgorithm = '{{ keyAlgorithm }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificateIssuanceConfigsId = '{{ certificateIssuanceConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a single CertificateIssuanceConfig.

```sql
DELETE FROM google.certificatemanager.certificate_issuance_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificateIssuanceConfigsId = '{{ certificateIssuanceConfigsId }}' --required;
```
</TabItem>
</Tabs>
