# Building layer
FROM node:20.9.0-alpine as development

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

# Build application (produces dist/ folder)
RUN yarn build

# Runtime (production) layer
FROM node:20.9.0-alpine as production

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN yarn config set npmAuthToken ${NPM_TOKEN}

WORKDIR /app

# Copy dependencies files
COPY package.json yarn.lock ./

# Install runtime dependencies using Yarn (without dev/test dependencies)
RUN yarn install --frozen-lockfile --production

# Copy production build
COPY --from=development /app/dist/ ./dist/

# Expose application port
EXPOSE 3000

# Start application
CMD [ "node", "dist/main.js" ]
