--- 
title: clients
hide_title: false
hide_table_of_contents: false
keywords:
  - clients
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

Creates, updates, deletes, gets or lists a <code>clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clients</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get_clients"
    values={[
        { label: 'projects_locations_get_clients', value: 'projects_locations_get_clients' }
    ]}
>
<TabItem value="projects_locations_get_clients">

Response for the GetClient rpc

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
    <td><CopyableCode code="client" /></td>
    <td><code>object</code></td>
    <td>Required. Required: The client configuration that was requested (id: GoogleCloudIntegrationsV1alphaClientConfig)</td>
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
    <td><a href="#projects_locations_get_clients"><CopyableCode code="projects_locations_get_clients" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets the client configuration for the given project and location resource name</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_replace"><CopyableCode code="projects_locations_clients_replace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Update run-as service account for provisioned client</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_provision"><CopyableCode code="projects_locations_clients_provision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_provision_client_post_processor"><CopyableCode code="projects_locations_clients_provision_client_post_processor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Perform post provisioning steps after client is provisioned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_deprovision"><CopyableCode code="projects_locations_clients_deprovision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_change_config"><CopyableCode code="projects_locations_clients_change_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Updates the client customer configuration for the given project and location resource name</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_switch"><CopyableCode code="projects_locations_clients_switch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Update client from GMEK to CMEK</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_switch_variable_masking"><CopyableCode code="projects_locations_clients_switch_variable_masking" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Update variable masking for provisioned client</td>
</tr>
<tr>
    <td><a href="#projects_locations_clients_toggle_http"><CopyableCode code="projects_locations_clients_toggle_http" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enable/Disable http call for provisioned client</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get_clients"
    values={[
        { label: 'projects_locations_get_clients', value: 'projects_locations_get_clients' }
    ]}
>
<TabItem value="projects_locations_get_clients">

Gets the client configuration for the given project and location resource name

```sql
SELECT
client
FROM google.integrations.clients
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_clients_replace"
    values={[
        { label: 'projects_locations_clients_replace', value: 'projects_locations_clients_replace' }
    ]}
>
<TabItem value="projects_locations_clients_replace">

Update run-as service account for provisioned client

```sql
REPLACE google.integrations.clients
SET 
data__runAsServiceAccount = '{{ runAsServiceAccount }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_clients_provision"
    values={[
        { label: 'projects_locations_clients_provision', value: 'projects_locations_clients_provision' },
        { label: 'projects_locations_clients_provision_client_post_processor', value: 'projects_locations_clients_provision_client_post_processor' },
        { label: 'projects_locations_clients_deprovision', value: 'projects_locations_clients_deprovision' },
        { label: 'projects_locations_clients_change_config', value: 'projects_locations_clients_change_config' },
        { label: 'projects_locations_clients_switch', value: 'projects_locations_clients_switch' },
        { label: 'projects_locations_clients_switch_variable_masking', value: 'projects_locations_clients_switch_variable_masking' },
        { label: 'projects_locations_clients_toggle_http', value: 'projects_locations_clients_toggle_http' }
    ]}
>
<TabItem value="projects_locations_clients_provision">

Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.

```sql
EXEC google.integrations.clients.projects_locations_clients_provision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"cloudKmsConfig": "{{ cloudKmsConfig }}", 
"createSampleWorkflows": {{ createSampleWorkflows }}, 
"provisionGmek": {{ provisionGmek }}, 
"runAsServiceAccount": "{{ runAsServiceAccount }}", 
"skipCpProvision": {{ skipCpProvision }}, 
"enableHttpCall": {{ enableHttpCall }}, 
"enableManagedAiFeatures": {{ enableManagedAiFeatures }}
}';
```
</TabItem>
<TabItem value="projects_locations_clients_provision_client_post_processor">

Perform post provisioning steps after client is provisioned.

```sql
EXEC google.integrations.clients.projects_locations_clients_provision_client_post_processor 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"workflows": "{{ workflows }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clients_deprovision">

Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.

```sql
EXEC google.integrations.clients.projects_locations_clients_deprovision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_clients_change_config">

Updates the client customer configuration for the given project and location resource name

```sql
EXEC google.integrations.clients.projects_locations_clients_change_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"updateMask": "{{ updateMask }}", 
"customerConfig": "{{ customerConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clients_switch">

Update client from GMEK to CMEK

```sql
EXEC google.integrations.clients.projects_locations_clients_switch 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"cloudKmsConfig": "{{ cloudKmsConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clients_switch_variable_masking">

Update variable masking for provisioned client

```sql
EXEC google.integrations.clients.projects_locations_clients_switch_variable_masking 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"enableVariableMasking": {{ enableVariableMasking }}
}';
```
</TabItem>
<TabItem value="projects_locations_clients_toggle_http">

Enable/Disable http call for provisioned client

```sql
EXEC google.integrations.clients.projects_locations_clients_toggle_http 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"enableHttpCall": {{ enableHttpCall }}
}';
```
</TabItem>
</Tabs>
