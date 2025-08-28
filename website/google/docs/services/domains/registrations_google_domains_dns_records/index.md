--- 
title: registrations_google_domains_dns_records
hide_title: false
hide_table_of_contents: false
keywords:
  - registrations_google_domains_dns_records
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

Creates, updates, deletes, gets or lists a <code>registrations_google_domains_dns_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registrations_google_domains_dns_records</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.domains.registrations_google_domains_dns_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="retrieve_google_domains_dns_records"
    values={[
        { label: 'retrieve_google_domains_dns_records', value: 'retrieve_google_domains_dns_records' }
    ]}
>
<TabItem value="retrieve_google_domains_dns_records">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="rrset" /></td>
    <td><code>array</code></td>
    <td>The resource record set resources (DNS Zone records).</td>
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
    <td><a href="#retrieve_google_domains_dns_records"><CopyableCode code="retrieve_google_domains_dns_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the DNS records from the Google Domains DNS zone for domains that use the deprecated `google_domains_dns` in the `Registration`'s `dns_settings`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="retrieve_google_domains_dns_records"
    values={[
        { label: 'retrieve_google_domains_dns_records', value: 'retrieve_google_domains_dns_records' }
    ]}
>
<TabItem value="retrieve_google_domains_dns_records">

Lists the DNS records from the Google Domains DNS zone for domains that use the deprecated `google_domains_dns` in the `Registration`'s `dns_settings`.

```sql
SELECT
nextPageToken,
rrset
FROM google.domains.registrations_google_domains_dns_records
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND registrationsId = '{{ registrationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
