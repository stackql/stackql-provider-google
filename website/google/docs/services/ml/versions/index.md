--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - ml
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_models_versions_get"
    values={[
        { label: 'projects_models_versions_get', value: 'projects_models_versions_get' },
        { label: 'projects_models_versions_list', value: 'projects_models_versions_list' }
    ]}
>
<TabItem value="projects_models_versions_get">

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
    <td>Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratorConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). (id: GoogleCloudMlV1__AcceleratorConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoScaling" /></td>
    <td><code>object</code></td>
    <td>Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes. (id: GoogleCloudMlV1__AutoScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`. (id: GoogleCloudMlV1__ContainerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description specified for the version when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. The details of a failure or a cancellation.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.</td>
</tr>
<tr>
    <td><CopyableCode code="explanationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload. (id: GoogleCloudMlV1__ExplanationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrationModelId" /></td>
    <td><code>string</code></td>
    <td>Output only. The [AI Platform (Unified) `Model`](https://cloud.google.com/ai-platform-unified/docs/reference/rest/v1beta1/projects.locations.models) ID for the last [model migration](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time this version was successfully [migrated to AI Platform (Unified)](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).</td>
</tr>
<tr>
    <td><CopyableCode code="lastUseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the version was last used for prediction.</td>
</tr>
<tr>
    <td><CopyableCode code="machineType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.</td>
</tr>
<tr>
    <td><CopyableCode code="manualScaling" /></td>
    <td><code>object</code></td>
    <td>Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes. (id: GoogleCloudMlV1__ManualScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="packageUris" /></td>
    <td><code>array</code></td>
    <td>Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.</td>
</tr>
<tr>
    <td><CopyableCode code="predictionClass" /></td>
    <td><code>string</code></td>
    <td>Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).</td>
</tr>
<tr>
    <td><CopyableCode code="pythonVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).</td>
</tr>
<tr>
    <td><CopyableCode code="requestLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version. (id: GoogleCloudMlV1__RequestLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json &#123; "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" &#125; ``` See RouteMap for more details about these default values. (id: GoogleCloudMlV1__RouteMap)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of a version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_models_versions_list">

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
    <td>Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratorConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). (id: GoogleCloudMlV1__AcceleratorConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoScaling" /></td>
    <td><code>object</code></td>
    <td>Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes. (id: GoogleCloudMlV1__AutoScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`. (id: GoogleCloudMlV1__ContainerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description specified for the version when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. The details of a failure or a cancellation.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.</td>
</tr>
<tr>
    <td><CopyableCode code="explanationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload. (id: GoogleCloudMlV1__ExplanationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrationModelId" /></td>
    <td><code>string</code></td>
    <td>Output only. The [AI Platform (Unified) `Model`](https://cloud.google.com/ai-platform-unified/docs/reference/rest/v1beta1/projects.locations.models) ID for the last [model migration](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time this version was successfully [migrated to AI Platform (Unified)](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).</td>
</tr>
<tr>
    <td><CopyableCode code="lastUseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the version was last used for prediction.</td>
</tr>
<tr>
    <td><CopyableCode code="machineType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.</td>
</tr>
<tr>
    <td><CopyableCode code="manualScaling" /></td>
    <td><code>object</code></td>
    <td>Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes. (id: GoogleCloudMlV1__ManualScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="packageUris" /></td>
    <td><code>array</code></td>
    <td>Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.</td>
</tr>
<tr>
    <td><CopyableCode code="predictionClass" /></td>
    <td><code>string</code></td>
    <td>Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).</td>
</tr>
<tr>
    <td><CopyableCode code="pythonVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).</td>
</tr>
<tr>
    <td><CopyableCode code="requestLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version. (id: GoogleCloudMlV1__RequestLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json &#123; "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" &#125; ``` See RouteMap for more details about these default values. (id: GoogleCloudMlV1__RouteMap)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of a version.</td>
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
    <td><a href="#projects_models_versions_get"><CopyableCode code="projects_models_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Gets information about a model version. Models can have multiple versions. You can call projects.models.versions.list to get the same information that this method returns for all of the versions of a model.</td>
</tr>
<tr>
    <td><a href="#projects_models_versions_list"><CopyableCode code="projects_models_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: &#123;&#125;.</td>
</tr>
<tr>
    <td><a href="#projects_models_versions_create"><CopyableCode code="projects_models_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.</td>
</tr>
<tr>
    <td><a href="#projects_models_versions_patch"><CopyableCode code="projects_models_versions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.</td>
</tr>
<tr>
    <td><a href="#projects_models_versions_delete"><CopyableCode code="projects_models_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.</td>
</tr>
<tr>
    <td><a href="#projects_models_versions_set_default"><CopyableCode code="projects_models_versions_set_default" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.</td>
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
<tr id="parameter-modelsId">
    <td><CopyableCode code="modelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
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
    defaultValue="projects_models_versions_get"
    values={[
        { label: 'projects_models_versions_get', value: 'projects_models_versions_get' },
        { label: 'projects_models_versions_list', value: 'projects_models_versions_list' }
    ]}
>
<TabItem value="projects_models_versions_get">

Gets information about a model version. Models can have multiple versions. You can call projects.models.versions.list to get the same information that this method returns for all of the versions of a model.

```sql
SELECT
name,
acceleratorConfig,
autoScaling,
container,
createTime,
deploymentUri,
description,
errorMessage,
etag,
explanationConfig,
framework,
isDefault,
labels,
lastMigrationModelId,
lastMigrationTime,
lastUseTime,
machineType,
manualScaling,
packageUris,
predictionClass,
pythonVersion,
requestLoggingConfig,
routes,
runtimeVersion,
serviceAccount,
state
FROM google.ml.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_models_versions_list">

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: &#123;&#125;.

```sql
SELECT
name,
acceleratorConfig,
autoScaling,
container,
createTime,
deploymentUri,
description,
errorMessage,
etag,
explanationConfig,
framework,
isDefault,
labels,
lastMigrationModelId,
lastMigrationTime,
lastUseTime,
machineType,
manualScaling,
packageUris,
predictionClass,
pythonVersion,
requestLoggingConfig,
routes,
runtimeVersion,
serviceAccount,
state
FROM google.ml.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_models_versions_create"
    values={[
        { label: 'projects_models_versions_create', value: 'projects_models_versions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_models_versions_create">

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

```sql
INSERT INTO google.ml.versions (
data__name,
data__description,
data__isDefault,
data__deploymentUri,
data__createTime,
data__lastUseTime,
data__runtimeVersion,
data__machineType,
data__autoScaling,
data__manualScaling,
data__state,
data__errorMessage,
data__predictionClass,
data__packageUris,
data__labels,
data__etag,
data__framework,
data__pythonVersion,
data__acceleratorConfig,
data__serviceAccount,
data__requestLoggingConfig,
data__explanationConfig,
data__container,
data__routes,
projectsId,
modelsId
)
SELECT 
'{{ name }}',
'{{ description }}',
{{ isDefault }},
'{{ deploymentUri }}',
'{{ createTime }}',
'{{ lastUseTime }}',
'{{ runtimeVersion }}',
'{{ machineType }}',
'{{ autoScaling }}',
'{{ manualScaling }}',
'{{ state }}',
'{{ errorMessage }}',
'{{ predictionClass }}',
'{{ packageUris }}',
'{{ labels }}',
'{{ etag }}',
'{{ framework }}',
'{{ pythonVersion }}',
'{{ acceleratorConfig }}',
'{{ serviceAccount }}',
'{{ requestLoggingConfig }}',
'{{ explanationConfig }}',
'{{ container }}',
'{{ routes }}',
'{{ projectsId }}',
'{{ modelsId }}'
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
- name: versions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the versions resource.
    - name: modelsId
      value: string
      description: Required parameter for the versions resource.
    - name: name
      value: string
      description: >
        Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.
        
    - name: description
      value: string
      description: >
        Optional. The description specified for the version when it was created.
        
    - name: isDefault
      value: boolean
      description: >
        Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.
        
    - name: deploymentUri
      value: string
      description: >
        The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).
        
    - name: createTime
      value: string
      description: >
        Output only. The time the version was created.
        
    - name: lastUseTime
      value: string
      description: >
        Output only. The time the version was last used for prediction.
        
    - name: runtimeVersion
      value: string
      description: >
        Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).
        
    - name: machineType
      value: string
      description: >
        Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.
        
    - name: autoScaling
      value: object
      description: >
        Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes.
        
    - name: manualScaling
      value: object
      description: >
        Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.
        
    - name: state
      value: string
      description: >
        Output only. The state of a version.
        
      valid_values: ['UNKNOWN', 'READY', 'CREATING', 'FAILED', 'DELETING', 'UPDATING']
    - name: errorMessage
      value: string
      description: >
        Output only. The details of a failure or a cancellation.
        
    - name: predictionClass
      value: string
      description: >
        Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).
        
    - name: packageUris
      value: array
      description: >
        Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.
        
    - name: labels
      value: object
      description: >
        Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.
        
    - name: etag
      value: string
      description: >
        `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.
        
    - name: framework
      value: string
      description: >
        Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).
        
      valid_values: ['FRAMEWORK_UNSPECIFIED', 'TENSORFLOW', 'SCIKIT_LEARN', 'XGBOOST']
    - name: pythonVersion
      value: string
      description: >
        Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
        
    - name: acceleratorConfig
      value: object
      description: >
        Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
        
    - name: serviceAccount
      value: string
      description: >
        Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).
        
    - name: requestLoggingConfig
      value: object
      description: >
        Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version.
        
    - name: explanationConfig
      value: object
      description: >
        Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload.
        
    - name: container
      value: object
      description: >
        Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`.
        
    - name: routes
      value: object
      description: >
        Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json { "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" } ``` See RouteMap for more details about these default values.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_models_versions_patch"
    values={[
        { label: 'projects_models_versions_patch', value: 'projects_models_versions_patch' }
    ]}
>
<TabItem value="projects_models_versions_patch">

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

```sql
UPDATE google.ml.versions
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__isDefault = {{ isDefault }},
data__deploymentUri = '{{ deploymentUri }}',
data__createTime = '{{ createTime }}',
data__lastUseTime = '{{ lastUseTime }}',
data__runtimeVersion = '{{ runtimeVersion }}',
data__machineType = '{{ machineType }}',
data__autoScaling = '{{ autoScaling }}',
data__manualScaling = '{{ manualScaling }}',
data__state = '{{ state }}',
data__errorMessage = '{{ errorMessage }}',
data__predictionClass = '{{ predictionClass }}',
data__packageUris = '{{ packageUris }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__framework = '{{ framework }}',
data__pythonVersion = '{{ pythonVersion }}',
data__acceleratorConfig = '{{ acceleratorConfig }}',
data__serviceAccount = '{{ serviceAccount }}',
data__requestLoggingConfig = '{{ requestLoggingConfig }}',
data__explanationConfig = '{{ explanationConfig }}',
data__container = '{{ container }}',
data__routes = '{{ routes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND modelsId = '{{ modelsId }}' --required
AND versionsId = '{{ versionsId }}' --required
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
    defaultValue="projects_models_versions_delete"
    values={[
        { label: 'projects_models_versions_delete', value: 'projects_models_versions_delete' }
    ]}
>
<TabItem value="projects_models_versions_delete">

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

```sql
DELETE FROM google.ml.versions
WHERE projectsId = '{{ projectsId }}' --required
AND modelsId = '{{ modelsId }}' --required
AND versionsId = '{{ versionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_models_versions_set_default"
    values={[
        { label: 'projects_models_versions_set_default', value: 'projects_models_versions_set_default' }
    ]}
>
<TabItem value="projects_models_versions_set_default">

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

```sql
EXEC google.ml.versions.projects_models_versions_set_default 
@projectsId='{{ projectsId }}' --required, 
@modelsId='{{ modelsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
</Tabs>
