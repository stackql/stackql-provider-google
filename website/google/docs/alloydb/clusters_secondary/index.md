--- 
title: clusters_secondary
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_secondary
  - alloydb
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

Creates, updates, deletes, gets or lists a <code>clusters_secondary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters_secondary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.clusters_secondary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#createsecondary"><CopyableCode code="createsecondary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="createsecondary"
    values={[
        { label: 'createsecondary', value: 'createsecondary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createsecondary">

Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.

```sql
INSERT INTO google.alloydb.clusters_secondary (
data__displayName,
data__labels,
data__databaseVersion,
data__networkConfig,
data__network,
data__etag,
data__annotations,
data__initialUser,
data__automatedBackupPolicy,
data__sslConfig,
data__encryptionConfig,
data__continuousBackupConfig,
data__secondaryConfig,
data__pscConfig,
data__maintenanceUpdatePolicy,
data__subscriptionType,
data__tags,
projectsId,
locationsId,
clusterId,
requestId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ databaseVersion }}',
'{{ networkConfig }}',
'{{ network }}',
'{{ etag }}',
'{{ annotations }}',
'{{ initialUser }}',
'{{ automatedBackupPolicy }}',
'{{ sslConfig }}',
'{{ encryptionConfig }}',
'{{ continuousBackupConfig }}',
'{{ secondaryConfig }}',
'{{ pscConfig }}',
'{{ maintenanceUpdatePolicy }}',
'{{ subscriptionType }}',
'{{ tags }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clusterId }}',
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
- name: clusters_secondary
  props:
    - name: projectsId
      value: string
      description: Required parameter for the clusters_secondary resource.
    - name: locationsId
      value: string
      description: Required parameter for the clusters_secondary resource.
    - name: displayName
      value: string
      description: >
        User-settable and human-readable display name for the Cluster.
        
    - name: labels
      value: object
      description: >
        Labels as key value pairs
        
    - name: databaseVersion
      value: string
      description: >
        Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
        
      valid_values: ['DATABASE_VERSION_UNSPECIFIED', 'POSTGRES_13', 'POSTGRES_14', 'POSTGRES_15', 'POSTGRES_16']
    - name: networkConfig
      value: object
      description: >
        Metadata related to network configuration.
        
    - name: network
      value: string
      description: >
        Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project}/global/networks/{network_id}`. This is required to create a cluster. Deprecated, use network_config.network instead.
        
    - name: etag
      value: string
      description: >
        For Resource freshness validation (https://google.aip.dev/154)
        
    - name: annotations
      value: object
      description: >
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
        
    - name: initialUser
      value: object
      description: >
        Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored.
        
    - name: automatedBackupPolicy
      value: object
      description: >
        The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type.
        
    - name: sslConfig
      value: object
      description: >
        SSL configuration for this AlloyDB cluster.
        
    - name: encryptionConfig
      value: object
      description: >
        Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
        
    - name: continuousBackupConfig
      value: object
      description: >
        Optional. Continuous backup configuration for this cluster.
        
    - name: secondaryConfig
      value: object
      description: >
        Cross Region replication config specific to SECONDARY cluster.
        
    - name: pscConfig
      value: object
      description: >
        Optional. The configuration for Private Service Connect (PSC) for the cluster.
        
    - name: maintenanceUpdatePolicy
      value: object
      description: >
        Optional. The maintenance update policy determines when to allow or deny updates.
        
    - name: subscriptionType
      value: string
      description: >
        Optional. Subscription type of the cluster.
        
      valid_values: ['SUBSCRIPTION_TYPE_UNSPECIFIED', 'STANDARD', 'TRIAL']
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: ``` "123/environment": "production", "123/costCenter": "marketing" ```
        
    - name: clusterId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>
