class MyClass {
    private items: { [key: string]: Array<Function> } = {};
    public add(eventName: string, callback: Function): void {
        if (!this.items[eventName]) {
            this.items[eventName] = [];
        }
        this.items[eventName].push(callback);
    }

    public remove(eventName: string, callback: Function): void {
        if (!this.items[eventName]) {
            return;
        }
        this.items[eventName] = this.items[eventName].filter(obj => obj !== callback);
    }

    public removeAll(eventName: string): void {
        if (!this.items[eventName]) {
            return;
        }
        this.items[eventName] = [];
    }

    public notify(eventName: string, ...args: any[]): void {
        if (!this.items[eventName]) {
            return;
        }
        this.items[eventName].forEach(callback => {
            callback(...args);
        });
    }
}