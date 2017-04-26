GCP_PROJECT ?= {{ GCP_PROJECT }}

__set-project: ## Sets gcp project in context
	@gcloud config set project $(GCP_PROJECT)

__secrets: ## Create secrets files
	envtpl < secrets.yaml.tmpl > secrets.yaml

__deploy-only: ## Deploy function
	gcloud beta functions \
	  deploy {{ FUNCTION_NAME }} \
		--stage-bucket {{ STAGE_BUCKET }} \
		--trigger-http

deploy: __set-project __secrets __deploy-only ## Deploy function to production

help:
	@echo Public targets:
	@grep -E '^[^_][^_][a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo "Private targets: (use at own risk)"
	@grep -E '^__[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[35m%-20s\033[0m %s\n", $$1, $$2}'
