import { randomUUID } from "crypto";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

export default class User {

    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly id: string = randomUUID(),
    ) { }

    private static path = resolve(__dirname, "..", "data", "users.json");

    private static async read(): Promise<any> {
        return JSON.parse(await readFile(this.path, "utf-8"))
    }

    private static async write(data: object): Promise<any> {
        await writeFile(this.path, JSON.stringify(data, null, 4), "utf-8")
    }

    static async all() {
        return await this.read()
    }

    static async get(id: string) {
        const { data } = await this.read();
        return data[id];
    }

    static async create(name: string, email: string) {
        const user = new User(name, email);
        const data = await this.read();
        data.data[user.id] = user;
        await this.write(data);
    }
}