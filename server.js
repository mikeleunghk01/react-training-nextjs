const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/customRoute", (req, res) => {
      return app.render(req, res, "/index", {
        injectedValue: "next js is hard"
      });
    });

    server.get("*", (req, res) => {
      if (!req.path.includes("_next")) {
        console.log("Not HMR stuff", req.path);
      }

      if (req.path === "/about") {
        console.log("This is About Page");
      }

      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
