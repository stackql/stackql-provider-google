--- 
title: datacenter_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_connectors
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>datacenter_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datacenter_connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.datacenter_connectors" /></td></tr>
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
    <td>Output only. The connector's name.</td>
</tr>
<tr>
    <td><CopyableCode code="applianceInfrastructureVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="applianceSoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="availableVersions" /></td>
    <td><code>object</code></td>
    <td>Output only. The available versions for updating this appliance. (id: AvailableUpdates)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>Output only. The communication channel between the datacenter connector and Google Cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the connector was created (as an API call, not when it was actually installed).</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the Datacenter Connector in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="registrationId" /></td>
    <td><code>string</code></td>
    <td>Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account to use in the connector when communicating with the cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the DatacenterConnector, as determined by the health checks.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the state was last set.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the connector was updated with an API call.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the current / last upgradeAppliance operation. (id: UpgradeStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. The connector's name.</td>
</tr>
<tr>
    <td><CopyableCode code="applianceInfrastructureVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="applianceSoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="availableVersions" /></td>
    <td><code>object</code></td>
    <td>Output only. The available versions for updating this appliance. (id: AvailableUpdates)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>Output only. The communication channel between the datacenter connector and Google Cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the connector was created (as an API call, not when it was actually installed).</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the Datacenter Connector in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="registrationId" /></td>
    <td><code>string</code></td>
    <td>Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account to use in the connector when communicating with the cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the DatacenterConnector, as determined by the health checks.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the state was last set.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the connector was updated with an API call.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the current / last upgradeAppliance operation. (id: UpgradeStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-datacenterConnectorsId"><code>datacenterConnectorsId</code></a></td>
    <td></td>
    <td>Gets details of a single DatacenterConnector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DatacenterConnectors in a given Source.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-datacenterConnectorId"><code>datacenterConnectorId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new DatacenterConnector in a given Source.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-datacenterConnectorsId"><code>datacenterConnectorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single DatacenterConnector.</td>
</tr>
<tr>
    <td><a href="#upgrade_appliance"><CopyableCode code="upgrade_appliance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-datacenterConnectorsId"><code>datacenterConnectorsId</code></a></td>
    <td></td>
    <td>Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.</td>
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
<tr id="parameter-datacenterConnectorsId">
    <td><CopyableCode code="datacenterConnectorsId" /></td>
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
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datacenterConnectorId">
    <td><CopyableCode code="datacenterConnectorId" /></td>
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

Gets details of a single DatacenterConnector.

```sql
SELECT
name,
applianceInfrastructureVersion,
applianceSoftwareVersion,
availableVersions,
bucket,
createTime,
error,
registrationId,
serviceAccount,
state,
stateTime,
updateTime,
upgradeStatus,
version
FROM google.vmmigration.datacenter_connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND datacenterConnectorsId = '{{ datacenterConnectorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists DatacenterConnectors in a given Source.

```sql
SELECT
name,
applianceInfrastructureVersion,
applianceSoftwareVersion,
availableVersions,
bucket,
createTime,
error,
registrationId,
serviceAccount,
state,
stateTime,
updateTime,
upgradeStatus,
version
FROM google.vmmigration.datacenter_connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
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

Creates a new DatacenterConnector in a given Source.

```sql
INSERT INTO google.vmmigration.datacenter_connectors (
data__registrationId,
data__serviceAccount,
data__version,
projectsId,
locationsId,
sourcesId,
datacenterConnectorId,
requestId
)
SELECT 
'{{ registrationId }}',
'{{ serviceAccount }}',
'{{ version }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourcesId }}',
'{{ datacenterConnectorId }}',
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
- name: datacenter_connectors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the datacenter_connectors resource.
    - name: locationsId
      value: string
      description: Required parameter for the datacenter_connectors resource.
    - name: sourcesId
      value: string
      description: Required parameter for the datacenter_connectors resource.
    - name: registrationId
      value: string
      description: >
        Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.
        
    - name: serviceAccount
      value: string
      description: >
        The service account to use in the connector when communicating with the cloud.
        
    - name: version
      value: string
      description: >
        The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.
        
    - name: datacenterConnectorId
      value: string
    - name: requestId
      value: string
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

Deletes a single DatacenterConnector.

```sql
DELETE FROM google.vmmigration.datacenter_connectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND datacenterConnectorsId = '{{ datacenterConnectorsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade_appliance"
    values={[
        { label: 'upgrade_appliance', value: 'upgrade_appliance' }
    ]}
>
<TabItem value="upgrade_appliance">

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

```sql
EXEC google.vmmigration.datacenter_connectors.upgrade_appliance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@datacenterConnectorsId='{{ datacenterConnectorsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
