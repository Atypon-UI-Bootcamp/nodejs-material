import FileSystem from './fs.mjs';
import {action, run} from './utils.mjs';

action();
run();

const file = new FileSystem().readFile('index.mjs');

console.log(file)
