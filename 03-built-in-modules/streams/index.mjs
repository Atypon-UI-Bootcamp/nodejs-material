import { createReadStream, createWriteStream,  rmSync } from "fs";
import { createServer } from "http";


const server = createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (req.url === '/read') {
        const file = new URL('./data.json', import.meta.url);
        const stream = createReadStream(file, { encoding: 'utf8' });
        stream.pipe(res);
    }else if (req.url === '/write') {
        const file = new URL('./data.json', import.meta.url);
        const stream = createReadStream(file, { encoding: 'utf8' });
        try {
            rmSync('./output.json');
        } catch (error) {
            
        }
        const ouputStream = createWriteStream('./output.json', { encoding: 'utf8' });
        stream.pipe(ouputStream);
    }
    res.end();
})

server.listen(3000);