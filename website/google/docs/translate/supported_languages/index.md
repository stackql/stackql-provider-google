--- 
title: supported_languages
hide_title: false
hide_table_of_contents: false
keywords:
  - supported_languages
  - translate
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

Creates, updates, deletes, gets or lists a <code>supported_languages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>supported_languages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.supported_languages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get_supported_languages"
    values={[
        { label: 'projects_locations_get_supported_languages', value: 'projects_locations_get_supported_languages' },
        { label: 'projects_get_supported_languages', value: 'projects_get_supported_languages' }
    ]}
>
<TabItem value="projects_locations_get_supported_languages">

The response message for discovering supported languages.

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
    <td><CopyableCode code="languages" /></td>
    <td><code>array</code></td>
    <td>A list of supported language responses. This list contains an entry for each language the Translation API supports.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_get_supported_languages">

The response message for discovering supported languages.

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
    <td><CopyableCode code="languages" /></td>
    <td><code>array</code></td>
    <td>A list of supported language responses. This list contains an entry for each language the Translation API supports.</td>
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
    <td><a href="#projects_locations_get_supported_languages"><CopyableCode code="projects_locations_get_supported_languages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-displayLanguageCode"><code>displayLanguageCode</code></a>, <a href="#parameter-model"><code>model</code></a></td>
    <td>Returns a list of supported languages for translation.</td>
</tr>
<tr>
    <td><a href="#projects_get_supported_languages"><CopyableCode code="projects_get_supported_languages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-displayLanguageCode"><code>displayLanguageCode</code></a>, <a href="#parameter-model"><code>model</code></a></td>
    <td>Returns a list of supported languages for translation.</td>
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
<tr id="parameter-displayLanguageCode">
    <td><CopyableCode code="displayLanguageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-model">
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get_supported_languages"
    values={[
        { label: 'projects_locations_get_supported_languages', value: 'projects_locations_get_supported_languages' },
        { label: 'projects_get_supported_languages', value: 'projects_get_supported_languages' }
    ]}
>
<TabItem value="projects_locations_get_supported_languages">

Returns a list of supported languages for translation.

```sql
SELECT
languages
FROM google.translate.supported_languages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND displayLanguageCode = '{{ displayLanguageCode }}'
AND model = '{{ model }}';
```
</TabItem>
<TabItem value="projects_get_supported_languages">

Returns a list of supported languages for translation.

```sql
SELECT
languages
FROM google.translate.supported_languages
WHERE projectsId = '{{ projectsId }}' -- required
AND displayLanguageCode = '{{ displayLanguageCode }}'
AND model = '{{ model }}';
```
</TabItem>
</Tabs>
