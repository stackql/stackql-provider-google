--- 
title: supported_database_flags
hide_title: false
hide_table_of_contents: false
keywords:
  - supported_database_flags
  - alloydb
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

Creates, updates, deletes, gets or lists a <code>supported_database_flags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>supported_database_flags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.supported_database_flags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>The name of the flag resource, following Google Cloud conventions, e.g.: * projects/&#123;project&#125;/locations/&#123;location&#125;/flags/&#123;flag&#125; This field currently has no semantic meaning.</td>
</tr>
<tr>
    <td><CopyableCode code="acceptsMultipleValues" /></td>
    <td><code>boolean</code></td>
    <td>Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="flagName" /></td>
    <td><code>string</code></td>
    <td>The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field.</td>
</tr>
<tr>
    <td><CopyableCode code="integerRestrictions" /></td>
    <td><code>object</code></td>
    <td>Restriction on INTEGER type value. (id: IntegerRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedIntegerValue" /></td>
    <td><code>string (int64)</code></td>
    <td>The recommended value for an INTEGER flag.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedStringValue" /></td>
    <td><code>string</code></td>
    <td>The recommended value for a STRING flag.</td>
</tr>
<tr>
    <td><CopyableCode code="requiresDbRestart" /></td>
    <td><code>boolean</code></td>
    <td>Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's).</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the flag.</td>
</tr>
<tr>
    <td><CopyableCode code="stringRestrictions" /></td>
    <td><code>object</code></td>
    <td>Restriction on STRING type value. (id: StringRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="supportedDbVersions" /></td>
    <td><code>array</code></td>
    <td>Major database engine versions for which this flag is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Lists SupportedDatabaseFlags for a given project and location.</td>
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
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists SupportedDatabaseFlags for a given project and location.

```sql
SELECT
name,
acceptsMultipleValues,
flagName,
integerRestrictions,
recommendedIntegerValue,
recommendedStringValue,
requiresDbRestart,
scope,
stringRestrictions,
supportedDbVersions,
valueType
FROM google.alloydb.supported_database_flags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND scope = '{{ scope }}';
```
</TabItem>
</Tabs>
