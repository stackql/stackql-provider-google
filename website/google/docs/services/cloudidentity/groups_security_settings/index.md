--- 
title: groups_security_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_security_settings
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>groups_security_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups_security_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.groups_security_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_settings"
    values={[
        { label: 'get_security_settings', value: 'get_security_settings' }
    ]}
>
<TabItem value="get_security_settings">

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
    <td>Output only. The resource name of the security settings. Shall be of the form `groups/&#123;group_id&#125;/securitySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="memberRestriction" /></td>
    <td><code>object</code></td>
    <td>The Member Restriction value (id: MemberRestriction)</td>
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
    <td><a href="#get_security_settings"><CopyableCode code="get_security_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Get Security Settings</td>
</tr>
<tr>
    <td><a href="#update_security_settings"><CopyableCode code="update_security_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update Security Settings</td>
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
<tr id="parameter-groupsId">
    <td><CopyableCode code="groupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="get_security_settings"
    values={[
        { label: 'get_security_settings', value: 'get_security_settings' }
    ]}
>
<TabItem value="get_security_settings">

Get Security Settings

```sql
SELECT
name,
memberRestriction
FROM google.cloudidentity.groups_security_settings
WHERE groupsId = '{{ groupsId }}' -- required
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_settings"
    values={[
        { label: 'update_security_settings', value: 'update_security_settings' }
    ]}
>
<TabItem value="update_security_settings">

Update Security Settings

```sql
UPDATE google.cloudidentity.groups_security_settings
SET 
data__memberRestriction = '{{ memberRestriction }}'
WHERE 
groupsId = '{{ groupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
