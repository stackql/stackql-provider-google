--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys" /></td></tr>
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

A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.

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
    <td>Identifier. The resource name for the Key in the format `projects/&#123;project&#125;/keys/&#123;key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="androidSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for keys that can be used by Android apps. (id: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp corresponding to the creation of this key.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human-readable display name of this key. Modifiable by user.</td>
</tr>
<tr>
    <td><CopyableCode code="expressSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for keys that can be used by reCAPTCHA Express. (id: GoogleCloudRecaptchaenterpriseV1ExpressKeySettings)</td>
</tr>
<tr>
    <td><CopyableCode code="iosSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for keys that can be used by iOS apps. (id: GoogleCloudRecaptchaenterpriseV1IOSKeySettings)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha/docs/labels).</td>
</tr>
<tr>
    <td><CopyableCode code="testingOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options for user acceptance testing. (id: GoogleCloudRecaptchaenterpriseV1TestingOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="wafSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for WAF (id: GoogleCloudRecaptchaenterpriseV1WafSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="webSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for keys that can be used by websites. (id: GoogleCloudRecaptchaenterpriseV1WebKeySettings)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response to request to list keys in a project.

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
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>Key details.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results. It is set to empty if no keys remain in results.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Returns the specified key.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all keys that belong to a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new reCAPTCHA Enterprise key.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified key.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Deletes the specified key.</td>
</tr>
<tr>
    <td><a href="#migrate"><CopyableCode code="migrate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the specified key.

```sql
SELECT
name,
androidSettings,
createTime,
displayName,
expressSettings,
iosSettings,
labels,
testingOptions,
wafSettings,
webSettings
FROM google.recaptchaenterprise.keys
WHERE projectsId = '{{ projectsId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns the list of all keys that belong to a project.

```sql
SELECT
keys,
nextPageToken
FROM google.recaptchaenterprise.keys
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new reCAPTCHA Enterprise key.

```sql
INSERT INTO google.recaptchaenterprise.keys (
data__name,
data__displayName,
data__webSettings,
data__androidSettings,
data__iosSettings,
data__expressSettings,
data__labels,
data__testingOptions,
data__wafSettings,
projectsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ webSettings }}',
'{{ androidSettings }}',
'{{ iosSettings }}',
'{{ expressSettings }}',
'{{ labels }}',
'{{ testingOptions }}',
'{{ wafSettings }}',
'{{ projectsId }}'
RETURNING
name,
androidSettings,
createTime,
displayName,
expressSettings,
iosSettings,
labels,
testingOptions,
wafSettings,
webSettings
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keys
  props:
    - name: projectsId
      value: string
      description: Required parameter for the keys resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`.
        
    - name: displayName
      value: string
      description: >
        Required. Human-readable display name of this key. Modifiable by user.
        
    - name: webSettings
      value: object
      description: >
        Settings for keys that can be used by websites.
        
    - name: androidSettings
      value: object
      description: >
        Settings for keys that can be used by Android apps.
        
    - name: iosSettings
      value: object
      description: >
        Settings for keys that can be used by iOS apps.
        
    - name: expressSettings
      value: object
      description: >
        Settings for keys that can be used by reCAPTCHA Express.
        
    - name: labels
      value: object
      description: >
        Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha/docs/labels).
        
    - name: testingOptions
      value: object
      description: >
        Optional. Options for user acceptance testing.
        
    - name: wafSettings
      value: object
      description: >
        Optional. Settings for WAF
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specified key.

```sql
UPDATE google.recaptchaenterprise.keys
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__webSettings = '{{ webSettings }}',
data__androidSettings = '{{ androidSettings }}',
data__iosSettings = '{{ iosSettings }}',
data__expressSettings = '{{ expressSettings }}',
data__labels = '{{ labels }}',
data__testingOptions = '{{ testingOptions }}',
data__wafSettings = '{{ wafSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND keysId = '{{ keysId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
androidSettings,
createTime,
displayName,
expressSettings,
iosSettings,
labels,
testingOptions,
wafSettings,
webSettings;
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

Deletes the specified key.

```sql
DELETE FROM google.recaptchaenterprise.keys
WHERE projectsId = '{{ projectsId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="migrate"
    values={[
        { label: 'migrate', value: 'migrate' }
    ]}
>
<TabItem value="migrate">

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

```sql
EXEC google.recaptchaenterprise.keys.migrate 
@projectsId='{{ projectsId }}' --required, 
@keysId='{{ keysId }}' --required 
@@json=
'{
"skipBillingCheck": {{ skipBillingCheck }}
}';
```
</TabItem>
</Tabs>
