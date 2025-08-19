--- 
title: profiles_offline
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles_offline
  - cloudprofiler
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

Creates, updates, deletes, gets or lists a <code>profiles_offline</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>profiles_offline</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudprofiler.profiles_offline" /></td></tr>
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
    <td><a href="#create_offline"><CopyableCode code="create_offline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_offline"
    values={[
        { label: 'create_offline', value: 'create_offline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_offline">

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._

```sql
INSERT INTO google.cloudprofiler.profiles_offline (
data__profileType,
data__deployment,
data__duration,
data__profileBytes,
data__labels,
projectsId
)
SELECT 
'{{ profileType }}',
'{{ deployment }}',
'{{ duration }}',
'{{ profileBytes }}',
'{{ labels }}',
'{{ projectsId }}'
RETURNING
name,
deployment,
duration,
labels,
profileBytes,
profileType,
startTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: profiles_offline
  props:
    - name: projectsId
      value: string
      description: Required parameter for the profiles_offline resource.
    - name: profileType
      value: string
      description: >
        Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
        
      valid_values: ['PROFILE_TYPE_UNSPECIFIED', 'CPU', 'WALL', 'HEAP', 'THREADS', 'CONTENTION', 'PEAK_HEAP', 'HEAP_ALLOC']
    - name: deployment
      value: object
      description: >
        Deployment this profile corresponds to.
        
    - name: duration
      value: string
      description: >
        Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
        
    - name: profileBytes
      value: string
      description: >
        Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
        
    - name: labels
      value: object
      description: >
        Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
        
```
</TabItem>
</Tabs>
