# Docker Demo

Demo to show off docker and buildkit with some cat gifs.

## Buildkit

Either add this before building
`DOCKER_BUILDKIT=1`
or add this for docker-compose
`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1`

Or if you want to use buildkit indefinitely, add this to your daemon.json

```json
"features": {
    "buildkit": true
}
```
