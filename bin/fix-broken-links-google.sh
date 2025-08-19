#!/bin/sh

# This script finds and replaces markdown links in specified files
# It converts links like:
# 1. [text](/compute/docs/path) to [text](https://cloud.google.com/compute/docs/path)
# 2. [text](/other-service/docs/path) to [text](https://cloud.google.com/other-service/docs/path)

# Set the path to the docs directory relative to the bin directory
DOCS_DIR="./website/google/docs"

# Function to process a file for multiple link patterns
process_file() {
    local file_path="$1"
    echo "Processing file: $file_path"
    
    # 1. Replace links like [text](/compute/docs/path) with [text](https://cloud.google.com/compute/docs/path)
    sed -i -E 's|\[([^]]+)\]\(/compute/docs([^)]*)\)|\[\1\](https://cloud.google.com/compute/docs\2)|g' "$file_path"
    
    # 2. Replace links to other Google Cloud services docs
    # Pattern: [text](/cdn/docs/path) to [text](https://cloud.google.com/cdn/docs/path)
    sed -i -E 's|\[([^]]+)\]\(/([^/)]+)/docs([^)]*)\)|\[\1\](https://cloud.google.com/\2/docs\3)|g' "$file_path"
    
    # 3. Replace links to AI Platform docs specifically
    sed -i -E 's|\[([^]]+)\]\(/ai-platform/prediction/docs([^)]*)\)|\[\1\](https://cloud.google.com/ai-platform/prediction/docs\2)|g' "$file_path"
    
    # 4. Replace links to specific services mentioned in the additional requirements
    sed -i -E 's|\[([^]]+)\]\(/domains/pricing([^)]*)\)|\[\1\](https://cloud.google.com/domains/pricing\2)|g' "$file_path"
    sed -i -E 's|\[([^]]+)\]\(/stackdriver/pricing([^)]*)\)|\[\1\](https://cloud.google.com/stackdriver/pricing\2)|g' "$file_path"
    
    # Check if any replacements were made
    if grep -q 'https://cloud.google.com/' "$file_path"; then
        echo "✓ Links updated in $file_path"
    else
        echo "- No matching links found in $file_path"
    fi
}

# Function to process character code replacements
process_char_code_replacements() {
    echo "Processing special character code replacements..."
    
    # Files that need [a-z] replaced with &#91;a-z&#93;
    process_char_codes "/compute/instance_group_managers/" "compute/instance_group_managers/index.md"
    process_char_codes "/compute/region_instance_group_managers/" "compute/region_instance_group_managers/index.md"
    process_char_codes "/networksecurity/gateway_security_policies/" "networksecurity/gateway_security_policies/index.md"
    process_char_codes "/networksecurity/rules/" "networksecurity/rules/index.md"
    process_char_codes "/networksecurity/tls_inspection_policies/" "networksecurity/tls_inspection_policies/index.md"
    process_char_codes "/networksecurity/url_lists/" "networksecurity/url_lists/index.md"
}

# Process character code replacements in a specific file
process_char_codes() {
    local source_path="$1"
    local file_path="$DOCS_DIR/$2"
    
    echo "Checking source path for character code replacements: $source_path"
    if [ -f "$file_path" ]; then
        echo "Processing character codes in file: $file_path"
        # Replace [a-z] with &#91;a-z&#93;
        # Using different delimiters to avoid escaping issues
        sed -i 's/\[a-z\]/\&#91;a-z\&#93;/g' "$file_path"
        echo "✓ Character codes replaced in $file_path"
    else
        echo "! File not found: $file_path"
    fi
}

