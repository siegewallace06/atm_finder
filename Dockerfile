# Base image
FROM node:20.9.0-alpine

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN yarn config set npmAuthToken ${NPM_TOKEN}

WORKDIR /app

# Copy configuration files
COPY tsconfig*.json ./
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy application sources (.ts, .tsx, js)
COPY src/ src/

# Expose application port
EXPOSE 3000

# Start application in development mode
CMD [ "yarn", "start:dev" ]
