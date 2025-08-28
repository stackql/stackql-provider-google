--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apis_revisions_deployments_list"
    values={[
        { label: 'organizations_apis_revisions_deployments_list', value: 'organizations_apis_revisions_deployments_list' },
        { label: 'organizations_environments_apis_deployments_list', value: 'organizations_environments_apis_deployments_list' },
        { label: 'organizations_environments_sharedflows_deployments_list', value: 'organizations_environments_sharedflows_deployments_list' },
        { label: 'organizations_environments_deployments_get', value: 'organizations_environments_deployments_get' },
        { label: 'organizations_sharedflows_revisions_deployments_list', value: 'organizations_sharedflows_revisions_deployments_list' },
        { label: 'organizations_apis_deployments_list', value: 'organizations_apis_deployments_list' },
        { label: 'organizations_environments_deployments_list', value: 'organizations_environments_deployments_list' },
        { label: 'organizations_sharedflows_deployments_list', value: 'organizations_sharedflows_deployments_list' },
        { label: 'organizations_deployments_list', value: 'organizations_deployments_list' }
    ]}
>
<TabItem value="organizations_apis_revisions_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_apis_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_sharedflows_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_deployments_get">

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
    <td><CopyableCode code="apiProxy" /></td>
    <td><code>string</code></td>
    <td>API proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="deployStartTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Time the API proxy was marked `deployed` in the control plane in millisconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field is displayed only when viewing deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="pods" /></td>
    <td><code>array</code></td>
    <td>Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report instance level status rather than pod status.</td>
</tr>
<tr>
    <td><CopyableCode code="proxyDeploymentType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>API proxy revision.</td>
</tr>
<tr>
    <td><CopyableCode code="routeConflicts" /></td>
    <td><code>array</code></td>
    <td>Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be `ERROR`, but it will mean that some of the deployment's base paths are not routed to its environment. If the conflicts change, the state will transition to `PROGRESSING` until the latest configuration is rolled out to all instances. **Note**: This field is displayed only when viewing deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The full resource name of Cloud IAM Service Account that this deployment is using, eg, `projects/-/serviceAccounts/&#123;email&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the deployment. **Note**: This field is displayed only when viewing deployment status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sharedflows_revisions_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apis_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sharedflows_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_deployments_list">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>List of deployments.</td>
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
    <td><a href="#organizations_apis_revisions_deployments_list"><CopyableCode code="organizations_apis_revisions_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Lists all deployments of an API proxy revision.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_deployments_list"><CopyableCode code="organizations_environments_apis_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Lists all deployments of an API proxy in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_sharedflows_deployments_list"><CopyableCode code="organizations_environments_sharedflows_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a></td>
    <td></td>
    <td>Lists all deployments of a shared flow in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_deployments_get"><CopyableCode code="organizations_environments_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Gets a particular deployment of Api proxy or a shared flow in an environment</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_revisions_deployments_list"><CopyableCode code="organizations_sharedflows_revisions_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Lists all deployments of a shared flow revision.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_deployments_list"><CopyableCode code="organizations_apis_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Lists all deployments of an API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_deployments_list"><CopyableCode code="organizations_environments_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-sharedFlows"><code>sharedFlows</code></a></td>
    <td>Lists all deployments of API proxies or shared flows in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_sharedflows_deployments_list"><CopyableCode code="organizations_sharedflows_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sharedflowsId"><code>sharedflowsId</code></a></td>
    <td></td>
    <td>Lists all deployments of a shared flow.</td>
</tr>
<tr>
    <td><a href="#organizations_deployments_list"><CopyableCode code="organizations_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-sharedFlows"><code>sharedFlows</code></a></td>
    <td>Lists all deployments of API proxies or shared flows.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_deployments_generate_deploy_change_report"><CopyableCode code="organizations_environments_apis_revisions_deployments_generate_deploy_change_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-override"><code>override</code></a></td>
    <td>Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.deploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_deployments_generate_undeploy_change_report"><CopyableCode code="organizations_environments_apis_revisions_deployments_generate_undeploy_change_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.undeploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
<tr id="parameter-override">
    <td><CopyableCode code="override" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-sharedFlows">
    <td><CopyableCode code="sharedFlows" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_apis_revisions_deployments_list"
    values={[
        { label: 'organizations_apis_revisions_deployments_list', value: 'organizations_apis_revisions_deployments_list' },
        { label: 'organizations_environments_apis_deployments_list', value: 'organizations_environments_apis_deployments_list' },
        { label: 'organizations_environments_sharedflows_deployments_list', value: 'organizations_environments_sharedflows_deployments_list' },
        { label: 'organizations_environments_deployments_get', value: 'organizations_environments_deployments_get' },
        { label: 'organizations_sharedflows_revisions_deployments_list', value: 'organizations_sharedflows_revisions_deployments_list' },
        { label: 'organizations_apis_deployments_list', value: 'organizations_apis_deployments_list' },
        { label: 'organizations_environments_deployments_list', value: 'organizations_environments_deployments_list' },
        { label: 'organizations_sharedflows_deployments_list', value: 'organizations_sharedflows_deployments_list' },
        { label: 'organizations_deployments_list', value: 'organizations_deployments_list' }
    ]}
>
<TabItem value="organizations_apis_revisions_deployments_list">

Lists all deployments of an API proxy revision.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_apis_deployments_list">

Lists all deployments of an API proxy in an environment.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND apisId = '{{ apisId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_sharedflows_deployments_list">

Lists all deployments of a shared flow in an environment.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sharedflowsId = '{{ sharedflowsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_deployments_get">

Gets a particular deployment of Api proxy or a shared flow in an environment

```sql
SELECT
apiProxy,
deployStartTime,
environment,
errors,
instances,
pods,
proxyDeploymentType,
revision,
routeConflicts,
serviceAccount,
state
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_sharedflows_revisions_deployments_list">

Lists all deployments of a shared flow revision.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sharedflowsId = '{{ sharedflowsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apis_deployments_list">

Lists all deployments of an API proxy.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_deployments_list">

Lists all deployments of API proxies or shared flows in an environment.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sharedFlows = '{{ sharedFlows }}';
```
</TabItem>
<TabItem value="organizations_sharedflows_deployments_list">

Lists all deployments of a shared flow.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sharedflowsId = '{{ sharedflowsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_deployments_list">

Lists all deployments of API proxies or shared flows.

```sql
SELECT
deployments
FROM google.apigee.deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sharedFlows = '{{ sharedFlows }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_apis_revisions_deployments_generate_deploy_change_report"
    values={[
        { label: 'organizations_environments_apis_revisions_deployments_generate_deploy_change_report', value: 'organizations_environments_apis_revisions_deployments_generate_deploy_change_report' },
        { label: 'organizations_environments_apis_revisions_deployments_generate_undeploy_change_report', value: 'organizations_environments_apis_revisions_deployments_generate_undeploy_change_report' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_deployments_generate_deploy_change_report">

Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.deploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`

```sql
EXEC google.apigee.deployments.organizations_environments_apis_revisions_deployments_generate_deploy_change_report 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@revisionsId='{{ revisionsId }}' --required, 
@override={{ override }};
```
</TabItem>
<TabItem value="organizations_environments_apis_revisions_deployments_generate_undeploy_change_report">

Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/&#123;org&#125;/environments/&#123;env&#125;` * `apigee.proxyrevisions.undeploy` on the resource `organizations/&#123;org&#125;/apis/&#123;api&#125;/revisions/&#123;rev&#125;`

```sql
EXEC google.apigee.deployments.organizations_environments_apis_revisions_deployments_generate_undeploy_change_report 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@revisionsId='{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>
