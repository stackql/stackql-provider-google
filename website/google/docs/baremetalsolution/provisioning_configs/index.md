--- 
title: provisioning_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_configs
  - baremetalsolution
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

Creates, updates, deletes, gets or lists a <code>provisioning_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>provisioning_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.baremetalsolution.provisioning_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

A provisioning configuration.

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
    <td>Output only. The system-generated name of the provisioning config. This follows the UUID format.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudConsoleUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI to Cloud Console UI view of this provisioning config.</td>
</tr>
<tr>
    <td><CopyableCode code="customId" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-defined identifier of the provisioning config.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.</td>
</tr>
<tr>
    <td><CopyableCode code="handoverServiceAccount" /></td>
    <td><code>string</code></td>
    <td>A service account to enable customers to access instance credentials upon handover.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>Instances to be created.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>Networks to be created.</td>
</tr>
<tr>
    <td><CopyableCode code="pod" /></td>
    <td><code>string</code></td>
    <td>Optional. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes, nfsshares) allocated in the same pod only.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of ProvisioningConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Optional status messages associated with the FAILED state.</td>
</tr>
<tr>
    <td><CopyableCode code="ticketId" /></td>
    <td><code>string</code></td>
    <td>A generated ticket id to track provisioning request.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>Volumes to be created.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcScEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, VPC SC is enabled for the cluster.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-provisioningConfigsId"><code>provisioningConfigsId</code></a></td>
    <td></td>
    <td>Get ProvisioningConfig by name.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td>Create new ProvisioningConfig.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-provisioningConfigsId"><code>provisioningConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td>Update existing ProvisioningConfig.</td>
</tr>
<tr>
    <td><a href="#submit"><CopyableCode code="submit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Submit a provisioning configuration for a given project.</td>
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
<tr id="parameter-provisioningConfigsId">
    <td><CopyableCode code="provisioningConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get ProvisioningConfig by name.

```sql
SELECT
name,
cloudConsoleUri,
customId,
email,
handoverServiceAccount,
instances,
location,
networks,
pod,
state,
statusMessage,
ticketId,
updateTime,
volumes,
vpcScEnabled
FROM google.baremetalsolution.provisioning_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND provisioningConfigsId = '{{ provisioningConfigsId }}' -- required;
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

Create new ProvisioningConfig.

```sql
INSERT INTO google.baremetalsolution.provisioning_configs (
data__instances,
data__networks,
data__volumes,
data__ticketId,
data__handoverServiceAccount,
data__email,
data__location,
data__vpcScEnabled,
data__statusMessage,
data__customId,
data__pod,
projectsId,
locationsId,
email
)
SELECT 
'{{ instances }}',
'{{ networks }}',
'{{ volumes }}',
'{{ ticketId }}',
'{{ handoverServiceAccount }}',
'{{ email }}',
'{{ location }}',
{{ vpcScEnabled }},
'{{ statusMessage }}',
'{{ customId }}',
'{{ pod }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ email }}'
RETURNING
name,
cloudConsoleUri,
customId,
email,
handoverServiceAccount,
instances,
location,
networks,
pod,
state,
statusMessage,
ticketId,
updateTime,
volumes,
vpcScEnabled
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: provisioning_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the provisioning_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the provisioning_configs resource.
    - name: instances
      value: array
      description: >
        Instances to be created.
        
    - name: networks
      value: array
      description: >
        Networks to be created.
        
    - name: volumes
      value: array
      description: >
        Volumes to be created.
        
    - name: ticketId
      value: string
      description: >
        A generated ticket id to track provisioning request.
        
    - name: handoverServiceAccount
      value: string
      description: >
        A service account to enable customers to access instance credentials upon handover.
        
    - name: email
      value: string
      description: >
        Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.
        
    - name: location
      value: string
      description: >
        Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.
        
    - name: vpcScEnabled
      value: boolean
      description: >
        If true, VPC SC is enabled for the cluster.
        
    - name: statusMessage
      value: string
      description: >
        Optional status messages associated with the FAILED state.
        
    - name: customId
      value: string
      description: >
        Optional. The user-defined identifier of the provisioning config.
        
    - name: pod
      value: string
      description: >
        Optional. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes, nfsshares) allocated in the same pod only.
        
    - name: email
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

Update existing ProvisioningConfig.

```sql
UPDATE google.baremetalsolution.provisioning_configs
SET 
data__instances = '{{ instances }}',
data__networks = '{{ networks }}',
data__volumes = '{{ volumes }}',
data__ticketId = '{{ ticketId }}',
data__handoverServiceAccount = '{{ handoverServiceAccount }}',
data__email = '{{ email }}',
data__location = '{{ location }}',
data__vpcScEnabled = {{ vpcScEnabled }},
data__statusMessage = '{{ statusMessage }}',
data__customId = '{{ customId }}',
data__pod = '{{ pod }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND provisioningConfigsId = '{{ provisioningConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
AND email = '{{ email}}'
RETURNING
name,
cloudConsoleUri,
customId,
email,
handoverServiceAccount,
instances,
location,
networks,
pod,
state,
statusMessage,
ticketId,
updateTime,
volumes,
vpcScEnabled;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="submit"
    values={[
        { label: 'submit', value: 'submit' }
    ]}
>
<TabItem value="submit">

Submit a provisioning configuration for a given project.

```sql
EXEC google.baremetalsolution.provisioning_configs.submit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"provisioningConfig": "{{ provisioningConfig }}", 
"email": "{{ email }}"
}';
```
</TabItem>
</Tabs>
