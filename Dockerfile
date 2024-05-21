FROM node:20.9.0-alpine

WORKDIR /app

# Copy configuration files and dependencies files
COPY package.json yarn.lock ./
COPY tsconfig*.json ./

# Install dependencies
RUN yarn install

# Copy application sources
COPY . .

# Expose application port
EXPOSE 3000

# Start application in development mode
CMD ["yarn", "start:dev"]
