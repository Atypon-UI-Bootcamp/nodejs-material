import Broker from "./broker";
import { BuyStock, SellStock } from "./order";
import Stock from "./stock";

const stock = new Stock();

const broker = new Broker();

broker.takeOrder(new BuyStock(stock), new SellStock(stock));
broker.takeOrder(new BuyStock(stock), new BuyStock(stock), new BuyStock(stock), new SellStock(stock));

broker.placeOrders();