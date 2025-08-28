--- 
title: spark_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - spark_applications
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>spark_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>spark_applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.spark_applications" /></td></tr>
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
    <td><a href="#projects_locations_batches_spark_applications_write"><CopyableCode code="projects_locations_batches_spark_applications_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td></td>
    <td>Write wrapper objects from dataplane to spanner</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search"><CopyableCode code="projects_locations_batches_spark_applications_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a></td>
    <td><a href="#parameter-applicationStatus"><code>applicationStatus</code></a>, <a href="#parameter-minTime"><code>minTime</code></a>, <a href="#parameter-maxTime"><code>maxTime</code></a>, <a href="#parameter-minEndTime"><code>minEndTime</code></a>, <a href="#parameter-maxEndTime"><code>maxEndTime</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain high level information and list of Spark Applications corresponding to a batch</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access"><CopyableCode code="projects_locations_batches_spark_applications_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain high level information corresponding to a single Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_jobs"><CopyableCode code="projects_locations_batches_spark_applications_search_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-jobStatus"><code>jobStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain list of spark jobs corresponding to a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_job"><CopyableCode code="projects_locations_batches_spark_applications_access_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td>Obtain data corresponding to a spark job for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_stages"><CopyableCode code="projects_locations_batches_spark_applications_search_stages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageStatus"><code>stageStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a></td>
    <td>Obtain data corresponding to stages for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_stage_attempts"><CopyableCode code="projects_locations_batches_spark_applications_search_stage_attempts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a></td>
    <td>Obtain data corresponding to a spark stage attempts for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_stage_attempt"><CopyableCode code="projects_locations_batches_spark_applications_access_stage_attempt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a></td>
    <td>Obtain data corresponding to a spark stage attempt for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_stage_attempt_tasks"><CopyableCode code="projects_locations_batches_spark_applications_search_stage_attempt_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-sortRuntime"><code>sortRuntime</code></a>, <a href="#parameter-taskStatus"><code>taskStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_executors"><CopyableCode code="projects_locations_batches_spark_applications_search_executors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executorStatus"><code>executorStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain data corresponding to executors for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_executor_stage_summary"><CopyableCode code="projects_locations_batches_spark_applications_search_executor_stage_summary" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain executor summary with respect to a spark stage attempt.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_search_sql_queries"><CopyableCode code="projects_locations_batches_spark_applications_search_sql_queries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-details"><code>details</code></a>, <a href="#parameter-planDescription"><code>planDescription</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain data corresponding to SQL Queries for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_sql_query"><CopyableCode code="projects_locations_batches_spark_applications_access_sql_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-details"><code>details</code></a>, <a href="#parameter-planDescription"><code>planDescription</code></a></td>
    <td>Obtain data corresponding to a particular SQL Query for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_sql_plan"><CopyableCode code="projects_locations_batches_spark_applications_access_sql_plan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td>Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_stage_rdd_graph"><CopyableCode code="projects_locations_batches_spark_applications_access_stage_rdd_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a></td>
    <td>Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_access_environment_info"><CopyableCode code="projects_locations_batches_spark_applications_access_environment_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain environment details for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_summarize_jobs"><CopyableCode code="projects_locations_batches_spark_applications_summarize_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain summary of Jobs for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_summarize_stages"><CopyableCode code="projects_locations_batches_spark_applications_summarize_stages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain summary of Stages for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_summarize_stage_attempt_tasks"><CopyableCode code="projects_locations_batches_spark_applications_summarize_stage_attempt_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a></td>
    <td>Obtain summary of Tasks for a Spark Application Stage Attempt</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_spark_applications_summarize_executors"><CopyableCode code="projects_locations_batches_spark_applications_summarize_executors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain summary of Executor Summary for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_write"><CopyableCode code="projects_locations_sessions_spark_applications_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td></td>
    <td>Write wrapper objects from dataplane to spanner</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search"><CopyableCode code="projects_locations_sessions_spark_applications_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-applicationStatus"><code>applicationStatus</code></a>, <a href="#parameter-minTime"><code>minTime</code></a>, <a href="#parameter-maxTime"><code>maxTime</code></a>, <a href="#parameter-minEndTime"><code>minEndTime</code></a>, <a href="#parameter-maxEndTime"><code>maxEndTime</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain high level information and list of Spark Applications corresponding to a batch</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access"><CopyableCode code="projects_locations_sessions_spark_applications_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain high level information corresponding to a single Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_jobs"><CopyableCode code="projects_locations_sessions_spark_applications_search_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-jobStatus"><code>jobStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-jobIds"><code>jobIds</code></a></td>
    <td>Obtain list of spark jobs corresponding to a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_job"><CopyableCode code="projects_locations_sessions_spark_applications_access_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td>Obtain data corresponding to a spark job for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_stages"><CopyableCode code="projects_locations_sessions_spark_applications_search_stages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageStatus"><code>stageStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a>, <a href="#parameter-stageIds"><code>stageIds</code></a></td>
    <td>Obtain data corresponding to stages for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_stage_attempts"><CopyableCode code="projects_locations_sessions_spark_applications_search_stage_attempts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a></td>
    <td>Obtain data corresponding to a spark stage attempts for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_stage_attempt"><CopyableCode code="projects_locations_sessions_spark_applications_access_stage_attempt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-summaryMetricsMask"><code>summaryMetricsMask</code></a></td>
    <td>Obtain data corresponding to a spark stage attempt for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_stage_attempt_tasks"><CopyableCode code="projects_locations_sessions_spark_applications_search_stage_attempt_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-sortRuntime"><code>sortRuntime</code></a>, <a href="#parameter-taskStatus"><code>taskStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_executors"><CopyableCode code="projects_locations_sessions_spark_applications_search_executors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executorStatus"><code>executorStatus</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain data corresponding to executors for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_executor_stage_summary"><CopyableCode code="projects_locations_sessions_spark_applications_search_executor_stage_summary" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Obtain executor summary with respect to a spark stage attempt.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_search_sql_queries"><CopyableCode code="projects_locations_sessions_spark_applications_search_sql_queries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-details"><code>details</code></a>, <a href="#parameter-planDescription"><code>planDescription</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-operationIds"><code>operationIds</code></a></td>
    <td>Obtain data corresponding to SQL Queries for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_sql_query"><CopyableCode code="projects_locations_sessions_spark_applications_access_sql_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-details"><code>details</code></a>, <a href="#parameter-planDescription"><code>planDescription</code></a></td>
    <td>Obtain data corresponding to a particular SQL Query for a Spark Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_sql_plan"><CopyableCode code="projects_locations_sessions_spark_applications_access_sql_plan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td>Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_stage_rdd_graph"><CopyableCode code="projects_locations_sessions_spark_applications_access_stage_rdd_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a></td>
    <td>Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_access_environment_info"><CopyableCode code="projects_locations_sessions_spark_applications_access_environment_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain environment details for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_summarize_jobs"><CopyableCode code="projects_locations_sessions_spark_applications_summarize_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-jobIds"><code>jobIds</code></a></td>
    <td>Obtain summary of Jobs for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_summarize_stages"><CopyableCode code="projects_locations_sessions_spark_applications_summarize_stages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageIds"><code>stageIds</code></a></td>
    <td>Obtain summary of Stages for a Spark Application</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks"><CopyableCode code="projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-stageId"><code>stageId</code></a>, <a href="#parameter-stageAttemptId"><code>stageAttemptId</code></a></td>
    <td>Obtain summary of Tasks for a Spark Application Stage Attempt</td>
