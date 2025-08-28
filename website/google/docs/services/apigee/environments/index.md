--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - apigee
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get"
    values={[
        { label: 'organizations_environments_get', value: 'organizations_environments_get' }
    ]}
>
<TabItem value="organizations_environments_get">

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
    <td>Required. Name of the environment. Values must match the regular expression `^[.\\p&#123;Alnum&#125;-_]&#123;1,255&#125;$`</td>
</tr>
<tr>
    <td><CopyableCode code="apiProxyType" /></td>
    <td><code>string</code></td>
    <td>Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="clientIpResolutionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other features that use the client ip. To remove a client ip resolution config, update the field to an empty value. Example: '&#123; "clientIpResolutionConfig" = &#123;&#125; &#125;' For more information, see: https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution. (id: GoogleCloudApigeeV1EnvironmentClientIPResolutionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Creation time of this environment as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](https://cloud.google.com/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name for this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardProxyUri" /></td>
    <td><code>string</code></td>
    <td>Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of &#123;scheme&#125;://&#123;hostname&#125;:&#123;port&#125;. Note that the only supported scheme is "http". The port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.</td>
</tr>
<tr>
    <td><CopyableCode code="hasAttachedFlowHooks" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Last modification time of this environment as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. NodeConfig of the environment. (id: GoogleCloudApigeeV1NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. Key-value pairs that may be used for customizing the environment. (id: GoogleCloudApigeeV1Properties)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. EnvironmentType selected for the environment.</td>
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
    <td><a href="#organizations_environments_get"><CopyableCode code="organizations_environments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets environment details.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_environments_create"><CopyableCode code="organizations_security_profiles_environments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a></td>
    <td></td>
    <td>CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_create"><CopyableCode code="organizations_environments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Creates an environment in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_update_environment"><CopyableCode code="organizations_environments_update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](./). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_update"><CopyableCode code="organizations_environments_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](./). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_environments_delete"><CopyableCode code="organizations_security_profiles_environments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_delete"><CopyableCode code="organizations_environments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Deletes an environment from an organization. **Warning: You must delete all key value maps and key value entries before you delete an environment.** Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_modify_environment"><CopyableCode code="organizations_environments_modify_environment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates properties for an Apigee environment with patch semantics using a field mask. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_subscribe"><CopyableCode code="organizations_environments_subscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_unsubscribe"><CopyableCode code="organizations_environments_unsubscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Deletes a subscription for the environment's Pub/Sub topic.</td>
</tr>
<tr>
    <td><a href="#organizations_security_profiles_environments_compute_environment_scores"><CopyableCode code="organizations_security_profiles_environments_compute_environment_scores" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-securityProfilesId">
    <td><CopyableCode code="securityProfilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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
    defaultValue="organizations_environments_get"
    values={[
        { label: 'organizations_environments_get', value: 'organizations_environments_get' }
    ]}
>
<TabItem value="organizations_environments_get">

Gets environment details.

```sql
SELECT
name,
apiProxyType,
clientIpResolutionConfig,
createdAt,
deploymentType,
description,
displayName,
forwardProxyUri,
hasAttachedFlowHooks,
lastModifiedAt,
nodeConfig,
properties,
state,
type
FROM google.apigee.environments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_security_profiles_environments_create"
    values={[
        { label: 'organizations_security_profiles_environments_create', value: 'organizations_security_profiles_environments_create' },
        { label: 'organizations_environments_create', value: 'organizations_environments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_security_profiles_environments_create">

CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.

```sql
INSERT INTO google.apigee.environments (
data__name,
data__securityProfileRevisionId,
organizationsId,
securityProfilesId
)
SELECT 
'{{ name }}',
'{{ securityProfileRevisionId }}',
'{{ organizationsId }}',
'{{ securityProfilesId }}'
RETURNING
name,
attachTime,
securityProfileRevisionId
;
```
</TabItem>
<TabItem value="organizations_environments_create">

Creates an environment in an organization.

```sql
INSERT INTO google.apigee.environments (
data__name,
data__description,
data__properties,
data__displayName,
data__deploymentType,
data__apiProxyType,
data__nodeConfig,
data__forwardProxyUri,
data__type,
data__hasAttachedFlowHooks,
data__clientIpResolutionConfig,
organizationsId,
name
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ properties }}',
'{{ displayName }}',
'{{ deploymentType }}',
'{{ apiProxyType }}',
'{{ nodeConfig }}',
'{{ forwardProxyUri }}',
'{{ type }}',
{{ hasAttachedFlowHooks }},
'{{ clientIpResolutionConfig }}',
'{{ organizationsId }}',
'{{ name }}'
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
- name: environments
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the environments resource.
    - name: securityProfilesId
      value: string
      description: Required parameter for the environments resource.
    - name: name
      value: string
      description: >
        Required. Name of the environment. Values must match the regular expression `^[.\\p{Alnum}-_]{1,255}$`
        
    - name: securityProfileRevisionId
      value: string
      description: >
        DEPRECATED: DO NOT USE Revision ID of the security profile.
        
    - name: description
      value: string
      description: >
        Optional. Description of the environment.
        
    - name: properties
      value: object
      description: >
        Optional. Key-value pairs that may be used for customizing the environment.
        
    - name: displayName
      value: string
      description: >
        Optional. Display name for this environment.
        
    - name: deploymentType
      value: string
      description: >
        Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](https://cloud.google.com/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers
        
      valid_values: ['DEPLOYMENT_TYPE_UNSPECIFIED', 'PROXY', 'ARCHIVE']
    - name: apiProxyType
      value: string
      description: >
        Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.
        
      valid_values: ['API_PROXY_TYPE_UNSPECIFIED', 'PROGRAMMABLE', 'CONFIGURABLE']
    - name: nodeConfig
      value: object
      description: >
        Optional. NodeConfig of the environment.
        
    - name: forwardProxyUri
      value: string
      description: >
        Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the only supported scheme is "http". The port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request.
        
    - name: type
      value: string
      description: >
        Optional. EnvironmentType selected for the environment.
        
      valid_values: ['ENVIRONMENT_TYPE_UNSPECIFIED', 'BASE', 'INTERMEDIATE', 'COMPREHENSIVE']
    - name: hasAttachedFlowHooks
      value: boolean
    - name: clientIpResolutionConfig
      value: object
      description: >
        Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other features that use the client ip. To remove a client ip resolution config, update the field to an empty value. Example: '{ "clientIpResolutionConfig" = {} }' For more information, see: https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution.
        
    - name: name
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_update_environment"
    values={[
        { label: 'organizations_environments_update_environment', value: 'organizations_environments_update_environment' }
    ]}
>
<TabItem value="organizations_environments_update_environment">

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](./). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

