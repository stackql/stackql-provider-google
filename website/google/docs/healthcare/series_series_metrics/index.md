--- 
title: series_series_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - series_series_metrics
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

Creates, updates, deletes, gets or lists a <code>series_series_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>series_series_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.series_series_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_series_metrics"
    values={[
        { label: 'get_series_metrics', value: 'get_series_metrics' }
    ]}
>
<TabItem value="get_series_metrics">

SeriesMetrics contains metrics describing a DICOM series.

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
    <td><CopyableCode code="blobStorageSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Total blob storage bytes for all instances in the series.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of instances in the series.</td>
</tr>
<tr>
    <td><CopyableCode code="series" /></td>
    <td><code>string</code></td>
    <td>The series resource path. For example, `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/dicomStores/&#123;dicom_store_id&#125;/dicomWeb/studies/&#123;study_uid&#125;/series/&#123;series_uid&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="structuredStorageSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Total structured storage bytes for all instances in the series.</td>
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
    <td><a href="#get_series_metrics"><CopyableCode code="get_series_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a></td>
    <td></td>
    <td>GetSeriesMetrics returns metrics for a series.</td>
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
    defaultValue="get_series_metrics"
    values={[
        { label: 'get_series_metrics', value: 'get_series_metrics' }
    ]}
>
<TabItem value="get_series_metrics">

GetSeriesMetrics returns metrics for a series.

```sql
SELECT
blobStorageSizeBytes,
instanceCount,
series,
structuredStorageSizeBytes
FROM google.healthcare.series_series_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dicomStoresId = '{{ dicomStoresId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND seriesId = '{{ seriesId }}' -- required;
```
</TabItem>
</Tabs>
