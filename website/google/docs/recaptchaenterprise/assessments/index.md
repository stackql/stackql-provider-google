--- 
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists an <code>assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assessments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.assessments" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an Assessment of the likelihood an event is legitimate.</td>
</tr>
<tr>
    <td><a href="#annotate"><CopyableCode code="annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.</td>
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
<tr id="parameter-assessmentsId">
    <td><CopyableCode code="assessmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an Assessment of the likelihood an event is legitimate.

```sql
INSERT INTO google.recaptchaenterprise.assessments (
data__event,
data__accountVerification,
data__privatePasswordLeakVerification,
data__assessmentEnvironment,
projectsId
)
SELECT 
'{{ event }}',
'{{ accountVerification }}',
'{{ privatePasswordLeakVerification }}',
'{{ assessmentEnvironment }}',
'{{ projectsId }}'
RETURNING
name,
accountDefenderAssessment,
accountVerification,
assessmentEnvironment,
event,
firewallPolicyAssessment,
fraudPreventionAssessment,
fraudSignals,
phoneFraudAssessment,
privatePasswordLeakVerification,
riskAnalysis,
tokenProperties
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: assessments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the assessments resource.
    - name: event
      value: object
      description: >
        Optional. The event being assessed.
        
    - name: accountVerification
      value: object
      description: >
        Optional. Account verification information for identity verification. The assessment event must include a token and site key to use this feature.
        
    - name: privatePasswordLeakVerification
      value: object
      description: >
        Optional. The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.
        
    - name: assessmentEnvironment
      value: object
      description: >
        Optional. The environment creating the assessment. This describes your environment (the system invoking CreateAssessment), NOT the environment of your user.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="annotate"
    values={[
        { label: 'annotate', value: 'annotate' }
    ]}
>
<TabItem value="annotate">

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

```sql
EXEC google.recaptchaenterprise.assessments.annotate 
@projectsId='{{ projectsId }}' --required, 
@assessmentsId='{{ assessmentsId }}' --required 
@@json=
'{
"annotation": "{{ annotation }}", 
"reasons": "{{ reasons }}", 
"accountId": "{{ accountId }}", 
"hashedAccountId": "{{ hashedAccountId }}", 
"transactionEvent": "{{ transactionEvent }}"
}';
```
</TabItem>
</Tabs>
