--- 
title: tag_keys_namespaced
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_keys_namespaced
  - cloudresourcemanager
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

Creates, updates, deletes, gets or lists a <code>tag_keys_namespaced</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tag_keys_namespaced</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudresourcemanager.tag_keys_namespaced" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_namespaced"
    values={[
        { label: 'get_namespaced', value: 'get_namespaced' }
    ]}
>
<TabItem value="get_namespaced">

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
    <td>Immutable. The resource name for a TagKey. Must be in the format `tagKeys/&#123;tag_key_id&#125;`, where `tag_key_id` is the generated numeric id for the TagKey.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details.</td>
</tr>
<tr>
    <td><CopyableCode code="namespacedName" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Namespaced name of the TagKey.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the TagKey's parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form `organizations/&#123;org_id&#125;`. For a TagKey parented by a Project, its parent can be in the form `projects/&#123;project_id&#125;` or `projects/&#123;project_number&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td>Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.</td>
</tr>
<tr>
    <td><CopyableCode code="purposeData" /></td>
    <td><code>object</code></td>
    <td>Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set.</td>
</tr>
<tr>
    <td><CopyableCode code="shortName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-256 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td><a href="#get_namespaced"><CopyableCode code="get_namespaced" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_namespaced"
    values={[
        { label: 'get_namespaced', value: 'get_namespaced' }
    ]}
>
<TabItem value="get_namespaced">

Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.

```sql
SELECT
name,
createTime,
description,
etag,
namespacedName,
parent,
purpose,
purposeData,
shortName,
updateTime
FROM google.cloudresourcemanager.tag_keys_namespaced
WHERE name = '{{ name }}';
```
</TabItem>
</Tabs>
