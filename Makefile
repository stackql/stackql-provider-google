# StackQL google provider family - build, test and docs pipeline
#
# Providers: google (googleapis.com), googleworkspace, googleadmin, firebase
#
# Typical usage:
#   make all                # install, generate all providers, test, smoke test, build docs
#   make generate-google    # regenerate a single provider from the latest discovery docs
#   make smoke-test         # end-to-end CRUD/lifecycle test against GCP (local provider)
#   make smoke-test-live    # same, against the latest provider in the hosted registry
#
# Requirements:
#   - node/npm and yarn on the PATH
#   - stackql on the PATH (smoke tests)
#   - GOOGLE_CREDENTIALS set to a service account key JSON (smoke tests)
#   - stackql-provider-tests cloned as a sibling (metadata tests; WSL is used on Windows)

SHELL := sh
SOURCE_PROJECT ?= https://github.com/stackql-registry/stackql-provider-google

.PHONY: all install generate test smoke-test smoke-test-live docs docs-build clean \
	generate-google generate-googleworkspace generate-googleadmin generate-firebase \
	test-google test-googleworkspace test-googleadmin test-firebase \
	docs-google docs-googleworkspace docs-googleadmin docs-firebase \
	docs-build-google docs-build-googleworkspace docs-build-googleadmin docs-build-firebase \
	docs-serve-google docs-serve-googleworkspace docs-serve-googleadmin docs-serve-firebase

all: install generate test smoke-test docs docs-build

# ---------------------------------------------------------------------------
# install
# ---------------------------------------------------------------------------

install:
	npm install

# ---------------------------------------------------------------------------
# generate OpenAPI specs + StackQL provider extensions from discovery docs
# ---------------------------------------------------------------------------

generate: generate-google generate-googleworkspace generate-googleadmin generate-firebase

generate-google:
	node bin/google-discovery-to-openapi.mjs generate googleapis.com

generate-googleworkspace:
	node bin/google-discovery-to-openapi.mjs generate googleworkspace

generate-googleadmin:
	node bin/google-discovery-to-openapi.mjs generate googleadmin

generate-firebase:
	node bin/google-discovery-to-openapi.mjs generate firebase

# ---------------------------------------------------------------------------
# provider metadata tests (SHOW/DESCRIBE/SHOW INSERT over every resource)
# ---------------------------------------------------------------------------

test: test-google test-googleworkspace test-googleadmin test-firebase

test-google:
	sh test/run-provider-tests.sh google

test-googleworkspace:
	sh test/run-provider-tests.sh googleworkspace

test-googleadmin:
	sh test/run-provider-tests.sh googleadmin

test-firebase:
	sh test/run-provider-tests.sh firebase

# ---------------------------------------------------------------------------
# end-to-end smoke tests against GCP (google provider only)
# creates/observes/mutates/deletes a VPC, subnet, VM and a GCS bucket
# ---------------------------------------------------------------------------

smoke-test:
	node test/smoke-test-google.js

smoke-test-live:
	node test/smoke-test-google.js --live

# ---------------------------------------------------------------------------
# docusaurus microsite docs
# ---------------------------------------------------------------------------

docs: docs-google docs-googleworkspace docs-googleadmin docs-firebase

docs-google:
	rm -rf website/google/docs/*
	node --max-old-space-size=4096 bin/generate-docs.mjs \
	  --provider-name google \
	  --provider-dir ./openapi/src/googleapis.com/v00.00.00000 \
	  --output-dir ./website/google \
	  --provider-data-dir ./docgen/provider-data/google \
	  --source-project $(SOURCE_PROJECT)
	sh bin/fix-broken-links-google.sh
	node bin/fix-mdx-braces.mjs website/google/docs
	node bin/verify-mdx.mjs website/google/docs

docs-googleworkspace:
	rm -rf website/googleworkspace/docs/*
	node --max-old-space-size=4096 bin/generate-docs.mjs \
	  --provider-name googleworkspace \
	  --provider-dir ./openapi/src/googleworkspace/v00.00.00000 \
	  --output-dir ./website/googleworkspace \
	  --provider-data-dir ./docgen/provider-data/googleworkspace \
	  --source-project $(SOURCE_PROJECT)
	sh bin/fix-broken-links-googleworkspace.sh
	node bin/fix-mdx-braces.mjs website/googleworkspace/docs
	node bin/verify-mdx.mjs website/googleworkspace/docs

docs-googleadmin:
	rm -rf website/googleadmin/docs/*
	node --max-old-space-size=4096 bin/generate-docs.mjs \
	  --provider-name googleadmin \
	  --provider-dir ./openapi/src/googleadmin/v00.00.00000 \
	  --output-dir ./website/googleadmin \
	  --provider-data-dir ./docgen/provider-data/googleadmin \
	  --source-project $(SOURCE_PROJECT)
	sh bin/fix-broken-links-googleadmin.sh
	node bin/fix-mdx-braces.mjs website/googleadmin/docs
	node bin/verify-mdx.mjs website/googleadmin/docs

docs-firebase:
	rm -rf website/firebase/docs/*
	node --max-old-space-size=4096 bin/generate-docs.mjs \
	  --provider-name firebase \
	  --provider-dir ./openapi/src/firebase/v00.00.00000 \
	  --output-dir ./website/firebase \
	  --provider-data-dir ./docgen/provider-data/firebase \
	  --source-project $(SOURCE_PROJECT)
	sh bin/fix-broken-links-firebase.sh
	node bin/fix-mdx-braces.mjs website/firebase/docs
	node bin/verify-mdx.mjs website/firebase/docs

docs-build: docs-build-google docs-build-googleworkspace docs-build-googleadmin docs-build-firebase

docs-build-google:
	cd website/google && yarn install --silent && yarn build

docs-build-googleworkspace:
	cd website/googleworkspace && yarn install --silent && yarn build

docs-build-googleadmin:
	cd website/googleadmin && yarn install --silent && yarn build

docs-build-firebase:
	cd website/firebase && yarn install --silent && yarn build

docs-serve-google:
	cd website/google && yarn start

docs-serve-googleworkspace:
	cd website/googleworkspace && yarn start

docs-serve-googleadmin:
	cd website/googleadmin && yarn start

docs-serve-firebase:
	cd website/firebase && yarn start

# ---------------------------------------------------------------------------
# clean
# ---------------------------------------------------------------------------

clean:
	rm -rf openapi/src website/google/build website/googleworkspace/build website/googleadmin/build website/firebase/build test/.stackql
