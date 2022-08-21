// const {createProxyMiddleware} = require('http-proxy-middleware')

// module.exports = app => {
//     app.use('/proxy',
//         createProxyMiddleware(
//             {
//                 target: 'http://localhost:7272',
//                 changeOrigin: true,
//             }
//         )
//     )
// }

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:7272",
      changeOrigin: true,
    })
  );
  app.use(
    "/ws-stomp",
    createProxyMiddleware({ target: "http://localhost:7272", ws: true })
  );
};