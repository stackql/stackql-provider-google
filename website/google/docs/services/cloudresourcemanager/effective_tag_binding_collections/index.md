--- 
title: effective_tag_binding_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_tag_binding_collections
  - cloudresourcemanager
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

Creates, updates, deletes, gets or lists an <code>effective_tag_binding_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>effective_tag_binding_collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudresourcemanager.effective_tag_binding_collections" /></td></tr>
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
    <td>Identifier. The name of the EffectiveTagBindingCollection, following the convention: `locations/&#123;location&#125;/effectiveTagBindingCollections/&#123;encoded-full-resource-name&#125;` where the encoded-full-resource-name is the UTF-8 encoded name of the GCP resource the TagBindings are bound to. E.g. "locations/global/effectiveTagBindingCollections/%2f%2fcloudresourcemanager.googleapis.com%2fprojects%2f123"</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveTags" /></td>
    <td><code>object</code></td>
    <td>Tag keys/values effectively bound to this resource, specified in namespaced format. For example: "123/environment": "production"</td>
</tr>
<tr>
    <td><CopyableCode code="fullResourceName" /></td>
    <td><code>string</code></td>
    <td>The full resource name of the resource the TagBindings are bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`</td>
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
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-effectiveTagBindingCollectionsId"><code>effectiveTagBindingCollectionsId</code></a></td>
    <td></td>
    <td>Returns effective tag bindings on a GCP resource.</td>
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
<tr id="parameter-effectiveTagBindingCollectionsId">
    <td><CopyableCode code="effectiveTagBindingCollectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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

Returns effective tag bindings on a GCP resource.

```sql
SELECT
name,
effectiveTags,
fullResourceName
FROM google.cloudresourcemanager.effective_tag_binding_collections
WHERE locationsId = '{{ locationsId }}' -- required
AND effectiveTagBindingCollectionsId = '{{ effectiveTagBindingCollectionsId }}' -- required;
```
</TabItem>
</Tabs>
