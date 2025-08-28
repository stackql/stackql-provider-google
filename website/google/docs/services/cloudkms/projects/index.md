--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - cloudkms
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.projects" /></td></tr>
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
    <td><a href="#show_effective_autokey_config"><CopyableCode code="show_effective_autokey_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Returns the effective Cloud KMS Autokey configuration for a given project.</td>
</tr>
<tr>
    <td><a href="#show_effective_key_access_justifications_policy_config"><CopyableCode code="show_effective_key_access_justifications_policy_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.</td>
</tr>
<tr>
    <td><a href="#show_effective_key_access_justifications_enrollment_config"><CopyableCode code="show_effective_key_access_justifications_enrollment_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="show_effective_autokey_config"
    values={[
        { label: 'show_effective_autokey_config', value: 'show_effective_autokey_config' },
        { label: 'show_effective_key_access_justifications_policy_config', value: 'show_effective_key_access_justifications_policy_config' },
        { label: 'show_effective_key_access_justifications_enrollment_config', value: 'show_effective_key_access_justifications_enrollment_config' }
    ]}
>
<TabItem value="show_effective_autokey_config">

Returns the effective Cloud KMS Autokey configuration for a given project.

```sql
EXEC google.cloudkms.projects.show_effective_autokey_config 
@projectsId='{{ projectsId }}' --required;
```
</TabItem>
<TabItem value="show_effective_key_access_justifications_policy_config">

Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.

```sql
EXEC google.cloudkms.projects.show_effective_key_access_justifications_policy_config 
@projectsId='{{ projectsId }}' --required;
```
</TabItem>
<TabItem value="show_effective_key_access_justifications_enrollment_config">

Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.

```sql
EXEC google.cloudkms.projects.show_effective_key_access_justifications_enrollment_config 
@projectsId='{{ projectsId }}' --required;
```
</TabItem>
</Tabs>
