--- 
title: metric_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_descriptors
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

Creates, updates, deletes, gets or lists a <code>metric_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>metric_descriptors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.metric_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_metric_descriptors_get"
    values={[
        { label: 'projects_metric_descriptors_get', value: 'projects_metric_descriptors_get' },
        { label: 'projects_metric_descriptors_list', value: 'projects_metric_descriptors_list' }
    ]}
>
<TabItem value="projects_metric_descriptors_get">

Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.

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
    <td>The resource name of the metric descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the metric, which can be used in documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. The launch stage of the metric definition.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata which can be used to guide usage of the metric. (id: MetricDescriptorMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metricKind" /></td>
    <td><code>string</code></td>
    <td>Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoredResourceTypes" /></td>
    <td><code>array</code></td>
    <td>Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" </td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s&#123;CPU&#125; (or equivalently 1s&#123;CPU&#125; or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks&#123;CPU&#125;, and then write the value 12.005 (which is 12005/1000), or use Kis&#123;CPU&#125; and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/&#123;email&#125; or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k&#123;watt&#125;.h.The grammar for a unit is as follows: Expression = Component &#123; "." Component &#125; &#123; "/" Component &#125; ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "&#123;" NAME "&#125;" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, &#123;request&#125;/s == 1/s, By&#123;transmitted&#125;/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing &#123; or &#125;. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or &#123;new-users&#125;/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k&#123;page_views&#125;/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent").</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_metric_descriptors_list">

The ListMetricDescriptors response.

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
    <td><CopyableCode code="metricDescriptors" /></td>
    <td><code>array</code></td>
    <td>The metric descriptors that are available to the project and that match the value of filter, if present.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.</td>
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
    <td><a href="#projects_metric_descriptors_get"><CopyableCode code="projects_metric_descriptors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-metricDescriptorsId"><code>metricDescriptorsId</code></a></td>
    <td></td>
    <td>Gets a single metric descriptor.</td>
</tr>
<tr>
    <td><a href="#projects_metric_descriptors_list"><CopyableCode code="projects_metric_descriptors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-activeOnly"><code>activeOnly</code></a></td>
    <td>Lists metric descriptors that match a filter.</td>
</tr>
<tr>
    <td><a href="#projects_metric_descriptors_create"><CopyableCode code="projects_metric_descriptors_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.</td>
</tr>
<tr>
    <td><a href="#projects_metric_descriptors_delete"><CopyableCode code="projects_metric_descriptors_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-metricDescriptorsId"><code>metricDescriptorsId</code></a></td>
    <td></td>
    <td>Deletes a metric descriptor. Only user-created custom metrics (https://cloud.google.com/monitoring/custom-metrics) can be deleted.</td>
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
<tr id="parameter-metricDescriptorsId">
    <td><CopyableCode code="metricDescriptorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-activeOnly">
    <td><CopyableCode code="activeOnly" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_metric_descriptors_get"
    values={[
        { label: 'projects_metric_descriptors_get', value: 'projects_metric_descriptors_get' },
        { label: 'projects_metric_descriptors_list', value: 'projects_metric_descriptors_list' }
    ]}
>
<TabItem value="projects_metric_descriptors_get">

Gets a single metric descriptor.

```sql
SELECT
name,
description,
displayName,
labels,
launchStage,
metadata,
metricKind,
monitoredResourceTypes,
type,
unit,
valueType
FROM google.monitoring.metric_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND metricDescriptorsId = '{{ metricDescriptorsId }}' -- required;
```
</TabItem>
<TabItem value="projects_metric_descriptors_list">

Lists metric descriptors that match a filter.

```sql
SELECT
metricDescriptors,
nextPageToken
FROM google.monitoring.metric_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND activeOnly = '{{ activeOnly }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_metric_descriptors_create"
    values={[
        { label: 'projects_metric_descriptors_create', value: 'projects_metric_descriptors_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_metric_descriptors_create">

Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.

```sql
INSERT INTO google.monitoring.metric_descriptors (
data__name,
data__type,
data__labels,
data__metricKind,
data__valueType,
data__unit,
data__description,
data__displayName,
data__metadata,
data__launchStage,
data__monitoredResourceTypes,
projectsId
)
SELECT 
'{{ name }}',
'{{ type }}',
'{{ labels }}',
'{{ metricKind }}',
'{{ valueType }}',
'{{ unit }}',
'{{ description }}',
'{{ displayName }}',
'{{ metadata }}',
'{{ launchStage }}',
'{{ monitoredResourceTypes }}',
'{{ projectsId }}'
RETURNING
name,
description,
displayName,
labels,
launchStage,
metadata,
metricKind,
monitoredResourceTypes,
type,
unit,
valueType
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: metric_descriptors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the metric_descriptors resource.
    - name: name
      value: string
      description: >
        The resource name of the metric descriptor.
        
    - name: type
      value: string
      description: >
        The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" 
        
    - name: labels
      value: array
      description: >
        The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
        
    - name: metricKind
      value: string
      description: >
        Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
        
      valid_values: ['METRIC_KIND_UNSPECIFIED', 'GAUGE', 'DELTA', 'CUMULATIVE']
    - name: valueType
      value: string
      description: >
        Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.
        
      valid_values: ['VALUE_TYPE_UNSPECIFIED', 'BOOL', 'INT64', 'DOUBLE', 'STRING', 'DISTRIBUTION', 'MONEY']
    - name: unit
      value: string
      description: >
        The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent").
        
    - name: description
      value: string
      description: >
        A detailed description of the metric, which can be used in documentation.
        
    - name: displayName
      value: string
      description: >
        A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
        
    - name: metadata
      value: object
      description: >
        Optional. Metadata which can be used to guide usage of the metric.
        
    - name: launchStage
      value: string
      description: >
        Optional. The launch stage of the metric definition.
        
      valid_values: ['LAUNCH_STAGE_UNSPECIFIED', 'UNIMPLEMENTED', 'PRELAUNCH', 'EARLY_ACCESS', 'ALPHA', 'BETA', 'GA', 'DEPRECATED']
    - name: monitoredResourceTypes
      value: array
      description: >
        Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_metric_descriptors_delete"
    values={[
        { label: 'projects_metric_descriptors_delete', value: 'projects_metric_descriptors_delete' }
    ]}
>
<TabItem value="projects_metric_descriptors_delete">

Deletes a metric descriptor. Only user-created custom metrics (https://cloud.google.com/monitoring/custom-metrics) can be deleted.

```sql
DELETE FROM google.monitoring.metric_descriptors
WHERE projectsId = '{{ projectsId }}' --required
AND metricDescriptorsId = '{{ metricDescriptorsId }}' --required;
```
</TabItem>
</Tabs>
