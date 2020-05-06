import http from "http";
import mockserver from "mockserver";

const run = async () => {
    const server = http.createServer(mockserver('src/util/apiMocks/'));
    server.on('error', (e) => console.log(e));
    server.listen(8081);
}

module.exports.run = run