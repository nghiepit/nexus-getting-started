# stage 1 building the code
FROM node:latest as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build
RUN yarn install --production


# stage 2
FROM node:slim as production

LABEL maintainer="Nghiep <me@nghiepit.dev>"

WORKDIR /usr/src/app

ARG PORT=4000

ENV NODE_ENV production
ENV PORT $PORT

COPY package.json yarn.lock tsconfig.json registerPath.js ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.nexus ./.nexus

EXPOSE $PORT

ENTRYPOINT ["yarn", "start"]
