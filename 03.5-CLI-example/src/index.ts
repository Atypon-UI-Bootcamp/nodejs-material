import { writeFile } from "fs/promises";
import { resolve } from "path";
import process from "process";
import data from './data'

type CLIArgs = {
    help: boolean, 
    welcome: boolean,
    createJSON?: string
};

export default new class AtyponCLi {
    get args(): string[] {
        return process.argv.slice(2);
    }

    get jsonString() {
        return JSON.stringify(data, null, 4);
    }

    protected CLIArgs: CLIArgs = {help: false,welcome: false};

    constructor() {
        this.parseArgs();
    }

    protected parseArgs(): void {
        this.args.forEach(arg => {
            if (arg === "--help") {
                this.CLIArgs.help = true;
            } else if (arg === "--welcome") {
                this.CLIArgs.welcome = true;
            } else if (arg.startsWith("--createJSON")) {
                this.CLIArgs.createJSON = arg.replace("--createJSON=", "");
            }
        });
    }

    run() {
         if (this.CLIArgs.welcome) {
            this.printWelcome();
        } else if (this.CLIArgs.createJSON) {
            this.createJSON(this.CLIArgs.createJSON);
        } else {
            this.printHelp();
        }
    }

    printHelp(): void {
        console.log("Atypon CLI");
        console.log("Usage: atypon [options]");
        console.log("Options:");
        console.log("  --help              Prints this help");
        console.log("  --welcome           Prints a welcome message");
        console.log("  --createJSON=PATH   Creates a JSON file at PATH");
    }

    printWelcome(): void {
        console.log("Welcome to Atypon CLI");
    }

    async createJSON(filename: string): Promise<void> {
        console.log(`Creating JSON file at ${filename}`);
        await writeFile(resolve(filename), this.jsonString)
    }

}
