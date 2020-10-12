const express = require("express");
const PORT = 3233;
const server = express();
server.use(express.json());

server.use("/", require("./Route"));

server.listen(PORT, () => {
  console.log(`Ready for service`);
});
