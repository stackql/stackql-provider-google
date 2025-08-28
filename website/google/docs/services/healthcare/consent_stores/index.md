--- 
title: consent_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - consent_stores
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

Creates, updates, deletes, gets or lists a <code>consent_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>consent_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.consent_stores" /></td></tr>
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
    <td>Identifier. Resource name of the consent store, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultConsentTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConsentCreateOnUpdate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125;. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125;. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources</td>
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
    <td>Identifier. Resource name of the consent store, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;`. Cannot be changed after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultConsentTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConsentCreateOnUpdate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125;. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125;. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Gets the specified consent store.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the consent stores in the specified dataset.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-consentStoreId"><code>consentStoreId</code></a></td>
    <td>Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified consent store.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Deletes the specified consent store and removes all the consent store's data.</td>
</tr>
<tr>
    <td><a href="#check_data_access"><CopyableCode code="check_data_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.</td>
</tr>
<tr>
    <td><a href="#query_accessible_data"><CopyableCode code="query_accessible_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;`. ```json jsonPayload: &#123; @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: &#123; code: 9 message: "failed to evaluate consent policy" &#125; resourceName: "projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consents/&#123;consent_id&#125;" &#125; logName: "projects/&#123;project_id&#125;/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: &#123; id: "projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/operations/&#123;operation_id&#125;" producer: "healthcare.googleapis.com/QueryAccessibleData" &#125; receiveTimestamp: "TIMESTAMP" resource: &#123; labels: &#123; consent_store_id: "&#123;consent_store_id&#125;" dataset_id: "&#123;dataset_id&#125;" location: "&#123;location_id&#125;" project_id: "&#123;project_id&#125;" &#125; type: "healthcare_consent_store" &#125; severity: "ERROR" timestamp: "TIMESTAMP" ```</td>
</tr>
<tr>
    <td><a href="#evaluate_user_consents"><CopyableCode code="evaluate_user_consents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-consentStoresId"><code>consentStoresId</code></a></td>
    <td></td>
    <td>Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.</td>
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
<tr id="parameter-consentStoreId">
    <td><CopyableCode code="consentStoreId" /></td>
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

Gets the specified consent store.

```sql
SELECT
name,
defaultConsentTtl,
enableConsentCreateOnUpdate,
labels
FROM google.healthcare.consent_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND consentStoresId = '{{ consentStoresId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the consent stores in the specified dataset.

```sql
SELECT
name,
defaultConsentTtl,
enableConsentCreateOnUpdate,
labels
FROM google.healthcare.consent_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.

```sql
INSERT INTO google.healthcare.consent_stores (
data__name,
data__defaultConsentTtl,
data__labels,
data__enableConsentCreateOnUpdate,
projectsId,
locationsId,
datasetsId,
consentStoreId
)
SELECT 
'{{ name }}',
'{{ defaultConsentTtl }}',
'{{ labels }}',
{{ enableConsentCreateOnUpdate }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ consentStoreId }}'
RETURNING
name,
defaultConsentTtl,
enableConsentCreateOnUpdate,
labels
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: consent_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the consent_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the consent_stores resource.
    - name: datasetsId
      value: string
      description: Required parameter for the consent_stores resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation.
        
    - name: defaultConsentTtl
      value: string
      description: >
        Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.
        
    - name: labels
      value: object
      description: >
        Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources
        
    - name: enableConsentCreateOnUpdate
      value: boolean
      description: >
        Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.
        
    - name: consentStoreId
      value: string
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

Updates the specified consent store.

```sql
UPDATE google.healthcare.consent_stores
SET 
data__name = '{{ name }}',
data__defaultConsentTtl = '{{ defaultConsentTtl }}',
data__labels = '{{ labels }}',
data__enableConsentCreateOnUpdate = {{ enableConsentCreateOnUpdate }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultConsentTtl,
enableConsentCreateOnUpdate,
labels;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified consent store and removes all the consent store's data.

```sql
DELETE FROM google.healthcare.consent_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND consentStoresId = '{{ consentStoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_data_access"
    values={[
        { label: 'check_data_access', value: 'check_data_access' },
        { label: 'query_accessible_data', value: 'query_accessible_data' },
        { label: 'evaluate_user_consents', value: 'evaluate_user_consents' }
    ]}
>
<TabItem value="check_data_access">

Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.

```sql
EXEC google.healthcare.consent_stores.check_data_access 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@consentStoresId='{{ consentStoresId }}' --required 
@@json=
'{
"dataId": "{{ dataId }}", 
"requestAttributes": "{{ requestAttributes }}", 
"consentList": "{{ consentList }}", 
"responseView": "{{ responseView }}"
}';
```
</TabItem>
<TabItem value="query_accessible_data">

Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;`. ```json jsonPayload: &#123; @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: &#123; code: 9 message: "failed to evaluate consent policy" &#125; resourceName: "projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/consentStores/&#123;consent_store_id&#125;/consents/&#123;consent_id&#125;" &#125; logName: "projects/&#123;project_id&#125;/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: &#123; id: "projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/operations/&#123;operation_id&#125;" producer: "healthcare.googleapis.com/QueryAccessibleData" &#125; receiveTimestamp: "TIMESTAMP" resource: &#123; labels: &#123; consent_store_id: "&#123;consent_store_id&#125;" dataset_id: "&#123;dataset_id&#125;" location: "&#123;location_id&#125;" project_id: "&#123;project_id&#125;" &#125; type: "healthcare_consent_store" &#125; severity: "ERROR" timestamp: "TIMESTAMP" ```

```sql
EXEC google.healthcare.consent_stores.query_accessible_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@consentStoresId='{{ consentStoresId }}' --required 
@@json=
'{
"gcsDestination": "{{ gcsDestination }}", 
"resourceAttributes": "{{ resourceAttributes }}", 
"requestAttributes": "{{ requestAttributes }}"
}';
```
</TabItem>
<TabItem value="evaluate_user_consents">

Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.

```sql
EXEC google.healthcare.consent_stores.evaluate_user_consents 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@consentStoresId='{{ consentStoresId }}' --required 
@@json=
'{
"userId": "{{ userId }}", 
"resourceAttributes": "{{ resourceAttributes }}", 
"requestAttributes": "{{ requestAttributes }}", 
"consentList": "{{ consentList }}", 
"responseView": "{{ responseView }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
