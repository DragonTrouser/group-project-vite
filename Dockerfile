# Dockerfile
# Use official Node.js Alpine image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Install dependencies
# Copy package.json and package-lock.json (if exists) first for caching
COPY package*.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Command to run dev server on all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]