--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.sessions" /></td></tr>
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
    <td><a href="#projects_locations_agents_sessions_detect_intent"><CopyableCode code="projects_locations_agents_sessions_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_server_streaming_detect_intent"><CopyableCode code="projects_locations_agents_sessions_server_streaming_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_match_intent"><CopyableCode code="projects_locations_agents_sessions_match_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Returns preliminary intent match results, doesn't change the session status.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_fulfill_intent"><CopyableCode code="projects_locations_agents_sessions_fulfill_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_submit_answer_feedback"><CopyableCode code="projects_locations_agents_sessions_submit_answer_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Updates the feedback received from the user for a single turn of the bot response.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_detect_intent"><CopyableCode code="projects_locations_agents_environments_sessions_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_server_streaming_detect_intent"><CopyableCode code="projects_locations_agents_environments_sessions_server_streaming_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_match_intent"><CopyableCode code="projects_locations_agents_environments_sessions_match_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Returns preliminary intent match results, doesn't change the session status.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_fulfill_intent"><CopyableCode code="projects_locations_agents_environments_sessions_fulfill_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_sessions_detect_intent"
    values={[
        { label: 'projects_locations_agents_sessions_detect_intent', value: 'projects_locations_agents_sessions_detect_intent' },
        { label: 'projects_locations_agents_sessions_server_streaming_detect_intent', value: 'projects_locations_agents_sessions_server_streaming_detect_intent' },
        { label: 'projects_locations_agents_sessions_match_intent', value: 'projects_locations_agents_sessions_match_intent' },
        { label: 'projects_locations_agents_sessions_fulfill_intent', value: 'projects_locations_agents_sessions_fulfill_intent' },
        { label: 'projects_locations_agents_sessions_submit_answer_feedback', value: 'projects_locations_agents_sessions_submit_answer_feedback' },
        { label: 'projects_locations_agents_environments_sessions_detect_intent', value: 'projects_locations_agents_environments_sessions_detect_intent' },
        { label: 'projects_locations_agents_environments_sessions_server_streaming_detect_intent', value: 'projects_locations_agents_environments_sessions_server_streaming_detect_intent' },
        { label: 'projects_locations_agents_environments_sessions_match_intent', value: 'projects_locations_agents_environments_sessions_match_intent' },
        { label: 'projects_locations_agents_environments_sessions_fulfill_intent', value: 'projects_locations_agents_environments_sessions_fulfill_intent' }
    ]}
>
<TabItem value="projects_locations_agents_sessions_detect_intent">

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_server_streaming_detect_intent">

Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_server_streaming_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_match_intent">

Returns preliminary intent match results, doesn't change the session status.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_match_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"persistParameterChanges": {{ persistParameterChanges }}
}';
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_fulfill_intent">

Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_fulfill_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"matchIntentRequest": "{{ matchIntentRequest }}", 
"match": "{{ match }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_submit_answer_feedback">

Updates the feedback received from the user for a single turn of the bot response.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_submit_answer_feedback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"responseId": "{{ responseId }}", 
"answerFeedback": "{{ answerFeedback }}", 
"updateMask": "{{ updateMask }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_detect_intent">

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_server_streaming_detect_intent">

Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_server_streaming_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_match_intent">

Returns preliminary intent match results, doesn't change the session status.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_match_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"persistParameterChanges": {{ persistParameterChanges }}
}';
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_fulfill_intent">

Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_fulfill_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"matchIntentRequest": "{{ matchIntentRequest }}", 
"match": "{{ match }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}';
```
</TabItem>
</Tabs>
