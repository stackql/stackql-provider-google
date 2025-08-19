--- 
title: row_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - row_access_policies
  - bigquery
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

Creates, updates, deletes, gets or lists a <code>row_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>row_access_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.row_access_policies" /></td></tr>
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

Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this row access policy was created, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="filterPredicate" /></td>
    <td><code>string</code></td>
    <td>Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0</td>
</tr>
<tr>
    <td><CopyableCode code="grantees" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. The optional list of iam_member users or groups that specifies the initial members that the row-level access policy should be created with. grantees types: - "user:alice@example.com": An email address that represents a specific Google account. - "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email address that represents a service account. - "group:admins@example.com": An email address that represents a Google group. - "domain:example.com":The Google Workspace domain (primary) that represents all the users of that domain. - "allAuthenticatedUsers": A special identifier that represents all service accounts and all users on the internet who have authenticated with a Google Account. This identifier includes accounts that aren't connected to a Google Workspace or Cloud Identity domain, such as personal Gmail accounts. Users who aren't authenticated, such as anonymous visitors, aren't included. - "allUsers":A special identifier that represents anyone who is on the internet, including authenticated and unauthenticated users. Because BigQuery requires authentication before a user can access the service, allUsers includes only authenticated users.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this row access policy was last modified, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="rowAccessPolicyReference" /></td>
    <td><code>object</code></td>
    <td>Required. Reference describing the ID of this row access policy. (id: RowAccessPolicyReference)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for the ListRowAccessPolicies method.

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
    <td>A token to request the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="rowAccessPolicies" /></td>
    <td><code>array</code></td>
    <td>Row access policies on the requested table.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a>, <a href="#parameter-+policyId"><code>+policyId</code></a></td>
    <td></td>
    <td>Gets the specified row access policy by policy ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all row access policies on the specified table.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td></td>
    <td>Creates a row access policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a>, <a href="#parameter-+policyId"><code>+policyId</code></a></td>
    <td></td>
    <td>Updates a row access policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a>, <a href="#parameter-+policyId"><code>+policyId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a row access policy.</td>
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
<tr id="parameter-+datasetId">
    <td><CopyableCode code="+datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-+policyId">
    <td><CopyableCode code="+policyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-+tableId">
    <td><CopyableCode code="+tableId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Gets the specified row access policy by policy ID.

```sql
SELECT
creationTime,
etag,
filterPredicate,
grantees,
lastModifiedTime,
rowAccessPolicyReference
FROM google.bigquery.row_access_policies
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +tableId = '{{ +tableId }}' -- required
AND +policyId = '{{ +policyId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all row access policies on the specified table.

```sql
SELECT
nextPageToken,
rowAccessPolicies
FROM google.bigquery.row_access_policies
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +tableId = '{{ +tableId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a row access policy.

```sql
INSERT INTO google.bigquery.row_access_policies (
data__filterPredicate,
data__grantees,
data__rowAccessPolicyReference,
projectId,
+datasetId,
+tableId
)
SELECT 
'{{ filterPredicate }}',
'{{ grantees }}',
'{{ rowAccessPolicyReference }}',
'{{ projectId }}',
'{{ +datasetId }}',
'{{ +tableId }}'
RETURNING
creationTime,
etag,
filterPredicate,
grantees,
lastModifiedTime,
rowAccessPolicyReference
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: row_access_policies
  props:
    - name: projectId
      value: string
      description: Required parameter for the row_access_policies resource.
    - name: +datasetId
      value: string
      description: Required parameter for the row_access_policies resource.
    - name: +tableId
      value: string
      description: Required parameter for the row_access_policies resource.
    - name: filterPredicate
      value: string
      description: >
        Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0
        
    - name: grantees
      value: array
      description: >
        Optional. Input only. The optional list of iam_member users or groups that specifies the initial members that the row-level access policy should be created with. grantees types: - "user:alice@example.com": An email address that represents a specific Google account. - "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email address that represents a service account. - "group:admins@example.com": An email address that represents a Google group. - "domain:example.com":The Google Workspace domain (primary) that represents all the users of that domain. - "allAuthenticatedUsers": A special identifier that represents all service accounts and all users on the internet who have authenticated with a Google Account. This identifier includes accounts that aren't connected to a Google Workspace or Cloud Identity domain, such as personal Gmail accounts. Users who aren't authenticated, such as anonymous visitors, aren't included. - "allUsers":A special identifier that represents anyone who is on the internet, including authenticated and unauthenticated users. Because BigQuery requires authentication before a user can access the service, allUsers includes only authenticated users.
        
    - name: rowAccessPolicyReference
      value: object
      description: >
        Required. Reference describing the ID of this row access policy.
        
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

Updates a row access policy.

```sql
REPLACE google.bigquery.row_access_policies
SET 
data__filterPredicate = '{{ filterPredicate }}',
data__grantees = '{{ grantees }}',
data__rowAccessPolicyReference = '{{ rowAccessPolicyReference }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +tableId = '{{ +tableId }}' --required
AND +policyId = '{{ +policyId }}' --required
RETURNING
creationTime,
etag,
filterPredicate,
grantees,
lastModifiedTime,
rowAccessPolicyReference;
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

Deletes a row access policy.

```sql
DELETE FROM google.bigquery.row_access_policies
WHERE projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +tableId = '{{ +tableId }}' --required
AND +policyId = '{{ +policyId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
