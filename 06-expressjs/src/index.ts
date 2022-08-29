import express from 'express';
import UserController from './controllers/user.controller';

const app = express();

app.use("/user", UserController.router);

app.listen(3000, () => {
    console.log("Server running at port:3000");
})