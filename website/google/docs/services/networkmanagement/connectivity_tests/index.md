--- 
title: connectivity_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - connectivity_tests
  - networkmanagement
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

Creates, updates, deletes, gets or lists a <code>connectivity_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connectivity_tests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.connectivity_tests" /></td></tr>
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
    <td>Identifier. Unique name of the resource using the form: `projects/&#123;project_id&#125;/locations/global/connectivityTests/&#123;test_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bypassFirewallChecks" /></td>
    <td><code>boolean</code></td>
    <td>Whether the analysis should skip firewall checking. Default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-supplied description of the Connectivity Test. Maximum of 512 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, URI of a supported endpoint, project ID, or VPC network to identify the destination location. Reachability analysis proceeds even if the destination location is ambiguous. However, the test result might include endpoints or use a destination that you don't intend to test. (id: Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of a Connectivity Test.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="probingDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ProbingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>IP Protocol of the test. When not provided, "TCP" is assumed.</td>
</tr>
<tr>
    <td><CopyableCode code="reachabilityDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ReachabilityDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedProjects" /></td>
    <td><code>array</code></td>
    <td>Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.</td>
</tr>
<tr>
    <td><CopyableCode code="returnReachabilityDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The reachability details of this test from the latest run for the return path. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ReachabilityDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="roundTrip" /></td>
    <td><code>boolean</code></td>
    <td>Whether run analysis for the return path from destination to source. Default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. Source specification of the Connectivity Test. You can use a combination of source IP address, URI of a supported endpoint, project ID, or VPC network to identify the source location. Reachability analysis might proceed even if the source location is ambiguous. However, the test result might include endpoints or use a source that you don't intend to test. (id: Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the test's configuration was updated.</td>
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
    <td>Identifier. Unique name of the resource using the form: `projects/&#123;project_id&#125;/locations/global/connectivityTests/&#123;test_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bypassFirewallChecks" /></td>
    <td><code>boolean</code></td>
    <td>Whether the analysis should skip firewall checking. Default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-supplied description of the Connectivity Test. Maximum of 512 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, URI of a supported endpoint, project ID, or VPC network to identify the destination location. Reachability analysis proceeds even if the destination location is ambiguous. However, the test result might include endpoints or use a destination that you don't intend to test. (id: Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of a Connectivity Test.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="probingDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ProbingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>IP Protocol of the test. When not provided, "TCP" is assumed.</td>
</tr>
<tr>
    <td><CopyableCode code="reachabilityDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ReachabilityDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="relatedProjects" /></td>
    <td><code>array</code></td>
    <td>Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.</td>
</tr>
<tr>
    <td><CopyableCode code="returnReachabilityDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. The reachability details of this test from the latest run for the return path. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. (id: ReachabilityDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="roundTrip" /></td>
    <td><code>boolean</code></td>
    <td>Whether run analysis for the return path from destination to source. Default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. Source specification of the Connectivity Test. You can use a combination of source IP address, URI of a supported endpoint, project ID, or VPC network to identify the source location. Reachability analysis might proceed even if the source location is ambiguous. However, the test result might include endpoints or use a source that you don't intend to test. (id: Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the test's configuration was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-connectivityTestsId"><code>connectivityTestsId</code></a></td>
    <td></td>
    <td>Gets the details of a specific Connectivity Test.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all Connectivity Tests owned by a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-testId"><code>testId</code></a></td>
    <td>Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-connectivityTestsId"><code>connectivityTestsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for more details.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-connectivityTestsId"><code>connectivityTestsId</code></a></td>
    <td></td>
    <td>Deletes a specific `ConnectivityTest`.</td>
</tr>
<tr>
    <td><a href="#rerun"><CopyableCode code="rerun" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-connectivityTestsId"><code>connectivityTestsId</code></a></td>
    <td></td>
    <td>Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.</td>
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
<tr id="parameter-connectivityTestsId">
    <td><CopyableCode code="connectivityTestsId" /></td>
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
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-testId">
    <td><CopyableCode code="testId" /></td>
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

Gets the details of a specific Connectivity Test.

```sql
SELECT
name,
bypassFirewallChecks,
createTime,
description,
destination,
displayName,
labels,
probingDetails,
protocol,
reachabilityDetails,
relatedProjects,
returnReachabilityDetails,
roundTrip,
source,
updateTime
FROM google.networkmanagement.connectivity_tests
WHERE projectsId = '{{ projectsId }}' -- required
AND connectivityTestsId = '{{ connectivityTestsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all Connectivity Tests owned by a project.

```sql
SELECT
name,
bypassFirewallChecks,
createTime,
description,
destination,
displayName,
labels,
probingDetails,
protocol,
reachabilityDetails,
relatedProjects,
returnReachabilityDetails,
roundTrip,
source,
updateTime
FROM google.networkmanagement.connectivity_tests
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

```sql
INSERT INTO google.networkmanagement.connectivity_tests (
data__name,
data__description,
data__source,
data__destination,
data__protocol,
data__relatedProjects,
data__labels,
data__roundTrip,
data__bypassFirewallChecks,
projectsId,
testId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ source }}',
'{{ destination }}',
'{{ protocol }}',
'{{ relatedProjects }}',
'{{ labels }}',
{{ roundTrip }},
{{ bypassFirewallChecks }},
'{{ projectsId }}',
'{{ testId }}'
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
- name: connectivity_tests
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connectivity_tests resource.
    - name: name
      value: string
      description: >
        Identifier. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`
        
    - name: description
      value: string
      description: >
        The user-supplied description of the Connectivity Test. Maximum of 512 characters.
        
    - name: source
      value: object
      description: >
        Required. Source specification of the Connectivity Test. You can use a combination of source IP address, URI of a supported endpoint, project ID, or VPC network to identify the source location. Reachability analysis might proceed even if the source location is ambiguous. However, the test result might include endpoints or use a source that you don't intend to test.
        
    - name: destination
      value: object
      description: >
        Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, URI of a supported endpoint, project ID, or VPC network to identify the destination location. Reachability analysis proceeds even if the destination location is ambiguous. However, the test result might include endpoints or use a destination that you don't intend to test.
        
    - name: protocol
      value: string
      description: >
        IP Protocol of the test. When not provided, "TCP" is assumed.
        
    - name: relatedProjects
      value: array
      description: >
        Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user-provided metadata.
        
    - name: roundTrip
      value: boolean
      description: >
        Whether run analysis for the return path from destination to source. Default value is false.
        
    - name: bypassFirewallChecks
      value: boolean
      description: >
        Whether the analysis should skip firewall checking. Default value is false.
        
    - name: testId
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

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for more details.

```sql
UPDATE google.networkmanagement.connectivity_tests
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__source = '{{ source }}',
data__destination = '{{ destination }}',
data__protocol = '{{ protocol }}',
data__relatedProjects = '{{ relatedProjects }}',
data__labels = '{{ labels }}',
data__roundTrip = {{ roundTrip }},
data__bypassFirewallChecks = {{ bypassFirewallChecks }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND connectivityTestsId = '{{ connectivityTestsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a specific `ConnectivityTest`.

```sql
DELETE FROM google.networkmanagement.connectivity_tests
WHERE projectsId = '{{ projectsId }}' --required
AND connectivityTestsId = '{{ connectivityTestsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rerun"
    values={[
        { label: 'rerun', value: 'rerun' }
    ]}
>
<TabItem value="rerun">

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

```sql
EXEC google.networkmanagement.connectivity_tests.rerun 
@projectsId='{{ projectsId }}' --required, 
@connectivityTestsId='{{ connectivityTestsId }}' --required;
```
</TabItem>
</Tabs>
