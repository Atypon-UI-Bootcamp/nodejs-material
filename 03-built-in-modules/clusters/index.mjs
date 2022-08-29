import {createServer} from 'http';
import search from './search.mjs';
import throttle from './throttle.mjs';

const server = createServer();

server.on('request', async (req, res) => {
    if(req.url === '/') {
        const data = await search('hear');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
    }
    res.end();
});

server.listen(3000);
throttle();