</tr>
<tr>
    <td><a href="#projects_locations_sessions_spark_applications_summarize_executors"><CopyableCode code="projects_locations_sessions_spark_applications_summarize_executors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-sparkApplicationsId"><code>sparkApplicationsId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Obtain summary of Executor Summary for a Spark Application</td>
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
<tr id="parameter-batchesId">
    <td><CopyableCode code="batchesId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sparkApplicationsId">
    <td><CopyableCode code="sparkApplicationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-applicationStatus">
    <td><CopyableCode code="applicationStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-details">
    <td><CopyableCode code="details" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-executionId">
    <td><CopyableCode code="executionId" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-executorStatus">
    <td><CopyableCode code="executorStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-jobIds">
    <td><CopyableCode code="jobIds" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-jobStatus">
    <td><CopyableCode code="jobStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxEndTime">
    <td><CopyableCode code="maxEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxTime">
    <td><CopyableCode code="maxTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-minEndTime">
    <td><CopyableCode code="minEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-minTime">
    <td><CopyableCode code="minTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-operationIds">
    <td><CopyableCode code="operationIds" /></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-planDescription">
    <td><CopyableCode code="planDescription" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-sortRuntime">
    <td><CopyableCode code="sortRuntime" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-stageAttemptId">
    <td><CopyableCode code="stageAttemptId" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-stageId">
    <td><CopyableCode code="stageId" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-stageIds">
    <td><CopyableCode code="stageIds" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-stageStatus">
    <td><CopyableCode code="stageStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-summaryMetricsMask">
    <td><CopyableCode code="summaryMetricsMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-taskStatus">
    <td><CopyableCode code="taskStatus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_batches_spark_applications_write"
    values={[
        { label: 'projects_locations_batches_spark_applications_write', value: 'projects_locations_batches_spark_applications_write' },
        { label: 'projects_locations_batches_spark_applications_search', value: 'projects_locations_batches_spark_applications_search' },
        { label: 'projects_locations_batches_spark_applications_access', value: 'projects_locations_batches_spark_applications_access' },
        { label: 'projects_locations_batches_spark_applications_search_jobs', value: 'projects_locations_batches_spark_applications_search_jobs' },
        { label: 'projects_locations_batches_spark_applications_access_job', value: 'projects_locations_batches_spark_applications_access_job' },
        { label: 'projects_locations_batches_spark_applications_search_stages', value: 'projects_locations_batches_spark_applications_search_stages' },
        { label: 'projects_locations_batches_spark_applications_search_stage_attempts', value: 'projects_locations_batches_spark_applications_search_stage_attempts' },
        { label: 'projects_locations_batches_spark_applications_access_stage_attempt', value: 'projects_locations_batches_spark_applications_access_stage_attempt' },
        { label: 'projects_locations_batches_spark_applications_search_stage_attempt_tasks', value: 'projects_locations_batches_spark_applications_search_stage_attempt_tasks' },
        { label: 'projects_locations_batches_spark_applications_search_executors', value: 'projects_locations_batches_spark_applications_search_executors' },
        { label: 'projects_locations_batches_spark_applications_search_executor_stage_summary', value: 'projects_locations_batches_spark_applications_search_executor_stage_summary' },
        { label: 'projects_locations_batches_spark_applications_search_sql_queries', value: 'projects_locations_batches_spark_applications_search_sql_queries' },
        { label: 'projects_locations_batches_spark_applications_access_sql_query', value: 'projects_locations_batches_spark_applications_access_sql_query' },
        { label: 'projects_locations_batches_spark_applications_access_sql_plan', value: 'projects_locations_batches_spark_applications_access_sql_plan' },
        { label: 'projects_locations_batches_spark_applications_access_stage_rdd_graph', value: 'projects_locations_batches_spark_applications_access_stage_rdd_graph' },
        { label: 'projects_locations_batches_spark_applications_access_environment_info', value: 'projects_locations_batches_spark_applications_access_environment_info' },
        { label: 'projects_locations_batches_spark_applications_summarize_jobs', value: 'projects_locations_batches_spark_applications_summarize_jobs' },
        { label: 'projects_locations_batches_spark_applications_summarize_stages', value: 'projects_locations_batches_spark_applications_summarize_stages' },
        { label: 'projects_locations_batches_spark_applications_summarize_stage_attempt_tasks', value: 'projects_locations_batches_spark_applications_summarize_stage_attempt_tasks' },
        { label: 'projects_locations_batches_spark_applications_summarize_executors', value: 'projects_locations_batches_spark_applications_summarize_executors' },
        { label: 'projects_locations_sessions_spark_applications_write', value: 'projects_locations_sessions_spark_applications_write' },
        { label: 'projects_locations_sessions_spark_applications_search', value: 'projects_locations_sessions_spark_applications_search' },
        { label: 'projects_locations_sessions_spark_applications_access', value: 'projects_locations_sessions_spark_applications_access' },
        { label: 'projects_locations_sessions_spark_applications_search_jobs', value: 'projects_locations_sessions_spark_applications_search_jobs' },
        { label: 'projects_locations_sessions_spark_applications_access_job', value: 'projects_locations_sessions_spark_applications_access_job' },
        { label: 'projects_locations_sessions_spark_applications_search_stages', value: 'projects_locations_sessions_spark_applications_search_stages' },
        { label: 'projects_locations_sessions_spark_applications_search_stage_attempts', value: 'projects_locations_sessions_spark_applications_search_stage_attempts' },
        { label: 'projects_locations_sessions_spark_applications_access_stage_attempt', value: 'projects_locations_sessions_spark_applications_access_stage_attempt' },
        { label: 'projects_locations_sessions_spark_applications_search_stage_attempt_tasks', value: 'projects_locations_sessions_spark_applications_search_stage_attempt_tasks' },
        { label: 'projects_locations_sessions_spark_applications_search_executors', value: 'projects_locations_sessions_spark_applications_search_executors' },
        { label: 'projects_locations_sessions_spark_applications_search_executor_stage_summary', value: 'projects_locations_sessions_spark_applications_search_executor_stage_summary' },
        { label: 'projects_locations_sessions_spark_applications_search_sql_queries', value: 'projects_locations_sessions_spark_applications_search_sql_queries' },
        { label: 'projects_locations_sessions_spark_applications_access_sql_query', value: 'projects_locations_sessions_spark_applications_access_sql_query' },
        { label: 'projects_locations_sessions_spark_applications_access_sql_plan', value: 'projects_locations_sessions_spark_applications_access_sql_plan' },
        { label: 'projects_locations_sessions_spark_applications_access_stage_rdd_graph', value: 'projects_locations_sessions_spark_applications_access_stage_rdd_graph' },
        { label: 'projects_locations_sessions_spark_applications_access_environment_info', value: 'projects_locations_sessions_spark_applications_access_environment_info' },
        { label: 'projects_locations_sessions_spark_applications_summarize_jobs', value: 'projects_locations_sessions_spark_applications_summarize_jobs' },
        { label: 'projects_locations_sessions_spark_applications_summarize_stages', value: 'projects_locations_sessions_spark_applications_summarize_stages' },
        { label: 'projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks', value: 'projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks' },
        { label: 'projects_locations_sessions_spark_applications_summarize_executors', value: 'projects_locations_sessions_spark_applications_summarize_executors' }
    ]}
