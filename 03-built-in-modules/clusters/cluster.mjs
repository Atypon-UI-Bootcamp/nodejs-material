import {createServer} from 'http';
import search from './search.mjs';
import cluster from 'cluster';
import os from 'os';
import throttle from './throttle.mjs';

if(cluster.isMaster) {
    const cpus = os.cpus().length;
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    throttle();
} else {
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
    process.stdout.on('error', function( err ) {
        if (err.code == "EPIPE") {
            process.exit(0);
        }
    });
    // console.log(`worker ${process.pid} started`);
}




