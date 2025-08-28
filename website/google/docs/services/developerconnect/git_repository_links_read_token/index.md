--- 
title: git_repository_links_read_token
hide_title: false
hide_table_of_contents: false
keywords:
  - git_repository_links_read_token
  - developerconnect
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

Creates, updates, deletes, gets or lists a <code>git_repository_links_read_token</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>git_repository_links_read_token</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.git_repository_links_read_token" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_read_token"
    values={[
        { label: 'fetch_read_token', value: 'fetch_read_token' }
    ]}
>
<TabItem value="fetch_read_token">

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
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Expiration timestamp. Can be empty if unknown or non-expiring.</td>
</tr>
<tr>
    <td><CopyableCode code="gitUsername" /></td>
    <td><code>string</code></td>
    <td>The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token"</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The token content.</td>
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
    <td><a href="#fetch_read_token"><CopyableCode code="fetch_read_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>Fetches read token of a given gitRepositoryLink.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gitRepositoryLinksId">
    <td><CopyableCode code="gitRepositoryLinksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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
    defaultValue="fetch_read_token"
    values={[
        { label: 'fetch_read_token', value: 'fetch_read_token' }
    ]}
>
<TabItem value="fetch_read_token">

Fetches read token of a given gitRepositoryLink.

```sql
SELECT
expirationTime,
gitUsername,
token
FROM google.developerconnect.git_repository_links_read_token
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND gitRepositoryLinksId = '{{ gitRepositoryLinksId }}' -- required;
```
</TabItem>
</Tabs>
