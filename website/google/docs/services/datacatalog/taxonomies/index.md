--- 
title: taxonomies
hide_title: false
hide_table_of_contents: false
keywords:
  - taxonomies
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

Creates, updates, deletes, gets or lists a <code>taxonomies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>taxonomies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.taxonomies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_taxonomies_get"
    values={[
        { label: 'projects_locations_taxonomies_get', value: 'projects_locations_taxonomies_get' },
        { label: 'projects_locations_taxonomies_list', value: 'projects_locations_taxonomies_list' }
    ]}
>
<TabItem value="projects_locations_taxonomies_get">

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
    <td>Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedPolicyTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTagCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of policy tags in this taxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td>Output only. Identity of the service which owns the Taxonomy. This field is only populated when the taxonomy is created by a Google Cloud service. Currently only 'DATAPLEX' is supported. (id: GoogleCloudDatacatalogV1TaxonomyService)</td>
</tr>
<tr>
    <td><CopyableCode code="taxonomyTimestamps" /></td>
    <td><code>object</code></td>
    <td>Output only. Creation and modification timestamps of this taxonomy. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_taxonomies_list">

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
    <td>Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedPolicyTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTagCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of policy tags in this taxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td>Output only. Identity of the service which owns the Taxonomy. This field is only populated when the taxonomy is created by a Google Cloud service. Currently only 'DATAPLEX' is supported. (id: GoogleCloudDatacatalogV1TaxonomyService)</td>
</tr>
<tr>
    <td><CopyableCode code="taxonomyTimestamps" /></td>
    <td><code>object</code></td>
    <td>Output only. Creation and modification timestamps of this taxonomy. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
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
    <td><a href="#projects_locations_taxonomies_get"><CopyableCode code="projects_locations_taxonomies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td></td>
    <td>Gets a taxonomy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_list"><CopyableCode code="projects_locations_taxonomies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all taxonomies in a project in a particular location that you have a permission to view.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_create"><CopyableCode code="projects_locations_taxonomies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_patch"><CopyableCode code="projects_locations_taxonomies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a taxonomy, including its display name, description, and activated policy types.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_replace"><CopyableCode code="projects_locations_taxonomies_replace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td></td>
    <td>Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_delete"><CopyableCode code="projects_locations_taxonomies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-taxonomiesId"><code>taxonomiesId</code></a></td>
    <td></td>
    <td>Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_import"><CopyableCode code="projects_locations_taxonomies_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.</td>
</tr>
<tr>
    <td><a href="#projects_locations_taxonomies_export"><CopyableCode code="projects_locations_taxonomies_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-taxonomies"><code>taxonomies</code></a>, <a href="#parameter-serializedTaxonomies"><code>serializedTaxonomies</code></a></td>
    <td>Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.</td>
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
<tr id="parameter-taxonomiesId">
    <td><CopyableCode code="taxonomiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-serializedTaxonomies">
    <td><CopyableCode code="serializedTaxonomies" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-taxonomies">
    <td><CopyableCode code="taxonomies" /></td>
    <td><code>string</code></td>
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
    defaultValue="projects_locations_taxonomies_get"
    values={[
        { label: 'projects_locations_taxonomies_get', value: 'projects_locations_taxonomies_get' },
        { label: 'projects_locations_taxonomies_list', value: 'projects_locations_taxonomies_list' }
    ]}
>
<TabItem value="projects_locations_taxonomies_get">

Gets a taxonomy.

```sql
SELECT
name,
activatedPolicyTypes,
description,
displayName,
policyTagCount,
service,
taxonomyTimestamps
FROM google.datacatalog.taxonomies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND taxonomiesId = '{{ taxonomiesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_taxonomies_list">

Lists all taxonomies in a project in a particular location that you have a permission to view.

```sql
SELECT
name,
activatedPolicyTypes,
description,
displayName,
policyTagCount,
service,
taxonomyTimestamps
FROM google.datacatalog.taxonomies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_taxonomies_create"
    values={[
        { label: 'projects_locations_taxonomies_create', value: 'projects_locations_taxonomies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_taxonomies_create">

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

```sql
INSERT INTO google.datacatalog.taxonomies (
data__name,
data__displayName,
data__description,
data__activatedPolicyTypes,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ activatedPolicyTypes }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
activatedPolicyTypes,
description,
displayName,
policyTagCount,
service,
taxonomyTimestamps
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: taxonomies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the taxonomies resource.
    - name: locationsId
      value: string
      description: Required parameter for the taxonomies resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs.
        
    - name: displayName
      value: string
      description: >
        Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.
        
    - name: description
      value: string
      description: >
        Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8.
        
    - name: activatedPolicyTypes
      value: array
      description: >
        Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_taxonomies_patch"
    values={[
        { label: 'projects_locations_taxonomies_patch', value: 'projects_locations_taxonomies_patch' }
    ]}
>
<TabItem value="projects_locations_taxonomies_patch">

Updates a taxonomy, including its display name, description, and activated policy types.

```sql
UPDATE google.datacatalog.taxonomies
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__activatedPolicyTypes = '{{ activatedPolicyTypes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND taxonomiesId = '{{ taxonomiesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activatedPolicyTypes,
description,
displayName,
policyTagCount,
service,
taxonomyTimestamps;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_taxonomies_replace"
    values={[
        { label: 'projects_locations_taxonomies_replace', value: 'projects_locations_taxonomies_replace' }
    ]}
>
<TabItem value="projects_locations_taxonomies_replace">

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

```sql
REPLACE google.datacatalog.taxonomies
SET 
data__serializedTaxonomy = '{{ serializedTaxonomy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND taxonomiesId = '{{ taxonomiesId }}' --required
RETURNING
name,
activatedPolicyTypes,
description,
displayName,
policyTagCount,
service,
taxonomyTimestamps;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_taxonomies_delete"
    values={[
        { label: 'projects_locations_taxonomies_delete', value: 'projects_locations_taxonomies_delete' }
    ]}
>
<TabItem value="projects_locations_taxonomies_delete">

Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.

```sql
DELETE FROM google.datacatalog.taxonomies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND taxonomiesId = '{{ taxonomiesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_taxonomies_import"
    values={[
        { label: 'projects_locations_taxonomies_import', value: 'projects_locations_taxonomies_import' },
        { label: 'projects_locations_taxonomies_export', value: 'projects_locations_taxonomies_export' }
    ]}
>
<TabItem value="projects_locations_taxonomies_import">

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

```sql
EXEC google.datacatalog.taxonomies.projects_locations_taxonomies_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"crossRegionalSource": "{{ crossRegionalSource }}"
}';
```
</TabItem>
<TabItem value="projects_locations_taxonomies_export">

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

```sql
EXEC google.datacatalog.taxonomies.projects_locations_taxonomies_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@taxonomies='{{ taxonomies }}', 
@serializedTaxonomies={{ serializedTaxonomies }};
```
</TabItem>
</Tabs>
