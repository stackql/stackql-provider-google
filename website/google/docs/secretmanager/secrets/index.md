--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
  - secretmanager
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>secrets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.secretmanager.secrets" /></td></tr>
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

A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.

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
    <td>Output only. The resource name of the Secret in the format `projects/*/secrets/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Secret was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryption" /></td>
    <td><code>object</code></td>
    <td>Optional. The customer-managed encryption configuration of the regionalized secrets. If no configuration is provided, Google-managed default encryption is used. Updates to the Secret encryption configuration only apply to SecretVersions added afterwards. They do not apply retroactively to existing SecretVersions. (id: CustomerManagedEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the currently stored Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `\p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125;` Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `[\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125;` No more than 64 labels can be assigned to a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The replication policy of the secret data attached to the Secret. The replication policy cannot be changed after the Secret has been created. (id: Replication)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>object</code></td>
    <td>Optional. Rotation policy attached to the Secret. May be excluded if there is no rotation policy. (id: Rotation)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Mapping of Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" Tags are used to organize and group resources. Tags can be used to control policy evaluation for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for the Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="versionAliases" /></td>
    <td><code>object</code></td>
    <td>Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore ('_') characters. An alias string must start with a letter and cannot be the string 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="versionDestroyTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Secret Version TTL after destruction request This is a part of the Delayed secret version destroy feature. For secret with TTL&gt;0, version destruction doesn't happen immediately on calling destroy instead the version goes to a disabled state and destruction happens after the TTL expires.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for SecretManagerService.ListSecrets.

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
    <td>A token to retrieve the next page of results. Pass this value in ListSecretsRequest.page_token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="secrets" /></td>
    <td><code>array</code></td>
    <td>The list of Secrets sorted in reverse by create_time (newest first).</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of Secrets but 0 when the ListSecretsRequest.filter field is set.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td></td>
    <td>Gets metadata for a given Secret.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Secrets.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a></td>
    <td>Creates a new Secret containing no SecretVersions.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates metadata of an existing Secret.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Secret.</td>
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
<tr id="parameter-secretsId">
    <td><CopyableCode code="secretsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-secretId">
    <td><CopyableCode code="secretId" /></td>
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

Gets metadata for a given Secret.

```sql
SELECT
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
replication,
rotation,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl
FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' -- required
AND secretsId = '{{ secretsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Secrets.

```sql
SELECT
nextPageToken,
secrets,
totalSize
FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new Secret containing no SecretVersions.

```sql
INSERT INTO google.secretmanager.secrets (
data__replication,
data__labels,
data__topics,
data__expireTime,
data__ttl,
data__etag,
data__rotation,
data__versionAliases,
data__annotations,
data__versionDestroyTtl,
data__customerManagedEncryption,
data__tags,
projectsId,
secretId
)
SELECT 
'{{ replication }}',
'{{ labels }}',
'{{ topics }}',
'{{ expireTime }}',
'{{ ttl }}',
'{{ etag }}',
'{{ rotation }}',
'{{ versionAliases }}',
'{{ annotations }}',
'{{ versionDestroyTtl }}',
'{{ customerManagedEncryption }}',
'{{ tags }}',
'{{ projectsId }}',
'{{ secretId }}'
RETURNING
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
replication,
rotation,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: secrets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the secrets resource.
    - name: replication
      value: object
      description: >
        Optional. Immutable. The replication policy of the secret data attached to the Secret. The replication policy cannot be changed after the Secret has been created.
        
    - name: labels
      value: object
      description: >
        The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `\p{Ll}\p{Lo}{0,62}` Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}` No more than 64 labels can be assigned to a given resource.
        
    - name: topics
      value: array
      description: >
        Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
        
    - name: expireTime
      value: string
      description: >
        Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
        
    - name: ttl
      value: string
      description: >
        Input only. The TTL for the Secret.
        
    - name: etag
      value: string
      description: >
        Optional. Etag of the currently stored Secret.
        
    - name: rotation
      value: object
      description: >
        Optional. Rotation policy attached to the Secret. May be excluded if there is no rotation policy.
        
    - name: versionAliases
      value: object
      description: >
        Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore ('_') characters. An alias string must start with a letter and cannot be the string 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion.
        
    - name: annotations
      value: object
      description: >
        Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB.
        
    - name: versionDestroyTtl
      value: string
      description: >
        Optional. Secret Version TTL after destruction request This is a part of the Delayed secret version destroy feature. For secret with TTL>0, version destruction doesn't happen immediately on calling destroy instead the version goes to a disabled state and destruction happens after the TTL expires.
        
    - name: customerManagedEncryption
      value: object
      description: >
        Optional. The customer-managed encryption configuration of the regionalized secrets. If no configuration is provided, Google-managed default encryption is used. Updates to the Secret encryption configuration only apply to SecretVersions added afterwards. They do not apply retroactively to existing SecretVersions.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Mapping of Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" Tags are used to organize and group resources. Tags can be used to control policy evaluation for the resource.
        
    - name: secretId
      value: string
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

Updates metadata of an existing Secret.

```sql
UPDATE google.secretmanager.secrets
SET 
data__replication = '{{ replication }}',
data__labels = '{{ labels }}',
data__topics = '{{ topics }}',
data__expireTime = '{{ expireTime }}',
data__ttl = '{{ ttl }}',
data__etag = '{{ etag }}',
data__rotation = '{{ rotation }}',
data__versionAliases = '{{ versionAliases }}',
data__annotations = '{{ annotations }}',
data__versionDestroyTtl = '{{ versionDestroyTtl }}',
data__customerManagedEncryption = '{{ customerManagedEncryption }}',
data__tags = '{{ tags }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND secretsId = '{{ secretsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
replication,
rotation,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl;
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

Deletes a Secret.

```sql
DELETE FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' --required
AND secretsId = '{{ secretsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
