--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - cloudasset
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="accessLevel" /></td>
    <td><code>object</code></td>
    <td>Also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels). (id: GoogleIdentityAccesscontextmanagerV1AccessLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="accessPolicy" /></td>
    <td><code>object</code></td>
    <td>Also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies). (id: GoogleIdentityAccesscontextmanagerV1AccessPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="ancestors" /></td>
    <td><code>array</code></td>
    <td>The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]`</td>
</tr>
<tr>
    <td><CopyableCode code="assetExceptions" /></td>
    <td><code>array</code></td>
    <td>The exceptions of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="assetType" /></td>
    <td><code>string</code></td>
    <td>The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="iamPolicy" /></td>
    <td><code>object</code></td>
    <td>A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information. (id: Policy)</td>
</tr>
<tr>
    <td><CopyableCode code="orgPolicy" /></td>
    <td><code>array</code></td>
    <td>A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="osInventory" /></td>
    <td><code>object</code></td>
    <td>A representation of runtime OS Inventory information. See [this topic](https://cloud.google.com/compute/docs/instances/os-inventory-management) for more information. (id: Inventory)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedAsset" /></td>
    <td><code>object</code></td>
    <td>An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. (id: RelatedAsset)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedAssets" /></td>
    <td><code>object</code></td>
    <td>DEPRECATED. This field only presents for the purpose of backward-compatibility. The server will never generate responses with this field. The related assets of the asset of one relationship type. One asset only represents one type of relationship. (id: RelatedAssets)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>A representation of the resource. (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="servicePerimeter" /></td>
    <td><code>object</code></td>
    <td>Also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview). (id: GoogleIdentityAccesscontextmanagerV1ServicePerimeter)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-assetTypes"><code>assetTypes</code></a>, <a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-relationshipTypes"><code>relationshipTypes</code></a></td>
    <td>Lists assets with time and resource types and returns paged results in response.</td>
</tr>
<tr>
    <td><a href="#query_assets"><CopyableCode code="query_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Issue a job that queries assets using a SQL statement compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by [BigQuery](https://cloud.google.com/bigquery/docs/best-practices-performance-output). Queries return larger results will result in errors.</td>
</tr>
<tr>
    <td><a href="#analyze_org_policy_governed_assets"><CopyableCode code="analyze_org_policy_governed_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-constraint"><code>constraint</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following canned constraints: * constraints/ainotebooks.accessMode * constraints/ainotebooks.disableFileDownloads * constraints/ainotebooks.disableRootAccess * constraints/ainotebooks.disableTerminal * constraints/ainotebooks.environmentOptions * constraints/ainotebooks.requireAutoUpgradeSchedule * constraints/ainotebooks.restrictVpcNetworks * constraints/compute.disableGuestAttributesAccess * constraints/compute.disableInstanceDataAccessApis * constraints/compute.disableNestedVirtualization * constraints/compute.disableSerialPortAccess * constraints/compute.disableSerialPortLogging * constraints/compute.disableVpcExternalIpv6 * constraints/compute.requireOsLogin * constraints/compute.requireShieldedVm * constraints/compute.restrictLoadBalancerCreationForTypes * constraints/compute.restrictProtocolForwardingCreationForTypes * constraints/compute.restrictXpnProjectLienRemoval * constraints/compute.setNewProjectDefaultToZonalDNSOnly * constraints/compute.skipDefaultNetworkCreation * constraints/compute.trustedImageProjects * constraints/compute.vmCanIpForward * constraints/compute.vmExternalIpAccess * constraints/gcp.detailedAuditLoggingMode * constraints/gcp.resourceLocations * constraints/iam.allowedPolicyMemberDomains * constraints/iam.automaticIamGrantsForDefaultServiceAccounts * constraints/iam.disableServiceAccountCreation * constraints/iam.disableServiceAccountKeyCreation * constraints/iam.disableServiceAccountKeyUpload * constraints/iam.restrictCrossProjectServiceAccountLienRemoval * constraints/iam.serviceAccountKeyExpiryHours * constraints/resourcemanager.accessBoundaries * constraints/resourcemanager.allowedExportDestinations * constraints/sql.restrictAuthorizedNetworks * constraints/sql.restrictNoncompliantDiagnosticDataAccess * constraints/sql.restrictNoncompliantResourceCreation * constraints/sql.restrictPublicIp * constraints/storage.publicAccessPrevention * constraints/storage.restrictAuthTypes * constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types) or IAM policies.</td>
</tr>
<tr>
    <td><a href="#analyze_move"><CopyableCode code="analyze_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource"><code>resource</code></a></td>
    <td><a href="#parameter-destinationParent"><code>destinationParent</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.</td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetTypes">
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-constraint">
    <td><CopyableCode code="constraint" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-contentType">
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationParent">
    <td><CopyableCode code="destinationParent" /></td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-relationshipTypes">
    <td><CopyableCode code="relationshipTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists assets with time and resource types and returns paged results in response.

```sql
SELECT
name,
accessLevel,
accessPolicy,
ancestors,
assetExceptions,
assetType,
iamPolicy,
orgPolicy,
osInventory,
relatedAsset,
relatedAssets,
resource,
servicePerimeter,
updateTime
FROM google.cloudasset.assets
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND readTime = '{{ readTime }}'
AND assetTypes = '{{ assetTypes }}'
AND contentType = '{{ contentType }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND relationshipTypes = '{{ relationshipTypes }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_assets"
    values={[
        { label: 'query_assets', value: 'query_assets' },
        { label: 'analyze_org_policy_governed_assets', value: 'analyze_org_policy_governed_assets' },
        { label: 'analyze_move', value: 'analyze_move' }
    ]}
>
<TabItem value="query_assets">

Issue a job that queries assets using a SQL statement compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by [BigQuery](https://cloud.google.com/bigquery/docs/best-practices-performance-output). Queries return larger results will result in errors.

```sql
EXEC google.cloudasset.assets.query_assets 
@parentType='{{ parentType }}' --required, 
@parent='{{ parent }}' --required 
@@json=
'{
"statement": "{{ statement }}", 
"jobReference": "{{ jobReference }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"timeout": "{{ timeout }}", 
"readTimeWindow": "{{ readTimeWindow }}", 
"readTime": "{{ readTime }}", 
"outputConfig": "{{ outputConfig }}"
}';
```
</TabItem>
<TabItem value="analyze_org_policy_governed_assets">

Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following canned constraints: * constraints/ainotebooks.accessMode * constraints/ainotebooks.disableFileDownloads * constraints/ainotebooks.disableRootAccess * constraints/ainotebooks.disableTerminal * constraints/ainotebooks.environmentOptions * constraints/ainotebooks.requireAutoUpgradeSchedule * constraints/ainotebooks.restrictVpcNetworks * constraints/compute.disableGuestAttributesAccess * constraints/compute.disableInstanceDataAccessApis * constraints/compute.disableNestedVirtualization * constraints/compute.disableSerialPortAccess * constraints/compute.disableSerialPortLogging * constraints/compute.disableVpcExternalIpv6 * constraints/compute.requireOsLogin * constraints/compute.requireShieldedVm * constraints/compute.restrictLoadBalancerCreationForTypes * constraints/compute.restrictProtocolForwardingCreationForTypes * constraints/compute.restrictXpnProjectLienRemoval * constraints/compute.setNewProjectDefaultToZonalDNSOnly * constraints/compute.skipDefaultNetworkCreation * constraints/compute.trustedImageProjects * constraints/compute.vmCanIpForward * constraints/compute.vmExternalIpAccess * constraints/gcp.detailedAuditLoggingMode * constraints/gcp.resourceLocations * constraints/iam.allowedPolicyMemberDomains * constraints/iam.automaticIamGrantsForDefaultServiceAccounts * constraints/iam.disableServiceAccountCreation * constraints/iam.disableServiceAccountKeyCreation * constraints/iam.disableServiceAccountKeyUpload * constraints/iam.restrictCrossProjectServiceAccountLienRemoval * constraints/iam.serviceAccountKeyExpiryHours * constraints/resourcemanager.accessBoundaries * constraints/resourcemanager.allowedExportDestinations * constraints/sql.restrictAuthorizedNetworks * constraints/sql.restrictNoncompliantDiagnosticDataAccess * constraints/sql.restrictNoncompliantResourceCreation * constraints/sql.restrictPublicIp * constraints/storage.publicAccessPrevention * constraints/storage.restrictAuthTypes * constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types) or IAM policies.

```sql
EXEC google.cloudasset.assets.analyze_org_policy_governed_assets 
@scope='{{ scope }}' --required, 
@constraint='{{ constraint }}', 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="analyze_move">

Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.

```sql
EXEC google.cloudasset.assets.analyze_move 
@resource='{{ resource }}' --required, 
@destinationParent='{{ destinationParent }}', 
@view='{{ view }}';
```
</TabItem>
</Tabs>
