--- 
title: insight_types_config
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_types_config
  - recommender
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

Creates, updates, deletes, gets or lists an <code>insight_types_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>insight_types_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommender.insight_types_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_insight_types_get_config"
    values={[
        { label: 'projects_locations_insight_types_get_config', value: 'projects_locations_insight_types_get_config' },
        { label: 'billing_accounts_locations_insight_types_get_config', value: 'billing_accounts_locations_insight_types_get_config' },
        { label: 'organizations_locations_insight_types_get_config', value: 'organizations_locations_insight_types_get_config' }
    ]}
>
<TabItem value="projects_locations_insight_types_get_config">

Configuration for an InsightType.

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
    <td>Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-settable field to provide a human-readable name to be used in user interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.</td>
</tr>
<tr>
    <td><CopyableCode code="insightTypeGenerationConfig" /></td>
    <td><code>object</code></td>
    <td>InsightTypeGenerationConfig which configures the generation of insights for this insight type. (id: GoogleCloudRecommenderV1InsightTypeGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time when the config was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_get_config">

Configuration for an InsightType.

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
    <td>Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-settable field to provide a human-readable name to be used in user interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.</td>
</tr>
<tr>
    <td><CopyableCode code="insightTypeGenerationConfig" /></td>
    <td><code>object</code></td>
    <td>InsightTypeGenerationConfig which configures the generation of insights for this insight type. (id: GoogleCloudRecommenderV1InsightTypeGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time when the config was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_insight_types_get_config">

Configuration for an InsightType.

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
    <td>Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-settable field to provide a human-readable name to be used in user interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.</td>
</tr>
<tr>
    <td><CopyableCode code="insightTypeGenerationConfig" /></td>
    <td><code>object</code></td>
    <td>InsightTypeGenerationConfig which configures the generation of insights for this insight type. (id: GoogleCloudRecommenderV1InsightTypeGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time when the config was updated.</td>
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
    <td><a href="#projects_locations_insight_types_get_config"><CopyableCode code="projects_locations_insight_types_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td></td>
    <td>Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_insight_types_get_config"><CopyableCode code="billing_accounts_locations_insight_types_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td></td>
    <td>Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_insight_types_get_config"><CopyableCode code="organizations_locations_insight_types_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td></td>
    <td>Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_insight_types_update_config"><CopyableCode code="projects_locations_insight_types_update_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an InsightTypeConfig change. This will create a new revision of the config.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_insight_types_update_config"><CopyableCode code="billing_accounts_locations_insight_types_update_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an InsightTypeConfig change. This will create a new revision of the config.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_insight_types_update_config"><CopyableCode code="organizations_locations_insight_types_update_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an InsightTypeConfig change. This will create a new revision of the config.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insightTypesId">
    <td><CopyableCode code="insightTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_insight_types_get_config"
    values={[
        { label: 'projects_locations_insight_types_get_config', value: 'projects_locations_insight_types_get_config' },
        { label: 'billing_accounts_locations_insight_types_get_config', value: 'billing_accounts_locations_insight_types_get_config' },
        { label: 'organizations_locations_insight_types_get_config', value: 'organizations_locations_insight_types_get_config' }
    ]}
>
<TabItem value="projects_locations_insight_types_get_config">

Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.

```sql
SELECT
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime
FROM google.recommender.insight_types_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_get_config">

Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.

```sql
SELECT
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime
FROM google.recommender.insight_types_config
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_insight_types_get_config">

Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.

```sql
SELECT
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime
FROM google.recommender.insight_types_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_insight_types_update_config"
    values={[
        { label: 'projects_locations_insight_types_update_config', value: 'projects_locations_insight_types_update_config' },
        { label: 'billing_accounts_locations_insight_types_update_config', value: 'billing_accounts_locations_insight_types_update_config' },
        { label: 'organizations_locations_insight_types_update_config', value: 'organizations_locations_insight_types_update_config' }
    ]}
>
<TabItem value="projects_locations_insight_types_update_config">

Updates an InsightTypeConfig change. This will create a new revision of the config.

```sql
UPDATE google.recommender.insight_types_config
SET 
data__name = '{{ name }}',
data__insightTypeGenerationConfig = '{{ insightTypeGenerationConfig }}',
data__etag = '{{ etag }}',
data__updateTime = '{{ updateTime }}',
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND insightTypesId = '{{ insightTypesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime;
```
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_update_config">

Updates an InsightTypeConfig change. This will create a new revision of the config.

```sql
UPDATE google.recommender.insight_types_config
SET 
data__name = '{{ name }}',
data__insightTypeGenerationConfig = '{{ insightTypeGenerationConfig }}',
data__etag = '{{ etag }}',
data__updateTime = '{{ updateTime }}',
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND insightTypesId = '{{ insightTypesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_insight_types_update_config">

Updates an InsightTypeConfig change. This will create a new revision of the config.

```sql
UPDATE google.recommender.insight_types_config
SET 
data__name = '{{ name }}',
data__insightTypeGenerationConfig = '{{ insightTypeGenerationConfig }}',
data__etag = '{{ etag }}',
data__updateTime = '{{ updateTime }}',
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND insightTypesId = '{{ insightTypesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
displayName,
etag,
insightTypeGenerationConfig,
revisionId,
updateTime;
```
</TabItem>
</Tabs>
