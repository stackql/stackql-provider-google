--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>insights</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommender.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_insight_types_insights_get"
    values={[
        { label: 'projects_locations_insight_types_insights_get', value: 'projects_locations_insight_types_insights_get' },
        { label: 'billing_accounts_locations_insight_types_insights_get', value: 'billing_accounts_locations_insight_types_insights_get' },
        { label: 'folders_locations_insight_types_insights_get', value: 'folders_locations_insight_types_insights_get' },
        { label: 'organizations_locations_insight_types_insights_get', value: 'organizations_locations_insight_types_insights_get' },
        { label: 'projects_locations_insight_types_insights_list', value: 'projects_locations_insight_types_insights_list' },
        { label: 'billing_accounts_locations_insight_types_insights_list', value: 'billing_accounts_locations_insight_types_insights_list' },
        { label: 'folders_locations_insight_types_insights_list', value: 'folders_locations_insight_types_insights_list' },
        { label: 'organizations_locations_insight_types_insights_list', value: 'organizations_locations_insight_types_insights_list' }
    ]}
>
<TabItem value="projects_locations_insight_types_insights_get">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_insights_get">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_insight_types_insights_get">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_insight_types_insights_get">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_insight_types_insights_list">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_insights_list">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_insight_types_insights_list">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_insight_types_insights_list">

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
    <td>Identifier. Name of the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedRecommendations" /></td>
    <td><code>array</code></td>
    <td>Recommendations derived from this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category being targeted by the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Insight. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="insightSubtype" /></td>
    <td><code>string</code></td>
    <td>Insight subtype. Insight content schema will be stable for a given subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of the latest data used to generate the insight.</td>
</tr>
<tr>
    <td><CopyableCode code="observationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period).</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Insight's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information state and metadata. (id: GoogleCloudRecommenderV1InsightStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this insight is targeting.</td>
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
    <td><a href="#projects_locations_insight_types_insights_get"><CopyableCode code="projects_locations_insight_types_insights_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_insight_types_insights_get"><CopyableCode code="billing_accounts_locations_insight_types_insights_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#folders_locations_insight_types_insights_get"><CopyableCode code="folders_locations_insight_types_insights_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_insight_types_insights_get"><CopyableCode code="organizations_locations_insight_types_insights_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_insight_types_insights_list"><CopyableCode code="projects_locations_insight_types_insights_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_insight_types_insights_list"><CopyableCode code="billing_accounts_locations_insight_types_insights_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#folders_locations_insight_types_insights_list"><CopyableCode code="folders_locations_insight_types_insights_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_insight_types_insights_list"><CopyableCode code="organizations_locations_insight_types_insights_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_insight_types_insights_mark_accepted"><CopyableCode code="projects_locations_insight_types_insights_mark_accepted" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_insight_types_insights_mark_accepted"><CopyableCode code="billing_accounts_locations_insight_types_insights_mark_accepted" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.</td>
</tr>
<tr>
    <td><a href="#folders_locations_insight_types_insights_mark_accepted"><CopyableCode code="folders_locations_insight_types_insights_mark_accepted" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_insight_types_insights_mark_accepted"><CopyableCode code="organizations_locations_insight_types_insights_mark_accepted" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightTypesId"><code>insightTypesId</code></a>, <a href="#parameter-insightsId"><code>insightsId</code></a></td>
    <td></td>
    <td>Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insightTypesId">
    <td><CopyableCode code="insightTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insightsId">
    <td><CopyableCode code="insightsId" /></td>
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
    defaultValue="projects_locations_insight_types_insights_get"
    values={[
        { label: 'projects_locations_insight_types_insights_get', value: 'projects_locations_insight_types_insights_get' },
        { label: 'billing_accounts_locations_insight_types_insights_get', value: 'billing_accounts_locations_insight_types_insights_get' },
        { label: 'folders_locations_insight_types_insights_get', value: 'folders_locations_insight_types_insights_get' },
        { label: 'organizations_locations_insight_types_insights_get', value: 'organizations_locations_insight_types_insights_get' },
        { label: 'projects_locations_insight_types_insights_list', value: 'projects_locations_insight_types_insights_list' },
        { label: 'billing_accounts_locations_insight_types_insights_list', value: 'billing_accounts_locations_insight_types_insights_list' },
        { label: 'folders_locations_insight_types_insights_list', value: 'folders_locations_insight_types_insights_list' },
        { label: 'organizations_locations_insight_types_insights_list', value: 'organizations_locations_insight_types_insights_list' }
    ]}
>
<TabItem value="projects_locations_insight_types_insights_get">

Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND insightsId = '{{ insightsId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_insights_get">

Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND insightsId = '{{ insightsId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_insight_types_insights_get">

Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND insightsId = '{{ insightsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_insight_types_insights_get">

Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND insightsId = '{{ insightsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_insight_types_insights_list">

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_insights_list">

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="folders_locations_insight_types_insights_list">

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_insight_types_insights_list">

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

```sql
SELECT
name,
associatedRecommendations,
category,
content,
description,
etag,
insightSubtype,
lastRefreshTime,
observationPeriod,
severity,
stateInfo,
targetResources
FROM google.recommender.insights
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightTypesId = '{{ insightTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_insight_types_insights_mark_accepted"
    values={[
        { label: 'projects_locations_insight_types_insights_mark_accepted', value: 'projects_locations_insight_types_insights_mark_accepted' },
        { label: 'billing_accounts_locations_insight_types_insights_mark_accepted', value: 'billing_accounts_locations_insight_types_insights_mark_accepted' },
        { label: 'folders_locations_insight_types_insights_mark_accepted', value: 'folders_locations_insight_types_insights_mark_accepted' },
        { label: 'organizations_locations_insight_types_insights_mark_accepted', value: 'organizations_locations_insight_types_insights_mark_accepted' }
    ]}
>
<TabItem value="projects_locations_insight_types_insights_mark_accepted">

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

```sql
EXEC google.recommender.insights.projects_locations_insight_types_insights_mark_accepted 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@insightTypesId='{{ insightTypesId }}' --required, 
@insightsId='{{ insightsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="billing_accounts_locations_insight_types_insights_mark_accepted">

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

```sql
EXEC google.recommender.insights.billing_accounts_locations_insight_types_insights_mark_accepted 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@insightTypesId='{{ insightTypesId }}' --required, 
@insightsId='{{ insightsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="folders_locations_insight_types_insights_mark_accepted">

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

```sql
EXEC google.recommender.insights.folders_locations_insight_types_insights_mark_accepted 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@insightTypesId='{{ insightTypesId }}' --required, 
@insightsId='{{ insightsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_insight_types_insights_mark_accepted">

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

```sql
EXEC google.recommender.insights.organizations_locations_insight_types_insights_mark_accepted 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@insightTypesId='{{ insightTypesId }}' --required, 
@insightsId='{{ insightsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
</Tabs>
