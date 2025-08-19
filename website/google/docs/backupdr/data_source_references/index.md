--- 
title: data_source_references
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_references
  - backupdr
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

Creates, updates, deletes, gets or lists a <code>data_source_references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_source_references</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.data_source_references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

DataSourceReference is a reference to a DataSource resource.

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
    <td>Identifier. The resource name of the DataSourceReference. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/dataSourceReferences/&#123;data_source_reference&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataSourceReference was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the DataSource. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupVault&#125;/dataSources/&#123;dataSource&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceBackupConfigInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information of backup configuration on the DataSource. (id: DataSourceBackupConfigInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceBackupConfigState" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup configuration state of the DataSource.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceBackupCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of backups in the DataSource.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceGcpResourceInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The GCP resource that the DataSource is associated with. (id: DataSourceGcpResourceInfo)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataSourceReferencesId"><code>dataSourceReferencesId</code></a></td>
    <td></td>
    <td>Gets details of a single DataSourceReference.</td>
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
<tr id="parameter-dataSourceReferencesId">
    <td><CopyableCode code="dataSourceReferencesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets details of a single DataSourceReference.

```sql
SELECT
name,
createTime,
dataSource,
dataSourceBackupConfigInfo,
dataSourceBackupConfigState,
dataSourceBackupCount,
dataSourceGcpResourceInfo
FROM google.backupdr.data_source_references
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataSourceReferencesId = '{{ dataSourceReferencesId }}' -- required;
```
</TabItem>
</Tabs>
