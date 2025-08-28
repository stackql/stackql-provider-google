--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
  - logging
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_metrics_get"
    values={[
        { label: 'projects_metrics_get', value: 'projects_metrics_get' },
        { label: 'projects_metrics_list', value: 'projects_metrics_list' }
    ]}
>
<TabItem value="projects_metrics_get">

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
    <td>Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".</td>
</tr>
<tr>
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values. (id: BucketOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the metric.This field may not be present for older metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to True, then this metric is disabled and it does not generate any points.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity&gt;=ERROR" The maximum length of the filter is 20000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labelExtractors" /></td>
    <td><code>object</code></td>
    <td>Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.</td>
</tr>
<tr>
    <td><CopyableCode code="metricDescriptor" /></td>
    <td><code>object</code></td>
    <td>Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description. (id: MetricDescriptor)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" </td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the metric.This field may not be present for older metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="valueExtractor" /></td>
    <td><code>string</code></td>
    <td>Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_metrics_list">

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
    <td>Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".</td>
</tr>
<tr>
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values. (id: BucketOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the metric.This field may not be present for older metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to True, then this metric is disabled and it does not generate any points.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity&gt;=ERROR" The maximum length of the filter is 20000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labelExtractors" /></td>
    <td><code>object</code></td>
    <td>Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.</td>
</tr>
<tr>
    <td><CopyableCode code="metricDescriptor" /></td>
    <td><code>object</code></td>
    <td>Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description. (id: MetricDescriptor)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" </td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the metric.This field may not be present for older metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="valueExtractor" /></td>
    <td><code>string</code></td>
    <td>Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.</td>
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
    <td><a href="#projects_metrics_get"><CopyableCode code="projects_metrics_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-metricsId"><code>metricsId</code></a></td>
    <td></td>
    <td>Gets a logs-based metric.</td>
</tr>
<tr>
    <td><a href="#projects_metrics_list"><CopyableCode code="projects_metrics_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists logs-based metrics.</td>
</tr>
<tr>
    <td><a href="#projects_metrics_create"><CopyableCode code="projects_metrics_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a logs-based metric.</td>
</tr>
<tr>
    <td><a href="#projects_metrics_update"><CopyableCode code="projects_metrics_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-metricsId"><code>metricsId</code></a></td>
    <td></td>
    <td>Creates or updates a logs-based metric.</td>
</tr>
<tr>
    <td><a href="#projects_metrics_delete"><CopyableCode code="projects_metrics_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-metricsId"><code>metricsId</code></a></td>
    <td></td>
    <td>Deletes a logs-based metric.</td>
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
<tr id="parameter-metricsId">
    <td><CopyableCode code="metricsId" /></td>
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
    defaultValue="projects_metrics_get"
    values={[
        { label: 'projects_metrics_get', value: 'projects_metrics_get' },
        { label: 'projects_metrics_list', value: 'projects_metrics_list' }
    ]}
>
<TabItem value="projects_metrics_get">

Gets a logs-based metric.

```sql
SELECT
name,
bucketName,
bucketOptions,
createTime,
description,
disabled,
filter,
labelExtractors,
metricDescriptor,
resourceName,
updateTime,
valueExtractor,
version
FROM google.logging.metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND metricsId = '{{ metricsId }}' -- required;
```
</TabItem>
<TabItem value="projects_metrics_list">

Lists logs-based metrics.

```sql
SELECT
name,
bucketName,
bucketOptions,
createTime,
description,
disabled,
filter,
labelExtractors,
metricDescriptor,
resourceName,
updateTime,
valueExtractor,
version
FROM google.logging.metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_metrics_create"
    values={[
        { label: 'projects_metrics_create', value: 'projects_metrics_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_metrics_create">

Creates a logs-based metric.

```sql
INSERT INTO google.logging.metrics (
data__name,
data__description,
data__filter,
data__bucketName,
data__disabled,
data__metricDescriptor,
data__valueExtractor,
data__labelExtractors,
data__bucketOptions,
data__version,
projectsId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ bucketName }}',
{{ disabled }},
'{{ metricDescriptor }}',
'{{ valueExtractor }}',
'{{ labelExtractors }}',
'{{ bucketOptions }}',
'{{ version }}',
'{{ projectsId }}'
RETURNING
name,
bucketName,
bucketOptions,
createTime,
description,
disabled,
filter,
labelExtractors,
metricDescriptor,
resourceName,
updateTime,
valueExtractor,
version
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: metrics
  props:
    - name: projectsId
      value: string
      description: Required parameter for the metrics resource.
    - name: name
      value: string
      description: >
        Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".
        
    - name: description
      value: string
      description: >
        Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.
        
    - name: filter
      value: string
      description: >
        Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters.
        
    - name: bucketName
      value: string
      description: >
        Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.
        
    - name: disabled
      value: boolean
      description: >
        Optional. If set to True, then this metric is disabled and it does not generate any points.
        
    - name: metricDescriptor
      value: object
      description: >
        Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.
        
    - name: valueExtractor
      value: string
      description: >
        Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")
        
    - name: labelExtractors
      value: object
      description: >
        Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.
        
    - name: bucketOptions
      value: object
      description: >
        Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values.
        
    - name: version
      value: string
      description: >
        Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.
        
      valid_values: ['V2', 'V1']
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_metrics_update"
    values={[
        { label: 'projects_metrics_update', value: 'projects_metrics_update' }
    ]}
>
<TabItem value="projects_metrics_update">

Creates or updates a logs-based metric.

```sql
REPLACE google.logging.metrics
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__bucketName = '{{ bucketName }}',
data__disabled = {{ disabled }},
data__metricDescriptor = '{{ metricDescriptor }}',
data__valueExtractor = '{{ valueExtractor }}',
data__labelExtractors = '{{ labelExtractors }}',
data__bucketOptions = '{{ bucketOptions }}',
data__version = '{{ version }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND metricsId = '{{ metricsId }}' --required
RETURNING
name,
bucketName,
bucketOptions,
createTime,
description,
disabled,
filter,
labelExtractors,
metricDescriptor,
resourceName,
updateTime,
valueExtractor,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_metrics_delete"
    values={[
        { label: 'projects_metrics_delete', value: 'projects_metrics_delete' }
    ]}
>
<TabItem value="projects_metrics_delete">

Deletes a logs-based metric.

```sql
DELETE FROM google.logging.metrics
WHERE projectsId = '{{ projectsId }}' --required
AND metricsId = '{{ metricsId }}' --required;
```
</TabItem>
</Tabs>
