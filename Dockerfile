# pull official base image
FROM node:13.12.0-alpine

RUN COMPOSE_DOCKER_CLI_BUILD=1 
RUN DOCKER_BUILDKIT=1

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN apk --no-cache --virtual build-dependencies add \
    python
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]