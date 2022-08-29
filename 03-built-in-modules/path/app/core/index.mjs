import JSONReader from "../utils/json-reader.mjs";
const reader = new JSONReader();
const json = await reader.async.get('somedata');

console.log(json);