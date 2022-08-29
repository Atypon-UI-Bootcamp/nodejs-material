interface Sortable {
    sort(items: number[]): number[];
}

class List {
    protected isSorted: boolean = false;
    constructor(protected _sortable: Sortable, protected items: number[]) { }

    set sortable(sortable: Sortable) {
        this.sortable = sortable;
        this.isSorted = false;
    }

    iterate() {
        if (!this.isSorted) {
            this.items = this.sortable.sort(this.items);
        }
        this.items.forEach(item => {
            console.log(item);
        })
    }
}

class DefaultSort implements Sortable {
    sort(items: number[]): number[] {
        return items.sort();
    }
}

class ReveresedSort implements Sortable {
    sort(items: number[]): number[] {
        return items.sort().reverse();
    }
}


new List(new DefaultSort(), [1, 2, 3]).iterate();