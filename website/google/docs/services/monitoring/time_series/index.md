--- 
title: time_series
hide_title: false
hide_table_of_contents: false
keywords:
  - time_series
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>time_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>time_series</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.time_series" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_time_series_list"
    values={[
        { label: 'projects_time_series_list', value: 'projects_time_series_list' },
        { label: 'organizations_time_series_list', value: 'organizations_time_series_list' },
        { label: 'folders_time_series_list', value: 'folders_time_series_list' }
    ]}
>
<TabItem value="projects_time_series_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Input only. A detailed description of the time series that will be associated with the google.api.MetricDescriptor for the metric. Once set, this field cannot be changed through CreateTimeSeries.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. The associated monitored resource metadata. When reading a time series, this field will include metadata labels that are explicitly named in the reduction. When creating a time series, this field is ignored. (id: MonitoredResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>The associated metric. A fully-specified metric used to identify the time series. (id: Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="metricKind" /></td>
    <td><code>string</code></td>
    <td>The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="points" /></td>
    <td><code>array</code></td>
    <td>The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data. For more information, see Monitored resources for custom metrics (https://cloud.google.com/monitoring/custom-metrics/creating-metrics#custom-metric-resources). (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. This field can only be changed through CreateTimeSeries when it is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_time_series_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Input only. A detailed description of the time series that will be associated with the google.api.MetricDescriptor for the metric. Once set, this field cannot be changed through CreateTimeSeries.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. The associated monitored resource metadata. When reading a time series, this field will include metadata labels that are explicitly named in the reduction. When creating a time series, this field is ignored. (id: MonitoredResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>The associated metric. A fully-specified metric used to identify the time series. (id: Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="metricKind" /></td>
    <td><code>string</code></td>
    <td>The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="points" /></td>
    <td><code>array</code></td>
    <td>The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data. For more information, see Monitored resources for custom metrics (https://cloud.google.com/monitoring/custom-metrics/creating-metrics#custom-metric-resources). (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. This field can only be changed through CreateTimeSeries when it is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_time_series_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Input only. A detailed description of the time series that will be associated with the google.api.MetricDescriptor for the metric. Once set, this field cannot be changed through CreateTimeSeries.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. The associated monitored resource metadata. When reading a time series, this field will include metadata labels that are explicitly named in the reduction. When creating a time series, this field is ignored. (id: MonitoredResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>The associated metric. A fully-specified metric used to identify the time series. (id: Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="metricKind" /></td>
    <td><code>string</code></td>
    <td>The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.</td>
</tr>
<tr>
    <td><CopyableCode code="points" /></td>
    <td><code>array</code></td>
    <td>The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data. For more information, see Monitored resources for custom metrics (https://cloud.google.com/monitoring/custom-metrics/creating-metrics#custom-metric-resources). (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. This field can only be changed through CreateTimeSeries when it is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.</td>
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
    <td><a href="#projects_time_series_list"><CopyableCode code="projects_time_series_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a>, <a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-aggregation.alignmentPeriod"><code>aggregation.alignmentPeriod</code></a>, <a href="#parameter-aggregation.perSeriesAligner"><code>aggregation.perSeriesAligner</code></a>, <a href="#parameter-aggregation.crossSeriesReducer"><code>aggregation.crossSeriesReducer</code></a>, <a href="#parameter-aggregation.groupByFields"><code>aggregation.groupByFields</code></a>, <a href="#parameter-secondaryAggregation.alignmentPeriod"><code>secondaryAggregation.alignmentPeriod</code></a>, <a href="#parameter-secondaryAggregation.perSeriesAligner"><code>secondaryAggregation.perSeriesAligner</code></a>, <a href="#parameter-secondaryAggregation.crossSeriesReducer"><code>secondaryAggregation.crossSeriesReducer</code></a>, <a href="#parameter-secondaryAggregation.groupByFields"><code>secondaryAggregation.groupByFields</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists time series that match a filter.</td>
</tr>
<tr>
    <td><a href="#organizations_time_series_list"><CopyableCode code="organizations_time_series_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a>, <a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-aggregation.alignmentPeriod"><code>aggregation.alignmentPeriod</code></a>, <a href="#parameter-aggregation.perSeriesAligner"><code>aggregation.perSeriesAligner</code></a>, <a href="#parameter-aggregation.crossSeriesReducer"><code>aggregation.crossSeriesReducer</code></a>, <a href="#parameter-aggregation.groupByFields"><code>aggregation.groupByFields</code></a>, <a href="#parameter-secondaryAggregation.alignmentPeriod"><code>secondaryAggregation.alignmentPeriod</code></a>, <a href="#parameter-secondaryAggregation.perSeriesAligner"><code>secondaryAggregation.perSeriesAligner</code></a>, <a href="#parameter-secondaryAggregation.crossSeriesReducer"><code>secondaryAggregation.crossSeriesReducer</code></a>, <a href="#parameter-secondaryAggregation.groupByFields"><code>secondaryAggregation.groupByFields</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists time series that match a filter.</td>
</tr>
<tr>
    <td><a href="#folders_time_series_list"><CopyableCode code="folders_time_series_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a>, <a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-aggregation.alignmentPeriod"><code>aggregation.alignmentPeriod</code></a>, <a href="#parameter-aggregation.perSeriesAligner"><code>aggregation.perSeriesAligner</code></a>, <a href="#parameter-aggregation.crossSeriesReducer"><code>aggregation.crossSeriesReducer</code></a>, <a href="#parameter-aggregation.groupByFields"><code>aggregation.groupByFields</code></a>, <a href="#parameter-secondaryAggregation.alignmentPeriod"><code>secondaryAggregation.alignmentPeriod</code></a>, <a href="#parameter-secondaryAggregation.perSeriesAligner"><code>secondaryAggregation.perSeriesAligner</code></a>, <a href="#parameter-secondaryAggregation.crossSeriesReducer"><code>secondaryAggregation.crossSeriesReducer</code></a>, <a href="#parameter-secondaryAggregation.groupByFields"><code>secondaryAggregation.groupByFields</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists time series that match a filter.</td>
</tr>
<tr>
    <td><a href="#projects_time_series_create"><CopyableCode code="projects_time_series_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This method does not support resource locations constraint of an organization policy (https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations#setting_the_organization_policy).</td>
</tr>
<tr>
    <td><a href="#projects_time_series_query"><CopyableCode code="projects_time_series_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Queries time series by using Monitoring Query Language (MQL). We recommend using PromQL instead of MQL. For more information about the status of MQL, see the MQL deprecation notice (https://cloud.google.com/stackdriver/docs/deprecations/mql).</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-aggregation.alignmentPeriod">
    <td><CopyableCode code="aggregation.alignmentPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-aggregation.crossSeriesReducer">
    <td><CopyableCode code="aggregation.crossSeriesReducer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-aggregation.groupByFields">
    <td><CopyableCode code="aggregation.groupByFields" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-aggregation.perSeriesAligner">
    <td><CopyableCode code="aggregation.perSeriesAligner" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.endTime">
    <td><CopyableCode code="interval.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.startTime">
    <td><CopyableCode code="interval.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-secondaryAggregation.alignmentPeriod">
    <td><CopyableCode code="secondaryAggregation.alignmentPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-secondaryAggregation.crossSeriesReducer">
    <td><CopyableCode code="secondaryAggregation.crossSeriesReducer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-secondaryAggregation.groupByFields">
    <td><CopyableCode code="secondaryAggregation.groupByFields" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-secondaryAggregation.perSeriesAligner">
    <td><CopyableCode code="secondaryAggregation.perSeriesAligner" /></td>
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
    defaultValue="projects_time_series_list"
    values={[
        { label: 'projects_time_series_list', value: 'projects_time_series_list' },
        { label: 'organizations_time_series_list', value: 'organizations_time_series_list' },
        { label: 'folders_time_series_list', value: 'folders_time_series_list' }
    ]}
>
<TabItem value="projects_time_series_list">

Lists time series that match a filter.

```sql
SELECT
description,
metadata,
metric,
metricKind,
points,
resource,
unit,
valueType
FROM google.monitoring.time_series
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND interval.endTime = '{{ interval.endTime }}'
AND interval.startTime = '{{ interval.startTime }}'
AND aggregation.alignmentPeriod = '{{ aggregation.alignmentPeriod }}'
AND aggregation.perSeriesAligner = '{{ aggregation.perSeriesAligner }}'
AND aggregation.crossSeriesReducer = '{{ aggregation.crossSeriesReducer }}'
AND aggregation.groupByFields = '{{ aggregation.groupByFields }}'
AND secondaryAggregation.alignmentPeriod = '{{ secondaryAggregation.alignmentPeriod }}'
AND secondaryAggregation.perSeriesAligner = '{{ secondaryAggregation.perSeriesAligner }}'
AND secondaryAggregation.crossSeriesReducer = '{{ secondaryAggregation.crossSeriesReducer }}'
AND secondaryAggregation.groupByFields = '{{ secondaryAggregation.groupByFields }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_time_series_list">

Lists time series that match a filter.

```sql
SELECT
description,
metadata,
metric,
metricKind,
points,
resource,
unit,
valueType
FROM google.monitoring.time_series
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND interval.endTime = '{{ interval.endTime }}'
AND interval.startTime = '{{ interval.startTime }}'
AND aggregation.alignmentPeriod = '{{ aggregation.alignmentPeriod }}'
AND aggregation.perSeriesAligner = '{{ aggregation.perSeriesAligner }}'
AND aggregation.crossSeriesReducer = '{{ aggregation.crossSeriesReducer }}'
AND aggregation.groupByFields = '{{ aggregation.groupByFields }}'
AND secondaryAggregation.alignmentPeriod = '{{ secondaryAggregation.alignmentPeriod }}'
AND secondaryAggregation.perSeriesAligner = '{{ secondaryAggregation.perSeriesAligner }}'
AND secondaryAggregation.crossSeriesReducer = '{{ secondaryAggregation.crossSeriesReducer }}'
AND secondaryAggregation.groupByFields = '{{ secondaryAggregation.groupByFields }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_time_series_list">

Lists time series that match a filter.

```sql
SELECT
description,
metadata,
metric,
metricKind,
points,
resource,
unit,
valueType
FROM google.monitoring.time_series
WHERE foldersId = '{{ foldersId }}' -- required
AND filter = '{{ filter }}'
AND interval.endTime = '{{ interval.endTime }}'
AND interval.startTime = '{{ interval.startTime }}'
AND aggregation.alignmentPeriod = '{{ aggregation.alignmentPeriod }}'
AND aggregation.perSeriesAligner = '{{ aggregation.perSeriesAligner }}'
AND aggregation.crossSeriesReducer = '{{ aggregation.crossSeriesReducer }}'
AND aggregation.groupByFields = '{{ aggregation.groupByFields }}'
AND secondaryAggregation.alignmentPeriod = '{{ secondaryAggregation.alignmentPeriod }}'
AND secondaryAggregation.perSeriesAligner = '{{ secondaryAggregation.perSeriesAligner }}'
AND secondaryAggregation.crossSeriesReducer = '{{ secondaryAggregation.crossSeriesReducer }}'
AND secondaryAggregation.groupByFields = '{{ secondaryAggregation.groupByFields }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_time_series_create"
    values={[
        { label: 'projects_time_series_create', value: 'projects_time_series_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_time_series_create">

Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This method does not support resource locations constraint of an organization policy (https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations#setting_the_organization_policy).

```sql
INSERT INTO google.monitoring.time_series (
data__timeSeries,
projectsId
)
SELECT 
'{{ timeSeries }}',
'{{ projectsId }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: time_series
  props:
    - name: projectsId
      value: string
      description: Required parameter for the time_series resource.
    - name: timeSeries
      value: array
      description: >
        Required. The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.The maximum number of TimeSeries objects per Create request is 200.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_time_series_query"
    values={[
        { label: 'projects_time_series_query', value: 'projects_time_series_query' }
    ]}
>
<TabItem value="projects_time_series_query">

Queries time series by using Monitoring Query Language (MQL). We recommend using PromQL instead of MQL. For more information about the status of MQL, see the MQL deprecation notice (https://cloud.google.com/stackdriver/docs/deprecations/mql).

```sql
EXEC google.monitoring.time_series.projects_time_series_query 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
