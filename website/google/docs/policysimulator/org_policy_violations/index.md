--- 
title: org_policy_violations
hide_title: false
hide_table_of_contents: false
keywords:
  - org_policy_violations
  - policysimulator
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

Creates, updates, deletes, gets or lists an <code>org_policy_violations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>org_policy_violations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.policysimulator.org_policy_violations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_org_policy_violations_previews_org_policy_violations_list"
    values={[
        { label: 'organizations_locations_org_policy_violations_previews_org_policy_violations_list', value: 'organizations_locations_org_policy_violations_previews_org_policy_violations_list' }
    ]}
>
<TabItem value="organizations_locations_org_policy_violations_previews_org_policy_violations_list">

ListOrgPolicyViolationsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolations

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
    <td>A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="orgPolicyViolations" /></td>
    <td><code>array</code></td>
    <td>The list of OrgPolicyViolations</td>
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
    <td><a href="#organizations_locations_org_policy_violations_previews_org_policy_violations_list"><CopyableCode code="organizations_locations_org_policy_violations_previews_org_policy_violations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-orgPolicyViolationsPreviewsId"><code>orgPolicyViolationsPreviewsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview.</td>
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
<tr id="parameter-orgPolicyViolationsPreviewsId">
    <td><CopyableCode code="orgPolicyViolationsPreviewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="organizations_locations_org_policy_violations_previews_org_policy_violations_list"
    values={[
        { label: 'organizations_locations_org_policy_violations_previews_org_policy_violations_list', value: 'organizations_locations_org_policy_violations_previews_org_policy_violations_list' }
    ]}
>
<TabItem value="organizations_locations_org_policy_violations_previews_org_policy_violations_list">

ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview.

```sql
SELECT
nextPageToken,
orgPolicyViolations
FROM google.policysimulator.org_policy_violations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND orgPolicyViolationsPreviewsId = '{{ orgPolicyViolationsPreviewsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
