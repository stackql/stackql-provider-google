--- 
title: active_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - active_directories
  - netapp
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

Creates, updates, deletes, gets or lists an <code>active_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>active_directories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.active_directories" /></td></tr>
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

ActiveDirectory is the public representation of the active directory config.

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
    <td>Identifier. The resource name of the active directory. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/activeDirectories/&#123;active_directory_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="administrators" /></td>
    <td><code>array</code></td>
    <td>Optional. Users to be added to the Built-in Admininstrators group.</td>
</tr>
<tr>
    <td><CopyableCode code="aesEncryption" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, AES encryption will be enabled for SMB communication.</td>
</tr>
<tr>
    <td><CopyableCode code="backupOperators" /></td>
    <td><code>array</code></td>
    <td>Optional. Users to be added to the Built-in Backup Operator active directory group.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the active directory.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the active directory.</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>string</code></td>
    <td>Required. Comma separated list of DNS server IP addresses for the Active Directory domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the Active Directory domain</td>
</tr>
<tr>
    <td><CopyableCode code="encryptDcConnections" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="kdcHostname" /></td>
    <td><code>string</code></td>
    <td>Name of the active directory machine. This optional parameter is used only while creating kerberos volume</td>
</tr>
<tr>
    <td><CopyableCode code="kdcIp" /></td>
    <td><code>string</code></td>
    <td>KDC server IP address for the active directory machine.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for the active directory.</td>
</tr>
<tr>
    <td><CopyableCode code="ldapSigning" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not the LDAP traffic needs to be signed.</td>
</tr>
<tr>
    <td><CopyableCode code="netBiosPrefix" /></td>
    <td><code>string</code></td>
    <td>Required. NetBIOSPrefix is used as a prefix for SMB server name.</td>
</tr>
<tr>
    <td><CopyableCode code="nfsUsersWithLdap" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, will allow access to local users and LDAP users. If access is needed for only LDAP users, it has to be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationalUnit" /></td>
    <td><code>string</code></td>
    <td>The Organizational Unit (OU) within the Windows Active Directory the user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>Required. Password of the Active Directory domain administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="securityOperators" /></td>
    <td><code>array</code></td>
    <td>Optional. Domain users to be given the SeSecurityPrivilege.</td>
</tr>
<tr>
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Active Directory site the service will limit Domain Controller discovery too.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the AD.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. The state details of the Active Directory.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Required. Username of the Active Directory domain administrator.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

ListActiveDirectoriesResponse contains all the active directories requested.

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
    <td><CopyableCode code="activeDirectories" /></td>
    <td><code>array</code></td>
    <td>The list of active directories.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-activeDirectoriesId"><code>activeDirectoriesId</code></a></td>
    <td></td>
    <td>Describes a specified active directory.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists active directories.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-activeDirectoryId"><code>activeDirectoryId</code></a></td>
    <td>CreateActiveDirectory Creates the active directory specified in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-activeDirectoriesId"><code>activeDirectoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the parameters of an active directories.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-activeDirectoriesId"><code>activeDirectoriesId</code></a></td>
    <td></td>
    <td>Delete the active directory specified in the request.</td>
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
<tr id="parameter-activeDirectoriesId">
    <td><CopyableCode code="activeDirectoriesId" /></td>
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
<tr id="parameter-activeDirectoryId">
    <td><CopyableCode code="activeDirectoryId" /></td>
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

Describes a specified active directory.

```sql
SELECT
name,
administrators,
aesEncryption,
backupOperators,
createTime,
description,
dns,
domain,
encryptDcConnections,
kdcHostname,
kdcIp,
labels,
ldapSigning,
netBiosPrefix,
nfsUsersWithLdap,
organizationalUnit,
password,
securityOperators,
site,
state,
stateDetails,
username
FROM google.netapp.active_directories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND activeDirectoriesId = '{{ activeDirectoriesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists active directories.

```sql
SELECT
activeDirectories,
nextPageToken,
unreachable
FROM google.netapp.active_directories
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

CreateActiveDirectory Creates the active directory specified in the request.

