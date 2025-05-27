# Use an official node image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the app
RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1
