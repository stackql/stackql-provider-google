--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - bigqueryconnection
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigqueryconnection.connections" /></td></tr>
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

Configuration parameters to establish connection with an external data source, except the credential attributes.

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
    <td>Output only. The resource name of the connection in the form of: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/connections/&#123;connection_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="aws" /></td>
    <td><code>object</code></td>
    <td>Amazon Web Services (AWS) properties. (id: AwsProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="azure" /></td>
    <td><code>object</code></td>
    <td>Azure properties. (id: AzureProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudResource" /></td>
    <td><code>object</code></td>
    <td>Cloud Resource properties. (id: CloudResourceProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSpanner" /></td>
    <td><code>object</code></td>
    <td>Cloud Spanner properties. (id: CloudSpannerProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSql" /></td>
    <td><code>object</code></td>
    <td>Cloud SQL properties. (id: CloudSqlProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Optional. Connector configuration. (id: ConnectorConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The creation timestamp of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description.</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>User provided display name for the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="hasCredential" /></td>
    <td><code>boolean</code></td>
    <td>Output only. True, if credential is configured for this connection.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The Cloud KMS key that is used for credentials encryption. If omitted, internal Google owned encryption keys are used. Example: `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The last update timestamp of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceDataCloud" /></td>
    <td><code>object</code></td>
    <td>Optional. Salesforce DataCloud properties. This field is intended for use only by Salesforce partner projects. This field contains properties for your Salesforce DataCloud connection. (id: SalesforceDataCloudProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="spark" /></td>
    <td><code>object</code></td>
    <td>Spark properties. (id: SparkProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for ConnectionService.ListConnections.

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
    <td><CopyableCode code="connections" /></td>
    <td><code>array</code></td>
    <td>List of connections.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Next page token.</td>
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
    <td>Returns specified connection.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of connections in the given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td>Creates a new connection.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Deletes connection and associated credential.</td>
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
<tr id="parameter-connectionId">
    <td><CopyableCode code="connectionId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns specified connection.

```sql
SELECT
name,
aws,
azure,
cloudResource,
cloudSpanner,
cloudSql,
configuration,
creationTime,
description,
friendlyName,
hasCredential,
kmsKeyName,
lastModifiedTime,
salesforceDataCloud,
spark
FROM google.bigqueryconnection.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns a list of connections in the given project.

```sql
SELECT
connections,
nextPageToken
FROM google.bigqueryconnection.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new connection.

```sql
INSERT INTO google.bigqueryconnection.connections (
data__friendlyName,
data__description,
data__cloudSql,
data__aws,
data__azure,
data__cloudSpanner,
data__cloudResource,
data__spark,
data__salesforceDataCloud,
data__configuration,
data__kmsKeyName,
projectsId,
locationsId,
connectionId
)
SELECT 
'{{ friendlyName }}',
'{{ description }}',
'{{ cloudSql }}',
'{{ aws }}',
'{{ azure }}',
'{{ cloudSpanner }}',
'{{ cloudResource }}',
'{{ spark }}',
'{{ salesforceDataCloud }}',
'{{ configuration }}',
'{{ kmsKeyName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionId }}'
RETURNING
name,
aws,
azure,
cloudResource,
cloudSpanner,
cloudSql,
configuration,
creationTime,
description,
friendlyName,
hasCredential,
kmsKeyName,
lastModifiedTime,
salesforceDataCloud,
spark
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
    - name: friendlyName
      value: string
      description: >
        User provided display name for the connection.
        
    - name: description
      value: string
      description: >
        User provided description.
        
    - name: cloudSql
      value: object
      description: >
        Cloud SQL properties.
        
    - name: aws
      value: object
      description: >
        Amazon Web Services (AWS) properties.
        
    - name: azure
      value: object
      description: >
        Azure properties.
        
    - name: cloudSpanner
      value: object
      description: >
        Cloud Spanner properties.
        
    - name: cloudResource
      value: object
      description: >
        Cloud Resource properties.
        
    - name: spark
      value: object
      description: >
        Spark properties.
        
    - name: salesforceDataCloud
      value: object
      description: >
        Optional. Salesforce DataCloud properties. This field is intended for use only by Salesforce partner projects. This field contains properties for your Salesforce DataCloud connection.
        
    - name: configuration
      value: object
      description: >
        Optional. Connector configuration.
        
    - name: kmsKeyName
      value: string
      description: >
        Optional. The Cloud KMS key that is used for credentials encryption. If omitted, internal Google owned encryption keys are used. Example: `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`
        
    - name: connectionId
      value: string
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

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

```sql
UPDATE google.bigqueryconnection.connections
SET 
data__friendlyName = '{{ friendlyName }}',
data__description = '{{ description }}',
data__cloudSql = '{{ cloudSql }}',
data__aws = '{{ aws }}',
data__azure = '{{ azure }}',
data__cloudSpanner = '{{ cloudSpanner }}',
data__cloudResource = '{{ cloudResource }}',
data__spark = '{{ spark }}',
data__salesforceDataCloud = '{{ salesforceDataCloud }}',
data__configuration = '{{ configuration }}',
data__kmsKeyName = '{{ kmsKeyName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
aws,
azure,
cloudResource,
cloudSpanner,
cloudSql,
configuration,
creationTime,
description,
friendlyName,
hasCredential,
kmsKeyName,
lastModifiedTime,
salesforceDataCloud,
spark;
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

Deletes connection and associated credential.

```sql
DELETE FROM google.bigqueryconnection.connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required;
```
</TabItem>
</Tabs>
