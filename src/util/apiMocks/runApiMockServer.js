import http from "http";
import mockserver from "mockserver";

http.createServer(mockserver('src/util/apiMocks/')).listen(8081);