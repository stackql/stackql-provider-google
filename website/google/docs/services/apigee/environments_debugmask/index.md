--- 
title: environments_debugmask
hide_title: false
hide_table_of_contents: false
keywords:
  - environments_debugmask
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

Creates, updates, deletes, gets or lists an <code>environments_debugmask</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments_debugmask</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.environments_debugmask" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_get_debugmask"
    values={[
        { label: 'organizations_environments_get_debugmask', value: 'organizations_environments_get_debugmask' }
    ]}
>
<TabItem value="organizations_environments_get_debugmask">

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
    <td>Name of the debug mask.</td>
</tr>
<tr>
    <td><CopyableCode code="faultJSONPaths" /></td>
    <td><code>array</code></td>
    <td>List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.</td>
</tr>
<tr>
    <td><CopyableCode code="faultXPaths" /></td>
    <td><code>array</code></td>
    <td>List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaces" /></td>
    <td><code>object</code></td>
    <td>Map of namespaces to URIs.</td>
</tr>
<tr>
    <td><CopyableCode code="requestJSONPaths" /></td>
    <td><code>array</code></td>
    <td>List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="requestXPaths" /></td>
    <td><code>array</code></td>
    <td>List of XPaths that specify the XML elements to be filtered from XML request message payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="responseJSONPaths" /></td>
    <td><code>array</code></td>
    <td>List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="responseXPaths" /></td>
    <td><code>array</code></td>
    <td>List of XPaths that specify the XML elements to be filtered from XML response message payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>List of variables that should be masked from the debug output.</td>
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
    <td><a href="#organizations_environments_get_debugmask"><CopyableCode code="organizations_environments_get_debugmask" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets the debug mask singleton resource for an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_update_debugmask"><CopyableCode code="organizations_environments_update_debugmask" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-replaceRepeatedFields"><code>replaceRepeatedFields</code></a></td>
    <td>Updates the debug mask singleton resource for an environment.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-replaceRepeatedFields">
    <td><CopyableCode code="replaceRepeatedFields" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_get_debugmask"
    values={[
        { label: 'organizations_environments_get_debugmask', value: 'organizations_environments_get_debugmask' }
    ]}
>
<TabItem value="organizations_environments_get_debugmask">

Gets the debug mask singleton resource for an environment.

```sql
SELECT
name,
faultJSONPaths,
faultXPaths,
namespaces,
requestJSONPaths,
requestXPaths,
responseJSONPaths,
responseXPaths,
variables
FROM google.apigee.environments_debugmask
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_environments_update_debugmask"
    values={[
        { label: 'organizations_environments_update_debugmask', value: 'organizations_environments_update_debugmask' }
    ]}
>
<TabItem value="organizations_environments_update_debugmask">

Updates the debug mask singleton resource for an environment.

```sql
UPDATE google.apigee.environments_debugmask
SET 
data__name = '{{ name }}',
data__namespaces = '{{ namespaces }}',
data__requestXPaths = '{{ requestXPaths }}',
data__responseXPaths = '{{ responseXPaths }}',
data__faultXPaths = '{{ faultXPaths }}',
data__requestJSONPaths = '{{ requestJSONPaths }}',
data__responseJSONPaths = '{{ responseJSONPaths }}',
data__faultJSONPaths = '{{ faultJSONPaths }}',
data__variables = '{{ variables }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
AND replaceRepeatedFields = {{ replaceRepeatedFields}}
RETURNING
name,
faultJSONPaths,
faultXPaths,
namespaces,
requestJSONPaths,
requestXPaths,
responseJSONPaths,
responseXPaths,
variables;
```
</TabItem>
</Tabs>
