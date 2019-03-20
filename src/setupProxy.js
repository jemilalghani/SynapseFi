const proxy = require("http-proxy-middleware");
require("dotenv").config();

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:" + process.env.PORT || 5000,
      secure: false,
      changeOrigin: true
    })
  );
};
