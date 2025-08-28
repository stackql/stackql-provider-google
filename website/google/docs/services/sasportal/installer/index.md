--- 
title: installer
hide_title: false
hide_table_of_contents: false
keywords:
  - installer
  - sasportal
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

Creates, updates, deletes, gets or lists an <code>installer</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>installer</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.installer" /></td></tr>
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
    <td><a href="#installer_generate_secret"><CopyableCode code="installer_generate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Generates a secret to be used with the ValidateInstaller.</td>
</tr>
<tr>
    <td><a href="#installer_validate"><CopyableCode code="installer_validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Validates the identity of a Certified Professional Installer (CPI).</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="installer_generate_secret"
    values={[
        { label: 'installer_generate_secret', value: 'installer_generate_secret' },
        { label: 'installer_validate', value: 'installer_validate' }
    ]}
>
<TabItem value="installer_generate_secret">

Generates a secret to be used with the ValidateInstaller.

```sql
EXEC google.sasportal.installer.installer_generate_secret 
;
```
</TabItem>
<TabItem value="installer_validate">

Validates the identity of a Certified Professional Installer (CPI).

```sql
EXEC google.sasportal.installer.installer_validate 
@@json=
'{
"installerId": "{{ installerId }}", 
"secret": "{{ secret }}", 
"encodedSecret": "{{ encodedSecret }}"
}';
```
</TabItem>
</Tabs>
