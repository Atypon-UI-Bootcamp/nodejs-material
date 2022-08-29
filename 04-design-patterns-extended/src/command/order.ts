import Stock from "./stock";

export interface Order {
    execute(): void
}



export class BuyStock implements Order {

    constructor(protected stock: Stock) { }

    public execute() {
        this.stock.buy();
    }
}


export class SellStock implements Order {

    constructor(protected stock: Stock) { }

    public execute() {
        this.stock.sell();
    }
}