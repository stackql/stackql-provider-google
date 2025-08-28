--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>webhooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.webhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_webhooks_get"
    values={[
        { label: 'projects_locations_agents_webhooks_get', value: 'projects_locations_agents_webhooks_get' },
        { label: 'projects_locations_agents_webhooks_list', value: 'projects_locations_agents_webhooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_webhooks_get">

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
    <td>The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the webhook is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the webhook, unique within the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="genericWebService" /></td>
    <td><code>object</code></td>
    <td>Configuration for a generic web service. (id: GoogleCloudDialogflowCxV3WebhookGenericWebService)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectory" /></td>
    <td><code>object</code></td>
    <td>Configuration for a [Service Directory](https://cloud.google.com/service-directory) service. (id: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_webhooks_list">

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
    <td>The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the webhook is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the webhook, unique within the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="genericWebService" /></td>
    <td><code>object</code></td>
    <td>Configuration for a generic web service. (id: GoogleCloudDialogflowCxV3WebhookGenericWebService)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectory" /></td>
    <td><code>object</code></td>
    <td>Configuration for a [Service Directory](https://cloud.google.com/service-directory) service. (id: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.</td>
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
    <td><a href="#projects_locations_agents_webhooks_get"><CopyableCode code="projects_locations_agents_webhooks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-webhooksId"><code>webhooksId</code></a></td>
    <td></td>
    <td>Retrieves the specified webhook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_webhooks_list"><CopyableCode code="projects_locations_agents_webhooks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all webhooks in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_webhooks_create"><CopyableCode code="projects_locations_agents_webhooks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Creates a webhook in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_webhooks_patch"><CopyableCode code="projects_locations_agents_webhooks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-webhooksId"><code>webhooksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified webhook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_webhooks_delete"><CopyableCode code="projects_locations_agents_webhooks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-webhooksId"><code>webhooksId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified webhook.</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
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
<tr id="parameter-webhooksId">
    <td><CopyableCode code="webhooksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_agents_webhooks_get"
    values={[
        { label: 'projects_locations_agents_webhooks_get', value: 'projects_locations_agents_webhooks_get' },
        { label: 'projects_locations_agents_webhooks_list', value: 'projects_locations_agents_webhooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_webhooks_get">

Retrieves the specified webhook.

```sql
SELECT
name,
disabled,
displayName,
genericWebService,
serviceDirectory,
timeout
FROM google.dialogflow.webhooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND webhooksId = '{{ webhooksId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_webhooks_list">

Returns the list of all webhooks in the specified agent.

```sql
SELECT
name,
disabled,
displayName,
genericWebService,
serviceDirectory,
timeout
FROM google.dialogflow.webhooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_webhooks_create"
    values={[
        { label: 'projects_locations_agents_webhooks_create', value: 'projects_locations_agents_webhooks_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_webhooks_create">

Creates a webhook in the specified agent.

```sql
INSERT INTO google.dialogflow.webhooks (
data__name,
data__displayName,
data__genericWebService,
data__serviceDirectory,
data__timeout,
data__disabled,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ genericWebService }}',
'{{ serviceDirectory }}',
'{{ timeout }}',
{{ disabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
disabled,
displayName,
genericWebService,
serviceDirectory,
timeout
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: webhooks
  props:
    - name: projectsId
      value: string
      description: Required parameter for the webhooks resource.
    - name: locationsId
      value: string
      description: Required parameter for the webhooks resource.
    - name: agentsId
      value: string
      description: Required parameter for the webhooks resource.
    - name: name
      value: string
      description: >
        The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the webhook, unique within the agent.
        
    - name: genericWebService
      value: object
      description: >
        Configuration for a generic web service.
        
    - name: serviceDirectory
      value: object
      description: >
        Configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
        
    - name: timeout
      value: string
      description: >
        Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.
        
    - name: disabled
      value: boolean
      description: >
        Indicates whether the webhook is disabled.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_webhooks_patch"
    values={[
        { label: 'projects_locations_agents_webhooks_patch', value: 'projects_locations_agents_webhooks_patch' }
    ]}
>
<TabItem value="projects_locations_agents_webhooks_patch">

Updates the specified webhook.

```sql
UPDATE google.dialogflow.webhooks
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__genericWebService = '{{ genericWebService }}',
data__serviceDirectory = '{{ serviceDirectory }}',
data__timeout = '{{ timeout }}',
data__disabled = {{ disabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND webhooksId = '{{ webhooksId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
disabled,
displayName,
genericWebService,
serviceDirectory,
timeout;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_webhooks_delete"
    values={[
        { label: 'projects_locations_agents_webhooks_delete', value: 'projects_locations_agents_webhooks_delete' }
    ]}
>
<TabItem value="projects_locations_agents_webhooks_delete">

Deletes the specified webhook.

```sql
DELETE FROM google.dialogflow.webhooks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND webhooksId = '{{ webhooksId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