>
<TabItem value="projects_locations_batches_spark_applications_write">

Write wrapper objects from dataplane to spanner

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required 
@@json=
'{
"parent": "{{ parent }}", 
"sparkWrapperObjects": "{{ sparkWrapperObjects }}"
}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search">

Obtain high level information and list of Spark Applications corresponding to a batch

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@applicationStatus='{{ applicationStatus }}', 
@minTime='{{ minTime }}', 
@maxTime='{{ maxTime }}', 
@minEndTime='{{ minEndTime }}', 
@maxEndTime='{{ maxEndTime }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access">

Obtain high level information corresponding to a single Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_jobs">

Obtain list of spark jobs corresponding to a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_jobs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@jobStatus='{{ jobStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_job">

Obtain data corresponding to a spark job for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_job 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@jobId='{{ jobId }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_stages">

Obtain data corresponding to stages for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_stages 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageStatus='{{ stageStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_stage_attempts">

Obtain data corresponding to a spark stage attempts for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_stage_attempts 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_stage_attempt">

Obtain data corresponding to a spark stage attempt for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_stage_attempt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_stage_attempt_tasks">

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_stage_attempt_tasks 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@sortRuntime={{ sortRuntime }}, 
@taskStatus='{{ taskStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_executors">

Obtain data corresponding to executors for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_executors 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executorStatus='{{ executorStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_executor_stage_summary">

