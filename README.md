# Docker Demo

Demo to show off docker and buildkit with some cat gifs.

## Build and Run

### Build your image

`docker build -t react-random-cat-gif-generator:dev .`

### Run your container

```shell
docker run -d \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    --name cats \
    react-random-cat-gif-generator:dev
```

### Build and run in one

`docker-compose up -d --build`

### Stopping your container

`docker stop <container name>`
or
`docker-compose stop <container name>`

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

To remove all images, containers, volumes, etc.
`docker system prune`

Credit to AnsariAbdullah for the react app.
