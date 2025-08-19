--- 
title: resource_value_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_value_configs
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>resource_value_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_value_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.resource_value_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_resource_value_configs_get"
    values={[
        { label: 'organizations_resource_value_configs_get', value: 'organizations_resource_value_configs_get' },
        { label: 'organizations_resource_value_configs_list', value: 'organizations_resource_value_configs_list' }
    ]}
>
<TabItem value="organizations_resource_value_configs_get">

A resource value configuration (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.

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
    <td>Name for the resource value configuration</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider this configuration applies to</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp this resource value configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the resource value configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabelsSelector" /></td>
    <td><code>object</code></td>
    <td>List of resource labels to search for, evaluated with `AND`. For example, `"resource_labels_selector": &#123;"key": "value", "env": "prod"&#125;` will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td>Required. Resource value level this expression represents</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope will be checked with `AND` of other resources.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveDataProtectionMapping" /></td>
    <td><code>object</code></td>
    <td>A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". (id: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="tagValues" /></td>
    <td><code>array</code></td>
    <td>Required. Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp this resource value configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_resource_value_configs_list">

Response message to list resource value configs

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
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigs" /></td>
    <td><code>array</code></td>
    <td>The resource value configs from the specified parent.</td>
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
    <td><a href="#organizations_resource_value_configs_get"><CopyableCode code="organizations_resource_value_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td></td>
    <td>Gets a ResourceValueConfig.</td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_list"><CopyableCode code="organizations_resource_value_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all ResourceValueConfigs.</td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_batch_create"><CopyableCode code="organizations_resource_value_configs_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.</td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_patch"><CopyableCode code="organizations_resource_value_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing ResourceValueConfigs with new rules.</td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_delete"><CopyableCode code="organizations_resource_value_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td></td>
    <td>Deletes a ResourceValueConfig.</td>
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
<tr id="parameter-resourceValueConfigsId">
    <td><CopyableCode code="resourceValueConfigsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_resource_value_configs_get"
    values={[
        { label: 'organizations_resource_value_configs_get', value: 'organizations_resource_value_configs_get' },
        { label: 'organizations_resource_value_configs_list', value: 'organizations_resource_value_configs_list' }
    ]}
>
<TabItem value="organizations_resource_value_configs_get">

Gets a ResourceValueConfig.

```sql
SELECT
name,
cloudProvider,
createTime,
description,
resourceLabelsSelector,
resourceType,
resourceValue,
scope,
sensitiveDataProtectionMapping,
tagValues,
updateTime
FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_resource_value_configs_list">

Lists all ResourceValueConfigs.

```sql
SELECT
nextPageToken,
resourceValueConfigs
FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_resource_value_configs_batch_create"
    values={[
        { label: 'organizations_resource_value_configs_batch_create', value: 'organizations_resource_value_configs_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_resource_value_configs_batch_create">

Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.

```sql
INSERT INTO google.securitycenter.resource_value_configs (
data__requests,
organizationsId
)
SELECT 
'{{ requests }}',
'{{ organizationsId }}'
RETURNING
resourceValueConfigs
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: resource_value_configs
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the resource_value_configs resource.
    - name: requests
      value: array
      description: >
        Required. The resource value configs to be created.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_resource_value_configs_patch"
    values={[
        { label: 'organizations_resource_value_configs_patch', value: 'organizations_resource_value_configs_patch' }
    ]}
>
<TabItem value="organizations_resource_value_configs_patch">

Updates an existing ResourceValueConfigs with new rules.

```sql
UPDATE google.securitycenter.resource_value_configs
SET 
data__name = '{{ name }}',
data__resourceValue = '{{ resourceValue }}',
data__tagValues = '{{ tagValues }}',
data__resourceType = '{{ resourceType }}',
data__scope = '{{ scope }}',
data__resourceLabelsSelector = '{{ resourceLabelsSelector }}',
data__description = '{{ description }}',
data__cloudProvider = '{{ cloudProvider }}',
data__sensitiveDataProtectionMapping = '{{ sensitiveDataProtectionMapping }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
cloudProvider,
createTime,
description,
resourceLabelsSelector,
resourceType,
resourceValue,
scope,
sensitiveDataProtectionMapping,
tagValues,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_resource_value_configs_delete"
    values={[
        { label: 'organizations_resource_value_configs_delete', value: 'organizations_resource_value_configs_delete' }
    ]}
>
<TabItem value="organizations_resource_value_configs_delete">

Deletes a ResourceValueConfig.

```sql
DELETE FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' --required;
```
</TabItem>
</Tabs>