Obtain executor summary with respect to a spark stage attempt.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_executor_stage_summary 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_search_sql_queries">

Obtain data corresponding to SQL Queries for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_search_sql_queries 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@details={{ details }}, 
@planDescription={{ planDescription }}, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_sql_query">

Obtain data corresponding to a particular SQL Query for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_sql_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executionId='{{ executionId }}', 
@details={{ details }}, 
@planDescription={{ planDescription }};
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_sql_plan">

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_sql_plan 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executionId='{{ executionId }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_stage_rdd_graph">

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_stage_rdd_graph 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_access_environment_info">

Obtain environment details for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_access_environment_info 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_summarize_jobs">

Obtain summary of Jobs for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_summarize_jobs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_summarize_stages">

Obtain summary of Stages for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_summarize_stages 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_summarize_stage_attempt_tasks">

Obtain summary of Tasks for a Spark Application Stage Attempt

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_summarize_stage_attempt_tasks 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}';
```
</TabItem>
<TabItem value="projects_locations_batches_spark_applications_summarize_executors">

Obtain summary of Executor Summary for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_batches_spark_applications_summarize_executors 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_write">

Write wrapper objects from dataplane to spanner

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required 
@@json=
'{
"parent": "{{ parent }}", 
"sparkWrapperObjects": "{{ sparkWrapperObjects }}"
}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search">

Obtain high level information and list of Spark Applications corresponding to a batch

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@applicationStatus='{{ applicationStatus }}', 
@minTime='{{ minTime }}', 
@maxTime='{{ maxTime }}', 
@minEndTime='{{ minEndTime }}', 
@maxEndTime='{{ maxEndTime }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access">

Obtain high level information corresponding to a single Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_jobs">

Obtain list of spark jobs corresponding to a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_jobs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@jobStatus='{{ jobStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@jobIds='{{ jobIds }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_job">

Obtain data corresponding to a spark job for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_job 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@jobId='{{ jobId }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_stages">

Obtain data corresponding to stages for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_stages 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageStatus='{{ stageStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}', 
@stageIds='{{ stageIds }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_stage_attempts">

Obtain data corresponding to a spark stage attempts for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_stage_attempts 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_stage_attempt">

Obtain data corresponding to a spark stage attempt for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_stage_attempt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@summaryMetricsMask='{{ summaryMetricsMask }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_stage_attempt_tasks">

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_stage_attempt_tasks 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@sortRuntime={{ sortRuntime }}, 
@taskStatus='{{ taskStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_executors">

Obtain data corresponding to executors for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_executors 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executorStatus='{{ executorStatus }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_executor_stage_summary">

Obtain executor summary with respect to a spark stage attempt.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_executor_stage_summary 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_search_sql_queries">

Obtain data corresponding to SQL Queries for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_search_sql_queries 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@details={{ details }}, 
@planDescription={{ planDescription }}, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@operationIds='{{ operationIds }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_sql_query">

Obtain data corresponding to a particular SQL Query for a Spark Application.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_sql_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executionId='{{ executionId }}', 
@details={{ details }}, 
@planDescription={{ planDescription }};
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_sql_plan">

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_sql_plan 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@executionId='{{ executionId }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_stage_rdd_graph">

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_stage_rdd_graph 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_access_environment_info">

Obtain environment details for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_access_environment_info 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_summarize_jobs">

Obtain summary of Jobs for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_summarize_jobs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@jobIds='{{ jobIds }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_summarize_stages">

Obtain summary of Stages for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_summarize_stages 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageIds='{{ stageIds }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks">

Obtain summary of Tasks for a Spark Application Stage Attempt

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}', 
@stageId='{{ stageId }}', 
@stageAttemptId='{{ stageAttemptId }}';
```
</TabItem>
<TabItem value="projects_locations_sessions_spark_applications_summarize_executors">

Obtain summary of Executor Summary for a Spark Application

```sql
EXEC google.dataproc.spark_applications.projects_locations_sessions_spark_applications_summarize_executors 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required, 
@sparkApplicationsId='{{ sparkApplicationsId }}' --required, 
@parent='{{ parent }}';
```
</TabItem>
</Tabs>
