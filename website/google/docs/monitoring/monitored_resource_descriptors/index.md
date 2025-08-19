--- 
title: monitored_resource_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitored_resource_descriptors
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

Creates, updates, deletes, gets or lists a <code>monitored_resource_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>monitored_resource_descriptors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.monitored_resource_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_monitored_resource_descriptors_get"
    values={[
        { label: 'projects_monitored_resource_descriptors_get', value: 'projects_monitored_resource_descriptors_get' },
        { label: 'projects_monitored_resource_descriptors_list', value: 'projects_monitored_resource_descriptors_list' }
    ]}
>
<TabItem value="projects_monitored_resource_descriptors_get">

An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.

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
    <td>Optional. The resource name of the monitored resource descriptor: "projects/&#123;project_id&#125;/monitoredResourceDescriptors/&#123;type&#125;" where &#123;type&#125; is the value of the type field in this object and &#123;project_id&#125; is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/&#123;type&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A detailed description of the monitored resource type that might be used in documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. The launch stage of the monitored resource definition.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_monitored_resource_descriptors_list">

The ListMonitoredResourceDescriptors response.

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
    <td>If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceDescriptors" /></td>
    <td><code>array</code></td>
    <td>The monitored resource descriptors that are available to this project and that match filter, if present.</td>
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
    <td><a href="#projects_monitored_resource_descriptors_get"><CopyableCode code="projects_monitored_resource_descriptors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-monitoredResourceDescriptorsId"><code>monitoredResourceDescriptorsId</code></a></td>
    <td></td>
    <td>Gets a single monitored resource descriptor.</td>
</tr>
<tr>
    <td><a href="#projects_monitored_resource_descriptors_list"><CopyableCode code="projects_monitored_resource_descriptors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists monitored resource descriptors that match a filter.</td>
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
<tr id="parameter-monitoredResourceDescriptorsId">
    <td><CopyableCode code="monitoredResourceDescriptorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_monitored_resource_descriptors_get"
    values={[
        { label: 'projects_monitored_resource_descriptors_get', value: 'projects_monitored_resource_descriptors_get' },
        { label: 'projects_monitored_resource_descriptors_list', value: 'projects_monitored_resource_descriptors_list' }
    ]}
>
<TabItem value="projects_monitored_resource_descriptors_get">

Gets a single monitored resource descriptor.

```sql
SELECT
name,
description,
displayName,
labels,
launchStage,
type
FROM google.monitoring.monitored_resource_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND monitoredResourceDescriptorsId = '{{ monitoredResourceDescriptorsId }}' -- required;
```
</TabItem>
<TabItem value="projects_monitored_resource_descriptors_list">

Lists monitored resource descriptors that match a filter.

```sql
SELECT
nextPageToken,
resourceDescriptors
FROM google.monitoring.monitored_resource_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
