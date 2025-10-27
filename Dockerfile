# --- Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Runtime Stage ---
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm install --omit=dev

ENV PORT=3000
EXPOSE 3000

CMD ["node", "build"]
