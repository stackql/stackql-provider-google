--- 
title: clusters_certificate_authority
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_certificate_authority
  - redis
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

Creates, updates, deletes, gets or lists a <code>clusters_certificate_authority</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters_certificate_authority</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.clusters_certificate_authority" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_certificate_authority"
    values={[
        { label: 'get_certificate_authority', value: 'get_certificate_authority' }
    ]}
>
<TabItem value="get_certificate_authority">

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
    <td>Identifier. Unique name of the resource in this scope including project, location and cluster using the form: `projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;/certificateAuthority`</td>
</tr>
<tr>
    <td><CopyableCode code="managedServerCa" /></td>
    <td><code>object</code></td>
    <td> (id: ManagedCertificateAuthority)</td>
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
    <td><a href="#get_certificate_authority"><CopyableCode code="get_certificate_authority" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets the details of certificate authority information for Redis cluster.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
    defaultValue="get_certificate_authority"
    values={[
        { label: 'get_certificate_authority', value: 'get_certificate_authority' }
    ]}
>
<TabItem value="get_certificate_authority">

Gets the details of certificate authority information for Redis cluster.

```sql
SELECT
name,
managedServerCa
FROM google.redis.clusters_certificate_authority
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required;
```
</TabItem>
</Tabs>
