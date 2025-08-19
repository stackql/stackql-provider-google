--- 
title: control_plane_access
hide_title: false
hide_table_of_contents: false
keywords:
  - control_plane_access
  - apigee
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

Creates, updates, deletes, gets or lists a <code>control_plane_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>control_plane_access</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.control_plane_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get_control_plane_access"
    values={[
        { label: 'organizations_get_control_plane_access', value: 'organizations_get_control_plane_access' }
    ]}
>
<TabItem value="organizations_get_control_plane_access">

ControlPlaneAccess is the request body and response body of UpdateControlPlaneAccess. and the response body of GetControlPlaneAccess. The input identities contains an array of service accounts to grant access to the respective control plane resource, with each service account specified using the following format: `serviceAccount:`***service-account-name***. The ***service-account-name*** is formatted like an email address. For example: `my-control-plane-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

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
    <td>Identifier. The resource name of the ControlPlaneAccess. Format: "organizations/&#123;org&#125;/controlPlaneAccess"</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsPublisherIdentities" /></td>
    <td><code>array</code></td>
    <td>Optional. Array of service accounts authorized to publish analytics data to the control plane (for the Message Processor component).</td>
</tr>
<tr>
    <td><CopyableCode code="synchronizerIdentities" /></td>
    <td><code>array</code></td>
    <td>Optional. Array of service accounts to grant access to control plane resources (for the Synchronizer component). The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).</td>
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
    <td><a href="#organizations_get_control_plane_access"><CopyableCode code="organizations_get_control_plane_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Lists the service accounts allowed to access Apigee control plane directly for limited functionality. **Note**: Available to Apigee hybrid only.</td>
</tr>
<tr>
    <td><a href="#organizations_update_control_plane_access"><CopyableCode code="organizations_update_control_plane_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Available to Apigee hybrid only.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="organizations_get_control_plane_access"
    values={[
        { label: 'organizations_get_control_plane_access', value: 'organizations_get_control_plane_access' }
    ]}
>
<TabItem value="organizations_get_control_plane_access">

Lists the service accounts allowed to access Apigee control plane directly for limited functionality. **Note**: Available to Apigee hybrid only.

```sql
SELECT
name,
analyticsPublisherIdentities,
synchronizerIdentities
FROM google.apigee.control_plane_access
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_update_control_plane_access"
    values={[
        { label: 'organizations_update_control_plane_access', value: 'organizations_update_control_plane_access' }
    ]}
>
<TabItem value="organizations_update_control_plane_access">

Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Available to Apigee hybrid only.

```sql
UPDATE google.apigee.control_plane_access
SET 
data__name = '{{ name }}',
data__synchronizerIdentities = '{{ synchronizerIdentities }}',
data__analyticsPublisherIdentities = '{{ analyticsPublisherIdentities }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
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
