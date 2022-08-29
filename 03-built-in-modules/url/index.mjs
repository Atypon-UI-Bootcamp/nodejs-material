import url from 'url';

const parsed = url.parse('http://www.example.com/path/to/file.html?search=term&page=2');

console.log(url.urlToHttpOptions(parsed));

console.log(url.pathToFileURL('../path/app/core'));

console.log(url.fileURLToPath(url.pathToFileURL('../path/app/core')));
