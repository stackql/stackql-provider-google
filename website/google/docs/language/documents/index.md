--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - language
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

Creates, updates, deletes, gets or lists a <code>documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>documents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.language.documents" /></td></tr>
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
    <td><a href="#analyze_sentiment"><CopyableCode code="analyze_sentiment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Analyzes the sentiment of the provided text.</td>
</tr>
<tr>
    <td><a href="#analyze_entities"><CopyableCode code="analyze_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties.</td>
</tr>
<tr>
    <td><a href="#classify_text"><CopyableCode code="classify_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Classifies a document into categories.</td>
</tr>
<tr>
    <td><a href="#moderate_text"><CopyableCode code="moderate_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Moderates a document for harmful and sensitive categories.</td>
</tr>
<tr>
    <td><a href="#annotate_text"><CopyableCode code="annotate_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>A convenience method that provides all features in one call.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="analyze_sentiment"
    values={[
        { label: 'analyze_sentiment', value: 'analyze_sentiment' },
        { label: 'analyze_entities', value: 'analyze_entities' },
        { label: 'classify_text', value: 'classify_text' },
        { label: 'moderate_text', value: 'moderate_text' },
        { label: 'annotate_text', value: 'annotate_text' }
    ]}
>
<TabItem value="analyze_sentiment">

Analyzes the sentiment of the provided text.

```sql
EXEC google.language.documents.analyze_sentiment 
@@json=
'{
"document": "{{ document }}", 
"encodingType": "{{ encodingType }}"
}';
```
</TabItem>
<TabItem value="analyze_entities">

Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties.

```sql
EXEC google.language.documents.analyze_entities 
@@json=
'{
"document": "{{ document }}", 
"encodingType": "{{ encodingType }}"
}';
```
</TabItem>
<TabItem value="classify_text">

Classifies a document into categories.

```sql
EXEC google.language.documents.classify_text 
@@json=
'{
"document": "{{ document }}"
}';
```
</TabItem>
<TabItem value="moderate_text">

Moderates a document for harmful and sensitive categories.

```sql
EXEC google.language.documents.moderate_text 
@@json=
'{
"document": "{{ document }}", 
"modelVersion": "{{ modelVersion }}"
}';
```
</TabItem>
<TabItem value="annotate_text">

A convenience method that provides all features in one call.

```sql
EXEC google.language.documents.annotate_text 
@@json=
'{
"document": "{{ document }}", 
"features": "{{ features }}", 
"encodingType": "{{ encodingType }}"
}';
```
</TabItem>
</Tabs>
