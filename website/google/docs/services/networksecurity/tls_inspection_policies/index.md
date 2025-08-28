--- 
title: tls_inspection_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - tls_inspection_policies
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

Creates, updates, deletes, gets or lists a <code>tls_inspection_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tls_inspection_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.tls_inspection_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_tls_inspection_policies_get"
    values={[
        { label: 'projects_locations_tls_inspection_policies_get', value: 'projects_locations_tls_inspection_policies_get' },
        { label: 'projects_locations_tls_inspection_policies_list', value: 'projects_locations_tls_inspection_policies_list' }
    ]}
>
<TabItem value="projects_locations_tls_inspection_policies_get">

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
    <td>Required. Name of the resource. Name is of the form projects/&#123;project&#125;/locations/&#123;location&#125;/tlsInspectionPolicies/&#123;tls_inspection_policy&#125; tls_inspection_policy should match the pattern:(^&#91;a-z&#93;([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$).</td>
</tr>
<tr>
    <td><CopyableCode code="caPool" /></td>
    <td><code>string</code></td>
    <td>Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/caPools/&#123;ca_pool&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTlsFeatures" /></td>
    <td><code>array</code></td>
    <td>Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="excludePublicCaSet" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="minTlsVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsFeatureProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="trustConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/trustConfigs/&#123;trust_config&#125;". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_tls_inspection_policies_list">

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
    <td>Required. Name of the resource. Name is of the form projects/&#123;project&#125;/locations/&#123;location&#125;/tlsInspectionPolicies/&#123;tls_inspection_policy&#125; tls_inspection_policy should match the pattern:(^&#91;a-z&#93;([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$).</td>
</tr>
<tr>
    <td><CopyableCode code="caPool" /></td>
    <td><code>string</code></td>
    <td>Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/caPools/&#123;ca_pool&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTlsFeatures" /></td>
    <td><code>array</code></td>
    <td>Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="excludePublicCaSet" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="minTlsVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsFeatureProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.</td>
</tr>
<tr>
    <td><CopyableCode code="trustConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/&#123;project&#125;/locations/&#123;location&#125;/trustConfigs/&#123;trust_config&#125;". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field.</td>
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
    <td><a href="#projects_locations_tls_inspection_policies_get"><CopyableCode code="projects_locations_tls_inspection_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tlsInspectionPoliciesId"><code>tlsInspectionPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single TlsInspectionPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_tls_inspection_policies_list"><CopyableCode code="projects_locations_tls_inspection_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists TlsInspectionPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_tls_inspection_policies_create"><CopyableCode code="projects_locations_tls_inspection_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-tlsInspectionPolicyId"><code>tlsInspectionPolicyId</code></a></td>
    <td>Creates a new TlsInspectionPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_tls_inspection_policies_patch"><CopyableCode code="projects_locations_tls_inspection_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tlsInspectionPoliciesId"><code>tlsInspectionPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single TlsInspectionPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_tls_inspection_policies_delete"><CopyableCode code="projects_locations_tls_inspection_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tlsInspectionPoliciesId"><code>tlsInspectionPoliciesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single TlsInspectionPolicy.</td>
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
<tr id="parameter-tlsInspectionPoliciesId">
    <td><CopyableCode code="tlsInspectionPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-tlsInspectionPolicyId">
    <td><CopyableCode code="tlsInspectionPolicyId" /></td>
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
    defaultValue="projects_locations_tls_inspection_policies_get"
    values={[
        { label: 'projects_locations_tls_inspection_policies_get', value: 'projects_locations_tls_inspection_policies_get' },
        { label: 'projects_locations_tls_inspection_policies_list', value: 'projects_locations_tls_inspection_policies_list' }
    ]}
>
<TabItem value="projects_locations_tls_inspection_policies_get">

Gets details of a single TlsInspectionPolicy.

