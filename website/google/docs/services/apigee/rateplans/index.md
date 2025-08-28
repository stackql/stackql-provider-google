--- 
title: rateplans
hide_title: false
hide_table_of_contents: false
keywords:
  - rateplans
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

Creates, updates, deletes, gets or lists a <code>rateplans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rateplans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.rateplans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apiproducts_rateplans_get"
    values={[
        { label: 'organizations_apiproducts_rateplans_get', value: 'organizations_apiproducts_rateplans_get' },
        { label: 'organizations_apiproducts_rateplans_list', value: 'organizations_apiproducts_rateplans_list' }
    ]}
>
<TabItem value="organizations_apiproducts_rateplans_get">

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
    <td>Output only. Name of the rate plan.</td>
</tr>
<tr>
    <td><CopyableCode code="apiproduct" /></td>
    <td><code>string</code></td>
    <td>Name of the API product that the rate plan is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="billingPeriod" /></td>
    <td><code>string</code></td>
    <td>Frequency at which the customer will be billed.</td>
</tr>
<tr>
    <td><CopyableCode code="consumptionPricingRates" /></td>
    <td><code>array</code></td>
    <td>API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `BANDED` and the ranges are defined as follows: ``` &#123; "start": 1, "end": 100, "fee": 2 &#125;, &#123; "start": 101, "end": 200, "fee": 1.50 &#125;, &#123; "start": 201, "end": 0, "fee": 1 &#125;, &#125; ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 50 calls cost 50 x $2 = $100 * 150 calls cost 100 x $2 + 50 x $1.5 = $275 * 250 calls cost 100 x $2 + 100 x $1.5 + 50 x $1 = $400 * 500 calls cost 100 x $2 + 100 x $1.5 + 300 x $1 = $650</td>
</tr>
<tr>
    <td><CopyableCode code="consumptionPricingType" /></td>
    <td><code>string</code></td>
    <td>Pricing model used for consumption-based charges.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time that the rate plan was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td>Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the rate plan.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name of the rate plan.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.</td>
</tr>
<tr>
    <td><CopyableCode code="fixedFeeFrequency" /></td>
    <td><code>integer (int32)</code></td>
    <td>Frequency at which the fixed fee is charged.</td>
</tr>
<tr>
    <td><CopyableCode code="fixedRecurringFee" /></td>
    <td><code>object</code></td>
    <td>Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period. (id: GoogleTypeMoney)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the rate plan was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentFundingModel" /></td>
    <td><code>string</code></td>
    <td>DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid.</td>
</tr>
<tr>
    <td><CopyableCode code="revenueShareRates" /></td>
    <td><code>array</code></td>
    <td>Details of the revenue sharing model.</td>
</tr>
<tr>
    <td><CopyableCode code="revenueShareType" /></td>
    <td><code>string</code></td>
    <td>Method used to calculate the revenue that is shared with developers.</td>
</tr>
<tr>
    <td><CopyableCode code="setupFee" /></td>
    <td><code>object</code></td>
    <td>Initial, one-time fee paid when purchasing the API product. (id: GoogleTypeMoney)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Time when the rate plan becomes active in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the rate plan (draft or published).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apiproducts_rateplans_list">

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
    <td><CopyableCode code="nextStartKey" /></td>
    <td><code>string</code></td>
    <td>Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="ratePlans" /></td>
    <td><code>array</code></td>
    <td>List of rate plans in an organization.</td>
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
    <td><a href="#organizations_apiproducts_rateplans_get"><CopyableCode code="organizations_apiproducts_rateplans_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-rateplansId"><code>rateplansId</code></a></td>
    <td></td>
    <td>Gets the details of a rate plan.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_rateplans_list"><CopyableCode code="organizations_apiproducts_rateplans_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-expand"><code>expand</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists all the rate plans for an API product.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_rateplans_create"><CopyableCode code="organizations_apiproducts_rateplans_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_rateplans_update"><CopyableCode code="organizations_apiproducts_rateplans_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-rateplansId"><code>rateplansId</code></a></td>
    <td></td>
    <td>Updates an existing rate plan.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_rateplans_delete"><CopyableCode code="organizations_apiproducts_rateplans_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-rateplansId"><code>rateplansId</code></a></td>
    <td></td>
    <td>Deletes a rate plan.</td>
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
<tr id="parameter-apiproductsId">
    <td><CopyableCode code="apiproductsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rateplansId">
    <td><CopyableCode code="rateplansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-expand">
    <td><CopyableCode code="expand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startKey">
    <td><CopyableCode code="startKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_apiproducts_rateplans_get"
    values={[
        { label: 'organizations_apiproducts_rateplans_get', value: 'organizations_apiproducts_rateplans_get' },
        { label: 'organizations_apiproducts_rateplans_list', value: 'organizations_apiproducts_rateplans_list' }
    ]}
>
<TabItem value="organizations_apiproducts_rateplans_get">

Gets the details of a rate plan.

```sql
SELECT
name,
apiproduct,
billingPeriod,
consumptionPricingRates,
consumptionPricingType,
createdAt,
currencyCode,
description,
displayName,
endTime,
fixedFeeFrequency,
fixedRecurringFee,
lastModifiedAt,
paymentFundingModel,
revenueShareRates,
revenueShareType,
setupFee,
startTime,
state
FROM google.apigee.rateplans
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apiproductsId = '{{ apiproductsId }}' -- required
AND rateplansId = '{{ rateplansId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apiproducts_rateplans_list">

