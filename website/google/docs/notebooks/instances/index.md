--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - notebooks
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.notebooks.instances" /></td></tr>
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

The definition of a notebook instance.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of this notebook instance. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/instances/&#123;instance_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Instance creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of entity that sent original CreateInstance request.</td>
</tr>
<tr>
    <td><CopyableCode code="disableProxyAccess" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the notebook instance will not register with the proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="enableDeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, deletion protection will be enabled for this Workbench Instance. If false, deletion protection will be disabled for this Workbench Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="enableManagedEuc" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag to enable managed end user credentials for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="enableThirdPartyIdentity" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies that a notebook can be accessed with third party identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="gceSetup" /></td>
    <td><code>object</code></td>
    <td>Optional. Compute Engine setup for the notebook. Uses notebook-defined fields. (id: GceSetup)</td>
</tr>
<tr>
    <td><CopyableCode code="healthInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about instance health. Example: healthInfo": &#123; "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="healthState" /></td>
    <td><code>string</code></td>
    <td>Output only. Instance health_state.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceOwners" /></td>
    <td><code>array</code></td>
    <td>Optional. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.</td>
</tr>
<tr>
    <td><CopyableCode code="proxyUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The proxy endpoint that is used to access the Jupyter notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use for Zone Isolation.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use for Zone Separation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="thirdPartyProxyUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The workforce pools proxy endpoint that is used to access the Jupyter notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Instance update time.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. The upgrade history of this instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for listing notebook instances.

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
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>A list of returned instances.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Page token that can be used to continue listing from the last result in the next list call.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached. For example, ['us-west1-a', 'us-central1-b']. A ListInstancesResponse will only contain either instances or unreachables,</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>UpdateInstance updates an Instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Instance.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Starts a notebook instance.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Stops a notebook instance.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Resets a notebook instance.</td>
</tr>
<tr>
    <td><a href="#check_upgradability"><CopyableCode code="check_upgradability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Checks whether a notebook instance is upgradable.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Upgrades a notebook instance to the latest version.</td>
</tr>
<tr>
    <td><a href="#resize_disk"><CopyableCode code="resize_disk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Resize a notebook instance disk to a higher capacity.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Rollbacks a notebook instance to the previous version.</td>
</tr>
<tr>
    <td><a href="#diagnose"><CopyableCode code="diagnose" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a Diagnostic File and runs Diagnostic Tool given an Instance.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>RestoreInstance restores an Instance from a BackupSource.</td>
</tr>
<tr>
    <td><a href="#report_info_system"><CopyableCode code="report_info_system" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.</td>
</tr>
<tr>
    <td><a href="#upgrade_system"><CopyableCode code="upgrade_system" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Allows notebook instances to upgrade themselves. Do not use this method directly.</td>
</tr>
<tr>
    <td><a href="#check_authorization"><CopyableCode code="check_authorization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Initiated by Cloud Console for Oauth consent flow for Workbench Instances. Do not use this method directly. Design doc: go/wbi-euc:auth-dd</td>
</tr>
<tr>
    <td><a href="#generate_access_token"><CopyableCode code="generate_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Called by VM to return an EUC for the instance owner. Do not use this method directly. Design doc: go/wbi-euc:dd</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets details of a single Instance.

```sql
SELECT
id,
name,
createTime,
creator,
disableProxyAccess,
enableDeletionProtection,
enableManagedEuc,
enableThirdPartyIdentity,
gceSetup,
healthInfo,
healthState,
instanceOwners,
labels,
proxyUri,
satisfiesPzi,
satisfiesPzs,
state,
thirdPartyProxyUrl,
updateTime,
upgradeHistory
FROM google.notebooks.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists instances in a given project and location.

```sql
SELECT
instances,
nextPageToken,
unreachable
FROM google.notebooks.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
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

Creates a new Instance in a given project and location.

