interface ArrayInterface<Type> {
    // Properties: 
    // =============
    length: number;                             // for total number of items in array

    // Methods: 
    // =============
    push(item: Type): void;                     // to add items to end of array
    pop(): Type | undefined;                    // removed last item of array
    atIndex(index: number): Type | undefined;    // returns item at entered index 
    insertAt(item: Type, index: number): undefined | void;
}

class MyArray<Type> implements ArrayInterface<Type> {
    private items: Type[];
    length: number;
    constructor(items: Type[] = []) {
        this.items = items;
        this.length = this.items.length;
    }

    push(item: Type): void {
        this.items[this.length] = item;
        this.length++;
    }

    pop(): Type | undefined {
        if (this.length === 0) return undefined;
        const poppedItem: Type = this.items[this.length - 1];
        this.items.length = this.length - 1;
        this.length--;
        return poppedItem;
    }

    atIndex(index: number): Type | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this.items[index];
    }

    getType(): string {
        return typeof this.items[0];
    }

    insertAt(item: Type, index: number): undefined | void {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length) {
            this.push(item);
            return;
        }
        const newItems: Type[] = [];
        let itemInserted: boolean = false;
        for (let i: number = 0; i <= this.length; i++) {
            if (itemInserted) {
                newItems[i] = this.items[i-1];
            } else if (i === index) {
                newItems[i] = item;
                itemInserted = true;
            } else {
                newItems[i] = this.items[i];
            }
        }
        this.items = newItems;
        this.length++;
    }

    getValues(): Type[] {
        return this.items;
    }
}

export default MyArray;