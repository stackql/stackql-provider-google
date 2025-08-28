--- 
title: project_mapping
hide_title: false
hide_table_of_contents: false
keywords:
  - project_mapping
  - apigee
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

Creates, updates, deletes, gets or lists a <code>project_mapping</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>project_mapping</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.project_mapping" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_project_mapping"
    values={[
        { label: 'organizations_get_project_mapping', value: 'organizations_get_project_mapping' }
    ]}
>
<TabItem value="organizations_get_project_mapping">

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
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>string</code></td>
    <td>Name of the Apigee organization.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Google Cloud project associated with the Apigee organization</td>
</tr>
<tr>
    <td><CopyableCode code="projectIds" /></td>
    <td><code>array</code></td>
    <td>DEPRECATED: Use `project_id`. An Apigee Organization is mapped to a single project.</td>
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
    <td><a href="#organizations_get_project_mapping"><CopyableCode code="organizations_get_project_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Gets the project ID and region for an Apigee organization.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get_project_mapping"
    values={[
        { label: 'organizations_get_project_mapping', value: 'organizations_get_project_mapping' }
    ]}
>
<TabItem value="organizations_get_project_mapping">

Gets the project ID and region for an Apigee organization.

```sql
SELECT
location,
organization,
projectId,
projectIds
FROM google.apigee.project_mapping
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>
