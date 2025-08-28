--- 
title: security_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - security_settings
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

Creates, updates, deletes, gets or lists a <code>security_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_security_settings"
    values={[
        { label: 'organizations_get_security_settings', value: 'organizations_get_security_settings' }
    ]}
>
<TabItem value="organizations_get_security_settings">

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
    <td>Identifier. Full resource name is always `organizations/&#123;org&#125;/securitySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="mlRetrainingFeedbackEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true the user consents to the use of ML models for Abuse detection.</td>
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
    <td><a href="#organizations_get_security_settings"><CopyableCode code="organizations_get_security_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>GetSecuritySettings gets the security settings for API Security.</td>
</tr>
<tr>
    <td><a href="#organizations_update_security_settings"><CopyableCode code="organizations_update_security_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>UpdateSecuritySettings updates the current security settings for API Security.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get_security_settings"
    values={[
        { label: 'organizations_get_security_settings', value: 'organizations_get_security_settings' }
    ]}
>
<TabItem value="organizations_get_security_settings">

GetSecuritySettings gets the security settings for API Security.

```sql
SELECT
name,
mlRetrainingFeedbackEnabled
FROM google.apigee.security_settings
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_update_security_settings"
    values={[
        { label: 'organizations_update_security_settings', value: 'organizations_update_security_settings' }
    ]}
>
<TabItem value="organizations_update_security_settings">

UpdateSecuritySettings updates the current security settings for API Security.

```sql
UPDATE google.apigee.security_settings
SET 
data__name = '{{ name }}',
data__mlRetrainingFeedbackEnabled = {{ mlRetrainingFeedbackEnabled }}
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
mlRetrainingFeedbackEnabled;
```
</TabItem>
</Tabs>
