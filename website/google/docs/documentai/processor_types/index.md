--- 
title: processor_types
hide_title: false
hide_table_of_contents: false
keywords:
  - processor_types
  - documentai
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

Creates, updates, deletes, gets or lists a <code>processor_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>processor_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.processor_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_processor_types_get"
    values={[
        { label: 'projects_locations_processor_types_get', value: 'projects_locations_processor_types_get' },
        { label: 'projects_locations_fetch_processor_types', value: 'projects_locations_fetch_processor_types' },
        { label: 'projects_locations_processor_types_list', value: 'projects_locations_processor_types_list' }
    ]}
>
<TabItem value="projects_locations_processor_types_get">

A processor type is responsible for performing a certain document understanding task on a certain type of document.

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
    <td>The resource name of the processor type. Format: `projects/&#123;project&#125;/processorTypes/&#123;processor_type&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowCreation" /></td>
    <td><code>boolean</code></td>
    <td>Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access.</td>
</tr>
<tr>
    <td><CopyableCode code="availableLocations" /></td>
    <td><code>array</code></td>
    <td>The locations in which this processor is available.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The processor category, used by UI to group processor types.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Launch stage of the processor type</td>
</tr>
<tr>
    <td><CopyableCode code="sampleDocumentUris" /></td>
    <td><code>array</code></td>
    <td>A set of Cloud Storage URIs of sample documents for this processor.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The processor type, such as: `OCR_PROCESSOR`, `INVOICE_PROCESSOR`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_fetch_processor_types">

Response message for the FetchProcessorTypes method.

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
    <td><CopyableCode code="processorTypes" /></td>
    <td><code>array</code></td>
    <td>The list of processor types.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_processor_types_list">

Response message for the ListProcessorTypes method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Points to the next page, otherwise empty.</td>
</tr>
<tr>
    <td><CopyableCode code="processorTypes" /></td>
    <td><code>array</code></td>
    <td>The processor types.</td>
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
    <td><a href="#projects_locations_processor_types_get"><CopyableCode code="projects_locations_processor_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorTypesId"><code>processorTypesId</code></a></td>
    <td></td>
    <td>Gets a processor type detail.</td>
</tr>
<tr>
    <td><a href="#projects_locations_fetch_processor_types"><CopyableCode code="projects_locations_fetch_processor_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_processor_types_list"><CopyableCode code="projects_locations_processor_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the processor types that exist.</td>
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
<tr id="parameter-processorTypesId">
    <td><CopyableCode code="processorTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_locations_processor_types_get"
    values={[
        { label: 'projects_locations_processor_types_get', value: 'projects_locations_processor_types_get' },
        { label: 'projects_locations_fetch_processor_types', value: 'projects_locations_fetch_processor_types' },
        { label: 'projects_locations_processor_types_list', value: 'projects_locations_processor_types_list' }
    ]}
>
<TabItem value="projects_locations_processor_types_get">

Gets a processor type detail.

```sql
SELECT
name,
allowCreation,
availableLocations,
category,
launchStage,
sampleDocumentUris,
type
FROM google.documentai.processor_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processorTypesId = '{{ processorTypesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_fetch_processor_types">

Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.

```sql
SELECT
processorTypes
FROM google.documentai.processor_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_processor_types_list">

Lists the processor types that exist.

```sql
SELECT
nextPageToken,
processorTypes
FROM google.documentai.processor_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
