--- 
title: apps_aab_info
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_aab_info
  - appdistribution
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>apps_aab_info</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps_aab_info</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appdistribution.apps_aab_info" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aab_info"
    values={[
        { label: 'get_aab_info', value: 'get_aab_info' }
    ]}
>
<TabItem value="get_aab_info">

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
    <td>The name of the `AabInfo` resource. Format: `projects/&#123;project_number&#125;/apps/&#123;app&#125;/aabInfo`</td>
</tr>
<tr>
    <td><CopyableCode code="integrationState" /></td>
    <td><code>string</code></td>
    <td>App bundle integration state. Only valid for android apps.</td>
</tr>
<tr>
    <td><CopyableCode code="testCertificate" /></td>
    <td><code>object</code></td>
    <td>App bundle test certificate generated for the app. Set after the first app bundle is uploaded for this app. (id: GoogleFirebaseAppdistroV1TestCertificate)</td>
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
    <td><a href="#get_aab_info"><CopyableCode code="get_aab_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Gets Android App Bundle (AAB) information for a Firebase app.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_aab_info"
    values={[
        { label: 'get_aab_info', value: 'get_aab_info' }
    ]}
>
<TabItem value="get_aab_info">

Gets Android App Bundle (AAB) information for a Firebase app.

```sql
SELECT
name,
integrationState,
testCertificate
FROM firebase.appdistribution.apps_aab_info
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required;
```
</TabItem>
</Tabs>
