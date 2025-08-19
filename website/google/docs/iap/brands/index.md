--- 
title: brands
hide_title: false
hide_table_of_contents: false
keywords:
  - brands
  - iap
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

Creates, updates, deletes, gets or lists a <code>brands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>brands</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iap.brands" /></td></tr>
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

OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.

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
    <td>Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationTitle" /></td>
    <td><code>string</code></td>
    <td>Application name displayed on OAuth consent screen.</td>
</tr>
<tr>
    <td><CopyableCode code="orgInternalOnly" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the brand is only intended for usage inside the G Suite organization only.</td>
</tr>
<tr>
    <td><CopyableCode code="supportEmail" /></td>
    <td><code>string</code></td>
    <td>Support email displayed on the OAuth consent screen.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListBrands.

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
    <td><CopyableCode code="brands" /></td>
    <td><code>array</code></td>
    <td>Brands existing in the project.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a></td>
    <td></td>
    <td>Retrieves the OAuth brand of the project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Lists the existing brands for the project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.</td>
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
<tr id="parameter-brandsId">
    <td><CopyableCode code="brandsId" /></td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves the OAuth brand of the project.

```sql
SELECT
name,
applicationTitle,
orgInternalOnly,
supportEmail
FROM google.iap.brands
WHERE projectsId = '{{ projectsId }}' -- required
AND brandsId = '{{ brandsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the existing brands for the project.

```sql
SELECT
brands
FROM google.iap.brands
WHERE projectsId = '{{ projectsId }}' -- required;
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

Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

```sql
INSERT INTO google.iap.brands (
data__supportEmail,
data__applicationTitle,
projectsId
)
SELECT 
'{{ supportEmail }}',
'{{ applicationTitle }}',
'{{ projectsId }}'
RETURNING
name,
applicationTitle,
orgInternalOnly,
supportEmail
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: brands
  props:
    - name: projectsId
      value: string
      description: Required parameter for the brands resource.
    - name: supportEmail
      value: string
      description: >
        Support email displayed on the OAuth consent screen.
        
    - name: applicationTitle
      value: string
      description: >
        Application name displayed on OAuth consent screen.
        
```
</TabItem>
</Tabs>
