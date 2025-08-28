--- 
title: sha
hide_title: false
hide_table_of_contents: false
keywords:
  - sha
  - firebase
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>sha</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sha</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.sha" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of each `ShaCertificate` associated with the `AndroidApp`.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-androidAppsId"><code>androidAppsId</code></a></td>
    <td></td>
    <td>Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-androidAppsId"><code>androidAppsId</code></a></td>
    <td></td>
    <td>Adds a ShaCertificate to the specified AndroidApp.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-androidAppsId"><code>androidAppsId</code></a>, <a href="#parameter-shaId"><code>shaId</code></a></td>
    <td></td>
    <td>Removes a ShaCertificate from the specified AndroidApp.</td>
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
<tr id="parameter-androidAppsId">
    <td><CopyableCode code="androidAppsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-shaId">
    <td><CopyableCode code="shaId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

```sql
SELECT
certificates
FROM firebase.firebase.sha
WHERE projectsId = '{{ projectsId }}' -- required
AND androidAppsId = '{{ androidAppsId }}' -- required;
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

Adds a ShaCertificate to the specified AndroidApp.

```sql
INSERT INTO firebase.firebase.sha (
data__name,
data__shaHash,
data__certType,
projectsId,
androidAppsId
)
SELECT 
'{{ name }}',
'{{ shaHash }}',
'{{ certType }}',
'{{ projectsId }}',
'{{ androidAppsId }}'
RETURNING
name,
certType,
shaHash
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sha
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sha resource.
    - name: androidAppsId
      value: string
      description: Required parameter for the sha resource.
    - name: name
      value: string
      description: >
        The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)).
        
    - name: shaHash
      value: string
      description: >
        The certificate hash for the `AndroidApp`.
        
    - name: certType
      value: string
      description: >
        The type of SHA certificate encoded in the hash.
        
      valid_values: ['SHA_CERTIFICATE_TYPE_UNSPECIFIED', 'SHA_1', 'SHA_256']
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

Removes a ShaCertificate from the specified AndroidApp.

```sql
DELETE FROM firebase.firebase.sha
WHERE projectsId = '{{ projectsId }}' --required
AND androidAppsId = '{{ androidAppsId }}' --required
AND shaId = '{{ shaId }}' --required;
```
</TabItem>
</Tabs>
