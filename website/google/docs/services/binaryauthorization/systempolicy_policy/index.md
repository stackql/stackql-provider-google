--- 
title: systempolicy_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - systempolicy_policy
  - binaryauthorization
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

Creates, updates, deletes, gets or lists a <code>systempolicy_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>systempolicy_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.binaryauthorization.systempolicy_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

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
    <td>Output only. The resource name, in the format `projects/*/policy`. There is at most one policy per project.</td>
</tr>
<tr>
    <td><CopyableCode code="admissionWhitelistPatterns" /></td>
    <td><code>array</code></td>
    <td>Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterAdmissionRules" /></td>
    <td><code>object</code></td>
    <td>Optional. A valid policy has only one of the following rule maps non-empty, i.e. only one of `cluster_admission_rules`, `kubernetes_namespace_admission_rules`, `kubernetes_service_account_admission_rules`, or `istio_service_identity_admission_rules` can be non-empty. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultAdmissionRule" /></td>
    <td><code>object</code></td>
    <td>An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation. (id: AdmissionRule)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive comment.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154.</td>
</tr>
<tr>
    <td><CopyableCode code="globalPolicyEvaluationMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy.</td>
</tr>
<tr>
    <td><CopyableCode code="istioServiceIdentityAdmissionRules" /></td>
    <td><code>object</code></td>
    <td>Optional. Per-istio-service-identity admission rules. Istio service identity spec format: `spiffe:///ns//sa/` or `/ns//sa/` e.g. `spiffe://example.com/ns/test-ns/sa/default`</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesNamespaceAdmissionRules" /></td>
    <td><code>object</code></td>
    <td>Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: `[a-z.-]+`, e.g. `some-namespace`</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesServiceAccountAdmissionRules" /></td>
    <td><code>object</code></td>
    <td>Optional. Per-kubernetes-service-account admission rules. Service account spec format: `namespace:serviceaccount`. e.g. `test-ns:default`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy was last updated.</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets the current system policy in the specified location.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

Gets the current system policy in the specified location.

```sql
SELECT
name,
admissionWhitelistPatterns,
clusterAdmissionRules,
defaultAdmissionRule,
description,
etag,
globalPolicyEvaluationMode,
istioServiceIdentityAdmissionRules,
kubernetesNamespaceAdmissionRules,
kubernetesServiceAccountAdmissionRules,
updateTime
FROM google.binaryauthorization.systempolicy_policy
WHERE locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>
