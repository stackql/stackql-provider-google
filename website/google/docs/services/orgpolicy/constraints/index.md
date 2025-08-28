--- 
title: constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - constraints
  - orgpolicy
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

Creates, updates, deletes, gets or lists a <code>constraints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>constraints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.orgpolicy.constraints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_constraints_list"
    values={[
        { label: 'projects_constraints_list', value: 'projects_constraints_list' },
        { label: 'folders_constraints_list', value: 'folders_constraints_list' },
        { label: 'organizations_constraints_list', value: 'organizations_constraints_list' }
    ]}
>
<TabItem value="projects_constraints_list">

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
    <td>Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/&#123;project_number&#125;/constraints/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/constraints/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/constraints/&#123;constraint_name&#125;` For example, "/projects/123/constraints/compute.disableSerialPortAccess".</td>
</tr>
<tr>
    <td><CopyableCode code="booleanConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a boolean constraint. (id: GoogleCloudOrgpolicyV2ConstraintBooleanConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="constraintDefault" /></td>
    <td><code>string</code></td>
    <td>The evaluation behavior of this constraint in the absence of a policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="equivalentConstraint" /></td>
    <td><code>string</code></td>
    <td>Managed constraint and canned constraint sometimes can have equivalents. This field is used to store the equivalent constraint name.</td>
</tr>
<tr>
    <td><CopyableCode code="listConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a list constraint. (id: GoogleCloudOrgpolicyV2ConstraintListConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="supportsDryRun" /></td>
    <td><code>boolean</code></td>
    <td>Shows if dry run is supported for this constraint or not.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsSimulation" /></td>
    <td><code>boolean</code></td>
    <td>Shows if simulation is supported for this constraint or not.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_constraints_list">

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
    <td>Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/&#123;project_number&#125;/constraints/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/constraints/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/constraints/&#123;constraint_name&#125;` For example, "/projects/123/constraints/compute.disableSerialPortAccess".</td>
</tr>
<tr>
    <td><CopyableCode code="booleanConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a boolean constraint. (id: GoogleCloudOrgpolicyV2ConstraintBooleanConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="constraintDefault" /></td>
    <td><code>string</code></td>
    <td>The evaluation behavior of this constraint in the absence of a policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="equivalentConstraint" /></td>
    <td><code>string</code></td>
    <td>Managed constraint and canned constraint sometimes can have equivalents. This field is used to store the equivalent constraint name.</td>
</tr>
<tr>
    <td><CopyableCode code="listConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a list constraint. (id: GoogleCloudOrgpolicyV2ConstraintListConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="supportsDryRun" /></td>
    <td><code>boolean</code></td>
    <td>Shows if dry run is supported for this constraint or not.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsSimulation" /></td>
    <td><code>boolean</code></td>
    <td>Shows if simulation is supported for this constraint or not.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_constraints_list">

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
    <td>Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/&#123;project_number&#125;/constraints/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/constraints/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/constraints/&#123;constraint_name&#125;` For example, "/projects/123/constraints/compute.disableSerialPortAccess".</td>
</tr>
<tr>
    <td><CopyableCode code="booleanConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a boolean constraint. (id: GoogleCloudOrgpolicyV2ConstraintBooleanConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="constraintDefault" /></td>
    <td><code>string</code></td>
    <td>The evaluation behavior of this constraint in the absence of a policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human readable name. Mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="equivalentConstraint" /></td>
    <td><code>string</code></td>
    <td>Managed constraint and canned constraint sometimes can have equivalents. This field is used to store the equivalent constraint name.</td>
</tr>
<tr>
    <td><CopyableCode code="listConstraint" /></td>
    <td><code>object</code></td>
    <td>Defines this constraint as being a list constraint. (id: GoogleCloudOrgpolicyV2ConstraintListConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="supportsDryRun" /></td>
    <td><code>boolean</code></td>
    <td>Shows if dry run is supported for this constraint or not.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsSimulation" /></td>
    <td><code>boolean</code></td>
    <td>Shows if simulation is supported for this constraint or not.</td>
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
    <td><a href="#projects_constraints_list"><CopyableCode code="projects_constraints_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists constraints that could be applied on the specified resource.</td>
</tr>
<tr>
    <td><a href="#folders_constraints_list"><CopyableCode code="folders_constraints_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists constraints that could be applied on the specified resource.</td>
</tr>
<tr>
    <td><a href="#organizations_constraints_list"><CopyableCode code="organizations_constraints_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists constraints that could be applied on the specified resource.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="projects_constraints_list"
    values={[
        { label: 'projects_constraints_list', value: 'projects_constraints_list' },
        { label: 'folders_constraints_list', value: 'folders_constraints_list' },
        { label: 'organizations_constraints_list', value: 'organizations_constraints_list' }
    ]}
>
<TabItem value="projects_constraints_list">

Lists constraints that could be applied on the specified resource.

```sql
SELECT
name,
booleanConstraint,
constraintDefault,
description,
displayName,
equivalentConstraint,
listConstraint,
supportsDryRun,
supportsSimulation
FROM google.orgpolicy.constraints
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_constraints_list">

Lists constraints that could be applied on the specified resource.

```sql
SELECT
name,
booleanConstraint,
constraintDefault,
description,
displayName,
equivalentConstraint,
listConstraint,
supportsDryRun,
supportsSimulation
FROM google.orgpolicy.constraints
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_constraints_list">

Lists constraints that could be applied on the specified resource.

```sql
SELECT
name,
booleanConstraint,
constraintDefault,
description,
displayName,
equivalentConstraint,
listConstraint,
supportsDryRun,
supportsSimulation
FROM google.orgpolicy.constraints
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
