import {readFile, writeFile} from 'fs/promises';
// in mjs we can use the async/await syntax
// we don't need to define the await within an async function

// we cannot access __dirname and __filename in mjs
// however, we can use the import.meta.url property instead
let template = await readFile(new URL('template.html', import.meta.url), 'utf8');
// the first argument in the URL is relative path or file name,
// the second argument is the base URL
console.log(process.argv0)
const data = {
    title: process.argv[2].split('=').pop(),
    body: 'This is my first post'
}

for (let key in data) {
    template = template.replace(`{${key}}`, data[key]);
}

await writeFile(new URL('./index.html', import.meta.url), template);

console.log('index.html created');