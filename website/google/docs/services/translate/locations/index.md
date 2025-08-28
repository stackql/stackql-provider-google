--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'projects_locations_list', value: 'projects_locations_list' }
    ]}
>
<TabItem value="projects_locations_get">

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
    <td>Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name for this location, typically a nearby city name. For example, "Tokyo".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cross-service attributes for the location. For example &#123;"cloud.googleapis.com/region": "us-east1"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The canonical id for this location. For example: `"us-east1"`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata. For example the available capacity at the given location.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_list">

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
    <td>Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name for this location, typically a nearby city name. For example, "Tokyo".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cross-service attributes for the location. For example &#123;"cloud.googleapis.com/region": "us-east1"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The canonical id for this location. For example: `"us-east1"`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata. For example the available capacity at the given location.</td>
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
    <td><a href="#projects_locations_get"><CopyableCode code="projects_locations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_list"><CopyableCode code="projects_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#projects_locations_translate_text"><CopyableCode code="projects_locations_translate_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Translates input text and returns translated text.</td>
</tr>
<tr>
    <td><a href="#projects_locations_romanize_text"><CopyableCode code="projects_locations_romanize_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Romanize input text written in non-Latin scripts to Latin text.</td>
</tr>
<tr>
    <td><a href="#projects_locations_detect_language"><CopyableCode code="projects_locations_detect_language" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Detects the language of text within a request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_translate_document"><CopyableCode code="projects_locations_translate_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Translates documents in synchronous mode.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batch_translate_text"><CopyableCode code="projects_locations_batch_translate_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batch_translate_document"><CopyableCode code="projects_locations_batch_translate_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_translate"><CopyableCode code="projects_locations_adaptive_mt_translate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Translate text using Adaptive MT.</td>
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
<tr id="parameter-extraLocationTypes">
    <td><CopyableCode code="extraLocationTypes" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'projects_locations_list', value: 'projects_locations_list' }
    ]}
>
<TabItem value="projects_locations_get">

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.translate.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.translate.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_translate_text"
    values={[
        { label: 'projects_locations_translate_text', value: 'projects_locations_translate_text' },
        { label: 'projects_locations_romanize_text', value: 'projects_locations_romanize_text' },
        { label: 'projects_locations_detect_language', value: 'projects_locations_detect_language' },
        { label: 'projects_locations_translate_document', value: 'projects_locations_translate_document' },
        { label: 'projects_locations_batch_translate_text', value: 'projects_locations_batch_translate_text' },
        { label: 'projects_locations_batch_translate_document', value: 'projects_locations_batch_translate_document' },
        { label: 'projects_locations_adaptive_mt_translate', value: 'projects_locations_adaptive_mt_translate' }
    ]}
>
<TabItem value="projects_locations_translate_text">

Translates input text and returns translated text.

```sql
EXEC google.translate.locations.projects_locations_translate_text 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
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
<TabItem value="projects_locations_romanize_text">

Romanize input text written in non-Latin scripts to Latin text.

```sql
EXEC google.translate.locations.projects_locations_romanize_text 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"sourceLanguageCode": "{{ sourceLanguageCode }}"
}';
```
</TabItem>
<TabItem value="projects_locations_detect_language">

Detects the language of text within a request.

```sql
EXEC google.translate.locations.projects_locations_detect_language 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"content": "{{ content }}", 
"mimeType": "{{ mimeType }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_translate_document">

Translates documents in synchronous mode.

```sql
EXEC google.translate.locations.projects_locations_translate_document 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"sourceLanguageCode": "{{ sourceLanguageCode }}", 
"targetLanguageCode": "{{ targetLanguageCode }}", 
"documentInputConfig": "{{ documentInputConfig }}", 
"documentOutputConfig": "{{ documentOutputConfig }}", 
"model": "{{ model }}", 
"glossaryConfig": "{{ glossaryConfig }}", 
"labels": "{{ labels }}", 
"customizedAttribution": "{{ customizedAttribution }}", 
"isTranslateNativePdfOnly": {{ isTranslateNativePdfOnly }}, 
"enableShadowRemovalNativePdf": {{ enableShadowRemovalNativePdf }}, 
"enableRotationCorrection": {{ enableRotationCorrection }}
}';
```
</TabItem>
<TabItem value="projects_locations_batch_translate_text">

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

```sql
EXEC google.translate.locations.projects_locations_batch_translate_text 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"sourceLanguageCode": "{{ sourceLanguageCode }}", 
"targetLanguageCodes": "{{ targetLanguageCodes }}", 
"models": "{{ models }}", 
"inputConfigs": "{{ inputConfigs }}", 
"outputConfig": "{{ outputConfig }}", 
"glossaries": "{{ glossaries }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_batch_translate_document">

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

```sql
EXEC google.translate.locations.projects_locations_batch_translate_document 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"sourceLanguageCode": "{{ sourceLanguageCode }}", 
"targetLanguageCodes": "{{ targetLanguageCodes }}", 
"inputConfigs": "{{ inputConfigs }}", 
"outputConfig": "{{ outputConfig }}", 
"models": "{{ models }}", 
"glossaries": "{{ glossaries }}", 
"formatConversions": "{{ formatConversions }}", 
"customizedAttribution": "{{ customizedAttribution }}", 
"enableShadowRemovalNativePdf": {{ enableShadowRemovalNativePdf }}, 
"enableRotationCorrection": {{ enableRotationCorrection }}
}';
```
</TabItem>
<TabItem value="projects_locations_adaptive_mt_translate">

Translate text using Adaptive MT.

```sql
EXEC google.translate.locations.projects_locations_adaptive_mt_translate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"dataset": "{{ dataset }}", 
"content": "{{ content }}", 
"referenceSentenceConfig": "{{ referenceSentenceConfig }}", 
"glossaryConfig": "{{ glossaryConfig }}"
}';
```
</TabItem>
</Tabs>
