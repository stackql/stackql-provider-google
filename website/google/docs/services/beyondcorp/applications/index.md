--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - beyondcorp
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.beyondcorp.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_security_gateways_applications_get"
    values={[
        { label: 'projects_locations_security_gateways_applications_get', value: 'projects_locations_security_gateways_applications_get' },
        { label: 'projects_locations_security_gateways_applications_list', value: 'projects_locations_security_gateways_applications_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_get">

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
    <td>Identifier. Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointMatchers" /></td>
    <td><code>array</code></td>
    <td>Required. Endpoint matchers associated with an application. A combination of hostname and ports as endpoint matchers is used to match the application. Match conditions for OR logic. An array of match conditions to allow for multiple matching criteria. The rule is considered a match if one of the conditions is met. The conditions can be one of the following combinations (Hostname), (Hostname & Ports) EXAMPLES: Hostname - ("*.example.com"), ("xyz.example.com") Hostname and Ports - ("example.com" and "22"), ("example.com" and "22,33") etc</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreams" /></td>
    <td><code>array</code></td>
    <td>Optional. Which upstream resources to forward traffic to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_security_gateways_applications_list">

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
    <td>Identifier. Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointMatchers" /></td>
    <td><code>array</code></td>
    <td>Required. Endpoint matchers associated with an application. A combination of hostname and ports as endpoint matchers is used to match the application. Match conditions for OR logic. An array of match conditions to allow for multiple matching criteria. The rule is considered a match if one of the conditions is met. The conditions can be one of the following combinations (Hostname), (Hostname & Ports) EXAMPLES: Hostname - ("*.example.com"), ("xyz.example.com") Hostname and Ports - ("example.com" and "22"), ("example.com" and "22,33") etc</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreams" /></td>
    <td><code>array</code></td>
    <td>Optional. Which upstream resources to forward traffic to.</td>
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
    <td><a href="#projects_locations_security_gateways_applications_get"><CopyableCode code="projects_locations_security_gateways_applications_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_list"><CopyableCode code="projects_locations_security_gateways_applications_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Applications in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_create"><CopyableCode code="projects_locations_security_gateways_applications_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Application in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_patch"><CopyableCode code="projects_locations_security_gateways_applications_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_delete"><CopyableCode code="projects_locations_security_gateways_applications_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single application.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
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
<tr id="parameter-securityGatewaysId">
    <td><CopyableCode code="securityGatewaysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
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
    defaultValue="projects_locations_security_gateways_applications_get"
    values={[
        { label: 'projects_locations_security_gateways_applications_get', value: 'projects_locations_security_gateways_applications_get' },
        { label: 'projects_locations_security_gateways_applications_list', value: 'projects_locations_security_gateways_applications_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_get">

Gets details of a single Application.

```sql
SELECT
name,
createTime,
displayName,
endpointMatchers,
updateTime,
upstreams
FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityGatewaysId = '{{ securityGatewaysId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_security_gateways_applications_list">

Lists Applications in a given project and location.

```sql
SELECT
name,
createTime,
displayName,
endpointMatchers,
updateTime,
upstreams
FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityGatewaysId = '{{ securityGatewaysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_security_gateways_applications_create"
    values={[
        { label: 'projects_locations_security_gateways_applications_create', value: 'projects_locations_security_gateways_applications_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_create">

Creates a new Application in a given project and location.

```sql
INSERT INTO google.beyondcorp.applications (
data__name,
data__endpointMatchers,
data__displayName,
data__upstreams,
projectsId,
locationsId,
securityGatewaysId,
applicationId,
requestId
)
SELECT 
'{{ name }}',
'{{ endpointMatchers }}',
'{{ displayName }}',
'{{ upstreams }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ securityGatewaysId }}',
'{{ applicationId }}',
'{{ requestId }}'
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
- name: applications
  props:
    - name: projectsId
      value: string
      description: Required parameter for the applications resource.
    - name: locationsId
      value: string
      description: Required parameter for the applications resource.
    - name: securityGatewaysId
      value: string
      description: Required parameter for the applications resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the resource.
        
    - name: endpointMatchers
      value: array
      description: >
        Required. Endpoint matchers associated with an application. A combination of hostname and ports as endpoint matchers is used to match the application. Match conditions for OR logic. An array of match conditions to allow for multiple matching criteria. The rule is considered a match if one of the conditions is met. The conditions can be one of the following combinations (Hostname), (Hostname & Ports) EXAMPLES: Hostname - ("*.example.com"), ("xyz.example.com") Hostname and Ports - ("example.com" and "22"), ("example.com" and "22,33") etc
        
    - name: displayName
      value: string
      description: >
        Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.
        
    - name: upstreams
      value: array
      description: >
        Optional. Which upstream resources to forward traffic to.
        
    - name: applicationId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_security_gateways_applications_patch"
    values={[
        { label: 'projects_locations_security_gateways_applications_patch', value: 'projects_locations_security_gateways_applications_patch' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_patch">

Updates the parameters of a single Application.

```sql
UPDATE google.beyondcorp.applications
SET 
data__name = '{{ name }}',
data__endpointMatchers = '{{ endpointMatchers }}',
data__displayName = '{{ displayName }}',
data__upstreams = '{{ upstreams }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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
    defaultValue="projects_locations_security_gateways_applications_delete"
    values={[
        { label: 'projects_locations_security_gateways_applications_delete', value: 'projects_locations_security_gateways_applications_delete' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_delete">

Deletes a single application.

```sql
DELETE FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}';
```
</TabItem>
</Tabs>
