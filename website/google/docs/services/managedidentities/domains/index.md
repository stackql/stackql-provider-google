--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - managedidentities
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedidentities.domains" /></td></tr>
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
    <td>Required. The unique name of the domain using the form: `projects/&#123;project_id&#125;/locations/global/domains/&#123;domain_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="auditLogsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetworks" /></td>
    <td><code>array</code></td>
    <td>Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels that can contain user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Required. Locations where domain needs to be provisioned. The locations can be specified according to https://cloud.google.com/compute/docs/regions-zones, such as `us-west1` or `us-east4`. Each domain supports up to 4 locations, separated by commas. Each location will use a /26 block.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this domain.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this domain, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="trusts" /></td>
    <td><code>array</code></td>
    <td>Output only. The current trusts associated with the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time.</td>
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
    <td>Required. The unique name of the domain using the form: `projects/&#123;project_id&#125;/locations/global/domains/&#123;domain_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="auditLogsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetworks" /></td>
    <td><code>array</code></td>
    <td>Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels that can contain user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Required. Locations where domain needs to be provisioned. The locations can be specified according to https://cloud.google.com/compute/docs/regions-zones, such as `us-west1` or `us-east4`. Each domain supports up to 4 locations, separated by commas. Each location will use a /26 block.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this domain.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this domain, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="trusts" /></td>
    <td><code>array</code></td>
    <td>Output only. The current trusts associated with the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Gets information about a domain.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists domains in a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a></td>
    <td>Creates a Microsoft AD domain.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the metadata and configuration of a domain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Deletes a domain.</td>
</tr>
<tr>
    <td><a href="#reset_admin_password"><CopyableCode code="reset_admin_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Resets a domain's administrator password.</td>
</tr>
<tr>
    <td><a href="#domain_join_machine"><CopyableCode code="domain_join_machine" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>DomainJoinMachine API joins a Compute Engine VM to the domain</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>RestoreDomain restores domain backup mentioned in the RestoreDomainRequest</td>
</tr>
<tr>
    <td><a href="#attach_trust"><CopyableCode code="attach_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Adds an AD trust to a domain.</td>
</tr>
<tr>
    <td><a href="#reconfigure_trust"><CopyableCode code="reconfigure_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Updates the DNS conditional forwarder.</td>
</tr>
<tr>
    <td><a href="#detach_trust"><CopyableCode code="detach_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Removes an AD trust.</td>
</tr>
<tr>
    <td><a href="#validate_trust"><CopyableCode code="validate_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.</td>
</tr>
<tr>
    <td><a href="#extend_schema"><CopyableCode code="extend_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Extend Schema for Domain</td>
</tr>
<tr>
    <td><a href="#enable_migration"><CopyableCode code="enable_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Enable Domain Migration</td>
</tr>
<tr>
    <td><a href="#disable_migration"><CopyableCode code="disable_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Disable Domain Migration</td>
</tr>
<tr>
    <td><a href="#check_migration_permission"><CopyableCode code="check_migration_permission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>CheckMigrationPermission API gets the current state of DomainMigration</td>
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
<tr id="parameter-domainsId">
    <td><CopyableCode code="domainsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
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

Gets information about a domain.

```sql
SELECT
name,
admin,
auditLogsEnabled,
authorizedNetworks,
createTime,
fqdn,
labels,
locations,
reservedIpRange,
state,
statusMessage,
trusts,
updateTime
FROM google.managedidentities.domains
WHERE projectsId = '{{ projectsId }}' -- required
AND domainsId = '{{ domainsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists domains in a project.

```sql
SELECT
name,
admin,
auditLogsEnabled,
authorizedNetworks,
createTime,
fqdn,
labels,
locations,
reservedIpRange,
state,
statusMessage,
trusts,
updateTime
FROM google.managedidentities.domains
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates a Microsoft AD domain.

