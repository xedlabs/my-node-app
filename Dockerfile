FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
