--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
  - healthcare
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

Creates, updates, deletes, gets or lists a <code>messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>messages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.messages" /></td></tr>
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
    <td>Output only. Resource name of the Message, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/hl7V2Stores/&#123;hl7_v2_store_id&#125;/messages/&#123;message_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The datetime when the message was created. Set by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>Required. Raw message bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="messageType" /></td>
    <td><code>string</code></td>
    <td>Output only. The message type for this message. MSH-9.1.</td>
</tr>
<tr>
    <td><CopyableCode code="parsedData" /></td>
    <td><code>object</code></td>
    <td>Output only. The parsed version of the raw message data. (id: ParsedData)</td>
</tr>
<tr>
    <td><CopyableCode code="patientIds" /></td>
    <td><code>array</code></td>
    <td>Output only. All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.</td>
</tr>
<tr>
    <td><CopyableCode code="schematizedData" /></td>
    <td><code>object</code></td>
    <td>Output only. The parsed version of the raw message data schematized according to this store's schemas and type definitions. (id: SchematizedData)</td>
</tr>
<tr>
    <td><CopyableCode code="sendFacility" /></td>
    <td><code>string</code></td>
    <td>Output only. The hospital that this message came from. MSH-4.</td>
</tr>
<tr>
    <td><CopyableCode code="sendTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The datetime the sending application sent this message. MSH-7.</td>
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
    <td>Output only. Resource name of the Message, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/hl7V2Stores/&#123;hl7_v2_store_id&#125;/messages/&#123;message_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The datetime when the message was created. Set by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>Required. Raw message bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="messageType" /></td>
    <td><code>string</code></td>
    <td>Output only. The message type for this message. MSH-9.1.</td>
</tr>
<tr>
    <td><CopyableCode code="parsedData" /></td>
    <td><code>object</code></td>
    <td>Output only. The parsed version of the raw message data. (id: ParsedData)</td>
</tr>
<tr>
    <td><CopyableCode code="patientIds" /></td>
    <td><code>array</code></td>
    <td>Output only. All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.</td>
</tr>
<tr>
    <td><CopyableCode code="schematizedData" /></td>
    <td><code>object</code></td>
    <td>Output only. The parsed version of the raw message data schematized according to this store's schemas and type definitions. (id: SchematizedData)</td>
</tr>
<tr>
    <td><CopyableCode code="sendFacility" /></td>
    <td><code>string</code></td>
    <td>Output only. The hospital that this message came from. MSH-4.</td>
</tr>
<tr>
    <td><CopyableCode code="sendTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The datetime the sending application sent this message. MSH-7.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a>, <a href="#parameter-messagesId"><code>messagesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets an HL7v2 message.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a></td>
    <td></td>
    <td>Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a>, <a href="#parameter-messagesId"><code>messagesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a>, <a href="#parameter-messagesId"><code>messagesId</code></a></td>
    <td></td>
    <td>Deletes an HL7v2 message.</td>
</tr>
<tr>
    <td><a href="#ingest"><CopyableCode code="ingest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-hl7V2StoresId"><code>hl7V2StoresId</code></a></td>
    <td></td>
    <td>Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-hl7V2StoresId">
    <td><CopyableCode code="hl7V2StoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-messagesId">
    <td><CopyableCode code="messagesId" /></td>
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

Gets an HL7v2 message.

```sql
SELECT
name,
createTime,
data,
labels,
messageType,
parsedData,
patientIds,
schematizedData,
sendFacility,
sendTime
FROM google.healthcare.messages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND hl7V2StoresId = '{{ hl7V2StoresId }}' -- required
AND messagesId = '{{ messagesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.

```sql
SELECT
name,
createTime,
data,
labels,
messageType,
parsedData,
patientIds,
schematizedData,
sendFacility,
sendTime
FROM google.healthcare.messages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND hl7V2StoresId = '{{ hl7V2StoresId }}' -- required
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

Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.

```sql
INSERT INTO google.healthcare.messages (
data__message,
projectsId,
locationsId,
datasetsId,
hl7V2StoresId
)
SELECT 
'{{ message }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ hl7V2StoresId }}'
RETURNING
name,
createTime,
data,
labels,
messageType,
parsedData,
patientIds,
schematizedData,
sendFacility,
sendTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: messages
  props:
    - name: projectsId
      value: string
      description: Required parameter for the messages resource.
    - name: locationsId
      value: string
      description: Required parameter for the messages resource.
    - name: datasetsId
      value: string
      description: Required parameter for the messages resource.
    - name: hl7V2StoresId
      value: string
      description: Required parameter for the messages resource.
    - name: message
      value: object
      description: >
        Required. HL7v2 message.
        
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

Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.

```sql
UPDATE google.healthcare.messages
SET 
data__data = '{{ data }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND hl7V2StoresId = '{{ hl7V2StoresId }}' --required
AND messagesId = '{{ messagesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
data,
labels,
messageType,
parsedData,
patientIds,
schematizedData,
sendFacility,
sendTime;
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

Deletes an HL7v2 message.

```sql
DELETE FROM google.healthcare.messages
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND hl7V2StoresId = '{{ hl7V2StoresId }}' --required
AND messagesId = '{{ messagesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ingest"
    values={[
        { label: 'ingest', value: 'ingest' }
    ]}
>
<TabItem value="ingest">

Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.

```sql
EXEC google.healthcare.messages.ingest 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@hl7V2StoresId='{{ hl7V2StoresId }}' --required 
@@json=
'{
"message": "{{ message }}"
}';
```
</TabItem>
</Tabs>
