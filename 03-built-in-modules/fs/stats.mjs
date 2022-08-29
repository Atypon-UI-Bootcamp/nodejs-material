import fs from 'fs';

export const statsSync = (file) => {
    try {
        const stats = fs.statSync(file);
        console.log(stats); // output: file stats file exists
    } catch (error) {
        console.log(error);
    }
}

import fs from 'fs';

export const statsAsync = async (file) => {
    try {
        const stats = await fs.promises.stat(file);
        console.log(stats); // output: file stats file exists
    } catch (error) {
        console.log(error);
    }
}