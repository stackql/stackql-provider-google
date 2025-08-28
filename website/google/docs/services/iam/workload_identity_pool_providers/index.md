--- 
title: workload_identity_pool_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_identity_pool_providers
  - iam
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

Creates, updates, deletes, gets or lists a <code>workload_identity_pool_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workload_identity_pool_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.workload_identity_pool_providers" /></td></tr>
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
    <td>Identifier. The resource name of the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeCondition" /></td>
    <td><code>string</code></td>
    <td>Optional. [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ```</td>
</tr>
<tr>
    <td><CopyableCode code="attributeMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.&#123;custom_attribute&#125;`, where `&#123;custom_attribute&#125;` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/subject/&#123;value&#125;` * `google.groups`: `principalSet://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/group/&#123;value&#125;` * `attribute.&#123;custom_attribute&#125;`: `principalSet://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/attribute.&#123;custom_attribute&#125;/&#123;value&#125;` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` &#123; "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('&#123;account_arn&#125;assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/&#123;role_name&#125;/')" " : assertion.arn", &#125; ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` &#123;"google.subject": "assertion.sub"&#125; ```</td>
</tr>
<tr>
    <td><CopyableCode code="aws" /></td>
    <td><code>object</code></td>
    <td>An Amazon Web Services identity provider. (id: Aws)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description for the provider. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A display name for the provider. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the workload identity pool provider will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="oidc" /></td>
    <td><code>object</code></td>
    <td>An OpenId Connect 1.0 identity provider. (id: Oidc)</td>
</tr>
<tr>
    <td><CopyableCode code="saml" /></td>
    <td><code>object</code></td>
    <td>An SAML 2.0 identity provider. (id: Saml)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="x509" /></td>
    <td><code>object</code></td>
    <td>An X.509-type identity provider. (id: X509)</td>
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
    <td>Identifier. The resource name of the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeCondition" /></td>
    <td><code>string</code></td>
    <td>Optional. [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ```</td>
</tr>
<tr>
    <td><CopyableCode code="attributeMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.&#123;custom_attribute&#125;`, where `&#123;custom_attribute&#125;` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/subject/&#123;value&#125;` * `google.groups`: `principalSet://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/group/&#123;value&#125;` * `attribute.&#123;custom_attribute&#125;`: `principalSet://iam.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/workloadIdentityPools/&#123;pool&#125;/attribute.&#123;custom_attribute&#125;/&#123;value&#125;` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` &#123; "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('&#123;account_arn&#125;assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/&#123;role_name&#125;/')" " : assertion.arn", &#125; ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` &#123;"google.subject": "assertion.sub"&#125; ```</td>
</tr>
<tr>
    <td><CopyableCode code="aws" /></td>
    <td><code>object</code></td>
    <td>An Amazon Web Services identity provider. (id: Aws)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description for the provider. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A display name for the provider. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the workload identity pool provider will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="oidc" /></td>
    <td><code>object</code></td>
    <td>An OpenId Connect 1.0 identity provider. (id: Oidc)</td>
</tr>
<tr>
    <td><CopyableCode code="saml" /></td>
    <td><code>object</code></td>
    <td>An SAML 2.0 identity provider. (id: Saml)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="x509" /></td>
    <td><code>object</code></td>
    <td>An X.509-type identity provider. (id: X509)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td></td>
    <td>Gets an individual WorkloadIdentityPoolProvider.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a></td>
    <td><a href="#parameter-workloadIdentityPoolProviderId"><code>workloadIdentityPoolProviderId</code></a></td>
    <td>Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing WorkloadIdentityPoolProvider.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td></td>
    <td>Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadIdentityPoolsId"><code>workloadIdentityPoolsId</code></a>, <a href="#parameter-providersId"><code>providersId</code></a></td>
    <td></td>
    <td>Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadIdentityPoolsId">
    <td><CopyableCode code="workloadIdentityPoolsId" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadIdentityPoolProviderId">
    <td><CopyableCode code="workloadIdentityPoolProviderId" /></td>
    <td><code>string</code></td>
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

Gets an individual WorkloadIdentityPoolProvider.

```sql
SELECT
name,
attributeCondition,
attributeMapping,
aws,
description,
disabled,
displayName,
expireTime,
oidc,
saml,
state,
x509
FROM google.iam.workload_identity_pool_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required
AND providersId = '{{ providersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.

```sql
SELECT
name,
attributeCondition,
attributeMapping,
aws,
description,
disabled,
displayName,
expireTime,
oidc,
saml,
state,
x509
FROM google.iam.workload_identity_pool_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.

```sql
INSERT INTO google.iam.workload_identity_pool_providers (
data__name,
data__displayName,
data__description,
data__disabled,
data__attributeMapping,
data__attributeCondition,
data__aws,
data__oidc,
data__saml,
data__x509,
projectsId,
locationsId,
workloadIdentityPoolsId,
workloadIdentityPoolProviderId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
{{ disabled }},
'{{ attributeMapping }}',
'{{ attributeCondition }}',
'{{ aws }}',
'{{ oidc }}',
'{{ saml }}',
'{{ x509 }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workloadIdentityPoolsId }}',
'{{ workloadIdentityPoolProviderId }}'
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
- name: workload_identity_pool_providers
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workload_identity_pool_providers resource.
    - name: locationsId
      value: string
      description: Required parameter for the workload_identity_pool_providers resource.
    - name: workloadIdentityPoolsId
      value: string
      description: Required parameter for the workload_identity_pool_providers resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the provider.
        
    - name: displayName
      value: string
      description: >
        Optional. A display name for the provider. Cannot exceed 32 characters.
        
    - name: description
      value: string
      description: >
        Optional. A description for the provider. Cannot exceed 256 characters.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.
        
    - name: attributeMapping
      value: object
      description: >
        Optional. Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where `{custom_attribute}` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}` * `google.groups`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}` * `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` { "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('{account_arn}assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/{role_name}/')" " : assertion.arn", } ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"} ```
        
    - name: attributeCondition
      value: string
      description: >
        Optional. [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ```
        
    - name: aws
      value: object
      description: >
        An Amazon Web Services identity provider.
        
    - name: oidc
      value: object
      description: >
        An OpenId Connect 1.0 identity provider.
        
    - name: saml
      value: object
      description: >
        An SAML 2.0 identity provider.
        
    - name: x509
      value: object
      description: >
        An X.509-type identity provider.
        
    - name: workloadIdentityPoolProviderId
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

Updates an existing WorkloadIdentityPoolProvider.

```sql
UPDATE google.iam.workload_identity_pool_providers
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__attributeMapping = '{{ attributeMapping }}',
data__attributeCondition = '{{ attributeCondition }}',
data__aws = '{{ aws }}',
data__oidc = '{{ oidc }}',
data__saml = '{{ saml }}',
data__x509 = '{{ x509 }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND providersId = '{{ providersId }}' --required
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

Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.

```sql
DELETE FROM google.iam.workload_identity_pool_providers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadIdentityPoolsId = '{{ workloadIdentityPoolsId }}' --required
AND providersId = '{{ providersId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.workload_identity_pool_providers.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadIdentityPoolsId='{{ workloadIdentityPoolsId }}' --required, 
@providersId='{{ providersId }}' --required;
```
</TabItem>
</Tabs>
