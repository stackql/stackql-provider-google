#!/bin/sh

# This script finds and replaces markdown links in specified files
# It converts links like:
# 1. [text](/compute/docs/path) to [text](https://cloud.google.com/compute/docs/path)
# 2. [text](/other-service/docs/path) to [text](https://cloud.google.com/other-service/docs/path)

# Main execution
echo "=== Link Fixer Script ==="
echo "This script will replace markdown links and handle special character codes"

sed -i 's|(../../v1beta1/projects/addGoogleAnalytics)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addGoogleAnalytics)|g' "website/firebase/docs/services/firebase/analytics/index.md"
sed -i 's|(../projects.androidApps#AndroidApp.FIELDS.app_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#resource:-androidapp)|g' "website/firebase/docs/services/firebase/android_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.androidApps/getConfig)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps/getConfig)|g' "website/firebase/docs/services/firebase/android_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.androidApps/create)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps/create)|g' "website/firebase/docs/services/firebase/android_apps/index.md"
sed -i 's|(../../v1beta1/operations)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations)|g' "website/firebase/docs/services/firebase/default_location/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.response)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.response)|g' "website/firebase/docs/services/firebase/default_location/index.md"
sed -i 's|(../../v1beta1/operations)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations)|g' "website/firebase/docs/services/firebase/firebase/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.done)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.done)|g' "website/firebase/docs/services/firebase/firebase/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.response)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.response)|g' "website/firebase/docs/services/firebase/firebase/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.error)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.error)|g' "website/firebase/docs/services/firebase/firebase/index.md"
sed -i 's|(../../v1beta1/operations)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations)|g' "website/firebase/docs/services/firebase/google_analytics/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.done)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.done)|g' "website/firebase/docs/services/firebase/google_analytics/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.response)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.response)|g' "website/firebase/docs/services/firebase/google_analytics/index.md"
sed -i 's|(../../v1beta1/operations#Operation.FIELDS.error)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/operations#Operation.FIELDS.error)|g' "website/firebase/docs/services/firebase/google_analytics/index.md"
sed -i 's|(../../v1beta1/projects/addFirebase)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addFirebase)|g' "website/firebase/docs/services/firebase/google_analytics/index.md"
sed -i 's|(../projects.iosApps#IosApp.FIELDS.app_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id)|g' "website/firebase/docs/services/firebase/ios_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.iosApps/getConfig)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps/getConfig)|g' "website/firebase/docs/services/firebase/ios_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.iosApps/create)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps/create)|g' "website/firebase/docs/services/firebase/ios_apps/index.md"
sed -i 's|(../projects.webApps#WebApp.FIELDS.api_key_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.api_key_id)|g' "website/firebase/docs/services/firebase/web_apps_config/index.md"
sed -i 's|(../../v1beta1/projects/addGoogleAnalytics)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addGoogleAnalytics)|g' "website/firebase/docs/services/firebase/web_apps_config/index.md"
sed -i 's|(../projects.webApps#WebApp.FIELDS.app_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)|g' "website/firebase/docs/services/firebase/web_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.webApps/getConfig)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps/getConfig)|g' "website/firebase/docs/services/firebase/web_apps/index.md"
sed -i 's|(../../rest/v1beta1/projects.webApps/create)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps/create)|g' "website/firebase/docs/services/firebase/web_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_number)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)|g' "website/firebase/docs/services/firebase/android_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id)|g' "website/firebase/docs/services/firebase/android_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.name)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.name)|g' "website/firebase/docs/services/firebase/available_projects/index.md"
sed -i 's|(#body.request_body.FIELDS.location_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.defaultLocation/finalize)|g' "website/firebase/docs/services/firebase/default_location/index.md"
sed -i 's|(#request-body)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.defaultLocation/finalize)|g' "website/firebase/docs/services/firebase/default_location/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_number)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)|g' "website/firebase/docs/services/firebase/ios_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id)|g' "website/firebase/docs/services/firebase/ios_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_number)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)|g' "website/firebase/docs/services/firebase/projects/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id)|g' "website/firebase/docs/services/firebase/projects/index.md"
sed -i 's|(#query-parameters)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/list#query-parameters)|g' "website/firebase/docs/services/firebase/projects/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_number)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)|g' "website/firebase/docs/services/firebase/web_apps/index.md"
sed -i 's|(../projects#FirebaseProject.FIELDS.project_id)|(https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id)|g' "website/firebase/docs/services/firebase/web_apps/index.md"












echo "=== Processing complete ==="