--- 
title: consents_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - consents_revisions
  - healthcare
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

Creates, updates, deletes, gets or lists a <code>consents_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>consents_revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.consents_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_revisions"
    values={[
        { label: 'list_revisions', value: 'list_revisions' }
    ]}
>
<TabItem value="list_revisions">

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
    <td>Identifier. Resource name of the Consent, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consents/&#123;consent_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="consentArtifact" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consentArtifacts/&#123;consent_artifact_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp in UTC of when this Consent is considered expired.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td>Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@&#123;revision_id&#125;` to the Consent's resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates the current state of this Consent.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The time to live for this Consent from when it is created.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Required. User's UUID provided by the client.</td>
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
    <td><a href="#list_revisions"><CopyableCode code="list_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-consentsId"><code>consentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the revisions of the specified Consent in reverse chronological order.</td>
</tr>
<tr>
    <td><a href="#delete_revision"><CopyableCode code="delete_revision" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a>, <a href="#parameter-consentsId"><code>consentsId</code></a></td>
    <td></td>
    <td>Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.</td>
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
<tr id="parameter-consentStoresId">
    <td><CopyableCode code="consentStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-consentsId">
    <td><CopyableCode code="consentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="list_revisions"
    values={[
        { label: 'list_revisions', value: 'list_revisions' }
    ]}
>
<TabItem value="list_revisions">

Lists the revisions of the specified Consent in reverse chronological order.

```sql
SELECT
name,
consentArtifact,
expireTime,
metadata,
policies,
revisionCreateTime,
revisionId,
state,
ttl,
userId
FROM google.healthcare.consents_revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required
AND consentsId = '{{ consentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_revision"
    values={[
        { label: 'delete_revision', value: 'delete_revision' }
    ]}
>
<TabItem value="delete_revision">

Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.

```sql
DELETE FROM google.healthcare.consents_revisions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required
AND consentsId = '{{ consentsId }}' --required;
```
</TabItem>
</Tabs>
