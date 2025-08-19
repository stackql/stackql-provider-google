--- 
title: conversations
hide_title: false
hide_table_of_contents: false
keywords:
  - conversations
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>conversations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>conversations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.conversations" /></td></tr>
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

The conversation resource.

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
    <td>Immutable. The resource name of the conversation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>An opaque, user-specified string representing the human agent who handled the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="callMetadata" /></td>
    <td><code>object</code></td>
    <td>Call-specific metadata. (id: GoogleCloudContactcenterinsightsV1ConversationCallMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the conversation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>The source of the audio and transcription for the conversation. (id: GoogleCloudContactcenterinsightsV1ConversationDataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dialogflowIntents" /></td>
    <td><code>object</code></td>
    <td>Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/&#123;project&#125;/agent/&#123;agent&#125;/intents/&#123;intent&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The duration of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>A map for the user to specify any custom fields. A maximum of 100 labels per conversation is allowed, with a maximum of 256 characters per entry.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>A user-specified language code for the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="latestAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. The conversation's latest analysis, if one exists. (id: GoogleCloudContactcenterinsightsV1Analysis)</td>
</tr>
<tr>
    <td><CopyableCode code="latestSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. Latest summary of the conversation. (id: GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData)</td>
</tr>
<tr>
    <td><CopyableCode code="medium" /></td>
    <td><code>string</code></td>
    <td>Immutable. The conversation medium, if unspecified will default to PHONE_CALL.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataJson" /></td>
    <td><code>string</code></td>
    <td>Input only. JSON metadata encoded as a string. This field is primarily used by Insights integrations with various telephony systems and must be in one of Insight's supported formats.</td>
</tr>
<tr>
    <td><CopyableCode code="obfuscatedUserId" /></td>
    <td><code>string</code></td>
    <td>Obfuscated user ID which the customer sent to us.</td>
</tr>
<tr>
    <td><CopyableCode code="qualityMetadata" /></td>
    <td><code>object</code></td>
    <td>Conversation metadata related to quality management. (id: GoogleCloudContactcenterinsightsV1ConversationQualityMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeAnnotations" /></td>
    <td><code>array</code></td>
    <td>Output only. The annotations that were generated during the customer and agent interaction.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="transcript" /></td>
    <td><code>object</code></td>
    <td>Output only. The conversation transcript. (id: GoogleCloudContactcenterinsightsV1ConversationTranscript)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.</td>
</tr>
<tr>
    <td><CopyableCode code="turnCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of turns in the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the conversation was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response of listing conversations.

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
    <td><CopyableCode code="conversations" /></td>
    <td><code>array</code></td>
    <td>The conversations that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a conversation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists conversations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-conversationId"><code>conversationId</code></a></td>
    <td>Creates a conversation. Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a conversation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a conversation.</td>
</tr>
<tr>
    <td><a href="#bulk_delete"><CopyableCode code="bulk_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Deletes multiple conversations in a single request.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.</td>
</tr>
<tr>
    <td><a href="#bulk_analyze"><CopyableCode code="bulk_analyze" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td></td>
    <td>Analyzes multiple conversations in a single request.</td>
</tr>
<tr>
    <td><a href="#ingest"><CopyableCode code="ingest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Imports conversations and processes them according to the user's configuration.</td>
</tr>
<tr>
    <td><a href="#calculate_stats"><CopyableCode code="calculate_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td>Gets conversation statistics.</td>
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
<tr id="parameter-authorizedViewSetsId">
    <td><CopyableCode code="authorizedViewSetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizedViewsId">
    <td><CopyableCode code="authorizedViewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-conversationsId">
    <td><CopyableCode code="conversationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-conversationId">
    <td><CopyableCode code="conversationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets a conversation.

```sql
SELECT
name,
agentId,
callMetadata,
createTime,
dataSource,
dialogflowIntents,
duration,
expireTime,
labels,
languageCode,
latestAnalysis,
latestSummary,
medium,
metadataJson,
obfuscatedUserId,
qualityMetadata,
runtimeAnnotations,
startTime,
transcript,
ttl,
turnCount,
updateTime
FROM google.contactcenterinsights.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists conversations.

```sql
SELECT
conversations,
nextPageToken
FROM google.contactcenterinsights.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
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

Creates a conversation. Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.

```sql
INSERT INTO google.contactcenterinsights.conversations (
data__callMetadata,
data__expireTime,
data__ttl,
data__name,
data__dataSource,
data__startTime,
data__languageCode,
data__agentId,
data__labels,
data__qualityMetadata,
data__metadataJson,
data__medium,
data__obfuscatedUserId,
projectsId,
locationsId,
conversationId
)
SELECT 
'{{ callMetadata }}',
'{{ expireTime }}',
'{{ ttl }}',
'{{ name }}',
'{{ dataSource }}',
'{{ startTime }}',
'{{ languageCode }}',
'{{ agentId }}',
'{{ labels }}',
'{{ qualityMetadata }}',
'{{ metadataJson }}',
'{{ medium }}',
'{{ obfuscatedUserId }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ conversationId }}'
RETURNING
name,
agentId,
callMetadata,
createTime,
dataSource,
dialogflowIntents,
duration,
expireTime,
labels,
languageCode,
latestAnalysis,
latestSummary,
medium,
metadataJson,
obfuscatedUserId,
qualityMetadata,
runtimeAnnotations,
startTime,
transcript,
ttl,
turnCount,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: conversations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the conversations resource.
    - name: locationsId
      value: string
      description: Required parameter for the conversations resource.
    - name: callMetadata
      value: object
      description: >
        Call-specific metadata.
        
    - name: expireTime
      value: string
      description: >
        The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.
        
    - name: ttl
      value: string
      description: >
        Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.
        
    - name: name
      value: string
      description: >
        Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}
        
    - name: dataSource
      value: object
      description: >
        The source of the audio and transcription for the conversation.
        
    - name: startTime
      value: string
      description: >
        The time at which the conversation started.
        
    - name: languageCode
      value: string
      description: >
        A user-specified language code for the conversation.
        
    - name: agentId
      value: string
      description: >
        An opaque, user-specified string representing the human agent who handled the conversation.
        
    - name: labels
      value: object
      description: >
        A map for the user to specify any custom fields. A maximum of 100 labels per conversation is allowed, with a maximum of 256 characters per entry.
        
    - name: qualityMetadata
      value: object
      description: >
        Conversation metadata related to quality management.
        
    - name: metadataJson
      value: string
      description: >
        Input only. JSON metadata encoded as a string. This field is primarily used by Insights integrations with various telephony systems and must be in one of Insight's supported formats.
        
    - name: medium
      value: string
      description: >
        Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
        
      valid_values: ['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT']
    - name: obfuscatedUserId
      value: string
      description: >
        Obfuscated user ID which the customer sent to us.
        
    - name: conversationId
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

Updates a conversation.

```sql
UPDATE google.contactcenterinsights.conversations
SET 
data__callMetadata = '{{ callMetadata }}',
data__expireTime = '{{ expireTime }}',
data__ttl = '{{ ttl }}',
data__name = '{{ name }}',
data__dataSource = '{{ dataSource }}',
data__startTime = '{{ startTime }}',
data__languageCode = '{{ languageCode }}',
data__agentId = '{{ agentId }}',
data__labels = '{{ labels }}',
data__qualityMetadata = '{{ qualityMetadata }}',
data__metadataJson = '{{ metadataJson }}',
data__medium = '{{ medium }}',
data__obfuscatedUserId = '{{ obfuscatedUserId }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
agentId,
callMetadata,
createTime,
dataSource,
dialogflowIntents,
duration,
expireTime,
labels,
languageCode,
latestAnalysis,
latestSummary,
medium,
metadataJson,
obfuscatedUserId,
qualityMetadata,
runtimeAnnotations,
startTime,
transcript,
ttl,
turnCount,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'bulk_delete', value: 'bulk_delete' }
    ]}
