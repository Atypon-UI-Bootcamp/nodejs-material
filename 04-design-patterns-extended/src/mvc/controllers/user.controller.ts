import { IncomingMessage, ServerResponse } from "http";
import { URLSearchParams } from "url";
import User from "../models/user";
import HomeView from "../views/home";


export default class UserController {
    constructor(
        private readonly request: IncomingMessage,
        private readonly response: ServerResponse
    ) {
        this.handleRequest();
    }

    handleRequest() {
        if (this.request.url === '/') {
            this.users();
        } else if (this.request.url?.includes("create")) {
            this.create();
        }
    }

    async users() {
        try {
            const users = await User.all();
            const view = new HomeView(users.data);
            this.response.setHeader('Content-Type', "text/html");
            this.response.write(view.build());
        } catch (error) {
            console.log(error);
            this.response.writeHead(500,);
        }
        this.response.end();
    }

    async create() {
        if (this.request.method !== "POST") {
            this.response.writeHead(405, { "Content-Type": "application/json" });
            this.response.end(JSON.stringify({ message: "Method not allowed" }));
            return;
        }

        const params = await this.parseParams();
        const name = params.get("name");
        const email = params.get("email");
        if (!name || !email) {
            this.response.writeHead(422, { "Content-Type": "application/json" });
            this.response.end(JSON.stringify({ message: "Fields are required" }));
            return;
        }
        //add user
        await User.create(name, email);
        this.response.writeHead(302, {
            'Location': '/'
        });
        this.response.end();
    }

    protected parseParams(): Promise<URLSearchParams> {
        return new Promise((resolve, reject) => {
            let buffer: any[] = [];
            this.request.on("data", (chunk) => {
                buffer.push(chunk);
            });

            this.request.on("end", () => {
                const data = Buffer.concat(buffer).toString();
                const params = new URLSearchParams(data);
                resolve(params);
            });
        })
    }

}