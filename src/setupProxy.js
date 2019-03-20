const proxy = require("http-proxy-middleware");
require("dotenv").config();

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://localhost:" + process.env.PORT || 4000,
      secure: false,
      changeOrigin: true
    })
  );
};
