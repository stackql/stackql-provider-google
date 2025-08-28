--- 
title: server_tls_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - server_tls_policies
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

Creates, updates, deletes, gets or lists a <code>server_tls_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>server_tls_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.server_tls_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_server_tls_policies_get"
    values={[
        { label: 'projects_locations_server_tls_policies_get', value: 'projects_locations_server_tls_policies_get' },
        { label: 'projects_locations_server_tls_policies_list', value: 'projects_locations_server_tls_policies_list' }
    ]}
>
<TabItem value="projects_locations_server_tls_policies_get">

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
    <td>Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/&#123;location&#125;/serverTlsPolicies/&#123;server_tls_policy&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowOpen" /></td>
    <td><code>boolean</code></td>
    <td>This field applies only for Traffic Director policies. It is must be set to false for Application Load Balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of label tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="mtlsPolicy" /></td>
    <td><code>object</code></td>
    <td>This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. (id: MTLSPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="serverCertificate" /></td>
    <td><code>object</code></td>
    <td>Optional if policy is to be used with Traffic Director. For Application Load Balancers must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported. (id: GoogleCloudNetworksecurityV1CertificateProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_server_tls_policies_list">

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
    <td>Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/&#123;location&#125;/serverTlsPolicies/&#123;server_tls_policy&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowOpen" /></td>
    <td><code>boolean</code></td>
    <td>This field applies only for Traffic Director policies. It is must be set to false for Application Load Balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of label tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="mtlsPolicy" /></td>
    <td><code>object</code></td>
    <td>This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. (id: MTLSPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="serverCertificate" /></td>
    <td><code>object</code></td>
    <td>Optional if policy is to be used with Traffic Director. For Application Load Balancers must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported. (id: GoogleCloudNetworksecurityV1CertificateProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#projects_locations_server_tls_policies_get"><CopyableCode code="projects_locations_server_tls_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serverTlsPoliciesId"><code>serverTlsPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single ServerTlsPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_server_tls_policies_list"><CopyableCode code="projects_locations_server_tls_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists ServerTlsPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_server_tls_policies_create"><CopyableCode code="projects_locations_server_tls_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-serverTlsPolicyId"><code>serverTlsPolicyId</code></a></td>
    <td>Creates a new ServerTlsPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_server_tls_policies_patch"><CopyableCode code="projects_locations_server_tls_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serverTlsPoliciesId"><code>serverTlsPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single ServerTlsPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_server_tls_policies_delete"><CopyableCode code="projects_locations_server_tls_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serverTlsPoliciesId"><code>serverTlsPoliciesId</code></a></td>
    <td></td>
    <td>Deletes a single ServerTlsPolicy.</td>
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
<tr id="parameter-serverTlsPoliciesId">
    <td><CopyableCode code="serverTlsPoliciesId" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serverTlsPolicyId">
    <td><CopyableCode code="serverTlsPolicyId" /></td>
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
    defaultValue="projects_locations_server_tls_policies_get"
    values={[
        { label: 'projects_locations_server_tls_policies_get', value: 'projects_locations_server_tls_policies_get' },
        { label: 'projects_locations_server_tls_policies_list', value: 'projects_locations_server_tls_policies_list' }
    ]}
>
<TabItem value="projects_locations_server_tls_policies_get">

Gets details of a single ServerTlsPolicy.

```sql
SELECT
name,
allowOpen,
createTime,
description,
labels,
mtlsPolicy,
serverCertificate,
updateTime
FROM google.networksecurity.server_tls_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND serverTlsPoliciesId = '{{ serverTlsPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_server_tls_policies_list">

Lists ServerTlsPolicies in a given project and location.

```sql
SELECT
name,
allowOpen,
createTime,
description,
labels,
mtlsPolicy,
serverCertificate,
updateTime
FROM google.networksecurity.server_tls_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_server_tls_policies_create"
    values={[
        { label: 'projects_locations_server_tls_policies_create', value: 'projects_locations_server_tls_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_server_tls_policies_create">

Creates a new ServerTlsPolicy in a given project and location.

```sql
INSERT INTO google.networksecurity.server_tls_policies (
data__name,
data__description,
data__labels,
data__allowOpen,
data__serverCertificate,
data__mtlsPolicy,
projectsId,
locationsId,
serverTlsPolicyId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
{{ allowOpen }},
'{{ serverCertificate }}',
'{{ mtlsPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ serverTlsPolicyId }}'
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
- name: server_tls_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the server_tls_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the server_tls_policies resource.
    - name: name
      value: string
      description: >
        Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/serverTlsPolicies/{server_tls_policy}`
        
    - name: description
      value: string
      description: >
        Free-text description of the resource.
        
    - name: labels
      value: object
      description: >
        Set of label tags associated with the resource.
        
    - name: allowOpen
      value: boolean
      description: >
        This field applies only for Traffic Director policies. It is must be set to false for Application Load Balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
        
    - name: serverCertificate
      value: object
      description: >
        Optional if policy is to be used with Traffic Director. For Application Load Balancers must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported.
        
    - name: mtlsPolicy
      value: object
      description: >
        This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections.
        
    - name: serverTlsPolicyId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_server_tls_policies_patch"
    values={[
        { label: 'projects_locations_server_tls_policies_patch', value: 'projects_locations_server_tls_policies_patch' }
    ]}
>
<TabItem value="projects_locations_server_tls_policies_patch">

Updates the parameters of a single ServerTlsPolicy.

```sql
UPDATE google.networksecurity.server_tls_policies
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__allowOpen = {{ allowOpen }},
data__serverCertificate = '{{ serverCertificate }}',
data__mtlsPolicy = '{{ mtlsPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serverTlsPoliciesId = '{{ serverTlsPoliciesId }}' --required
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
    defaultValue="projects_locations_server_tls_policies_delete"
    values={[
        { label: 'projects_locations_server_tls_policies_delete', value: 'projects_locations_server_tls_policies_delete' }
    ]}
>
<TabItem value="projects_locations_server_tls_policies_delete">

Deletes a single ServerTlsPolicy.

```sql
DELETE FROM google.networksecurity.server_tls_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serverTlsPoliciesId = '{{ serverTlsPoliciesId }}' --required;
```
</TabItem>
</Tabs>
