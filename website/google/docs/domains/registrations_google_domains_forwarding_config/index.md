--- 
title: registrations_google_domains_forwarding_config
hide_title: false
hide_table_of_contents: false
keywords:
  - registrations_google_domains_forwarding_config
  - domains
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

Creates, updates, deletes, gets or lists a <code>registrations_google_domains_forwarding_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registrations_google_domains_forwarding_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.domains.registrations_google_domains_forwarding_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="retrieve_google_domains_forwarding_config"
    values={[
        { label: 'retrieve_google_domains_forwarding_config', value: 'retrieve_google_domains_forwarding_config' }
    ]}
>
<TabItem value="retrieve_google_domains_forwarding_config">

Response for the `RetrieveGoogleDomainsForwardingConfig` method.

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
    <td><CopyableCode code="domainForwardings" /></td>
    <td><code>array</code></td>
    <td>The list of domain forwarding configurations. A forwarding configuration might not work correctly if the required DNS records are not present in the domain's authoritative DNS zone.</td>
</tr>
<tr>
    <td><CopyableCode code="emailForwardings" /></td>
    <td><code>array</code></td>
    <td>The list of email forwarding configurations. A forwarding configuration might not work correctly if the required DNS records are not present in the domain's authoritative DNS zone.</td>
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
    <td><a href="#retrieve_google_domains_forwarding_config"><CopyableCode code="retrieve_google_domains_forwarding_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Lists the deprecated domain and email forwarding configurations you set up in the deprecated Google Domains UI. The configuration is present only for domains with the `google_domains_redirects_data_available` set to `true` in the `Registration`'s `dns_settings`. A forwarding configuration might not work correctly if required DNS records are not present in the domain's authoritative DNS Zone.</td>
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
<tr id="parameter-registrationsId">
    <td><CopyableCode code="registrationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="retrieve_google_domains_forwarding_config"
    values={[
        { label: 'retrieve_google_domains_forwarding_config', value: 'retrieve_google_domains_forwarding_config' }
    ]}
>
<TabItem value="retrieve_google_domains_forwarding_config">

Lists the deprecated domain and email forwarding configurations you set up in the deprecated Google Domains UI. The configuration is present only for domains with the `google_domains_redirects_data_available` set to `true` in the `Registration`'s `dns_settings`. A forwarding configuration might not work correctly if required DNS records are not present in the domain's authoritative DNS Zone.

```sql
SELECT
domainForwardings,
emailForwardings
FROM google.domains.registrations_google_domains_forwarding_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND registrationsId = '{{ registrationsId }}' -- required;
```
</TabItem>
</Tabs>
