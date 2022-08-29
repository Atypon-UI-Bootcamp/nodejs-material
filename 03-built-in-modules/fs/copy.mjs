import fs from 'fs';

export const syncCopy = (file, dist) => {
    try {
        fs.copyFileSync(file, dist);
    } catch (error) {
        console.log(error);
    }
}

import fs from 'fs';

export const asyncCopy = async (file, dist) => {
    try {
        await fs.promises.copyFile(file, dist);
    } catch (error) {
        console.log(error);
    }
}
