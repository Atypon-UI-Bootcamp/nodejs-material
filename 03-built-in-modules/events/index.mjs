import { EventEmitter } from "events";
import { readFile,mkdir, writeFile } from "fs/promises";
import { basename } from "path";


class FileSystemEmitter extends EventEmitter {}

const emitter = new FileSystemEmitter();


emitter.on("fileRead", (content, path) => {
    console.log(`${path} has been read`);
    setImmediate(async () => {
        console.log('async call!');
        // some how you want to cache the files
        try {
            await mkdir(new URL('./temp', import.meta.url).pathname, { recursive: true });
        } catch (error) {
            // folder already exists
        }

        try {
            await writeFile(new URL(`./temp/${basename(path?.pathname ?? path)}`, import.meta.url).pathname, content);
        } catch (error) {
        }

    })
    console.log('done');
});

emitter.prependListener("fileRead", (content, path) => {
    // logger
    console.log(`this will be triggered before the fileRead event`);
});


emitter.prependListener("fileRead", (content, path) => {
    //create temp dir
    console.log(`this will be triggered before the fileRead event`);
});

// emitter.once('fileDelete', (path) => {
//     console.log('file deleted');
// }); // will be called once

// emitter.prependOnceListener("fileRead", (path) => {
//     console.log(`this will be triggered before the fileRead event prependListener only once`);
// });

try {
    const filePath = new URL("data.json", import.meta.url);
    emitter.emit('fileRead', await readFile(filePath, "utf8"), filePath);
    // emitter.emit('fileDelete', filePath);
} catch (error) {
    
}

// console.log('====================================================');
// try {
//     const filePath = new URL("data2.json", import.meta.url);
//     emitter.emit('fileRead', await readFile(filePath, "utf8"), filePath);
//     emitter.emit('fileDelete', filePath);// will not be triggered
// } catch (error) {
    
// }




