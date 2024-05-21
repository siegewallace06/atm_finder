# Stage 1: Build the application
FROM node:20.9.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Create the production-ready image
FROM node:20.9.0-alpine AS production

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/package.json /usr/src/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY --from=builder /usr/src/app/dist ./dist

USER node

CMD [ "yarn", "start:dev" ]
# Nothing is True, Everything is Permitted III