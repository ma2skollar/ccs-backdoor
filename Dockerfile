# Small, fast base image
FROM node:20-alpine

WORKDIR /usr/src/app

# Install only what's needed
COPY package*.json ./
RUN npm ci --only=production

# Bring in the rest of the app
COPY . .

# The app usually listens on 3000 (change if yours differs)
EXPOSE 3000

# Uses "npm start" -> "node app.js"
CMD ["npm", "start"]
