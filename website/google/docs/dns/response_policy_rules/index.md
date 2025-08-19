--- 
title: response_policy_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - response_policy_rules
  - dns
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

Creates, updates, deletes, gets or lists a <code>response_policy_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>response_policy_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.response_policy_rules" /></td></tr>
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

A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.

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
    <td><CopyableCode code="behavior" /></td>
    <td><code>string</code></td>
    <td>Answer this query with a behavior rather than DNS data.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#responsePolicyRule)</td>
</tr>
<tr>
    <td><CopyableCode code="localData" /></td>
    <td><code>object</code></td>
    <td>Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed. (id: ResponsePolicyRuleLocalData)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>An identifier for this rule. Must be unique with the ResponsePolicy.</td>
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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>This field indicates that more results are available beyond the last page displayed. To fetch the results, make another list request and use this value as your page token. This lets you retrieve the complete contents of a very large collection one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You can't retrieve a consistent snapshot of a collection larger than the maximum page size.</td>
</tr>
<tr>
    <td><CopyableCode code="responsePolicyRules" /></td>
    <td><code>array</code></td>
    <td>The Response Policy Rule resources.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a>, <a href="#parameter-responsePolicyRule"><code>responsePolicyRule</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing Response Policy Rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates all Response Policy Rules associated with a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new Response Policy Rule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a>, <a href="#parameter-responsePolicyRule"><code>responsePolicyRule</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing Response Policy Rule.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a>, <a href="#parameter-responsePolicyRule"><code>responsePolicyRule</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Updates an existing Response Policy Rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a>, <a href="#parameter-responsePolicyRule"><code>responsePolicyRule</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created Response Policy Rule.</td>
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
<tr id="parameter-responsePolicy">
    <td><CopyableCode code="responsePolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-responsePolicyRule">
    <td><CopyableCode code="responsePolicyRule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientOperationId">
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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

Fetches the representation of an existing Response Policy Rule.

```sql
SELECT
behavior,
dnsName,
kind,
localData,
ruleName
FROM google.dns.response_policy_rules
WHERE project = '{{ project }}' -- required
AND responsePolicy = '{{ responsePolicy }}' -- required
AND responsePolicyRule = '{{ responsePolicyRule }}' -- required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
<TabItem value="list">

Enumerates all Response Policy Rules associated with a project.

```sql
SELECT
nextPageToken,
responsePolicyRules
FROM google.dns.response_policy_rules
WHERE project = '{{ project }}' -- required
AND responsePolicy = '{{ responsePolicy }}' -- required
AND maxResults = '{{ maxResults }}'
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

Creates a new Response Policy Rule.

```sql
INSERT INTO google.dns.response_policy_rules (
data__ruleName,
data__dnsName,
data__localData,
data__behavior,
data__kind,
project,
responsePolicy,
clientOperationId
)
SELECT 
'{{ ruleName }}',
'{{ dnsName }}',
'{{ localData }}',
'{{ behavior }}',
'{{ kind }}',
'{{ project }}',
'{{ responsePolicy }}',
'{{ clientOperationId }}'
RETURNING
behavior,
dnsName,
kind,
localData,
ruleName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: response_policy_rules
  props:
    - name: project
      value: string
      description: Required parameter for the response_policy_rules resource.
    - name: responsePolicy
      value: string
      description: Required parameter for the response_policy_rules resource.
    - name: ruleName
      value: string
      description: >
        An identifier for this rule. Must be unique with the ResponsePolicy.
        
    - name: dnsName
      value: string
      description: >
        The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
        
    - name: localData
      value: object
      description: >
        Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
        
    - name: behavior
      value: string
      description: >
        Answer this query with a behavior rather than DNS data.
        
      valid_values: ['behaviorUnspecified', 'bypassResponsePolicy']
    - name: kind
      value: string
      default: dns#responsePolicyRule
    - name: clientOperationId
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

Applies a partial update to an existing Response Policy Rule.

```sql
UPDATE google.dns.response_policy_rules
SET 
data__ruleName = '{{ ruleName }}',
data__dnsName = '{{ dnsName }}',
data__localData = '{{ localData }}',
data__behavior = '{{ behavior }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND responsePolicyRule = '{{ responsePolicyRule }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicyRule;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing Response Policy Rule.

```sql
REPLACE google.dns.response_policy_rules
SET 
data__ruleName = '{{ ruleName }}',
data__dnsName = '{{ dnsName }}',
data__localData = '{{ localData }}',
data__behavior = '{{ behavior }}',
data__kind = '{{ kind }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND responsePolicyRule = '{{ responsePolicyRule }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicyRule;
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

Deletes a previously created Response Policy Rule.

```sql
DELETE FROM google.dns.response_policy_rules
WHERE project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND responsePolicyRule = '{{ responsePolicyRule }}' --required
AND clientOperationId = '{{ clientOperationId }}';
```
</TabItem>
</Tabs>