```sql
INSERT INTO google.managedidentities.domains (
data__name,
data__labels,
data__authorizedNetworks,
data__reservedIpRange,
data__locations,
data__admin,
data__auditLogsEnabled,
projectsId,
domainName
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ authorizedNetworks }}',
'{{ reservedIpRange }}',
'{{ locations }}',
'{{ admin }}',
{{ auditLogsEnabled }},
'{{ projectsId }}',
'{{ domainName }}'
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
- name: domains
  props:
    - name: projectsId
      value: string
      description: Required parameter for the domains resource.
    - name: name
      value: string
      description: >
        Required. The unique name of the domain using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.
        
    - name: labels
      value: object
      description: >
        Optional. Resource labels that can contain user-provided metadata.
        
    - name: authorizedNetworks
      value: array
      description: >
        Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.
        
    - name: reservedIpRange
      value: string
      description: >
        Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].
        
    - name: locations
      value: array
      description: >
        Required. Locations where domain needs to be provisioned. The locations can be specified according to https://cloud.google.com/compute/docs/regions-zones, such as `us-west1` or `us-east4`. Each domain supports up to 4 locations, separated by commas. Each location will use a /26 block.
        
    - name: admin
      value: string
      description: >
        Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.
        
    - name: auditLogsEnabled
      value: boolean
      description: >
        Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.
        
    - name: domainName
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

Updates the metadata and configuration of a domain.

```sql
UPDATE google.managedidentities.domains
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__authorizedNetworks = '{{ authorizedNetworks }}',
data__reservedIpRange = '{{ reservedIpRange }}',
data__locations = '{{ locations }}',
data__admin = '{{ admin }}',
data__auditLogsEnabled = {{ auditLogsEnabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND domainsId = '{{ domainsId }}' --required
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

Deletes a domain.

```sql
DELETE FROM google.managedidentities.domains
WHERE projectsId = '{{ projectsId }}' --required
AND domainsId = '{{ domainsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_admin_password"
    values={[
        { label: 'reset_admin_password', value: 'reset_admin_password' },
        { label: 'domain_join_machine', value: 'domain_join_machine' },
        { label: 'restore', value: 'restore' },
        { label: 'attach_trust', value: 'attach_trust' },
        { label: 'reconfigure_trust', value: 'reconfigure_trust' },
        { label: 'detach_trust', value: 'detach_trust' },
        { label: 'validate_trust', value: 'validate_trust' },
        { label: 'extend_schema', value: 'extend_schema' },
        { label: 'enable_migration', value: 'enable_migration' },
        { label: 'disable_migration', value: 'disable_migration' },
        { label: 'check_migration_permission', value: 'check_migration_permission' }
    ]}
>
<TabItem value="reset_admin_password">

Resets a domain's administrator password.

```sql
EXEC google.managedidentities.domains.reset_admin_password 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required;
```
</TabItem>
<TabItem value="domain_join_machine">

DomainJoinMachine API joins a Compute Engine VM to the domain

```sql
EXEC google.managedidentities.domains.domain_join_machine 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"vmIdToken": "{{ vmIdToken }}", 
"ouName": "{{ ouName }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="restore">

RestoreDomain restores domain backup mentioned in the RestoreDomainRequest

```sql
EXEC google.managedidentities.domains.restore 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"backupId": "{{ backupId }}"
}';
```
</TabItem>
<TabItem value="attach_trust">

Adds an AD trust to a domain.

```sql
EXEC google.managedidentities.domains.attach_trust 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"trust": "{{ trust }}"
}';
```
</TabItem>
<TabItem value="reconfigure_trust">

Updates the DNS conditional forwarder.

```sql
EXEC google.managedidentities.domains.reconfigure_trust 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"targetDomainName": "{{ targetDomainName }}", 
"targetDnsIpAddresses": "{{ targetDnsIpAddresses }}"
}';
```
</TabItem>
<TabItem value="detach_trust">

Removes an AD trust.

```sql
EXEC google.managedidentities.domains.detach_trust 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"trust": "{{ trust }}"
}';
```
</TabItem>
<TabItem value="validate_trust">

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

```sql
EXEC google.managedidentities.domains.validate_trust 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"trust": "{{ trust }}"
}';
```
</TabItem>
<TabItem value="extend_schema">

Extend Schema for Domain

```sql
EXEC google.managedidentities.domains.extend_schema 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"gcsPath": "{{ gcsPath }}", 
"fileContents": "{{ fileContents }}"
}';
```
</TabItem>
<TabItem value="enable_migration">

Enable Domain Migration

```sql
EXEC google.managedidentities.domains.enable_migration 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required 
@@json=
'{
"migratingDomains": "{{ migratingDomains }}"
}';
```
</TabItem>
<TabItem value="disable_migration">

Disable Domain Migration

```sql
EXEC google.managedidentities.domains.disable_migration 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required;
```
</TabItem>
<TabItem value="check_migration_permission">

CheckMigrationPermission API gets the current state of DomainMigration

```sql
EXEC google.managedidentities.domains.check_migration_permission 
@projectsId='{{ projectsId }}' --required, 
@domainsId='{{ domainsId }}' --required;
```
</TabItem>
</Tabs>
