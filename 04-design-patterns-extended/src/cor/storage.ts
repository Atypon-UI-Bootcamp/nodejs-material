export type Inventory = { name: string, qty: number };

export default class AtyponStorage {
    private _next: AtyponStorage;// ref to next storage
    
    constructor(
        public readonly name: string,
        public readonly inventory: Array<Inventory> = []) {
    }

    set next(storage: AtyponStorage) {
        this._next = storage;
    }

    lookInLocalInventory(name: string) {
        const index = this.inventory.map((item) => item.name).indexOf(name);
        return this.inventory[index];
    }

    find(name: string): string | Inventory {
        var foundItem = this.lookInLocalInventory(name);
        if (foundItem) {
            return {
                name: foundItem.name,
                qty: foundItem.qty,
            };
        } else if (this._next) {
            return this._next.find(name);
        } else {
            return `we do not carry ${name}`;
        }
    }
}
