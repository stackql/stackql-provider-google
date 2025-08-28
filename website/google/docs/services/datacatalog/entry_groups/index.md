--- 
title: entry_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - entry_groups
  - datacatalog
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

Creates, updates, deletes, gets or lists an <code>entry_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entry_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.entry_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_get"
    values={[
        { label: 'projects_locations_entry_groups_get', value: 'projects_locations_entry_groups_get' },
        { label: 'projects_locations_entry_groups_list', value: 'projects_locations_entry_groups_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_get">

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
    <td>Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCatalogTimestamps" /></td>
    <td><code>object</code></td>
    <td>Output only. Timestamps of the entry group. Default value is empty. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="transferredToDataplex" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When set to [true], it means DataCatalog EntryGroup was transferred to Dataplex Universal Catalog. It makes EntryGroup and its Entries to be read-only in DataCatalog. However, new Tags on EntryGroup and its Entries can be created. After setting the flag to [true] it cannot be unset.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_groups_list">

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
    <td>Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCatalogTimestamps" /></td>
    <td><code>object</code></td>
    <td>Output only. Timestamps of the entry group. Default value is empty. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="transferredToDataplex" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When set to [true], it means DataCatalog EntryGroup was transferred to Dataplex Universal Catalog. It makes EntryGroup and its Entries to be read-only in DataCatalog. However, new Tags on EntryGroup and its Entries can be created. After setting the flag to [true] it cannot be unset.</td>
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
    <td><a href="#projects_locations_entry_groups_get"><CopyableCode code="projects_locations_entry_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Gets an entry group.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_list"><CopyableCode code="projects_locations_entry_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists entry groups.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_create"><CopyableCode code="projects_locations_entry_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-entryGroupId"><code>entryGroupId</code></a></td>
    <td>Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](https://cloud.google.com/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_&#123;SERVICE_NAME_HASH&#125;`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_patch"><CopyableCode code="projects_locations_entry_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an entry group. You must enable the Data Catalog API in the project identified by the `entry_group.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_delete"><CopyableCode code="projects_locations_entry_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an entry group. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
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
<tr id="parameter-entryGroupsId">
    <td><CopyableCode code="entryGroupsId" /></td>
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
<tr id="parameter-entryGroupId">
    <td><CopyableCode code="entryGroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_entry_groups_get"
    values={[
        { label: 'projects_locations_entry_groups_get', value: 'projects_locations_entry_groups_get' },
        { label: 'projects_locations_entry_groups_list', value: 'projects_locations_entry_groups_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_get">

Gets an entry group.

```sql
SELECT
name,
dataCatalogTimestamps,
description,
displayName,
transferredToDataplex
FROM google.datacatalog.entry_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="projects_locations_entry_groups_list">

Lists entry groups.

```sql
SELECT
name,
dataCatalogTimestamps,
description,
displayName,
transferredToDataplex
FROM google.datacatalog.entry_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_create"
    values={[
        { label: 'projects_locations_entry_groups_create', value: 'projects_locations_entry_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_create">

Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](https://cloud.google.com/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_&#123;SERVICE_NAME_HASH&#125;`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
INSERT INTO google.datacatalog.entry_groups (
data__name,
data__displayName,
data__description,
data__transferredToDataplex,
projectsId,
locationsId,
entryGroupId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
{{ transferredToDataplex }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupId }}'
RETURNING
name,
dataCatalogTimestamps,
description,
displayName,
transferredToDataplex
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entry_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entry_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the entry_groups resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.
        
    - name: displayName
      value: string
      description: >
        A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
        
    - name: description
      value: string
      description: >
        Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string.
        
    - name: transferredToDataplex
      value: boolean
      description: >
        Optional. When set to [true], it means DataCatalog EntryGroup was transferred to Dataplex Universal Catalog. It makes EntryGroup and its Entries to be read-only in DataCatalog. However, new Tags on EntryGroup and its Entries can be created. After setting the flag to [true] it cannot be unset.
        
    - name: entryGroupId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_patch"
    values={[
        { label: 'projects_locations_entry_groups_patch', value: 'projects_locations_entry_groups_patch' }
    ]}
>
<TabItem value="projects_locations_entry_groups_patch">

Updates an entry group. You must enable the Data Catalog API in the project identified by the `entry_group.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
UPDATE google.datacatalog.entry_groups
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__transferredToDataplex = {{ transferredToDataplex }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
dataCatalogTimestamps,
description,
displayName,
transferredToDataplex;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_delete"
    values={[
        { label: 'projects_locations_entry_groups_delete', value: 'projects_locations_entry_groups_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_delete">

Deletes an entry group. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
DELETE FROM google.datacatalog.entry_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
