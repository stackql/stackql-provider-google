--- 
title: client_tls_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - client_tls_policies
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>client_tls_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>client_tls_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.client_tls_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_client_tls_policies_get"
    values={[
        { label: 'projects_locations_client_tls_policies_get', value: 'projects_locations_client_tls_policies_get' },
        { label: 'projects_locations_client_tls_policies_list', value: 'projects_locations_client_tls_policies_list' }
    ]}
>
<TabItem value="projects_locations_client_tls_policies_get">

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

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
    <td>Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/&#123;project&#125;/locations/&#123;location&#125;/clientTlsPolicies/&#123;client_tls_policy&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificate" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS. (id: GoogleCloudNetworksecurityV1CertificateProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverValidationCa" /></td>
    <td><code>array</code></td>
    <td>Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="sni" /></td>
    <td><code>string</code></td>
    <td>Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_client_tls_policies_list">

Response returned by the ListClientTlsPolicies method.

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
    <td><CopyableCode code="clientTlsPolicies" /></td>
    <td><code>array</code></td>
    <td>List of ClientTlsPolicy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.</td>
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
    <td><a href="#projects_locations_client_tls_policies_get"><CopyableCode code="projects_locations_client_tls_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clientTlsPoliciesId"><code>clientTlsPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single ClientTlsPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_client_tls_policies_list"><CopyableCode code="projects_locations_client_tls_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ClientTlsPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_client_tls_policies_create"><CopyableCode code="projects_locations_client_tls_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clientTlsPolicyId"><code>clientTlsPolicyId</code></a></td>
    <td>Creates a new ClientTlsPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_client_tls_policies_patch"><CopyableCode code="projects_locations_client_tls_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clientTlsPoliciesId"><code>clientTlsPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single ClientTlsPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_client_tls_policies_delete"><CopyableCode code="projects_locations_client_tls_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clientTlsPoliciesId"><code>clientTlsPoliciesId</code></a></td>
    <td></td>
    <td>Deletes a single ClientTlsPolicy.</td>
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
<tr id="parameter-clientTlsPoliciesId">
    <td><CopyableCode code="clientTlsPoliciesId" /></td>
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
<tr id="parameter-clientTlsPolicyId">
    <td><CopyableCode code="clientTlsPolicyId" /></td>
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
    defaultValue="projects_locations_client_tls_policies_get"
    values={[
        { label: 'projects_locations_client_tls_policies_get', value: 'projects_locations_client_tls_policies_get' },
        { label: 'projects_locations_client_tls_policies_list', value: 'projects_locations_client_tls_policies_list' }
    ]}
>
<TabItem value="projects_locations_client_tls_policies_get">

Gets details of a single ClientTlsPolicy.

```sql
SELECT
name,
clientCertificate,
createTime,
description,
labels,
serverValidationCa,
sni,
updateTime
FROM google.networksecurity.client_tls_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clientTlsPoliciesId = '{{ clientTlsPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_client_tls_policies_list">

Lists ClientTlsPolicies in a given project and location.

```sql
SELECT
clientTlsPolicies,
nextPageToken
FROM google.networksecurity.client_tls_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_client_tls_policies_create"
    values={[
        { label: 'projects_locations_client_tls_policies_create', value: 'projects_locations_client_tls_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_client_tls_policies_create">

Creates a new ClientTlsPolicy in a given project and location.

```sql
INSERT INTO google.networksecurity.client_tls_policies (
data__name,
data__description,
data__labels,
data__sni,
data__clientCertificate,
data__serverValidationCa,
projectsId,
locationsId,
clientTlsPolicyId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ sni }}',
'{{ clientCertificate }}',
'{{ serverValidationCa }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clientTlsPolicyId }}'
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
- name: client_tls_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the client_tls_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the client_tls_policies resource.
    - name: name
      value: string
      description: >
        Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}`
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: labels
      value: object
      description: >
        Optional. Set of label tags associated with the resource.
        
    - name: sni
      value: string
      description: >
        Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
        
    - name: clientCertificate
      value: object
      description: >
        Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
        
    - name: serverValidationCa
      value: array
      description: >
        Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
        
    - name: clientTlsPolicyId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_client_tls_policies_patch"
    values={[
        { label: 'projects_locations_client_tls_policies_patch', value: 'projects_locations_client_tls_policies_patch' }
    ]}
>
<TabItem value="projects_locations_client_tls_policies_patch">

Updates the parameters of a single ClientTlsPolicy.

```sql
UPDATE google.networksecurity.client_tls_policies
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__sni = '{{ sni }}',
data__clientCertificate = '{{ clientCertificate }}',
data__serverValidationCa = '{{ serverValidationCa }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clientTlsPoliciesId = '{{ clientTlsPoliciesId }}' --required
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
    defaultValue="projects_locations_client_tls_policies_delete"
    values={[
        { label: 'projects_locations_client_tls_policies_delete', value: 'projects_locations_client_tls_policies_delete' }
    ]}
>
<TabItem value="projects_locations_client_tls_policies_delete">

Deletes a single ClientTlsPolicy.

```sql
DELETE FROM google.networksecurity.client_tls_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clientTlsPoliciesId = '{{ clientTlsPoliciesId }}' --required;
```
</TabItem>
</Tabs>
