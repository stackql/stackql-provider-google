--- 
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - apigee
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

Creates, updates, deletes, gets or lists an <code>aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_keystores_aliases_get"
    values={[
        { label: 'organizations_environments_keystores_aliases_get', value: 'organizations_environments_keystores_aliases_get' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_get">

Reference to a certificate or key/certificate pair.

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Resource ID for this alias. Values must match the regular expression `[^/]&#123;1,255&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="certsInfo" /></td>
    <td><code>object</code></td>
    <td>Chain of certificates under this alias. (id: GoogleCloudApigeeV1Certificate)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of alias.</td>
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
    <td><a href="#organizations_environments_keystores_aliases_get"><CopyableCode code="organizations_environments_keystores_aliases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a>, <a href="#parameter-aliasesId"><code>aliasesId</code></a></td>
    <td></td>
    <td>Gets an alias.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_aliases_create"><CopyableCode code="organizations_environments_keystores_aliases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-ignoreExpiryValidation"><code>ignoreExpiryValidation</code></a>, <a href="#parameter-_password"><code>_password</code></a>, <a href="#parameter-ignoreNewlineValidation"><code>ignoreNewlineValidation</code></a></td>
    <td>Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_aliases_update"><CopyableCode code="organizations_environments_keystores_aliases_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a>, <a href="#parameter-aliasesId"><code>aliasesId</code></a></td>
    <td><a href="#parameter-ignoreExpiryValidation"><code>ignoreExpiryValidation</code></a>, <a href="#parameter-ignoreNewlineValidation"><code>ignoreNewlineValidation</code></a></td>
    <td>Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_aliases_delete"><CopyableCode code="organizations_environments_keystores_aliases_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a>, <a href="#parameter-aliasesId"><code>aliasesId</code></a></td>
    <td></td>
    <td>Deletes an alias.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keystores_aliases_csr"><CopyableCode code="organizations_environments_keystores_aliases_csr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keystoresId"><code>keystoresId</code></a>, <a href="#parameter-aliasesId"><code>aliasesId</code></a></td>
    <td></td>
    <td>Generates a PKCS #10 Certificate Signing Request for the private key in an alias.</td>
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
<tr id="parameter-aliasesId">
    <td><CopyableCode code="aliasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keystoresId">
    <td><CopyableCode code="keystoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-_password">
    <td><CopyableCode code="_password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreExpiryValidation">
    <td><CopyableCode code="ignoreExpiryValidation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreNewlineValidation">
    <td><CopyableCode code="ignoreNewlineValidation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_keystores_aliases_get"
    values={[
        { label: 'organizations_environments_keystores_aliases_get', value: 'organizations_environments_keystores_aliases_get' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_get">

Gets an alias.

```sql
SELECT
alias,
certsInfo,
type
FROM google.apigee.aliases
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keystoresId = '{{ keystoresId }}' -- required
AND aliasesId = '{{ aliasesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_keystores_aliases_create"
    values={[
        { label: 'organizations_environments_keystores_aliases_create', value: 'organizations_environments_keystores_aliases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_create">

Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.

```sql
INSERT INTO google.apigee.aliases (
data__contentType,
data__data,
data__extensions,
organizationsId,
environmentsId,
keystoresId,
alias,
format,
ignoreExpiryValidation,
_password,
ignoreNewlineValidation
)
SELECT 
'{{ contentType }}',
'{{ data }}',
'{{ extensions }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ keystoresId }}',
'{{ alias }}',
'{{ format }}',
'{{ ignoreExpiryValidation }}',
'{{ _password }}',
'{{ ignoreNewlineValidation }}'
RETURNING
alias,
certsInfo,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: aliases
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the aliases resource.
    - name: environmentsId
      value: string
      description: Required parameter for the aliases resource.
    - name: keystoresId
      value: string
      description: Required parameter for the aliases resource.
    - name: contentType
      value: string
      description: >
        The HTTP Content-Type header value specifying the content type of the body.
        
    - name: data
      value: string
      description: >
        The HTTP request/response body as raw binary.
        
    - name: extensions
      value: array
      description: >
        Application specific response metadata. Must be set in the first response for streaming APIs.
        
    - name: alias
      value: string
    - name: format
      value: string
    - name: ignoreExpiryValidation
      value: boolean
    - name: _password
      value: string
    - name: ignoreNewlineValidation
      value: boolean
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_environments_keystores_aliases_update"
    values={[
        { label: 'organizations_environments_keystores_aliases_update', value: 'organizations_environments_keystores_aliases_update' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_update">

Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.

```sql
REPLACE google.apigee.aliases
SET 
data__contentType = '{{ contentType }}',
data__data = '{{ data }}',
data__extensions = '{{ extensions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keystoresId = '{{ keystoresId }}' --required
AND aliasesId = '{{ aliasesId }}' --required
AND ignoreExpiryValidation = {{ ignoreExpiryValidation}}
AND ignoreNewlineValidation = {{ ignoreNewlineValidation}}
RETURNING
alias,
certsInfo,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_keystores_aliases_delete"
    values={[
        { label: 'organizations_environments_keystores_aliases_delete', value: 'organizations_environments_keystores_aliases_delete' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_delete">

Deletes an alias.

```sql
DELETE FROM google.apigee.aliases
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keystoresId = '{{ keystoresId }}' --required
AND aliasesId = '{{ aliasesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_environments_keystores_aliases_csr"
    values={[
        { label: 'organizations_environments_keystores_aliases_csr', value: 'organizations_environments_keystores_aliases_csr' }
    ]}
>
<TabItem value="organizations_environments_keystores_aliases_csr">

Generates a PKCS #10 Certificate Signing Request for the private key in an alias.

```sql
EXEC google.apigee.aliases.organizations_environments_keystores_aliases_csr 
@organizationsId='{{ organizationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@keystoresId='{{ keystoresId }}' --required, 
@aliasesId='{{ aliasesId }}' --required;
```
</TabItem>
</Tabs>
