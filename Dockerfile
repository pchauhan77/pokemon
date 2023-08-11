# From node:16

# WORKDIR /dist/main

# COPY Package*.json ./

# RUN npm install

# COPY . . 

# EXPOSE 3000

# CMD ["npm","start","dev"]


# Use the official Node.js image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# # Build the application
# RUN npm run build

# # Production image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /src

# Copy built files from the builder stage
# COPY --from=builder ./dist

# Expose the port your app is running on
EXPOSE 3000

# Start the app
# RUN npm run start
# ENTRYPOINT ["tail", "-f", "/dev/null"]

