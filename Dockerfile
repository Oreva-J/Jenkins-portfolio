# Use official Node.js image
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
