--- 
title: security_incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - security_incidents
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

Creates, updates, deletes, gets or lists a <code>security_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_incidents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_incidents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_security_incidents_get"
    values={[
        { label: 'organizations_environments_security_incidents_get', value: 'organizations_environments_security_incidents_get' },
        { label: 'organizations_environments_security_incidents_list', value: 'organizations_environments_security_incidents_list' }
    ]}
>
<TabItem value="organizations_environments_security_incidents_get">

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
    <td>Immutable. Name of the security incident resource. Format: organizations/&#123;org&#125;/environments/&#123;environment&#125;/securityIncidents/&#123;incident&#125; Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111</td>
</tr>
<tr>
    <td><CopyableCode code="detectionTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name of the security incident.</td>
</tr>
<tr>
    <td><CopyableCode code="firstDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when events associated with the incident were first detected.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when events associated with the incident were last detected.</td>
</tr>
<tr>
    <td><CopyableCode code="lastObservabilityChangeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the incident observability was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="observability" /></td>
    <td><code>string</code></td>
    <td>Optional. Indicates if the user archived this incident.</td>
</tr>
<tr>
    <td><CopyableCode code="riskLevel" /></td>
    <td><code>string</code></td>
    <td>Output only. Risk level of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Total traffic detected as part of the incident.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_security_incidents_list">

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
    <td>Immutable. Name of the security incident resource. Format: organizations/&#123;org&#125;/environments/&#123;environment&#125;/securityIncidents/&#123;incident&#125; Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111</td>
</tr>
<tr>
    <td><CopyableCode code="detectionTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name of the security incident.</td>
</tr>
<tr>
    <td><CopyableCode code="firstDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when events associated with the incident were first detected.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when events associated with the incident were last detected.</td>
</tr>
<tr>
    <td><CopyableCode code="lastObservabilityChangeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the incident observability was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="observability" /></td>
    <td><code>string</code></td>
    <td>Optional. Indicates if the user archived this incident.</td>
</tr>
<tr>
    <td><CopyableCode code="riskLevel" /></td>
    <td><code>string</code></td>
    <td>Output only. Risk level of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Total traffic detected as part of the incident.</td>
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
    <td><a href="#organizations_environments_security_incidents_get"><CopyableCode code="organizations_environments_security_incidents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityIncidentsId"><code>securityIncidentsId</code></a></td>
    <td></td>
    <td>GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_incidents_list"><CopyableCode code="organizations_environments_security_incidents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>ListSecurityIncidents lists all the security incident associated with the environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_incidents_patch"><CopyableCode code="organizations_environments_security_incidents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-securityIncidentsId"><code>securityIncidentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>UpdateSecurityIncidents updates an existing security incident.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_security_incidents_batch_update"><CopyableCode code="organizations_environments_security_incidents_batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>BatchUpdateSecurityIncident updates multiple existing security incidents.</td>
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
<tr id="parameter-securityIncidentsId">
    <td><CopyableCode code="securityIncidentsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_security_incidents_get"
    values={[
        { label: 'organizations_environments_security_incidents_get', value: 'organizations_environments_security_incidents_get' },
        { label: 'organizations_environments_security_incidents_list', value: 'organizations_environments_security_incidents_list' }
    ]}
>
<TabItem value="organizations_environments_security_incidents_get">

GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.

```sql
SELECT
name,
detectionTypes,
displayName,
firstDetectedTime,
lastDetectedTime,
lastObservabilityChangeTime,
observability,
riskLevel,
trafficCount
FROM google.apigee.security_incidents
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND securityIncidentsId = '{{ securityIncidentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_security_incidents_list">

ListSecurityIncidents lists all the security incident associated with the environment.

```sql
SELECT
name,
detectionTypes,
displayName,
firstDetectedTime,
lastDetectedTime,
lastObservabilityChangeTime,
observability,
riskLevel,
trafficCount
FROM google.apigee.security_incidents
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_security_incidents_patch"
    values={[
        { label: 'organizations_environments_security_incidents_patch', value: 'organizations_environments_security_incidents_patch' },
        { label: 'organizations_environments_security_incidents_batch_update', value: 'organizations_environments_security_incidents_batch_update' }
    ]}
>
<TabItem value="organizations_environments_security_incidents_patch">

UpdateSecurityIncidents updates an existing security incident.

```sql
UPDATE google.apigee.security_incidents
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__trafficCount = '{{ trafficCount }}',
data__observability = '{{ observability }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND securityIncidentsId = '{{ securityIncidentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
detectionTypes,
displayName,
firstDetectedTime,
lastDetectedTime,
lastObservabilityChangeTime,
observability,
riskLevel,
trafficCount;
```
</TabItem>
<TabItem value="organizations_environments_security_incidents_batch_update">

BatchUpdateSecurityIncident updates multiple existing security incidents.

```sql
UPDATE google.apigee.security_incidents
SET 
data__requests = '{{ requests }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
RETURNING
securityIncidents;
```
</TabItem>
</Tabs>
