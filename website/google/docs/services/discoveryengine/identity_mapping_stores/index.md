--- 
title: identity_mapping_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_mapping_stores
  - discoveryengine
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

Creates, updates, deletes, gets or lists an <code>identity_mapping_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>identity_mapping_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.identity_mapping_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_identity_mapping_stores_get"
    values={[
        { label: 'projects_locations_identity_mapping_stores_get', value: 'projects_locations_identity_mapping_stores_get' },
        { label: 'projects_locations_identity_mapping_stores_list', value: 'projects_locations_identity_mapping_stores_list' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_get">

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
    <td>Immutable. The full resource name of the identity mapping store. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/identityMappingStores/&#123;identity_mapping_store&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Input only. The KMS key to be used to protect this Identity Mapping Store at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the Identity Mapping Store will be protected by the KMS key, as indicated in the cmek_config field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_identity_mapping_stores_list">

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
    <td>Immutable. The full resource name of the identity mapping store. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/identityMappingStores/&#123;identity_mapping_store&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Input only. The KMS key to be used to protect this Identity Mapping Store at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the Identity Mapping Store will be protected by the KMS key, as indicated in the cmek_config field.</td>
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
    <td><a href="#projects_locations_identity_mapping_stores_get"><CopyableCode code="projects_locations_identity_mapping_stores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-identityMappingStoresId"><code>identityMappingStoresId</code></a></td>
    <td></td>
    <td>Gets the Identity Mapping Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_identity_mapping_stores_list"><CopyableCode code="projects_locations_identity_mapping_stores_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Identity Mapping Stores.</td>
</tr>
<tr>
    <td><a href="#projects_locations_identity_mapping_stores_create"><CopyableCode code="projects_locations_identity_mapping_stores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-cmekConfigName"><code>cmekConfigName</code></a>, <a href="#parameter-disableCmek"><code>disableCmek</code></a>, <a href="#parameter-identityMappingStoreId"><code>identityMappingStoreId</code></a></td>
    <td>Creates a new Identity Mapping Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_identity_mapping_stores_delete"><CopyableCode code="projects_locations_identity_mapping_stores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-identityMappingStoresId"><code>identityMappingStoresId</code></a></td>
    <td></td>
    <td>Deletes the Identity Mapping Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_identity_mapping_stores_import_identity_mappings"><CopyableCode code="projects_locations_identity_mapping_stores_import_identity_mappings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-identityMappingStoresId"><code>identityMappingStoresId</code></a></td>
    <td></td>
    <td>Imports a list of Identity Mapping Entries to an Identity Mapping Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_identity_mapping_stores_purge_identity_mappings"><CopyableCode code="projects_locations_identity_mapping_stores_purge_identity_mappings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-identityMappingStoresId"><code>identityMappingStoresId</code></a></td>
    <td></td>
    <td>Purges specified or all Identity Mapping Entries from an Identity Mapping Store.</td>
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
<tr id="parameter-identityMappingStoresId">
    <td><CopyableCode code="identityMappingStoresId" /></td>
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
<tr id="parameter-cmekConfigName">
    <td><CopyableCode code="cmekConfigName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-disableCmek">
    <td><CopyableCode code="disableCmek" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-identityMappingStoreId">
    <td><CopyableCode code="identityMappingStoreId" /></td>
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
    defaultValue="projects_locations_identity_mapping_stores_get"
    values={[
        { label: 'projects_locations_identity_mapping_stores_get', value: 'projects_locations_identity_mapping_stores_get' },
        { label: 'projects_locations_identity_mapping_stores_list', value: 'projects_locations_identity_mapping_stores_list' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_get">

Gets the Identity Mapping Store.

```sql
SELECT
name,
cmekConfig,
kmsKeyName
FROM google.discoveryengine.identity_mapping_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND identityMappingStoresId = '{{ identityMappingStoresId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_identity_mapping_stores_list">

Lists all Identity Mapping Stores.

```sql
SELECT
name,
cmekConfig,
kmsKeyName
FROM google.discoveryengine.identity_mapping_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_identity_mapping_stores_create"
    values={[
        { label: 'projects_locations_identity_mapping_stores_create', value: 'projects_locations_identity_mapping_stores_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_create">

Creates a new Identity Mapping Store.

```sql
INSERT INTO google.discoveryengine.identity_mapping_stores (
data__name,
data__kmsKeyName,
projectsId,
locationsId,
cmekConfigName,
disableCmek,
identityMappingStoreId
)
SELECT 
'{{ name }}',
'{{ kmsKeyName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ cmekConfigName }}',
'{{ disableCmek }}',
'{{ identityMappingStoreId }}'
RETURNING
name,
cmekConfig,
kmsKeyName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: identity_mapping_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the identity_mapping_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the identity_mapping_stores resource.
    - name: name
      value: string
      description: >
        Immutable. The full resource name of the identity mapping store. Format: `projects/{project}/locations/{location}/identityMappingStores/{identity_mapping_store}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
        
    - name: kmsKeyName
      value: string
      description: >
        Input only. The KMS key to be used to protect this Identity Mapping Store at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the Identity Mapping Store will be protected by the KMS key, as indicated in the cmek_config field.
        
    - name: cmekConfigName
      value: string
    - name: disableCmek
      value: boolean
    - name: identityMappingStoreId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_identity_mapping_stores_delete"
    values={[
        { label: 'projects_locations_identity_mapping_stores_delete', value: 'projects_locations_identity_mapping_stores_delete' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_delete">

Deletes the Identity Mapping Store.

```sql
DELETE FROM google.discoveryengine.identity_mapping_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND identityMappingStoresId = '{{ identityMappingStoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_identity_mapping_stores_import_identity_mappings"
    values={[
        { label: 'projects_locations_identity_mapping_stores_import_identity_mappings', value: 'projects_locations_identity_mapping_stores_import_identity_mappings' },
        { label: 'projects_locations_identity_mapping_stores_purge_identity_mappings', value: 'projects_locations_identity_mapping_stores_purge_identity_mappings' }
    ]}
>
<TabItem value="projects_locations_identity_mapping_stores_import_identity_mappings">

Imports a list of Identity Mapping Entries to an Identity Mapping Store.

```sql
EXEC google.discoveryengine.identity_mapping_stores.projects_locations_identity_mapping_stores_import_identity_mappings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@identityMappingStoresId='{{ identityMappingStoresId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}"
}';
```
</TabItem>
<TabItem value="projects_locations_identity_mapping_stores_purge_identity_mappings">

Purges specified or all Identity Mapping Entries from an Identity Mapping Store.

```sql
EXEC google.discoveryengine.identity_mapping_stores.projects_locations_identity_mapping_stores_purge_identity_mappings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@identityMappingStoresId='{{ identityMappingStoresId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
</Tabs>