```sql
INSERT INTO google.netapp.active_directories (
data__name,
data__domain,
data__site,
data__dns,
data__netBiosPrefix,
data__organizationalUnit,
data__aesEncryption,
data__username,
data__password,
data__backupOperators,
data__administrators,
data__securityOperators,
data__kdcHostname,
data__kdcIp,
data__nfsUsersWithLdap,
data__description,
data__ldapSigning,
data__encryptDcConnections,
data__labels,
projectsId,
locationsId,
activeDirectoryId
)
SELECT 
'{{ name }}',
'{{ domain }}',
'{{ site }}',
'{{ dns }}',
'{{ netBiosPrefix }}',
'{{ organizationalUnit }}',
{{ aesEncryption }},
'{{ username }}',
'{{ password }}',
'{{ backupOperators }}',
'{{ administrators }}',
'{{ securityOperators }}',
'{{ kdcHostname }}',
'{{ kdcIp }}',
{{ nfsUsersWithLdap }},
'{{ description }}',
{{ ldapSigning }},
{{ encryptDcConnections }},
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ activeDirectoryId }}'
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
- name: active_directories
  props:
    - name: projectsId
      value: string
      description: Required parameter for the active_directories resource.
    - name: locationsId
      value: string
      description: Required parameter for the active_directories resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the active directory. Format: `projects/{project_number}/locations/{location_id}/activeDirectories/{active_directory_id}`.
        
    - name: domain
      value: string
      description: >
        Required. Name of the Active Directory domain
        
    - name: site
      value: string
      description: >
        The Active Directory site the service will limit Domain Controller discovery too.
        
    - name: dns
      value: string
      description: >
        Required. Comma separated list of DNS server IP addresses for the Active Directory domain.
        
    - name: netBiosPrefix
      value: string
      description: >
        Required. NetBIOSPrefix is used as a prefix for SMB server name.
        
    - name: organizationalUnit
      value: string
      description: >
        The Organizational Unit (OU) within the Windows Active Directory the user belongs to.
        
    - name: aesEncryption
      value: boolean
      description: >
        If enabled, AES encryption will be enabled for SMB communication.
        
    - name: username
      value: string
      description: >
        Required. Username of the Active Directory domain administrator.
        
    - name: password
      value: string
      description: >
        Required. Password of the Active Directory domain administrator.
        
    - name: backupOperators
      value: array
      description: >
        Optional. Users to be added to the Built-in Backup Operator active directory group.
        
    - name: administrators
      value: array
      description: >
        Optional. Users to be added to the Built-in Admininstrators group.
        
    - name: securityOperators
      value: array
      description: >
        Optional. Domain users to be given the SeSecurityPrivilege.
        
    - name: kdcHostname
      value: string
      description: >
        Name of the active directory machine. This optional parameter is used only while creating kerberos volume
        
    - name: kdcIp
      value: string
      description: >
        KDC server IP address for the active directory machine.
        
    - name: nfsUsersWithLdap
      value: boolean
      description: >
        If enabled, will allow access to local users and LDAP users. If access is needed for only LDAP users, it has to be disabled.
        
    - name: description
      value: string
      description: >
        Description of the active directory.
        
    - name: ldapSigning
      value: boolean
      description: >
        Specifies whether or not the LDAP traffic needs to be signed.
        
    - name: encryptDcConnections
      value: boolean
      description: >
        If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
        
    - name: labels
      value: object
      description: >
        Labels for the active directory.
        
    - name: activeDirectoryId
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

Update the parameters of an active directories.

```sql
UPDATE google.netapp.active_directories
SET 
data__name = '{{ name }}',
data__domain = '{{ domain }}',
data__site = '{{ site }}',
data__dns = '{{ dns }}',
data__netBiosPrefix = '{{ netBiosPrefix }}',
data__organizationalUnit = '{{ organizationalUnit }}',
data__aesEncryption = {{ aesEncryption }},
data__username = '{{ username }}',
data__password = '{{ password }}',
data__backupOperators = '{{ backupOperators }}',
data__administrators = '{{ administrators }}',
data__securityOperators = '{{ securityOperators }}',
data__kdcHostname = '{{ kdcHostname }}',
data__kdcIp = '{{ kdcIp }}',
data__nfsUsersWithLdap = {{ nfsUsersWithLdap }},
data__description = '{{ description }}',
data__ldapSigning = {{ ldapSigning }},
data__encryptDcConnections = {{ encryptDcConnections }},
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND activeDirectoriesId = '{{ activeDirectoriesId }}' --required
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete the active directory specified in the request.

```sql
DELETE FROM google.netapp.active_directories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND activeDirectoriesId = '{{ activeDirectoriesId }}' --required;
```
</TabItem>
</Tabs>
