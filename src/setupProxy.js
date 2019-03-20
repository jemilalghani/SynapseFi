const proxy = require("http-proxy-middleware");
require("dotenv").config();

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://[::1]" + process.env.PORT || 4000,
      secure: false,
      changeOrigin: true
    })
  );
};
