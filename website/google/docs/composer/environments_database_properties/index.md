--- 
title: environments_database_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - environments_database_properties
  - composer
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

Creates, updates, deletes, gets or lists an <code>environments_database_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments_database_properties</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.composer.environments_database_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_database_properties"
    values={[
        { label: 'fetch_database_properties', value: 'fetch_database_properties' }
    ]}
>
<TabItem value="fetch_database_properties">

Response for FetchDatabasePropertiesRequest.

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
    <td><CopyableCode code="isFailoverReplicaAvailable" /></td>
    <td><code>boolean</code></td>
    <td>The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only fail over to the failover replica when the status is true.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryGceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the instance is currently serving from.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryGceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance.</td>
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
    <td><a href="#fetch_database_properties"><CopyableCode code="fetch_database_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Fetches database properties.</td>
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
    defaultValue="fetch_database_properties"
    values={[
        { label: 'fetch_database_properties', value: 'fetch_database_properties' }
    ]}
>
<TabItem value="fetch_database_properties">

Fetches database properties.

```sql
SELECT
isFailoverReplicaAvailable,
primaryGceZone,
secondaryGceZone
FROM google.composer.environments_database_properties
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>
