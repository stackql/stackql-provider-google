--- 
title: dicom_store_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - dicom_store_metrics
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

Creates, updates, deletes, gets or lists a <code>dicom_store_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dicom_store_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.dicom_store_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dicomstore_metrics"
    values={[
        { label: 'get_dicomstore_metrics', value: 'get_dicomstore_metrics' }
    ]}
>
<TabItem value="get_dicomstore_metrics">

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
    <td>Resource name of the DICOM store, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/dicomStores/&#123;dicom_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="blobStorageSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Total blob storage bytes for all instances in the store.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of instances in the store.</td>
</tr>
<tr>
    <td><CopyableCode code="seriesCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of series in the store.</td>
</tr>
<tr>
    <td><CopyableCode code="structuredStorageSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Total structured storage bytes for all instances in the store.</td>
</tr>
<tr>
    <td><CopyableCode code="studyCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of studies in the store.</td>
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
    <td><a href="#get_dicomstore_metrics"><CopyableCode code="get_dicomstore_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>Gets metrics associated with the DICOM store.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dicomstore_metrics"
    values={[
        { label: 'get_dicomstore_metrics', value: 'get_dicomstore_metrics' }
    ]}
>
<TabItem value="get_dicomstore_metrics">

Gets metrics associated with the DICOM store.

```sql
SELECT
name,
blobStorageSizeBytes,
instanceCount,
seriesCount,
structuredStorageSizeBytes,
studyCount
FROM google.healthcare.dicom_store_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dicomStoresId = '{{ dicomStoresId }}' -- required;
```
</TabItem>
</Tabs>
