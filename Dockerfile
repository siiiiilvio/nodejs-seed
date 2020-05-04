# Use Node v8.12 as the base image.
FROM node:8.12

# Set as working directory
WORKDIR /usr/src/app

# Copy package.json so we can install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code over to working directory
COPY . .

EXPOSE 1111

# Run the build.
CMD ["npm", "start"]
