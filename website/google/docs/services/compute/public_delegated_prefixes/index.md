--- 
title: public_delegated_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - public_delegated_prefixes
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

Creates, updates, deletes, gets or lists a <code>public_delegated_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>public_delegated_prefixes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.public_delegated_prefixes" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="allocatablePrefixLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>The allocatable prefix length supported by this public delegated prefix. This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.</td>
</tr>
<tr>
    <td><CopyableCode code="byoipApiVersion" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The version of BYOIP API.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicDelegatedPrefix. An up-to-date fingerprint must be provided in order to update the PublicDelegatedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicDelegatedPrefix.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The IP address range, in CIDR format, represented by this public delegated prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="isLiveMigration" /></td>
    <td><code>boolean</code></td>
    <td>If true, the prefix will be live migrated.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#publicDelegatedPrefix for public delegated prefixes. (default: compute#publicDelegatedPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The public delegated prefix mode for IPv6 only.</td>
</tr>
<tr>
    <td><CopyableCode code="parentPrefix" /></td>
    <td><code>string</code></td>
    <td>The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.</td>
</tr>
<tr>
    <td><CopyableCode code="publicDelegatedSubPrefixs" /></td>
    <td><code>array</code></td>
    <td>The list of sub public delegated prefixes that exist for this public delegated prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the public delegated prefix resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the public delegated prefix, which can be one of following values: - `INITIALIZING` The public delegated prefix is being initialized and addresses cannot be created yet. - `READY_TO_ANNOUNCE` The public delegated prefix is a live migration prefix and is active. - `ANNOUNCED` The public delegated prefix is announced and ready to use. - `DELETING` The public delegated prefix is being deprovsioned. </td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of PublicDelegatedPrefix resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#publicDelegatedPrefixList for public delegated prefixes. (default: compute#publicDelegatedPrefixList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicDelegatedPrefix"><code>publicDelegatedPrefix</code></a></td>
    <td></td>
    <td>Returns the specified PublicDelegatedPrefix resource in the given region.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the PublicDelegatedPrefixes for a project in the given region.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicDelegatedPrefix"><code>publicDelegatedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicDelegatedPrefix"><code>publicDelegatedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified PublicDelegatedPrefix in the given region.</td>
</tr>
<tr>
    <td><a href="#announce"><CopyableCode code="announce" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicDelegatedPrefix"><code>publicDelegatedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Announces the specified PublicDelegatedPrefix in the given region.</td>
</tr>
<tr>
    <td><a href="#withdraw"><CopyableCode code="withdraw" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicDelegatedPrefix"><code>publicDelegatedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Withdraws the specified PublicDelegatedPrefix in the given region.</td>
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
<tr id="parameter-publicDelegatedPrefix">
    <td><CopyableCode code="publicDelegatedPrefix" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Returns the specified PublicDelegatedPrefix resource in the given region.

