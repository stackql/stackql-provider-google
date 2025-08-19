--- 
title: attribute_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_definitions
  - healthcare
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

Creates, updates, deletes, gets or lists an <code>attribute_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attribute_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.attribute_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A client-defined consent attribute.

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
    <td>Identifier. Resource name of the Attribute definition, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/attributeDefinitions/&#123;attribute_definition_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedValues" /></td>
    <td><code>array</code></td>
    <td>Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Required. The category of the attribute. The value of this field cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="consentDefaultValues" /></td>
    <td><code>array</code></td>
    <td>Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.</td>
</tr>
<tr>
    <td><CopyableCode code="dataMappingDefaultValue" /></td>
    <td><code>string</code></td>
    <td>Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="attributeDefinitions" /></td>
    <td><code>array</code></td>
    <td>The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-attributeDefinitionsId"><code>attributeDefinitionsId</code></a></td>
    <td></td>
    <td>Gets the specified Attribute definition.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the Attribute definitions in the specified consent store.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td><a href="#parameter-attributeDefinitionId"><code>attributeDefinitionId</code></a></td>
    <td>Creates a new Attribute definition in the parent consent store.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-attributeDefinitionsId"><code>attributeDefinitionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Attribute definition.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-attributeDefinitionsId"><code>attributeDefinitionsId</code></a></td>
    <td></td>
    <td>Deletes the specified Attribute definition. Fails if the Attribute definition is referenced by any User data mapping, or the latest revision of any Consent.</td>
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
<tr id="parameter-attributeDefinitionsId">
    <td><CopyableCode code="attributeDefinitionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-consentStoresId">
    <td><CopyableCode code="consentStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
<tr id="parameter-attributeDefinitionId">
    <td><CopyableCode code="attributeDefinitionId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified Attribute definition.

```sql
SELECT
name,
allowedValues,
category,
consentDefaultValues,
dataMappingDefaultValue,
description
FROM google.healthcare.attribute_definitions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required
AND attributeDefinitionsId = '{{ attributeDefinitionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Attribute definitions in the specified consent store.

```sql
SELECT
attributeDefinitions,
nextPageToken
FROM google.healthcare.attribute_definitions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Attribute definition in the parent consent store.

```sql
INSERT INTO google.healthcare.attribute_definitions (
data__name,
data__description,
data__category,
data__allowedValues,
data__consentDefaultValues,
data__dataMappingDefaultValue,
projectsId,
locationsId,
datasetsId,
consentStoresId,
attributeDefinitionId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ category }}',
'{{ allowedValues }}',
'{{ consentDefaultValues }}',
'{{ dataMappingDefaultValue }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ consentStoresId }}',
'{{ attributeDefinitionId }}'
RETURNING
name,
allowedValues,
category,
consentDefaultValues,
dataMappingDefaultValue,
description
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: attribute_definitions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the attribute_definitions resource.
    - name: locationsId
      value: string
      description: Required parameter for the attribute_definitions resource.
    - name: datasetsId
      value: string
      description: Required parameter for the attribute_definitions resource.
    - name: consentStoresId
      value: string
      description: Required parameter for the attribute_definitions resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation.
        
    - name: description
      value: string
      description: >
        Optional. A description of the attribute.
        
    - name: category
      value: string
      description: >
        Required. The category of the attribute. The value of this field cannot be changed after creation.
        
      valid_values: ['CATEGORY_UNSPECIFIED', 'RESOURCE', 'REQUEST']
    - name: allowedValues
      value: array
      description: >
        Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.
        
    - name: consentDefaultValues
      value: array
      description: >
        Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.
        
    - name: dataMappingDefaultValue
      value: string
      description: >
        Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.
        
    - name: attributeDefinitionId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specified Attribute definition.

```sql
UPDATE google.healthcare.attribute_definitions
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__category = '{{ category }}',
data__allowedValues = '{{ allowedValues }}',
data__consentDefaultValues = '{{ consentDefaultValues }}',
data__dataMappingDefaultValue = '{{ dataMappingDefaultValue }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required
AND attributeDefinitionsId = '{{ attributeDefinitionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowedValues,
category,
consentDefaultValues,
dataMappingDefaultValue,
description;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified Attribute definition. Fails if the Attribute definition is referenced by any User data mapping, or the latest revision of any Consent.

```sql
DELETE FROM google.healthcare.attribute_definitions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required
AND attributeDefinitionsId = '{{ attributeDefinitionsId }}' --required;
```
</TabItem>
</Tabs>
