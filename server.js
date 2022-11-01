const data = require("./db.js");
const cors=require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.db=router.db;
server.use(cors({
    credentials: true,
    origin: "https://gi-plus.vercel.app"
}));
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);