import { Inject, Service } from "typedi";
import DB from "../db";
import User from "./user";

@Service()
export default class UserService {

    @Inject()
    protected db: DB;

    async setup(): Promise<UserService> {
        await this.db.init('users');
        return this;
    }

    async list(): Promise<Array<User>> {
        return await this.db.get<User[]>('data');
    }

    async get(id: string): Promise<User> {
        return await this.db.get(`data.${id}`)
    }

    async add(user: User): Promise<void> {
        await this.db.insert(`data.${user.id}`, user);
    }
}