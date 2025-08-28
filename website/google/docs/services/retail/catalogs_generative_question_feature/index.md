--- 
title: catalogs_generative_question_feature
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs_generative_question_feature
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

Creates, updates, deletes, gets or lists a <code>catalogs_generative_question_feature</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalogs_generative_question_feature</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.catalogs_generative_question_feature" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_get_generative_question_feature"
    values={[
        { label: 'projects_locations_catalogs_get_generative_question_feature', value: 'projects_locations_catalogs_get_generative_question_feature' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_generative_question_feature">

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
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Required. Resource name of the affected catalog. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/catalogs/&#123;catalog&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="featureEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines whether questions will be used at serving time. Note: This feature cannot be enabled until initial data requirements are satisfied.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumProducts" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Minimum number of products in the response to trigger follow-up questions. Value must be 0 or positive.</td>
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
    <td><a href="#projects_locations_catalogs_get_generative_question_feature"><CopyableCode code="projects_locations_catalogs_get_generative_question_feature" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Manages overal generative question feature state -- enables toggling feature on and off.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_update_generative_question_feature"><CopyableCode code="projects_locations_catalogs_update_generative_question_feature" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Manages overal generative question feature state -- enables toggling feature on and off.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_get_generative_question_feature"
    values={[
        { label: 'projects_locations_catalogs_get_generative_question_feature', value: 'projects_locations_catalogs_get_generative_question_feature' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_generative_question_feature">

Manages overal generative question feature state -- enables toggling feature on and off.

```sql
SELECT
catalog,
featureEnabled,
minimumProducts
FROM google.retail.catalogs_generative_question_feature
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_update_generative_question_feature"
    values={[
        { label: 'projects_locations_catalogs_update_generative_question_feature', value: 'projects_locations_catalogs_update_generative_question_feature' }
    ]}
>
<TabItem value="projects_locations_catalogs_update_generative_question_feature">

Manages overal generative question feature state -- enables toggling feature on and off.

```sql
UPDATE google.retail.catalogs_generative_question_feature
SET 
data__catalog = '{{ catalog }}',
data__featureEnabled = {{ featureEnabled }},
data__minimumProducts = {{ minimumProducts }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
catalog,
featureEnabled,
minimumProducts;
```
</TabItem>
</Tabs>
