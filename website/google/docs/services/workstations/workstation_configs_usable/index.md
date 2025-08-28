--- 
title: workstation_configs_usable
hide_title: false
hide_table_of_contents: false
keywords:
  - workstation_configs_usable
  - workstations
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

Creates, updates, deletes, gets or lists a <code>workstation_configs_usable</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workstation_configs_usable</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workstations.workstation_configs_usable" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_usable"
    values={[
        { label: 'list_usable', value: 'list_usable' }
    ]}
>
<TabItem value="list_usable">

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
    <td>Identifier. Full name of this workstation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedPorts" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of PortRanges specifying single ports or ranges of ports that are externally accessible in the workstation. Allowed ports must be one of 22, 80, or within range 1024-65535. If not specified defaults to ports 22, 80, and ports 1024-65535.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Client-specified annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. Status conditions describing the workstation configuration's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>object</code></td>
    <td>Optional. Container that runs upon startup for each workstation using this workstation configuration. (id: Container)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="degraded" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this workstation configuration is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation configuration was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disableTcpConnections" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables support for plain TCP connections in the workstation. By default the service supports TCP connections through a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain TCP connections, such as SSH. When enabled, all communication must occur over HTTPS or WSS.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for this workstation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAuditAgent" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to enable Linux `auditd` logging on the workstation. When enabled, a service_account must also be specified that has `roles/logging.logWriter` and `roles/monitoring.metricWriter` on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging) and [Container output logging](https://cloud.google.com/workstations/docs/container-output-logging#overview). Operating system audit logs are available in the [Cloud Logging](https://cloud.google.com/logging/docs) console by querying: resource.type="gce_instance" log_name:"/logs/linux-auditd"</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>object</code></td>
    <td>Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key (CMEK). If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk might be lost. If the encryption key is revoked, the workstation session automatically stops within 7 hours. Immutable after the workstation configuration is created. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeralDirectories" /></td>
    <td><code>array</code></td>
    <td>Optional. Ephemeral directories which won't persist across workstation sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="grantWorkstationAdminRoleOnCreate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Grant creator of a workstation `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them. This allows workstation users to share access to either their entire workstation, or individual ports. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime host for the workstation. (id: Host)</td>
</tr>
<tr>
    <td><CopyableCode code="idleTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Number of seconds to wait before automatically stopping a workstation after it last received user traffic. A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) terminated by `s` for seconds—for example, `"7200s"` (2 hours). The default is `"1200s"` (20 minutes).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="maxUsableWorkstations" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Maximum number of workstations under this configuration a user can have `workstations.workstation.use` permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. Can be overridden by: - granting a user workstations.workstationConfigs.exemptMaxUsableWorkstationLimit permission, or - having a user with that permission create a workstation and granting another user `workstations.workstation.use` permission on that workstation. If not specified, defaults to `0`, which indicates unlimited.</td>
</tr>
<tr>
    <td><CopyableCode code="persistentDirectories" /></td>
    <td><code>array</code></td>
    <td>Optional. Directories to persist across workstation sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="readinessChecks" /></td>
    <td><code>array</code></td>
    <td>Optional. Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this workstation configuration is currently being updated to match its intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZones" /></td>
    <td><code>array</code></td>
    <td>Optional. Immutable. Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`. If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.</td>
</tr>
<tr>
    <td><CopyableCode code="runningTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The idle_timeout and running_timeout fields are independent of each other. Note that the running_timeout field shuts down VMs after the specified time, regardless of whether or not the VMs are idle. Provide duration terminated by `s` for seconds—for example, `"54000s"` (15 hours). Defaults to `"43200s"` (12 hours). A value of `"0s"` indicates that workstations using this configuration should never time out. If encryption_key is set, it must be greater than `"0s"` and less than `"86400s"` (24 hours). Warning: A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for this workstation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation configuration was most recently updated.</td>
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
    <td><a href="#list_usable"><CopyableCode code="list_usable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.</td>
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
<tr id="parameter-workstationClustersId">
    <td><CopyableCode code="workstationClustersId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_usable"
    values={[
        { label: 'list_usable', value: 'list_usable' }
    ]}
>
<TabItem value="list_usable">

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

```sql
SELECT
name,
allowedPorts,
annotations,
conditions,
container,
createTime,
degraded,
deleteTime,
disableTcpConnections,
displayName,
enableAuditAgent,
encryptionKey,
ephemeralDirectories,
etag,
grantWorkstationAdminRoleOnCreate,
host,
idleTimeout,
labels,
maxUsableWorkstations,
persistentDirectories,
readinessChecks,
reconciling,
replicaZones,
runningTimeout,
uid,
updateTime
FROM google.workstations.workstation_configs_usable
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workstationClustersId = '{{ workstationClustersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
