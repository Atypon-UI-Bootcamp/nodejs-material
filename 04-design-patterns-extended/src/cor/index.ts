import data from './data';
import Store from './store';

var skiShop = new Store("Steep and Deep", data);

var searchItem = "wax";
var results = skiShop.find(searchItem);

console.log(results);