--- 
title: domains_ldapssettings
hide_title: false
hide_table_of_contents: false
keywords:
  - domains_ldapssettings
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

Creates, updates, deletes, gets or lists a <code>domains_ldapssettings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>domains_ldapssettings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedidentities.domains_ldapssettings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ldapssettings"
    values={[
        { label: 'get_ldapssettings', value: 'get_ldapssettings' }
    ]}
>
<TabItem value="get_ldapssettings">

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
    <td>The resource name of the LDAPS settings. Uses the form: `projects/&#123;project&#125;/locations/&#123;location&#125;/domains/&#123;domain&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>object</code></td>
    <td>Output only. The certificate used to configure LDAPS. Certificates can be chained with a maximum length of 15. (id: Certificate)</td>
</tr>
<tr>
    <td><CopyableCode code="certificatePassword" /></td>
    <td><code>string</code></td>
    <td>Input only. The password used to encrypt the uploaded PFX certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificatePfx" /></td>
    <td><code>string (byte)</code></td>
    <td>Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this LDAPS settings.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time.</td>
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
    <td><a href="#get_ldapssettings"><CopyableCode code="get_ldapssettings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Gets the domain ldaps settings.</td>
</tr>
<tr>
    <td><a href="#update_ldapssettings"><CopyableCode code="update_ldapssettings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Patches a single ldaps settings.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ldapssettings"
    values={[
        { label: 'get_ldapssettings', value: 'get_ldapssettings' }
    ]}
>
<TabItem value="get_ldapssettings">

Gets the domain ldaps settings.

```sql
SELECT
name,
certificate,
certificatePassword,
certificatePfx,
state,
updateTime
FROM google.managedidentities.domains_ldapssettings
WHERE projectsId = '{{ projectsId }}' -- required
AND domainsId = '{{ domainsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ldapssettings"
    values={[
        { label: 'update_ldapssettings', value: 'update_ldapssettings' }
    ]}
>
<TabItem value="update_ldapssettings">

Patches a single ldaps settings.

```sql
UPDATE google.managedidentities.domains_ldapssettings
SET 
data__name = '{{ name }}',
data__certificatePfx = '{{ certificatePfx }}',
data__certificatePassword = '{{ certificatePassword }}'
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