# Process files based on the broken links list
process_broken_links() {
    # Process each file - using a simple list instead of associative array
    # Original compute docs links
    process_path "/aiplatform/persistent_resources/" "aiplatform/persistent_resources/index.md"
    process_path "/aiplatform/pipeline_jobs/" "aiplatform/pipeline_jobs/index.md"
    process_path "/compute/autoscalers/" "compute/autoscalers/index.md"
    process_path "/compute/disk_types/" "compute/disk_types/index.md"
    process_path "/compute/disks/" "compute/disks/index.md"
    process_path "/compute/global_operations/" "compute/global_operations/index.md"
    process_path "/compute/global_organization_operations/" "compute/global_organization_operations/index.md"
    process_path "/compute/health_checks/" "compute/health_checks/index.md"
    process_path "/compute/instance_templates/" "compute/instance_templates/index.md"
    process_path "/compute/projects/" "compute/projects/index.md"
    process_path "/compute/region_autoscalers/" "compute/region_autoscalers/index.md"
    process_path "/compute/region_disk_types/" "compute/region_disk_types/index.md"
    process_path "/compute/region_disks/" "compute/region_disks/index.md"
    process_path "/compute/region_health_checks/" "compute/region_health_checks/index.md"
    process_path "/compute/region_instance_templates/" "compute/region_instance_templates/index.md"
    process_path "/compute/region_operations/" "compute/region_operations/index.md"
    process_path "/compute/region_ssl_certificates/" "compute/region_ssl_certificates/index.md"
    process_path "/compute/region_target_http_proxies/" "compute/region_target_http_proxies/index.md"
    process_path "/compute/region_target_https_proxies/" "compute/region_target_https_proxies/index.md"
    process_path "/compute/region_url_maps/" "compute/region_url_maps/index.md"
    process_path "/compute/ssl_certificates/" "compute/ssl_certificates/index.md"
    process_path "/compute/target_http_proxies/" "compute/target_http_proxies/index.md"
    process_path "/compute/target_https_proxies/" "compute/target_https_proxies/index.md"
    process_path "/compute/url_maps/" "compute/url_maps/index.md"
    process_path "/compute/zone_operations/" "compute/zone_operations/index.md"
    process_path "/deploymentmanager/operations/" "deploymentmanager/operations/index.md"
    process_path "/managedidentities/domains/" "managedidentities/domains/index.md"
    process_path "/managedidentities/peerings/" "managedidentities/peerings/index.md"
    process_path "/memcache/instances/" "memcache/instances/index.md"
    process_path "/networksecurity/authz_policies/" "networksecurity/authz_policies/index.md"
    process_path "/networkservices/authz_extensions/" "networkservices/authz_extensions/index.md"
    process_path "/networkservices/wasm_plugins/" "networkservices/wasm_plugins/index.md"
    
    # Additional files with other link patterns
    process_path "/compute/url_maps/" "compute/url_maps/index.md"
    process_path "/datacatalog/entry_groups/" "datacatalog/entry_groups/index.md"
    process_path "/datalabeling/evaluation_jobs/" "datalabeling/evaluation_jobs/index.md"
    process_path "/domains/registrations/" "domains/registrations/index.md"
    process_path "/eventarc/triggers/" "eventarc/triggers/index.md"
    process_path "/ml/models/" "ml/models/index.md"
    process_path "/ml/versions/" "ml/versions/index.md"
    process_path "/recommendationengine/catalog_items/" "recommendationengine/catalog_items/index.md"
    process_path "/workflowexecutions/executions/" "workflowexecutions/executions/index.md"
    
    # Files for special character code replacements (also process for link replacements)
    process_path "/compute/instance_group_managers/" "compute/instance_group_managers/index.md"
    process_path "/compute/region_instance_group_managers/" "compute/region_instance_group_managers/index.md"
    process_path "/networksecurity/gateway_security_policies/" "networksecurity/gateway_security_policies/index.md"
    process_path "/networksecurity/rules/" "networksecurity/rules/index.md"
    process_path "/networksecurity/tls_inspection_policies/" "networksecurity/tls_inspection_policies/index.md"
    process_path "/networksecurity/url_lists/" "networksecurity/url_lists/index.md"
}

# Process a specific path
process_path() {
    local source_path="$1"
    local file_path="$DOCS_DIR/$2"
    
    echo "Checking source path: $source_path"
    if [ -f "$file_path" ]; then
        process_file "$file_path"
    else
        echo "! File not found: $file_path"
    fi
}

# Main execution
echo "=== Link Fixer Script ==="
echo "This script will replace markdown links and handle special character codes"

# Check if docs directory exists
if [ ! -d "$DOCS_DIR" ]; then
    echo "Error: Docs directory not found at $DOCS_DIR"
    echo "Please check the path or update the DOCS_DIR variable."
    exit 1
fi

# First process the broken links
process_broken_links

# Then process the special character code replacements
process_char_code_replacements

echo "=== Processing complete ==="