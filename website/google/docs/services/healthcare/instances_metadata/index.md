--- 
title: instances_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_metadata
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

Creates, updates, deletes, gets or lists an <code>instances_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_metadata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.instances_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="retrieve_metadata"
    values={[
        { label: 'retrieve_metadata', value: 'retrieve_metadata' }
    ]}
>
<TabItem value="retrieve_metadata">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
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
    <td><a href="#retrieve_metadata"><CopyableCode code="retrieve_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveInstanceMetadata, see [Metadata resources](https://cloud.google.com/healthcare/docs/dicom#metadata_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveInstanceMetadata, see [Retrieve metadata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-metadata).</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dicomStoresId">
    <td><CopyableCode code="dicomStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-seriesId">
    <td><CopyableCode code="seriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="retrieve_metadata"
    values={[
        { label: 'retrieve_metadata', value: 'retrieve_metadata' }
    ]}
>
<TabItem value="retrieve_metadata">

RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveInstanceMetadata, see [Metadata resources](https://cloud.google.com/healthcare/docs/dicom#metadata_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveInstanceMetadata, see [Retrieve metadata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-metadata).

```sql
SELECT
contentType,
data,
extensions
FROM google.healthcare.instances_metadata
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dicomStoresId = '{{ dicomStoresId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND seriesId = '{{ seriesId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
</Tabs>
