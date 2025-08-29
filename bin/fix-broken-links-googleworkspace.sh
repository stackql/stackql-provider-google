#!/bin/sh

# This script finds and replaces markdown links in specified files
# It converts links like:
# 1. [text](/compute/docs/path) to [text](https://cloud.google.com/compute/docs/path)
# 2. [text](/other-service/docs/path) to [text](https://cloud.google.com/other-service/docs/path)

# Main execution
echo "=== Link Fixer Script ==="
echo "This script will replace markdown links and handle special character codes"

# Other replacements
sed -i 's|\[Search for shared drives\](/workspace/drive/api/guides/search-shareddrives)|\[Search for shared drives\](https://developers.google.com/workspace/drive/api/guides/search-shareddrives)|g' "website/googleworkspace/docs/services/drivev2/drives/index.md"
sed -i 's|\[`files.export`\](/workspace/drive/api/reference/rest/v2/files/export)|\[`files.export`\](https://developers.google.com/workspace/drive/api/reference/rest/v2/files/export)|g' "website/googleworkspace/docs/services/drivev2/files/index.md"
sed -i 's|(/workspace/drive/api/guides/manage-downloads)|(https://developers.google.com/workspace/drive/api/guides/manage-downloads)|g' "website/googleworkspace/docs/services/drivev2/files/index.md"
sed -i 's|(/workspace/drive/api/guides/search-files)|(https://developers.google.com/workspace/drive/api/guides/search-files)|g' "website/googleworkspace/docs/services/drivev2/files/index.md"
sed -i 's|(/workspace/drive/api/guides/manage-uploads)|(https://developers.google.com/workspace/drive/api/guides/manage-uploads)|g' "website/googleworkspace/docs/services/drivev2/files/index.md"
sed -i 's|(/workspace/drive/api/guides/search-shareddrives)|(https://developers.google.com/workspace/drive/api/guides/search-shareddrives)|g' "website/googleworkspace/docs/services/drivev3/drives/index.md"
sed -i 's|\[`files.export`\](/workspace/drive/api/reference/rest/v3/files/export)|\[`files.export`\](https://developers.google.com/workspace/drive/api/reference/rest/v2/files/export)|g' "website/googleworkspace/docs/services/drivev3/files/index.md"
sed -i 's|(/workspace/drive/api/guides/manage-downloads)|(https://developers.google.com/workspace/drive/api/guides/manage-downloads)|g' "website/googleworkspace/docs/services/drivev3/files/index.md"
sed -i 's|(/workspace/drive/api/guides/search-files)|(https://developers.google.com/workspace/drive/api/guides/search-files)|g' "website/googleworkspace/docs/services/drivev3/files/index.md"
sed -i 's|(/workspace/drive/api/guides/manage-uploads)|(https://developers.google.com/workspace/drive/api/guides/manage-uploads)|g' "website/googleworkspace/docs/services/drivev3/files/index.md"

echo "=== Processing complete ==="