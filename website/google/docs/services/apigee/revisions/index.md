--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apis_revisions_get"
    values={[
        { label: 'organizations_apis_revisions_get', value: 'organizations_apis_revisions_get' },
        { label: 'organizations_sharedflows_revisions_get', value: 'organizations_sharedflows_revisions_get' }
    ]}
>
<TabItem value="organizations_apis_revisions_get">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sharedflows_revisions_get">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
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
    <td><a href="#organizations_apis_revisions_get"><CopyableCode code="organizations_apis_revisions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-format"><code>format</code></a></td>
    <td>Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in [updateApiProxyRevision](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apis.revisions/updateApiProxyRevision).</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_revisions_get"><CopyableCode code="organizations_sharedflows_revisions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-format"><code>format</code></a></td>
    <td>Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in [updateSharedFlowRevision](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.sharedflows.revisions/updateSharedFlowRevision).</td>
</tr>
<tr>
    <td><a href="#organizations_apis_revisions_delete"><CopyableCode code="organizations_apis_revisions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_revisions_delete"><CopyableCode code="organizations_sharedflows_revisions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_deploy"><CopyableCode code="organizations_environments_apis_revisions_deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-override"><code>override</code></a>, <a href="#parameter-sequencedRollout"><code>sequencedRollout</code></a>, <a href="#parameter-serviceAccount"><code>serviceAccount</code></a></td>
    <td>Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.deploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;` All successful API proxy deployments to Apigee are [zero-downtime deployments](https://cloud.google.com/apigee/docs/api-platform/deploy/ui-deploy-overview#zero-downtime-deployment). Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_undeploy"><CopyableCode code="organizations_environments_apis_revisions_undeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-sequencedRollout"><code>sequencedRollout</code></a></td>
    <td>Undeploys an API proxy revision from an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.undeploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`</td>
</tr>
<tr>
    <td><a href="#organizations_environments_sharedflows_revisions_deploy"><CopyableCode code="organizations_environments_sharedflows_revisions_deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-override"><code>override</code></a>, <a href="#parameter-serviceAccount"><code>serviceAccount</code></a></td>
    <td>Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/&#123;org&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;`</td>
</tr>
<tr>
    <td><a href="#organizations_environments_sharedflows_revisions_undeploy"><CopyableCode code="organizations_environments_sharedflows_revisions_undeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Undeploys a shared flow revision from an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/&#123;org&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;`</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sharedflowsId">
    <td><CopyableCode code="sharedflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-override">
    <td><CopyableCode code="override" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-sequencedRollout">
    <td><CopyableCode code="sequencedRollout" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceAccount">
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_apis_revisions_get"
    values={[
        { label: 'organizations_apis_revisions_get', value: 'organizations_apis_revisions_get' },
        { label: 'organizations_sharedflows_revisions_get', value: 'organizations_sharedflows_revisions_get' }
    ]}
>
<TabItem value="organizations_apis_revisions_get">

Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in [updateApiProxyRevision](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apis.revisions/updateApiProxyRevision).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigee.revisions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND format = '{{ format }}';
```
</TabItem>
<TabItem value="organizations_sharedflows_revisions_get">

Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in [updateSharedFlowRevision](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.sharedflows.revisions/updateSharedFlowRevision).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigee.revisions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sharedflowsId = '{{ sharedflowsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND format = '{{ format }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_apis_revisions_delete"
    values={[
        { label: 'organizations_apis_revisions_delete', value: 'organizations_apis_revisions_delete' },
        { label: 'organizations_sharedflows_revisions_delete', value: 'organizations_sharedflows_revisions_delete' }
    ]}
>
<TabItem value="organizations_apis_revisions_delete">

Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.

```sql
DELETE FROM google.apigee.revisions
WHERE organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND revisionsId = '{{ revisionsId }}' --required;
```
</TabItem>
<TabItem value="organizations_sharedflows_revisions_delete">

Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.

```sql
DELETE FROM google.apigee.revisions
WHERE organizationsId = '{{ organizationsId }}' --required
AND sharedflowsId = '{{ sharedflowsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_apis_revisions_deploy"
    values={[
        { label: 'organizations_environments_apis_revisions_deploy', value: 'organizations_environments_apis_revisions_deploy' },
        { label: 'organizations_environments_apis_revisions_undeploy', value: 'organizations_environments_apis_revisions_undeploy' },
        { label: 'organizations_environments_sharedflows_revisions_deploy', value: 'organizations_environments_sharedflows_revisions_deploy' },
        { label: 'organizations_environments_sharedflows_revisions_undeploy', value: 'organizations_environments_sharedflows_revisions_undeploy' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_deploy">

Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.deploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;` All successful API proxy deployments to Apigee are [zero-downtime deployments](https://cloud.google.com/apigee/docs/api-platform/deploy/ui-deploy-overview#zero-downtime-deployment). Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.

```sql
EXEC google.apigee.revisions.organizations_environments_apis_revisions_deploy 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@revisionsId='{{ revisionsId }}' --required, 
@override={{ override }}, 
@sequencedRollout={{ sequencedRollout }}, 
@serviceAccount='{{ serviceAccount }}';
```
</TabItem>
<TabItem value="organizations_environments_apis_revisions_undeploy">

Undeploys an API proxy revision from an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.undeploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`

```sql
EXEC google.apigee.revisions.organizations_environments_apis_revisions_undeploy 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@revisionsId='{{ revisionsId }}' --required, 
@sequencedRollout={{ sequencedRollout }};
```
</TabItem>
<TabItem value="organizations_environments_sharedflows_revisions_deploy">

Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/&#123;org&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;`

```sql
EXEC google.apigee.revisions.organizations_environments_sharedflows_revisions_deploy 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sharedflowsId='{{ sharedflowsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required, 
@override={{ override }}, 
@serviceAccount='{{ serviceAccount }}';
```
</TabItem>
<TabItem value="organizations_environments_sharedflows_revisions_undeploy">

Undeploys a shared flow revision from an environment. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/&#123;org&#125;/sharedflows/&#123;sf&#125;/revisions/&#123;rev&#125;`

```sql
EXEC google.apigee.revisions.organizations_environments_sharedflows_revisions_undeploy 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sharedflowsId='{{ sharedflowsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>