```sql
INSERT INTO google.notebooks.instances (
data__gceSetup,
data__instanceOwners,
data__disableProxyAccess,
data__labels,
data__enableThirdPartyIdentity,
data__enableManagedEuc,
data__enableDeletionProtection,
projectsId,
locationsId,
instanceId,
requestId
)
SELECT 
'{{ gceSetup }}',
'{{ instanceOwners }}',
{{ disableProxyAccess }},
'{{ labels }}',
{{ enableThirdPartyIdentity }},
{{ enableManagedEuc }},
{{ enableDeletionProtection }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}',
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
- name: instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the instances resource.
    - name: gceSetup
      value: object
      description: >
        Optional. Compute Engine setup for the notebook. Uses notebook-defined fields.
        
    - name: instanceOwners
      value: array
      description: >
        Optional. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance.
        
    - name: disableProxyAccess
      value: boolean
      description: >
        Optional. If true, the notebook instance will not register with the proxy.
        
    - name: labels
      value: object
      description: >
        Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.
        
    - name: enableThirdPartyIdentity
      value: boolean
      description: >
        Optional. Flag that specifies that a notebook can be accessed with third party identity provider.
        
    - name: enableManagedEuc
      value: boolean
      description: >
        Optional. Flag to enable managed end user credentials for the instance.
        
    - name: enableDeletionProtection
      value: boolean
      description: >
        Optional. If true, deletion protection will be enabled for this Workbench Instance. If false, deletion protection will be disabled for this Workbench Instance.
        
    - name: instanceId
      value: string
    - name: requestId
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

UpdateInstance updates an Instance.

```sql
UPDATE google.notebooks.instances
SET 
data__gceSetup = '{{ gceSetup }}',
data__instanceOwners = '{{ instanceOwners }}',
data__disableProxyAccess = {{ disableProxyAccess }},
data__labels = '{{ labels }}',
data__enableThirdPartyIdentity = {{ enableThirdPartyIdentity }},
data__enableManagedEuc = {{ enableManagedEuc }},
data__enableDeletionProtection = {{ enableDeletionProtection }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single Instance.

```sql
DELETE FROM google.notebooks.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'reset', value: 'reset' },
        { label: 'check_upgradability', value: 'check_upgradability' },
        { label: 'upgrade', value: 'upgrade' },
        { label: 'resize_disk', value: 'resize_disk' },
        { label: 'rollback', value: 'rollback' },
        { label: 'diagnose', value: 'diagnose' },
        { label: 'restore', value: 'restore' },
        { label: 'report_info_system', value: 'report_info_system' },
        { label: 'upgrade_system', value: 'upgrade_system' },
        { label: 'check_authorization', value: 'check_authorization' },
        { label: 'generate_access_token', value: 'generate_access_token' }
    ]}
>
<TabItem value="start">

Starts a notebook instance.

```sql
EXEC google.notebooks.instances.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required;
```
</TabItem>
<TabItem value="stop">

Stops a notebook instance.

```sql
EXEC google.notebooks.instances.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required;
```
</TabItem>
<TabItem value="reset">

Resets a notebook instance.

```sql
EXEC google.notebooks.instances.reset 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required;
```
</TabItem>
<TabItem value="check_upgradability">

Checks whether a notebook instance is upgradable.

```sql
EXEC google.notebooks.instances.check_upgradability 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required;
```
</TabItem>
<TabItem value="upgrade">

Upgrades a notebook instance to the latest version.

```sql
EXEC google.notebooks.instances.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required;
```
</TabItem>
<TabItem value="resize_disk">

Resize a notebook instance disk to a higher capacity.

```sql
EXEC google.notebooks.instances.resize_disk 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"bootDisk": "{{ bootDisk }}", 
"dataDisk": "{{ dataDisk }}"
}';
```
</TabItem>
<TabItem value="rollback">

Rollbacks a notebook instance to the previous version.

```sql
EXEC google.notebooks.instances.rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"targetSnapshot": "{{ targetSnapshot }}"
}';
```
</TabItem>
<TabItem value="diagnose">

Creates a Diagnostic File and runs Diagnostic Tool given an Instance.

```sql
EXEC google.notebooks.instances.diagnose 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"diagnosticConfig": "{{ diagnosticConfig }}", 
"timeoutMinutes": {{ timeoutMinutes }}
}';
```
</TabItem>
<TabItem value="restore">

RestoreInstance restores an Instance from a BackupSource.

```sql
EXEC google.notebooks.instances.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"snapshot": "{{ snapshot }}"
}';
```
</TabItem>
<TabItem value="report_info_system">

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

```sql
EXEC google.notebooks.instances.report_info_system 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"vmId": "{{ vmId }}", 
"event": "{{ event }}"
}';
```
</TabItem>
<TabItem value="upgrade_system">

Allows notebook instances to upgrade themselves. Do not use this method directly.

```sql
EXEC google.notebooks.instances.upgrade_system 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"vmId": "{{ vmId }}"
}';
```
</TabItem>
<TabItem value="check_authorization">

Initiated by Cloud Console for Oauth consent flow for Workbench Instances. Do not use this method directly. Design doc: go/wbi-euc:auth-dd

```sql
EXEC google.notebooks.instances.check_authorization 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"authorizationDetails": "{{ authorizationDetails }}"
}';
```
</TabItem>
<TabItem value="generate_access_token">

Called by VM to return an EUC for the instance owner. Do not use this method directly. Design doc: go/wbi-euc:dd

```sql
EXEC google.notebooks.instances.generate_access_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"vmToken": "{{ vmToken }}"
}';
```
</TabItem>
</Tabs>
