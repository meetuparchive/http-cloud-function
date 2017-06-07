# http-cloud-function

> a [porteurbars](https://github.com/softprops/porteurbars) template for generating http triggered google cloud functions, bootstrapped for travis integration for continuous git push based deployments

## usage

The following should promote you for the following values

```bash
$ porteurbars meetup/http-cloud-function
```

| Name            | Default value | Description                                               |
|-----------------|---------------|-----------------------------------------------------------|
| GCP_PROJECT     | ai-blt        | name of google cloud platform project                     |
| STAGE_BUCKET    | func_town     | name of google storage bucket to store staged coded under |
| FUNCTION_NAME   | func_town     | name of exported function to deploy                       |
| FUNCTION_MEMORY | 128MB         | amount of memory to allocation in deployments             |


`GCP_PROJECT` Name must start with a letter followed by up to 47 letters, numbers, or hyphens, and cannot end with a hyphen.

`FUNCTION_MEMORY` values must be one of `28MB`, `256MB`, `512MB`, `1024MB` and `2048MB`.

## impress your friends

```bash
$ porteurbars meetup/http-cloud-function && make deploy
```
