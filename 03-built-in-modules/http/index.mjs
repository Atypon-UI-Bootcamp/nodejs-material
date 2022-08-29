import { createServer, IncomingMessage } from "http";

class CustomIncomingMessage extends IncomingMessage {
    get isApi() {
        return this.url.startsWith('/api/');
    }
}

const options = {
    IncomingMessage: CustomIncomingMessage
} // optional

const server = createServer(options);
server.on('request', (req, res) => {
    // handle request
    if(req.isApi ) {
        console.log('API request');
    }
    res.end("Hello worlds");
})

server.listen(3000);