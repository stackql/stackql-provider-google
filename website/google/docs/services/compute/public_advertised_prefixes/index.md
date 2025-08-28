--- 
title: public_advertised_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - public_advertised_prefixes
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

Creates, updates, deletes, gets or lists a <code>public_advertised_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>public_advertised_prefixes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.public_advertised_prefixes" /></td></tr>
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
    <td><CopyableCode code="dnsVerificationIp" /></td>
    <td><code>string</code></td>
    <td>The address to be used for reverse DNS verification.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicAdvertisedPrefix. An up-to-date fingerprint must be provided in order to update the PublicAdvertisedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicAdvertisedPrefix.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The address range, in CIDR format, represented by this public advertised prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#publicAdvertisedPrefix for public advertised prefixes. (default: compute#publicAdvertisedPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="pdpScope" /></td>
    <td><code>string</code></td>
    <td>Specifies how child public delegated prefix will be scoped. It could be one of following values: - `REGIONAL`: The public delegated prefix is regional only. The provisioning will take a few minutes. - `GLOBAL`: The public delegated prefix is global only. The provisioning will take ~4 weeks. - `GLOBAL_AND_REGIONAL` [output only]: The public delegated prefixes is BYOIP V1 legacy prefix. This is output only value and no longer supported in BYOIP V2. </td>
</tr>
<tr>
    <td><CopyableCode code="publicDelegatedPrefixs" /></td>
    <td><code>array</code></td>
    <td>[Output Only] The list of public delegated prefixes that exist for this public advertised prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedSecret" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The shared secret to be used for reverse DNS verification.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the public advertised prefix. Possible values include: - `INITIAL`: RPKI validation is complete. - `PTR_CONFIGURED`: User has configured the PTR. - `VALIDATED`: Reverse DNS lookup is successful. - `REVERSE_DNS_LOOKUP_FAILED`: Reverse DNS lookup failed. - `PREFIX_CONFIGURATION_IN_PROGRESS`: The prefix is being configured. - `PREFIX_CONFIGURATION_COMPLETE`: The prefix is fully configured. - `PREFIX_REMOVAL_IN_PROGRESS`: The prefix is being removed. </td>
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
    <td>A list of PublicAdvertisedPrefix resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#publicAdvertisedPrefix for public advertised prefixes. (default: compute#publicAdvertisedPrefixList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-publicAdvertisedPrefix"><code>publicAdvertisedPrefix</code></a></td>
    <td></td>
    <td>Returns the specified PublicAdvertisedPrefix resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the PublicAdvertisedPrefixes for a project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-publicAdvertisedPrefix"><code>publicAdvertisedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-publicAdvertisedPrefix"><code>publicAdvertisedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified PublicAdvertisedPrefix</td>
</tr>
<tr>
    <td><a href="#announce"><CopyableCode code="announce" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-publicAdvertisedPrefix"><code>publicAdvertisedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Announces the specified PublicAdvertisedPrefix</td>
</tr>
<tr>
    <td><a href="#withdraw"><CopyableCode code="withdraw" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-publicAdvertisedPrefix"><code>publicAdvertisedPrefix</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Withdraws the specified PublicAdvertisedPrefix</td>
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
<tr id="parameter-publicAdvertisedPrefix">
    <td><CopyableCode code="publicAdvertisedPrefix" /></td>
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

Returns the specified PublicAdvertisedPrefix resource.