```sql
SELECT
name,
caPool,
createTime,
customTlsFeatures,
description,
excludePublicCaSet,
minTlsVersion,
tlsFeatureProfile,
trustConfig,
updateTime
FROM google.networksecurity.tls_inspection_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tlsInspectionPoliciesId = '{{ tlsInspectionPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_tls_inspection_policies_list">

Lists TlsInspectionPolicies in a given project and location.

```sql
SELECT
name,
caPool,
createTime,
customTlsFeatures,
description,
excludePublicCaSet,
minTlsVersion,
tlsFeatureProfile,
trustConfig,
updateTime
FROM google.networksecurity.tls_inspection_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_tls_inspection_policies_create"
    values={[
        { label: 'projects_locations_tls_inspection_policies_create', value: 'projects_locations_tls_inspection_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_tls_inspection_policies_create">

Creates a new TlsInspectionPolicy in a given project and location.

```sql
INSERT INTO google.networksecurity.tls_inspection_policies (
data__name,
data__description,
data__caPool,
data__trustConfig,
data__excludePublicCaSet,
data__minTlsVersion,
data__tlsFeatureProfile,
data__customTlsFeatures,
projectsId,
locationsId,
tlsInspectionPolicyId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ caPool }}',
'{{ trustConfig }}',
{{ excludePublicCaSet }},
'{{ minTlsVersion }}',
'{{ tlsFeatureProfile }}',
'{{ customTlsFeatures }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tlsInspectionPolicyId }}'
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
- name: tls_inspection_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tls_inspection_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the tls_inspection_policies resource.
    - name: name
      value: string
      description: >
        Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^&#91;a-z&#93;([a-z0-9-]{0,61}[a-z0-9])?$).
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: caPool
      value: string
      description: >
        Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".
        
    - name: trustConfig
      value: string
      description: >
        Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field.
        
    - name: excludePublicCaSet
      value: boolean
      description: >
        Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field.
        
    - name: minTlsVersion
      value: string
      description: >
        Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.
        
      valid_values: ['TLS_VERSION_UNSPECIFIED', 'TLS_1_0', 'TLS_1_1', 'TLS_1_2', 'TLS_1_3']
    - name: tlsFeatureProfile
      value: string
      description: >
        Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field.
        
      valid_values: ['PROFILE_UNSPECIFIED', 'PROFILE_COMPATIBLE', 'PROFILE_MODERN', 'PROFILE_RESTRICTED', 'PROFILE_CUSTOM']
    - name: customTlsFeatures
      value: array
      description: >
        Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.
        
    - name: tlsInspectionPolicyId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_tls_inspection_policies_patch"
    values={[
        { label: 'projects_locations_tls_inspection_policies_patch', value: 'projects_locations_tls_inspection_policies_patch' }
    ]}
>
<TabItem value="projects_locations_tls_inspection_policies_patch">

Updates the parameters of a single TlsInspectionPolicy.

```sql
UPDATE google.networksecurity.tls_inspection_policies
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__caPool = '{{ caPool }}',
data__trustConfig = '{{ trustConfig }}',
data__excludePublicCaSet = {{ excludePublicCaSet }},
data__minTlsVersion = '{{ minTlsVersion }}',
data__tlsFeatureProfile = '{{ tlsFeatureProfile }}',
data__customTlsFeatures = '{{ customTlsFeatures }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tlsInspectionPoliciesId = '{{ tlsInspectionPoliciesId }}' --required
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
    defaultValue="projects_locations_tls_inspection_policies_delete"
    values={[
        { label: 'projects_locations_tls_inspection_policies_delete', value: 'projects_locations_tls_inspection_policies_delete' }
    ]}
>
<TabItem value="projects_locations_tls_inspection_policies_delete">

Deletes a single TlsInspectionPolicy.

```sql
DELETE FROM google.networksecurity.tls_inspection_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tlsInspectionPoliciesId = '{{ tlsInspectionPoliciesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
