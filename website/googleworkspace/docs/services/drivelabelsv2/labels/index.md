--- 
title: labels
hide_title: false
hide_table_of_contents: false
keywords:
  - labels
  - drivelabelsv2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>labels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2.labels" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the label. Will be in the form of either: `labels/&#123;id&#125;` or `labels/&#123;id&#125;@&#123;revision_id&#125;` depending on the request. See `id` and `revision_id` below.</td>
</tr>
<tr>
    <td><CopyableCode code="appliedCapabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. The capabilities related to this label on applied metadata. (id: GoogleAppsDriveLabelsV2LabelAppliedCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="appliedLabelPolicy" /></td>
    <td><code>object</code></td>
    <td>Output only. Behavior of this label when it's applied to Drive items. (id: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who created this label. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Output only. The customer this label belongs to. For example: `customers/123abc789`.</td>
</tr>
<tr>
    <td><CopyableCode code="disableTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was disabled. This value has no meaning when the label isn't disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="disabler" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who disabled this label. This value has no meaning when the label isn't disabled. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="displayHints" /></td>
    <td><code>object</code></td>
    <td>Output only. UI display hints for rendering the label. (id: GoogleAppsDriveLabelsV2LabelDisplayHints)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledAppSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The `EnabledAppSettings` for this Label. (id: GoogleAppsDriveLabelsV2LabelEnabledAppSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>List of fields in descending priority order.</td>
</tr>
<tr>
    <td><CopyableCode code="labelType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of label.</td>
</tr>
<tr>
    <td><CopyableCode code="learnMoreUri" /></td>
    <td><code>string</code></td>
    <td>Custom URL to present to users to allow them to learn more about this label and how it should be used.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes. (id: GoogleAppsDriveLabelsV2Lifecycle)</td>
</tr>
<tr>
    <td><CopyableCode code="lockStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The `LockStatus` of this label. (id: GoogleAppsDriveLabelsV2LockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The basic properties of the label. (id: GoogleAppsDriveLabelsV2LabelProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="publishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was published. This value has no meaning when the label isn't published.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who published this label. This value has no meaning when the label isn't published.&gt;&gt; (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreator" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who created this label revision. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaCapabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. The capabilities the user has on this label. (id: GoogleAppsDriveLabelsV2LabelSchemaCapabilities)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the label. Will be in the form of either: `labels/&#123;id&#125;` or `labels/&#123;id&#125;@&#123;revision_id&#125;` depending on the request. See `id` and `revision_id` below.</td>
</tr>
<tr>
    <td><CopyableCode code="appliedCapabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. The capabilities related to this label on applied metadata. (id: GoogleAppsDriveLabelsV2LabelAppliedCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="appliedLabelPolicy" /></td>
    <td><code>object</code></td>
    <td>Output only. Behavior of this label when it's applied to Drive items. (id: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who created this label. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Output only. The customer this label belongs to. For example: `customers/123abc789`.</td>
</tr>
<tr>
    <td><CopyableCode code="disableTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was disabled. This value has no meaning when the label isn't disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="disabler" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who disabled this label. This value has no meaning when the label isn't disabled. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="displayHints" /></td>
    <td><code>object</code></td>
    <td>Output only. UI display hints for rendering the label. (id: GoogleAppsDriveLabelsV2LabelDisplayHints)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledAppSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The `EnabledAppSettings` for this Label. (id: GoogleAppsDriveLabelsV2LabelEnabledAppSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>List of fields in descending priority order.</td>
</tr>
<tr>
    <td><CopyableCode code="labelType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of label.</td>
</tr>
<tr>
    <td><CopyableCode code="learnMoreUri" /></td>
    <td><code>string</code></td>
    <td>Custom URL to present to users to allow them to learn more about this label and how it should be used.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes. (id: GoogleAppsDriveLabelsV2Lifecycle)</td>
</tr>
<tr>
    <td><CopyableCode code="lockStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The `LockStatus` of this label. (id: GoogleAppsDriveLabelsV2LockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The basic properties of the label. (id: GoogleAppsDriveLabelsV2LabelProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="publishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label was published. This value has no meaning when the label isn't published.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who published this label. This value has no meaning when the label isn't published.&gt;&gt; (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this label revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreator" /></td>
    <td><code>object</code></td>
    <td>Output only. The user who created this label revision. (id: GoogleAppsDriveLabelsV2UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaCapabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. The capabilities the user has on this label. (id: GoogleAppsDriveLabelsV2LabelSchemaCapabilities)</td>
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
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). Resource name may be any of: * `labels/&#123;id&#125;` - See `labels/&#123;id&#125;@latest` * `labels/&#123;id&#125;@latest` - Gets the latest revision of the label. * `labels/&#123;id&#125;@published` - Gets the current published revision of the label. * `labels/&#123;id&#125;@&#123;revision_id&#125;` - Gets the label at the specified revision ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a>, <a href="#parameter-minimumRole"><code>minimumRole</code></a>, <a href="#parameter-publishedOnly"><code>publishedOnly</code></a>, <a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Creates a label. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a>, <a href="#parameter-writeControl.requiredRevisionId"><code>writeControl.requiredRevisionId</code></a></td>
    <td>Permanently deletes a label and related metadata on Drive items. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Once deleted, the label and related Drive item metadata will be deleted. Only draft labels and disabled labels may be deleted.</td>
</tr>
<tr>
    <td><a href="#delta"><CopyableCode code="delta" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td></td>
    <td>Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](https://developers.google.com/workspace/drive/labels/guides/update-label). The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items.</td>
</tr>
<tr>
    <td><a href="#publish"><CopyableCode code="publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td></td>
    <td>Publish all draft changes to the label. Once published, the label may not return to its draft state. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). Publishing a label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle). Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label will be rejected. For example, the following changes to a label will be rejected after the label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * `Field.FieldType` cannot be changed. * Changes to field validation options cannot reject something that was previously accepted. * Reducing the maximum entries.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td></td>
    <td>Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td></td>
    <td>Enable a disabled label and restore it to its published state. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). This will result in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.</td>
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
<tr id="parameter-labelsId">
    <td><CopyableCode code="labelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-minimumRole">
    <td><CopyableCode code="minimumRole" /></td>
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
<tr id="parameter-publishedOnly">
    <td><CopyableCode code="publishedOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-useAdminAccess">
    <td><CopyableCode code="useAdminAccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-writeControl.requiredRevisionId">
    <td><CopyableCode code="writeControl.requiredRevisionId" /></td>
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

Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). Resource name may be any of: * `labels/&#123;id&#125;` - See `labels/&#123;id&#125;@latest` * `labels/&#123;id&#125;@latest` - Gets the latest revision of the label. * `labels/&#123;id&#125;@published` - Gets the current published revision of the label. * `labels/&#123;id&#125;@&#123;revision_id&#125;` - Gets the label at the specified revision ID.

