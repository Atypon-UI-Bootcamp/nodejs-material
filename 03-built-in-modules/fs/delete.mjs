import fs from 'fs';

export const syncDelete = (file) => {
    try {
        fs.unlinkSync(file);
    } catch (error) {
        console.log(error);
    }
}

import fs from 'fs';

export const asyncDelete = async (file) => {
    try {
        await fs.promises.unlink(file);
    } catch (error) {
        console.log(error);
    }
}
