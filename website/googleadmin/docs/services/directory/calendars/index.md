--- 
title: calendars
hide_title: false
hide_table_of_contents: false
keywords:
  - calendars
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>calendars</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>calendars</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.calendars" /></td></tr>
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
    <td><CopyableCode code="buildingId" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the building a resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Capacity of a resource, number of seats in a room.</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="featureInstances" /></td>
    <td><code>any</code></td>
    <td>Instances of features for the calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="floorName" /></td>
    <td><code>string</code></td>
    <td>Name of the floor a resource is located on.</td>
</tr>
<tr>
    <td><CopyableCode code="floorSection" /></td>
    <td><code>string</code></td>
    <td>Name of the section within a floor a resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedResourceName" /></td>
    <td><code>string</code></td>
    <td>The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`. (default: admin#directory#resources#calendars#CalendarResource)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCategory" /></td>
    <td><code>string</code></td>
    <td>The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the resource, visible only to admins.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceEmail" /></td>
    <td><code>string</code></td>
    <td>The read-only email for the calendar resource. Generated as part of creating a new calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the calendar resource. For example, "Training Room 1A".</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the calendar resource, intended for non-room resources.</td>
</tr>
<tr>
    <td><CopyableCode code="userVisibleDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the resource, visible to users and admins.</td>
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
    <td><CopyableCode code="buildingId" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the building a resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Capacity of a resource, number of seats in a room.</td>
</tr>
<tr>
    <td><CopyableCode code="etags" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="featureInstances" /></td>
    <td><code>any</code></td>
    <td>Instances of features for the calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="floorName" /></td>
    <td><code>string</code></td>
    <td>Name of the floor a resource is located on.</td>
</tr>
<tr>
    <td><CopyableCode code="floorSection" /></td>
    <td><code>string</code></td>
    <td>Name of the section within a floor a resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedResourceName" /></td>
    <td><code>string</code></td>
    <td>The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`. (default: admin#directory#resources#calendars#CalendarResource)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCategory" /></td>
    <td><code>string</code></td>
    <td>The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the resource, visible only to admins.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceEmail" /></td>
    <td><code>string</code></td>
    <td>The read-only email for the calendar resource. Generated as part of creating a new calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the calendar resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the calendar resource. For example, "Training Room 1A".</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the calendar resource, intended for non-room resources.</td>
</tr>
<tr>
    <td><CopyableCode code="userVisibleDescription" /></td>
    <td><code>string</code></td>
    <td>Description of the resource, visible to users and admins.</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-calendarResourceId"><code>calendarResourceId</code></a></td>
    <td></td>
    <td>Retrieves a calendar resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>Retrieves a list of calendar resources for an account.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Inserts a calendar resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-calendarResourceId"><code>calendarResourceId</code></a></td>
    <td></td>
    <td>Patches a calendar resource.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-calendarResourceId"><code>calendarResourceId</code></a></td>
    <td></td>
    <td>Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-calendarResourceId"><code>calendarResourceId</code></a></td>
    <td></td>
    <td>Deletes a calendar resource.</td>
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
<tr id="parameter-calendarResourceId">
    <td><CopyableCode code="calendarResourceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
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

Retrieves a calendar resource.

```sql
SELECT
buildingId,
capacity,
etags,
featureInstances,
floorName,
floorSection,
generatedResourceName,
kind,
resourceCategory,
resourceDescription,
resourceEmail,
resourceId,
resourceName,
resourceType,
userVisibleDescription
FROM googleadmin.directory.calendars
WHERE customer = '{{ customer }}' -- required
AND calendarResourceId = '{{ calendarResourceId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of calendar resources for an account.

```sql
SELECT
buildingId,
capacity,
etags,
featureInstances,
floorName,
floorSection,
generatedResourceName,
kind,
resourceCategory,
resourceDescription,
resourceEmail,
resourceId,
resourceName,
resourceType,
userVisibleDescription
FROM googleadmin.directory.calendars
WHERE customer = '{{ customer }}' -- required
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND query = '{{ query }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Inserts a calendar resource.

```sql
INSERT INTO googleadmin.directory.calendars (
data__kind,
data__etags,
data__resourceName,
data__resourceDescription,
data__resourceType,
data__resourceEmail,
data__resourceCategory,
data__userVisibleDescription,
data__generatedResourceName,
data__featureInstances,
data__resourceId,
data__capacity,
data__floorName,
data__buildingId,
data__floorSection,
customer
)
SELECT 
'{{ kind }}',
'{{ etags }}',
'{{ resourceName }}',
'{{ resourceDescription }}',
'{{ resourceType }}',
'{{ resourceEmail }}',
'{{ resourceCategory }}',
'{{ userVisibleDescription }}',
'{{ generatedResourceName }}',
'{{ featureInstances }}',
'{{ resourceId }}',
{{ capacity }},
'{{ floorName }}',
'{{ buildingId }}',
'{{ floorSection }}',
'{{ customer }}'
RETURNING
buildingId,
capacity,
etags,
featureInstances,
floorName,
floorSection,
generatedResourceName,
kind,
resourceCategory,
resourceDescription,
resourceEmail,
resourceId,
resourceName,
resourceType,
userVisibleDescription
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: calendars
  props:
    - name: customer
      value: string
      description: Required parameter for the calendars resource.
    - name: kind
      value: string
      description: >
        The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.
        
      default: admin#directory#resources#calendars#CalendarResource
    - name: etags
      value: string
      description: >
        ETag of the resource.
        
    - name: resourceName
      value: string
      description: >
        The name of the calendar resource. For example, "Training Room 1A".
        
    - name: resourceDescription
      value: string
      description: >
        Description of the resource, visible only to admins.
        
    - name: resourceType
      value: string
      description: >
        The type of the calendar resource, intended for non-room resources.
        
    - name: resourceEmail
      value: string
      description: >
        The read-only email for the calendar resource. Generated as part of creating a new calendar resource.
        
    - name: resourceCategory
      value: string
      description: >
        The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.
        
    - name: userVisibleDescription
      value: string
      description: >
        Description of the resource, visible to users and admins.
        
    - name: generatedResourceName
      value: string
      description: >
        The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".
        
    - name: featureInstances
      value: any
      description: >
        Instances of features for the calendar resource.
        
    - name: resourceId
      value: string
      description: >
        The unique ID for the calendar resource.
        
    - name: capacity
      value: integer
      description: >
        Capacity of a resource, number of seats in a room.
        
    - name: floorName
      value: string
      description: >
        Name of the floor a resource is located on.
        
    - name: buildingId
      value: string
      description: >
        Unique ID for the building a resource is located in.
        
    - name: floorSection
      value: string
      description: >
        Name of the section within a floor a resource is located in.
        
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

Patches a calendar resource.

```sql
UPDATE googleadmin.directory.calendars
SET 
data__kind = '{{ kind }}',
data__etags = '{{ etags }}',
data__resourceName = '{{ resourceName }}',
data__resourceDescription = '{{ resourceDescription }}',
data__resourceType = '{{ resourceType }}',
data__resourceEmail = '{{ resourceEmail }}',
data__resourceCategory = '{{ resourceCategory }}',
data__userVisibleDescription = '{{ userVisibleDescription }}',
data__generatedResourceName = '{{ generatedResourceName }}',
data__featureInstances = '{{ featureInstances }}',
data__resourceId = '{{ resourceId }}',
data__capacity = {{ capacity }},
data__floorName = '{{ floorName }}',
data__buildingId = '{{ buildingId }}',
data__floorSection = '{{ floorSection }}'
WHERE 
customer = '{{ customer }}' --required
AND calendarResourceId = '{{ calendarResourceId }}' --required
RETURNING
buildingId,
capacity,
etags,
featureInstances,
floorName,
floorSection,
generatedResourceName,
kind,
resourceCategory,
resourceDescription,
resourceEmail,
resourceId,
resourceName,
resourceType,
userVisibleDescription;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

```sql
REPLACE googleadmin.directory.calendars
SET 
data__kind = '{{ kind }}',
data__etags = '{{ etags }}',
data__resourceName = '{{ resourceName }}',
data__resourceDescription = '{{ resourceDescription }}',
data__resourceType = '{{ resourceType }}',
data__resourceEmail = '{{ resourceEmail }}',
data__resourceCategory = '{{ resourceCategory }}',
data__userVisibleDescription = '{{ userVisibleDescription }}',
data__generatedResourceName = '{{ generatedResourceName }}',
data__featureInstances = '{{ featureInstances }}',
data__resourceId = '{{ resourceId }}',
data__capacity = {{ capacity }},
data__floorName = '{{ floorName }}',
data__buildingId = '{{ buildingId }}',
data__floorSection = '{{ floorSection }}'
WHERE 
customer = '{{ customer }}' --required
AND calendarResourceId = '{{ calendarResourceId }}' --required
RETURNING
buildingId,
capacity,
etags,
featureInstances,
floorName,
floorSection,
generatedResourceName,
kind,
resourceCategory,
resourceDescription,
resourceEmail,
resourceId,
resourceName,
resourceType,
userVisibleDescription;
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

Deletes a calendar resource.

```sql
DELETE FROM googleadmin.directory.calendars
WHERE customer = '{{ customer }}' --required
AND calendarResourceId = '{{ calendarResourceId }}' --required;
```
</TabItem>
</Tabs>
