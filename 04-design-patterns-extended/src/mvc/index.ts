import { createServer } from "http";
import UserController from "./controllers/user.controller";

const http = createServer();
http.on("request", (req, res) => {
    console.log(req.url);
    if (req.url === "/" || req.url?.includes('user')) {
        new UserController(req, res)
    }
})


http.listen(3000);
