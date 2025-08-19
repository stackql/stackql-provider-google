--- 
title: security_profiles_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles_revisions
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

Creates, updates, deletes, gets or lists a <code>security_profiles_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_profiles_revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_profiles_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_security_profiles_list_revisions"
    values={[
        { label: 'organizations_security_profiles_list_revisions', value: 'organizations_security_profiles_list_revisions' }
    ]}
>
<TabItem value="organizations_security_profiles_list_revisions">

Response for ListSecurityProfileRevisions.

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
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="securityProfiles" /></td>
    <td><code>array</code></td>
    <td>List of security profile revisions. The revisions may be attached or unattached to any environment.</td>
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
    <td><a href="#organizations_security_profiles_list_revisions"><CopyableCode code="organizations_security_profiles_list_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityProfilesId"><code>securityProfilesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListSecurityProfileRevisions lists all the revisions of the security profile.</td>
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
<tr id="parameter-securityProfilesId">
    <td><CopyableCode code="securityProfilesId" /></td>
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
    defaultValue="organizations_security_profiles_list_revisions"
    values={[
        { label: 'organizations_security_profiles_list_revisions', value: 'organizations_security_profiles_list_revisions' }
    ]}
>
<TabItem value="organizations_security_profiles_list_revisions">

ListSecurityProfileRevisions lists all the revisions of the security profile.

```sql
SELECT
nextPageToken,
securityProfiles
FROM google.apigee.security_profiles_revisions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND securityProfilesId = '{{ securityProfilesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
