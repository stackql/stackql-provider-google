#!/bin/sh

# This script finds and replaces markdown links in specified files
# It converts links like:
# 1. [text](/compute/docs/path) to [text](https://cloud.google.com/compute/docs/path)
# 2. [text](/other-service/docs/path) to [text](https://cloud.google.com/other-service/docs/path)

# Main execution
echo "=== Link Fixer Script ==="
echo "This script will replace markdown links and handle special character codes"

# Other replacements
sed -i 's|\[`PostalAddress`\](/my-business/reference/rest/v4/PostalAddress)|\[`PostalAddress`\](https://developers.google.com/my-business/reference/rest/v4/PostalAddress)|g' "website/googleadmin/docs/services/directory/buildings/index.md"

echo "=== Processing complete ==="