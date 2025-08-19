--- 
title: git_repository_links
hide_title: false
hide_table_of_contents: false
keywords:
  - git_repository_links
  - developerconnect
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

Creates, updates, deletes, gets or lists a <code>git_repository_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>git_repository_links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.git_repository_links" /></td></tr>
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

Message describing the GitRepositoryLink object

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
    <td>Identifier. Resource name of the repository, in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="cloneUri" /></td>
    <td><code>string</code></td>
    <td>Required. Git Clone URI.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Delete timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="gitProxyUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI to access the linked repository through the Git Proxy. This field is only populated if the git proxy is enabled for the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Set to true when the connection is being set up or updated in the background.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for the GitRepositoryLink.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="webhookId" /></td>
    <td><code>string</code></td>
    <td>Output only. External ID of the webhook created for the repository.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing GitRepositoryLinks

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
    <td><CopyableCode code="gitRepositoryLinks" /></td>
    <td><code>array</code></td>
    <td>The list of GitRepositoryLinks</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>Gets details of a single GitRepositoryLink.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists GitRepositoryLinks in a given project, location, and connection.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-gitRepositoryLinkId"><code>gitRepositoryLinkId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. All other Connections will have events forwarded to Cloud Build.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single GitRepositoryLink.</td>
</tr>
<tr>
    <td><a href="#processgitlab_enterprise_webhook"><CopyableCode code="processgitlab_enterprise_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.</td>
</tr>
<tr>
    <td><a href="#processgitlab_webhook"><CopyableCode code="processgitlab_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>ProcessGitLabWebhook is called by the GitLab.com for notifying events.</td>
</tr>
<tr>
    <td><a href="#process_bitbucket_data_center_webhook"><CopyableCode code="process_bitbucket_data_center_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.</td>
</tr>
<tr>
    <td><a href="#process_bitbucket_cloud_webhook"><CopyableCode code="process_bitbucket_cloud_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-gitRepositoryLinksId"><code>gitRepositoryLinksId</code></a></td>
    <td></td>
    <td>ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gitRepositoryLinksId">
    <td><CopyableCode code="gitRepositoryLinksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gitRepositoryLinkId">
    <td><CopyableCode code="gitRepositoryLinkId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
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

Gets details of a single GitRepositoryLink.

```sql
SELECT
name,
annotations,
cloneUri,
createTime,
deleteTime,
etag,
gitProxyUri,
labels,
reconciling,
uid,
updateTime,
webhookId
FROM google.developerconnect.git_repository_links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND gitRepositoryLinksId = '{{ gitRepositoryLinksId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists GitRepositoryLinks in a given project, location, and connection.

```sql
SELECT
gitRepositoryLinks,
nextPageToken,
unreachable
FROM google.developerconnect.git_repository_links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. All other Connections will have events forwarded to Cloud Build.

```sql
INSERT INTO google.developerconnect.git_repository_links (
data__name,
data__cloneUri,
data__labels,
data__etag,
data__annotations,
projectsId,
locationsId,
connectionsId,
gitRepositoryLinkId,
requestId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ cloneUri }}',
'{{ labels }}',
'{{ etag }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionsId }}',
'{{ gitRepositoryLinkId }}',
'{{ requestId }}',
'{{ validateOnly }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: git_repository_links
  props:
    - name: projectsId
      value: string
      description: Required parameter for the git_repository_links resource.
    - name: locationsId
      value: string
      description: Required parameter for the git_repository_links resource.
    - name: connectionsId
      value: string
      description: Required parameter for the git_repository_links resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the repository, in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`.
        
    - name: cloneUri
      value: string
      description: >
        Required. Git Clone URI.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: etag
      value: string
      description: >
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: annotations
      value: object
      description: >
        Optional. Allows clients to store small amounts of arbitrary data.
        
    - name: gitRepositoryLinkId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
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

Deletes a single GitRepositoryLink.

```sql
DELETE FROM google.developerconnect.git_repository_links
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND gitRepositoryLinksId = '{{ gitRepositoryLinksId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="processgitlab_enterprise_webhook"
    values={[
        { label: 'processgitlab_enterprise_webhook', value: 'processgitlab_enterprise_webhook' },
        { label: 'processgitlab_webhook', value: 'processgitlab_webhook' },
        { label: 'process_bitbucket_data_center_webhook', value: 'process_bitbucket_data_center_webhook' },
        { label: 'process_bitbucket_cloud_webhook', value: 'process_bitbucket_cloud_webhook' }
    ]}
>
<TabItem value="processgitlab_enterprise_webhook">

ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.

```sql
EXEC google.developerconnect.git_repository_links.processgitlab_enterprise_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@gitRepositoryLinksId='{{ gitRepositoryLinksId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
<TabItem value="processgitlab_webhook">

ProcessGitLabWebhook is called by the GitLab.com for notifying events.

```sql
EXEC google.developerconnect.git_repository_links.processgitlab_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@gitRepositoryLinksId='{{ gitRepositoryLinksId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
<TabItem value="process_bitbucket_data_center_webhook">

ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.

```sql
EXEC google.developerconnect.git_repository_links.process_bitbucket_data_center_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@gitRepositoryLinksId='{{ gitRepositoryLinksId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
<TabItem value="process_bitbucket_cloud_webhook">

ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.

```sql
EXEC google.developerconnect.git_repository_links.process_bitbucket_cloud_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@gitRepositoryLinksId='{{ gitRepositoryLinksId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
</Tabs>
