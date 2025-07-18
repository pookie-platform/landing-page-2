# Stage 1: Build the app
FROM node:20 AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy lockfile and install deps
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Copy rest of the app
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
