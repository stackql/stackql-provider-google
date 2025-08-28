--- 
title: org_policy_violations_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - org_policy_violations_previews
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

Creates, updates, deletes, gets or lists an <code>org_policy_violations_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>org_policy_violations_previews</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.policysimulator.org_policy_violations_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_org_policy_violations_previews_get"
    values={[
        { label: 'organizations_locations_org_policy_violations_previews_get', value: 'organizations_locations_org_policy_violations_previews_get' },
        { label: 'organizations_locations_org_policy_violations_previews_list', value: 'organizations_locations_org_policy_violations_previews_list' }
    ]}
>
<TabItem value="organizations_locations_org_policy_violations_previews_get">

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
    <td>Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/orgPolicyViolationsPreviews/&#123;orgPolicyViolationsPreview&#125;` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this `OrgPolicyViolationsPreview` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customConstraints" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the constraints against which all `OrgPolicyViolations` were evaluated. If `OrgPolicyOverlay` only contains `PolicyOverlay` then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in `CustomConstraintOverlay`. Format: `organizations/&#123;organization_id&#125;/customConstraints/&#123;custom_constraint_id&#125;` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms`</td>
</tr>
<tr>
    <td><CopyableCode code="overlay" /></td>
    <td><code>object</code></td>
    <td>Required. The proposed changes we are previewing violations for. (id: GoogleCloudPolicysimulatorV1OrgPolicyOverlay)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCounts" /></td>
    <td><code>object</code></td>
    <td>Output only. A summary of the state of all resources scanned for compliance with the changed OrgPolicy. (id: GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreviewResourceCounts)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the `OrgPolicyViolationsPreview`.</td>
</tr>
<tr>
    <td><CopyableCode code="violationsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_org_policy_violations_previews_list">

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
    <td>Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/orgPolicyViolationsPreviews/&#123;orgPolicyViolationsPreview&#125;` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this `OrgPolicyViolationsPreview` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customConstraints" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the constraints against which all `OrgPolicyViolations` were evaluated. If `OrgPolicyOverlay` only contains `PolicyOverlay` then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in `CustomConstraintOverlay`. Format: `organizations/&#123;organization_id&#125;/customConstraints/&#123;custom_constraint_id&#125;` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms`</td>
</tr>
<tr>
    <td><CopyableCode code="overlay" /></td>
    <td><code>object</code></td>
    <td>Required. The proposed changes we are previewing violations for. (id: GoogleCloudPolicysimulatorV1OrgPolicyOverlay)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCounts" /></td>
    <td><code>object</code></td>
    <td>Output only. A summary of the state of all resources scanned for compliance with the changed OrgPolicy. (id: GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreviewResourceCounts)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the `OrgPolicyViolationsPreview`.</td>
</tr>
<tr>
    <td><CopyableCode code="violationsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints.</td>
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
    <td><a href="#organizations_locations_org_policy_violations_previews_get"><CopyableCode code="organizations_locations_org_policy_violations_previews_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-orgPolicyViolationsPreviewsId"><code>orgPolicyViolationsPreviewsId</code></a></td>
    <td></td>
    <td>GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview. Each OrgPolicyViolationsPreview is available for at least 7 days.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_org_policy_violations_previews_list"><CopyableCode code="organizations_locations_org_policy_violations_previews_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_org_policy_violations_previews_create"><CopyableCode code="organizations_locations_org_policy_violations_previews_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-orgPolicyViolationsPreviewId"><code>orgPolicyViolationsPreviewId</code></a></td>
    <td>CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes.</td>
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
<tr id="parameter-orgPolicyViolationsPreviewId">
    <td><CopyableCode code="orgPolicyViolationsPreviewId" /></td>
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
    defaultValue="organizations_locations_org_policy_violations_previews_get"
    values={[
        { label: 'organizations_locations_org_policy_violations_previews_get', value: 'organizations_locations_org_policy_violations_previews_get' },
        { label: 'organizations_locations_org_policy_violations_previews_list', value: 'organizations_locations_org_policy_violations_previews_list' }
    ]}
>
<TabItem value="organizations_locations_org_policy_violations_previews_get">

GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview. Each OrgPolicyViolationsPreview is available for at least 7 days.

```sql
SELECT
name,
createTime,
customConstraints,
overlay,
resourceCounts,
state,
violationsCount
FROM google.policysimulator.org_policy_violations_previews
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND orgPolicyViolationsPreviewsId = '{{ orgPolicyViolationsPreviewsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_org_policy_violations_previews_list">

ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days.

```sql
SELECT
name,
createTime,
customConstraints,
overlay,
resourceCounts,
state,
violationsCount
FROM google.policysimulator.org_policy_violations_previews
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_org_policy_violations_previews_create"
    values={[
        { label: 'organizations_locations_org_policy_violations_previews_create', value: 'organizations_locations_org_policy_violations_previews_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_org_policy_violations_previews_create">

CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes.

```sql
INSERT INTO google.policysimulator.org_policy_violations_previews (
data__overlay,
organizationsId,
locationsId,
orgPolicyViolationsPreviewId
)
SELECT 
'{{ overlay }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ orgPolicyViolationsPreviewId }}'
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
- name: org_policy_violations_previews
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the org_policy_violations_previews resource.
    - name: locationsId
      value: string
      description: Required parameter for the org_policy_violations_previews resource.
    - name: overlay
      value: object
      description: >
        Required. The proposed changes we are previewing violations for.
        
    - name: orgPolicyViolationsPreviewId
      value: string
```
</TabItem>
</Tabs>
