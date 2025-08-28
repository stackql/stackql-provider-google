--- 
title: customers
hide_title: false
hide_table_of_contents: false
keywords:
  - customers
  - prod_tt_sasportal
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

Creates, updates, deletes, gets or lists a <code>customers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.prod_tt_sasportal.customers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="customers_get"
    values={[
        { label: 'customers_get', value: 'customers_get' },
        { label: 'customers_list', value: 'customers_list' }
    ]}
>
<TabItem value="customers_get">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the organization that the customer entity represents.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User IDs used by the devices belonging to this customer.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the organization that the customer entity represents.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User IDs used by the devices belonging to this customer.</td>
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
    <td><a href="#customers_get"><CopyableCode code="customers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Returns a requested customer.</td>
</tr>
<tr>
    <td><a href="#customers_list"><CopyableCode code="customers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of requested customers.</td>
</tr>
<tr>
    <td><a href="#customers_patch"><CopyableCode code="customers_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing customer.</td>
</tr>
<tr>
    <td><a href="#customers_provision_deployment"><CopyableCode code="customers_provision_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.</td>
</tr>
<tr>
    <td><a href="#customers_migrate_organization"><CopyableCode code="customers_migrate_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration</td>
</tr>
<tr>
    <td><a href="#customers_setup_sas_analytics"><CopyableCode code="customers_setup_sas_analytics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service.</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
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
    defaultValue="customers_get"
    values={[
        { label: 'customers_get', value: 'customers_get' },
        { label: 'customers_list', value: 'customers_list' }
    ]}
>
<TabItem value="customers_get">

Returns a requested customer.

```sql
SELECT
name,
displayName,
sasUserIds
FROM google.prod_tt_sasportal.customers
WHERE customersId = '{{ customersId }}' -- required;
```
</TabItem>
<TabItem value="customers_list">

Returns a list of requested customers.

```sql
SELECT
name,
displayName,
sasUserIds
FROM google.prod_tt_sasportal.customers
WHERE pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="customers_patch"
    values={[
        { label: 'customers_patch', value: 'customers_patch' }
    ]}
>
<TabItem value="customers_patch">

Updates an existing customer.

```sql
UPDATE google.prod_tt_sasportal.customers
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__sasUserIds = '{{ sasUserIds }}'
WHERE 
customersId = '{{ customersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
sasUserIds;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="customers_provision_deployment"
    values={[
        { label: 'customers_provision_deployment', value: 'customers_provision_deployment' },
        { label: 'customers_migrate_organization', value: 'customers_migrate_organization' },
        { label: 'customers_setup_sas_analytics', value: 'customers_setup_sas_analytics' }
    ]}
>
<TabItem value="customers_provision_deployment">

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

```sql
EXEC google.prod_tt_sasportal.customers.customers_provision_deployment 
@@json=
'{
"newOrganizationDisplayName": "{{ newOrganizationDisplayName }}", 
"newDeploymentDisplayName": "{{ newDeploymentDisplayName }}", 
"organizationId": "{{ organizationId }}"
}';
```
</TabItem>
<TabItem value="customers_migrate_organization">

Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration

```sql
EXEC google.prod_tt_sasportal.customers.customers_migrate_organization 
@@json=
'{
"organizationId": "{{ organizationId }}"
}';
```
</TabItem>
<TabItem value="customers_setup_sas_analytics">

Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service.

```sql
EXEC google.prod_tt_sasportal.customers.customers_setup_sas_analytics 
@@json=
'{
"userId": "{{ userId }}"
}';
```
</TabItem>
</Tabs>