>
<TabItem value="delete">

Deletes a conversation.

```sql
DELETE FROM google.contactcenterinsights.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
<TabItem value="bulk_delete">

Deletes multiple conversations in a single request.

```sql
DELETE FROM google.contactcenterinsights.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' },
        { label: 'bulk_analyze', value: 'bulk_analyze' },
        { label: 'ingest', value: 'ingest' },
        { label: 'calculate_stats', value: 'calculate_stats' }
    ]}
>
<TabItem value="upload">

Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.

```sql
EXEC google.contactcenterinsights.conversations.upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"parent": "{{ parent }}", 
"conversation": "{{ conversation }}", 
"conversationId": "{{ conversationId }}", 
"redactionConfig": "{{ redactionConfig }}", 
"speechConfig": "{{ speechConfig }}"
}';
```
</TabItem>
<TabItem value="bulk_analyze">

Analyzes multiple conversations in a single request.

```sql
EXEC google.contactcenterinsights.conversations.bulk_analyze 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required 
@@json=
'{
"parent": "{{ parent }}", 
"filter": "{{ filter }}", 
"analysisPercentage": {{ analysisPercentage }}, 
"annotatorSelector": "{{ annotatorSelector }}"
}';
```
</TabItem>
<TabItem value="ingest">

Imports conversations and processes them according to the user's configuration.

```sql
EXEC google.contactcenterinsights.conversations.ingest 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"transcriptObjectConfig": "{{ transcriptObjectConfig }}", 
"parent": "{{ parent }}", 
"conversationConfig": "{{ conversationConfig }}", 
"redactionConfig": "{{ redactionConfig }}", 
"speechConfig": "{{ speechConfig }}", 
"sampleSize": {{ sampleSize }}
}';
```
</TabItem>
<TabItem value="calculate_stats">

Gets conversation statistics.

```sql
EXEC google.contactcenterinsights.conversations.calculate_stats 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required, 
@filter='{{ filter }}';
```
</TabItem>
</Tabs>
