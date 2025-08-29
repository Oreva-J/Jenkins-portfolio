FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Next.js production files
RUN npm run build

# Stage 2: Run with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy Next.js output
COPY --from=builder /app/out . 

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]