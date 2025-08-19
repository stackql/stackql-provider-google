--- 
title: reports_ia_cvalidation_report
hide_title: false
hide_table_of_contents: false
keywords:
  - reports_ia_cvalidation_report
  - securityposture
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

Creates, updates, deletes, gets or lists a <code>reports_ia_cvalidation_report</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reports_ia_cvalidation_report</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securityposture.reports_ia_cvalidation_report" /></td></tr>
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
    <td><a href="#create_ia_cvalidation_report"><CopyableCode code="create_ia_cvalidation_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Validates a specified infrastructure-as-code (IaC) configuration, and creates a Report with the validation results. Only Terraform configurations are supported. Only modified assets are validated.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_ia_cvalidation_report"
    values={[
        { label: 'create_ia_cvalidation_report', value: 'create_ia_cvalidation_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ia_cvalidation_report">

Validates a specified infrastructure-as-code (IaC) configuration, and creates a Report with the validation results. Only Terraform configurations are supported. Only modified assets are validated.

```sql
INSERT INTO google.securityposture.reports_ia_cvalidation_report (
data__iac,
organizationsId,
locationsId
)
SELECT 
'{{ iac }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reports_ia_cvalidation_report
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the reports_ia_cvalidation_report resource.
    - name: locationsId
      value: string
      description: Required parameter for the reports_ia_cvalidation_report resource.
    - name: iac
      value: object
      description: >
        Required. The infrastructure-as-code (IaC) configuration to validate.
        
```
</TabItem>
</Tabs>
