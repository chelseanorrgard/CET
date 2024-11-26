# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite app
RUN npm run build

# Use a lightweight web server to serve the static files (e.g., nginx or a Node.js server)
# For simplicity, serve using a basic Node.js HTTP server
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to start the app in production mode
CMD ["serve", "-s", "dist"]
