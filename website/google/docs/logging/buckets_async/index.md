--- 
title: buckets_async
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets_async
  - logging
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

Creates, updates, deletes, gets or lists a <code>buckets_async</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets_async</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.buckets_async" /></td></tr>
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
    <td><a href="#projects_locations_buckets_create_async"><CopyableCode code="projects_locations_buckets_create_async" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_create_async"><CopyableCode code="organizations_locations_buckets_create_async" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_create_async"><CopyableCode code="folders_locations_buckets_create_async" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_create_async"><CopyableCode code="billing_accounts_locations_buckets_create_async" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bucketId"><code>bucketId</code></a></td>
    <td>Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_buckets_update_async"><CopyableCode code="projects_locations_buckets_update_async" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_buckets_update_async"><CopyableCode code="organizations_locations_buckets_update_async" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#folders_locations_buckets_update_async"><CopyableCode code="folders_locations_buckets_update_async" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_buckets_update_async"><CopyableCode code="billing_accounts_locations_buckets_update_async" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bucketsId">
    <td><CopyableCode code="bucketsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bucketId">
    <td><CopyableCode code="bucketId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_buckets_create_async"
    values={[
        { label: 'projects_locations_buckets_create_async', value: 'projects_locations_buckets_create_async' },
        { label: 'organizations_locations_buckets_create_async', value: 'organizations_locations_buckets_create_async' },
        { label: 'folders_locations_buckets_create_async', value: 'folders_locations_buckets_create_async' },
        { label: 'billing_accounts_locations_buckets_create_async', value: 'billing_accounts_locations_buckets_create_async' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_buckets_create_async">

Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets_async (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
projectsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="organizations_locations_buckets_create_async">

Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets_async (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
organizationsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="folders_locations_buckets_create_async">

Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets_async (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
foldersId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ bucketId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_create_async">

Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.

```sql
INSERT INTO google.logging.buckets_async (
data__description,
data__retentionDays,
data__locked,
data__analyticsEnabled,
data__restrictedFields,
data__indexConfigs,
data__cmekSettings,
billingAccountsId,
locationsId,
bucketId
)
SELECT 
'{{ description }}',
{{ retentionDays }},
{{ locked }},
{{ analyticsEnabled }},
'{{ restrictedFields }}',
'{{ indexConfigs }}',
'{{ cmekSettings }}',
'{{ billingAccountsId }}',
'{{ locationsId }}',
'{{ bucketId }}'
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
- name: buckets_async
  props:
    - name: projectsId
      value: string
      description: Required parameter for the buckets_async resource.
    - name: locationsId
      value: string
      description: Required parameter for the buckets_async resource.
    - name: organizationsId
      value: string
      description: Required parameter for the buckets_async resource.
    - name: foldersId
      value: string
      description: Required parameter for the buckets_async resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the buckets_async resource.
    - name: description
      value: string
      description: >
        Optional. Describes this bucket.
        
    - name: retentionDays
      value: integer
      description: >
        Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
        
    - name: locked
      value: boolean
      description: >
        Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
        
    - name: analyticsEnabled
      value: boolean
      description: >
        Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.
        
    - name: restrictedFields
      value: array
      description: >
        Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)
        
    - name: indexConfigs
      value: array
      description: >
        Optional. A list of indexed fields and related configuration data.
        
    - name: cmekSettings
      value: object
      description: >
        Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.
        
    - name: bucketId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_buckets_update_async"
    values={[
        { label: 'projects_locations_buckets_update_async', value: 'projects_locations_buckets_update_async' },
        { label: 'organizations_locations_buckets_update_async', value: 'organizations_locations_buckets_update_async' },
        { label: 'folders_locations_buckets_update_async', value: 'folders_locations_buckets_update_async' },
        { label: 'billing_accounts_locations_buckets_update_async', value: 'billing_accounts_locations_buckets_update_async' }
    ]}
>
<TabItem value="projects_locations_buckets_update_async">

Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets_async
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
<TabItem value="organizations_locations_buckets_update_async">

Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets_async
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
<TabItem value="folders_locations_buckets_update_async">

Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets_async
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
<TabItem value="billing_accounts_locations_buckets_update_async">

Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

```sql
UPDATE google.logging.buckets_async
SET 
data__description = '{{ description }}',
data__retentionDays = {{ retentionDays }},
data__locked = {{ locked }},
data__analyticsEnabled = {{ analyticsEnabled }},
data__restrictedFields = '{{ restrictedFields }}',
data__indexConfigs = '{{ indexConfigs }}',
data__cmekSettings = '{{ cmekSettings }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