```sql
SELECT
id,
name,
appliedCapabilities,
appliedLabelPolicy,
createTime,
creator,
customer,
disableTime,
disabler,
displayHints,
enabledAppSettings,
fields,
labelType,
learnMoreUri,
lifecycle,
lockStatus,
properties,
publishTime,
publisher,
revisionCreateTime,
revisionCreator,
revisionId,
schemaCapabilities
FROM googleworkspace.drivelabelsv2.labels
WHERE labelsId = '{{ labelsId }}' -- required
AND useAdminAccess = '{{ useAdminAccess }}'
AND languageCode = '{{ languageCode }}'
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).

```sql
SELECT
id,
name,
appliedCapabilities,
appliedLabelPolicy,
createTime,
creator,
customer,
disableTime,
disabler,
displayHints,
enabledAppSettings,
fields,
labelType,
learnMoreUri,
lifecycle,
lockStatus,
properties,
publishTime,
publisher,
revisionCreateTime,
revisionCreator,
revisionId,
schemaCapabilities
FROM googleworkspace.drivelabelsv2.labels
WHERE useAdminAccess = '{{ useAdminAccess }}'
AND minimumRole = '{{ minimumRole }}'
AND publishedOnly = '{{ publishedOnly }}'
AND customer = '{{ customer }}'
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a label. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label).