```sql
SELECT
id,
name,
allocatablePrefixLength,
byoipApiVersion,
creationTimestamp,
description,
fingerprint,
ipCidrRange,
isLiveMigration,
kind,
mode,
parentPrefix,
publicDelegatedSubPrefixs,
region,
selfLink,
status
FROM google.compute.public_delegated_prefixes
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND publicDelegatedPrefix = '{{ publicDelegatedPrefix }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the PublicDelegatedPrefixes for a project in the given region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.public_delegated_prefixes
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.

```sql
INSERT INTO google.compute.public_delegated_prefixes (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__region,
data__ipCidrRange,
data__status,
data__parentPrefix,
data__publicDelegatedSubPrefixs,
data__isLiveMigration,
data__fingerprint,
data__mode,
data__allocatablePrefixLength,
data__byoipApiVersion,
project,
region,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ selfLink }}',
'{{ region }}',
'{{ ipCidrRange }}',
'{{ status }}',
'{{ parentPrefix }}',
'{{ publicDelegatedSubPrefixs }}',
{{ isLiveMigration }},
'{{ fingerprint }}',
'{{ mode }}',
{{ allocatablePrefixLength }},
'{{ byoipApiVersion }}',
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
- name: public_delegated_prefixes
  props:
    - name: project
      value: string
      description: Required parameter for the public_delegated_prefixes resource.
    - name: region
      value: string
      description: Required parameter for the public_delegated_prefixes resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#publicDelegatedPrefix for public delegated prefixes.
        
      default: compute#publicDelegatedPrefix
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource type. The server generates this identifier.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the public delegated prefix resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
        
    - name: ipCidrRange
      value: string
      description: >
        The IP address range, in CIDR format, represented by this public delegated prefix.
        
    - name: status
      value: string
      description: >
        [Output Only] The status of the public delegated prefix, which can be one of following values: - `INITIALIZING` The public delegated prefix is being initialized and addresses cannot be created yet. - `READY_TO_ANNOUNCE` The public delegated prefix is a live migration prefix and is active. - `ANNOUNCED` The public delegated prefix is announced and ready to use. - `DELETING` The public delegated prefix is being deprovsioned. 
        
      valid_values: ['ANNOUNCED', 'ANNOUNCED_TO_GOOGLE', 'ANNOUNCED_TO_INTERNET', 'DELETING', 'INITIALIZING', 'READY_TO_ANNOUNCE']
    - name: parentPrefix
      value: string
      description: >
        The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
        
    - name: publicDelegatedSubPrefixs
      value: array
      description: >
        The list of sub public delegated prefixes that exist for this public delegated prefix.
        
    - name: isLiveMigration
      value: boolean
      description: >
        If true, the prefix will be live migrated.
        
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicDelegatedPrefix. An up-to-date fingerprint must be provided in order to update the PublicDelegatedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicDelegatedPrefix.
        
    - name: mode
      value: string
      description: >
        The public delegated prefix mode for IPv6 only.
        
      valid_values: ['DELEGATION', 'EXTERNAL_IPV6_FORWARDING_RULE_CREATION', 'EXTERNAL_IPV6_SUBNETWORK_CREATION']
    - name: allocatablePrefixLength
      value: integer
      description: >
        The allocatable prefix length supported by this public delegated prefix. This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.
        
    - name: byoipApiVersion
      value: string
      description: >
        [Output Only] The version of BYOIP API.
        
      valid_values: ['V1', 'V2']
    - name: requestId
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

Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

```sql
UPDATE google.compute.public_delegated_prefixes
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__region = '{{ region }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__status = '{{ status }}',
data__parentPrefix = '{{ parentPrefix }}',
data__publicDelegatedSubPrefixs = '{{ publicDelegatedSubPrefixs }}',
data__isLiveMigration = {{ isLiveMigration }},
data__fingerprint = '{{ fingerprint }}',
data__mode = '{{ mode }}',
data__allocatablePrefixLength = {{ allocatablePrefixLength }},
data__byoipApiVersion = '{{ byoipApiVersion }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND publicDelegatedPrefix = '{{ publicDelegatedPrefix }}' --required
AND requestId = '{{ requestId}}'
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
zone;
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

Deletes the specified PublicDelegatedPrefix in the given region.

```sql
DELETE FROM google.compute.public_delegated_prefixes
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND publicDelegatedPrefix = '{{ publicDelegatedPrefix }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="announce"
    values={[
        { label: 'announce', value: 'announce' },
        { label: 'withdraw', value: 'withdraw' }
    ]}
>
<TabItem value="announce">

Announces the specified PublicDelegatedPrefix in the given region.

```sql
EXEC google.compute.public_delegated_prefixes.announce 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@publicDelegatedPrefix='{{ publicDelegatedPrefix }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="withdraw">

Withdraws the specified PublicDelegatedPrefix in the given region.

```sql
EXEC google.compute.public_delegated_prefixes.withdraw 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@publicDelegatedPrefix='{{ publicDelegatedPrefix }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
</Tabs>
