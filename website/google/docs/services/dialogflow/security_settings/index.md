--- 
title: security_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - security_settings
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>security_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>security_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.security_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_security_settings_get"
    values={[
        { label: 'projects_locations_security_settings_get', value: 'projects_locations_security_settings_get' },
        { label: 'projects_locations_security_settings_list', value: 'projects_locations_security_settings_list' }
    ]}
>
<TabItem value="projects_locations_security_settings_get">

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
    <td>Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.</td>
</tr>
<tr>
    <td><CopyableCode code="audioExportSettings" /></td>
    <td><code>object</code></td>
    <td>Controls audio export settings for post-conversation analytics when ingesting audio to conversations via Participants.AnalyzeContent or Participants.StreamingAnalyzeContent. If retention_strategy is set to REMOVE_AFTER_CONVERSATION or audio_export_settings.gcs_bucket is empty, audio export is disabled. If audio export is enabled, audio is recorded and saved to audio_export_settings.gcs_bucket, subject to retention policy of audio_export_settings.gcs_bucket. This setting won't effect audio input for implicit sessions via Sessions.DetectIntent or Sessions.StreamingDetectIntent. (id: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyTemplate" /></td>
    <td><code>string</code></td>
    <td>[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the security settings, unique within the location.</td>
</tr>
<tr>
    <td><CopyableCode code="insightsExportSettings" /></td>
    <td><code>object</code></td>
    <td>Controls conversation exporting settings to Insights after conversation is completed. If retention_strategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here. (id: GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplate" /></td>
    <td><code>string</code></td>
    <td>[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeDataTypes" /></td>
    <td><code>array</code></td>
    <td>List of types of data to remove when retention settings triggers purge.</td>
</tr>
<tr>
    <td><CopyableCode code="redactionScope" /></td>
    <td><code>string</code></td>
    <td>Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.</td>
</tr>
<tr>
    <td><CopyableCode code="redactionStrategy" /></td>
    <td><code>string</code></td>
    <td>Strategy that defines how we do redaction.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the retention behavior defined by SecuritySettings.RetentionStrategy.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL. When data retention configuration is changed, it only applies to the data created after the change; the TTL of existing data created before the change stays intact.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_security_settings_list">

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
    <td>Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.</td>
</tr>
<tr>
    <td><CopyableCode code="audioExportSettings" /></td>
    <td><code>object</code></td>
    <td>Controls audio export settings for post-conversation analytics when ingesting audio to conversations via Participants.AnalyzeContent or Participants.StreamingAnalyzeContent. If retention_strategy is set to REMOVE_AFTER_CONVERSATION or audio_export_settings.gcs_bucket is empty, audio export is disabled. If audio export is enabled, audio is recorded and saved to audio_export_settings.gcs_bucket, subject to retention policy of audio_export_settings.gcs_bucket. This setting won't effect audio input for implicit sessions via Sessions.DetectIntent or Sessions.StreamingDetectIntent. (id: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="deidentifyTemplate" /></td>
    <td><code>string</code></td>
    <td>[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the security settings, unique within the location.</td>
</tr>
<tr>
    <td><CopyableCode code="insightsExportSettings" /></td>
    <td><code>object</code></td>
    <td>Controls conversation exporting settings to Insights after conversation is completed. If retention_strategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here. (id: GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplate" /></td>
    <td><code>string</code></td>
    <td>[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeDataTypes" /></td>
    <td><code>array</code></td>
    <td>List of types of data to remove when retention settings triggers purge.</td>
</tr>
<tr>
    <td><CopyableCode code="redactionScope" /></td>
    <td><code>string</code></td>
    <td>Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.</td>
</tr>
<tr>
    <td><CopyableCode code="redactionStrategy" /></td>
    <td><code>string</code></td>
    <td>Strategy that defines how we do redaction.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies the retention behavior defined by SecuritySettings.RetentionStrategy.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL. When data retention configuration is changed, it only applies to the data created after the change; the TTL of existing data created before the change stays intact.</td>
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
    <td><a href="#projects_locations_security_settings_get"><CopyableCode code="projects_locations_security_settings_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securitySettingsId"><code>securitySettingsId</code></a></td>
    <td></td>
    <td>Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_settings_list"><CopyableCode code="projects_locations_security_settings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all security settings in the specified location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_settings_create"><CopyableCode code="projects_locations_security_settings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create security settings in the specified location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_settings_patch"><CopyableCode code="projects_locations_security_settings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securitySettingsId"><code>securitySettingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified SecuritySettings.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_settings_delete"><CopyableCode code="projects_locations_security_settings_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securitySettingsId"><code>securitySettingsId</code></a></td>
    <td></td>
    <td>Deletes the specified SecuritySettings.</td>
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
<tr id="parameter-securitySettingsId">
    <td><CopyableCode code="securitySettingsId" /></td>
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
    defaultValue="projects_locations_security_settings_get"
    values={[
        { label: 'projects_locations_security_settings_get', value: 'projects_locations_security_settings_get' },
        { label: 'projects_locations_security_settings_list', value: 'projects_locations_security_settings_list' }
    ]}
>
<TabItem value="projects_locations_security_settings_get">

Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.

```sql
SELECT
name,
audioExportSettings,
deidentifyTemplate,
displayName,
insightsExportSettings,
inspectTemplate,
purgeDataTypes,
redactionScope,
redactionStrategy,
retentionStrategy,
retentionWindowDays
FROM google.dialogflow.security_settings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securitySettingsId = '{{ securitySettingsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_security_settings_list">

Returns the list of all security settings in the specified location.

```sql
SELECT
name,
audioExportSettings,
deidentifyTemplate,
displayName,
insightsExportSettings,
inspectTemplate,
purgeDataTypes,
redactionScope,
redactionStrategy,
retentionStrategy,
retentionWindowDays
FROM google.dialogflow.security_settings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_security_settings_create"
    values={[
        { label: 'projects_locations_security_settings_create', value: 'projects_locations_security_settings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_security_settings_create">

Create security settings in the specified location.

```sql
INSERT INTO google.dialogflow.security_settings (
data__name,
data__displayName,
data__redactionStrategy,
data__redactionScope,
data__inspectTemplate,
data__deidentifyTemplate,
data__retentionWindowDays,
data__retentionStrategy,
data__purgeDataTypes,
data__audioExportSettings,
data__insightsExportSettings,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ redactionStrategy }}',
'{{ redactionScope }}',
'{{ inspectTemplate }}',
'{{ deidentifyTemplate }}',
{{ retentionWindowDays }},
'{{ retentionStrategy }}',
'{{ purgeDataTypes }}',
'{{ audioExportSettings }}',
'{{ insightsExportSettings }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
audioExportSettings,
deidentifyTemplate,
displayName,
insightsExportSettings,
inspectTemplate,
purgeDataTypes,
redactionScope,
redactionStrategy,
retentionStrategy,
retentionWindowDays
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: security_settings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the security_settings resource.
    - name: locationsId
      value: string
      description: Required parameter for the security_settings resource.
    - name: name
      value: string
      description: >
        Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the security settings, unique within the location.
        
    - name: redactionStrategy
      value: string
      description: >
        Strategy that defines how we do redaction.
        
      valid_values: ['REDACTION_STRATEGY_UNSPECIFIED', 'REDACT_WITH_SERVICE']
    - name: redactionScope
      value: string
      description: >
        Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.
        
      valid_values: ['REDACTION_SCOPE_UNSPECIFIED', 'REDACT_DISK_STORAGE']
    - name: inspectTemplate
      value: string
      description: >
        [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`.
        
    - name: deidentifyTemplate
      value: string
      description: >
        [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`.
        
    - name: retentionWindowDays
      value: integer
      description: >
        Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL. When data retention configuration is changed, it only applies to the data created after the change; the TTL of existing data created before the change stays intact.
        
    - name: retentionStrategy
      value: string
      description: >
        Specifies the retention behavior defined by SecuritySettings.RetentionStrategy.
        
      valid_values: ['RETENTION_STRATEGY_UNSPECIFIED', 'REMOVE_AFTER_CONVERSATION']
    - name: purgeDataTypes
      value: array
      description: >
        List of types of data to remove when retention settings triggers purge.
        
    - name: audioExportSettings
      value: object
      description: >
        Controls audio export settings for post-conversation analytics when ingesting audio to conversations via Participants.AnalyzeContent or Participants.StreamingAnalyzeContent. If retention_strategy is set to REMOVE_AFTER_CONVERSATION or audio_export_settings.gcs_bucket is empty, audio export is disabled. If audio export is enabled, audio is recorded and saved to audio_export_settings.gcs_bucket, subject to retention policy of audio_export_settings.gcs_bucket. This setting won't effect audio input for implicit sessions via Sessions.DetectIntent or Sessions.StreamingDetectIntent.
        
    - name: insightsExportSettings
      value: object
      description: >
        Controls conversation exporting settings to Insights after conversation is completed. If retention_strategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_security_settings_patch"
    values={[
        { label: 'projects_locations_security_settings_patch', value: 'projects_locations_security_settings_patch' }
    ]}
>
<TabItem value="projects_locations_security_settings_patch">

Updates the specified SecuritySettings.

```sql
UPDATE google.dialogflow.security_settings
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__redactionStrategy = '{{ redactionStrategy }}',
data__redactionScope = '{{ redactionScope }}',
data__inspectTemplate = '{{ inspectTemplate }}',
data__deidentifyTemplate = '{{ deidentifyTemplate }}',
data__retentionWindowDays = {{ retentionWindowDays }},
data__retentionStrategy = '{{ retentionStrategy }}',
data__purgeDataTypes = '{{ purgeDataTypes }}',
data__audioExportSettings = '{{ audioExportSettings }}',
data__insightsExportSettings = '{{ insightsExportSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securitySettingsId = '{{ securitySettingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
audioExportSettings,
deidentifyTemplate,
displayName,
insightsExportSettings,
inspectTemplate,
purgeDataTypes,
redactionScope,
redactionStrategy,
retentionStrategy,
retentionWindowDays;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_security_settings_delete"
    values={[
        { label: 'projects_locations_security_settings_delete', value: 'projects_locations_security_settings_delete' }
    ]}
>
<TabItem value="projects_locations_security_settings_delete">

Deletes the specified SecuritySettings.

```sql
DELETE FROM google.dialogflow.security_settings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securitySettingsId = '{{ securitySettingsId }}' --required;
```
</TabItem>
</Tabs>