```sql
UPDATE google.apigee.environments
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__properties = '{{ properties }}',
data__displayName = '{{ displayName }}',
data__deploymentType = '{{ deploymentType }}',
data__apiProxyType = '{{ apiProxyType }}',
data__nodeConfig = '{{ nodeConfig }}',
data__forwardProxyUri = '{{ forwardProxyUri }}',
data__type = '{{ type }}',
data__hasAttachedFlowHooks = {{ hasAttachedFlowHooks }},
data__clientIpResolutionConfig = '{{ clientIpResolutionConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
RETURNING
name,
apiProxyType,
clientIpResolutionConfig,
createdAt,
deploymentType,
description,
displayName,
forwardProxyUri,
hasAttachedFlowHooks,
lastModifiedAt,
nodeConfig,
properties,
state,
type;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_environments_update"
    values={[
        { label: 'organizations_environments_update', value: 'organizations_environments_update' }
    ]}
>
<TabItem value="organizations_environments_update">

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the [Get Environment API](./). **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

```sql
REPLACE google.apigee.environments
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__properties = '{{ properties }}',
data__displayName = '{{ displayName }}',
data__deploymentType = '{{ deploymentType }}',
data__apiProxyType = '{{ apiProxyType }}',
data__nodeConfig = '{{ nodeConfig }}',
data__forwardProxyUri = '{{ forwardProxyUri }}',
data__type = '{{ type }}',
data__hasAttachedFlowHooks = {{ hasAttachedFlowHooks }},
data__clientIpResolutionConfig = '{{ clientIpResolutionConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
RETURNING
name,
apiProxyType,
clientIpResolutionConfig,
createdAt,
deploymentType,
description,
displayName,
forwardProxyUri,
hasAttachedFlowHooks,
lastModifiedAt,
nodeConfig,
properties,
state,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_security_profiles_environments_delete"
    values={[
        { label: 'organizations_security_profiles_environments_delete', value: 'organizations_security_profiles_environments_delete' },
        { label: 'organizations_environments_delete', value: 'organizations_environments_delete' }
    ]}
>
<TabItem value="organizations_security_profiles_environments_delete">

DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.

```sql
DELETE FROM google.apigee.environments
WHERE organizationsId = '{{ organizationsId }}' --required
AND securityProfilesId = '{{ securityProfilesId }}' --required
AND environmentsId = '{{ environmentsId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_delete">

Deletes an environment from an organization. **Warning: You must delete all key value maps and key value entries before you delete an environment.** Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.

```sql
DELETE FROM google.apigee.environments
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_modify_environment"
    values={[
        { label: 'organizations_environments_modify_environment', value: 'organizations_environments_modify_environment' },
        { label: 'organizations_environments_subscribe', value: 'organizations_environments_subscribe' },
        { label: 'organizations_environments_unsubscribe', value: 'organizations_environments_unsubscribe' },
        { label: 'organizations_security_profiles_environments_compute_environment_scores', value: 'organizations_security_profiles_environments_compute_environment_scores' }
    ]}
>
<TabItem value="organizations_environments_modify_environment">

Updates properties for an Apigee environment with patch semantics using a field mask. **Note:** Not supported for Apigee hybrid.

```sql
EXEC google.apigee.environments.organizations_environments_modify_environment 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@updateMask='{{ updateMask }}' 
@@json=
'{
"name": "{{ name }}", 
"description": "{{ description }}", 
"properties": "{{ properties }}", 
"displayName": "{{ displayName }}", 
"deploymentType": "{{ deploymentType }}", 
"apiProxyType": "{{ apiProxyType }}", 
"nodeConfig": "{{ nodeConfig }}", 
"forwardProxyUri": "{{ forwardProxyUri }}", 
"type": "{{ type }}", 
"hasAttachedFlowHooks": {{ hasAttachedFlowHooks }}, 
"clientIpResolutionConfig": "{{ clientIpResolutionConfig }}"
}';
```
</TabItem>
<TabItem value="organizations_environments_subscribe">

Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.

```sql
EXEC google.apigee.environments.organizations_environments_subscribe 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required;
```
</TabItem>
<TabItem value="organizations_environments_unsubscribe">

Deletes a subscription for the environment's Pub/Sub topic.

```sql
EXEC google.apigee.environments.organizations_environments_unsubscribe 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="organizations_security_profiles_environments_compute_environment_scores">

ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.

```sql
EXEC google.apigee.environments.organizations_security_profiles_environments_compute_environment_scores 
@organizationsId='{{ organizationsId }}' --required, 
@securityProfilesId='{{ securityProfilesId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"timeRange": "{{ timeRange }}", 
"filters": "{{ filters }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