```sql
SELECT
id,
name,
byoipApiVersion,
creationTimestamp,
description,
dnsVerificationIp,
fingerprint,
ipCidrRange,
kind,
pdpScope,
publicDelegatedPrefixs,
selfLink,
sharedSecret,
status
FROM google.compute.public_advertised_prefixes
WHERE project = '{{ project }}' -- required
AND publicAdvertisedPrefix = '{{ publicAdvertisedPrefix }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the PublicAdvertisedPrefixes for a project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.public_advertised_prefixes
WHERE project = '{{ project }}' -- required
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

Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.

```sql
INSERT INTO google.compute.public_advertised_prefixes (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__ipCidrRange,
data__dnsVerificationIp,
data__sharedSecret,
data__status,
data__pdpScope,
data__publicDelegatedPrefixs,
data__fingerprint,
data__byoipApiVersion,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ selfLink }}',
'{{ ipCidrRange }}',
'{{ dnsVerificationIp }}',
'{{ sharedSecret }}',
'{{ status }}',
'{{ pdpScope }}',
'{{ publicDelegatedPrefixs }}',
'{{ fingerprint }}',
'{{ byoipApiVersion }}',
'{{ project }}',
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
- name: public_advertised_prefixes
  props:
    - name: project
      value: string
      description: Required parameter for the public_advertised_prefixes resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#publicAdvertisedPrefix for public advertised prefixes.
        
      default: compute#publicAdvertisedPrefix
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
        
    - name: ipCidrRange
      value: string
      description: >
        The address range, in CIDR format, represented by this public advertised prefix.
        
    - name: dnsVerificationIp
      value: string
      description: >
        The address to be used for reverse DNS verification.
        
    - name: sharedSecret
      value: string
      description: >
        [Output Only] The shared secret to be used for reverse DNS verification.
        
    - name: status
      value: string
      description: >
        The status of the public advertised prefix. Possible values include: - `INITIAL`: RPKI validation is complete. - `PTR_CONFIGURED`: User has configured the PTR. - `VALIDATED`: Reverse DNS lookup is successful. - `REVERSE_DNS_LOOKUP_FAILED`: Reverse DNS lookup failed. - `PREFIX_CONFIGURATION_IN_PROGRESS`: The prefix is being configured. - `PREFIX_CONFIGURATION_COMPLETE`: The prefix is fully configured. - `PREFIX_REMOVAL_IN_PROGRESS`: The prefix is being removed. 
        
      valid_values: ['ANNOUNCED_TO_INTERNET', 'INITIAL', 'PREFIX_CONFIGURATION_COMPLETE', 'PREFIX_CONFIGURATION_IN_PROGRESS', 'PREFIX_REMOVAL_IN_PROGRESS', 'PTR_CONFIGURED', 'READY_TO_ANNOUNCE', 'REVERSE_DNS_LOOKUP_FAILED', 'VALIDATED']
    - name: pdpScope
      value: string
      description: >
        Specifies how child public delegated prefix will be scoped. It could be one of following values: - `REGIONAL`: The public delegated prefix is regional only. The provisioning will take a few minutes. - `GLOBAL`: The public delegated prefix is global only. The provisioning will take ~4 weeks. - `GLOBAL_AND_REGIONAL` [output only]: The public delegated prefixes is BYOIP V1 legacy prefix. This is output only value and no longer supported in BYOIP V2. 
        
      valid_values: ['GLOBAL', 'GLOBAL_AND_REGIONAL', 'REGIONAL']
    - name: publicDelegatedPrefixs
      value: array
      description: >
        [Output Only] The list of public delegated prefixes that exist for this public advertised prefix.
        
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a new PublicAdvertisedPrefix. An up-to-date fingerprint must be provided in order to update the PublicAdvertisedPrefix, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a PublicAdvertisedPrefix.
        
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

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

```sql
UPDATE google.compute.public_advertised_prefixes
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__dnsVerificationIp = '{{ dnsVerificationIp }}',
data__sharedSecret = '{{ sharedSecret }}',
data__status = '{{ status }}',
data__pdpScope = '{{ pdpScope }}',
data__publicDelegatedPrefixs = '{{ publicDelegatedPrefixs }}',
data__fingerprint = '{{ fingerprint }}',
data__byoipApiVersion = '{{ byoipApiVersion }}'
WHERE 
project = '{{ project }}' --required
AND publicAdvertisedPrefix = '{{ publicAdvertisedPrefix }}' --required
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

Deletes the specified PublicAdvertisedPrefix

```sql
DELETE FROM google.compute.public_advertised_prefixes
WHERE project = '{{ project }}' --required
AND publicAdvertisedPrefix = '{{ publicAdvertisedPrefix }}' --required
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

Announces the specified PublicAdvertisedPrefix

```sql
EXEC google.compute.public_advertised_prefixes.announce 
@project='{{ project }}' --required, 
@publicAdvertisedPrefix='{{ publicAdvertisedPrefix }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="withdraw">

Withdraws the specified PublicAdvertisedPrefix

```sql
EXEC google.compute.public_advertised_prefixes.withdraw 
@project='{{ project }}' --required, 
@publicAdvertisedPrefix='{{ publicAdvertisedPrefix }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
</Tabs>
