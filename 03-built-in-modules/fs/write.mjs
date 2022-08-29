import fs from 'fs';

export const writeFileSync = (file) => {
    try {
        const stats = fs.writeFileSync(file, 'content');
        console.log(stats); // output: file stats file exists
    } catch (error) {
        console.log(error);
    }
}

import fs from 'fs';

export const writeFileAsync = async (file) => {
    try {
        await fs.promises.writeFile(file, 'content');
        
    } catch (error) {
        console.log(error);
    }
}

