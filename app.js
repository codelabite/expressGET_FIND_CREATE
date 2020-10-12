const http = require("http");
const PORT = 3210;

const data = [
  { id: 1, name: "Osas" },
  { id: 2, name: "Ndidi" },
  { id: 3, name: "Ola" },
];

const app = http.createServer((req, res) => {
  console.log("Testing out this Server");
  const { method, url } = req;
  let status = 404;
  let response = {
    success: false,
    data: null,
  };

  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);

      res.writeHead(status, { "Content-Type": "application/json" });

      if (method === "GET" && url === "/") {
        status = 200;
        (TotalEntry = data.length),
          (response.success = true),
          (response.data = data);
      } else if (method === "POST" && url === "/") {
        const { id, name } = JSON.parse(body);
        data.push({ id, name });

        status = 200;
        (TotalEntry = data.length),
          (response.success = true),
          (response.data = data);
      }

      res.write(JSON.stringify(response));
      res.end();
    });
});

app.listen(PORT, () => {
  console.log(`Port has now open ${PORT}`);
});
