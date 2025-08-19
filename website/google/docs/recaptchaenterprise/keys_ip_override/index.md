--- 
title: keys_ip_override
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_ip_override
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists a <code>keys_ip_override</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys_ip_override</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys_ip_override" /></td></tr>
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
    <td><a href="#add_ip_override"><CopyableCode code="add_ip_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Adds an IP override to a key. The following restrictions hold: * The maximum number of IP overrides per key is 1000. * For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.</td>
</tr>
<tr>
    <td><a href="#remove_ip_override"><CopyableCode code="remove_ip_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Removes an IP override from a key. The following restrictions hold: * If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned. * If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="add_ip_override"
    values={[
        { label: 'add_ip_override', value: 'add_ip_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_ip_override">

Adds an IP override to a key. The following restrictions hold: * The maximum number of IP overrides per key is 1000. * For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.

```sql
INSERT INTO google.recaptchaenterprise.keys_ip_override (
data__ipOverrideData,
projectsId,
keysId
)
SELECT 
'{{ ipOverrideData }}',
'{{ projectsId }}',
'{{ keysId }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keys_ip_override
  props:
    - name: projectsId
      value: string
      description: Required parameter for the keys_ip_override resource.
    - name: keysId
      value: string
      description: Required parameter for the keys_ip_override resource.
    - name: ipOverrideData
      value: object
      description: >
        Required. IP override added to the key.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_ip_override"
    values={[
        { label: 'remove_ip_override', value: 'remove_ip_override' }
    ]}
>
<TabItem value="remove_ip_override">

Removes an IP override from a key. The following restrictions hold: * If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned. * If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.

```sql
DELETE FROM google.recaptchaenterprise.keys_ip_override
WHERE projectsId = '{{ projectsId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
</Tabs>
