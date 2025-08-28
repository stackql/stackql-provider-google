--- 
title: approval_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - approval_requests
  - accessapproval
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

Creates, updates, deletes, gets or lists an <code>approval_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>approval_requests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accessapproval.approval_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_approval_requests_get"
    values={[
        { label: 'projects_approval_requests_get', value: 'projects_approval_requests_get' },
        { label: 'folders_approval_requests_get', value: 'folders_approval_requests_get' },
        { label: 'organizations_approval_requests_get', value: 'organizations_approval_requests_get' },
        { label: 'projects_approval_requests_list', value: 'projects_approval_requests_list' },
        { label: 'folders_approval_requests_list', value: 'folders_approval_requests_list' },
        { label: 'organizations_approval_requests_list', value: 'organizations_approval_requests_list' }
    ]}
>
<TabItem value="projects_approval_requests_get">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_approval_requests_get">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_approval_requests_get">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_approval_requests_list">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_approval_requests_list">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_approval_requests_list">

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
    <td>The resource name of the request. Format is "&#123;projects|folders|organizations&#125;/&#123;id&#125;/approvalRequests/&#123;approval_request&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="approve" /></td>
    <td><code>object</code></td>
    <td>Access was approved. (id: ApproveDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss" /></td>
    <td><code>object</code></td>
    <td>The request was dismissed. (id: DismissDecision)</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which approval was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAugmentedInfo" /></td>
    <td><code>object</code></td>
    <td>This field contains the augmented information of the request. (id: AugmentedInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The requested access duration.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedExpiration" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLocations" /></td>
    <td><code>object</code></td>
    <td>The locations for which approval is being requested. (id: AccessLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedReason" /></td>
    <td><code>object</code></td>
    <td>The justification for which approval is being requested. (id: AccessReason)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceName" /></td>
    <td><code>string</code></td>
    <td>The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Properties related to the resource represented by requested_resource_name. (id: ResourceProperties)</td>
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
    <td><a href="#projects_approval_requests_get"><CopyableCode code="projects_approval_requests_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Gets an approval request. Returns NOT_FOUND if the request does not exist.</td>
</tr>
<tr>
    <td><a href="#folders_approval_requests_get"><CopyableCode code="folders_approval_requests_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Gets an approval request. Returns NOT_FOUND if the request does not exist.</td>
</tr>
<tr>
    <td><a href="#organizations_approval_requests_get"><CopyableCode code="organizations_approval_requests_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Gets an approval request. Returns NOT_FOUND if the request does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_approval_requests_list"><CopyableCode code="projects_approval_requests_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.</td>
</tr>
<tr>
    <td><a href="#folders_approval_requests_list"><CopyableCode code="folders_approval_requests_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.</td>
</tr>
<tr>
    <td><a href="#organizations_approval_requests_list"><CopyableCode code="organizations_approval_requests_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.</td>
</tr>
<tr>
    <td><a href="#projects_approval_requests_approve"><CopyableCode code="projects_approval_requests_approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#projects_approval_requests_dismiss"><CopyableCode code="projects_approval_requests_dismiss" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#projects_approval_requests_invalidate"><CopyableCode code="projects_approval_requests_invalidate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.</td>
</tr>
<tr>
    <td><a href="#folders_approval_requests_approve"><CopyableCode code="folders_approval_requests_approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#folders_approval_requests_dismiss"><CopyableCode code="folders_approval_requests_dismiss" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#folders_approval_requests_invalidate"><CopyableCode code="folders_approval_requests_invalidate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.</td>
</tr>
<tr>
    <td><a href="#organizations_approval_requests_approve"><CopyableCode code="organizations_approval_requests_approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#organizations_approval_requests_dismiss"><CopyableCode code="organizations_approval_requests_dismiss" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.</td>
</tr>
<tr>
    <td><a href="#organizations_approval_requests_invalidate"><CopyableCode code="organizations_approval_requests_invalidate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-approvalRequestsId"><code>approvalRequestsId</code></a></td>
    <td></td>
    <td>Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.</td>
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
<tr id="parameter-approvalRequestsId">
    <td><CopyableCode code="approvalRequestsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_approval_requests_get"
    values={[
        { label: 'projects_approval_requests_get', value: 'projects_approval_requests_get' },
        { label: 'folders_approval_requests_get', value: 'folders_approval_requests_get' },
        { label: 'organizations_approval_requests_get', value: 'organizations_approval_requests_get' },
        { label: 'projects_approval_requests_list', value: 'projects_approval_requests_list' },
        { label: 'folders_approval_requests_list', value: 'folders_approval_requests_list' },
        { label: 'organizations_approval_requests_list', value: 'organizations_approval_requests_list' }
    ]}
>
<TabItem value="projects_approval_requests_get">

Gets an approval request. Returns NOT_FOUND if the request does not exist.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE projectsId = '{{ projectsId }}' -- required
AND approvalRequestsId = '{{ approvalRequestsId }}' -- required;
```
</TabItem>
<TabItem value="folders_approval_requests_get">

Gets an approval request. Returns NOT_FOUND if the request does not exist.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE foldersId = '{{ foldersId }}' -- required
AND approvalRequestsId = '{{ approvalRequestsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_approval_requests_get">

Gets an approval request. Returns NOT_FOUND if the request does not exist.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE organizationsId = '{{ organizationsId }}' -- required
AND approvalRequestsId = '{{ approvalRequestsId }}' -- required;
```
</TabItem>
<TabItem value="projects_approval_requests_list">

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_approval_requests_list">

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE foldersId = '{{ foldersId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_approval_requests_list">

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

```sql
SELECT
name,
approve,
dismiss,
requestTime,
requestedAugmentedInfo,
requestedDuration,
requestedExpiration,
requestedLocations,
requestedReason,
requestedResourceName,
requestedResourceProperties
FROM google.accessapproval.approval_requests
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_approval_requests_approve"
    values={[
        { label: 'projects_approval_requests_approve', value: 'projects_approval_requests_approve' },
        { label: 'projects_approval_requests_dismiss', value: 'projects_approval_requests_dismiss' },
        { label: 'projects_approval_requests_invalidate', value: 'projects_approval_requests_invalidate' },
        { label: 'folders_approval_requests_approve', value: 'folders_approval_requests_approve' },
        { label: 'folders_approval_requests_dismiss', value: 'folders_approval_requests_dismiss' },
        { label: 'folders_approval_requests_invalidate', value: 'folders_approval_requests_invalidate' },
        { label: 'organizations_approval_requests_approve', value: 'organizations_approval_requests_approve' },
        { label: 'organizations_approval_requests_dismiss', value: 'organizations_approval_requests_dismiss' },
        { label: 'organizations_approval_requests_invalidate', value: 'organizations_approval_requests_invalidate' }
    ]}
>
<TabItem value="projects_approval_requests_approve">

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.projects_approval_requests_approve 
@projectsId='{{ projectsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required 
@@json=
'{
"expireTime": "{{ expireTime }}"
}';
```
</TabItem>
<TabItem value="projects_approval_requests_dismiss">

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.projects_approval_requests_dismiss 
@projectsId='{{ projectsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
<TabItem value="projects_approval_requests_invalidate">

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

```sql
EXEC google.accessapproval.approval_requests.projects_approval_requests_invalidate 
@projectsId='{{ projectsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
<TabItem value="folders_approval_requests_approve">

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.folders_approval_requests_approve 
@foldersId='{{ foldersId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required 
@@json=
'{
"expireTime": "{{ expireTime }}"
}';
```
</TabItem>
<TabItem value="folders_approval_requests_dismiss">

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.folders_approval_requests_dismiss 
@foldersId='{{ foldersId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
<TabItem value="folders_approval_requests_invalidate">

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

```sql
EXEC google.accessapproval.approval_requests.folders_approval_requests_invalidate 
@foldersId='{{ foldersId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
<TabItem value="organizations_approval_requests_approve">

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.organizations_approval_requests_approve 
@organizationsId='{{ organizationsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required 
@@json=
'{
"expireTime": "{{ expireTime }}"
}';
```
</TabItem>
<TabItem value="organizations_approval_requests_dismiss">

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

```sql
EXEC google.accessapproval.approval_requests.organizations_approval_requests_dismiss 
@organizationsId='{{ organizationsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
<TabItem value="organizations_approval_requests_invalidate">

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

```sql
EXEC google.accessapproval.approval_requests.organizations_approval_requests_invalidate 
@organizationsId='{{ organizationsId }}' --required, 
@approvalRequestsId='{{ approvalRequestsId }}' --required;
```
</TabItem>
</Tabs>
