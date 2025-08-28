--- 
title: labels_label_copy_mode
hide_title: false
hide_table_of_contents: false
keywords:
  - labels_label_copy_mode
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

Creates, updates, deletes, gets or lists a <code>labels_label_copy_mode</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>labels_label_copy_mode</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2.labels_label_copy_mode" /></td></tr>
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
    <td><a href="#update_label_copy_mode"><CopyableCode code="update_label_copy_mode" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td></td>
    <td>Updates a label's `CopyMode`. Changes to this policy aren't revisioned, don't require publishing, and take effect immediately.</td>
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
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_label_copy_mode"
    values={[
        { label: 'update_label_copy_mode', value: 'update_label_copy_mode' }
    ]}
>
<TabItem value="update_label_copy_mode">

Updates a label's `CopyMode`. Changes to this policy aren't revisioned, don't require publishing, and take effect immediately.

```sql
UPDATE googleworkspace.drivelabelsv2.labels_label_copy_mode
SET 
data__copyMode = '{{ copyMode }}',
data__useAdminAccess = {{ useAdminAccess }},
data__languageCode = '{{ languageCode }}',
data__view = '{{ view }}'
WHERE 
labelsId = '{{ labelsId }}' --required
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
schemaCapabilities;
```
</TabItem>
</Tabs>
