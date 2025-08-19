--- 
title: cache_config
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_config
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>cache_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cache_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.cache_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cache_config"
    values={[
        { label: 'get_cache_config', value: 'get_cache_config' }
    ]}
>
<TabItem value="get_cache_config">

Config of GenAI caching features. This is a singleton resource.

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
    <td>Identifier. Name of the cache config. Format: - `projects/&#123;project&#125;/cacheConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="disableCache" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, disables GenAI caching. Otherwise caching is enabled.</td>
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
    <td><a href="#get_cache_config"><CopyableCode code="get_cache_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets a GenAI cache config.</td>
</tr>
<tr>
    <td><a href="#update_cache_config"><CopyableCode code="update_cache_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Updates a cache config.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cache_config"
    values={[
        { label: 'get_cache_config', value: 'get_cache_config' }
    ]}
>
<TabItem value="get_cache_config">

Gets a GenAI cache config.

```sql
SELECT
name,
disableCache
FROM google.aiplatform.cache_config
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cache_config"
    values={[
        { label: 'update_cache_config', value: 'update_cache_config' }
    ]}
>
<TabItem value="update_cache_config">

Updates a cache config.

```sql
UPDATE google.aiplatform.cache_config
SET 
data__name = '{{ name }}',
data__disableCache = {{ disableCache }}
WHERE 
projectsId = '{{ projectsId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
