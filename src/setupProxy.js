/* eslint-disable @typescript-eslint/no-var-requires */
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        proxy({
            target: "http://192.168.31.251:5212",
            changeOrigin: true,
        })
    );

    app.use(
        "/custom",
        proxy({
            target: "http://192.168.31.251:5212",
            changeOrigin: true,
        })
    );
};
