import { existsSync } from "fs";
import { mkdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { Service } from "typedi";

export interface JSONABLE {
    toJson(): object
}

@Service({ transient: true })
export default class DB {
    protected fileName?: string;
    private get filePath() {
        if (!this.fileName) {
            throw new Error("File name was not provided");
        }
        return resolve(this.jsonPath, `${this.fileName}.json`)
    };

    private jsonPath = resolve(__dirname, "json");

    async init(fileName: string) {
        this.fileName = fileName;
        await this.create()
    }

    protected async create() {
        try {
            if (!existsSync(this.jsonPath)) {
                await mkdir(this.jsonPath);
            }
            if (!existsSync(this.filePath)) {
                await writeFile(this.filePath, '{}', 'utf-8');
            }
        } catch (error) {

        }
    }

    protected async open(): Promise<any> {
        try {
            return JSON.parse(await readFile(this.filePath, "utf-8"))
        } catch (error) {

        }
        return {};
    }

    protected async save(data: any) {
        await writeFile(this.filePath, JSON.stringify(data, null, 4), "utf-8");
    }

    protected async getObjectFromKey(key: string, data: any): Promise<any> {
        type ObjectKey = keyof typeof data;
        const split = key.split(".");
        let item;
        while (split.length > 0) {
            const keySplit = split.shift() as ObjectKey;
            item = data[keySplit];
        }
        return item;
    }

    async get<T>(key: string): Promise<T> {
        const data = await this.open();
        return await this.getObjectFromKey(key, data);
    }

    async insert<T extends JSONABLE>(key: string, value: T) {
        const data = await this.open();
        const val = value.toJson();
        const split = key.split(".");
        if (split.length === 1) {
            data[split[0]] = val
        } else if (split.length === 2) {
            if (!data[split[0]]) {
                data[split[0]] = {
                }
            }
            data[split[0]][split[1]] = val
        }
        await this.save(data);
    }
}