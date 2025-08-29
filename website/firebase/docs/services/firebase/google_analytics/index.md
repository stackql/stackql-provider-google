--- 
title: google_analytics
hide_title: false
hide_table_of_contents: false
keywords:
  - google_analytics
  - firebase
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>google_analytics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>google_analytics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.google_analytics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_google_analytics"><CopyableCode code="add_google_analytics" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addFirebase).</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_google_analytics"
    values={[
        { label: 'add_google_analytics', value: 'add_google_analytics' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_google_analytics">

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addFirebase).

```sql
INSERT INTO firebase.firebase.google_analytics (
data__analyticsAccountId,
data__analyticsPropertyId,
projectsId
)
SELECT 
'{{ analyticsAccountId }}',
'{{ analyticsPropertyId }}',
'{{ projectsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: google_analytics
  props:
    - name: projectsId
      value: string
      description: Required parameter for the google_analytics resource.
    - name: analyticsAccountId
      value: string
      description: >
        The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`.
        
    - name: analyticsPropertyId
      value: string
      description: >
        The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`.
        
```
</TabItem>
</Tabs>
