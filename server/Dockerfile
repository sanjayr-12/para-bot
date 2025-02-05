FROM denoland/deno:latest

WORKDIR /app

COPY . .

EXPOSE 3000


CMD ["deno", "run", "--allow-net", "--allow-read", "server.ts"]
