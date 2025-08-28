--- 
title: workflow_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_templates
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>workflow_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workflow_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.workflow_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_workflow_templates_get"
    values={[
        { label: 'projects_regions_workflow_templates_get', value: 'projects_regions_workflow_templates_get' },
        { label: 'projects_locations_workflow_templates_get', value: 'projects_locations_workflow_templates_get' },
        { label: 'projects_regions_workflow_templates_list', value: 'projects_regions_workflow_templates_list' },
        { label: 'projects_locations_workflow_templates_list', value: 'projects_locations_workflow_templates_list' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/workflowTemplates/&#123;template_id&#125; For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/workflowTemplates/&#123;template_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dagTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Encryption settings for encrypting workflow template job arguments. (id: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>Required. The Directed Acyclic Graph of Jobs to submit.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>Required. WorkflowTemplate scheduling information. (id: WorkflowTemplatePlacement)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_workflow_templates_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/workflowTemplates/&#123;template_id&#125; For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/workflowTemplates/&#123;template_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dagTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Encryption settings for encrypting workflow template job arguments. (id: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>Required. The Directed Acyclic Graph of Jobs to submit.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>Required. WorkflowTemplate scheduling information. (id: WorkflowTemplatePlacement)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_regions_workflow_templates_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/workflowTemplates/&#123;template_id&#125; For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/workflowTemplates/&#123;template_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dagTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Encryption settings for encrypting workflow template job arguments. (id: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>Required. The Directed Acyclic Graph of Jobs to submit.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>Required. WorkflowTemplate scheduling information. (id: WorkflowTemplatePlacement)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_workflow_templates_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/workflowTemplates/&#123;template_id&#125; For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/workflowTemplates/&#123;template_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dagTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Encryption settings for encrypting workflow template job arguments. (id: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>Required. The Directed Acyclic Graph of Jobs to submit.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>Required. WorkflowTemplate scheduling information. (id: WorkflowTemplatePlacement)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.</td>
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
    <td><a href="#projects_regions_workflow_templates_get"><CopyableCode code="projects_regions_workflow_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_get"><CopyableCode code="projects_locations_workflow_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_list"><CopyableCode code="projects_regions_workflow_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists workflows that match the specified filter in the request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_list"><CopyableCode code="projects_locations_workflow_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists workflows that match the specified filter in the request.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_create"><CopyableCode code="projects_regions_workflow_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a></td>
    <td></td>
    <td>Creates new workflow template.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_create"><CopyableCode code="projects_locations_workflow_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new workflow template.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_update"><CopyableCode code="projects_regions_workflow_templates_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td></td>
    <td>Updates (replaces) workflow template. The updated template must contain version that matches the current server version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_update"><CopyableCode code="projects_locations_workflow_templates_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td></td>
    <td>Updates (replaces) workflow template. The updated template must contain version that matches the current server version.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_delete"><CopyableCode code="projects_regions_workflow_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes a workflow template. It does not cancel in-progress workflows.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_delete"><CopyableCode code="projects_locations_workflow_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes a workflow template. It does not cancel in-progress workflows.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_instantiate"><CopyableCode code="projects_regions_workflow_templates_instantiate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td></td>
    <td>Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.</td>
</tr>
<tr>
    <td><a href="#projects_regions_workflow_templates_instantiate_inline"><CopyableCode code="projects_regions_workflow_templates_instantiate_inline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_instantiate"><CopyableCode code="projects_locations_workflow_templates_instantiate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowTemplatesId"><code>workflowTemplatesId</code></a></td>
    <td></td>
    <td>Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.</td>
</tr>
<tr>
    <td><a href="#projects_locations_workflow_templates_instantiate_inline"><CopyableCode code="projects_locations_workflow_templates_instantiate_inline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regionsId">
    <td><CopyableCode code="regionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowTemplatesId">
    <td><CopyableCode code="workflowTemplatesId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_regions_workflow_templates_get"
    values={[
        { label: 'projects_regions_workflow_templates_get', value: 'projects_regions_workflow_templates_get' },
        { label: 'projects_locations_workflow_templates_get', value: 'projects_locations_workflow_templates_get' },
        { label: 'projects_regions_workflow_templates_list', value: 'projects_regions_workflow_templates_list' },
        { label: 'projects_locations_workflow_templates_list', value: 'projects_locations_workflow_templates_list' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_get">

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

```sql
SELECT
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND regionsId = '{{ regionsId }}' -- required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' -- required
AND version = '{{ version }}';
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_get">

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

```sql
SELECT
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' -- required
AND version = '{{ version }}';
```
</TabItem>
<TabItem value="projects_regions_workflow_templates_list">

Lists workflows that match the specified filter in the request.

```sql
SELECT
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND regionsId = '{{ regionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_list">

Lists workflows that match the specified filter in the request.

```sql
SELECT
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_regions_workflow_templates_create"
    values={[
        { label: 'projects_regions_workflow_templates_create', value: 'projects_regions_workflow_templates_create' },
        { label: 'projects_locations_workflow_templates_create', value: 'projects_locations_workflow_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_create">

Creates new workflow template.

```sql
INSERT INTO google.dataproc.workflow_templates (
data__id,
data__version,
data__labels,
data__placement,
data__jobs,
data__parameters,
data__dagTimeout,
data__encryptionConfig,
projectsId,
regionsId
)
SELECT 
'{{ id }}',
{{ version }},
'{{ labels }}',
'{{ placement }}',
'{{ jobs }}',
'{{ parameters }}',
'{{ dagTimeout }}',
'{{ encryptionConfig }}',
'{{ projectsId }}',
'{{ regionsId }}'
RETURNING
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
;
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_create">

Creates new workflow template.

```sql
INSERT INTO google.dataproc.workflow_templates (
data__id,
data__version,
data__labels,
data__placement,
data__jobs,
data__parameters,
data__dagTimeout,
data__encryptionConfig,
projectsId,
locationsId
)
SELECT 
'{{ id }}',
{{ version }},
'{{ labels }}',
'{{ placement }}',
'{{ jobs }}',
'{{ parameters }}',
'{{ dagTimeout }}',
'{{ encryptionConfig }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workflow_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workflow_templates resource.
    - name: regionsId
      value: string
      description: Required parameter for the workflow_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the workflow_templates resource.
    - name: id
      value: string
    - name: version
      value: integer
      description: >
        Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.
        
    - name: labels
      value: object
      description: >
        Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.
        
    - name: placement
      value: object
      description: >
        Required. WorkflowTemplate scheduling information.
        
    - name: jobs
      value: array
      description: >
        Required. The Directed Acyclic Graph of Jobs to submit.
        
    - name: parameters
      value: array
      description: >
        Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
        
    - name: dagTimeout
      value: string
      description: >
        Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.
        
    - name: encryptionConfig
      value: object
      description: >
        Optional. Encryption settings for encrypting workflow template job arguments.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_regions_workflow_templates_update"
    values={[
        { label: 'projects_regions_workflow_templates_update', value: 'projects_regions_workflow_templates_update' },
        { label: 'projects_locations_workflow_templates_update', value: 'projects_locations_workflow_templates_update' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_update">

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

```sql
REPLACE google.dataproc.workflow_templates
SET 
data__id = '{{ id }}',
data__version = {{ version }},
data__labels = '{{ labels }}',
data__placement = '{{ placement }}',
data__jobs = '{{ jobs }}',
data__parameters = '{{ parameters }}',
data__dagTimeout = '{{ dagTimeout }}',
data__encryptionConfig = '{{ encryptionConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND regionsId = '{{ regionsId }}' --required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' --required
RETURNING
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version;
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_update">

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

```sql
REPLACE google.dataproc.workflow_templates
SET 
data__id = '{{ id }}',
data__version = {{ version }},
data__labels = '{{ labels }}',
data__placement = '{{ placement }}',
data__jobs = '{{ jobs }}',
data__parameters = '{{ parameters }}',
data__dagTimeout = '{{ dagTimeout }}',
data__encryptionConfig = '{{ encryptionConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' --required
RETURNING
id,
name,
createTime,
dagTimeout,
encryptionConfig,
jobs,
labels,
parameters,
placement,
updateTime,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_regions_workflow_templates_delete"
    values={[
        { label: 'projects_regions_workflow_templates_delete', value: 'projects_regions_workflow_templates_delete' },
        { label: 'projects_locations_workflow_templates_delete', value: 'projects_locations_workflow_templates_delete' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_delete">

Deletes a workflow template. It does not cancel in-progress workflows.

```sql
DELETE FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' --required
AND regionsId = '{{ regionsId }}' --required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' --required
AND version = '{{ version }}';
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_delete">

Deletes a workflow template. It does not cancel in-progress workflows.

```sql
DELETE FROM google.dataproc.workflow_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workflowTemplatesId = '{{ workflowTemplatesId }}' --required
AND version = '{{ version }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_regions_workflow_templates_instantiate"
    values={[
        { label: 'projects_regions_workflow_templates_instantiate', value: 'projects_regions_workflow_templates_instantiate' },
        { label: 'projects_regions_workflow_templates_instantiate_inline', value: 'projects_regions_workflow_templates_instantiate_inline' },
        { label: 'projects_locations_workflow_templates_instantiate', value: 'projects_locations_workflow_templates_instantiate' },
        { label: 'projects_locations_workflow_templates_instantiate_inline', value: 'projects_locations_workflow_templates_instantiate_inline' }
    ]}
>
<TabItem value="projects_regions_workflow_templates_instantiate">

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

```sql
EXEC google.dataproc.workflow_templates.projects_regions_workflow_templates_instantiate 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@workflowTemplatesId='{{ workflowTemplatesId }}' --required 
@@json=
'{
"version": {{ version }}, 
"requestId": "{{ requestId }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="projects_regions_workflow_templates_instantiate_inline">

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

```sql
EXEC google.dataproc.workflow_templates.projects_regions_workflow_templates_instantiate_inline 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"id": "{{ id }}", 
"version": {{ version }}, 
"labels": "{{ labels }}", 
"placement": "{{ placement }}", 
"jobs": "{{ jobs }}", 
"parameters": "{{ parameters }}", 
"dagTimeout": "{{ dagTimeout }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_instantiate">

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

```sql
EXEC google.dataproc.workflow_templates.projects_locations_workflow_templates_instantiate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workflowTemplatesId='{{ workflowTemplatesId }}' --required 
@@json=
'{
"version": {{ version }}, 
"requestId": "{{ requestId }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_workflow_templates_instantiate_inline">

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

```sql
EXEC google.dataproc.workflow_templates.projects_locations_workflow_templates_instantiate_inline 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"id": "{{ id }}", 
"version": {{ version }}, 
"labels": "{{ labels }}", 
"placement": "{{ placement }}", 
"jobs": "{{ jobs }}", 
"parameters": "{{ parameters }}", 
"dagTimeout": "{{ dagTimeout }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}';
```
</TabItem>
</Tabs>
