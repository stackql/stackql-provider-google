--- 
title: security_assessment_results
hide_title: false
hide_table_of_contents: false
keywords:
  - security_assessment_results
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

Creates, updates, deletes, gets or lists a <code>security_assessment_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_assessment_results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_assessment_results" /></td></tr>
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
    <td><a href="#organizations_security_assessment_results_batch_compute"><CopyableCode code="organizations_security_assessment_results_batch_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Compute RAV2 security scores for a set of resources.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="organizations_security_assessment_results_batch_compute"
    values={[
        { label: 'organizations_security_assessment_results_batch_compute', value: 'organizations_security_assessment_results_batch_compute' }
    ]}
>
<TabItem value="organizations_security_assessment_results_batch_compute">

Compute RAV2 security scores for a set of resources.

```sql
EXEC google.apigee.security_assessment_results.organizations_security_assessment_results_batch_compute 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"profile": "{{ profile }}", 
"scope": "{{ scope }}", 
"includeAllResources": "{{ includeAllResources }}", 
"include": "{{ include }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
