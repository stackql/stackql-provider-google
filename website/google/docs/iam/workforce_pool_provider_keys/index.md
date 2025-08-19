--- 
title: workforce_pool_provider_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - workforce_pool_provider_keys
  - iam
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

Creates, updates, deletes, gets or lists a <code>workforce_pool_provider_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workforce_pool_provider_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.workforce_pool_provider_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Represents a public key configuration for a Workforce Pool Provider. The key can be configured in your identity provider to encrypt SAML assertions. Google holds the corresponding private key, which it uses to decrypt encrypted tokens.

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
    <td>Identifier. The resource name of the key. Format: `locations/&#123;location&#125;/workforcePools/&#123;workforce_pool_id&#125;/providers/&#123;provider_id&#125;/keys/&#123;key_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time after which the key will be permanently deleted and cannot be recovered. Note that the key may get purged before this time if the total limit of keys per provider is exceeded.</td>
</tr>
<tr>
    <td><CopyableCode code="keyData" /></td>
    <td><code>object</code></td>
    <td>Immutable. Public half of the asymmetric key. (id: KeyData)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the key.</td>
</tr>
<tr>
    <td><CopyableCode code="use" /></td>
    <td><code>string</code></td>
    <td>Required. The purpose of the key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListWorkforcePoolProviderKeys.

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
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="workforcePoolProviderKeys" /></td>
    <td><code>array</code></td>
    <td>A list of WorkforcePoolProviderKeys.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Gets a WorkforcePoolProviderKey.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkforcePoolProviderKeys in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted keys are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-workforcePoolProviderKeyId"><code>workforcePoolProviderKeyId</code></a></td>
    <td>Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Deletes a WorkforcePoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Undeletes a WorkforcePoolProviderKey, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workforcePoolsId">
    <td><CopyableCode code="workforcePoolsId" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-workforcePoolProviderKeyId">
    <td><CopyableCode code="workforcePoolProviderKeyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a WorkforcePoolProviderKey.

```sql
SELECT
name,
expireTime,
keyData,
state,
use
FROM google.iam.workforce_pool_provider_keys
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkforcePoolProviderKeys in a WorkforcePoolProvider. If `show_deleted` is set to `true`, then deleted keys are also listed.

```sql
SELECT
nextPageToken,
workforcePoolProviderKeys
FROM google.iam.workforce_pool_provider_keys
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider.

```sql
INSERT INTO google.iam.workforce_pool_provider_keys (
data__name,
data__keyData,
data__use,
locationsId,
workforcePoolsId,
providersId,
workforcePoolProviderKeyId
)
SELECT 
'{{ name }}',
'{{ keyData }}',
'{{ use }}',
'{{ locationsId }}',
'{{ workforcePoolsId }}',
'{{ providersId }}',
'{{ workforcePoolProviderKeyId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workforce_pool_provider_keys
  props:
    - name: locationsId
      value: string
      description: Required parameter for the workforce_pool_provider_keys resource.
    - name: workforcePoolsId
      value: string
      description: Required parameter for the workforce_pool_provider_keys resource.
    - name: providersId
      value: string
      description: Required parameter for the workforce_pool_provider_keys resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the key. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}/keys/{key_id}`
        
    - name: keyData
      value: object
      description: >
        Immutable. Public half of the asymmetric key.
        
    - name: use
      value: string
      description: >
        Required. The purpose of the key.
        
      valid_values: ['KEY_USE_UNSPECIFIED', 'ENCRYPTION']
    - name: workforcePoolProviderKeyId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a WorkforcePoolProviderKey. You can undelete a key for 30 days. After 30 days, deletion is permanent.

```sql
DELETE FROM google.iam.workforce_pool_provider_keys
WHERE locationsId = '{{ locationsId }}' --required
AND workforcePoolsId = '{{ workforcePoolsId }}' --required
AND providersId = '{{ providersId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes a WorkforcePoolProviderKey, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.workforce_pool_provider_keys.undelete 
@locationsId='{{ locationsId }}' --required, 
@workforcePoolsId='{{ workforcePoolsId }}' --required, 
@providersId='{{ providersId }}' --required, 
@keysId='{{ keysId }}' --required;
```
</TabItem>
</Tabs>
