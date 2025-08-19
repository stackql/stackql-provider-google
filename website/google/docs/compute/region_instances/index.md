--- 
title: region_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - region_instances
  - compute
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

Creates, updates, deletes, gets or lists a <code>region_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>region_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.region_instances" /></td></tr>
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
    <td><a href="#bulk_insert"><CopyableCode code="bulk_insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates multiple instances in a given region. Count specifies the number of instances to create.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="bulk_insert"
    values={[
        { label: 'bulk_insert', value: 'bulk_insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="bulk_insert">

Creates multiple instances in a given region. Count specifies the number of instances to create.

```sql
INSERT INTO google.compute.region_instances (
data__count,
data__minCount,
data__namePattern,
data__perInstanceProperties,
data__sourceInstanceTemplate,
data__instanceProperties,
data__locationPolicy,
project,
region,
requestId
)
SELECT 
'{{ count }}',
'{{ minCount }}',
'{{ namePattern }}',
'{{ perInstanceProperties }}',
'{{ sourceInstanceTemplate }}',
'{{ instanceProperties }}',
'{{ locationPolicy }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: region_instances
  props:
    - name: project
      value: string
      description: Required parameter for the region_instances resource.
    - name: region
      value: string
      description: Required parameter for the region_instances resource.
    - name: count
      value: string
      description: >
        The maximum number of instances to create.
        
    - name: minCount
      value: string
      description: >
        The minimum number of instances to create. If no min_count is specified then count is used as the default value. If min_count instances cannot be created, then no instances will be created and instances already created will be deleted.
        
    - name: namePattern
      value: string
      description: >
        The string pattern used for the names of the VMs. Either name_pattern or per_instance_properties must be set. The pattern must contain one continuous sequence of placeholder hash characters (#) with each character corresponding to one digit of the generated instance name. Example: a name_pattern of inst-#### generates instance names such as inst-0001 and inst-0002. If existing instances in the same project and zone have names that match the name pattern then the generated instance numbers start after the biggest existing number. For example, if there exists an instance with name inst-0050, then instance names generated using the pattern inst-#### begin with inst-0051. The name pattern placeholder #...# can contain up to 18 characters.
        
    - name: perInstanceProperties
      value: object
      description: >
        Per-instance properties to be set on individual instances. Keys of this map specify requested instance names. Can be empty if name_pattern is used.
        
    - name: sourceInstanceTemplate
      value: string
      description: >
        Specifies the instance template from which to create instances. You may combine sourceInstanceTemplate with instanceProperties to override specific values from an existing instance template. Bulk API follows the semantics of JSON Merge Patch described by RFC 7396. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - https://www.googleapis.com/compute/v1/projects/project /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate This field is optional.
        
    - name: instanceProperties
      value: object
      description: >
        The instance properties defining the VM instances to be created. Required if sourceInstanceTemplate is not provided.
        
    - name: locationPolicy
      value: object
      description: >
        Policy for choosing target zone. For more information, see Create VMs in bulk.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>