```sql
INSERT INTO googleworkspace.drivelabelsv2.labels (
data__labelType,
data__properties,
data__fields,
data__learnMoreUri,
data__enabledAppSettings,
useAdminAccess,
languageCode
)
SELECT 
'{{ labelType }}',
'{{ properties }}',
'{{ fields }}',
'{{ learnMoreUri }}',
'{{ enabledAppSettings }}',
'{{ useAdminAccess }}',
'{{ languageCode }}'
RETURNING
id,
name,
appliedCapabilities,
appliedLabelPolicy,
createTime,
creator,
customer,
disableTime,
disabler,
displayHints,
enabledAppSettings,
fields,
labelType,
learnMoreUri,
lifecycle,
lockStatus,
properties,
publishTime,
publisher,
revisionCreateTime,
revisionCreator,
revisionId,
schemaCapabilities
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: labels
  props:
    - name: labelType
      value: string
      description: >
        Required. The type of label.
        
      valid_values: ['LABEL_TYPE_UNSPECIFIED', 'SHARED', 'ADMIN', 'GOOGLE_APP']
    - name: properties
      value: object
      description: >
        Required. The basic properties of the label.
        
    - name: fields
      value: array
      description: >
        List of fields in descending priority order.
        
    - name: learnMoreUri
      value: string
      description: >
        Custom URL to present to users to allow them to learn more about this label and how it should be used.
        
    - name: enabledAppSettings
      value: object
      description: >
        Optional. The `EnabledAppSettings` for this Label.
        
    - name: useAdminAccess
      value: boolean
    - name: languageCode
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

Permanently deletes a label and related metadata on Drive items. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Once deleted, the label and related Drive item metadata will be deleted. Only draft labels and disabled labels may be deleted.

```sql
DELETE FROM googleworkspace.drivelabelsv2.labels
WHERE labelsId = '{{ labelsId }}' --required
AND useAdminAccess = '{{ useAdminAccess }}'
AND writeControl.requiredRevisionId = '{{ writeControl.requiredRevisionId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delta"
    values={[
        { label: 'delta', value: 'delta' },
        { label: 'publish', value: 'publish' },
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="delta">

Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](https://developers.google.com/workspace/drive/labels/guides/update-label). The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items.

```sql
EXEC googleworkspace.drivelabelsv2.labels.delta 
@labelsId='{{ labelsId }}' --required 
@@json=
'{
"writeControl": "{{ writeControl }}", 
"requests": "{{ requests }}", 
"useAdminAccess": {{ useAdminAccess }}, 
"view": "{{ view }}", 
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
<TabItem value="publish">

Publish all draft changes to the label. Once published, the label may not return to its draft state. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). Publishing a label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle). Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label will be rejected. For example, the following changes to a label will be rejected after the label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * `Field.FieldType` cannot be changed. * Changes to field validation options cannot reject something that was previously accepted. * Reducing the maximum entries.

```sql
EXEC googleworkspace.drivelabelsv2.labels.publish 
@labelsId='{{ labelsId }}' --required 
@@json=
'{
"useAdminAccess": {{ useAdminAccess }}, 
"writeControl": "{{ writeControl }}", 
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
<TabItem value="disable">

Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

```sql
EXEC googleworkspace.drivelabelsv2.labels.disable 
@labelsId='{{ labelsId }}' --required 
@@json=
'{
"updateMask": "{{ updateMask }}", 
"useAdminAccess": {{ useAdminAccess }}, 
"writeControl": "{{ writeControl }}", 
"disabledPolicy": "{{ disabledPolicy }}", 
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
<TabItem value="enable">

Enable a disabled label and restore it to its published state. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). This will result in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

```sql
EXEC googleworkspace.drivelabelsv2.labels.enable 
@labelsId='{{ labelsId }}' --required 
@@json=
'{
"useAdminAccess": {{ useAdminAccess }}, 
"writeControl": "{{ writeControl }}", 
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
</Tabs>
