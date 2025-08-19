--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - appengine
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.instances" /></td></tr>
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

An Instance resource is the computing unit that App Engine uses to automatically scale an application.

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
    <td>Output only. Relative name of the instance within the version. Example: instance-1.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineRelease" /></td>
    <td><code>string</code></td>
    <td>Output only. App Engine release this instance is running on.</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>Output only. Availability of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="averageLatency" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Average latency (ms) over the last minute.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of errors since this instance was started.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryUsage" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total memory in use (bytes).</td>
</tr>
<tr>
    <td><CopyableCode code="qps" /></td>
    <td><code>number (float)</code></td>
    <td>Output only. Average queries per second (QPS) over the last minute.</td>
</tr>
<tr>
    <td><CopyableCode code="requests" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of requests since this instance was started.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time that this instance was started.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="vmDebugEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmId" /></td>
    <td><code>string</code></td>
    <td>Output only. Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmIp" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this instance. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmLiveness" /></td>
    <td><code>string</code></td>
    <td>Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vmZoneName" /></td>
    <td><code>string</code></td>
    <td>Output only. Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for Instances.ListInstances.

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
    <td>The instances belonging to the requested version.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Continuation token for fetching the next page of results.</td>
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
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets instance information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.</td>
</tr>
<tr>
    <td><a href="#debug"><CopyableCode code="debug" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets instance information.

```sql
SELECT
id,
name,
appEngineRelease,
availability,
averageLatency,
errors,
memoryUsage,
qps,
requests,
startTime,
vmDebugEnabled,
vmId,
vmIp,
vmLiveness,
vmName,
vmStatus,
vmZoneName
FROM google.appengine.instances
WHERE appsId = '{{ appsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

```sql
SELECT
instances,
nextPageToken
FROM google.appengine.instances
WHERE appsId = '{{ appsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

```sql
DELETE FROM google.appengine.instances
WHERE appsId = '{{ appsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="debug"
    values={[
        { label: 'debug', value: 'debug' }
    ]}
>
<TabItem value="debug">

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

```sql
EXEC google.appengine.instances.debug 
@appsId='{{ appsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"sshKey": "{{ sshKey }}"
}';
```
</TabItem>
</Tabs>
