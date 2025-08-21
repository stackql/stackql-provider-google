#!/usr/bin/env bash

# bash bin/generate-stackql-routes-csv.sh --services-dir ./openapi/src/googleapis.com/v00.00.00000/services --output-dir ./

# Exit on error
set -e

# Get the script directory for relative paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Default values
SERVICES_DIR="$REPO_ROOT/openapi/src/services"
OUTPUT_DIR="$REPO_ROOT/output"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --services-dir)
      SERVICES_DIR="$2"
      shift 2
      ;;
    --output-dir)
      OUTPUT_DIR="$2"
      shift 2
      ;;
    --help)
      echo "Usage: generate-stackql-routes-csv.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --services-dir DIR       Directory containing service YAML files (default: $SERVICES_DIR)"
      echo "  --output-dir DIR         Output directory for CSV file (default: $OUTPUT_DIR)"
      echo "  --help                   Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Ensure required directories exist
if [ ! -d "$SERVICES_DIR" ]; then
  echo "❌ Services directory not found: $SERVICES_DIR"
  exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "🔍 Processing StackQL services from: $SERVICES_DIR"
echo "📊 CSV will be generated in: $OUTPUT_DIR"

# Check if required dependencies are installed
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is required but not installed"
  exit 1
fi

# Verify the JS script exists
JS_SCRIPT="$SCRIPT_DIR/generate-stackql-routes-csv.cjs"
if [ ! -f "$JS_SCRIPT" ]; then
  echo "❌ JavaScript script not found: $JS_SCRIPT"
  exit 1
fi

# Check for required node modules
if ! node -e "require('js-yaml'); require('csv-writer');" &> /dev/null; then
  echo "⚙️ Installing required Node.js dependencies..."
  npm install --no-save js-yaml csv-writer
fi

echo "🚀 Generating StackQL routes CSV..."

# Run the Node.js script with arguments
node "$JS_SCRIPT" "$SERVICES_DIR" "$OUTPUT_DIR"

# Check if command succeeded
if [ $? -ne 0 ]; then
    echo "❌ CSV generation failed"
    exit 1
fi

echo "✅ CSV generated successfully at $OUTPUT_DIR/stackql-resources.csv"
echo "📝 Total services processed: $(ls -1 "$SERVICES_DIR"/*.y*ml 2>/dev/null | wc -l | tr -d ' ')"