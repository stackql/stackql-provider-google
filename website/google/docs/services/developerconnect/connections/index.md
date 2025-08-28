--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.connections" /></td></tr>
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
    <td>Identifier. The resource name of the connection, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketCloudConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of Bitbucket Clouds. (id: BitbucketCloudConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketDataCenterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of Bitbucket Data Center. (id: BitbucketDataCenterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature. (id: CryptoKeyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Delete timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="gitProxyConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection. (id: GitProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="githubConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to github.com. (id: GitHubConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="githubEnterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of GitHub Enterprise. (id: GitHubEnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="gitlabConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to gitlab.com. (id: GitLabConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="gitlabEnterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of GitLab Enterprise. (id: GitLabEnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="installationState" /></td>
    <td><code>object</code></td>
    <td>Output only. Installation state of the Connection. (id: InstallationState)</td>
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
    <td>Output only. A system-assigned unique identifier for the Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update timestamp</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the connection, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketCloudConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of Bitbucket Clouds. (id: BitbucketCloudConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketDataCenterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of Bitbucket Data Center. (id: BitbucketDataCenterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature. (id: CryptoKeyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Delete timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="gitProxyConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection. (id: GitProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="githubConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to github.com. (id: GitHubConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="githubEnterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of GitHub Enterprise. (id: GitHubEnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="gitlabConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to gitlab.com. (id: GitLabConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="gitlabEnterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of GitLab Enterprise. (id: GitLabEnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="installationState" /></td>
    <td><code>object</code></td>
    <td>Output only. Installation state of the Connection. (id: InstallationState)</td>
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
    <td>Output only. A system-assigned unique identifier for the Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update timestamp</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Gets details of a single Connection.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Connections in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Connection in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single Connection.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single Connection.</td>
</tr>
<tr>
    <td><a href="#processgithub_enterprise_webhook"><CopyableCode code="processgithub_enterprise_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-connectionId">
    <td><CopyableCode code="connectionId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets details of a single Connection.

```sql
SELECT
name,
annotations,
bitbucketCloudConfig,
bitbucketDataCenterConfig,
createTime,
cryptoKeyConfig,
deleteTime,
disabled,
etag,
gitProxyConfig,
githubConfig,
githubEnterpriseConfig,
gitlabConfig,
gitlabEnterpriseConfig,
installationState,
labels,
reconciling,
uid,
updateTime
FROM google.developerconnect.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Connections in a given project and location.

```sql
SELECT
name,
annotations,
bitbucketCloudConfig,
bitbucketDataCenterConfig,
createTime,
cryptoKeyConfig,
deleteTime,
disabled,
etag,
gitProxyConfig,
githubConfig,
githubEnterpriseConfig,
gitlabConfig,
gitlabEnterpriseConfig,
installationState,
labels,
reconciling,
uid,
updateTime
FROM google.developerconnect.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new Connection in a given project and location.

```sql
INSERT INTO google.developerconnect.connections (
data__githubConfig,
data__githubEnterpriseConfig,
data__gitlabConfig,
data__gitlabEnterpriseConfig,
data__bitbucketDataCenterConfig,
data__bitbucketCloudConfig,
data__name,
data__labels,
data__disabled,
data__annotations,
data__etag,
data__cryptoKeyConfig,
data__gitProxyConfig,
projectsId,
locationsId,
connectionId,
requestId,
validateOnly
)
SELECT 
'{{ githubConfig }}',
'{{ githubEnterpriseConfig }}',
'{{ gitlabConfig }}',
'{{ gitlabEnterpriseConfig }}',
'{{ bitbucketDataCenterConfig }}',
'{{ bitbucketCloudConfig }}',
'{{ name }}',
'{{ labels }}',
{{ disabled }},
'{{ annotations }}',
'{{ etag }}',
'{{ cryptoKeyConfig }}',
'{{ gitProxyConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionId }}',
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
- name: connections
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connections resource.
    - name: locationsId
      value: string
      description: Required parameter for the connections resource.
    - name: githubConfig
      value: object
      description: >
        Configuration for connections to github.com.
        
    - name: githubEnterpriseConfig
      value: object
      description: >
        Configuration for connections to an instance of GitHub Enterprise.
        
    - name: gitlabConfig
      value: object
      description: >
        Configuration for connections to gitlab.com.
        
    - name: gitlabEnterpriseConfig
      value: object
      description: >
        Configuration for connections to an instance of GitLab Enterprise.
        
    - name: bitbucketDataCenterConfig
      value: object
      description: >
        Configuration for connections to an instance of Bitbucket Data Center.
        
    - name: bitbucketCloudConfig
      value: object
      description: >
        Configuration for connections to an instance of Bitbucket Clouds.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: disabled
      value: boolean
      description: >
        Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
        
    - name: annotations
      value: object
      description: >
        Optional. Allows clients to store small amounts of arbitrary data.
        
    - name: etag
      value: string
      description: >
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: cryptoKeyConfig
      value: object
      description: >
        Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
        
    - name: gitProxyConfig
      value: object
      description: >
        Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection.
        
    - name: connectionId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
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

Updates the parameters of a single Connection.

```sql
UPDATE google.developerconnect.connections
SET 
data__githubConfig = '{{ githubConfig }}',
data__githubEnterpriseConfig = '{{ githubEnterpriseConfig }}',
data__gitlabConfig = '{{ gitlabConfig }}',
data__gitlabEnterpriseConfig = '{{ gitlabEnterpriseConfig }}',
data__bitbucketDataCenterConfig = '{{ bitbucketDataCenterConfig }}',
data__bitbucketCloudConfig = '{{ bitbucketCloudConfig }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__disabled = {{ disabled }},
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}',
data__cryptoKeyConfig = '{{ cryptoKeyConfig }}',
data__gitProxyConfig = '{{ gitProxyConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
AND validateOnly = {{ validateOnly}}
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a single Connection.

```sql
DELETE FROM google.developerconnect.connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="processgithub_enterprise_webhook"
    values={[
        { label: 'processgithub_enterprise_webhook', value: 'processgithub_enterprise_webhook' }
    ]}
>
<TabItem value="processgithub_enterprise_webhook">

ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.

```sql
EXEC google.developerconnect.connections.processgithub_enterprise_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
</Tabs>
