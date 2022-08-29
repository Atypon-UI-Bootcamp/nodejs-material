export default class Stock {
    private name = "ABC";
    private quantity = 10;

    public buy() {
        console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ]bought");
    }
    public sell() {
        console.log("Stock [ Name: " + this.name + ",  Quantity: " + this.quantity + " ]sold");
    }
} 