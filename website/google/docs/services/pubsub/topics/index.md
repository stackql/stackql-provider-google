--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
  - pubsub
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>topics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsub.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_topics_get"
    values={[
        { label: 'projects_topics_get', value: 'projects_topics_get' },
        { label: 'projects_topics_list', value: 'projects_topics_list' }
    ]}
>
<TabItem value="projects_topics_get">

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
    <td>Required. The name of the topic. It must have the format `"projects/&#123;project&#125;/topics/&#123;topic&#125;"`. `&#123;topic&#125;` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionDataSourceSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for ingestion from a data source into this topic. (id: IngestionDataSourceSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels).</td>
</tr>
<tr>
    <td><CopyableCode code="messageRetentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="messageStoragePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect. (id: MessageStoragePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTransforms" /></td>
    <td><code>array</code></td>
    <td>Optional. Transforms to be applied to messages published to the topic. Transforms are applied in the order specified.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for validating messages published against a schema. (id: SchemaSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. An output-only field indicating the state of the topic.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_topics_list">

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
    <td>Required. The name of the topic. It must have the format `"projects/&#123;project&#125;/topics/&#123;topic&#125;"`. `&#123;topic&#125;` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionDataSourceSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for ingestion from a data source into this topic. (id: IngestionDataSourceSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels).</td>
</tr>
<tr>
    <td><CopyableCode code="messageRetentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="messageStoragePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect. (id: MessageStoragePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="messageTransforms" /></td>
    <td><code>array</code></td>
    <td>Optional. Transforms to be applied to messages published to the topic. Transforms are applied in the order specified.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for validating messages published against a schema. (id: SchemaSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. An output-only field indicating the state of the topic.</td>
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
    <td><a href="#projects_topics_get"><CopyableCode code="projects_topics_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Gets the configuration of a topic.</td>
</tr>
<tr>
    <td><a href="#projects_topics_list"><CopyableCode code="projects_topics_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists matching topics.</td>
</tr>
<tr>
    <td><a href="#projects_topics_patch"><CopyableCode code="projects_topics_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Updates an existing topic by updating the fields specified in the update mask. Note that certain properties of a topic are not modifiable.</td>
</tr>
<tr>
    <td><a href="#projects_topics_delete"><CopyableCode code="projects_topics_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.</td>
</tr>
<tr>
    <td><a href="#projects_topics_create"><CopyableCode code="projects_topics_create" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names).</td>
</tr>
<tr>
    <td><a href="#projects_topics_publish"><CopyableCode code="projects_topics_publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-topicsId">
    <td><CopyableCode code="topicsId" /></td>
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
    defaultValue="projects_topics_get"
    values={[
        { label: 'projects_topics_get', value: 'projects_topics_get' },
        { label: 'projects_topics_list', value: 'projects_topics_list' }
    ]}
>
<TabItem value="projects_topics_get">

Gets the configuration of a topic.

```sql
SELECT
name,
ingestionDataSourceSettings,
kmsKeyName,
labels,
messageRetentionDuration,
messageStoragePolicy,
messageTransforms,
satisfiesPzs,
schemaSettings,
state
FROM google.pubsub.topics
WHERE projectsId = '{{ projectsId }}' -- required
AND topicsId = '{{ topicsId }}' -- required;
```
</TabItem>
<TabItem value="projects_topics_list">

Lists matching topics.

```sql
SELECT
name,
ingestionDataSourceSettings,
kmsKeyName,
labels,
messageRetentionDuration,
messageStoragePolicy,
messageTransforms,
satisfiesPzs,
schemaSettings,
state
FROM google.pubsub.topics
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_topics_patch"
    values={[
        { label: 'projects_topics_patch', value: 'projects_topics_patch' }
    ]}
>
<TabItem value="projects_topics_patch">

Updates an existing topic by updating the fields specified in the update mask. Note that certain properties of a topic are not modifiable.

```sql
UPDATE google.pubsub.topics
SET 
data__topic = '{{ topic }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND topicsId = '{{ topicsId }}' --required
RETURNING
name,
ingestionDataSourceSettings,
kmsKeyName,
labels,
messageRetentionDuration,
messageStoragePolicy,
messageTransforms,
satisfiesPzs,
schemaSettings,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_topics_delete"
    values={[
        { label: 'projects_topics_delete', value: 'projects_topics_delete' }
    ]}
>
<TabItem value="projects_topics_delete">

Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.

```sql
DELETE FROM google.pubsub.topics
WHERE projectsId = '{{ projectsId }}' --required
AND topicsId = '{{ topicsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_topics_create"
    values={[
        { label: 'projects_topics_create', value: 'projects_topics_create' },
        { label: 'projects_topics_publish', value: 'projects_topics_publish' }
    ]}
>
<TabItem value="projects_topics_create">

Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names).

```sql
EXEC google.pubsub.topics.projects_topics_create 
@projectsId='{{ projectsId }}' --required, 
@topicsId='{{ topicsId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"labels": "{{ labels }}", 
"messageStoragePolicy": "{{ messageStoragePolicy }}", 
"kmsKeyName": "{{ kmsKeyName }}", 
"schemaSettings": "{{ schemaSettings }}", 
"satisfiesPzs": {{ satisfiesPzs }}, 
"messageRetentionDuration": "{{ messageRetentionDuration }}", 
"ingestionDataSourceSettings": "{{ ingestionDataSourceSettings }}", 
"messageTransforms": "{{ messageTransforms }}"
}';
```
</TabItem>
<TabItem value="projects_topics_publish">

Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.

```sql
EXEC google.pubsub.topics.projects_topics_publish 
@projectsId='{{ projectsId }}' --required, 
@topicsId='{{ topicsId }}' --required 
@@json=
'{
"messages": "{{ messages }}"
}';
```
</TabItem>
</Tabs>
