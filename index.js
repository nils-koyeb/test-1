import http from "node:http";

const port = Number(process.env.PORT);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("okay");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
