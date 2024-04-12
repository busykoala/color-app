# Builder stage
FROM node:20 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runner stage
FROM node:20-slim
RUN useradd -m appuser
USER appuser
WORKDIR /usr/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
ENV BG_COLOR blue
CMD ["node", "dist/app.js"]
