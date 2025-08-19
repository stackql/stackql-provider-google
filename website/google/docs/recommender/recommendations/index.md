--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>recommendations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommender.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_recommenders_recommendations_get"
    values={[
        { label: 'projects_locations_recommenders_recommendations_get', value: 'projects_locations_recommenders_recommendations_get' },
        { label: 'billing_accounts_locations_recommenders_recommendations_get', value: 'billing_accounts_locations_recommenders_recommendations_get' },
        { label: 'folders_locations_recommenders_recommendations_get', value: 'folders_locations_recommenders_recommendations_get' },
        { label: 'organizations_locations_recommenders_recommendations_get', value: 'organizations_locations_recommenders_recommendations_get' },
        { label: 'projects_locations_recommenders_recommendations_list', value: 'projects_locations_recommenders_recommendations_list' },
        { label: 'billing_accounts_locations_recommenders_recommendations_list', value: 'billing_accounts_locations_recommenders_recommendations_list' },
        { label: 'folders_locations_recommenders_recommendations_list', value: 'folders_locations_recommenders_recommendations_list' },
        { label: 'organizations_locations_recommenders_recommendations_list', value: 'organizations_locations_recommenders_recommendations_list' }
    ]}
>
<TabItem value="projects_locations_recommenders_recommendations_get">

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

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
    <td>Identifier. Name of recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalImpact" /></td>
    <td><code>array</code></td>
    <td>Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedInsights" /></td>
    <td><code>array</code></td>
    <td>Insights that led to this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the recommendation describing recommended changes to resources. (id: GoogleCloudRecommenderV1RecommendationContent)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Recommendation. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time this recommendation was refreshed by the system that created it in the first place.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryImpact" /></td>
    <td><code>object</code></td>
    <td>The primary impact that this recommendation can have while trying to optimize for one category. (id: GoogleCloudRecommenderV1Impact)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Recommendation's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="recommenderSubtype" /></td>
    <td><code>string</code></td>
    <td>Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information for state. Contains state and metadata. (id: GoogleCloudRecommenderV1RecommendationStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this recommendation is targeting.</td>
</tr>
<tr>
    <td><CopyableCode code="xorGroupId" /></td>
    <td><code>string</code></td>
    <td>Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_get">

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

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
    <td>Identifier. Name of recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalImpact" /></td>
    <td><code>array</code></td>
    <td>Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedInsights" /></td>
    <td><code>array</code></td>
    <td>Insights that led to this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the recommendation describing recommended changes to resources. (id: GoogleCloudRecommenderV1RecommendationContent)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Recommendation. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time this recommendation was refreshed by the system that created it in the first place.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryImpact" /></td>
    <td><code>object</code></td>
    <td>The primary impact that this recommendation can have while trying to optimize for one category. (id: GoogleCloudRecommenderV1Impact)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Recommendation's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="recommenderSubtype" /></td>
    <td><code>string</code></td>
    <td>Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information for state. Contains state and metadata. (id: GoogleCloudRecommenderV1RecommendationStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this recommendation is targeting.</td>
</tr>
<tr>
    <td><CopyableCode code="xorGroupId" /></td>
    <td><code>string</code></td>
    <td>Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_get">

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

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
    <td>Identifier. Name of recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalImpact" /></td>
    <td><code>array</code></td>
    <td>Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedInsights" /></td>
    <td><code>array</code></td>
    <td>Insights that led to this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the recommendation describing recommended changes to resources. (id: GoogleCloudRecommenderV1RecommendationContent)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Recommendation. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time this recommendation was refreshed by the system that created it in the first place.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryImpact" /></td>
    <td><code>object</code></td>
    <td>The primary impact that this recommendation can have while trying to optimize for one category. (id: GoogleCloudRecommenderV1Impact)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Recommendation's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="recommenderSubtype" /></td>
    <td><code>string</code></td>
    <td>Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information for state. Contains state and metadata. (id: GoogleCloudRecommenderV1RecommendationStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this recommendation is targeting.</td>
</tr>
<tr>
    <td><CopyableCode code="xorGroupId" /></td>
    <td><code>string</code></td>
    <td>Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_get">

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

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
    <td>Identifier. Name of recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalImpact" /></td>
    <td><code>array</code></td>
    <td>Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedInsights" /></td>
    <td><code>array</code></td>
    <td>Insights that led to this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the recommendation describing recommended changes to resources. (id: GoogleCloudRecommenderV1RecommendationContent)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form human readable summary in English. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of the Recommendation. Provides optimistic locking when updating states.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time this recommendation was refreshed by the system that created it in the first place.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryImpact" /></td>
    <td><code>object</code></td>
    <td>The primary impact that this recommendation can have while trying to optimize for one category. (id: GoogleCloudRecommenderV1Impact)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Recommendation's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="recommenderSubtype" /></td>
    <td><code>string</code></td>
    <td>Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Information for state. Contains state and metadata. (id: GoogleCloudRecommenderV1RecommendationStateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>Fully qualified resource names that this recommendation is targeting.</td>
</tr>
<tr>
    <td><CopyableCode code="xorGroupId" /></td>
    <td><code>string</code></td>
    <td>Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_recommenders_recommendations_list">

Response to the `ListRecommendations` method.

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
    <td>A token that can be used to request the next page of results. This field is empty if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The set of recommendations for the `parent` resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_list">

Response to the `ListRecommendations` method.

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
    <td>A token that can be used to request the next page of results. This field is empty if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The set of recommendations for the `parent` resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_list">

Response to the `ListRecommendations` method.

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
    <td>A token that can be used to request the next page of results. This field is empty if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The set of recommendations for the `parent` resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_list">

Response to the `ListRecommendations` method.

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
    <td>A token that can be used to request the next page of results. This field is empty if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The set of recommendations for the `parent` resource.</td>
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
    <td><a href="#projects_locations_recommenders_recommendations_get"><CopyableCode code="projects_locations_recommenders_recommendations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_get"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_get"><CopyableCode code="folders_locations_recommenders_recommendations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_get"><CopyableCode code="organizations_locations_recommenders_recommendations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#projects_locations_recommenders_recommendations_list"><CopyableCode code="projects_locations_recommenders_recommendations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_list"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_list"><CopyableCode code="folders_locations_recommenders_recommendations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_list"><CopyableCode code="organizations_locations_recommenders_recommendations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#projects_locations_recommenders_recommendations_mark_dismissed"><CopyableCode code="projects_locations_recommenders_recommendations_mark_dismissed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#projects_locations_recommenders_recommendations_mark_claimed"><CopyableCode code="projects_locations_recommenders_recommendations_mark_claimed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#projects_locations_recommenders_recommendations_mark_succeeded"><CopyableCode code="projects_locations_recommenders_recommendations_mark_succeeded" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#projects_locations_recommenders_recommendations_mark_failed"><CopyableCode code="projects_locations_recommenders_recommendations_mark_failed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_mark_dismissed"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_mark_dismissed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_mark_claimed"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_mark_claimed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_mark_succeeded"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_mark_succeeded" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recommenders_recommendations_mark_failed"><CopyableCode code="billing_accounts_locations_recommenders_recommendations_mark_failed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_mark_dismissed"><CopyableCode code="folders_locations_recommenders_recommendations_mark_dismissed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_mark_claimed"><CopyableCode code="folders_locations_recommenders_recommendations_mark_claimed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_mark_succeeded"><CopyableCode code="folders_locations_recommenders_recommendations_mark_succeeded" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recommenders_recommendations_mark_failed"><CopyableCode code="folders_locations_recommenders_recommendations_mark_failed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_mark_dismissed"><CopyableCode code="organizations_locations_recommenders_recommendations_mark_dismissed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_mark_claimed"><CopyableCode code="organizations_locations_recommenders_recommendations_mark_claimed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_mark_succeeded"><CopyableCode code="organizations_locations_recommenders_recommendations_mark_succeeded" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recommenders_recommendations_mark_failed"><CopyableCode code="organizations_locations_recommenders_recommendations_mark_failed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recommendersId"><code>recommendersId</code></a>, <a href="#parameter-recommendationsId"><code>recommendationsId</code></a></td>
    <td></td>
    <td>Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.</td>
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
<tr id="parameter-recommendationsId">
    <td><CopyableCode code="recommendationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-recommendersId">
    <td><CopyableCode code="recommendersId" /></td>
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
    defaultValue="projects_locations_recommenders_recommendations_get"
    values={[
        { label: 'projects_locations_recommenders_recommendations_get', value: 'projects_locations_recommenders_recommendations_get' },
        { label: 'billing_accounts_locations_recommenders_recommendations_get', value: 'billing_accounts_locations_recommenders_recommendations_get' },
        { label: 'folders_locations_recommenders_recommendations_get', value: 'folders_locations_recommenders_recommendations_get' },
        { label: 'organizations_locations_recommenders_recommendations_get', value: 'organizations_locations_recommenders_recommendations_get' },
        { label: 'projects_locations_recommenders_recommendations_list', value: 'projects_locations_recommenders_recommendations_list' },
        { label: 'billing_accounts_locations_recommenders_recommendations_list', value: 'billing_accounts_locations_recommenders_recommendations_list' },
        { label: 'folders_locations_recommenders_recommendations_list', value: 'folders_locations_recommenders_recommendations_list' },
        { label: 'organizations_locations_recommenders_recommendations_list', value: 'organizations_locations_recommenders_recommendations_list' }
    ]}
>
<TabItem value="projects_locations_recommenders_recommendations_get">

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

```sql
SELECT
name,
additionalImpact,
associatedInsights,
content,
description,
etag,
lastRefreshTime,
primaryImpact,
priority,
recommenderSubtype,
stateInfo,
targetResources,
xorGroupId
FROM google.recommender.recommendations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND recommendationsId = '{{ recommendationsId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_get">

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

```sql
SELECT
name,
additionalImpact,
associatedInsights,
content,
description,
etag,
lastRefreshTime,
primaryImpact,
priority,
recommenderSubtype,
stateInfo,
targetResources,
xorGroupId
FROM google.recommender.recommendations
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND recommendationsId = '{{ recommendationsId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_get">

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

```sql
SELECT
name,
additionalImpact,
associatedInsights,
content,
description,
etag,
lastRefreshTime,
primaryImpact,
priority,
recommenderSubtype,
stateInfo,
targetResources,
xorGroupId
FROM google.recommender.recommendations
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND recommendationsId = '{{ recommendationsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_get">

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

```sql
SELECT
name,
additionalImpact,
associatedInsights,
content,
description,
etag,
lastRefreshTime,
primaryImpact,
priority,
recommenderSubtype,
stateInfo,
targetResources,
xorGroupId
FROM google.recommender.recommendations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND recommendationsId = '{{ recommendationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_recommenders_recommendations_list">

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

```sql
SELECT
nextPageToken,
recommendations
FROM google.recommender.recommendations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_list">

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

```sql
SELECT
nextPageToken,
recommendations
FROM google.recommender.recommendations
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_list">

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

```sql
SELECT
nextPageToken,
recommendations
FROM google.recommender.recommendations
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_list">

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

```sql
SELECT
nextPageToken,
recommendations
FROM google.recommender.recommendations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recommendersId = '{{ recommendersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_recommenders_recommendations_mark_dismissed"
    values={[
        { label: 'projects_locations_recommenders_recommendations_mark_dismissed', value: 'projects_locations_recommenders_recommendations_mark_dismissed' },
        { label: 'projects_locations_recommenders_recommendations_mark_claimed', value: 'projects_locations_recommenders_recommendations_mark_claimed' },
        { label: 'projects_locations_recommenders_recommendations_mark_succeeded', value: 'projects_locations_recommenders_recommendations_mark_succeeded' },
        { label: 'projects_locations_recommenders_recommendations_mark_failed', value: 'projects_locations_recommenders_recommendations_mark_failed' },
        { label: 'billing_accounts_locations_recommenders_recommendations_mark_dismissed', value: 'billing_accounts_locations_recommenders_recommendations_mark_dismissed' },
        { label: 'billing_accounts_locations_recommenders_recommendations_mark_claimed', value: 'billing_accounts_locations_recommenders_recommendations_mark_claimed' },
        { label: 'billing_accounts_locations_recommenders_recommendations_mark_succeeded', value: 'billing_accounts_locations_recommenders_recommendations_mark_succeeded' },
        { label: 'billing_accounts_locations_recommenders_recommendations_mark_failed', value: 'billing_accounts_locations_recommenders_recommendations_mark_failed' },
        { label: 'folders_locations_recommenders_recommendations_mark_dismissed', value: 'folders_locations_recommenders_recommendations_mark_dismissed' },
        { label: 'folders_locations_recommenders_recommendations_mark_claimed', value: 'folders_locations_recommenders_recommendations_mark_claimed' },
        { label: 'folders_locations_recommenders_recommendations_mark_succeeded', value: 'folders_locations_recommenders_recommendations_mark_succeeded' },
        { label: 'folders_locations_recommenders_recommendations_mark_failed', value: 'folders_locations_recommenders_recommendations_mark_failed' },
        { label: 'organizations_locations_recommenders_recommendations_mark_dismissed', value: 'organizations_locations_recommenders_recommendations_mark_dismissed' },
        { label: 'organizations_locations_recommenders_recommendations_mark_claimed', value: 'organizations_locations_recommenders_recommendations_mark_claimed' },
        { label: 'organizations_locations_recommenders_recommendations_mark_succeeded', value: 'organizations_locations_recommenders_recommendations_mark_succeeded' },
        { label: 'organizations_locations_recommenders_recommendations_mark_failed', value: 'organizations_locations_recommenders_recommendations_mark_failed' }
    ]}
>
<TabItem value="projects_locations_recommenders_recommendations_mark_dismissed">

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.projects_locations_recommenders_recommendations_mark_dismissed 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="projects_locations_recommenders_recommendations_mark_claimed">

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.projects_locations_recommenders_recommendations_mark_claimed 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="projects_locations_recommenders_recommendations_mark_succeeded">

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.projects_locations_recommenders_recommendations_mark_succeeded 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="projects_locations_recommenders_recommendations_mark_failed">

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.projects_locations_recommenders_recommendations_mark_failed 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_mark_dismissed">

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.billing_accounts_locations_recommenders_recommendations_mark_dismissed 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_mark_claimed">

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.billing_accounts_locations_recommenders_recommendations_mark_claimed 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_mark_succeeded">

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.billing_accounts_locations_recommenders_recommendations_mark_succeeded 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recommenders_recommendations_mark_failed">

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.billing_accounts_locations_recommenders_recommendations_mark_failed 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_mark_dismissed">

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.folders_locations_recommenders_recommendations_mark_dismissed 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_mark_claimed">

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.folders_locations_recommenders_recommendations_mark_claimed 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_mark_succeeded">

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.folders_locations_recommenders_recommendations_mark_succeeded 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="folders_locations_recommenders_recommendations_mark_failed">

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.folders_locations_recommenders_recommendations_mark_failed 
@foldersId='{{ foldersId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_mark_dismissed">

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.organizations_locations_recommenders_recommendations_mark_dismissed 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_mark_claimed">

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.organizations_locations_recommenders_recommendations_mark_claimed 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_mark_succeeded">

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.organizations_locations_recommenders_recommendations_mark_succeeded 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_recommenders_recommendations_mark_failed">

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

```sql
EXEC google.recommender.recommendations.organizations_locations_recommenders_recommendations_mark_failed 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recommendersId='{{ recommendersId }}' --required, 
@recommendationsId='{{ recommendationsId }}' --required 
@@json=
'{
"stateMetadata": "{{ stateMetadata }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
</Tabs>
