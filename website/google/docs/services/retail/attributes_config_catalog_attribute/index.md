--- 
title: attributes_config_catalog_attribute
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes_config_catalog_attribute
  - retail
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

Creates, updates, deletes, gets or lists an <code>attributes_config_catalog_attribute</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attributes_config_catalog_attribute</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.attributes_config_catalog_attribute" /></td></tr>
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
    <td><a href="#projects_locations_catalogs_attributes_config_add_catalog_attribute"><CopyableCode code="projects_locations_catalogs_attributes_config_add_catalog_attribute" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_attributes_config_remove_catalog_attribute"><CopyableCode code="projects_locations_catalogs_attributes_config_remove_catalog_attribute" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.</td>
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
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_attributes_config_add_catalog_attribute"
    values={[
        { label: 'projects_locations_catalogs_attributes_config_add_catalog_attribute', value: 'projects_locations_catalogs_attributes_config_add_catalog_attribute' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_attributes_config_add_catalog_attribute">

Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.retail.attributes_config_catalog_attribute (
data__catalogAttribute,
projectsId,
locationsId,
catalogsId
)
SELECT 
'{{ catalogAttribute }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}'
RETURNING
name,
attributeConfigLevel,
catalogAttributes
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: attributes_config_catalog_attribute
  props:
    - name: projectsId
      value: string
      description: Required parameter for the attributes_config_catalog_attribute resource.
    - name: locationsId
      value: string
      description: Required parameter for the attributes_config_catalog_attribute resource.
    - name: catalogsId
      value: string
      description: Required parameter for the attributes_config_catalog_attribute resource.
    - name: catalogAttribute
      value: object
      description: >
        Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_attributes_config_remove_catalog_attribute"
    values={[
        { label: 'projects_locations_catalogs_attributes_config_remove_catalog_attribute', value: 'projects_locations_catalogs_attributes_config_remove_catalog_attribute' }
    ]}
>
<TabItem value="projects_locations_catalogs_attributes_config_remove_catalog_attribute">

Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.retail.attributes_config_catalog_attribute
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required;
```
</TabItem>
</Tabs>
