--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - workflowexecutions
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workflowexecutions.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#trigger_pubsub_execution"><CopyableCode code="trigger_pubsub_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a></td>
    <td></td>
    <td>Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.</td>
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
<tr id="parameter-workflowsId">
    <td><CopyableCode code="workflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="trigger_pubsub_execution"
    values={[
        { label: 'trigger_pubsub_execution', value: 'trigger_pubsub_execution' }
    ]}
>
<TabItem value="trigger_pubsub_execution">

Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

```sql
EXEC google.workflowexecutions.workflows.trigger_pubsub_execution 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workflowsId='{{ workflowsId }}' --required 
@@json=
'{
"subscription": "{{ subscription }}", 
"message": "{{ message }}", 
"GCPCloudEventsMode": "{{ GCPCloudEventsMode }}", 
"deliveryAttempt": {{ deliveryAttempt }}
}';
```
</TabItem>
</Tabs>
