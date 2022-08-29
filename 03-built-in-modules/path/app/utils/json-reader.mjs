import fs from 'fs';


export default class JSONReader {
    _async = false;

    get async() {
        this._async = true;
        return this;
    }

    async get(fileName) {
        const filePath = fileName; // get the file path

        try {
            if (this._async) {
                return JSON.parse(await fs.promises.readFile(filePath, 'utf8'))
            } else {
                return JSON.parse(fs.readFileSync(filePath, 'utf8'));
            }
        } catch (error) {
            console.log('Error with the json file');
        }
    }
}