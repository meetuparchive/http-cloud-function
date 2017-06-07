GCP_PROJECT ?= {{ GCP_PROJECT }}
STAGE_BUCKET ?= {{ STAGE_BUCKET }}
FUNCTION_NAME ?= {{ FUNCTION_NAME }}
FUNCTION_MEMORY ?= {{ FUNCTION_MEMORY }}

deploy: __set-project __ensure-bucket __env __deploy-only ## Deploy function to production

test:
	@npm install
	@npm test

help:
	@echo Public targets:
	@grep -E '^[^_][^_][a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo "Private targets: (use at own risk)"
	@grep -E '^__[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[35m%-20s\033[0m %s\n", $$1, $$2}'

__deploy-only: ## Deploy function
	@gcloud beta functions \
	  deploy $(FUNCTION_NAME) \
		--stage-bucket $(STAGE_BUCKET) \
		--memory $(FUNCTION_MEMORY) \
		--trigger-http

__ensure-bucket: ## Create staging bucket if one does not already exist
	@(gsutil mb gs://$(STAGE_BUCKET) 2>/dev/null && echo "created bucket") || echo "bucket exists"

__set-project: ## Sets gcp project in context
	@gcloud config set project $(GCP_PROJECT)

__env: ## Create env file
	@envtpl < .env.tmpl > .env
