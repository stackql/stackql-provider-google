--- 
title: data_layers
hide_title: false
hide_table_of_contents: false
keywords:
  - data_layers
  - solar
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

Creates, updates, deletes, gets or lists a <code>data_layers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_layers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.solar.data_layers" /></td></tr>
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
    <td><CopyableCode code="annualFluxUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the annual flux map (annual sunlight on roofs) of the region. Values are kWh/kW/year. This is *unmasked flux*: flux is computed for every location, not just building rooftops. Invalid locations are stored as -9999: locations outside our coverage area will be invalid, and a few locations inside the coverage area, where we were unable to calculate flux, will also be invalid.</td>
</tr>
<tr>
    <td><CopyableCode code="dsmUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for an image of the DSM (Digital Surface Model) of the region. Values are in meters above EGM96 geoid (i.e., sea level). Invalid locations (where we don't have data) are stored as -9999.</td>
</tr>
<tr>
    <td><CopyableCode code="hourlyShadeUrls" /></td>
    <td><code>array</code></td>
    <td>Twelve URLs for hourly shade, corresponding to January...December, in order. Each GeoTIFF will contain 24 bands, corresponding to the 24 hours of the day. Each pixel is a 32 bit integer, corresponding to the (up to) 31 days of that month; a 1 bit means that the corresponding location is able to see the sun at that day, of that hour, of that month. Invalid locations are stored as -9999 (since this is negative, it has bit 31 set, and no valid value could have bit 31 set as that would correspond to the 32nd day of the month). An example may be useful. If you want to know whether a point (at pixel location (x, y)) saw sun at 4pm on the 22nd of June you would: 1. fetch the sixth URL in this list (corresponding to June). 1. look up the 17th channel (corresponding to 4pm). 1. read the 32-bit value at (x, y). 1. read bit 21 of the value (corresponding to the 22nd of the month). 1. if that bit is a 1, then that spot saw the sun at 4pm 22 June. More formally: Given `month` (1-12), `day` (1...month max; February has 28 days) and `hour` (0-23), the shade/sun for that month/day/hour at a position `(x, y)` is the bit ``` (hourly_shade[month - 1])(x, y)[hour] & (1 &lt;&lt; (day - 1)) ``` where `(x, y)` is spatial indexing, `[month - 1]` refers to fetching the `month - 1`st URL (indexing from zero), `[hour]` is indexing into the channels, and a final non-zero result means "sunny". There are no leap days, and DST doesn't exist (all days are 24 hours long; noon is always "standard time" noon).</td>
</tr>
<tr>
    <td><CopyableCode code="imageryDate" /></td>
    <td><code>object</code></td>
    <td>When the source imagery (from which all the other data are derived) in this region was taken. It is necessarily somewhat approximate, as the images may have been taken over more than one day. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="imageryProcessedDate" /></td>
    <td><code>object</code></td>
    <td>When processing was completed on this imagery. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="imageryQuality" /></td>
    <td><code>string</code></td>
    <td>The quality of the result's imagery.</td>
</tr>
<tr>
    <td><CopyableCode code="maskUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the building mask image: one bit per pixel saying whether that pixel is considered to be part of a rooftop or not.</td>
</tr>
<tr>
    <td><CopyableCode code="monthlyFluxUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the monthly flux map (sunlight on roofs, broken down by month) of the region. Values are kWh/kW/year. The GeoTIFF pointed to by this URL will contain twelve bands, corresponding to January...December, in order.</td>
</tr>
<tr>
    <td><CopyableCode code="rgbUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for an image of RGB data (aerial photo) of the region.</td>
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
    <td></td>
    <td><a href="#parameter-location.latitude"><code>location.latitude</code></a>, <a href="#parameter-location.longitude"><code>location.longitude</code></a>, <a href="#parameter-radiusMeters"><code>radiusMeters</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-requiredQuality"><code>requiredQuality</code></a>, <a href="#parameter-pixelSizeMeters"><code>pixelSizeMeters</code></a>, <a href="#parameter-exactQualityRequired"><code>exactQualityRequired</code></a>, <a href="#parameter-experiments"><code>experiments</code></a></td>
    <td>Gets solar information for a region surrounding a location. Returns an error with code `NOT_FOUND` if the location is outside the coverage area.</td>
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
<tr id="parameter-exactQualityRequired">
    <td><CopyableCode code="exactQualityRequired" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-experiments">
    <td><CopyableCode code="experiments" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location.latitude">
    <td><CopyableCode code="location.latitude" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr id="parameter-location.longitude">
    <td><CopyableCode code="location.longitude" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr id="parameter-pixelSizeMeters">
    <td><CopyableCode code="pixelSizeMeters" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr id="parameter-radiusMeters">
    <td><CopyableCode code="radiusMeters" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr id="parameter-requiredQuality">
    <td><CopyableCode code="requiredQuality" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets solar information for a region surrounding a location. Returns an error with code `NOT_FOUND` if the location is outside the coverage area.

```sql
SELECT
annualFluxUrl,
dsmUrl,
hourlyShadeUrls,
imageryDate,
imageryProcessedDate,
imageryQuality,
maskUrl,
monthlyFluxUrl,
rgbUrl
FROM google.solar.data_layers
WHERE location.latitude = '{{ location.latitude }}'
AND location.longitude = '{{ location.longitude }}'
AND radiusMeters = '{{ radiusMeters }}'
AND view = '{{ view }}'
AND requiredQuality = '{{ requiredQuality }}'
AND pixelSizeMeters = '{{ pixelSizeMeters }}'
AND exactQualityRequired = '{{ exactQualityRequired }}'
AND experiments = '{{ experiments }}';
```
</TabItem>
</Tabs>
