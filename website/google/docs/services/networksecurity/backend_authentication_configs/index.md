--- 
title: backend_authentication_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_authentication_configs
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

Creates, updates, deletes, gets or lists a <code>backend_authentication_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backend_authentication_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.backend_authentication_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_backend_authentication_configs_get"
    values={[
        { label: 'projects_locations_backend_authentication_configs_get', value: 'projects_locations_backend_authentication_configs_get' },
        { label: 'projects_locations_backend_authentication_configs_list', value: 'projects_locations_backend_authentication_configs_list' }
    ]}
>
<TabItem value="projects_locations_backend_authentication_configs_get">

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
    <td>Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/*/locations/&#123;location&#125;/backendAuthenticationConfigs/&#123;backend_authentication_config&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificate" /></td>
    <td><code>string</code></td>
    <td>Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/certificates/&#123;certificate&#125;". Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.</td>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of label tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="trustConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/trustConfigs/&#123;trust_config&#125;". A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="wellKnownRoots" /></td>
    <td><code>string</code></td>
    <td>Well known roots to use for server certificate validation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_backend_authentication_configs_list">

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
    <td>Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/*/locations/&#123;location&#125;/backendAuthenticationConfigs/&#123;backend_authentication_config&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificate" /></td>
    <td><code>string</code></td>
    <td>Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/certificates/&#123;certificate&#125;". Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.</td>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of label tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="trustConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/trustConfigs/&#123;trust_config&#125;". A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="wellKnownRoots" /></td>
    <td><code>string</code></td>
    <td>Well known roots to use for server certificate validation.</td>
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
    <td><a href="#projects_locations_backend_authentication_configs_get"><CopyableCode code="projects_locations_backend_authentication_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendAuthenticationConfigsId"><code>backendAuthenticationConfigsId</code></a></td>
    <td></td>
    <td>Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_backend_authentication_configs_list"><CopyableCode code="projects_locations_backend_authentication_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists BackendAuthenticationConfigs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_backend_authentication_configs_create"><CopyableCode code="projects_locations_backend_authentication_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backendAuthenticationConfigId"><code>backendAuthenticationConfigId</code></a></td>
    <td>Creates a new BackendAuthenticationConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_backend_authentication_configs_patch"><CopyableCode code="projects_locations_backend_authentication_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendAuthenticationConfigsId"><code>backendAuthenticationConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_backend_authentication_configs_delete"><CopyableCode code="projects_locations_backend_authentication_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendAuthenticationConfigsId"><code>backendAuthenticationConfigsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.</td>
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
<tr id="parameter-backendAuthenticationConfigsId">
    <td><CopyableCode code="backendAuthenticationConfigsId" /></td>
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
<tr id="parameter-backendAuthenticationConfigId">
    <td><CopyableCode code="backendAuthenticationConfigId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
    defaultValue="projects_locations_backend_authentication_configs_get"
    values={[
        { label: 'projects_locations_backend_authentication_configs_get', value: 'projects_locations_backend_authentication_configs_get' },
        { label: 'projects_locations_backend_authentication_configs_list', value: 'projects_locations_backend_authentication_configs_list' }
    ]}
>
<TabItem value="projects_locations_backend_authentication_configs_get">

Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.

```sql
SELECT
name,
clientCertificate,
createTime,
description,
etag,
labels,
trustConfig,
updateTime,
wellKnownRoots
FROM google.networksecurity.backend_authentication_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backendAuthenticationConfigsId = '{{ backendAuthenticationConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_backend_authentication_configs_list">

Lists BackendAuthenticationConfigs in a given project and location.

```sql
SELECT
name,
clientCertificate,
createTime,
description,
etag,
labels,
trustConfig,
updateTime,
wellKnownRoots
FROM google.networksecurity.backend_authentication_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_backend_authentication_configs_create"
    values={[
        { label: 'projects_locations_backend_authentication_configs_create', value: 'projects_locations_backend_authentication_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_backend_authentication_configs_create">

Creates a new BackendAuthenticationConfig in a given project and location.

```sql
INSERT INTO google.networksecurity.backend_authentication_configs (
data__name,
data__description,
data__labels,
data__clientCertificate,
data__trustConfig,
data__wellKnownRoots,
projectsId,
locationsId,
backendAuthenticationConfigId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ clientCertificate }}',
'{{ trustConfig }}',
'{{ wellKnownRoots }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backendAuthenticationConfigId }}'
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
- name: backend_authentication_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backend_authentication_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the backend_authentication_configs resource.
    - name: name
      value: string
      description: >
        Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/*/locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}`
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: labels
      value: object
      description: >
        Set of label tags associated with the resource.
        
    - name: clientCertificate
      value: string
      description: >
        Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/{project}/locations/{location}/certificates/{certificate}". Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.
        
    - name: trustConfig
      value: string
      description: >
        Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.
        
    - name: wellKnownRoots
      value: string
      description: >
        Well known roots to use for server certificate validation.
        
      valid_values: ['WELL_KNOWN_ROOTS_UNSPECIFIED', 'NONE', 'PUBLIC_ROOTS']
    - name: backendAuthenticationConfigId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_backend_authentication_configs_patch"
    values={[
        { label: 'projects_locations_backend_authentication_configs_patch', value: 'projects_locations_backend_authentication_configs_patch' }
    ]}
>
<TabItem value="projects_locations_backend_authentication_configs_patch">

Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.

```sql
UPDATE google.networksecurity.backend_authentication_configs
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__clientCertificate = '{{ clientCertificate }}',
data__trustConfig = '{{ trustConfig }}',
data__wellKnownRoots = '{{ wellKnownRoots }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backendAuthenticationConfigsId = '{{ backendAuthenticationConfigsId }}' --required
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
    defaultValue="projects_locations_backend_authentication_configs_delete"
    values={[
        { label: 'projects_locations_backend_authentication_configs_delete', value: 'projects_locations_backend_authentication_configs_delete' }
    ]}
>
<TabItem value="projects_locations_backend_authentication_configs_delete">

Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.

```sql
DELETE FROM google.networksecurity.backend_authentication_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backendAuthenticationConfigsId = '{{ backendAuthenticationConfigsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
