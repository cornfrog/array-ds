interface ArrayInterface<Type> {
    // Properties: 
    // =============
    length: number;                             // for total number of items in array

    // Methods: 
    // =============
    push(item: Type): void,                     // to add items to end of array
    pop(): Type | undefined,                    // removed last item of array
    atIndex(index: number): Type | undefined    // returns item at entered index 
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
        if(index < 0 || index >= this.length){
            return undefined;
        } 
        return this.items[index];
    }
}

export default MyArray;