--- 
title: routines
hide_title: false
hide_table_of_contents: false
keywords:
  - routines
  - bigquery
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

Creates, updates, deletes, gets or lists a <code>routines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>routines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.routines" /></td></tr>
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

A user-defined function or a stored procedure.

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
    <td><CopyableCode code="arguments" /></td>
    <td><code>array</code></td>
    <td>Optional.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this routine was created, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="dataGovernanceType" /></td>
    <td><code>string</code></td>
    <td>Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask).</td>
</tr>
<tr>
    <td><CopyableCode code="definitionBody" /></td>
    <td><code>string</code></td>
    <td>Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the routine, if defined.</td>
</tr>
<tr>
    <td><CopyableCode code="determinismLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. The determinism level of the JavaScript UDF, if defined.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="externalRuntimeOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options for the runtime of the external system executing the routine. This field is only applicable for Python UDFs. [Preview](https://cloud.google.com/products/#product-launch-stages) (id: ExternalRuntimeOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="importedLibraries" /></td>
    <td><code>array</code></td>
    <td>Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this routine was last modified, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="pythonOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options for the Python UDF. [Preview](https://cloud.google.com/products/#product-launch-stages) (id: PythonOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteFunctionOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Remote function specific options. (id: RemoteFunctionOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="returnTableType" /></td>
    <td><code>object</code></td>
    <td>Optional. Can be set only if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from definition_body at query time in each query that references this routine. If present, then the columns in the evaluated table result will be cast to match the column types specified in return table type, at query time. (id: StandardSqlTableType)</td>
</tr>
<tr>
    <td><CopyableCode code="returnType" /></td>
    <td><code>object</code></td>
    <td>The data type of a variable such as a function argument. Examples include: * INT64: `&#123;"typeKind": "INT64"&#125;` * ARRAY: &#123; "typeKind": "ARRAY", "arrayElementType": &#123;"typeKind": "STRING"&#125; &#125; * STRUCT&gt;: &#123; "typeKind": "STRUCT", "structType": &#123; "fields": [ &#123; "name": "x", "type": &#123;"typeKind": "STRING"&#125; &#125;, &#123; "name": "y", "type": &#123; "typeKind": "ARRAY", "arrayElementType": &#123;"typeKind": "DATE"&#125; &#125; &#125; ] &#125; &#125; * RANGE: &#123; "typeKind": "RANGE", "rangeElementType": &#123;"typeKind": "DATE"&#125; &#125; (id: StandardSqlDataType)</td>
</tr>
<tr>
    <td><CopyableCode code="routineReference" /></td>
    <td><code>object</code></td>
    <td>Id path of a routine. (id: RoutineReference)</td>
</tr>
<tr>
    <td><CopyableCode code="routineType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of routine.</td>
</tr>
<tr>
    <td><CopyableCode code="securityMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="sparkOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark specific options. (id: SparkOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="strictMode" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn't guarantee that the procedure will successfully execute at runtime. If `strictMode` is set to `TRUE`, the procedure body is further checked for errors such as non-existent tables or columns. The `CREATE PROCEDURE` statement fails if the body fails any of these checks. If `strictMode` is set to `FALSE`, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify `strictMode=FALSE` to avoid non-existent procedure errors during validation. Default value is `TRUE`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Describes the format of a single result page when listing routines.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to request the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="routines" /></td>
    <td><code>array</code></td>
    <td>Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+routineId"><code>+routineId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Gets the specified routine resource by routine ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all routines in the specified dataset. Requires the READER dataset role.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td></td>
    <td>Creates a new routine in the dataset.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+routineId"><code>+routineId</code></a></td>
    <td></td>
    <td>Updates information in an existing routine. The update method replaces the entire Routine resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+routineId"><code>+routineId</code></a></td>
    <td></td>
    <td>Deletes the routine specified by routineId from the dataset.</td>
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
<tr id="parameter-+datasetId">
    <td><CopyableCode code="+datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-+routineId">
    <td><CopyableCode code="+routineId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
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

Gets the specified routine resource by routine ID.

```sql
SELECT
arguments,
creationTime,
dataGovernanceType,
definitionBody,
description,
determinismLevel,
etag,
externalRuntimeOptions,
importedLibraries,
language,
lastModifiedTime,
pythonOptions,
remoteFunctionOptions,
returnTableType,
returnType,
routineReference,
routineType,
securityMode,
sparkOptions,
strictMode
FROM google.bigquery.routines
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +routineId = '{{ +routineId }}' -- required
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="list">

Lists all routines in the specified dataset. Requires the READER dataset role.

```sql
SELECT
nextPageToken,
routines
FROM google.bigquery.routines
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
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

Creates a new routine in the dataset.

```sql
INSERT INTO google.bigquery.routines (
data__arguments,
data__dataGovernanceType,
data__definitionBody,
data__description,
data__determinismLevel,
data__externalRuntimeOptions,
data__importedLibraries,
data__language,
data__pythonOptions,
data__remoteFunctionOptions,
data__returnTableType,
data__returnType,
data__routineReference,
data__routineType,
data__securityMode,
data__sparkOptions,
data__strictMode,
projectId,
+datasetId
)
SELECT 
'{{ arguments }}',
'{{ dataGovernanceType }}',
'{{ definitionBody }}',
'{{ description }}',
'{{ determinismLevel }}',
'{{ externalRuntimeOptions }}',
'{{ importedLibraries }}',
'{{ language }}',
'{{ pythonOptions }}',
'{{ remoteFunctionOptions }}',
'{{ returnTableType }}',
'{{ returnType }}',
'{{ routineReference }}',
'{{ routineType }}',
'{{ securityMode }}',
'{{ sparkOptions }}',
{{ strictMode }},
'{{ projectId }}',
'{{ +datasetId }}'
RETURNING
arguments,
creationTime,
dataGovernanceType,
definitionBody,
description,
determinismLevel,
etag,
externalRuntimeOptions,
importedLibraries,
language,
lastModifiedTime,
pythonOptions,
remoteFunctionOptions,
returnTableType,
returnType,
routineReference,
routineType,
securityMode,
sparkOptions,
strictMode
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: routines
  props:
    - name: projectId
      value: string
      description: Required parameter for the routines resource.
    - name: +datasetId
      value: string
      description: Required parameter for the routines resource.
    - name: arguments
      value: array
      description: >
        Optional.
        
    - name: dataGovernanceType
      value: string
      description: >
        Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask).
        
      valid_values: ['DATA_GOVERNANCE_TYPE_UNSPECIFIED', 'DATA_MASKING']
    - name: definitionBody
      value: string
      description: >
        Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
        
    - name: description
      value: string
      description: >
        Optional. The description of the routine, if defined.
        
    - name: determinismLevel
      value: string
      description: >
        Optional. The determinism level of the JavaScript UDF, if defined.
        
      valid_values: ['DETERMINISM_LEVEL_UNSPECIFIED', 'DETERMINISTIC', 'NOT_DETERMINISTIC']
    - name: externalRuntimeOptions
      value: object
      description: >
        Optional. Options for the runtime of the external system executing the routine. This field is only applicable for Python UDFs. [Preview](https://cloud.google.com/products/#product-launch-stages)
        
    - name: importedLibraries
      value: array
      description: >
        Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
        
    - name: language
      value: string
      description: >
        Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
        
      valid_values: ['LANGUAGE_UNSPECIFIED', 'SQL', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'SCALA']
    - name: pythonOptions
      value: object
      description: >
        Optional. Options for the Python UDF. [Preview](https://cloud.google.com/products/#product-launch-stages)
        
    - name: remoteFunctionOptions
      value: object
      description: >
        Optional. Remote function specific options.
        
    - name: returnTableType
      value: object
      description: >
        Optional. Can be set only if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from definition_body at query time in each query that references this routine. If present, then the columns in the evaluated table result will be cast to match the column types specified in return table type, at query time.
        
    - name: returnType
      value: object
      description: >
        The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } * RANGE: { "typeKind": "RANGE", "rangeElementType": {"typeKind": "DATE"} }
        
    - name: routineReference
      value: object
      description: >
        Id path of a routine.
        
    - name: routineType
      value: string
      description: >
        Required. The type of routine.
        
      valid_values: ['ROUTINE_TYPE_UNSPECIFIED', 'SCALAR_FUNCTION', 'PROCEDURE', 'TABLE_VALUED_FUNCTION', 'AGGREGATE_FUNCTION']
    - name: securityMode
      value: string
      description: >
        Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration.
        
      valid_values: ['SECURITY_MODE_UNSPECIFIED', 'DEFINER', 'INVOKER']
    - name: sparkOptions
      value: object
      description: >
        Optional. Spark specific options.
        
    - name: strictMode
      value: boolean
      description: >
        Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn't guarantee that the procedure will successfully execute at runtime. If `strictMode` is set to `TRUE`, the procedure body is further checked for errors such as non-existent tables or columns. The `CREATE PROCEDURE` statement fails if the body fails any of these checks. If `strictMode` is set to `FALSE`, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify `strictMode=FALSE` to avoid non-existent procedure errors during validation. Default value is `TRUE`.
        
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

Updates information in an existing routine. The update method replaces the entire Routine resource.

```sql
REPLACE google.bigquery.routines
SET 
data__arguments = '{{ arguments }}',
data__dataGovernanceType = '{{ dataGovernanceType }}',
data__definitionBody = '{{ definitionBody }}',
data__description = '{{ description }}',
data__determinismLevel = '{{ determinismLevel }}',
data__externalRuntimeOptions = '{{ externalRuntimeOptions }}',
data__importedLibraries = '{{ importedLibraries }}',
data__language = '{{ language }}',
data__pythonOptions = '{{ pythonOptions }}',
data__remoteFunctionOptions = '{{ remoteFunctionOptions }}',
data__returnTableType = '{{ returnTableType }}',
data__returnType = '{{ returnType }}',
data__routineReference = '{{ routineReference }}',
data__routineType = '{{ routineType }}',
data__securityMode = '{{ securityMode }}',
data__sparkOptions = '{{ sparkOptions }}',
data__strictMode = {{ strictMode }}
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +routineId = '{{ +routineId }}' --required
RETURNING
arguments,
creationTime,
dataGovernanceType,
definitionBody,
description,
determinismLevel,
etag,
externalRuntimeOptions,
importedLibraries,
language,
lastModifiedTime,
pythonOptions,
remoteFunctionOptions,
returnTableType,
returnType,
routineReference,
routineType,
securityMode,
sparkOptions,
strictMode;
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

Deletes the routine specified by routineId from the dataset.

```sql
DELETE FROM google.bigquery.routines
WHERE projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +routineId = '{{ +routineId }}' --required;
```
</TabItem>
</Tabs>
