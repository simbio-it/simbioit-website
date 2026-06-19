# --- Build stage: compila o site (Vite) ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Runtime stage: só o servidor + o build estático ---
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server ./server
COPY --from=build /app/dist ./dist

EXPOSE 3001
CMD ["node", "server/index.js"]
