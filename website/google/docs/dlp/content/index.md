--- 
title: content
hide_title: false
hide_table_of_contents: false
keywords:
  - content
  - dlp
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

Creates, updates, deletes, gets or lists a <code>content</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>content</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.content" /></td></tr>
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
    <td><a href="#projects_content_inspect"><CopyableCode code="projects_content_inspect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,</td>
</tr>
<tr>
    <td><a href="#projects_content_deidentify"><CopyableCode code="projects_content_deidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.</td>
</tr>
<tr>
    <td><a href="#projects_content_reidentify"><CopyableCode code="projects_content_reidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_inspect"><CopyableCode code="projects_locations_content_inspect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_deidentify"><CopyableCode code="projects_locations_content_deidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_reidentify"><CopyableCode code="projects_locations_content_reidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_content_inspect"
    values={[
        { label: 'projects_content_inspect', value: 'projects_content_inspect' },
        { label: 'projects_content_deidentify', value: 'projects_content_deidentify' },
        { label: 'projects_content_reidentify', value: 'projects_content_reidentify' },
        { label: 'projects_locations_content_inspect', value: 'projects_locations_content_inspect' },
        { label: 'projects_locations_content_deidentify', value: 'projects_locations_content_deidentify' },
        { label: 'projects_locations_content_reidentify', value: 'projects_locations_content_reidentify' }
    ]}
>
<TabItem value="projects_content_inspect">

Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,

```sql
EXEC google.dlp.content.projects_content_inspect 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
<TabItem value="projects_content_deidentify">

De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

```sql
EXEC google.dlp.content.projects_content_deidentify 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"deidentifyConfig": "{{ deidentifyConfig }}", 
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"deidentifyTemplateName": "{{ deidentifyTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
<TabItem value="projects_content_reidentify">

Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.

```sql
EXEC google.dlp.content.projects_content_reidentify 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"reidentifyConfig": "{{ reidentifyConfig }}", 
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"reidentifyTemplateName": "{{ reidentifyTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_content_inspect">

Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,

```sql
EXEC google.dlp.content.projects_locations_content_inspect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_content_deidentify">

De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

```sql
EXEC google.dlp.content.projects_locations_content_deidentify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"deidentifyConfig": "{{ deidentifyConfig }}", 
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"deidentifyTemplateName": "{{ deidentifyTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_content_reidentify">

Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.

```sql
EXEC google.dlp.content.projects_locations_content_reidentify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"reidentifyConfig": "{{ reidentifyConfig }}", 
"inspectConfig": "{{ inspectConfig }}", 
"item": "{{ item }}", 
"inspectTemplateName": "{{ inspectTemplateName }}", 
"reidentifyTemplateName": "{{ reidentifyTemplateName }}", 
"locationId": "{{ locationId }}"
}';
```
</TabItem>
</Tabs>
