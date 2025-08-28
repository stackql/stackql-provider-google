--- 
title: results
hide_title: false
hide_table_of_contents: false
keywords:
  - results
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_test_cases_results_get"
    values={[
        { label: 'projects_locations_agents_test_cases_results_get', value: 'projects_locations_agents_test_cases_results_get' },
        { label: 'projects_locations_agents_test_cases_results_list', value: 'projects_locations_agents_test_cases_results_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_results_get">

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
    <td>The resource name for the test case result. Format: `projects//locations//agents//testCases//results/`.</td>
</tr>
<tr>
    <td><CopyableCode code="conversationTurns" /></td>
    <td><code>array</code></td>
    <td>The conversation turns uttered during the test case replay in chronological order.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment where the test was run. If not set, it indicates the draft environment.</td>
</tr>
<tr>
    <td><CopyableCode code="testResult" /></td>
    <td><code>string</code></td>
    <td>Whether the test case passed in the agent environment.</td>
</tr>
<tr>
    <td><CopyableCode code="testTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the test was run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_test_cases_results_list">

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
    <td>The resource name for the test case result. Format: `projects//locations//agents//testCases//results/`.</td>
</tr>
<tr>
    <td><CopyableCode code="conversationTurns" /></td>
    <td><code>array</code></td>
    <td>The conversation turns uttered during the test case replay in chronological order.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment where the test was run. If not set, it indicates the draft environment.</td>
</tr>
<tr>
    <td><CopyableCode code="testResult" /></td>
    <td><code>string</code></td>
    <td>Whether the test case passed in the agent environment.</td>
</tr>
<tr>
    <td><CopyableCode code="testTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the test was run.</td>
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
    <td><a href="#projects_locations_agents_test_cases_results_get"><CopyableCode code="projects_locations_agents_test_cases_results_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a>, <a href="#parameter-resultsId"><code>resultsId</code></a></td>
    <td></td>
    <td>Gets a test case result.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_results_list"><CopyableCode code="projects_locations_agents_test_cases_results_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
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
<tr id="parameter-resultsId">
    <td><CopyableCode code="resultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testCasesId">
    <td><CopyableCode code="testCasesId" /></td>
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
    defaultValue="projects_locations_agents_test_cases_results_get"
    values={[
        { label: 'projects_locations_agents_test_cases_results_get', value: 'projects_locations_agents_test_cases_results_get' },
        { label: 'projects_locations_agents_test_cases_results_list', value: 'projects_locations_agents_test_cases_results_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_results_get">

Gets a test case result.

```sql
SELECT
name,
conversationTurns,
environment,
testResult,
testTime
FROM google.dialogflow.results
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND testCasesId = '{{ testCasesId }}' -- required
AND resultsId = '{{ resultsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_results_list">

Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.

```sql
SELECT
name,
conversationTurns,
environment,
testResult,
testTime
FROM google.dialogflow.results
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND testCasesId = '{{ testCasesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
