import AtyponStorage, { Inventory } from "./storage";

export default class Store {
    protected storage: AtyponStorage;

    constructor(
        protected name: string,
        inventory: { [key: string]: Array<Inventory> }) {
        this.name = name;

        var floor = new AtyponStorage("store floor", inventory.floor);
        var backroom = new AtyponStorage("store backroom", inventory.backroom);
        var localStore = new AtyponStorage("nearby store", inventory.localStore);
        var warehouse = new AtyponStorage("warehouse", inventory.warehouse);

        floor.next = backroom;
        backroom.next = localStore;
        localStore.next = warehouse;

        this.storage = floor;
    }

    find(name: string) {
        return this.storage.find(name);
    }
}