--- 
title: cmek_config
hide_title: false
hide_table_of_contents: false
keywords:
  - cmek_config
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>cmek_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cmek_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.cmek_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get_cmek_config"
    values={[
        { label: 'projects_locations_get_cmek_config', value: 'projects_locations_get_cmek_config' }
    ]}
>
<TabItem value="projects_locations_get_cmek_config">

Configurations used to enable CMEK data encryption with Cloud KMS keys.

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
    <td>Required. The name of the CmekConfig of the form `projects/&#123;project&#125;/locations/&#123;location&#125;/cmekConfig` or `projects/&#123;project&#125;/locations/&#123;location&#125;/cmekConfigs/&#123;cmek_config&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The default CmekConfig for the Customer.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Required. KMS key resource name which will be used to encrypt resources `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;keyRing&#125;/cryptoKeys/&#123;keyId&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. KMS key version resource name which will be used to encrypt resources `/cryptoKeyVersions/&#123;keyVersion&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRotationTimestampMicros" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The timestamp of the last key rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="notebooklmState" /></td>
    <td><code>string</code></td>
    <td>Output only. Whether the NotebookLM Corpus is ready to be used.</td>
</tr>
<tr>
    <td><CopyableCode code="singleRegionKeys" /></td>
    <td><code>array</code></td>
    <td>Optional. Single-regional CMEKs that are required for some VAIS features.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The states of the CmekConfig.</td>
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
    <td><a href="#projects_locations_get_cmek_config"><CopyableCode code="projects_locations_get_cmek_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets the CmekConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_update_cmek_config"><CopyableCode code="projects_locations_update_cmek_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-setDefault"><code>setDefault</code></a></td>
    <td>Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.</td>
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
<tr id="parameter-setDefault">
    <td><CopyableCode code="setDefault" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get_cmek_config"
    values={[
        { label: 'projects_locations_get_cmek_config', value: 'projects_locations_get_cmek_config' }
    ]}
>
<TabItem value="projects_locations_get_cmek_config">

Gets the CmekConfig.

```sql
SELECT
name,
isDefault,
kmsKey,
kmsKeyVersion,
lastRotationTimestampMicros,
notebooklmState,
singleRegionKeys,
state
FROM google.discoveryengine.cmek_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_update_cmek_config"
    values={[
        { label: 'projects_locations_update_cmek_config', value: 'projects_locations_update_cmek_config' }
    ]}
>
<TabItem value="projects_locations_update_cmek_config">

Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.

```sql
UPDATE google.discoveryengine.cmek_config
SET 
data__name = '{{ name }}',
data__kmsKey = '{{ kmsKey }}',
data__singleRegionKeys = '{{ singleRegionKeys }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND setDefault = {{ setDefault}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
