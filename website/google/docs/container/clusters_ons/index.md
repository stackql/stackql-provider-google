--- 
title: clusters_ons
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_ons
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

Creates, updates, deletes, gets or lists a <code>clusters_ons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters_ons</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.clusters_ons" /></td></tr>
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
    <td><a href="#projects_zones_clusters_addons"><CopyableCode code="projects_zones_clusters_addons" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the addons for a specific cluster.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_zones_clusters_addons"
    values={[
        { label: 'projects_zones_clusters_addons', value: 'projects_zones_clusters_addons' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_zones_clusters_addons">

Sets the addons for a specific cluster.

```sql
INSERT INTO google.container.clusters_ons (
data__projectId,
data__zone,
data__clusterId,
data__addonsConfig,
data__name,
projectId,
zone,
clusterId
)
SELECT 
'{{ projectId }}',
'{{ zone }}',
'{{ clusterId }}',
'{{ addonsConfig }}',
'{{ name }}',
'{{ projectId }}',
'{{ zone }}',
'{{ clusterId }}'
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: clusters_ons
  props:
    - name: projectId
      value: string
      description: Required parameter for the clusters_ons resource.
    - name: zone
      value: string
      description: Required parameter for the clusters_ons resource.
    - name: clusterId
      value: string
      description: Required parameter for the clusters_ons resource.
    - name: projectId
      value: string
      description: >
        Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
        
    - name: zone
      value: string
      description: >
        Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
        
    - name: clusterId
      value: string
      description: >
        Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
        
    - name: addonsConfig
      value: object
      description: >
        Required. The desired configurations for the various addons available to run in the cluster.
        
    - name: name
      value: string
      description: >
        The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.
        
```
</TabItem>
</Tabs>
