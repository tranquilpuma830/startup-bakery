FROM tarampampam/node:10.15-alpine as buildContainer

COPY package.json yarn.lock /app/
WORKDIR /app

RUN npm i -g yarn
RUN yarn

COPY . /app

ENV NODE_ENV=production

RUN yarn build

FROM kryptokoder/mypdfsigner:latest

ENV PORT=5000

RUN apt-get update

ENV NODE_VERSION=12.6.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

RUN node -v

WORKDIR /app

# Get all the code needed to run the app
COPY --from=buildContainer /app /app

COPY --from=buildContainer /app/node_modules /app/node_modules

# Expose the port the app runs in
EXPOSE $PORT

# Serve the app
CMD ["npm", "run", "start"]
