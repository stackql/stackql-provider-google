--- 
title: relyingparty_project_config
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty_project_config
  - identitytoolkit
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

Creates, updates, deletes, gets or lists a <code>relyingparty_project_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>relyingparty_project_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty_project_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_config"
    values={[
        { label: 'get_project_config', value: 'get_project_config' }
    ]}
>
<TabItem value="get_project_config">

Response of getting the project configuration.

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
    <td><CopyableCode code="allowPasswordUser" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow password user sign in or sign up.</td>
</tr>
<tr>
    <td><CopyableCode code="apiKey" /></td>
    <td><code>string</code></td>
    <td>Browser API key, needed when making http request to Apiary.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedDomains" /></td>
    <td><code>array</code></td>
    <td>Authorized domains.</td>
</tr>
<tr>
    <td><CopyableCode code="changeEmailTemplate" /></td>
    <td><code>object</code></td>
    <td>Change email template. (id: EmailTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="dynamicLinksDomain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableAnonymousUser" /></td>
    <td><code>boolean</code></td>
    <td>Whether anonymous user is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="idpConfig" /></td>
    <td><code>array</code></td>
    <td>OAuth2 provider configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyResetPasswordTemplate" /></td>
    <td><code>object</code></td>
    <td>Legacy reset password email template. (id: EmailTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Project ID of the relying party.</td>
</tr>
<tr>
    <td><CopyableCode code="resetPasswordTemplate" /></td>
    <td><code>object</code></td>
    <td>Reset password email template. (id: EmailTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="useEmailSending" /></td>
    <td><code>boolean</code></td>
    <td>Whether to use email sending provided by Firebear.</td>
</tr>
<tr>
    <td><CopyableCode code="verifyEmailTemplate" /></td>
    <td><code>object</code></td>
    <td>Verify email template. (id: EmailTemplate)</td>
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
    <td><a href="#get_project_config"><CopyableCode code="get_project_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-delegatedProjectNumber"><code>delegatedProjectNumber</code></a>, <a href="#parameter-projectNumber"><code>projectNumber</code></a></td>
    <td>Get project configuration.</td>
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
<tr id="parameter-delegatedProjectNumber">
    <td><CopyableCode code="delegatedProjectNumber" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectNumber">
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_project_config"
    values={[
        { label: 'get_project_config', value: 'get_project_config' }
    ]}
>
<TabItem value="get_project_config">

Get project configuration.

```sql
SELECT
allowPasswordUser,
apiKey,
authorizedDomains,
changeEmailTemplate,
dynamicLinksDomain,
enableAnonymousUser,
idpConfig,
legacyResetPasswordTemplate,
projectId,
resetPasswordTemplate,
useEmailSending,
verifyEmailTemplate
FROM google.identitytoolkit.relyingparty_project_config
WHERE delegatedProjectNumber = '{{ delegatedProjectNumber }}'
AND projectNumber = '{{ projectNumber }}';
```
</TabItem>
</Tabs>
