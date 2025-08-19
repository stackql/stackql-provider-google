--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.projects" /></td></tr>
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
    <td><a href="#projects_translate_text"><CopyableCode code="projects_translate_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Translates input text and returns translated text.</td>
</tr>
<tr>
    <td><a href="#projects_romanize_text"><CopyableCode code="projects_romanize_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Romanize input text written in non-Latin scripts to Latin text.</td>
</tr>
<tr>
    <td><a href="#projects_detect_language"><CopyableCode code="projects_detect_language" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Detects the language of text within a request.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="projects_translate_text"
    values={[
        { label: 'projects_translate_text', value: 'projects_translate_text' },
        { label: 'projects_romanize_text', value: 'projects_romanize_text' },
        { label: 'projects_detect_language', value: 'projects_detect_language' }
    ]}
>
<TabItem value="projects_translate_text">

Translates input text and returns translated text.

```sql
EXEC google.translate.projects.projects_translate_text 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"mimeType": "{{ mimeType }}", 
"sourceLanguageCode": "{{ sourceLanguageCode }}", 
"targetLanguageCode": "{{ targetLanguageCode }}", 
"model": "{{ model }}", 
"glossaryConfig": "{{ glossaryConfig }}", 
"transliterationConfig": "{{ transliterationConfig }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_romanize_text">

Romanize input text written in non-Latin scripts to Latin text.

```sql
EXEC google.translate.projects.projects_romanize_text 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"sourceLanguageCode": "{{ sourceLanguageCode }}"
}';
```
</TabItem>
<TabItem value="projects_detect_language">

Detects the language of text within a request.

```sql
EXEC google.translate.projects.projects_detect_language 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"content": "{{ content }}", 
"mimeType": "{{ mimeType }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
