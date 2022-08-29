import fs from 'fs';

export const syncRead = (file) => {
    try {
        const data = fs.readFileSync(file, 'utf8');
        console.log(data); // output: file contents
    } catch (error) {
        console.log(error);
    }
}

import fs from 'fs';

export const asyncRead = async (file) => {
    try {
        const content = await fs.promises.readFile(file, 'utf8');
        console.log(content)
    } catch (error) {
        console.log(error);
    }
}
