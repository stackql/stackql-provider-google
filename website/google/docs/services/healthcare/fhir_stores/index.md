--- 
title: fhir_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - fhir_stores
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

Creates, updates, deletes, gets or lists a <code>fhir_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fhir_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.fhir_stores" /></td></tr>
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
    <td>Output only. Identifier. Resource name of the FHIR store, of the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/datasets/&#123;dataset_id&#125;/fhirStores/&#123;fhir_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="bulkExportGcsDestination" /></td>
    <td><code>object</code></td>
    <td>Optional. FHIR bulk export exports resources to the specified Cloud Storage destination. A Cloud Storage destination is a URI for a Cloud Storage directory where result files will be written. Only used in the spec-defined bulk $export methods. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM role on the destination. (id: BulkExportGcsDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="complexDataTypeReferenceParsing" /></td>
    <td><code>string</code></td>
    <td>Optional. Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Cannot be disabled in R5.</td>
</tr>
<tr>
    <td><CopyableCode code="consentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies whether this store has consent enforcement. Not available for DSTU2 FHIR version due to absence of Consent resources. Not supported for R5 FHIR version. (id: ConsentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSearchHandlingStrict" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="disableReferentialIntegrity" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.</td>
</tr>
<tr>
    <td><CopyableCode code="disableResourceVersioning" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="enableUpdateCreate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Deprecated. Use `notification_configs` instead. If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Not supported in R5. Use `notification_configs` instead. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies where and whether to send notifications upon changes to a FHIR store.</td>
</tr>
<tr>
    <td><CopyableCode code="streamConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.</td>
</tr>
<tr>
    <td><CopyableCode code="validationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for how to validate incoming FHIR resources against configured profiles. (id: ValidationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.</td>
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
    <td>Output only. Identifier. Resource name of the FHIR store, of the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/datasets/&#123;dataset_id&#125;/fhirStores/&#123;fhir_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="bulkExportGcsDestination" /></td>
    <td><code>object</code></td>
    <td>Optional. FHIR bulk export exports resources to the specified Cloud Storage destination. A Cloud Storage destination is a URI for a Cloud Storage directory where result files will be written. Only used in the spec-defined bulk $export methods. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM role on the destination. (id: BulkExportGcsDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="complexDataTypeReferenceParsing" /></td>
    <td><code>string</code></td>
    <td>Optional. Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Cannot be disabled in R5.</td>
</tr>
<tr>
    <td><CopyableCode code="consentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies whether this store has consent enforcement. Not available for DSTU2 FHIR version due to absence of Consent resources. Not supported for R5 FHIR version. (id: ConsentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSearchHandlingStrict" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="disableReferentialIntegrity" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.</td>
</tr>
<tr>
    <td><CopyableCode code="disableResourceVersioning" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="enableUpdateCreate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Deprecated. Use `notification_configs` instead. If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Not supported in R5. Use `notification_configs` instead. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies where and whether to send notifications upon changes to a FHIR store.</td>
</tr>
<tr>
    <td><CopyableCode code="streamConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.</td>
</tr>
<tr>
    <td><CopyableCode code="validationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for how to validate incoming FHIR resources against configured profiles. (id: ValidationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Gets the configuration of the specified FHIR store.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the FHIR stores in the given dataset.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-fhirStoreId"><code>fhirStoreId</code></a></td>
    <td>Creates a new FHIR store within the parent dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the configuration of the specified FHIR store.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Deletes the specified FHIR store and removes all resources within it.</td>
</tr>
<tr>
    <td><a href="#deidentify"><CopyableCode code="deidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).</td>
</tr>
<tr>
    <td><a href="#bulk-export-group"><CopyableCode code="bulk-export-group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a></td>
    <td><a href="#parameter-_since"><code>_since</code></a>, <a href="#parameter-_type"><code>_type</code></a>, <a href="#parameter-outputFormat"><code>outputFormat</code></a>, <a href="#parameter-organizeOutputBy"><code>organizeOutputBy</code></a></td>
    <td>Bulk exports a Group resource and resources in the member field, including related resources for each Patient member. The export for each Patient is identical to a GetPatientEverything request. Implements the FHIR implementation guide [$export group of patients](https://build.fhir.org/ig/HL7/bulk-data/export.html#endpoint---group-of-patients). The following headers must be set in the request: * `Accept`: specifies the format of the `OperationOutcome` response. Only `application/fhir+json` is supported. * `Prefer`: specifies whether the response is immediate or asynchronous. Must be to `respond-async` because only asynchronous responses are supported. Specify the destination for the server to write result files by setting the Cloud Storage location bulk_export_gcs_destination on the FHIR store. URI of an existing Cloud Storage directory where the server writes result files, in the format gs://&#123;bucket-id&#125;/&#123;path/to/destination/dir&#125;. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced. Supports the following query parameters: * `_type`: string of comma-delimited FHIR resource types. If provided, only resources of the specified type(s) are exported. * `_since`: if provided, only resources updated after the specified time are exported. * `_outputFormat`: optional, specify ndjson to export data in NDJSON format. Exported file names use the format: &#123;export_id&#125;&#95;&#123;resource_type&#125;.ndjson. * `organizeOutputBy`: resource type to organize the output by. Required and must be set to `Patient`. When specified, output files are organized by instances of the specified resource type, including the resource, referenced resources, and resources that contain references to that resource. On success, the `Content-Location` header of response is set to a URL that you can use to query the status of the export. The URL is in the format `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/fhirStores/&#123;fhir_store_id&#125;/operations/&#123;export_id&#125;`. See get-fhir-operation-status for more information. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Imports resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data. Every resource in the input must contain a client-supplied ID. Each resource is stored using the supplied ID regardless of the enable_update_create setting on the FHIR store. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Cloud Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity. The import process does not trigger Pub/Sub notification or BigQuery streaming update, regardless of how those are configured on the FHIR store. If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it's possible that successfully imported resources will be overwritten more than once. The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store contains exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients. If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back. The location and format of the input data is specified by the parameters in ImportResourcesRequest. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except that `history` bundles are rejected, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.</td>
</tr>
<tr>
    <td><a href="#apply_consents"><CopyableCode code="apply_consents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Apply the Consent resources for the FHIR store and reindex the underlying resources in the FHIR store according to the aggregate consent. The aggregate consent of the patient in scope in this request replaces any previous call of this method. Any Consent resource change after this operation execution (including deletion) requires you to call ApplyConsents again to have effect. This method returns an Operation that can be used to track the progress of the consent resources that were processed by calling GetOperation. Upon completion, the ApplyConsentsResponse additionally contains the number of resources that was reindexed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). To enforce consent check for data access, `consent_config.access_enforced` must be set to true for the FhirStore. FHIR Consent is not supported in DSTU2 or R5.</td>
</tr>
<tr>
    <td><a href="#apply_admin_consents"><CopyableCode code="apply_admin_consents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Applies the admin Consent resources for the FHIR store and reindexes the underlying resources in the FHIR store according to the aggregate consents. This method also updates the `consent_config.enforced_admin_consents` field of the FhirStore unless `validate_only=true` in ApplyAdminConsentsRequest. Any admin Consent resource change after this operation execution (including deletion) requires you to call ApplyAdminConsents again for the change to take effect. This method returns an Operation that can be used to track the progress of the resources that were reindexed, by calling GetOperation. Upon completion, the ApplyAdminConsentsResponse additionally contains the number of resources that were reindexed. If at least one Consent resource contains an error or fails be be enforced for any reason, the method returns an error instead of an Operation. No resources will be reindexed and the `consent_config.enforced_admin_consents` field will be unchanged. To enforce a consent check for data access, `consent_config.access_enforced` must be set to true for the FhirStore. FHIR Consent is not supported in DSTU2 or R5.</td>
</tr>
<tr>
    <td><a href="#explain_data_access"><CopyableCode code="explain_data_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td><a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td>Explains all the permitted/denied actor, purpose and environment for a given resource. FHIR Consent is not supported in DSTU2 or R5.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Export resources from the FHIR store to the specified destination. This method returns an Operation that can be used to track the status of the export by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-fhirStoresId"><code>fhirStoresId</code></a></td>
    <td></td>
    <td>Rolls back resources from the FHIR store to the specified time. This method returns an Operation that can be used to track the status of the rollback by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type RollbackFhirResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.</td>
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
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fhirStoresId">
    <td><CopyableCode code="fhirStoresId" /></td>
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
<tr id="parameter-_since">
    <td><CopyableCode code="_since" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-_type">
    <td><CopyableCode code="_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fhirStoreId">
    <td><CopyableCode code="fhirStoreId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizeOutputBy">
    <td><CopyableCode code="organizeOutputBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-outputFormat">
    <td><CopyableCode code="outputFormat" /></td>
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
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
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

Gets the configuration of the specified FHIR store.

```sql
SELECT
name,
bulkExportGcsDestination,
complexDataTypeReferenceParsing,
consentConfig,
defaultSearchHandlingStrict,
disableReferentialIntegrity,
disableResourceVersioning,
enableUpdateCreate,
labels,
notificationConfig,
notificationConfigs,
streamConfigs,
validationConfig,
version
FROM google.healthcare.fhir_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND fhirStoresId = '{{ fhirStoresId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the FHIR stores in the given dataset.

```sql
SELECT
name,
bulkExportGcsDestination,
complexDataTypeReferenceParsing,
consentConfig,
defaultSearchHandlingStrict,
disableReferentialIntegrity,
disableResourceVersioning,
enableUpdateCreate,
labels,
notificationConfig,
notificationConfigs,
streamConfigs,
validationConfig,
version
FROM google.healthcare.fhir_stores
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

Creates a new FHIR store within the parent dataset.

```sql
INSERT INTO google.healthcare.fhir_stores (
data__name,
data__enableUpdateCreate,
data__notificationConfig,
data__disableReferentialIntegrity,
data__disableResourceVersioning,
data__labels,
data__version,
data__streamConfigs,
data__validationConfig,
data__defaultSearchHandlingStrict,
data__complexDataTypeReferenceParsing,
data__notificationConfigs,
data__bulkExportGcsDestination,
data__consentConfig,
projectsId,
locationsId,
datasetsId,
fhirStoreId
)
SELECT 
'{{ name }}',
{{ enableUpdateCreate }},
'{{ notificationConfig }}',
{{ disableReferentialIntegrity }},
{{ disableResourceVersioning }},
'{{ labels }}',
'{{ version }}',
'{{ streamConfigs }}',
'{{ validationConfig }}',
{{ defaultSearchHandlingStrict }},
'{{ complexDataTypeReferenceParsing }}',
'{{ notificationConfigs }}',
'{{ bulkExportGcsDestination }}',
'{{ consentConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ fhirStoreId }}'
RETURNING
name,
bulkExportGcsDestination,
complexDataTypeReferenceParsing,
consentConfig,
defaultSearchHandlingStrict,
disableReferentialIntegrity,
disableResourceVersioning,
enableUpdateCreate,
labels,
notificationConfig,
notificationConfigs,
streamConfigs,
validationConfig,
version
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: fhir_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the fhir_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the fhir_stores resource.
    - name: datasetsId
      value: string
      description: Required parameter for the fhir_stores resource.
    - name: name
      value: string
      description: >
        Output only. Identifier. Resource name of the FHIR store, of the form `projects/{project_id}/locations/{location}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
        
    - name: enableUpdateCreate
      value: boolean
      description: >
        Optional. Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. Defaults to false.
        
    - name: notificationConfig
      value: object
      description: >
        Deprecated. Use `notification_configs` instead. If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Not supported in R5. Use `notification_configs` instead.
        
    - name: disableReferentialIntegrity
      value: boolean
      description: >
        Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.
        
    - name: disableResourceVersioning
      value: boolean
      description: >
        Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. Defaults to false.
        
    - name: labels
      value: object
      description: >
        User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
        
    - name: version
      value: string
      description: >
        Required. Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.
        
      valid_values: ['VERSION_UNSPECIFIED', 'DSTU2', 'STU3', 'R4', 'R5']
    - name: streamConfigs
      value: array
      description: >
        Optional. A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.
        
    - name: validationConfig
      value: object
      description: >
        Optional. Configuration for how to validate incoming FHIR resources against configured profiles.
        
    - name: defaultSearchHandlingStrict
      value: boolean
      description: >
        Optional. If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`. Defaults to false.
        
    - name: complexDataTypeReferenceParsing
      value: string
      description: >
        Optional. Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Cannot be disabled in R5.
        
      valid_values: ['COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED', 'DISABLED', 'ENABLED']
    - name: notificationConfigs
      value: array
      description: >
        Optional. Specifies where and whether to send notifications upon changes to a FHIR store.
        
    - name: bulkExportGcsDestination
      value: object
      description: >
        Optional. FHIR bulk export exports resources to the specified Cloud Storage destination. A Cloud Storage destination is a URI for a Cloud Storage directory where result files will be written. Only used in the spec-defined bulk $export methods. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM role on the destination.
        
    - name: consentConfig
      value: object
      description: >
        Optional. Specifies whether this store has consent enforcement. Not available for DSTU2 FHIR version due to absence of Consent resources. Not supported for R5 FHIR version.
        
    - name: fhirStoreId
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

Updates the configuration of the specified FHIR store.

```sql
UPDATE google.healthcare.fhir_stores
SET 
data__name = '{{ name }}',
data__enableUpdateCreate = {{ enableUpdateCreate }},
data__notificationConfig = '{{ notificationConfig }}',
data__disableReferentialIntegrity = {{ disableReferentialIntegrity }},
data__disableResourceVersioning = {{ disableResourceVersioning }},
data__labels = '{{ labels }}',
data__version = '{{ version }}',
data__streamConfigs = '{{ streamConfigs }}',
data__validationConfig = '{{ validationConfig }}',
data__defaultSearchHandlingStrict = {{ defaultSearchHandlingStrict }},
data__complexDataTypeReferenceParsing = '{{ complexDataTypeReferenceParsing }}',
data__notificationConfigs = '{{ notificationConfigs }}',
data__bulkExportGcsDestination = '{{ bulkExportGcsDestination }}',
data__consentConfig = '{{ consentConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND fhirStoresId = '{{ fhirStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bulkExportGcsDestination,
complexDataTypeReferenceParsing,
consentConfig,
defaultSearchHandlingStrict,
disableReferentialIntegrity,
disableResourceVersioning,
enableUpdateCreate,
labels,
notificationConfig,
notificationConfigs,
streamConfigs,
validationConfig,
version;
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

Deletes the specified FHIR store and removes all resources within it.

```sql
DELETE FROM google.healthcare.fhir_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND fhirStoresId = '{{ fhirStoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deidentify"
    values={[
        { label: 'deidentify', value: 'deidentify' },
        { label: 'bulk-export-group', value: 'bulk-export-group' },
        { label: 'import', value: 'import' },
        { label: 'apply_consents', value: 'apply_consents' },
        { label: 'apply_admin_consents', value: 'apply_admin_consents' },
        { label: 'explain_data_access', value: 'explain_data_access' },
        { label: 'export', value: 'export' },
        { label: 'rollback', value: 'rollback' }
    ]}
>
<TabItem value="deidentify">

De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).

```sql
EXEC google.healthcare.fhir_stores.deidentify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"destinationStore": "{{ destinationStore }}", 
"config": "{{ config }}", 
"gcsConfigUri": "{{ gcsConfigUri }}", 
"resourceFilter": "{{ resourceFilter }}", 
"skipModifiedResources": {{ skipModifiedResources }}
}';
```
</TabItem>
<TabItem value="bulk-export-group">

Bulk exports a Group resource and resources in the member field, including related resources for each Patient member. The export for each Patient is identical to a GetPatientEverything request. Implements the FHIR implementation guide [$export group of patients](https://build.fhir.org/ig/HL7/bulk-data/export.html#endpoint---group-of-patients). The following headers must be set in the request: * `Accept`: specifies the format of the `OperationOutcome` response. Only `application/fhir+json` is supported. * `Prefer`: specifies whether the response is immediate or asynchronous. Must be to `respond-async` because only asynchronous responses are supported. Specify the destination for the server to write result files by setting the Cloud Storage location bulk_export_gcs_destination on the FHIR store. URI of an existing Cloud Storage directory where the server writes result files, in the format gs://&#123;bucket-id&#125;/&#123;path/to/destination/dir&#125;. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced. Supports the following query parameters: * `_type`: string of comma-delimited FHIR resource types. If provided, only resources of the specified type(s) are exported. * `_since`: if provided, only resources updated after the specified time are exported. * `_outputFormat`: optional, specify ndjson to export data in NDJSON format. Exported file names use the format: &#123;export_id&#125;&#95;&#123;resource_type&#125;.ndjson. * `organizeOutputBy`: resource type to organize the output by. Required and must be set to `Patient`. When specified, output files are organized by instances of the specified resource type, including the resource, referenced resources, and resources that contain references to that resource. On success, the `Content-Location` header of response is set to a URL that you can use to query the status of the export. The URL is in the format `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/fhirStores/&#123;fhir_store_id&#125;/operations/&#123;export_id&#125;`. See get-fhir-operation-status for more information. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error.

```sql
EXEC google.healthcare.fhir_stores.bulk-export-group 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required, 
@GroupId='{{ GroupId }}' --required, 
@_since='{{ _since }}', 
@_type='{{ _type }}', 
@outputFormat='{{ outputFormat }}', 
@organizeOutputBy='{{ organizeOutputBy }}';
```
</TabItem>
<TabItem value="import">

Imports resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data. Every resource in the input must contain a client-supplied ID. Each resource is stored using the supplied ID regardless of the enable_update_create setting on the FHIR store. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Cloud Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity. The import process does not trigger Pub/Sub notification or BigQuery streaming update, regardless of how those are configured on the FHIR store. If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it's possible that successfully imported resources will be overwritten more than once. The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store contains exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients. If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back. The location and format of the input data is specified by the parameters in ImportResourcesRequest. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except that `history` bundles are rejected, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.

```sql
EXEC google.healthcare.fhir_stores.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"contentStructure": "{{ contentStructure }}", 
"gcsSource": "{{ gcsSource }}"
}';
```
</TabItem>
<TabItem value="apply_consents">

Apply the Consent resources for the FHIR store and reindex the underlying resources in the FHIR store according to the aggregate consent. The aggregate consent of the patient in scope in this request replaces any previous call of this method. Any Consent resource change after this operation execution (including deletion) requires you to call ApplyConsents again to have effect. This method returns an Operation that can be used to track the progress of the consent resources that were processed by calling GetOperation. Upon completion, the ApplyConsentsResponse additionally contains the number of resources that was reindexed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). To enforce consent check for data access, `consent_config.access_enforced` must be set to true for the FhirStore. FHIR Consent is not supported in DSTU2 or R5.

```sql
EXEC google.healthcare.fhir_stores.apply_consents 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"patientScope": "{{ patientScope }}", 
"timeRange": "{{ timeRange }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="apply_admin_consents">

Applies the admin Consent resources for the FHIR store and reindexes the underlying resources in the FHIR store according to the aggregate consents. This method also updates the `consent_config.enforced_admin_consents` field of the FhirStore unless `validate_only=true` in ApplyAdminConsentsRequest. Any admin Consent resource change after this operation execution (including deletion) requires you to call ApplyAdminConsents again for the change to take effect. This method returns an Operation that can be used to track the progress of the resources that were reindexed, by calling GetOperation. Upon completion, the ApplyAdminConsentsResponse additionally contains the number of resources that were reindexed. If at least one Consent resource contains an error or fails be be enforced for any reason, the method returns an error instead of an Operation. No resources will be reindexed and the `consent_config.enforced_admin_consents` field will be unchanged. To enforce a consent check for data access, `consent_config.access_enforced` must be set to true for the FhirStore. FHIR Consent is not supported in DSTU2 or R5.

```sql
EXEC google.healthcare.fhir_stores.apply_admin_consents 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"newConsentsList": "{{ newConsentsList }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="explain_data_access">

Explains all the permitted/denied actor, purpose and environment for a given resource. FHIR Consent is not supported in DSTU2 or R5.

```sql
EXEC google.healthcare.fhir_stores.explain_data_access 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required, 
@resourceId='{{ resourceId }}';
```
</TabItem>
<TabItem value="export">

Export resources from the FHIR store to the specified destination. This method returns an Operation that can be used to track the status of the export by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.

```sql
EXEC google.healthcare.fhir_stores.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"gcsDestination": "{{ gcsDestination }}", 
"bigqueryDestination": "{{ bigqueryDestination }}", 
"_since": "{{ _since }}", 
"_type": "{{ _type }}"
}';
```
</TabItem>
<TabItem value="rollback">

Rolls back resources from the FHIR store to the specified time. This method returns an Operation that can be used to track the status of the rollback by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type RollbackFhirResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.

```sql
EXEC google.healthcare.fhir_stores.rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@fhirStoresId='{{ fhirStoresId }}' --required 
@@json=
'{
"type": "{{ type }}", 
"rollbackTime": "{{ rollbackTime }}", 
"filteringFields": "{{ filteringFields }}", 
"force": {{ force }}, 
"changeType": "{{ changeType }}", 
"resultGcsBucket": "{{ resultGcsBucket }}", 
"inputGcsObject": "{{ inputGcsObject }}", 
"excludeRollbacks": {{ excludeRollbacks }}
}';
```
</TabItem>
</Tabs>
