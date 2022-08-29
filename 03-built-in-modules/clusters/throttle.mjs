import {request} from 'http';

export default function throttle() {
    setTimeout(()=>{
        
    }, 0);
    console.time("logger");
    let promises = [];
    let i = 0;
    while (i < 30) {
        promises.push(new Promise((resolve, reject) => {
            const req = request({
                hostname: 'localhost',
                port: 3000,
                path: '/'
            }, (res) => {
                res.setEncoding('utf8');
            })
            req.on('response', (chunk) => {
                resolve();
            })
            req.end();
        }))
       
        i++;
    }

    Promise.all(promises).then(() => {
        console.timeEnd("logger");
    })
}