Lists all the rate plans for an API product.

```sql
SELECT
nextStartKey,
ratePlans
FROM google.apigee.rateplans
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apiproductsId = '{{ apiproductsId }}' -- required
AND orderBy = '{{ orderBy }}'
AND startKey = '{{ startKey }}'
AND count = '{{ count }}'
AND expand = '{{ expand }}'
AND state = '{{ state }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_apiproducts_rateplans_create"
    values={[
        { label: 'organizations_apiproducts_rateplans_create', value: 'organizations_apiproducts_rateplans_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apiproducts_rateplans_create">

Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.

```sql
INSERT INTO google.apigee.rateplans (
data__apiproduct,
data__displayName,
data__description,
data__billingPeriod,
data__paymentFundingModel,
data__currencyCode,
data__setupFee,
data__fixedRecurringFee,
data__fixedFeeFrequency,
data__consumptionPricingType,
data__consumptionPricingRates,
data__revenueShareType,
data__revenueShareRates,
data__state,
data__startTime,
data__endTime,
organizationsId,
apiproductsId
)
SELECT 
'{{ apiproduct }}',
'{{ displayName }}',
'{{ description }}',
'{{ billingPeriod }}',
'{{ paymentFundingModel }}',
'{{ currencyCode }}',
'{{ setupFee }}',
'{{ fixedRecurringFee }}',
{{ fixedFeeFrequency }},
'{{ consumptionPricingType }}',
'{{ consumptionPricingRates }}',
'{{ revenueShareType }}',
'{{ revenueShareRates }}',
'{{ state }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ organizationsId }}',
'{{ apiproductsId }}'
RETURNING
name,
apiproduct,
billingPeriod,
consumptionPricingRates,
consumptionPricingType,
createdAt,
currencyCode,
description,
displayName,
endTime,
fixedFeeFrequency,
fixedRecurringFee,
lastModifiedAt,
paymentFundingModel,
revenueShareRates,
revenueShareType,
setupFee,
startTime,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: rateplans
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the rateplans resource.
    - name: apiproductsId
      value: string
      description: Required parameter for the rateplans resource.
    - name: apiproduct
      value: string
      description: >
        Name of the API product that the rate plan is associated with.
        
    - name: displayName
      value: string
      description: >
        Display name of the rate plan.
        
    - name: description
      value: string
      description: >
        Description of the rate plan.
        
    - name: billingPeriod
      value: string
      description: >
        Frequency at which the customer will be billed.
        
      valid_values: ['BILLING_PERIOD_UNSPECIFIED', 'WEEKLY', 'MONTHLY']
    - name: paymentFundingModel
      value: string
      description: >
        DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid.
        
      valid_values: ['PAYMENT_FUNDING_MODEL_UNSPECIFIED', 'PREPAID', 'POSTPAID']
    - name: currencyCode
      value: string
      description: >
        Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.
        
    - name: setupFee
      value: object
      description: >
        Initial, one-time fee paid when purchasing the API product.
        
    - name: fixedRecurringFee
      value: object
      description: >
        Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.
        
    - name: fixedFeeFrequency
      value: integer
      description: >
        Frequency at which the fixed fee is charged.
        
    - name: consumptionPricingType
      value: string
      description: >
        Pricing model used for consumption-based charges.
        
      valid_values: ['CONSUMPTION_PRICING_TYPE_UNSPECIFIED', 'FIXED_PER_UNIT', 'BANDED', 'TIERED', 'STAIRSTEP']
    - name: consumptionPricingRates
      value: array
      description: >
        API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `BANDED` and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 2 }, { "start": 101, "end": 200, "fee": 1.50 }, { "start": 201, "end": 0, "fee": 1 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 50 calls cost 50 x $2 = $100 * 150 calls cost 100 x $2 + 50 x $1.5 = $275 * 250 calls cost 100 x $2 + 100 x $1.5 + 50 x $1 = $400 * 500 calls cost 100 x $2 + 100 x $1.5 + 300 x $1 = $650
        
    - name: revenueShareType
      value: string
      description: >
        Method used to calculate the revenue that is shared with developers.
        
      valid_values: ['REVENUE_SHARE_TYPE_UNSPECIFIED', 'FIXED', 'VOLUME_BANDED']
    - name: revenueShareRates
      value: array
      description: >
        Details of the revenue sharing model.
        
    - name: state
      value: string
      description: >
        Current state of the rate plan (draft or published).
        
      valid_values: ['STATE_UNSPECIFIED', 'DRAFT', 'PUBLISHED']
    - name: startTime
      value: string
      description: >
        Time when the rate plan becomes active in milliseconds since epoch.
        
    - name: endTime
      value: string
      description: >
        Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_apiproducts_rateplans_update"
    values={[
        { label: 'organizations_apiproducts_rateplans_update', value: 'organizations_apiproducts_rateplans_update' }
    ]}
>
<TabItem value="organizations_apiproducts_rateplans_update">

Updates an existing rate plan.

```sql
REPLACE google.apigee.rateplans
SET 
data__apiproduct = '{{ apiproduct }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__billingPeriod = '{{ billingPeriod }}',
data__paymentFundingModel = '{{ paymentFundingModel }}',
data__currencyCode = '{{ currencyCode }}',
data__setupFee = '{{ setupFee }}',
data__fixedRecurringFee = '{{ fixedRecurringFee }}',
data__fixedFeeFrequency = {{ fixedFeeFrequency }},
data__consumptionPricingType = '{{ consumptionPricingType }}',
data__consumptionPricingRates = '{{ consumptionPricingRates }}',
data__revenueShareType = '{{ revenueShareType }}',
data__revenueShareRates = '{{ revenueShareRates }}',
data__state = '{{ state }}',
data__startTime = '{{ startTime }}',
data__endTime = '{{ endTime }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
AND rateplansId = '{{ rateplansId }}' --required
RETURNING
name,
apiproduct,
billingPeriod,
consumptionPricingRates,
consumptionPricingType,
createdAt,
currencyCode,
description,
displayName,
endTime,
fixedFeeFrequency,
fixedRecurringFee,
lastModifiedAt,
paymentFundingModel,
revenueShareRates,
revenueShareType,
setupFee,
startTime,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_apiproducts_rateplans_delete"
    values={[
        { label: 'organizations_apiproducts_rateplans_delete', value: 'organizations_apiproducts_rateplans_delete' }
    ]}
>
<TabItem value="organizations_apiproducts_rateplans_delete">

Deletes a rate plan.

```sql
DELETE FROM google.apigee.rateplans
WHERE organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
AND rateplansId = '{{ rateplansId }}' --required;
```
</TabItem>
</Tabs>
