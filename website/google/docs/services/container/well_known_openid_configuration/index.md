--- 
title: well_known_openid_configuration
hide_title: false
hide_table_of_contents: false
keywords:
  - well_known_openid_configuration
  - container
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

Creates, updates, deletes, gets or lists a <code>well_known_openid_configuration</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>well_known_openid_configuration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.well_known_openid_configuration" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_well-known_get_openid-configuration"
    values={[
        { label: 'projects_locations_clusters_well-known_get_openid-configuration', value: 'projects_locations_clusters_well-known_get_openid-configuration' }
    ]}
>
<TabItem value="projects_locations_clusters_well-known_get_openid-configuration">

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
    <td><CopyableCode code="cacheHeader" /></td>
    <td><code>object</code></td>
    <td>For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. (id: HttpCacheControlResponseHeader)</td>
</tr>
<tr>
    <td><CopyableCode code="claims_supported" /></td>
    <td><code>array</code></td>
    <td>Supported claims.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_types" /></td>
    <td><code>array</code></td>
    <td>Supported grant types.</td>
</tr>
<tr>
    <td><CopyableCode code="id_token_signing_alg_values_supported" /></td>
    <td><code>array</code></td>
    <td>supported ID Token signing Algorithms.</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>string</code></td>
    <td>OIDC Issuer.</td>
</tr>
<tr>
    <td><CopyableCode code="jwks_uri" /></td>
    <td><code>string</code></td>
    <td>JSON Web Key uri.</td>
</tr>
<tr>
    <td><CopyableCode code="response_types_supported" /></td>
    <td><code>array</code></td>
    <td>Supported response types.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_types_supported" /></td>
    <td><code>array</code></td>
    <td>Supported subject types.</td>
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
    <td><a href="#projects_locations_clusters_well-known_get_openid-configuration"><CopyableCode code="projects_locations_clusters_well-known_get_openid-configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.</td>
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
    defaultValue="projects_locations_clusters_well-known_get_openid-configuration"
    values={[
        { label: 'projects_locations_clusters_well-known_get_openid-configuration', value: 'projects_locations_clusters_well-known_get_openid-configuration' }
    ]}
>
<TabItem value="projects_locations_clusters_well-known_get_openid-configuration">

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.

```sql
SELECT
cacheHeader,
claims_supported,
grant_types,
id_token_signing_alg_values_supported,
issuer,
jwks_uri,
response_types_supported,
subject_types_supported
FROM google.container.well_known_openid_configuration
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required;
```
</TabItem>
</Tabs>
