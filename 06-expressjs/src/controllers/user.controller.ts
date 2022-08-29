import { Request, Response, Router, urlencoded } from "express";
import User from "../models/user";
import HomeView from "../views/home";


export default new class UserController {
    readonly router = Router();

    constructor() {
        this.setupRoutes();
    }

    protected setupRoutes() {
        this.router.use(urlencoded({extended: true}));
        this.router.get('/index', this.all.bind(this));
        this.router.post('/', this.insert.bind(this));
        this.router.route('/:id')
            .get(this.get.bind(this))
    }

    async all(req: Request, res: Response) {
        try {
            const users = await User.all();
            const view = new HomeView(users.data);
            res.send(view.build());
        } catch (error) {
            res.status(500).send("Error: getting data");
        }
    }

    async get(req: Request, res: Response) {
        try {
            const user = await User.get(req.params.id);
            const view = new HomeView([user]);
            res.send(view.build());
        } catch (error) {
            res.status(500).send("Error: getting data");
        }
    }

    async insert(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                res.status(422).json({ message: "Fields are required" })
                return;
            }
            //add user
            await User.create(name, email);
        } catch (error) {

        }
        res.redirect("/user/index");
    }

}
