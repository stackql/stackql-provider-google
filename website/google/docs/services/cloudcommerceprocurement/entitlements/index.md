--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - cloudcommerceprocurement
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entitlements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcommerceprocurement.entitlements" /></td></tr>
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
    <td>Output only. The resource name of the entitlement. Entitlement names have the form `providers/&#123;provider_id&#125;/entitlements/&#123;entitlement_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the account that this entitlement is based on, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="cancellationReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the entitlement was cancelled. If this entitlement wasn't cancelled, this field is empty. Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products). Values of this field are subject to change, and we recommend that you don't build your technical integration to rely on these fields.</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources using this entitlement, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementBenefitIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The entitlement benefit IDs associated with the purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="messageToUser" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end time of the new offer. If the offer was created with a term instead of a specified end date, this field is empty. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the new offer becomes effective. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOffer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer the entitlement is switching to upon a pending plan change. Only exists if the pending plan change is moving to an offer. This field isn't populated for entitlements which aren't active yet. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer-id&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer-id&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOfferDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The duration of the new offer, in ISO 8601 duration format. This field isn't populated for entitlements which aren't active yet, only for pending offer changes. If the offer was created with a specified end date instead of a duration, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer that was procured. Field is empty if order was not made using an offer. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer-id&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer-id&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part.</td>
</tr>
<tr>
    <td><CopyableCode code="offerDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The offer duration of the current offer in ISO 8601 duration format. Field is empty if entitlement was not made using an offer. If the offer was created with a specified end date instead of a duration, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="offerEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the Offer association corresponding to this entitlement. The field is only populated if the entitlement is currently associated with an Offer.</td>
</tr>
<tr>
    <td><CopyableCode code="orderId" /></td>
    <td><code>string</code></td>
    <td>Output only. The order ID of this entitlement, without any `orders/` resource name prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the plan that was procured. Required if the product has plans.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. We strongly recommend that you use the following more explicit fields: productExternalName, quoteExternalName, or offer.</td>
</tr>
<tr>
    <td><CopyableCode code="productExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the product that was procured.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="quoteExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the subscription corresponding to this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="usageReportingId" /></td>
    <td><code>string</code></td>
    <td>Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.</td>
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
    <td>Output only. The resource name of the entitlement. Entitlement names have the form `providers/&#123;provider_id&#125;/entitlements/&#123;entitlement_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the account that this entitlement is based on, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="cancellationReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the entitlement was cancelled. If this entitlement wasn't cancelled, this field is empty. Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products). Values of this field are subject to change, and we recommend that you don't build your technical integration to rely on these fields.</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources using this entitlement, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementBenefitIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The entitlement benefit IDs associated with the purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="messageToUser" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end time of the new offer. If the offer was created with a term instead of a specified end date, this field is empty. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the new offer becomes effective. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOffer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer the entitlement is switching to upon a pending plan change. Only exists if the pending plan change is moving to an offer. This field isn't populated for entitlements which aren't active yet. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer-id&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer-id&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOfferDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The duration of the new offer, in ISO 8601 duration format. This field isn't populated for entitlements which aren't active yet, only for pending offer changes. If the offer was created with a specified end date instead of a duration, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer that was procured. Field is empty if order was not made using an offer. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer-id&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer-id&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part.</td>
</tr>
<tr>
    <td><CopyableCode code="offerDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The offer duration of the current offer in ISO 8601 duration format. Field is empty if entitlement was not made using an offer. If the offer was created with a specified end date instead of a duration, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="offerEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the Offer association corresponding to this entitlement. The field is only populated if the entitlement is currently associated with an Offer.</td>
</tr>
<tr>
    <td><CopyableCode code="orderId" /></td>
    <td><code>string</code></td>
    <td>Output only. The order ID of this entitlement, without any `orders/` resource name prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the plan that was procured. Required if the product has plans.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. We strongly recommend that you use the following more explicit fields: productExternalName, quoteExternalName, or offer.</td>
</tr>
<tr>
    <td><CopyableCode code="productExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the product that was procured.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="quoteExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the subscription corresponding to this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="usageReportingId" /></td>
    <td><code>string</code></td>
    <td>Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.</td>
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
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Gets a requested Entitlement resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Entitlements for which the provider has read access.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing Entitlement.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#reject"><CopyableCode code="reject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#approve_plan_change"><CopyableCode code="approve_plan_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#reject_plan_change"><CopyableCode code="reject_plan_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#suspend"><CopyableCode code="suspend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Requests suspension of an active Entitlement. This is not yet supported.</td>
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
<tr id="parameter-entitlementsId">
    <td><CopyableCode code="entitlementsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets a requested Entitlement resource.

```sql
SELECT
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId
FROM google.cloudcommerceprocurement.entitlements
WHERE providersId = '{{ providersId }}' -- required
AND entitlementsId = '{{ entitlementsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Entitlements for which the provider has read access.

```sql
SELECT
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId
FROM google.cloudcommerceprocurement.entitlements
WHERE providersId = '{{ providersId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Updates an existing Entitlement.

```sql
UPDATE google.cloudcommerceprocurement.entitlements
SET 
data__name = '{{ name }}',
data__account = '{{ account }}',
data__provider = '{{ provider }}',
data__product = '{{ product }}',
data__plan = '{{ plan }}',
data__newPendingPlan = '{{ newPendingPlan }}',
data__state = '{{ state }}',
data__inputProperties = '{{ inputProperties }}',
data__updateTime = '{{ updateTime }}',
data__createTime = '{{ createTime }}',
data__usageReportingId = '{{ usageReportingId }}',
data__messageToUser = '{{ messageToUser }}',
data__consumers = '{{ consumers }}'
WHERE 
providersId = '{{ providersId }}' --required
AND entitlementsId = '{{ entitlementsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="approve"
    values={[
        { label: 'approve', value: 'approve' },
        { label: 'reject', value: 'reject' },
        { label: 'approve_plan_change', value: 'approve_plan_change' },
        { label: 'reject_plan_change', value: 'reject_plan_change' },
        { label: 'suspend', value: 'suspend' }
    ]}
>
<TabItem value="approve">

Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.approve 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"properties": "{{ properties }}", 
"entitlementMigrated": "{{ entitlementMigrated }}"
}';
```
</TabItem>
<TabItem value="reject">

Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.reject 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}';
```
</TabItem>
<TabItem value="approve_plan_change">

Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.approve_plan_change 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"pendingPlanName": "{{ pendingPlanName }}"
}';
```
</TabItem>
<TabItem value="reject_plan_change">

Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.reject_plan_change 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"reason": "{{ reason }}", 
"pendingPlanName": "{{ pendingPlanName }}"
}';
```
</TabItem>
<TabItem value="suspend">

Requests suspension of an active Entitlement. This is not yet supported.

```sql
EXEC google.cloudcommerceprocurement.entitlements.suspend 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}';
```
</TabItem>
</Tabs>
