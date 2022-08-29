import { readFile } from "fs/promises";
import process from "process";

const extraArgs = process.argv.slice(2, process.argv.length);
console.log(extraArgs);

// process.abort();

// console.log(process.cwd());
// console.log(process.env);

process.on('beforeExit', ()=>{
    console.log('About to exit');
})

process.on('exit', ()=>{
    console.log('did exit');
})

process.on('uncaughtException', (err)=>{
    // will be called if there is a code that throws and error
    console.log('Caught exception: ' + err); // will prevent the app from crashing...
})

process.on('unhandledRejection', (err)=>{
    // will be called if there is a promise error was not handled
    console.log('Caught rejection: ' + err); // will prevent the app from crashing...
})

readFile('./somfile.ts').then(()=>{
    console.log('File read');
});