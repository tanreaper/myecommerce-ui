# Use the official Node.js image as base
FROM node:latest

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies including Axios
RUN npm install axios

# Install other dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
# RUN npm run build

# Install serve to serve the built app
# RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the app
CMD ["npm", "start"]
