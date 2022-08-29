import fs from 'fs';
export default class FileSystem {
    constructor() {
        this.fs = fs;
    }
    readFile(fileName) {
        return this.fs.readFileSync(fileName, 'utf8');
    }
    writeFile(fileName, data) {
        return this.fs.writeFileSync(fileName, data);
    }
}

