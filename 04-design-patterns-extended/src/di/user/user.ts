import { randomUUID } from "crypto";
import type { JSONABLE } from "../db";
class User implements JSONABLE {
    public readonly id: string;

    constructor(public readonly name: string, public readonly email: string) {
        this.id = randomUUID();
    }

    toJson(): object {
        return {
            id: this.name,
            name: this.name,
            email: this.email
        }
    }
}

export default User;